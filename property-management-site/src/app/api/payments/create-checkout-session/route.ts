import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

const FIXED_AMOUNT_EUR_CENTS = 600;
const PROVIDER = "stripe";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { apartmentId, periodMonth, periodYear } = body;

        if (!apartmentId || !periodMonth || !periodYear) {
            return NextResponse.json(
                { message: "Липсват задължителни полета" },
                { status: 400 }
            );
        }

        const aptId = Number(apartmentId);
        const pMonth = Number(periodMonth);
        const pYear = Number(periodYear);

        // 1️⃣ Ensure apartment exists
        const apartment = await prisma.apartment.findUnique({
            where: { id: aptId },
            include: { block: true },
        });

        if (!apartment) {
            return NextResponse.json(
                { message: "Апартаментът не е намерен" },
                { status: 404 }
            );
        }

        // 2️⃣ Check for existing payment for same apartment + period + provider
        const existingPayment = await prisma.payment.findFirst({
            where: {
                apartmentId: aptId,
                provider: PROVIDER,
                periodMonth: pMonth,
                periodYear: pYear,
            },
            orderBy: { createdAt: "desc" },
        });

        // 🚫 Already paid → block duplicate
        if (existingPayment?.status === "COMPLETED") {
            return NextResponse.json(
                { message: "Този период вече е платен." },
                { status: 409 }
            );
        }

        // 3️⃣ Create OR reuse payment row (avoids UNIQUE constraint crash)
        const payment =
            existingPayment
                ? await prisma.payment.update({
                    where: { id: existingPayment.id },
                    data: {
                        status: "PENDING",
                        amount: FIXED_AMOUNT_EUR_CENTS,
                        currency: "eur",
                    },
                })
                : await prisma.payment.create({
                    data: {
                        apartmentId: aptId,
                        provider: PROVIDER,
                        status: "PENDING",
                        amount: FIXED_AMOUNT_EUR_CENTS,
                        currency: "eur",
                        periodMonth: pMonth,
                        periodYear: pYear,
                    },
                });

        // 4️⃣ Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "eur",
                        unit_amount: FIXED_AMOUNT_EUR_CENTS,
                        product_data: {
                            name: `Такса поддръжка – Апартамент ${apartment.number}`,
                            description: `${
                                apartment.block.name || apartment.block.address
                            } • ${pMonth}/${pYear}`,
                        },
                    },
                    quantity: 1,
                },
            ],
            success_url: `${req.headers.get("origin")}/payment/success`,
            cancel_url: `${req.headers.get("origin")}/payment/cancel`,
            metadata: {
                paymentId: payment.id.toString(),
                apartmentId: aptId.toString(),
                periodMonth: pMonth.toString(),
                periodYear: pYear.toString(),
            },
        });

        // 5️⃣ Save Stripe session ID
        await prisma.payment.update({
            where: { id: payment.id },
            data: { stripeSessionId: session.id },
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error("Stripe checkout error:", err);
        return NextResponse.json(
            { message: "Failed to create checkout session" },
            { status: 500 }
        );
    }
}