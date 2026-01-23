import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET single block
export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const block = await prisma.block.findUnique({
            where: { id: parseInt(params.id) },
            include: {
                apartments: {
                    orderBy: { number: "asc" }
                }
            }
        });

        if (!block) {
            return NextResponse.json(
                { message: "Block not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(block);
    } catch (error) {
        console.error("Error fetching block:", error);
        return NextResponse.json(
            { message: "Failed to fetch block" },
            { status: 500 }
        );
    }
}

// PUT update block
export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await req.json();
        const { address, name, floors, contactName, contactPhone, contactEmail, isActive } = body;

        const block = await prisma.block.update({
            where: { id: parseInt(params.id) },
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
            { message: "Failed to update block" },
            { status: 500 }
        );
    }
}

// DELETE block
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Check if block has apartments
        const apartmentCount = await prisma.apartment.count({
            where: { blockId: parseInt(params.id) }
        });

        if (apartmentCount > 0) {
            return NextResponse.json(
                { message: "Cannot delete block with apartments. Delete apartments first." },
                { status: 400 }
            );
        }

        await prisma.block.delete({
            where: { id: parseInt(params.id) }
        });

        return NextResponse.json({ message: "Block deleted successfully" });
    } catch (error) {
        console.error("Error deleting block:", error);
        return NextResponse.json(
            { message: "Failed to delete block" },
            { status: 500 }
        );
    }
}