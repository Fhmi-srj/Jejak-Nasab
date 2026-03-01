import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { TreePine, Leaf } from "lucide-react";

export default function LoginPage() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-surface-50 p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md shadow-primary-500/20">
                            <Leaf className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-surface-900">Jejak Nasab</span>
                    </Link>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border border-surface-200 shadow-soft p-6 sm:p-8">
                    <h1 className="text-xl font-bold text-surface-900 mb-1">Masuk</h1>
                    <p className="text-sm text-surface-500 mb-6">Selamat datang kembali di Jejak Nasab</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-surface-700 mb-1.5">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-surface-200 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                                placeholder="nama@email.com"
                                autoFocus
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-surface-700 mb-1.5">Password</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData("password", e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-surface-200 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                                placeholder="••••••••"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={data.remember}
                                onChange={(e) => setData("remember", e.target.checked)}
                                className="rounded border-surface-300"
                            />
                            <label htmlFor="remember" className="text-sm text-surface-600">Ingat saya</label>
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-sm hover:from-primary-500 hover:to-primary-600 transition-all shadow-lg shadow-primary-600/20 disabled:opacity-50"
                        >
                            {processing ? "Memproses..." : "Masuk"}
                        </button>
                    </form>
                </div>

                {/* Register link */}
                <p className="text-center text-sm text-surface-500 mt-4">
                    Belum punya akun?{" "}
                    <Link href="/register" className="text-primary-600 font-medium hover:text-primary-500">
                        Daftar sekarang
                    </Link>
                </p>
            </div>
        </div>
    );
}
