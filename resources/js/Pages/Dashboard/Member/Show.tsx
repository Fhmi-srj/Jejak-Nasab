import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { ArrowLeft, User, Calendar, MapPin, Phone, Heart, Users, Edit, Trash2 } from "lucide-react";

export default function MemberShowPage() {
    const { baniId, memberId } = usePage().props as any;
    const [member, setMember] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/members/${memberId}`)
            .then(r => r.json())
            .then(data => { setMember(data); setLoading(false); })
            .catch(() => setLoading(false));
    }, [memberId]);

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex justify-center items-center min-h-[60vh]">
                    <div className="w-8 h-8 border-3 border-primary-500 border-t-transparent rounded-full animate-spin" />
                </div>
            </DashboardLayout>
        );
    }

    if (!member) {
        return (
            <DashboardLayout>
                <div className="p-4 lg:p-8 text-center">
                    <p className="text-surface-500">Anggota tidak ditemukan</p>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="p-4 lg:p-8">
                <div className="max-w-2xl mx-auto">
                    <Link href={`/dashboard/bani/${baniId}`} className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-700 mb-6">
                        <ArrowLeft className="w-4 h-4" /> Kembali
                    </Link>

                    <div className="bg-white rounded-2xl border border-surface-200 overflow-hidden">
                        {/* Header */}
                        <div className="p-6 border-b border-surface-100">
                            <div className="flex items-start gap-4">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${member.gender === "MALE" ? "bg-blue-50 text-blue-600" : "bg-pink-50 text-pink-600"}`}>
                                    {member.photo ? (
                                        <img src={member.photo} alt={member.full_name} className="w-16 h-16 rounded-2xl object-cover" />
                                    ) : (
                                        <User className="w-8 h-8" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-xl font-bold text-surface-900">{member.full_name}</h1>
                                    {member.nickname && <p className="text-sm text-surface-500">({member.nickname})</p>}
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${member.gender === "MALE" ? "bg-blue-50 text-blue-600" : "bg-pink-50 text-pink-600"}`}>
                                            {member.gender === "MALE" ? "Laki-laki" : "Perempuan"}
                                        </span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${member.is_alive ? "bg-green-50 text-green-600" : "bg-surface-100 text-surface-500"}`}>
                                            {member.is_alive ? "Hidup" : "Wafat"}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Link href={`/dashboard/bani/${baniId}/members/${memberId}/edit`} className="p-2 rounded-lg border border-surface-200 hover:bg-surface-50 transition-colors">
                                        <Edit className="w-4 h-4 text-surface-500" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="p-6 space-y-4">
                            {member.birth_date && (
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-surface-400" />
                                    <span className="text-sm text-surface-700">Lahir: {new Date(member.birth_date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                                </div>
                            )}
                            {member.birth_place && (
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-4 h-4 text-surface-400" />
                                    <span className="text-sm text-surface-700">Tempat lahir: {member.birth_place}</span>
                                </div>
                            )}
                            {member.city && (
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-4 h-4 text-surface-400" />
                                    <span className="text-sm text-surface-700">Kota: {member.city}</span>
                                </div>
                            )}
                            {member.phone_whatsapp && (
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-surface-400" />
                                    <a href={`https://wa.me/${member.phone_whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:underline">
                                        {member.phone_whatsapp}
                                    </a>
                                </div>
                            )}
                            {member.father && (
                                <div className="flex items-center gap-3">
                                    <Users className="w-4 h-4 text-surface-400" />
                                    <span className="text-sm text-surface-700">Ayah: {member.father.full_name}</span>
                                </div>
                            )}
                            {member.mother && (
                                <div className="flex items-center gap-3">
                                    <Users className="w-4 h-4 text-surface-400" />
                                    <span className="text-sm text-surface-700">Ibu: {member.mother.full_name}</span>
                                </div>
                            )}
                            {member.bio && (
                                <div className="pt-3 border-t border-surface-100">
                                    <p className="text-sm text-surface-600">{member.bio}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
