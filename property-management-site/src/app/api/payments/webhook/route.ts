import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";

export async function POST(req: Request) {
    const body = await req.text();
    const headersList = await headers();
    const signature = headersList.get("stripe-signature");

    if (!signature) {
        return NextResponse.json(
            { message: "No signature" },
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err: any) {
        console.error("Webhook signature verification failed:", err.message);
        return NextResponse.json(
            { message: `Webhook Error: ${err.message}` },
            { status: 400 }
        );
    }

    // Handle the event
    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;

            // Update payment status to completed
            if (session.metadata?.paymentId) {
                await prisma.payment.update({
                    where: { id: parseInt(session.metadata.paymentId) },
                    data: {
                        status: "completed",
                    },
                });
            }
            break;
        }

        case "checkout.session.expired": {
            const session = event.data.object as Stripe.Checkout.Session;

            // Update payment status to failed
            if (session.metadata?.paymentId) {
                await prisma.payment.update({
                    where: { id: parseInt(session.metadata.paymentId) },
                    data: {
                        status: "failed",
                    },
                });
            }
            break;
        }

        case "charge.refunded": {
            const charge = event.data.object as Stripe.Charge;

            // Find payment by session ID and update to refunded
            const session = await stripe.checkout.sessions.retrieve(
                charge.metadata?.sessionId || ""
            );

            if (session.metadata?.paymentId) {
                await prisma.payment.update({
                    where: { id: parseInt(session.metadata.paymentId) },
                    data: {
                        status: "refunded",
                    },
                });
            }
            break;
        }

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
}