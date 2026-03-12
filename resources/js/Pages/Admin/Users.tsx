import { useState, useEffect } from "react";
import { csrfFetch } from "@/lib/utils";
import DashboardLayout from "@/Layouts/DashboardLayout";
import {
    Users,
    Search,
    Shield,
    Clock,
    Check,
    X,
    UserCheck,
    ChevronDown,
} from "lucide-react";

interface UserItem {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    tier?: { name: string };
    created_at: string;
}

export default function AdminUsersPage() {
    const [users, setUsers] = useState<UserItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    const fetchUsers = () => {
        fetch("/api/admin/users")
            .then(r => r.json())
            .then(data => { setUsers(data); setLoading(false); })
            .catch(() => setLoading(false));
    };

    useEffect(() => { fetchUsers(); }, []);

    const handleStatusUpdate = async (userId: string, status: string) => {
        setActionLoading(userId);
        try {
            await csrfFetch("/api/admin/users", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, status }),
            });
            fetchUsers();
        } finally {
            setActionLoading(null);
        }
    };

    const handleRoleUpdate = async (userId: string, role: string) => {
        setActionLoading(userId);
        try {
            await csrfFetch("/api/admin/users", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, role }),
            });
            fetchUsers();
        } finally {
            setActionLoading(null);
        }
    };

    const filtered = users.filter(u =>
        u.name?.toLowerCase().includes(search.toLowerCase()) ||
        u.email?.toLowerCase().includes(search.toLowerCase())
    );

    const statusBadge = (status: string) => {
        switch (status) {
            case "APPROVED": return "bg-green-50 text-green-700";
            case "PENDING": return "bg-gold-50 text-gold-700";
            case "SUSPENDED": return "bg-red-50 text-red-700";
            default: return "bg-surface-100 text-surface-500";
        }
    };

    const roleBadge = (role: string) => {
        switch (role) {
            case "SUPER_ADMIN": return "bg-purple-50 text-purple-700";
            case "ADMIN": return "bg-gold-50 text-gold-700";
            default: return "bg-surface-100 text-surface-500";
        }
    };

    return (
        <DashboardLayout>
            <div className="p-4 lg:p-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl font-bold text-surface-900 mb-1 flex items-center gap-2">
                        <Users className="w-6 h-6 text-primary-600" />
                        Kelola Pengguna
                    </h1>
                    <p className="text-sm text-surface-500 mb-6">Approve dan kelola semua pengguna</p>

                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cari pengguna..."
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-surface-200 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                        />
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="w-8 h-8 border-3 border-primary-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {filtered.map((user) => (
                                <div key={user.id} className="rounded-2xl bg-white border border-surface-200 p-4">
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                            {user.name?.[0]?.toUpperCase() || "U"}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="font-semibold text-surface-900">{user.name}</h3>
                                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${roleBadge(user.role)}`}>
                                                    {user.role}
                                                </span>
                                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${statusBadge(user.status)}`}>
                                                    {user.status}
                                                </span>
                                            </div>
                                            <p className="text-xs text-surface-400">{user.email}</p>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-2">
                                            {user.status === "PENDING" && (
                                                <>
                                                    <button
                                                        onClick={() => handleStatusUpdate(user.id, "APPROVED")}
                                                        disabled={actionLoading === user.id}
                                                        className="px-3 py-1.5 rounded-lg bg-green-50 text-green-700 text-xs font-medium hover:bg-green-100 transition-colors disabled:opacity-50"
                                                    >
                                                        <Check className="w-3.5 h-3.5 inline mr-1" />
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() => handleStatusUpdate(user.id, "SUSPENDED")}
                                                        disabled={actionLoading === user.id}
                                                        className="px-3 py-1.5 rounded-lg bg-red-50 text-red-700 text-xs font-medium hover:bg-red-100 transition-colors disabled:opacity-50"
                                                    >
                                                        <X className="w-3.5 h-3.5 inline mr-1" />
                                                        Tolak
                                                    </button>
                                                </>
                                            )}
                                            {user.status === "APPROVED" && (
                                                <select
                                                    value={user.role}
                                                    onChange={(e) => handleRoleUpdate(user.id, e.target.value)}
                                                    disabled={actionLoading === user.id}
                                                    className="px-2 py-1.5 rounded-lg border border-surface-200 text-xs text-surface-700 focus:outline-none focus:ring-1 focus:ring-primary-500"
                                                >
                                                    <option value="USER">User</option>
                                                    <option value="ADMIN">Admin</option>
                                                    <option value="SUPER_ADMIN">Super Admin</option>
                                                </select>
                                            )}
                                            {user.status === "SUSPENDED" && (
                                                <button
                                                    onClick={() => handleStatusUpdate(user.id, "APPROVED")}
                                                    disabled={actionLoading === user.id}
                                                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium hover:bg-blue-100 transition-colors disabled:opacity-50"
                                                >
                                                    <UserCheck className="w-3.5 h-3.5 inline mr-1" />
                                                    Aktifkan
                                                </button>
                                            )}
                                        </div>
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
