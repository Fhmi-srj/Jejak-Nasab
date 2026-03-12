import { usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import BaniContent from "./BaniContent";

// Tree page wrapper - receives bani data and userRole from controller
export default function BaniTreePage() {
    const { bani, userRole } = usePage().props as any;

    return (
        <DashboardLayout>
            <BaniContent bani={bani} userRole={userRole} isTreeView={true} />
        </DashboardLayout>
    );
}
