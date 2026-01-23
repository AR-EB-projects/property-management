import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all payments (with optional filters)
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const apartmentId = searchParams.get("apartmentId");
        const blockId = searchParams.get("blockId");
        const status = searchParams.get("status");

        const payments = await prisma.payment.findMany({
            where: {
                apartmentId: apartmentId ? parseInt(apartmentId) : undefined,
                status: status || undefined,
                apartment: blockId ? {
                    blockId: parseInt(blockId)
                } : undefined
            },
            include: {
                apartment: {
                    include: {
                        block: {
                            select: {
                                id: true,
                                address: true,
                                name: true
                            }
                        }
                    }
                }
            },
            orderBy: { createdAt: "desc" }
        });

        return NextResponse.json(payments);
    } catch (error) {
        console.error("Error fetching payments:", error);
        return NextResponse.json(
            { message: "Failed to fetch payments" },
            { status: 500 }
        );
    }
}

// POST create new payment (manual payment record)
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            apartmentId,
            provider,
            status,
            amount,
            currency,
            periodYear,
            periodMonth
        } = body;

        if (!apartmentId || !provider || !status || !amount || !currency) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Check if apartment exists
        const apartment = await prisma.apartment.findUnique({
            where: { id: parseInt(apartmentId) }
        });

        if (!apartment) {
            return NextResponse.json(
                { message: "Apartment not found" },
                { status: 404 }
            );
        }

        const payment = await prisma.payment.create({
            data: {
                apartmentId: parseInt(apartmentId),
                provider,
                status,
                amount: parseInt(amount),
                currency,
                periodYear: periodYear ? parseInt(periodYear) : null,
                periodMonth: periodMonth ? parseInt(periodMonth) : null,
            },
            include: {
                apartment: {
                    include: {
                        block: {
                            select: {
                                id: true,
                                address: true,
                                name: true
                            }
                        }
                    }
                }
            }
        });

        return NextResponse.json(payment, { status: 201 });
    } catch (error) {
        console.error("Error creating payment:", error);
        return NextResponse.json(
            { message: "Failed to create payment" },
            { status: 500 }
        );
    }
}