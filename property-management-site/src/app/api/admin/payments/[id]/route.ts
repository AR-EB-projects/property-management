import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET single payment
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const payment = await prisma.payment.findUnique({
            where: { id: parseInt(id) },
            include: {
                apartment: {
                    include: {
                        block: true
                    }
                }
            }
        });

        if (!payment) {
            return NextResponse.json(
                { message: "Payment not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(payment);
    } catch (error) {
        console.error("Error fetching payment:", error);
        return NextResponse.json(
            { message: "Failed to fetch payment" },
            { status: 500 }
        );
    }
}

// PUT update payment
export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await req.json();
        const {
            status,
            amount,
            currency,
            periodYear,
            periodMonth
        } = body;

        const payment = await prisma.payment.update({
            where: { id: parseInt(id) },
            data: {
                status,
                amount: amount ? parseInt(amount) : undefined,
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

        return NextResponse.json(payment);
    } catch (error) {
        console.error("Error updating payment:", error);
        return NextResponse.json(
            { message: "Failed to update payment" },
            { status: 500 }
        );
    }
}

// DELETE payment
export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.payment.delete({
            where: { id: parseInt(id) }
        });

        return NextResponse.json({ message: "Payment deleted successfully" });
    } catch (error) {
        console.error("Error deleting payment:", error);
        return NextResponse.json(
            { message: "Failed to delete payment" },
            { status: 500 }
        );
    }
}