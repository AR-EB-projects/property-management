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
        if (!confirm("Сигурни ли сте, че искате да изтриете този апартамент?")) return;

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
        return <div style={{ padding: 20, paddingTop: 100 }}>Зареждане...</div>;
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
        <h1>Управление на апартаменти</h1>
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
                        Назад към таблото
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
                        Изход
                    </button>
                </div>
            </div>

            <div style={{ marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
                <label style={{ fontWeight: "bold" }}>Филтрирай по блок:</label>
                <select
                    value={filterBlockId}
                    onChange={(e) => setFilterBlockId(e.target.value)}
                    style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                >
                    <option value="">Всички блокове</option>
                    {blocks.map((block) => (
                        <option key={block.id} value={block.id}>
                            {block.address} {block.name ? `(${block.name})` : ""}
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
                    + Добави нов апартамент
                </button>
            )}

            {showForm && (
                <div style={{ marginBottom: 30, padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
                    <h2>Създай нов апартамент</h2>
                    <ApartmentForm
                        onSubmit={handleCreate}
                        onCancel={() => setShowForm(false)}
                    />
                </div>
            )}

            {editingApartment && (
                <div style={{ marginBottom: 30, padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
                    <h2>Редактирай апартамент</h2>
                    <ApartmentForm
                        initialData={editingApartment}
                        onSubmit={handleUpdate}
                        onCancel={() => setEditingApartment(null)}
                    />
                </div>
            )}

            <div>
                <h2>Всички апартаменти ({apartments.length})</h2>
                {apartments.length === 0 ? (
                    <p>Няма намерени апартаменти. Създайте такъв, за да започнете.</p>
                ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
                        <thead>
                        <tr style={{ backgroundColor: "#f8f9fa" }}>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Блок</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Плат. номер</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Номер</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Етаж</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Вход</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Собственик</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Плащания</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Статус</th>
                            <th style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #dee2e6" }}>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {apartments.map((apt) => (
                            <tr key={apt.id} style={{ borderBottom: "1px solid #dee2e6" }}>
                                <td style={{ padding: 12 }}>{apt.block?.address} {apt.block?.name ? `(${apt.block?.name})` : ""}</td>
                                <td style={{ padding: 12 }}>{apt.payNumber}</td>
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
                                            {apt.isActive ? "Активен" : "Неактивен"}
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
                                        Редактирай
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
                                        Изтрий
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