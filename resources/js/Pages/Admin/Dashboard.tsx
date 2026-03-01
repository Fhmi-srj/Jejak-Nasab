import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Users, TreePine, UserCheck, Clock, Shield, ArrowRight } from "lucide-react";

export default function AdminDashboardPage() {
    const { stats } = usePage().props as any;

    return (
        <DashboardLayout>
            <div className="p-4 lg:p-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div>
                        <h1 className="text-2xl font-bold text-surface-900 flex items-center gap-2">
                            <Shield className="w-6 h-6 text-gold-600" />
                            Panel Admin
                        </h1>
                        <p className="text-surface-500 mt-1">Overview sistem Jejak Nasab</p>
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
                            <p className="text-sm text-surface-500">Menunggu Approve</p>
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
                            <p className="text-sm text-surface-500">Total Anggota</p>
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
