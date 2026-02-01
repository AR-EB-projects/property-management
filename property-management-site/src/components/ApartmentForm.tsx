"use client";

import React, { useState, useEffect } from "react";

interface ApartmentFormProps {
    initialData?: {
        id?: number;
        blockId: number;
        payNumber: string;
        number: string;
        floor?: number;
        entrance?: string;
        ownerName?: string;
        ownerPhone?: string;
        ownerEmail?: string;
        isActive?: boolean;
    };
    onSubmit: (data: any) => Promise<void>;
    onCancel: () => void;
}

export default function ApartmentForm({ initialData, onSubmit, onCancel }: ApartmentFormProps) {
    const [blocks, setBlocks] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        blockId: initialData?.blockId || "",
        payNumber: initialData?.payNumber || "",
        number: initialData?.number || "",
        floor: initialData?.floor || "",
        entrance: initialData?.entrance || "",
        ownerName: initialData?.ownerName || "",
        ownerPhone: initialData?.ownerPhone || "",
        ownerEmail: initialData?.ownerEmail || "",
        isActive: initialData?.isActive ?? true,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchBlocks();
    }, []);

    const fetchBlocks = async () => {
        try {
            const res = await fetch("/api/admin/blocks");
            const data = await res.json();
            setBlocks(data.filter((b: any) => b.isActive));
        } catch (err) {
            console.error("Failed to fetch blocks:", err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await onSubmit(formData);
        } catch (err: any) {
            setError(err.message || "Неуспешно запазване на апартамент");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Блок *
                </label>
                <select
                    value={formData.blockId}
                    onChange={(e) => setFormData({ ...formData, blockId: e.target.value })}
                    required
                    disabled={!!initialData?.id}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                >
                    <option value="">Изберете блок</option>
                    {blocks.map((block) => (
                        <option key={block.id} value={block.id}>
                            {block.address} {block.name ? `(${block.name})` : ""}
                        </option>
                    ))}
                </select>
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Платёжен номер (payNumber) *
                </label>
                <input
                    type="text"
                    value={formData.payNumber}
                    onChange={(e) => setFormData({ ...formData, payNumber: e.target.value })}
                    required
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Номер на апартамент *
                </label>
                <input
                    type="text"
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    required
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Етаж
                </label>
                <input
                    type="number"
                    value={formData.floor}
                    onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Вход
                </label>
                <input
                    type="text"
                    value={formData.entrance}
                    onChange={(e) => setFormData({ ...formData, entrance: e.target.value })}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Име на собственик
                </label>
                <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Телефон на собственик
                </label>
                <input
                    type="tel"
                    value={formData.ownerPhone}
                    onChange={(e) => setFormData({ ...formData, ownerPhone: e.target.value })}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Имейл на собственик
                </label>
                <input
                    type="email"
                    value={formData.ownerEmail}
                    onChange={(e) => setFormData({ ...formData, ownerEmail: e.target.value })}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            {initialData?.id && (
                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <input
                            type="checkbox"
                            checked={formData.isActive}
                            onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                        />
                        <span style={{ fontWeight: "bold" }}>Активен</span>
                    </label>
                </div>
            )}

            {error && (
                <div style={{ padding: 12, marginBottom: 16, backgroundColor: "#fee", color: "#c00", borderRadius: 4 }}>
                    {error}
                </div>
            )}

            <div style={{ display: "flex", gap: 12 }}>
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: loading ? "not-allowed" : "pointer",
                        opacity: loading ? 0.6 : 1,
                    }}
                >
                    {loading ? "Запазване..." : initialData?.id ? "Обнови" : "Създай"}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#6c757d",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer",
                    }}
                >
                    Отказ
                </button>
            </div>
        </form>
    );
}