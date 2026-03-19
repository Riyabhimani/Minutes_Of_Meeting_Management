
export type Role = 'admin' | 'staff' | 'meeting_convener';

export interface User {
    user_id: number;
    name: string;
    email: string;
    role: Role;
}

export function decodeToken(token: string): any {
    try {
        const parts = token.split(".");
        if (parts.length !== 3) return null;
        const payloadBase64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');

        // Use Buffer for base64 decoding if in Node, otherwise atob
        const decoded = typeof window === 'undefined'
            ? Buffer.from(payloadBase64, 'base64').toString()
            : atob(payloadBase64);

        return JSON.parse(decoded);
    } catch {
        return null;
    }
}
