import { usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import BaniContent from "./BaniContent";

export default function BaniShowPage() {
    const { bani, userRole } = usePage().props as any;

    const canEdit = userRole === 'ADMIN' || userRole === 'EDITOR';

    return (
        <DashboardLayout>
            <div className="p-4 lg:p-8">
                <BaniContent
                    baniId={bani.id}
                    baniName={bani.name}
                    members={[]}
                    canEdit={canEdit}
                    initialOrientation={bani.treeOrientation || "VERTICAL"}
                    initialIsPublic={bani.isPublic || false}
                    initialShowWa={bani.showWaPublic || false}
                    initialShowBirth={bani.showBirthPublic || false}
                    initialShowAddress={bani.showAddressPublic || false}
                    initialShowSocmed={bani.showSocmedPublic || false}
                    initialCardTheme={bani.cardTheme || "STANDARD"}
                />
            </div>
        </DashboardLayout>
    );
}
