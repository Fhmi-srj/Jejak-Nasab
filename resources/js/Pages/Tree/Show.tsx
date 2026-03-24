import { usePage } from "@inertiajs/react";
import PublicTreeView from "./PublicTreeView";

export default function TreeShowPage() {
    const { bani } = usePage().props as any;

    return <PublicTreeView members={bani.members || []} orientation={bani.tree_orientation || "VERTICAL"} />;
}
