import Sidebar from "@/Components/layout/Sidebar";
import { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-surface-50">
            <Sidebar />
            {/* Main Content */}
            <div className="lg:pl-64">
                <main className="min-h-screen pb-20 lg:pb-0">
                    <div className="p-3 sm:p-4 lg:p-8">{children}</div>
                </main>
            </div>
        </div>
    );
}
