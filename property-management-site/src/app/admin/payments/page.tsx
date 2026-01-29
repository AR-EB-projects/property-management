"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PaymentForm from "@/components/PaymentForm";

export default function PaymentsPage() {
    const [payments, setPayments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [filterStatus, setFilterStatus] = useState("");
    const [blocks, setBlocks] = useState<any[]>([]);
    const [filterBlockId, setFilterBlockId] = useState("");

    const [showForm, setShowForm] = useState(false);

    const router = useRouter();

    useEffect(() => {
        fetchBlocks();
    }, []);

    useEffect(() => {
        fetchPayments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterStatus, filterBlockId]);

    const fetchBlocks = async () => {
        try {
            const res = await fetch("/api/admin/blocks");
            const data = await res.json();

            const list = Array.isArray(data) ? data : data.blocks;
            setBlocks((list || []).filter((b: any) => b.isActive));
        } catch (err) {
            console.error("Failed to fetch blocks:", err);
        }
    };

    const fetchPayments = async () => {
        setLoading(true);
        try {
            let url = "/api/admin/payments?";
            if (filterStatus) url += `status=${encodeURIComponent(filterStatus)}&`;
            if (filterBlockId) url += `blockId=${encodeURIComponent(filterBlockId)}&`;

            const res = await fetch(url);
            const data = await res.json();

            const list = Array.isArray(data) ? data : data.payments;
            setPayments(list || []);
        } catch (err) {
            console.error("Failed to fetch payments:", err);
            setPayments([]);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateManualPayment = async (data: any) => {
        const res = await fetch("/api/admin/payments/manual", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Failed to create payment");
        }

        setShowForm(false);
        await fetchPayments();
    };

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    };

    const formatCurrency = (amount: number, currency: string) => {
        const safeCurrency = (currency || "USD").toUpperCase();
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: safeCurrency,
        }).format((amount || 0) / 100);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const statusLabel = (status: string) => {
        const s = status || "UNKNOWN";
        if (s === "COMPLETED") return "Completed";
        if (s === "PENDING") return "Pending";
        if (s === "FAILED") return "Failed";
        if (s === "REFUNDED") return "Refunded";
        return s;
    };

    const statusColors = (status: string) => {
        const s = status || "UNKNOWN";
        const bg =
            s === "COMPLETED" ? "#d4edda" :
                s === "PENDING" ? "#fff3cd" :
                    s === "FAILED" ? "#f8d7da" :
                        s === "REFUNDED" ? "#d1ecf1" :
                            "#e2e3e5";

        const fg =
            s === "COMPLETED" ? "#155724" :
                s === "PENDING" ? "#856404" :
                    s === "FAILED" ? "#721c24" :
                        s === "REFUNDED" ? "#0c5460" :
                            "#383d41";

        return { bg, fg };
    };

    if (loading) {
        return <div style={{ padding: 20, paddingTop: 100 }}>Loading...</div>;
    }

    return (
        <div style={{ padding: 20, paddingTop: 100 }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                }}
            >
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

            {/* Filters */}
            <div style={{ marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
                <label style={{ fontWeight: "bold" }}>Filter by Status:</label>
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                >
                    <option value="">All Statuses</option>
                    <option value="PENDING">Pending</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="FAILED">Failed</option>
                    <option value="REFUNDED">Refunded</option>
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

            {!showForm && (
                <button
                    onClick={() => setShowForm(true)}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer",
                        marginBottom: 20,
                    }}
                >
                    + Add Manual Payment
                </button>
            )}

            {showForm && (
                <div style={{ marginBottom: 30, padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
                    <h2>Create Manual Payment</h2>
                    <PaymentForm
                        blocks={blocks}
                        onSubmit={handleCreateManualPayment}
                        onCancel={() => setShowForm(false)}
                    />
                </div>
            )}

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
                        {payments.map((payment) => {
                            const { bg, fg } = statusColors(payment.status);
                            return (
                                <tr key={payment.id} style={{ borderBottom: "1px solid #dee2e6" }}>
                                    <td style={{ padding: 12 }}>{formatDate(payment.createdAt)}</td>
                                    <td style={{ padding: 12 }}>
                                        {payment.apartment?.block?.name || payment.apartment?.block?.address || "-"}
                                    </td>
                                    <td style={{ padding: 12 }}>{payment.apartment?.number || "-"}</td>
                                    <td style={{ padding: 12, fontWeight: "bold" }}>
                                        {formatCurrency(payment.amount, payment.currency)}
                                    </td>
                                    <td style={{ padding: 12 }}>{payment.provider || "-"}</td>
                                    <td style={{ padding: 12 }}>
                      <span
                          style={{
                              padding: "4px 8px",
                              borderRadius: 4,
                              fontSize: 12,
                              backgroundColor: bg,
                              color: fg,
                          }}
                      >
                        {statusLabel(payment.status)}
                      </span>
                                    </td>
                                    <td style={{ padding: 12 }}>
                                        {payment.periodYear && payment.periodMonth ? `${payment.periodMonth}/${payment.periodYear}` : "-"}
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}