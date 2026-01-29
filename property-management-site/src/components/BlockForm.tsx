"use client";

import React, { useState } from "react";

interface BlockFormProps {
    initialData?: {
        id?: number;
        address: string;
        name?: string;
        floors?: number;
        contactName?: string;
        contactPhone?: string;
        contactEmail?: string;
        isActive?: boolean;
    };
    onSubmit: (data: any) => Promise<void>;
    onCancel: () => void;
}

export default function BlockForm({ initialData, onSubmit, onCancel }: BlockFormProps) {
    const [formData, setFormData] = useState({
        address: initialData?.address || "",
        name: initialData?.name || "",
        floors: initialData?.floors || "",
        contactName: initialData?.contactName || "",
        contactPhone: initialData?.contactPhone || "",
        contactEmail: initialData?.contactEmail || "",
        isActive: initialData?.isActive ?? true,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await onSubmit(formData);
        } catch (err: any) {
            setError(err.message || "Неуспешно запазване на блок");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Адрес *
                </label>
                <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Име
                </label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Брой етажи
                </label>
                <input
                    type="number"
                    value={formData.floors}
                    onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Лице за контакт
                </label>
                <input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Телефон за контакт
                </label>
                <input
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
                    Имейл за контакт
                </label>
                <input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
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