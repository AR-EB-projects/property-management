import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET single block
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const block = await prisma.block.findUnique({
            where: { id: parseInt(id) },
            include: {
                apartments: {
                    orderBy: { number: "asc" }
                }
            }
        });

        if (!block) {
            return NextResponse.json(
                { message: "Блокът не е намерен" },
                { status: 404 }
            );
        }

        return NextResponse.json(block);
    } catch (error) {
        console.error("Error fetching block:", error);
        return NextResponse.json(
            { message: "Неуспешно извличане на блок" },
            { status: 500 }
        );
    }
}

// PUT update block
export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await req.json();
        const { address, name, floors, contactName, contactPhone, contactEmail, isActive } = body;

        const block = await prisma.block.update({
            where: { id: parseInt(id) },
            data: {
                address,
                name,
                floors: floors ? parseInt(floors) : null,
                contactName,
                contactPhone,
                contactEmail,
                isActive,
            },
        });

        return NextResponse.json(block);
    } catch (error) {
        console.error("Error updating block:", error);
        return NextResponse.json(
            { message: "Неуспешно обновяване на блок" },
            { status: 500 }
        );
    }
}

// DELETE block
export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        // Check if block has apartments
        const apartmentCount = await prisma.apartment.count({
            where: { blockId: parseInt(id) }
        });

        if (apartmentCount > 0) {
            return NextResponse.json(
                { message: "Не може да изтриете блок с апартаменти. Първо изтрийте апартаментите." },
                { status: 400 }
            );
        }

        await prisma.block.delete({
            where: { id: parseInt(id) }
        });

        return NextResponse.json({ message: "Блокът е изтрит успешно" });
    } catch (error) {
        console.error("Error deleting block:", error);
        return NextResponse.json(
            { message: "Неуспешно изтриване на блок" },
            { status: 500 }
        );
    }
}