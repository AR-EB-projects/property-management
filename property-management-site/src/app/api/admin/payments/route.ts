import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PaymentStatus } from "@prisma/client";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);

        const apartmentIdParam = searchParams.get("apartmentId");
        const blockIdParam = searchParams.get("blockId");
        const statusParam = searchParams.get("status");

        const toOptionalInt = (value: string | null): number | undefined => {
            if (value == null || value.trim() === "") return undefined;
            const parsed = Number(value);
            return Number.isFinite(parsed) ? parsed : undefined;
        };

        const toOptionalPaymentStatus = (
            value: string | null
        ): PaymentStatus | undefined => {
            if (value == null || value.trim() === "") return undefined;
            return (Object.values(PaymentStatus) as string[]).includes(value)
                ? (value as PaymentStatus)
                : undefined;
        };

        const apartmentId = toOptionalInt(apartmentIdParam);
        const blockId = toOptionalInt(blockIdParam);
        const status = toOptionalPaymentStatus(statusParam);

        const where = {
            ...(apartmentId !== undefined ? { apartmentId } : {}),
            ...(status !== undefined ? { status } : {}),
            ...(blockId !== undefined ? { apartment: { blockId } } : {}),
        };

        const payments = await prisma.payment.findMany({
            where,
            include: {
                apartment: {
                    include: {
                        block: {
                            select: {
                                id: true,
                                address: true,
                                name: true,
                            },
                        },
                    },
                },
            },
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(payments);
    } catch (error) {
        console.error("Error fetching payments:", error);
        return NextResponse.json(
            { message: "Неуспешно извличане на плащания" },
            { status: 500 }
        );
    }
}

// ... existing code ...
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
                { message: "Липсват задължителни полета" },
                { status: 400 }
            );
        }

        // Check if apartment exists
        const apartment = await prisma.apartment.findUnique({
            where: { id: parseInt(apartmentId) }
        });

        if (!apartment) {
            return NextResponse.json(
                { message: "Апартаментът не е намерен" },
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
            { message: "Неуспешно създаване на плащане" },
            { status: 500 }
        );
    }
}