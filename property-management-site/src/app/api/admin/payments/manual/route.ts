import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            apartmentId,
            amount,
            currency = "bgn",
            periodYear,
            periodMonth,
            method = "easypay",
            note,
        } = body;

        if (!apartmentId || !amount) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const aptId = Number(apartmentId);
        const amt = Number(amount);

        if (!Number.isFinite(aptId) || !Number.isFinite(amt) || amt <= 0) {
            return NextResponse.json({ message: "Invalid apartmentId or amount" }, { status: 400 });
        }

        const apartment = await prisma.apartment.findUnique({ where: { id: aptId } });
        if (!apartment) {
            return NextResponse.json({ message: "Apartment not found" }, { status: 404 });
        }

        const payment = await prisma.payment.create({
            data: {
                apartmentId: aptId,
                provider: "manual",
                status: "COMPLETED",
                amount: amt,
                currency,
                periodYear: periodYear ? Number(periodYear) : null,
                periodMonth: periodMonth ? Number(periodMonth) : null,
                // if you don't have fields for method/note yet, remove these two:
                // method,
                // note,
            },
        });

        return NextResponse.json(payment);
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ message: err.message || "Failed to create payment" }, { status: 500 });
    }
}
