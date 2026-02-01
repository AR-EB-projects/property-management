"use client";

import React, { useEffect, useState } from "react";

type Apartment = { id: number; number: string; entrance?: string | null; payNumber: string };

interface PaymentFormProps {
    onSubmit: (data: any) => Promise<void>;
    onCancel: () => void;
}

export default function PaymentForm({ onSubmit, onCancel }: PaymentFormProps) {
    const [formData, setFormData] = useState({
        payNumber: "",
        amount: "", // in EUR (e.g. 6.00)
        currency: "eur",
        periodMonth: "",
        periodYear: "",
        method: "easypay", // easypay | epay | cash | bank | other
        note: "",
    });

    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [filteredPayNumbers, setFilteredPayNumbers] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchApartments();
    }, []);

    useEffect(() => {
        if (formData.payNumber.trim() === "") {
            setFilteredPayNumbers([]);
        } else {
            const filtered = apartments
                .map((apt) => apt.payNumber)
                .filter((num) => num.toLowerCase().includes(formData.payNumber.toLowerCase()))
                .slice(0, 10);
            setFilteredPayNumbers(filtered);
        }
    }, [formData.payNumber, apartments]);

    const fetchApartments = async () => {
        try {
            const res = await fetch("/api/public/apartments");
            const data = await res.json();
            setApartments(data);
        } catch (err) {
            console.error("Failed to fetch apartments:", err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const selectedApt = apartments.find(apt => apt.payNumber === formData.payNumber);
        if (!selectedApt) {
            setError("Моля изберете валиден платежен номер");
            return;
        }

        setLoading(true);

        try {
            // Convert EUR to cents
            const normalized = formData.amount.replace(",", ".").trim();
            const amountNum = Number(normalized);
            if (!Number.isFinite(amountNum) || amountNum <= 0) {
                throw new Error("Невалидна сума");
            }
            const amountCents = Math.round(amountNum * 100);

            await onSubmit({
                apartmentId: selectedApt.id,
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
            <div style={{ marginBottom: 16, position: "relative" }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>Платёжен номер (payNumber) *</label>
                <input
                    type="text"
                    value={formData.payNumber}
                    onChange={(e) => {
                        setFormData({ ...formData, payNumber: e.target.value });
                        setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => {
                        setTimeout(() => setShowSuggestions(false), 200);
                    }}
                    required
                    autoComplete="off"
                    placeholder="Въведете платежен номер"
                    style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
                />
                {showSuggestions && filteredPayNumbers.length > 0 && (
                    <div
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            backgroundColor: "white",
                            border: "1px solid #ccc",
                            borderRadius: "0 0 4px 4px",
                            zIndex: 10,
                            maxHeight: 200,
                            overflowY: "auto",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        }}
                    >
                        {filteredPayNumbers.map((num) => (
                            <div
                                key={num}
                                onClick={() => {
                                    setFormData({ ...formData, payNumber: num });
                                    setShowSuggestions(false);
                                }}
                                style={{
                                    padding: "10px",
                                    cursor: "pointer",
                                    borderBottom: "1px solid #eee",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                            >
                                {num}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>Сума (€) *</label>
                <input
                    type="text"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    placeholder="напр. 6.00"
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
