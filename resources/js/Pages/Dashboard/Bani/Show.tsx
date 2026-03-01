import { usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import BaniContent from "./BaniContent";

export default function BaniShowPage() {
    const { bani, userRole } = usePage().props as any;

    return (
        <DashboardLayout>
            <div className="p-4 lg:p-8">
                <BaniContent bani={bani} userRole={userRole} />
            </div>
        </DashboardLayout>
    );
}
