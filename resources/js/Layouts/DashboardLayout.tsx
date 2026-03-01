import Sidebar from "@/Components/layout/Sidebar";
import { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-surface-50">
            <Sidebar />
            {/* Main content */}
            <div className="lg:pl-64">
                <main className="pb-20 lg:pb-0">
                    {children}
                </main>
            </div>
        </div>
    );
}
