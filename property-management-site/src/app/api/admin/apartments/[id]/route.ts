import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET single apartment
export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const apartment = await prisma.apartment.findUnique({
            where: { id: parseInt(params.id) },
            include: {
                block: true,
                payments: {
                    orderBy: { createdAt: "desc" }
                }
            }
        });

        if (!apartment) {
            return NextResponse.json(
                { message: "Apartment not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(apartment);
    } catch (error) {
        console.error("Error fetching apartment:", error);
        return NextResponse.json(
            { message: "Failed to fetch apartment" },
            { status: 500 }
        );
    }
}

// PUT update apartment
export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await req.json();
        const {
            number,
            floor,
            entrance,
            ownerName,
            ownerPhone,
            ownerEmail,
            isActive
        } = body;

        const apartment = await prisma.apartment.update({
            where: { id: parseInt(params.id) },
            data: {
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
                { message: "An apartment with this number and entrance already exists in this block" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "Failed to update apartment" },
            { status: 500 }
        );
    }
}

// DELETE apartment
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Check if apartment has payments
        const paymentCount = await prisma.payment.count({
            where: { apartmentId: parseInt(params.id) }
        });

        if (paymentCount > 0) {
            return NextResponse.json(
                { message: "Cannot delete apartment with payment history. Deactivate it instead." },
                { status: 400 }
            );
        }

        await prisma.apartment.delete({
            where: { id: parseInt(params.id) }
        });

        return NextResponse.json({ message: "Apartment deleted successfully" });
    } catch (error) {
        console.error("Error deleting apartment:", error);
        return NextResponse.json(
            { message: "Failed to delete apartment" },
            { status: 500 }
        );
    }
}