// src/app/payment/cancel/page.tsx
"use client";

import Link from "next/link";

export default function PaymentCancel() {
    return (
        <div style={{ maxWidth: 600, margin: "80px auto", padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>❌</div>
            <h1 style={{ color: "#dc3545", marginBottom: 16 }}>Плащането е отказано</h1>
            <p style={{ fontSize: 18, color: "#666", marginBottom: 30 }}>
                Вашето плащане беше отказано. Не са направени удръжки по Вашата сметка.
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
                    fontWeight: "bold"
                }}
            >
                Опитай отново
            </Link>
        </div>
    );
}