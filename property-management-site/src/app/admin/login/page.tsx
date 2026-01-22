"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErr(null);

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        if (!res.ok) {
            setErr("Wrong password");
            return;
        }

        router.push("/admin");
    }

    return (
        <div style={{ maxWidth: 360, margin: "40px auto" }}>
            <h1>Admin Login</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="password"
                    placeholder="Admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%", padding: 10, marginTop: 12 }}
                />
                <button style={{ width: "100%", padding: 10, marginTop: 12 }}>
                    Login
                </button>
                {err && <p style={{ color: "red" }}>{err}</p>}
            </form>
        </div>
    );
}
