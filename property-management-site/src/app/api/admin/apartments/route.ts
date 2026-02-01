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
            { message: "Неуспешно извличане на апартаменти" },
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
            payNumber,
            number,
            floor,
            entrance,
            ownerName,
            ownerPhone,
            ownerEmail
        } = body;

        if (!blockId || !number || !payNumber) {
            return NextResponse.json(
                { message: "ID на блок, номер на апартамент и платежен номер са задължителни" },
                { status: 400 }
            );
        }

        // Check if block exists
        const block = await prisma.block.findUnique({
            where: { id: parseInt(blockId) }
        });

        if (!block) {
            return NextResponse.json(
                { message: "Блокът не е намерен" },
                { status: 404 }
            );
        }

        const apartment = await prisma.apartment.create({
            data: {
                blockId: parseInt(blockId),
                payNumber,
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
                { message: "Апартамент с този номер и вход вече съществува в този блок" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "Неуспешно създаване на апартамент" },
            { status: 500 }
        );
    }
}