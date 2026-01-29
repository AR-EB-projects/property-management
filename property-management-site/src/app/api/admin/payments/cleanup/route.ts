import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
    const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24h ago

    const result = await prisma.payment.deleteMany({
        where: {
            status: "PENDING",
            createdAt: { lt: cutoff },
            provider: "stripe",
        },
    });

    return NextResponse.json({ deleted: result.count });
}
