"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BlockForm from "@/components/BlockForm";

export default function BlocksPage() {
    const [blocks, setBlocks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingBlock, setEditingBlock] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        fetchBlocks();
    }, []);

    const fetchBlocks = async () => {
        try {
            const res = await fetch("/api/admin/blocks");
            const data = await res.json();
            setBlocks(data);
        } catch (err) {
            console.error("Failed to fetch blocks:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (data: any) => {
        const res = await fetch("/api/admin/blocks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        setShowForm(false);
        fetchBlocks();
    };

    const handleUpdate = async (data: any) => {
        const res = await fetch(`/api/admin/blocks/${editingBlock.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        setEditingBlock(null);
        fetchBlocks();
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this block?")) return;

        const res = await fetch(`/api/admin/blocks/${id}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            const error = await res.json();
            alert(error.message);
            return;
        }

        fetchBlocks();
    };

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
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
        <h1>Blocks Management</h1>
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

            {!showForm && !editingBlock && (
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
                    + Add New Block
                </button>
            )}

            {showForm && (
                <div style={{ marginBottom: 30, padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
                    <h2>Create New Block</h2>
                    <BlockForm
                        onSubmit={handleCreate}
                        onCancel={() => setShowForm(false)}
                    />
                </div>
            )}

            {editingBlock && (
                <div style={{ marginBottom: 30, padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
                    <h2>Edit Block</h2>
                    <BlockForm
                        initialData={editingBlock}
                        onSubmit={handleUpdate}
                        onCancel={() => setEditingBlock(null)}
                    />
                </div>
            )}

            <div>
                <h2>All Blocks ({blocks.length})</h2>
                {blocks.length === 0 ? (
                    <p>No blocks found. Create one to get started.</p>
                ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
                        <thead>
                        <tr style={{ backgroundColor: "#f8f9fa" }}>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Address</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Name</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Floors</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Apartments</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Status</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {blocks.map((block) => (
                            <tr key={block.id} style={{ borderBottom: "1px solid #dee2e6" }}>
                                <td style={{ padding: 12 }}>{block.address}</td>
                                <td style={{ padding: 12 }}>{block.name || "-"}</td>
                                <td style={{ padding: 12 }}>{block.floors || "-"}</td>
                                <td style={{ padding: 12 }}>{block._count?.apartments || 0}</td>
                                <td style={{ padding: 12 }}>
                                        <span style={{
                                            padding: "4px 8px",
                                            borderRadius: 4,
                                            fontSize: 12,
                                            backgroundColor: block.isActive ? "#d4edda" : "#f8d7da",
                                            color: block.isActive ? "#155724" : "#721c24",
                                        }}>
                                            {block.isActive ? "Active" : "Inactive"}
                                        </span>
                                </td>
                                <td style={{ padding: 12 }}>
                                    <button
                                        onClick={() => setEditingBlock(block)}
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
                                        onClick={() => handleDelete(block.id)}
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