import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET single apartment
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const apartment = await prisma.apartment.findUnique({
            where: { id: parseInt(id) },
            include: {
                block: true,
                payments: {
                    orderBy: { createdAt: "desc" }
                }
            }
        });

        if (!apartment) {
            return NextResponse.json(
                { message: "Апартаментът не е намерен" },
                { status: 404 }
            );
        }

        return NextResponse.json(apartment);
    } catch (error) {
        console.error("Error fetching apartment:", error);
        return NextResponse.json(
            { message: "Неуспешно извличане на апартамент" },
            { status: 500 }
        );
    }
}

// PUT update apartment
export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await req.json();
        const {
            payNumber,
            number,
            floor,
            entrance,
            ownerName,
            ownerPhone,
            ownerEmail,
            isActive
        } = body;

        const apartment = await prisma.apartment.update({
            where: { id: parseInt(id) },
            data: {
                payNumber,
                number,
                floor: floor ? parseInt(floor) : null,
                entrance,
                ownerName,
                ownerPhone,
                ownerEmail,
                isActive,
            },
            include: {
                block: {
                    select: {
                        id: true,
                        address: true,
                        name: true
                    }
                }
            }
        });

        return NextResponse.json(apartment);
    } catch (error: any) {
        console.error("Error updating apartment:", error);

        // Handle unique constraint violation
        if (error.code === "P2002") {
            return NextResponse.json(
                { message: "Апартамент с този номер и вход вече съществува в този блок" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "Неуспешно обновяване на апартамент" },
            { status: 500 }
        );
    }
}

// DELETE apartment
export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        // Check if apartment has payments
        const paymentCount = await prisma.payment.count({
            where: { apartmentId: parseInt(id) }
        });

        if (paymentCount > 0) {
            return NextResponse.json(
                { message: "Не може да изтриете апартамент с история на плащанията. Вместо това го деактивирайте." },
                { status: 400 }
            );
        }

        await prisma.apartment.delete({
            where: { id: parseInt(id) }
        });

        return NextResponse.json({ message: "Апартаментът е изтрит успешно" });
    } catch (error) {
        console.error("Error deleting apartment:", error);
        return NextResponse.json(
            { message: "Неуспешно изтриване на апартамент" },
            { status: 500 }
        );
    }
}