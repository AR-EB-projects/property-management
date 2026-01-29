"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminHome() {
    const router = useRouter();
    const [stats, setStats] = useState({
        blocks: 0,
        apartments: 0,
        payments: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            setLoading(true);

            try {
                // 1) ✅ Wait for cleanup first
                await fetch("/api/admin/payments/cleanup", { method: "POST" });

                // 2) ✅ Then fetch stats
                const [blocksRes, apartmentsRes, paymentsRes] = await Promise.all([
                    fetch("/api/admin/blocks"),
                    fetch("/api/admin/apartments"),
                    fetch("/api/admin/payments"),
                ]);

                const blocks = await blocksRes.json();
                const apartments = await apartmentsRes.json();
                const payments = await paymentsRes.json();

                // Support both shapes (array or {items: []})
                const blocksList = Array.isArray(blocks) ? blocks : blocks.blocks || [];
                const apartmentsList = Array.isArray(apartments) ? apartments : apartments.apartments || [];
                const paymentsList = Array.isArray(payments) ? payments : payments.payments || [];

                setStats({
                    blocks: blocksList.length,
                    apartments: apartmentsList.length,
                    payments: paymentsList.length,
                });
            } catch (err) {
                console.error("Failed to init admin dashboard:", err);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, []);

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    };

    return (
        <div
            style={{
                padding: 20,
                paddingTop: 100,
                maxWidth: 1200,
                margin: "0 auto",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 40,
                }}
            >
                <h1>Администрация на имоти</h1>
                <button
                    onClick={handleLogout}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer",
                    }}
                >
                    Изход
                </button>
            </div>

            {loading ? (
                <p>Зареждане...</p>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: 20,
                        marginBottom: 40,
                    }}
                >
                    <div
                        style={{
                            padding: 30,
                            backgroundColor: "#007bff",
                            color: "white",
                            borderRadius: 8,
                            textAlign: "center",
                        }}
                    >
                        <h2 style={{ fontSize: 48, margin: 0 }}>{stats.blocks}</h2>
                        <p style={{ fontSize: 18, margin: "10px 0 0 0" }}>Общо блокове</p>
                    </div>

                    <div
                        style={{
                            padding: 30,
                            backgroundColor: "#28a745",
                            color: "white",
                            borderRadius: 8,
                            textAlign: "center",
                        }}
                    >
                        <h2 style={{ fontSize: 48, margin: 0 }}>{stats.apartments}</h2>
                        <p style={{ fontSize: 18, margin: "10px 0 0 0" }}>Общо апартаменти</p>
                    </div>

                    <div
                        style={{
                            padding: 30,
                            backgroundColor: "#ffc107",
                            color: "white",
                            borderRadius: 8,
                            textAlign: "center",
                        }}
                    >
                        <h2 style={{ fontSize: 48, margin: 0 }}>{stats.payments}</h2>
                        <p style={{ fontSize: 18, margin: "10px 0 0 0" }}>Общо плащания</p>
                    </div>
                </div>
            )}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: 20,
                }}
            >
                <div
                    style={{
                        padding: 30,
                        border: "1px solid #ddd",
                        borderRadius: 8,
                        backgroundColor: "white",
                    }}
                >
                    <h2 style={{ marginTop: 0 }}>Блокове</h2>
                    <p style={{ color: "#666", marginBottom: 20 }}>
                        Управлявайте вашите жилищни блокове, адреси и информация за контакт.
                    </p>
                    <button
                        onClick={() => router.push("/admin/blocks")}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: 4,
                            cursor: "pointer",
                            width: "100%",
                        }}
                    >
                        Управление на блокове
                    </button>
                </div>

                <div
                    style={{
                        padding: 30,
                        border: "1px solid #ddd",
                        borderRadius: 8,
                        backgroundColor: "white",
                    }}
                >
                    <h2 style={{ marginTop: 0 }}>Апартаменти</h2>
                    <p style={{ color: "#666", marginBottom: 20 }}>
                        Управлявайте апартаменти, назначавайте собственици и следете детайли за обектите.
                    </p>
                    <button
                        onClick={() => router.push("/admin/apartments")}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#28a745",
                            color: "white",
                            border: "none",
                            borderRadius: 4,
                            cursor: "pointer",
                            width: "100%",
                        }}
                    >
                        Управление на апартаменти
                    </button>
                </div>

                <div
                    style={{
                        padding: 30,
                        border: "1px solid #ddd",
                        borderRadius: 8,
                        backgroundColor: "white",
                    }}
                >
                    <h2 style={{ marginTop: 0 }}>Плащания</h2>
                    <p style={{ color: "#666", marginBottom: 20 }}>
                        Преглеждайте и управлявайте записи за плащания за всички апартаменти.
                    </p>
                    <button
                        onClick={() => router.push("/admin/payments")}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#ffc107",
                            color: "white",
                            border: "none",
                            borderRadius: 4,
                            cursor: "pointer",
                            width: "100%",
                        }}
                    >
                        Преглед на плащания
                    </button>
                </div>
            </div>
        </div>
    );
}