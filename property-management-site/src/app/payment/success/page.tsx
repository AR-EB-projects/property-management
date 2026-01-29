"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function PaymentSuccessInner() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");

    return (
        <div style={{ maxWidth: 600, margin: "80px auto", padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
            <h1 style={{ color: "#28a745", marginBottom: 16 }}>Плащането е успешно!</h1>
            <p style={{ fontSize: 18, color: "#666", marginBottom: 30 }}>
                Благодарим Ви за плащането. Вашата транзакция приключи успешно.
            </p>

            {sessionId && (
                <p style={{ fontSize: 14, color: "#999", marginBottom: 30 }}>
                    ID на сесията: {sessionId}
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
                    fontWeight: "bold",
                }}
            >
                Направи друго плащане
            </Link>
        </div>
    );
}

export default function PaymentSuccess() {
    return (
        <Suspense
            fallback={
                <div style={{ maxWidth: 600, margin: "80px auto", padding: 20, textAlign: "center" }}>
                    <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
                    <h1 style={{ color: "#28a745", marginBottom: 16 }}>Плащането е успешно!</h1>
                    <p style={{ fontSize: 18, color: "#666", marginBottom: 30 }}>
                        Зареждам информацията за плащането…
                    </p>
                    <Link
                        href="/pay"
                        style={{
                            display: "inline-block",
                            padding: "12px 24px",
                            backgroundColor: "#007bff",
                            color: "white",
                            textDecoration: "none",
                            borderRadius: 4,
                            fontWeight: "bold",
                        }}
                    >
                        Направи друго плащане
                    </Link>
                </div>
            }
        >
            <PaymentSuccessInner />
        </Suspense>
    );
}
