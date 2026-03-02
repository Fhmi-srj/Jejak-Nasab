import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import {
    Users,
    TreePine,
    UserCheck,
    Clock,
    Shield,
    ArrowRight,
    Activity,
} from "lucide-react";

export default function AdminDashboardPage() {
    const { stats, pendingUsers, recentActivity } = usePage().props as any;

    return (
        <DashboardLayout>
            <div className="p-4 lg:p-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">
                            Admin Dashboard
                        </h1>
                        <p className="text-surface-500 mt-1">
                            Kelola pengguna dan pantau aktivitas
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-5 rounded-2xl bg-white border border-surface-200 shadow-soft">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-blue-600" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-surface-900">{stats?.totalUsers ?? 0}</p>
                            <p className="text-sm text-surface-500">Total Pengguna</p>
                        </div>

                        <div className="p-5 rounded-2xl bg-white border border-surface-200 shadow-soft">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-gold-600" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-gold-600">{stats?.pendingUsers ?? 0}</p>
                            <p className="text-sm text-surface-500">Menunggu Approval</p>
                        </div>

                        <div className="p-5 rounded-2xl bg-white border border-surface-200 shadow-soft">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                                    <TreePine className="w-5 h-5 text-primary-600" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-surface-900">{stats?.totalBanis ?? 0}</p>
                            <p className="text-sm text-surface-500">Total Bani</p>
                        </div>

                        <div className="p-5 rounded-2xl bg-white border border-surface-200 shadow-soft">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                                    <UserCheck className="w-5 h-5 text-green-600" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-surface-900">{stats?.totalMembers ?? 0}</p>
                            <p className="text-sm text-surface-500">Total Anggota Nasab</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Pending Users */}
                        <div className="rounded-2xl bg-white border border-surface-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-surface-100 flex items-center justify-between">
                                <h2 className="text-base font-semibold text-surface-900 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-gold-500" />
                                    Menunggu Persetujuan
                                </h2>
                                {(stats?.pendingUsers ?? 0) > 0 && (
                                    <span className="px-2 py-0.5 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold">
                                        {stats.pendingUsers}
                                    </span>
                                )}
                            </div>
                            <div className="divide-y divide-surface-100">
                                {!pendingUsers || pendingUsers.length === 0 ? (
                                    <div className="p-6 text-center text-surface-400 text-sm">
                                        Tidak ada pendaftaran menunggu
                                    </div>
                                ) : (
                                    pendingUsers.map((user: any) => (
                                        <div key={user.id} className="px-6 py-4 flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-surface-900">{user.name}</p>
                                                <p className="text-xs text-surface-400">{user.email}</p>
                                            </div>
                                            <span className="text-xs text-surface-400">
                                                {new Date(user.created_at).toLocaleDateString("id-ID", {
                                                    day: "numeric",
                                                    month: "short",
                                                })}
                                            </span>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="rounded-2xl bg-white border border-surface-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-surface-100">
                                <h2 className="text-base font-semibold text-surface-900 flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-primary-500" />
                                    Aktivitas Terbaru
                                </h2>
                            </div>
                            <div className="divide-y divide-surface-100 max-h-80 overflow-y-auto">
                                {!recentActivity || recentActivity.length === 0 ? (
                                    <div className="p-6 text-center text-surface-400 text-sm">
                                        Belum ada aktivitas
                                    </div>
                                ) : (
                                    recentActivity.map((log: any) => (
                                        <div key={log.id} className="px-6 py-3 flex items-start gap-3">
                                            <div className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-[10px] font-semibold text-primary-600">
                                                    {log.user?.name?.[0]?.toUpperCase()}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-surface-700">
                                                    <span className="font-medium">{log.user?.name}</span>{" "}
                                                    {log.description || `${log.action} ${log.entity_type}`}
                                                </p>
                                                <p className="text-xs text-surface-400">
                                                    {log.bani?.name && `${log.bani.name} · `}
                                                    {new Date(log.created_at).toLocaleDateString("id-ID", {
                                                        day: "numeric",
                                                        month: "short",
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link href="/admin/users" className="group p-5 rounded-2xl bg-white border border-surface-200 hover:border-primary-200 hover:shadow-lg transition-all flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-surface-900">Kelola Pengguna</h3>
                                <p className="text-sm text-surface-500">Approve, edit, dan kelola user</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-surface-300 group-hover:text-primary-500 transition-colors" />
                        </Link>
                        <Link href="/admin/banis" className="group p-5 rounded-2xl bg-white border border-surface-200 hover:border-primary-200 hover:shadow-lg transition-all flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <TreePine className="w-6 h-6 text-primary-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-surface-900">Semua Bani</h3>
                                <p className="text-sm text-surface-500">Lihat dan kelola semua bani</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-surface-300 group-hover:text-primary-500 transition-colors" />
                        </Link>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
