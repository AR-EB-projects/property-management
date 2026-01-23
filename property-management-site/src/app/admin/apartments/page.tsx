"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ApartmentForm from "@/components/ApartmentForm";

export default function ApartmentsPage() {
    const [apartments, setApartments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingApartment, setEditingApartment] = useState<any>(null);
    const [filterBlockId, setFilterBlockId] = useState("");
    const [blocks, setBlocks] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetchBlocks();
        fetchApartments();
    }, [filterBlockId]);

    const fetchBlocks = async () => {
        try {
            const res = await fetch("/api/admin/blocks");
            const data = await res.json();
            setBlocks(data.filter((b: any) => b.isActive));
        } catch (err) {
            console.error("Failed to fetch blocks:", err);
        }
    };

    const fetchApartments = async () => {
        try {
            const url = filterBlockId
                ? `/api/admin/apartments?blockId=${filterBlockId}`
                : "/api/admin/apartments";
            const res = await fetch(url);
            const data = await res.json();
            setApartments(data);
        } catch (err) {
            console.error("Failed to fetch apartments:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (data: any) => {
        const res = await fetch("/api/admin/apartments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        setShowForm(false);
        fetchApartments();
    };

    const handleUpdate = async (data: any) => {
        const res = await fetch(`/api/admin/apartments/${editingApartment.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        setEditingApartment(null);
        fetchApartments();
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this apartment?")) return;

        const res = await fetch(`/api/admin/apartments/${id}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            const error = await res.json();
            alert(error.message);
            return;
        }

        fetchApartments();
    };

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    };

    if (loading) {
        return <div style={{ padding: 20 }}>Loading...</div>;
    }

    return (
        <div style={{ padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <h1>Apartments Management</h1>
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
                <label style={{ fontWeight: "bold" }}>Filter by Block:</label>
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

            {!showForm && !editingApartment && (
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
                    + Add New Apartment
                </button>
            )}

            {showForm && (
                <div style={{ marginBottom: 30, padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
                    <h2>Create New Apartment</h2>
                    <ApartmentForm
                        onSubmit={handleCreate}
                        onCancel={() => setShowForm(false)}
                    />
                </div>
            )}

            {editingApartment && (
                <div style={{ marginBottom: 30, padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
                    <h2>Edit Apartment</h2>
                    <ApartmentForm
                        initialData={editingApartment}
                        onSubmit={handleUpdate}
                        onCancel={() => setEditingApartment(null)}
                    />
                </div>
            )}

            <div>
                <h2>All Apartments ({apartments.length})</h2>
                {apartments.length === 0 ? (
                    <p>No apartments found. Create one to get started.</p>
                ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
                        <thead>
                        <tr style={{ backgroundColor: "#f8f9fa" }}>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Block</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Number</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Floor</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Entrance</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Owner</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Payments</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Status</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {apartments.map((apt) => (
                            <tr key={apt.id} style={{ borderBottom: "1px solid #dee2e6" }}>
                                <td style={{ padding: 12 }}>{apt.block?.name || apt.block?.address}</td>
                                <td style={{ padding: 12 }}>{apt.number}</td>
                                <td style={{ padding: 12 }}>{apt.floor || "-"}</td>
                                <td style={{ padding: 12 }}>{apt.entrance || "-"}</td>
                                <td style={{ padding: 12 }}>{apt.ownerName || "-"}</td>
                                <td style={{ padding: 12 }}>{apt._count?.payments || 0}</td>
                                <td style={{ padding: 12 }}>
                                        <span style={{
                                            padding: "4px 8px",
                                            borderRadius: 4,
                                            fontSize: 12,
                                            backgroundColor: apt.isActive ? "#d4edda" : "#f8d7da",
                                            color: apt.isActive ? "#155724" : "#721c24",
                                        }}>
                                            {apt.isActive ? "Active" : "Inactive"}
                                        </span>
                                </td>
                                <td style={{ padding: 12 }}>
                                    <button
                                        onClick={() => setEditingApartment(apt)}
                                        style={{
                                            padding: "6px 12px",
                                            backgroundColor: "#007bff",
                                            color: "white",
                                            border: "none",
                                            borderRadius: 4,
                                            cursor: "pointer",
                                            marginRight: 8,
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(apt.id)}
                                        style={{
                                            padding: "6px 12px",
                                            backgroundColor: "#dc3545",
                                            color: "white",
                                            border: "none",
                                            borderRadius: 4,
                                            cursor: "pointer",
                                        }}
                                    >
                                        Delete
                                    </button>
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