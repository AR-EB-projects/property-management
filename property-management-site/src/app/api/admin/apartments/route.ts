import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all apartments (with optional blockId filter)
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const blockId = searchParams.get("blockId");

        const apartments = await prisma.apartment.findMany({
            where: blockId ? { blockId: parseInt(blockId) } : undefined,
            include: {
                block: {
                    select: {
                        id: true,
                        address: true,
                        name: true
                    }
                },
                _count: {
                    select: { payments: true }
                }
            },
            orderBy: [
                { blockId: "asc" },
                { number: "asc" }
            ]
        });

        return NextResponse.json(apartments);
    } catch (error) {
        console.error("Error fetching apartments:", error);
        return NextResponse.json(
            { message: "Failed to fetch apartments" },
            { status: 500 }
        );
    }
}

// POST create new apartment
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            blockId,
            number,
            floor,
            entrance,
            ownerName,
            ownerPhone,
            ownerEmail
        } = body;

        if (!blockId || !number) {
            return NextResponse.json(
                { message: "Block ID and apartment number are required" },
                { status: 400 }
            );
        }

        // Check if block exists
        const block = await prisma.block.findUnique({
            where: { id: parseInt(blockId) }
        });

        if (!block) {
            return NextResponse.json(
                { message: "Block not found" },
                { status: 404 }
            );
        }

        const apartment = await prisma.apartment.create({
            data: {
                blockId: parseInt(blockId),
                number,
                floor: floor ? parseInt(floor) : null,
                entrance,
                ownerName,
                ownerPhone,
                ownerEmail,
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

        return NextResponse.json(apartment, { status: 201 });
    } catch (error: any) {
        console.error("Error creating apartment:", error);

        // Handle unique constraint violation
        if (error.code === "P2002") {
            return NextResponse.json(
                { message: "An apartment with this number and entrance already exists in this block" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "Failed to create apartment" },
            { status: 500 }
        );
    }
}