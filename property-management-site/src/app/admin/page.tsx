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
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const [blocksRes, apartmentsRes, paymentsRes] = await Promise.all([
                fetch("/api/admin/blocks"),
                fetch("/api/admin/apartments"),
                fetch("/api/admin/payments"),
            ]);

            const blocks = await blocksRes.json();
            const apartments = await apartmentsRes.json();
            const payments = await paymentsRes.json();

            setStats({
                blocks: blocks.length,
                apartments: apartments.length,
                payments: payments.length,
            });
        } catch (err) {
            console.error("Failed to fetch stats:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    };

    return (
        <div style={{ padding: 20, maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
                <h1>Property Management Admin</h1>
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
                    Logout
                </button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, marginBottom: 40 }}>
                    <div style={{
                        padding: 30,
                        backgroundColor: "#007bff",
                        color: "white",
                        borderRadius: 8,
                        textAlign: "center",
                    }}>
                        <h2 style={{ fontSize: 48, margin: 0 }}>{stats.blocks}</h2>
                        <p style={{ fontSize: 18, margin: "10px 0 0 0" }}>Total Blocks</p>
                    </div>
                    <div style={{
                        padding: 30,
                        backgroundColor: "#28a745",
                        color: "white",
                        borderRadius: 8,
                        textAlign: "center",
                    }}>
                        <h2 style={{ fontSize: 48, margin: 0 }}>{stats.apartments}</h2>
                        <p style={{ fontSize: 18, margin: "10px 0 0 0" }}>Total Apartments</p>
                    </div>
                    <div style={{
                        padding: 30,
                        backgroundColor: "#ffc107",
                        color: "white",
                        borderRadius: 8,
                        textAlign: "center",
                    }}>
                        <h2 style={{ fontSize: 48, margin: 0 }}>{stats.payments}</h2>
                        <p style={{ fontSize: 18, margin: "10px 0 0 0" }}>Total Payments</p>
                    </div>
                </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
                <div style={{
                    padding: 30,
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    backgroundColor: "white",
                }}>
                    <h2 style={{ marginTop: 0 }}>Blocks</h2>
                    <p style={{ color: "#666", marginBottom: 20 }}>
                        Manage your property blocks, addresses, and contact information.
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
                        Manage Blocks
                    </button>
                </div>

                <div style={{
                    padding: 30,
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    backgroundColor: "white",
                }}>
                    <h2 style={{ marginTop: 0 }}>Apartments</h2>
                    <p style={{ color: "#666", marginBottom: 20 }}>
                        Manage apartments, assign owners, and track unit details.
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
                        Manage Apartments
                    </button>
                </div>

                <div style={{
                    padding: 30,
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    backgroundColor: "white",
                }}>
                    <h2 style={{ marginTop: 0 }}>Payments</h2>
                    <p style={{ color: "#666", marginBottom: 20 }}>
                        View and manage payment records for all apartments.
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
                        View Payments
                    </button>
                </div>
            </div>
        </div>
    );
}