import { usePage } from "@inertiajs/react";
import PublicTreeView from "./PublicTreeView";

export default function TreeShowPage() {
    const { bani } = usePage().props as any;

    return <PublicTreeView bani={bani} />;
}
