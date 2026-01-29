"use client";

import React, { useEffect, useState } from "react";

type Block = { id: number; address: string; name?: string | null };
type Apartment = { id: number; number: string; entrance?: string | null };

interface PaymentFormProps {
    blocks: Block[];
    onSubmit: (data: any) => Promise<void>;
    onCancel: () => void;
}

export default function PaymentForm({ blocks, onSubmit, onCancel }: PaymentFormProps) {
    const [formData, setFormData] = useState({
        blockId: "",
        apartmentId: "",
        amount: "", // in BGN (e.g. 50 or 50.50)
        currency: "bgn",
        periodMonth: "",
        periodYear: "",
        method: "easypay", // easypay | epay | cash | bank | other
        note: "",
    });

    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadApts = async () => {
            if (!formData.blockId) {
                setApartments([]);
                setFormData((p) => ({ ...p, apartmentId: "" }));
                return;
            }

            try {
                const res = await fetch(`/api/admin/apartments?blockId=${formData.blockId}`);
                if (!res.ok) {
                    setApartments([]);
                    return;
                }

                const data = await res.json();

                // Support BOTH shapes:
                // 1) API returns array: [...]
                // 2) API returns object: { apartments: [...] }
                const list = Array.isArray(data) ? data : data.apartments;

                setApartments(list || []);
            } catch {
                setApartments([]);
            }
        };

        loadApts();
    }, [formData.blockId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Convert BGN to cents (stotinki)
            const normalized = formData.amount.replace(",", ".").trim();
            const amountNum = Number(normalized);
            if (!Number.isFinite(amountNum) || amountNum <= 0) {
                throw new Error("Невалидна сума");
            }
            const amountCents = Math.round(amountNum * 100);

            await onSubmit({
                apartmentId: formData.apartmentId,
                amount: amountCents,
                currency: formData.currency,
                periodMonth: formData.periodMonth ? Number(formData.periodMonth) : null,
                periodYear: formData.periodYear ? Number(formData.periodYear) : null,
                method: formData.method,
                note: formData.note || null,
            });
        } catch (err: any) {
            setError(err.message || "Неуспешно запазване на плащане");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>Блок *</label>
                <select
                    value={formData.blockId}
                    onChange={(e) => setFormData({ ...formData, blockId: e.target.value })}
                    required
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                >
                    <option value="">Изберете блок</option>
                    {blocks.map((b) => (
                        <option key={b.id} value={b.id}>
                            {b.name || b.address}
                        </option>
                    ))}
                </select>
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>Апартамент *</label>
                <select
                    value={formData.apartmentId}
                    onChange={(e) => setFormData({ ...formData, apartmentId: e.target.value })}
                    required
                    disabled={!formData.blockId}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                >
                    <option value="">Изберете апартамент</option>
                    {apartments.map((a) => (
                        <option key={a.id} value={a.id}>
                            {a.entrance ? `Вход ${a.entrance} - ` : ""}Ап. {a.number}
                        </option>
                    ))}
                </select>
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>Сума (лв.) *</label>
                <input
                    type="text"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    placeholder="напр. 50 или 50.50"
                    required
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <div style={{ flex: 1 }}>
                    <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>Месец</label>
                    <input
                        type="number"
                        value={formData.periodMonth}
                        onChange={(e) => setFormData({ ...formData, periodMonth: e.target.value })}
                        placeholder="1-12"
                        min={1}
                        max={12}
                        style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>Година</label>
                    <input
                        type="number"
                        value={formData.periodYear}
                        onChange={(e) => setFormData({ ...formData, periodYear: e.target.value })}
                        placeholder="2026"
                        style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                    />
                </div>
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>Метод</label>
                <select
                    value={formData.method}
                    onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                >
                    <option value="easypay">Офис на EasyPay</option>
                    <option value="epay">ePay.bg онлайн</option>
                    <option value="cash">В брой</option>
                    <option value="bank">Банков превод</option>
                    <option value="other">Друго</option>
                </select>
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>Бележка / № на касова бележка</label>
                <input
                    type="text"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
            </div>

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
                    {loading ? "Запазване..." : "Създай плащане"}
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
