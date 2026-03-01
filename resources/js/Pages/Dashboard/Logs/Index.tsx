import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Activity, ArrowLeft, Clock, User } from "lucide-react";

interface LogEntry {
    id: string;
    action: string;
    entity_type: string;
    description?: string;
    created_at: string;
    user: { name: string; avatar?: string };
    bani?: { name: string };
}

export default function LogsPage() {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/banis")
            .then(r => r.json())
            .then((banis) => {
                // Fetch is handled by the controller via Inertia props, 
                // but for now we use API
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <DashboardLayout>
            <div className="p-4 lg:p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Link href="/dashboard" className="p-2 rounded-lg hover:bg-surface-100 transition-colors">
                            <ArrowLeft className="w-5 h-5 text-surface-500" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-surface-900 flex items-center gap-2">
                                <Activity className="w-6 h-6 text-primary-600" />
                                Log Aktivitas
                            </h1>
                            <p className="text-surface-500 text-sm">Riwayat semua aktivitas di bani Anda</p>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="w-8 h-8 border-3 border-primary-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : logs.length === 0 ? (
                        <div className="text-center py-20 rounded-2xl bg-white border border-surface-200">
                            <Activity className="w-12 h-12 text-surface-300 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-surface-700 mb-2">Belum Ada Aktivitas</h3>
                            <p className="text-surface-500 text-sm">Log aktivitas akan muncul saat ada perubahan data</p>
                        </div>
                    ) : (
                        <div className="rounded-2xl bg-white border border-surface-200 divide-y divide-surface-100">
                            {logs.map((log) => (
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
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
