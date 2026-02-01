"use client";

import { useState, useEffect } from "react";

export default function PaymentPage() {
    const [payNumber, setPayNumber] = useState("");
    const [apartments, setApartments] = useState<any[]>([]);
    const [filteredPayNumbers, setFilteredPayNumbers] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const [periodMonth, setPeriodMonth] = useState(new Date().getMonth() + 1);
    const [periodYear, setPeriodYear] = useState(new Date().getFullYear());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const FIXED_FEE_EUR = 6;

    useEffect(() => {
        fetchApartments();
    }, []);

    useEffect(() => {
        if (payNumber.trim() === "") {
            setFilteredPayNumbers([]);
        } else {
            const filtered = apartments
                .map((apt) => apt.payNumber)
                .filter((num) => num.toLowerCase().includes(payNumber.toLowerCase()))
                .slice(0, 10); // Limit suggestions
            setFilteredPayNumbers(filtered);
        }
    }, [payNumber, apartments]);

    const fetchApartments = async () => {
        try {
            const res = await fetch("/api/public/apartments");
            const data = await res.json();
            setApartments(data);
        } catch (err) {
            console.error("Failed to fetch apartments:", err);
        }
    };

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        // Final check if payNumber exists in our list
        if (!apartments.some(apt => apt.payNumber === payNumber)) {
            setError("Моля изберете валиден платежен номер");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/payments/create-checkout-session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    payNumber,
                    periodMonth,
                    periodYear,
                }),
            });

            if (!res.ok) {
                const errJson = await res.json();
                throw new Error(errJson.message || "Неуспешно стартиране на плащането");
            }

            const { url } = await res.json();
            window.location.href = url;
        } catch (err: any) {
            setError(err.message || "Неуспешно стартиране на плащането");
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
            <h1>Направи плащане</h1>
            <p style={{ color: "#666", marginBottom: 30 }}>
                Платете таксата за поддръжка на вашия апартамент сигурно чрез Stripe.
            </p>

            <form onSubmit={handlePayment}>
                <div style={{ marginBottom: 20, position: "relative" }}>
                    <label style={{ display: "block", marginBottom: 8, fontWeight: "bold" }}>
                        Въведете вашия платежен номер (payNumber) *
                    </label>
                    <input
                        type="text"
                        value={payNumber}
                        onChange={(e) => {
                            setPayNumber(e.target.value);
                            setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => {
                            // Delay hiding to allow clicking on suggestion
                            setTimeout(() => setShowSuggestions(false), 200);
                        }}
                        required
                        autoComplete="off"
                        style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 4 }}
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
                                        setPayNumber(num);
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

                <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", marginBottom: 8, fontWeight: "bold" }}>
                        Сума
                    </label>
                    <div
                        style={{
                            width: "100%",
                            padding: 10,
                            border: "1px solid #ccc",
                            borderRadius: 4,
                            backgroundColor: "#f8f9fa",
                            fontWeight: "bold",
                        }}
                    >
                        €{FIXED_FEE_EUR.toFixed(2)}
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                    <div>
                        <label style={{ display: "block", marginBottom: 8, fontWeight: "bold" }}>
                            Месец
                        </label>
                        <select
                            value={periodMonth}
                            onChange={(e) => setPeriodMonth(parseInt(e.target.value))}
                            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 4 }}
                        >
                            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                <option key={month} value={month}>
                                    {new Date(2000, month - 1).toLocaleString("bg", { month: "long" })}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label style={{ display: "block", marginBottom: 8, fontWeight: "bold" }}>
                            Година
                        </label>
                        <input
                            type="number"
                            value={periodYear}
                            onChange={(e) => setPeriodYear(parseInt(e.target.value))}
                            min="2020"
                            max="2099"
                            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 4 }}
                        />
                    </div>
                </div>

                {error && (
                    <div
                        style={{
                            padding: 12,
                            marginBottom: 20,
                            backgroundColor: "#fee",
                            color: "#c00",
                            borderRadius: 4,
                        }}
                    >
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: 15,
                        backgroundColor: "#635BFF",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        fontSize: 16,
                        fontWeight: "bold",
                        cursor: loading ? "not-allowed" : "pointer",
                        opacity: loading ? 0.6 : 1,
                    }}
                >
                    {loading ? "Обработка..." : `Плати €${FIXED_FEE_EUR.toFixed(2)} със Stripe`}
                </button>
            </form>

            <p style={{ marginTop: 20, fontSize: 14, color: "#666", textAlign: "center" }}>
                🔒 Сигурно плащане чрез Stripe
            </p>
        </div>
    );
}