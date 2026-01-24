import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { apartmentId, amount, periodYear, periodMonth } = body;

        if (!apartmentId || !amount) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Get apartment details
        const apartment = await prisma.apartment.findUnique({
            where: { id: parseInt(apartmentId) },
            include: {
                block: true
            }
        });

        if (!apartment) {
            return NextResponse.json(
                { message: "Apartment not found" },
                { status: 404 }
            );
        }

        // Create pending payment record
        const payment = await prisma.payment.create({
            data: {
                apartmentId: parseInt(apartmentId),
                provider: "stripe",
                status: "pending",
                amount: parseInt(amount),
                currency: "usd",
                periodYear: periodYear ? parseInt(periodYear) : null,
                periodMonth: periodMonth ? parseInt(periodMonth) : null,
            },
        });

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: `Payment for Apartment ${apartment.number}`,
                            description: `${apartment.block.name || apartment.block.address} - ${periodMonth ? `Period: ${periodMonth}/${periodYear}` : 'Maintenance Fee'}`,
                        },
                        unit_amount: parseInt(amount), // Amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${req.headers.get("origin")}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get("origin")}/payment/cancel`,
            metadata: {
                paymentId: payment.id.toString(),
                apartmentId: apartmentId.toString(),
            },
        });

        // Update payment with Stripe session ID
        await prisma.payment.update({
            where: { id: payment.id },
            data: { stripeSessionId: session.id },
        });

        return NextResponse.json({
            sessionId: session.id,
            url: session.url
        });
    } catch (error: any) {
        console.error("Error creating checkout session:", error);
        return NextResponse.json(
            { message: error.message || "Failed to create checkout session" },
            { status: 500 }
        );
    }
}