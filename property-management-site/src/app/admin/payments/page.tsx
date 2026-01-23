"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaymentsPage() {
    const [payments, setPayments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState("");
    const [blocks, setBlocks] = useState<any[]>([]);
    const [filterBlockId, setFilterBlockId] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetchBlocks();
    }, []);

    useEffect(() => {
        fetchPayments();
    }, [filterStatus, filterBlockId]);

    const fetchBlocks = async () => {
        try {
            const res = await fetch("/api/admin/blocks");
            const data = await res.json();
            setBlocks(data.filter((b: any) => b.isActive));
        } catch (err) {
            console.error("Failed to fetch blocks:", err);
        }
    };

    const fetchPayments = async () => {
        try {
            let url = "/api/admin/payments?";
            if (filterStatus) url += `status=${filterStatus}&`;
            if (filterBlockId) url += `blockId=${filterBlockId}&`;

            const res = await fetch(url);
            const data = await res.json();
            setPayments(data);
        } catch (err) {
            console.error("Failed to fetch payments:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    };

    const formatCurrency = (amount: number, currency: string) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency || "USD",
        }).format(amount / 100);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    if (loading) {
        return <div style={{ padding: 20 }}>Loading...</div>;
    }

    return (
        <div style={{ padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <h1>Payments</h1>
                <div style={{ display: "flex", gap: 12 }}>
                    <button
                        onClick={() => router.push("/admin")}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#6c757d",
                            color: "white",
                            border: "none",
                            borderRadius: 4,
                            cursor: "pointer",
                        }}
                    >
                        Back to Dashboard
                    </button>
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
            </div>

            <div style={{ marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
                <label style={{ fontWeight: "bold" }}>Filter by Status:</label>
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                >
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="failed">Failed</option>
                    <option value="refunded">Refunded</option>
                </select>

                <label style={{ fontWeight: "bold", marginLeft: 20 }}>Filter by Block:</label>
                <select
                    value={filterBlockId}
                    onChange={(e) => setFilterBlockId(e.target.value)}
                    style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                >
                    <option value="">All Blocks</option>
                    {blocks.map((block) => (
                        <option key={block.id} value={block.id}>
                            {block.name || block.address}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <h2>All Payments ({payments.length})</h2>
                {payments.length === 0 ? (
                    <p>No payments found.</p>
                ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
                        <thead>
                        <tr style={{ backgroundColor: "#f8f9fa" }}>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Date</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Block</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Apartment</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Amount</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Provider</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Status</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Period</th>
                        </tr>
                        </thead>
                        <tbody>
                        {payments.map((payment) => (
                            <tr key={payment.id} style={{ borderBottom: "1px solid #dee2e6" }}>
                                <td style={{ padding: 12 }}>{formatDate(payment.createdAt)}</td>
                                <td style={{ padding: 12 }}>
                                    {payment.apartment?.block?.name || payment.apartment?.block?.address}
                                </td>
                                <td style={{ padding: 12 }}>{payment.apartment?.number}</td>
                                <td style={{ padding: 12, fontWeight: "bold" }}>
                                    {formatCurrency(payment.amount, payment.currency)}
                                </td>
                                <td style={{ padding: 12 }}>{payment.provider}</td>
                                <td style={{ padding: 12 }}>
                                        <span style={{
                                            padding: "4px 8px",
                                            borderRadius: 4,
                                            fontSize: 12,
                                            backgroundColor:
                                                payment.status === "completed" ? "#d4edda" :
                                                    payment.status === "pending" ? "#fff3cd" :
                                                        payment.status === "failed" ? "#f8d7da" :
                                                            "#d1ecf1",
                                            color:
                                                payment.status === "completed" ? "#155724" :
                                                    payment.status === "pending" ? "#856404" :
                                                        payment.status === "failed" ? "#721c24" :
                                                            "#0c5460",
                                        }}>
                                            {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                                        </span>
                                </td>
                                <td style={{ padding: 12 }}>
                                    {payment.periodYear && payment.periodMonth
                                        ? `${payment.periodMonth}/${payment.periodYear}`
                                        : "-"}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}