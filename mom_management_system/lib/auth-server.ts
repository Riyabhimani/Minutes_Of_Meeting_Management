import { cookies } from "next/headers";
import { User, Role, decodeToken } from "./auth";

/**
 * Retrieves the current session on the server side (Server Components, Route Handlers, Server Actions).
 */
export async function getServerSession(): Promise<User | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    const payload = decodeToken(token);
    if (!payload) return null;

    // Map NestJS/Passport/Standard JWT fields to our User interface
    return {
        user_id: payload.user_id || payload.sub,
        name: payload.name || payload.username,
        email: payload.email,
        role: payload.role as Role,
    };
}
