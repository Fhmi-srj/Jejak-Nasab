import { type ClassValue, clsx } from "clsx";

// Simple clsx implementation (no need for separate package)
export function cn(...inputs: ClassValue[]) {
    return inputs.filter(Boolean).join(" ");
}

export function formatDate(date: Date | string | null | undefined): string {
    if (!date) return "-";
    const d = new Date(date);
    return d.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export function formatDateShort(date: Date | string | null | undefined): string {
    if (!date) return "-";
    const d = new Date(date);
    return d.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
}

export function getWhatsAppLink(phone: string): string {
    // Remove non-numeric characters
    let cleaned = phone.replace(/\D/g, "");
    // Convert leading 0 to 62 (Indonesia country code)
    if (cleaned.startsWith("0")) {
        cleaned = "62" + cleaned.substring(1);
    }
    return `https://wa.me/${cleaned}`;
}

export function getInitials(name: string): string {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2);
}

export function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

export function timeAgo(date: Date | string): string {
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (diffInSeconds < 60) return "Baru saja";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} menit lalu`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} jam lalu`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} hari lalu`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} bulan lalu`;
    return `${Math.floor(diffInSeconds / 31536000)} tahun lalu`;
}

/**
 * Get CSRF token from the XSRF-TOKEN cookie (set by Laravel middleware).
 */
export function getCsrfToken(): string {
    const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : '';
}

/**
 * fetch() wrapper that automatically includes CSRF token and Accept headers.
 * Use this instead of raw fetch() for all API calls.
 */
export function csrfFetch(url: string, options: RequestInit = {}): Promise<Response> {
    const headers = new Headers(options.headers || {});
    if (!headers.has('X-XSRF-TOKEN')) {
        headers.set('X-XSRF-TOKEN', getCsrfToken());
    }
    if (!headers.has('Accept')) {
        headers.set('Accept', 'application/json');
    }
    return fetch(url, { ...options, headers, credentials: 'same-origin' });
}
