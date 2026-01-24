import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const blockId = searchParams.get("blockId");

        if (!blockId) {
            return NextResponse.json(
                { message: "blockId is required" },
                { status: 400 }
            );
        }

        const apartments = await prisma.apartment.findMany({
            where: {
                blockId: parseInt(blockId),
                isActive: true
            },
            select: {
                id: true,
                number: true,
                entrance: true,
            },
            orderBy: { number: "asc" }
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