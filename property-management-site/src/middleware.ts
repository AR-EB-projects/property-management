import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookieName, verifyAdminToken } from "@/lib/adminAuth";

export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const token = req.cookies.get(cookieName)?.value;

    if (path === "/admin/login") {
        if (token) {
            try {
                const isValid = await verifyAdminToken(token);
                if (isValid) {
                    return NextResponse.redirect(new URL("/admin", req.url));
                }
            } catch {
            }
        }
        return NextResponse.next();
    }

    if (path === "/api/admin/login" || path === "/api/admin/logout") {
        return NextResponse.next();
    }

    const isAdminArea = path.startsWith("/admin") || path.startsWith("/api/admin");
    if (!isAdminArea) return NextResponse.next();

    if (!token) return NextResponse.redirect(new URL("/admin/login", req.url));

    try {
        const ok = await verifyAdminToken(token);
        if (!ok) throw new Error("Not admin");
        return NextResponse.next();
    } catch {
        const res = NextResponse.redirect(new URL("/admin/login", req.url));
        res.cookies.set(cookieName, "", { path: "/", maxAge: 0 });
        return res;
    }
}

export const config = {
    matcher: ["/admin/:path*", "/api/admin/:path*"],
};
