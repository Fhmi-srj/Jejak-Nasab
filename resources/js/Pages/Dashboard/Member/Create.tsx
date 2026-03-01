import { usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

// Member Create Page - receives baniId from controller
export default function MemberCreatePage() {
    const { baniId } = usePage().props as any;

    // Import original Add page component logic dynamically
    return (
        <DashboardLayout>
            <div className="p-4 lg:p-8">
                <MemberAddForm baniId={baniId} />
            </div>
        </DashboardLayout>
    );
}

// The form component (copied from original with adaptations)
import { useState, useEffect } from "react";
import { Link, router as inertiaRouter } from "@inertiajs/react";
import {
    ArrowLeft, Save, User, Calendar, MapPin, Phone, AtSign, FileText, Users
} from "lucide-react";

function MemberAddForm({ baniId }: { baniId: string }) {
    const [members, setMembers] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        fullName: "", nickname: "", gender: "MALE",
        birthDate: "", birthPlace: "", isAlive: true,
        address: "", city: "", phoneWhatsapp: "",
        bio: "", fatherId: "", motherId: "",
    });
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`/api/members?baniId=${baniId}`)
            .then((r) => r.json())
            .then(setMembers)
            .catch(() => { });
    }, [baniId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError("");
        try {
            const res = await fetch("/api/members", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, baniId }),
            });
            if (!res.ok) {
                const err = await res.json();
                setError(err.error || "Gagal menambahkan");
                return;
            }
            inertiaRouter.visit(`/dashboard/bani/${baniId}`);
        } catch {
            setError("Gagal menambahkan anggota");
        } finally {
            setSaving(false);
        }
    };

    const males = members.filter((m) => m.gender === "MALE");
    const females = members.filter((m) => m.gender === "FEMALE");

    return (
        <div className="max-w-2xl mx-auto">
            <Link href={`/dashboard/bani/${baniId}`} className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-700 mb-6">
                <ArrowLeft className="w-4 h-4" /> Kembali
            </Link>
            <h1 className="text-2xl font-bold text-surface-900 mb-6">Tambah Anggota</h1>
            {error && <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-600 text-sm">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white rounded-2xl border border-surface-200 p-6 space-y-4">
                    <h2 className="font-semibold text-surface-900 flex items-center gap-2"><User className="w-4 h-4" /> Data Diri</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-surface-700 mb-1">Nama Lengkap *</label>
                            <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} required className="w-full px-3 py-2.5 rounded-xl border border-surface-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-surface-700 mb-1">Nama Panggilan</label>
                            <input type="text" value={formData.nickname} onChange={(e) => setFormData({ ...formData, nickname: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-surface-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-surface-700 mb-1">Jenis Kelamin *</label>
                            <select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-surface-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
                                <option value="MALE">Laki-laki</option>
                                <option value="FEMALE">Perempuan</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-surface-700 mb-1">Tanggal Lahir</label>
                            <input type="date" value={formData.birthDate} onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-surface-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-surface-700 mb-1">Tempat Lahir</label>
                            <input type="text" value={formData.birthPlace} onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-surface-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" id="isAlive" checked={formData.isAlive} onChange={(e) => setFormData({ ...formData, isAlive: e.target.checked })} className="rounded" />
                        <label htmlFor="isAlive" className="text-sm text-surface-700">Masih hidup</label>
                    </div>
                </div>
                <div className="bg-white rounded-2xl border border-surface-200 p-6 space-y-4">
                    <h2 className="font-semibold text-surface-900 flex items-center gap-2"><MapPin className="w-4 h-4" /> Alamat & Kontak</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-surface-700 mb-1">Alamat</label>
                            <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-surface-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-surface-700 mb-1">Kota</label>
                            <input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-surface-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-surface-700 mb-1">WhatsApp</label>
                            <input type="text" value={formData.phoneWhatsapp} onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-surface-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl border border-surface-200 p-6 space-y-4">
                    <h2 className="font-semibold text-surface-900 flex items-center gap-2"><Users className="w-4 h-4" /> Orang Tua</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-surface-700 mb-1">Ayah</label>
                            <select value={formData.fatherId} onChange={(e) => setFormData({ ...formData, fatherId: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-surface-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
                                <option value="">— Pilih Ayah —</option>
                                {males.map((m: any) => <option key={m.id} value={m.id}>{m.fullName || m.full_name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-surface-700 mb-1">Ibu</label>
                            <select value={formData.motherId} onChange={(e) => setFormData({ ...formData, motherId: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-surface-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
                                <option value="">— Pilih Ibu —</option>
                                {females.map((m: any) => <option key={m.id} value={m.id}>{m.fullName || m.full_name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl border border-surface-200 p-6">
                    <label className="block text-sm font-medium text-surface-700 mb-1">Bio</label>
                    <textarea value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} rows={3} className="w-full px-3 py-2.5 rounded-xl border border-surface-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                </div>
                <button type="submit" disabled={saving} className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-500 transition-colors disabled:opacity-50">
                    <Save className="w-5 h-5" />
                    {saving ? "Menyimpan..." : "Simpan Anggota"}
                </button>
            </form>
        </div>
    );
}
