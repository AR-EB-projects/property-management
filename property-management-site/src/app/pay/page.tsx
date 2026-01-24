"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PaymentPage() {
    const [blocks, setBlocks] = useState<any[]>([]);
    const [apartments, setApartments] = useState<any[]>([]);
    const [selectedBlock, setSelectedBlock] = useState("");
    const [selectedApartment, setSelectedApartment] = useState("");
    const [amount, setAmount] = useState("");
    const [periodMonth, setPeriodMonth] = useState(new Date().getMonth() + 1);
    const [periodYear, setPeriodYear] = useState(new Date().getFullYear());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchBlocks();
    }, []);

    useEffect(() => {
        if (selectedBlock) {
            fetchApartments();
        } else {
            setApartments([]);
            setSelectedApartment("");
        }
    }, [selectedBlock]);

    const fetchBlocks = async () => {
        try {
            const res = await fetch("/api/public/blocks");
            const data = await res.json();
            setBlocks(data);
        } catch (err) {
            console.error("Failed to fetch blocks:", err);
        }
    };

    const fetchApartments = async () => {
        try {
            const res = await fetch(`/api/public/apartments?blockId=${selectedBlock}`);
            const data = await res.json();
            setApartments(data);
        } catch (err) {
            console.error("Failed to fetch apartments:", err);
        }
    };

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Create checkout session
            const res = await fetch("/api/payments/create-checkout-session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    apartmentId: selectedApartment,
                    amount: Math.round(parseFloat(amount) * 100), // Convert to cents
                    periodMonth,
                    periodYear,
                }),
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message);
            }

            const { url } = await res.json();

            // Redirect to Stripe Checkout
            window.location.href = url;
        } catch (err: any) {
            setError(err.message || "Failed to initiate payment");
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
            <h1>Make a Payment</h1>
            <p style={{ color: "#666", marginBottom: 30 }}>
                Pay your apartment maintenance fee securely with Stripe.
            </p>

            <form onSubmit={handlePayment}>
                <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", marginBottom: 8, fontWeight: "bold" }}>
                        Select Block
                    </label>
                    <select
                        value={selectedBlock}
                        onChange={(e) => setSelectedBlock(e.target.value)}
                        required
                        style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 4 }}
                    >
                        <option value="">-- Select a block --</option>
                        {blocks.map((block) => (
                            <option key={block.id} value={block.id}>
                                {block.name || block.address}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", marginBottom: 8, fontWeight: "bold" }}>
                        Select Apartment
                    </label>
                    <select
                        value={selectedApartment}
                        onChange={(e) => setSelectedApartment(e.target.value)}
                        required
                        disabled={!selectedBlock}
                        style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 4 }}
                    >
                        <option value="">-- Select an apartment --</option>
                        {apartments.map((apt) => (
                            <option key={apt.id} value={apt.id}>
                                Apartment {apt.number} {apt.entrance ? `(Entrance ${apt.entrance})` : ""}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", marginBottom: 8, fontWeight: "bold" }}>
                        Amount (USD)
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        min="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        placeholder="100.00"
                        style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 4 }}
                    />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                    <div>
                        <label style={{ display: "block", marginBottom: 8, fontWeight: "bold" }}>
                            Period Month
                        </label>
                        <select
                            value={periodMonth}
                            onChange={(e) => setPeriodMonth(parseInt(e.target.value))}
                            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 4 }}
                        >
                            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                <option key={month} value={month}>
                                    {new Date(2000, month - 1).toLocaleString("en", { month: "long" })}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: 8, fontWeight: "bold" }}>
                            Period Year
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
                    <div style={{
                        padding: 12,
                        marginBottom: 20,
                        backgroundColor: "#fee",
                        color: "#c00",
                        borderRadius: 4
                    }}>
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
                    {loading ? "Processing..." : "Pay with Stripe"}
                </button>
            </form>

            <p style={{ marginTop: 20, fontSize: 14, color: "#666", textAlign: "center" }}>
                🔒 Secure payment powered by Stripe
            </p>
        </div>
    );
}