import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import {
    TreePine,
    Users,
    Search,
    ChevronRight,
    Trash2,
} from "lucide-react";

export default function AdminBanisPage() {
    const [banis, setBanis] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("/api/banis")
            .then(r => r.json())
            .then(data => { setBanis(data); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    const filtered = banis.filter(b =>
        b.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <DashboardLayout>
            <div className="p-4 lg:p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold text-surface-900 mb-1">Semua Bani</h1>
                    <p className="text-sm text-surface-500 mb-6">Kelola semua bani dalam sistem</p>

                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cari bani..."
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-surface-200 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                        />
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="w-8 h-8 border-3 border-primary-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="text-center py-20 rounded-2xl bg-white border border-surface-200">
                            <TreePine className="w-12 h-12 text-surface-300 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-surface-700">Tidak ada bani</h3>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {filtered.map((bani) => (
                                <Link
                                    key={bani.id}
                                    href={`/dashboard/bani/${bani.id}`}
                                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-surface-200 hover:border-primary-200 hover:shadow-lg transition-all"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0">
                                        <TreePine className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-surface-900 truncate group-hover:text-primary-700 transition-colors">{bani.name}</h3>
                                        <p className="text-xs text-surface-400 flex items-center gap-2 mt-0.5">
                                            <Users className="w-3.5 h-3.5" />
                                            {bani.members_count ?? 0} anggota
                                        </p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-surface-300 group-hover:text-primary-500 transition-colors" />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
