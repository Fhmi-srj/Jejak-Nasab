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
                    initialOrientation={bani.tree_orientation || "VERTICAL"}
                    initialIsPublic={bani.is_public || false}
                    initialShowWa={bani.show_wa_public || false}
                    initialShowBirth={bani.show_birth_public || false}
                    initialShowAddress={bani.show_address_public || false}
                    initialShowSocmed={bani.show_socmed_public || false}
                    initialCardTheme={bani.card_theme || "STANDARD"}
                />
            </div>
        </DashboardLayout>
    );
}
