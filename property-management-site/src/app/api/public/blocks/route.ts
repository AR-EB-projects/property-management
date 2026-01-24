import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const blocks = await prisma.block.findMany({
            where: { isActive: true },
            select: {
                id: true,
                address: true,
                name: true,
            },
            orderBy: { address: "asc" }
        });

        return NextResponse.json(blocks);
    } catch (error) {
        console.error("Error fetching blocks:", error);
        return NextResponse.json(
            { message: "Failed to fetch blocks" },
            { status: 500 }
        );
    }
}