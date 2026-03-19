import { NextRequest, NextResponse } from "next/server";

// Simple decode function for middleware (cannot use atob easily in some edge runtimes, but Next.js middleware supports it)
function decodeJwt(token: string) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payloadBase64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const decoded = Buffer.from(payloadBase64, 'base64').toString();
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const path = request.nextUrl.pathname;

  // Define protected paths
  const authRoutes = ["/dashboard", "/staff", "/meeting-type", "/meetings", "/meeting-member", "/settings", "/staff-attendance"];
  const isProtectedRoute = authRoutes.some(route => path.startsWith(route));

  // 1. Unauthenticated users
  if (!token) {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  // 2. Authenticated users
  const payload = decodeJwt(token);
  const role = payload?.role?.toLowerCase();

  // If logged in, block login page and redirect to correct dashboard
  if (path === "/login") {
    if (role === "admin") {
      return NextResponse.redirect(new URL("/dashboard/admindashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/dashboard/staffdashboard", request.url));
    }
  }

  // Role-based protection
  // Admin-only routes
  const adminOnlyRoutes = ["/staff", "/meeting-type", "/settings", "/staff-attendance"];
  const isAdminOnlyRoute = adminOnlyRoutes.some(route => path.startsWith(route));

  if (isAdminOnlyRoute && role?.toLowerCase() !== "admin") {
    return NextResponse.redirect(new URL("/dashboard/admindashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*", "/staff/:path*", "/meeting-type/:path*", "/meetings/:path*", "/meeting-member/:path*", "/settings/:path*", "/staff-attendance/:path*"],
};
