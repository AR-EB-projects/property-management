import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all blocks
export async function GET() {
    try {
        const blocks = await prisma.block.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                _count: {
                    select: { apartments: true }
                }
            }
        });
        return NextResponse.json(blocks);
    } catch (error) {
        console.error("Error fetching blocks:", error);
        return NextResponse.json(
            { message: "Неуспешно извличане на блокове" },
            { status: 500 }
        );
    }
}

// POST create new block
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { address, name, floors, contactName, contactPhone, contactEmail } = body;

        if (!address) {
            return NextResponse.json(
                { message: "Адресът е задължителен" },
                { status: 400 }
            );
        }

        const block = await prisma.block.create({
            data: {
                address,
                name,
                floors: floors ? parseInt(floors) : null,
                contactName,
                contactPhone,
                contactEmail,
            },
        });

        return NextResponse.json(block, { status: 201 });
    } catch (error) {
        console.error("Error creating block:", error);
        return NextResponse.json(
            { message: "Неуспешно създаване на блок" },
            { status: 500 }
        );
    }
}