"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentSuccess() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");

    return (
        <div style={{ maxWidth: 600, margin: "80px auto", padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
            <h1 style={{ color: "#28a745", marginBottom: 16 }}>Payment Successful!</h1>
            <p style={{ fontSize: 18, color: "#666", marginBottom: 30 }}>
                Thank you for your payment. Your transaction has been completed successfully.
            </p>

            {sessionId && (
                <p style={{ fontSize: 14, color: "#999", marginBottom: 30 }}>
                    Session ID: {sessionId}
                </p>
            )}

            <Link
                href="/pay"
                style={{
                    display: "inline-block",
                    padding: "12px 24px",
                    backgroundColor: "#007bff",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: 4,
                    fontWeight: "bold"
                }}
            >
                Make Another Payment
            </Link>
        </div>
    );
}