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
                    {/* ... existing code ... */}
                </div>
            </div>

            {/* ... existing code ... */}
        </div>
    );
}