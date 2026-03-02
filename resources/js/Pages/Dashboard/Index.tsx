import { Link, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import {
    TreePine,
    Users,
    Plus,
    ArrowRight,
    Crown,
    Calendar,
    Clock,
    UserCheck,
    Activity,
    Shield,
    Settings,
    ExternalLink,
} from "lucide-react";

interface Bani {
    id: string;
    name: string;
    description?: string;
    members_count: number;
    created_by?: { id: string; name: string };
    userRole?: string;
    created_at: string;
}

interface LogEntry {
    id: string;
    action: string;
    entity_type: string;
    description?: string;
    created_at: string;
    user: { name: string; avatar?: string };
    bani?: { name: string };
}

interface Props {
    user: any;
    banis: Bani[];
    totalBanis: number;
    totalMembers: number;
    recentLogs: LogEntry[];
}

export default function DashboardPage() {
    const { user, banis, totalBanis, totalMembers, recentLogs } = usePage().props as any;

    const isAdmin = user?.role === "SUPER_ADMIN" || user?.role === "ADMIN";

    return (
        <DashboardLayout>
            <div className="p-4 lg:p-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Welcome Header */}
                    <div className="animate-fade-in">
                        <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">
                            Assalamualaikum,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
                                {user?.name}
                            </span>
                        </h1>
                        <p className="text-surface-500 mt-1">
                            Selamat datang kembali di Jejak Nasab
                        </p>
                    </div>

                    {/* ============ USER STATS ============ */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up">
                        <div className="p-5 rounded-2xl bg-white border border-surface-200 shadow-soft">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                                    <TreePine className="w-5 h-5 text-primary-600" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-surface-900">{totalBanis}</p>
                            <p className="text-sm text-surface-500">Bani Diikuti</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-surface-200 shadow-soft">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-gold-600" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-surface-900">{totalMembers}</p>
                            <p className="text-sm text-surface-500">Total Anggota</p>
                        </div>
                        <Link
                            href="/dashboard/bani/create"
                            className="col-span-2 lg:col-span-1 p-5 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-600/20 hover:from-primary-500 hover:to-primary-600 transition-all active:scale-[0.98]"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                    <Plus className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <p className="text-base font-semibold">
                                Buat Bani Baru →
                            </p>
                            <p className="text-sm text-primary-100 mt-0.5">
                                Mulai catat nasab keluarga Anda
                            </p>
                        </Link>
                    </div>

                    {/* ============ BANI LIST ============ */}
                    <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-surface-900">
                                Bani Saya
                            </h2>
                            <Link
                                href="/dashboard/bani"
                                className="text-sm text-primary-600 hover:text-primary-500 font-medium flex items-center gap-1"
                            >
                                Lihat Semua <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {banis.length === 0 ? (
                            <div className="p-8 rounded-2xl bg-white border border-surface-200 text-center">
                                <TreePine className="w-12 h-12 text-surface-300 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-surface-700 mb-2">
                                    Belum Ada Bani
                                </h3>
                                <p className="text-surface-500 text-sm mb-4">
                                    Mulai dengan membuat bani keluarga pertama Anda
                                </p>
                                <Link
                                    href="/dashboard/bani/create"
                                    className="touch-target inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors"
                                >
                                    <Plus className="w-5 h-5" />
                                    Buat Bani Baru
                                </Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {banis.map((bani: any) => (
                                    <div
                                        key={bani.id}
                                        className="rounded-2xl bg-white border border-surface-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                                    >
                                        <Link
                                            href={`/dashboard/bani/${bani.id}`}
                                            className="block p-5"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md shadow-primary-500/20">
                                                    <TreePine className="w-6 h-6 text-white" />
                                                </div>
                                                {bani.userRole === "ADMIN" && (
                                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-gold-50 text-gold-700 text-xs font-medium">
                                                        <Crown className="w-3 h-3" /> Admin
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-base font-semibold text-surface-900 group-hover:text-primary-700 transition-colors">
                                                {bani.name}
                                            </h3>
                                            {bani.description && (
                                                <p className="text-sm text-surface-500 mt-1 line-clamp-2">
                                                    {bani.description}
                                                </p>
                                            )}
                                            <div className="flex items-center gap-4 mt-4 pt-3 border-t border-surface-100">
                                                <span className="text-xs text-surface-400 flex items-center gap-1">
                                                    <Users className="w-3.5 h-3.5" />
                                                    {bani.members_count} anggota
                                                </span>
                                                <span className="text-xs text-surface-400 flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(bani.created_at).toLocaleDateString("id-ID", {
                                                        month: "short",
                                                        year: "numeric",
                                                    })}
                                                </span>
                                            </div>
                                        </Link>
                                        {/* Action bar */}
                                        {bani.userRole === "ADMIN" && (
                                            <div className="flex border-t border-surface-100">
                                                <Link
                                                    href={`/dashboard/bani/${bani.id}?settings=true`}
                                                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-surface-500 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                                >
                                                    <Settings className="w-3.5 h-3.5" /> Pengaturan
                                                </Link>
                                                <Link
                                                    href={`/dashboard/bani/${bani.id}`}
                                                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-surface-500 hover:text-primary-600 hover:bg-primary-50 transition-colors border-l border-surface-100"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" /> Buka
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ============ RECENT ACTIVITY ============ */}
                    {recentLogs && recentLogs.length > 0 && (
                        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-surface-900">
                                    Aktivitas Terbaru
                                </h2>
                                {isAdmin && (
                                    <Link href="/dashboard/logs" className="text-sm text-primary-600 hover:text-primary-500 font-medium flex items-center gap-1">
                                        Semua Log <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                            <div className="rounded-2xl bg-white border border-surface-200 divide-y divide-surface-100">
                                {recentLogs.map((log: any) => (
                                    <div key={log.id} className="p-4 flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs font-semibold text-primary-600">
                                                {log.user?.name?.[0]?.toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-surface-700">
                                                <span className="font-medium">{log.user?.name}</span>{" "}
                                                {log.description || `${log.action} ${log.entity_type}`}
                                            </p>
                                            <p className="text-xs text-surface-400 mt-0.5">
                                                {log.bani?.name} ·{" "}
                                                {new Date(log.created_at).toLocaleDateString("id-ID", {
                                                    day: "numeric",
                                                    month: "short",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
