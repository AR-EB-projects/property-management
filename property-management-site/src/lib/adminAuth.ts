import { SignJWT, jwtVerify } from "jose";

const cookieName = "admin_session";

function getSecretKey() {
    const secret = process.env.ADMIN_SESSION_SECRET;
    if (!secret) throw new Error("Missing ADMIN_SESSION_SECRET");
    return new TextEncoder().encode(secret);
}

export async function createAdminToken() {
    return await new SignJWT({ role: "ADMIN" })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(getSecretKey());
}

export async function verifyAdminToken(token: string) {
    const { payload } = await jwtVerify(token, getSecretKey());
    return payload?.role === "ADMIN";
}

export { cookieName };
