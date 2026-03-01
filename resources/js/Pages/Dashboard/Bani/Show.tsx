import { usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import BaniContent from "./BaniContent";

export default function BaniShowPage() {
    const { bani, userRole } = usePage().props as any;

    const canEdit = userRole === "ADMIN" || userRole === "EDITOR";

    return (
        <DashboardLayout>
            <BaniContent
                baniId={bani.id}
                baniName={bani.name}
                members={[]}
                canEdit={canEdit}
                initialOrientation={bani.tree_orientation || bani.treeOrientation || "VERTICAL"}
                initialIsPublic={bani.is_public ?? bani.isPublic ?? false}
                initialShowWa={bani.show_wa_public ?? bani.showWaPublic ?? false}
                initialShowBirth={bani.show_birth_public ?? bani.showBirthPublic ?? false}
                initialShowAddress={bani.show_address_public ?? bani.showAddressPublic ?? false}
                initialShowSocmed={bani.show_socmed_public ?? bani.showSocmedPublic ?? false}
                initialCardTheme={bani.card_theme || bani.cardTheme || "STANDARD"}
            />
        </DashboardLayout>
    );
}
