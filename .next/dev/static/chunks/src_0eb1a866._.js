(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "formatDateShort",
    ()=>formatDateShort,
    "generateSlug",
    ()=>generateSlug,
    "getInitials",
    ()=>getInitials,
    "getWhatsAppLink",
    ()=>getWhatsAppLink,
    "timeAgo",
    ()=>timeAgo
]);
function cn(...inputs) {
    return inputs.filter(Boolean).join(" ");
}
function formatDate(date) {
    if (!date) return "-";
    const d = new Date(date);
    return d.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
function formatDateShort(date) {
    if (!date) return "-";
    const d = new Date(date);
    return d.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
function getWhatsAppLink(phone) {
    // Remove non-numeric characters
    let cleaned = phone.replace(/\D/g, "");
    // Convert leading 0 to 62 (Indonesia country code)
    if (cleaned.startsWith("0")) {
        cleaned = "62" + cleaned.substring(1);
    }
    return `https://wa.me/${cleaned}`;
}
function getInitials(name) {
    return name.split(" ").map((n)=>n[0]).join("").toUpperCase().substring(0, 2);
}
function generateSlug(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}
function timeAgo(date) {
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
    if (diffInSeconds < 60) return "Baru saja";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} menit lalu`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} jam lalu`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} hari lalu`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} bulan lalu`;
    return `${Math.floor(diffInSeconds / 31536000)} tahun lalu`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ExportTree.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExportTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ExportTree({ treeContainerRef, baniName, stats, isFreeUser = false }) {
    _s();
    const [exporting, setExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showOptions, setShowOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    /**
     * Capture just the tree element using html-to-image
     */ const captureTree = async ()=>{
        const treeEl = treeContainerRef.current;
        if (!treeEl) throw new Error("Tree element not found");
        const overflowParent = treeEl.parentElement;
        const scaledDiv = treeEl.querySelector("[style*='transform']");
        const origTransform = scaledDiv?.style.transform || "";
        const origOverflow = overflowParent?.style.overflow || "";
        const origMaxHeight = overflowParent?.style.maxHeight || "";
        const origHeight = overflowParent?.style.height || "";
        try {
            if (scaledDiv) scaledDiv.style.transform = "scale(1)";
            if (overflowParent) {
                overflowParent.style.overflow = "visible";
                overflowParent.style.maxHeight = "none";
                overflowParent.style.height = "auto";
            }
            await new Promise((r)=>setTimeout(r, 100));
            const { toPng } = await __turbopack_context__.A("[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript, async loader)");
            return await toPng(treeEl, {
                backgroundColor: "#ffffff",
                pixelRatio: 2,
                cacheBust: true
            });
        } finally{
            if (scaledDiv) scaledDiv.style.transform = origTransform;
            if (overflowParent) {
                overflowParent.style.overflow = origOverflow;
                overflowParent.style.maxHeight = origMaxHeight;
                overflowParent.style.height = origHeight;
            }
        }
    };
    /**
     * Use Canvas API to compose a decorated image:
     * Header (green gradient + title + stats) → Tree image → Footer
     */ const captureWithDecoration = async ()=>{
        const treeDataUrl = await captureTree();
        // Load tree image
        const treeImg = await loadImage(treeDataUrl);
        const padding = 60;
        const headerHeight = stats ? 200 : 140;
        const footerHeight = 50;
        const borderWidth = 4;
        const canvasWidth = Math.max(treeImg.width, 800) + padding * 2 + borderWidth * 2;
        const canvasHeight = headerHeight + treeImg.height + footerHeight + padding + borderWidth * 2;
        const canvas = document.createElement("canvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const ctx = canvas.getContext("2d");
        // === WHITE BACKGROUND ===
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        // === BORDER / FRAME ===
        ctx.strokeStyle = "#16a34a";
        ctx.lineWidth = borderWidth;
        const r = 16;
        roundRect(ctx, borderWidth / 2, borderWidth / 2, canvasWidth - borderWidth, canvasHeight - borderWidth, r);
        ctx.stroke();
        // Clip inside border
        ctx.save();
        roundRect(ctx, borderWidth, borderWidth, canvasWidth - borderWidth * 2, canvasHeight - borderWidth * 2, r - 2);
        ctx.clip();
        // === HEADER (green gradient) ===
        const grad = ctx.createLinearGradient(0, 0, canvasWidth, headerHeight);
        grad.addColorStop(0, "#15803d");
        grad.addColorStop(0.5, "#16a34a");
        grad.addColorStop(1, "#22c55e");
        ctx.fillStyle = grad;
        ctx.fillRect(borderWidth, borderWidth, canvasWidth - borderWidth * 2, headerHeight);
        // Title
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 36px 'Segoe UI', system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(`KELUARGA BESAR`, canvasWidth / 2, borderWidth + 50);
        ctx.fillText(baniName.toUpperCase(), canvasWidth / 2, borderWidth + 90);
        // Subtitle
        ctx.font = "16px 'Segoe UI', system-ui, sans-serif";
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fillText("Silsilah Keluarga", canvasWidth / 2, borderWidth + 115);
        // Decorative line
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.fillRect(canvasWidth / 2 - 40, borderWidth + 125, 80, 3);
        // Stats bar
        if (stats) {
            const statItems = [
                {
                    label: "TOTAL",
                    value: stats.totalMembers.toString()
                },
                {
                    label: "HIDUP",
                    value: stats.totalAlive.toString()
                },
                {
                    label: "GENERASI",
                    value: stats.totalGenerations.toString()
                },
                {
                    label: "L / P",
                    value: `${stats.totalMale} / ${stats.totalFemale}`
                }
            ];
            const statWidth = 100;
            const statGap = 16;
            const totalStatsWidth = statItems.length * statWidth + (statItems.length - 1) * statGap;
            let startX = (canvasWidth - totalStatsWidth) / 2;
            statItems.forEach((item)=>{
                // Stat box background
                ctx.fillStyle = "rgba(255,255,255,0.15)";
                roundRect(ctx, startX, borderWidth + 142, statWidth, 48, 10);
                ctx.fill();
                // Value
                ctx.fillStyle = "#ffffff";
                ctx.font = "bold 20px 'Segoe UI', system-ui, sans-serif";
                ctx.textAlign = "center";
                ctx.fillText(item.value, startX + statWidth / 2, borderWidth + 166);
                // Label
                ctx.fillStyle = "rgba(255,255,255,0.65)";
                ctx.font = "10px 'Segoe UI', system-ui, sans-serif";
                ctx.fillText(item.label, startX + statWidth / 2, borderWidth + 182);
                startX += statWidth + statGap;
            });
        }
        // === TREE IMAGE ===
        const treeX = (canvasWidth - treeImg.width) / 2;
        const treeY = headerHeight + padding / 2;
        ctx.drawImage(treeImg, treeX, treeY);
        // === WATERMARK (free users only) ===
        if (isFreeUser) {
            ctx.save();
            ctx.translate(canvasWidth / 2, treeY + treeImg.height / 2);
            ctx.rotate(-30 * Math.PI / 180);
            ctx.fillStyle = "rgba(22, 163, 74, 0.06)";
            ctx.font = "bold 80px 'Segoe UI', system-ui, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("JEJAK NASAB", 0, 0);
            ctx.restore();
        }
        // === FOOTER ===
        const footerY = canvasHeight - footerHeight - borderWidth;
        // Footer line
        ctx.strokeStyle = "#e5e7eb";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(borderWidth + padding, footerY);
        ctx.lineTo(canvasWidth - borderWidth - padding, footerY);
        ctx.stroke();
        // Footer left text
        const today = new Date().toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        ctx.fillStyle = "#9ca3af";
        ctx.font = "13px 'Segoe UI', system-ui, sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(`Dicetak pada ${today}`, borderWidth + padding, footerY + 30);
        // Footer right text
        ctx.fillStyle = "#16a34a";
        ctx.font = "bold 14px 'Segoe UI', system-ui, sans-serif";
        ctx.textAlign = "right";
        ctx.fillText("🌿 Jejak Nasab", canvasWidth - borderWidth - padding, footerY + 30);
        ctx.restore();
        return canvas.toDataURL("image/png");
    };
    const exportAsImage = async ()=>{
        setExporting(true);
        setError("");
        try {
            const dataUrl = await captureWithDecoration();
            const link = document.createElement("a");
            link.download = `${baniName.replace(/\s+/g, "-")}-tree.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error("Export image error:", err);
            setError("Gagal mengekspor gambar");
        } finally{
            setExporting(false);
            setShowOptions(false);
        }
    };
    const exportAsPDF = async ()=>{
        setExporting(true);
        setError("");
        try {
            const dataUrl = await captureWithDecoration();
            const { jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
            const img = await loadImage(dataUrl);
            const imgWidth = img.naturalWidth;
            const imgHeight = img.naturalHeight;
            const isLandscape = imgWidth > imgHeight;
            const pdf = new jsPDF({
                orientation: isLandscape ? "landscape" : "portrait",
                unit: "mm"
            });
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const margin = 5;
            const availWidth = pageWidth - margin * 2;
            const availHeight = pageHeight - margin * 2;
            let finalWidth = availWidth;
            let finalHeight = imgHeight / imgWidth * availWidth;
            if (finalHeight > availHeight) {
                finalHeight = availHeight;
                finalWidth = imgWidth / imgHeight * availHeight;
            }
            const xOffset = (pageWidth - finalWidth) / 2;
            const yOffset = (pageHeight - finalHeight) / 2;
            pdf.addImage(dataUrl, "PNG", xOffset, yOffset, finalWidth, finalHeight);
            pdf.save(`${baniName.replace(/\s+/g, "-")}-tree.pdf`);
        } catch (err) {
            console.error("Export PDF error:", err);
            setError("Gagal mengekspor PDF");
        } finally{
            setExporting(false);
            setShowOptions(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative sm:inline-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    setShowOptions(!showOptions);
                    setError("");
                },
                disabled: exporting,
                className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-primary-600 text-white font-medium text-xs hover:bg-primary-500 transition-colors shadow-md shadow-primary-600/20 disabled:opacity-50",
                children: [
                    exporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-3.5 h-3.5 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportTree.tsx",
                        lineNumber: 295,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                        className: "w-3.5 h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportTree.tsx",
                        lineNumber: 297,
                        columnNumber: 21
                    }, this),
                    "Ekspor"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExportTree.tsx",
                lineNumber: 289,
                columnNumber: 13
            }, this),
            showOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-40",
                        onClick: ()=>setShowOptions(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportTree.tsx",
                        lineNumber: 304,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-full mt-2 w-52 rounded-xl bg-white border border-surface-200 shadow-xl z-50 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: exportAsImage,
                                disabled: exporting,
                                className: "w-full flex items-center gap-3 px-4 py-3 text-sm text-surface-700 hover:bg-surface-50 transition-colors disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                        className: "w-4 h-4 text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExportTree.tsx",
                                        lineNumber: 314,
                                        columnNumber: 29
                                    }, this),
                                    "Simpan sebagai PNG"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExportTree.tsx",
                                lineNumber: 309,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: exportAsPDF,
                                disabled: exporting,
                                className: "w-full flex items-center gap-3 px-4 py-3 text-sm text-surface-700 hover:bg-surface-50 transition-colors border-t border-surface-100 disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-4 h-4 text-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExportTree.tsx",
                                        lineNumber: 322,
                                        columnNumber: 29
                                    }, this),
                                    "Simpan sebagai PDF"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExportTree.tsx",
                                lineNumber: 317,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExportTree.tsx",
                        lineNumber: 308,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-full mt-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-start gap-2 z-50 max-w-[200px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-3 h-3 flex-shrink-0 mt-0.5 cursor-pointer",
                        onClick: ()=>setError("")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportTree.tsx",
                        lineNumber: 331,
                        columnNumber: 21
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExportTree.tsx",
                lineNumber: 330,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExportTree.tsx",
        lineNumber: 288,
        columnNumber: 9
    }, this);
}
_s(ExportTree, "iY4biryl00BghYArCzIKw++gjiQ=");
_c = ExportTree;
// Helper: load image from data URL
function loadImage(src) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(img);
        img.onerror = ()=>reject(new Error("Failed to load image"));
        img.src = src;
    });
}
// Helper: draw rounded rectangle path
function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}
var _c;
__turbopack_context__.k.register(_c, "ExportTree");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/bani/[id]/BaniContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BaniContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-client] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/baby.js [app-client] (ecmascript) <export default as Baby>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tree-pine.js [app-client] (ecmascript) <export default as TreePine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-up.js [app-client] (ecmascript) <export default as ArrowDownUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExportTree.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ============================================
// Social Media Platforms Config
// ============================================
const SOCIAL_MEDIA_PLATFORMS = [
    {
        key: "instagram",
        label: "Instagram",
        placeholder: "@username",
        color: "text-pink-600",
        bg: "bg-pink-50"
    },
    {
        key: "facebook",
        label: "Facebook",
        placeholder: "Nama atau URL",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        key: "tiktok",
        label: "TikTok",
        placeholder: "@username",
        color: "text-surface-900",
        bg: "bg-surface-100"
    },
    {
        key: "twitter",
        label: "Twitter / X",
        placeholder: "@username",
        color: "text-sky-500",
        bg: "bg-sky-50"
    },
    {
        key: "youtube",
        label: "YouTube",
        placeholder: "Channel URL",
        color: "text-red-600",
        bg: "bg-red-50"
    },
    {
        key: "linkedin",
        label: "LinkedIn",
        placeholder: "URL profil",
        color: "text-blue-700",
        bg: "bg-blue-50"
    }
];
function getSocialMediaUrl(platform, value) {
    const v = value.trim();
    // If already a full URL, return as-is
    if (v.startsWith('http://') || v.startsWith('https://')) return v;
    const username = v.replace(/^@/, '');
    switch(platform){
        case 'instagram':
            return `https://instagram.com/${username}`;
        case 'facebook':
            return `https://facebook.com/${username}`;
        case 'tiktok':
            return `https://tiktok.com/@${username}`;
        case 'twitter':
            return `https://x.com/${username}`;
        case 'youtube':
            return `https://youtube.com/${username.startsWith('@') ? username : '@' + username}`;
        case 'linkedin':
            return `https://linkedin.com/in/${username}`;
        default:
            return '#';
    }
}
function SocialMediaIcon({ platform, className = "w-4 h-4" }) {
    switch(platform){
        case "instagram":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 75,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 75,
                columnNumber: 20
            }, this);
        case "facebook":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 77,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 77,
                columnNumber: 20
            }, this);
        case "tiktok":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 79,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 79,
                columnNumber: 20
            }, this);
        case "twitter":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 81,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 81,
                columnNumber: 20
            }, this);
        case "youtube":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 83,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 83,
                columnNumber: 20
            }, this);
        case "linkedin":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 85,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 85,
                columnNumber: 20
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                className: className
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 87,
                columnNumber: 20
            }, this);
    }
}
_c = SocialMediaIcon;
function SocialMediaDynamicFields({ entries, onChange, inputClass, labelClass }) {
    _s();
    const [showPicker, setShowPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const usedKeys = entries.map((e)=>e.key);
    const availablePlatforms = SOCIAL_MEDIA_PLATFORMS.filter((p)=>!usedKeys.includes(p.key));
    const addPlatform = (key)=>{
        onChange([
            ...entries,
            {
                key,
                value: ""
            }
        ]);
        setShowPicker(false);
    };
    const updateValue = (index, value)=>{
        const next = [
            ...entries
        ];
        next[index] = {
            ...next[index],
            value
        };
        onChange(next);
    };
    const removePlatform = (index)=>{
        onChange(entries.filter((_, i)=>i !== index));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: labelClass,
                children: "Sosial Media"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this),
            entries.map((entry, i)=>{
                const platform = SOCIAL_MEDIA_PLATFORMS.find((p)=>p.key === entry.key);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-8 h-8 rounded-lg ${platform?.bg || 'bg-surface-100'} ${platform?.color || 'text-surface-500'} flex items-center justify-center flex-shrink-0`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialMediaIcon, {
                                platform: entry.key,
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 125,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 124,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: entry.value,
                            onChange: (e)=>updateValue(i, e.target.value),
                            className: `${inputClass} flex-1`,
                            placeholder: platform?.placeholder || ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 127,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>removePlatform(i),
                            className: "w-8 h-8 rounded-lg border border-surface-200 text-surface-400 flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 139,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 134,
                            columnNumber: 25
                        }, this)
                    ]
                }, entry.key, true, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 123,
                    columnNumber: 21
                }, this);
            }),
            availablePlatforms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowPicker(!showPicker),
                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-surface-300 text-xs text-surface-500 font-medium hover:border-primary-400 hover:text-primary-600 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 152,
                                columnNumber: 25
                            }, this),
                            "Tambah Sosial Media"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 147,
                        columnNumber: 21
                    }, this),
                    showPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-full mt-1 w-56 bg-white rounded-xl border border-surface-200 shadow-xl z-20 p-1 animate-scale-in",
                        children: availablePlatforms.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>addPlatform(p.key),
                                className: "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-surface-50 transition-colors text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-7 h-7 rounded-md ${p.bg} ${p.color} flex items-center justify-center`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialMediaIcon, {
                                            platform: p.key,
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 166,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 165,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-surface-700 font-medium",
                                        children: p.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 168,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, p.key, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 159,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 157,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 146,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
        lineNumber: 117,
        columnNumber: 9
    }, this);
}
_s(SocialMediaDynamicFields, "PcDCImg70lXrYgxmpw3ewp/jgFc=");
_c1 = SocialMediaDynamicFields;
// ============================================
// Build Tree
// ============================================
function buildTree(members, rootId) {
    if (members.length === 0) return null;
    const memberMap = new Map();
    members.forEach((m)=>memberMap.set(m.id, m));
    let root;
    if (rootId) root = memberMap.get(rootId);
    if (!root) root = members.find((m)=>m.generation === 0);
    if (!root) root = members.reduce((a, b)=>a.generation < b.generation ? a : b);
    function buildNode(member) {
        const children = members.filter((m)=>m.fatherId === member.id || m.motherId === member.id).filter((m, i, arr)=>arr.findIndex((a)=>a.id === m.id) === i).sort((a, b)=>a.fullName.localeCompare(b.fullName));
        return {
            ...member,
            children: children.map((c)=>buildNode(c))
        };
    }
    return buildNode(root);
}
// ============================================
// Quick Add Menu (Dropdown)
// ============================================
function QuickAddMenu({ node, onSelect, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 284,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-xs bg-white rounded-2xl shadow-2xl animate-scale-in overflow-hidden",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pt-4 pb-3 border-b border-surface-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-surface-400 font-medium",
                                children: "Tambah keluarga untuk"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 293,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-surface-900 truncate",
                                children: node.fullName
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 294,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 292,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelect("child"),
                                className: "w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-primary-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__["Baby"], {
                                            className: "w-4.5 h-4.5 text-primary-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 304,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 303,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-surface-800",
                                                children: "Tambah Anak"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 307,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-surface-400",
                                                children: "Anak kandung"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 308,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 306,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 299,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelect("spouse"),
                                className: "w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-pink-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-lg bg-pink-100 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-4.5 h-4.5 text-pink-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 316,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 315,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-surface-800",
                                                children: "Tambah Pasangan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 319,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-surface-400",
                                                children: "Suami / Istri"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 320,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 318,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 311,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelect("sibling"),
                                className: "w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-blue-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-4.5 h-4.5 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 328,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 327,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-surface-800",
                                                children: "Tambah Saudara"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 331,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-surface-400",
                                                children: "Saudara kandung"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 332,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 330,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 323,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 298,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-full py-2.5 rounded-xl text-sm font-medium text-surface-400 hover:bg-surface-50 transition-colors",
                            children: "Batal"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 339,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 338,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 287,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
        lineNumber: 282,
        columnNumber: 9
    }, this);
}
_c2 = QuickAddMenu;
// ============================================
// Quick Add Modal
// ============================================
function QuickAddModal({ context, allMembers, baniId, onClose, onSuccess }) {
    _s1();
    const [fullName, setFullName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("MALE");
    const [isAlive, setIsAlive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [otherParentId, setOtherParentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { type, member } = context;
    // Get spouses from marriage data
    const spouses = [];
    if (member.gender === "MALE" && member.marriagesAsHusband) {
        member.marriagesAsHusband.forEach((m)=>spouses.push(m.wife));
    } else if (member.gender === "FEMALE" && member.marriagesAsWife) {
        member.marriagesAsWife.forEach((m)=>spouses.push(m.husband));
    }
    const hasOneSpouse = spouses.length === 1;
    const hasMultipleSpouses = spouses.length > 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickAddModal.useEffect": ()=>{
            if (type === "child" && hasOneSpouse) {
                setOtherParentId(spouses[0].id);
            }
        }
    }["QuickAddModal.useEffect"], [
        type,
        hasOneSpouse
    ]);
    const title = type === "child" ? `Tambah Anak ${member.fullName}` : type === "spouse" ? `Tambah Pasangan ${member.fullName}` : `Tambah Saudara ${member.fullName}`;
    const subtitle = type === "child" ? "Anggota baru akan menjadi anak dari orang ini" : type === "spouse" ? "Anggota baru akan menjadi pasangan orang ini" : "Anggota baru akan memiliki orang tua yang sama";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickAddModal.useEffect": ()=>{
            if (type === "spouse") {
                setGender(member.gender === "MALE" ? "FEMALE" : "MALE");
            }
        }
    }["QuickAddModal.useEffect"], [
        type,
        member.gender
    ]);
    const otherParentOptions = type === "child" ? spouses.length > 0 ? spouses.map((s)=>({
            id: s.id,
            fullName: s.fullName,
            gender: s.gender,
            generation: 0
        })) : member.gender === "MALE" ? allMembers.filter((m)=>m.gender === "FEMALE") : allMembers.filter((m)=>m.gender === "MALE") : [];
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!fullName.trim()) return;
        setLoading(true);
        setError("");
        try {
            let fatherId;
            let motherId;
            if (type === "child") {
                if (member.gender === "MALE") {
                    fatherId = member.id;
                    motherId = otherParentId || undefined;
                } else {
                    motherId = member.id;
                    fatherId = otherParentId || undefined;
                }
            } else if (type === "sibling") {
                fatherId = member.fatherId || undefined;
                motherId = member.motherId || undefined;
            }
            const res = await fetch("/api/members", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    baniId,
                    fullName: fullName.trim(),
                    nickname: nickname.trim() || undefined,
                    gender,
                    isAlive,
                    fatherId,
                    motherId
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Gagal menyimpan");
                return;
            }
            if (type === "spouse") {
                const husbandId = member.gender === "MALE" ? member.id : data.id;
                const wifeId = member.gender === "FEMALE" ? member.id : data.id;
                const marriageRes = await fetch("/api/marriages", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        husbandId,
                        wifeId
                    })
                });
                if (!marriageRes.ok) {
                    console.error("Failed to create marriage, but member was created");
                }
            }
            onSuccess();
        } catch  {
            setError("Terjadi kesalahan. Silakan coba lagi.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 489,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-scale-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 bg-white rounded-t-2xl border-b border-surface-100 p-5 flex items-start justify-between z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-surface-900",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 493,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-surface-400 mt-0.5",
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 494,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 492,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1.5 rounded-lg hover:bg-surface-100 transition-colors text-surface-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 497,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 496,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 491,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "p-5 space-y-4",
                        children: [
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 503,
                                columnNumber: 25
                            }, this),
                            type === "child" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-xl bg-primary-50 border border-primary-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-primary-700",
                                    children: [
                                        member.gender === "MALE" ? "👨 Ayah" : "👩 Ibu",
                                        ":",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: member.fullName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 511,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 509,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 508,
                                columnNumber: 25
                            }, this),
                            type === "sibling" && (member.fatherId || member.motherId) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-xl bg-blue-50 border border-blue-100 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-blue-600",
                                        children: [
                                            "Orang tua yang sama dengan ",
                                            member.fullName,
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 518,
                                        columnNumber: 29
                                    }, this),
                                    member.fatherId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-medium text-blue-700",
                                        children: [
                                            "👨 Ayah: ",
                                            allMembers.find((m)=>m.id === member.fatherId)?.fullName || "—"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 520,
                                        columnNumber: 33
                                    }, this),
                                    member.motherId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-medium text-blue-700",
                                        children: [
                                            "👩 Ibu: ",
                                            allMembers.find((m)=>m.id === member.motherId)?.fullName || "—"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 525,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 517,
                                columnNumber: 25
                            }, this),
                            type === "spouse" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-xl bg-pink-50 border border-pink-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-pink-700",
                                    children: [
                                        "💑 Pasangan dari ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: member.fullName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 535,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 534,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 533,
                                columnNumber: 25
                            }, this),
                            type === "child" && hasOneSpouse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-xl bg-primary-50 border border-primary-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-primary-700",
                                    children: [
                                        member.gender === "MALE" ? "👩 Ibu" : "👨 Ayah",
                                        ":",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: spouses[0].fullName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 545,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 543,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 542,
                                columnNumber: 25
                            }, this),
                            type === "child" && hasMultipleSpouses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-surface-700 mb-1.5",
                                        children: member.gender === "MALE" ? "Ibu" : "Ayah"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 552,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: otherParentId,
                                        onChange: (e)=>setOtherParentId(e.target.value),
                                        className: "w-full px-3 py-2.5 rounded-xl border border-surface-200 text-sm text-surface-900 focus:outline-none focus:border-primary-500 bg-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: [
                                                    "— Pilih ",
                                                    member.gender === "MALE" ? "Ibu" : "Ayah",
                                                    " —"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 560,
                                                columnNumber: 33
                                            }, this),
                                            otherParentOptions.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: m.id,
                                                    children: m.fullName
                                                }, m.id, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 555,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 551,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-surface-700 mb-1.5",
                                        children: [
                                            "Nama Lengkap ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 573,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 572,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: fullName,
                                        onChange: (e)=>setFullName(e.target.value),
                                        className: "w-full px-3 py-2.5 rounded-xl border border-surface-200 text-sm text-surface-900 placeholder-surface-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-white",
                                        placeholder: "Nama lengkap",
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 575,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 571,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-surface-700 mb-1.5",
                                        children: "Nama Panggilan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 587,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: nickname,
                                        onChange: (e)=>setNickname(e.target.value),
                                        className: "w-full px-3 py-2.5 rounded-xl border border-surface-200 text-sm text-surface-900 placeholder-surface-400 focus:outline-none focus:border-primary-500 bg-white",
                                        placeholder: "Panggilan sehari-hari"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 590,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 586,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-surface-700 mb-1.5",
                                        children: [
                                            "Jenis Kelamin ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 602,
                                                columnNumber: 43
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 601,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setGender("MALE"),
                                                className: `py-2.5 rounded-xl text-sm font-medium transition-all ${gender === "MALE" ? "bg-blue-50 text-blue-700 border-2 border-blue-300" : "bg-white text-surface-500 border border-surface-200 hover:bg-surface-50"}`,
                                                children: "👨 Laki-laki"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 605,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setGender("FEMALE"),
                                                className: `py-2.5 rounded-xl text-sm font-medium transition-all ${gender === "FEMALE" ? "bg-pink-50 text-pink-700 border-2 border-pink-300" : "bg-white text-surface-500 border border-surface-200 hover:bg-surface-50"}`,
                                                children: "👩 Perempuan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 615,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 604,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 600,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-surface-700 mb-1.5",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 630,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsAlive(true),
                                                className: `py-2.5 rounded-xl text-sm font-medium transition-all ${isAlive ? "bg-green-50 text-green-700 border-2 border-green-300" : "bg-white text-surface-500 border border-surface-200 hover:bg-surface-50"}`,
                                                children: "❤️ Hidup"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 632,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsAlive(false),
                                                className: `py-2.5 rounded-xl text-sm font-medium transition-all ${!isAlive ? "bg-surface-100 text-surface-700 border-2 border-surface-300" : "bg-white text-surface-500 border border-surface-200 hover:bg-surface-50"}`,
                                                children: "🕊️ Wafat"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 642,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 631,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 629,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "flex-1 py-2.5 rounded-xl border border-surface-200 text-surface-600 font-medium text-sm hover:bg-surface-50 transition-colors",
                                        children: "Batal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 656,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading || !fullName.trim(),
                                        className: "flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-sm hover:from-primary-500 hover:to-primary-600 transition-all shadow-lg shadow-primary-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-4 h-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 37
                                                }, this),
                                                "Menyimpan..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 37
                                                }, this),
                                                "Simpan"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 663,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 655,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 501,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 490,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
        lineNumber: 488,
        columnNumber: 9
    }, this);
}
_s1(QuickAddModal, "S9cWtgU6SQis/TAQ26GgciRTAu0=");
_c3 = QuickAddModal;
// ============================================
// Tree Node
// ============================================
function TreeNode({ node, level, expanded, toggleExpand, selectedId, onSelect, onShowQuickMenu, canEdit = true, orientation, theme }) {
    const isExpanded = expanded.has(node.id);
    const hasChildren = node.children.length > 0;
    const isSelected = selectedId === node.id;
    const isHorizontal = orientation === "HORIZONTAL";
    const nodeCard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: ()=>onSelect(node.id),
        className: `tree-node relative cursor-pointer rounded-xl sm:rounded-2xl border-2 p-2 sm:p-3 w-28 sm:w-44 text-center transition-all group ${isSelected ? `${theme.card.selectedBorder} ${theme.card.selectedBg} shadow-lg` : node.isAlive ? `${theme.card.border} ${theme.card.bg} hover:opacity-90` : `${theme.card.border} ${theme.card.bg} opacity-80 hover:opacity-100`} ${theme.card.shadow}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-9 h-9 sm:w-12 sm:h-12 rounded-full mx-auto mb-1 sm:mb-2 flex items-center justify-center ${node.gender === "MALE" ? `${theme.avatar.maleBg} ${theme.avatar.maleText}` : `${theme.avatar.femaleBg} ${theme.avatar.femaleText}`}`,
                children: node.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: node.photo,
                    alt: node.fullName,
                    className: "w-9 h-9 sm:w-12 sm:h-12 rounded-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 731,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    className: "w-4 h-4 sm:w-6 sm:h-6"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 733,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 729,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-xs sm:text-sm font-semibold ${theme.card.textPrimary} truncate`,
                children: node.fullName
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 738,
                columnNumber: 13
            }, this),
            node.nickname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-[10px] ${theme.card.textMuted} truncate`,
                children: [
                    "(",
                    node.nickname,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 739,
                columnNumber: 31
            }, this),
            !node.isAlive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-block text-[10px] px-1.5 py-0.5 rounded ${theme.badge.deceasedBg} ${theme.badge.deceasedText} mt-1`,
                children: "Alm."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 741,
                columnNumber: 17
            }, this),
            (()=>{
                const spouseEntries = [];
                if (node.gender === "MALE" && node.marriagesAsHusband) {
                    node.marriagesAsHusband.forEach((m)=>spouseEntries.push({
                            marriageId: m.id,
                            spouseId: m.wife.id,
                            name: m.wife.fullName
                        }));
                } else if (node.gender === "FEMALE" && node.marriagesAsWife) {
                    node.marriagesAsWife.forEach((m)=>spouseEntries.push({
                            marriageId: m.id,
                            spouseId: m.husband.id,
                            name: m.husband.fullName
                        }));
                }
                if (spouseEntries.length === 0) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1.5 space-y-0.5",
                    children: spouseEntries.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center gap-0.5 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full ${node.gender === "MALE" ? `${theme.spouse.maleBg} ${theme.spouse.maleText}` : `${theme.spouse.femaleBg} ${theme.spouse.femaleText}`}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate flex-1 cursor-pointer hover:underline",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onSelect(entry.spouseId);
                                },
                                title: `Lihat ${entry.name}`,
                                children: [
                                    "💑 ",
                                    entry.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 757,
                                columnNumber: 33
                            }, this)
                        }, entry.marriageId, false, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 756,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 754,
                    columnNumber: 21
                }, this);
            })(),
            isSelected && canEdit && node.phoneWhatsapp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWhatsAppLink"])(node.phoneWhatsapp),
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (e)=>e.stopPropagation(),
                className: "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md hover:bg-green-400 transition-all animate-scale-in z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 779,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 772,
                columnNumber: 17
            }, this),
            isSelected && canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onShowQuickMenu(node);
                },
                className: "absolute -top-2 -left-2 z-30 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md hover:bg-emerald-400 transition-all hover:scale-110 animate-scale-in",
                title: "Tambah keluarga",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 790,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 785,
                columnNumber: 17
            }, this),
            hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    toggleExpand(node.id);
                },
                className: isHorizontal ? "absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-md hover:bg-primary-400 transition-colors text-xs" : "absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-md hover:bg-primary-400 transition-colors text-xs",
                children: isHorizontal ? isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 804,
                    columnNumber: 41
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 804,
                    columnNumber: 83
                }, this) : isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 805,
                    columnNumber: 41
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 805,
                    columnNumber: 81
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 796,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
        lineNumber: 719,
        columnNumber: 9
    }, this);
    if (isHorizontal) {
        // ===== HORIZONTAL LAYOUT (left-to-right) =====
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row items-center",
            children: [
                nodeCard,
                hasChildren && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-0.5 w-8 bg-gradient-to-r ${theme.line.color}`
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 821,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: node.children.map((child, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-center relative",
                                    children: [
                                        node.children.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col w-0.5 self-stretch",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex-1 w-full ${index === 0 ? "bg-transparent" : theme.line.color}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 830,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex-1 w-full ${index === node.children.length - 1 ? "bg-transparent" : theme.line.color}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 831,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 829,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-0.5 w-6 ${theme.line.color}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 836,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-2 sm:py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TreeNode, {
                                                node: child,
                                                level: level + 1,
                                                expanded: expanded,
                                                toggleExpand: toggleExpand,
                                                selectedId: selectedId,
                                                onSelect: onSelect,
                                                onShowQuickMenu: onShowQuickMenu,
                                                canEdit: canEdit,
                                                orientation: orientation,
                                                theme: theme
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 840,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 839,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, child.id, true, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 826,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 824,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 819,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
            lineNumber: 815,
            columnNumber: 13
        }, this);
    }
    // ===== VERTICAL LAYOUT (top-to-bottom, default) =====
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        children: [
            nodeCard,
            hasChildren && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-0.5 h-8 bg-gradient-to-b ${theme.line.color}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 871,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: node.children.map((child, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center relative",
                                children: [
                                    node.children.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex w-full h-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex-1 h-full ${index === 0 ? "bg-transparent" : theme.line.color}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 881,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex-1 h-full ${index === node.children.length - 1 ? "bg-transparent" : theme.line.color}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 884,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 879,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-0.5 h-6 ${theme.line.color}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 890,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-2 sm:px-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TreeNode, {
                                            node: child,
                                            level: level + 1,
                                            expanded: expanded,
                                            toggleExpand: toggleExpand,
                                            selectedId: selectedId,
                                            onSelect: onSelect,
                                            onShowQuickMenu: onShowQuickMenu,
                                            canEdit: canEdit,
                                            orientation: orientation,
                                            theme: theme
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 894,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 893,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, child.id, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 876,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 874,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 869,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
        lineNumber: 864,
        columnNumber: 9
    }, this);
}
_c4 = TreeNode;
// ============================================
// Member List Tab (inline)
// ============================================
function MemberListTab({ members, baniId, onSelectMember }) {
    _s2();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterGeneration, setFilterGeneration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const maxGen = Math.max(...members.map((m)=>m.generation), 0);
    const generations = Array.from({
        length: maxGen + 1
    }, (_, i)=>i);
    const filtered = members.filter((m)=>{
        const matchSearch = m.fullName.toLowerCase().includes(search.toLowerCase()) || m.nickname?.toLowerCase().includes(search.toLowerCase()) || m.city?.toLowerCase().includes(search.toLowerCase());
        const matchGen = filterGeneration === null || m.generation === filterGeneration;
        return matchSearch && matchGen;
    });
    const grouped = filtered.reduce((acc, m)=>{
        if (!acc[m.generation]) acc[m.generation] = [];
        acc[m.generation].push(m);
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 946,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                className: "w-full pl-9 pr-3 py-2.5 rounded-xl border border-surface-200 text-sm text-surface-900 placeholder-surface-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all",
                                placeholder: "Cari nama..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 947,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 945,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: filterGeneration === null ? "" : filterGeneration,
                        onChange: (e)=>setFilterGeneration(e.target.value === "" ? null : parseInt(e.target.value)),
                        className: "px-3 py-2.5 rounded-xl border border-surface-200 text-sm text-surface-700 focus:outline-none focus:border-primary-500 bg-white min-w-[100px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Semua"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 960,
                                columnNumber: 21
                            }, this),
                            generations.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: g,
                                    children: [
                                        "Gen ",
                                        g + 1
                                    ]
                                }, g, true, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 962,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 955,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 944,
                columnNumber: 13
            }, this),
            Object.keys(grouped).sort((a, b)=>Number(a) - Number(b)).map((gen)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2",
                            children: [
                                "Generasi ",
                                Number(gen) + 1
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 972,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                            children: grouped[Number(gen)].map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSelectMember(member),
                                    className: "group p-3 rounded-xl bg-white border border-surface-200 hover:border-primary-200 hover:shadow-md transition-all flex items-center gap-3 text-left w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${member.gender === "MALE" ? "bg-blue-50 text-blue-600" : "bg-pink-50 text-pink-600"} ${!member.isAlive ? "opacity-60" : ""}`,
                                            children: member.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: member.photo,
                                                alt: member.fullName,
                                                className: "w-10 h-10 rounded-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 984,
                                                columnNumber: 45
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 986,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 982,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-surface-900 truncate",
                                                            children: member.fullName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                            lineNumber: 991,
                                                            columnNumber: 45
                                                        }, this),
                                                        !member.isAlive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] px-1 py-0.5 rounded bg-surface-100 text-surface-400 flex-shrink-0",
                                                            children: "Alm."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                            lineNumber: 993,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 990,
                                                    columnNumber: 41
                                                }, this),
                                                member.nickname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-surface-400 truncate",
                                                    children: member.nickname
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 996,
                                                    columnNumber: 61
                                                }, this),
                                                member.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-surface-400 mt-0.5",
                                                    children: [
                                                        "📍 ",
                                                        member.city
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 998,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 989,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4 text-surface-300 group-hover:text-primary-500 transition-colors flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 1001,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, member.id, true, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 977,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 975,
                            columnNumber: 25
                        }, this)
                    ]
                }, gen, true, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 971,
                    columnNumber: 21
                }, this)),
            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12 rounded-xl bg-white border border-surface-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        className: "w-10 h-10 text-surface-300 mx-auto mb-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 1010,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-surface-500 text-sm",
                        children: "Tidak ada anggota ditemukan"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 1011,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 1009,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
        lineNumber: 942,
        columnNumber: 9
    }, this);
}
_s2(MemberListTab, "ofgTUygTQYogh+JlKKgbYaCN/KI=");
_c5 = MemberListTab;
// ============================================
// Member Detail Popup
// ============================================
function MemberDetailPopup({ member, baniId, onClose, onEdit, onDelete }) {
    const formatDate = (dateStr)=>{
        if (!dateStr) return null;
        try {
            return new Date(dateStr).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });
        } catch  {
            return dateStr;
        }
    };
    const socialMedia = member.socialMedia;
    const socialEntries = socialMedia ? Object.entries(socialMedia).filter(([, v])=>v) : [];
    const hasContact = member.phoneWhatsapp || socialEntries.length > 0;
    const hasAddress = member.address || member.city;
    const hasDates = member.birthDate || member.deathDate;
    const hasParents = member.father || member.mother;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-start justify-center p-4 pt-8 sm:items-center sm:pt-4",
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 1038,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-scale-in overflow-hidden max-h-[90vh] flex flex-col",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative px-5 pt-5 pb-4 flex-shrink-0 ${member.gender === "MALE" ? "bg-gradient-to-br from-blue-50 to-blue-100/50" : "bg-gradient-to-br from-pink-50 to-pink-100/50"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4 text-surface-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 1049,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1045,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold ${member.gender === "MALE" ? "bg-blue-200/60 text-blue-600" : "bg-pink-200/60 text-pink-600"} ${!member.isAlive ? "opacity-60" : ""}`,
                                        children: member.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: member.photo,
                                            alt: member.fullName,
                                            className: "w-16 h-16 rounded-2xl object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 1054,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-8 h-8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 1056,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1052,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-surface-900",
                                                        children: member.fullName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1061,
                                                        columnNumber: 33
                                                    }, this),
                                                    !member.isAlive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-1.5 py-0.5 rounded-lg bg-surface-200/80 text-surface-500 text-[10px] font-medium",
                                                        children: "🕊️ Almarhum/ah"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1063,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1060,
                                                columnNumber: 29
                                            }, this),
                                            member.nickname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-surface-500",
                                                children: [
                                                    '"',
                                                    member.nickname,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1066,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5 mt-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[11px] px-2 py-0.5 rounded-full font-medium ${member.gender === "MALE" ? "bg-blue-200/60 text-blue-700" : "bg-pink-200/60 text-pink-700"}`,
                                                        children: member.gender === "MALE" ? "👨 Laki-laki" : "👩 Perempuan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1068,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] px-2 py-0.5 rounded-full bg-primary-100/60 text-primary-700 font-medium",
                                                        children: [
                                                            "Generasi ",
                                                            member.generation + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1071,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1067,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1059,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1051,
                                columnNumber: 21
                            }, this),
                            member.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm text-surface-600 leading-relaxed",
                                children: member.bio
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1077,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 1044,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto flex-1 px-5 py-4 space-y-4",
                        children: [
                            hasDates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[11px] font-semibold text-surface-400 uppercase tracking-wider flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1087,
                                                columnNumber: 33
                                            }, this),
                                            " Tanggal"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1086,
                                        columnNumber: 29
                                    }, this),
                                    member.birthDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-surface-400",
                                                children: "Tanggal Lahir"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1091,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-surface-900 font-medium",
                                                children: [
                                                    formatDate(member.birthDate),
                                                    member.birthPlace ? ` — ${member.birthPlace}` : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1092,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1090,
                                        columnNumber: 33
                                    }, this),
                                    member.deathDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-surface-400",
                                                children: "Tanggal Wafat"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1100,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-surface-900 font-medium",
                                                children: formatDate(member.deathDate)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1101,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1099,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1085,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[11px] font-semibold text-surface-400 uppercase tracking-wider flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1110,
                                                columnNumber: 29
                                            }, this),
                                            " Kontak"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1109,
                                        columnNumber: 25
                                    }, this),
                                    hasContact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            member.phoneWhatsapp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWhatsAppLink"])(member.phoneWhatsapp),
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-2 text-sm text-green-600 font-medium hover:text-green-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                            lineNumber: 1122,
                                                            columnNumber: 45
                                                        }, this),
                                                        member.phoneWhatsapp
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 1116,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1115,
                                                columnNumber: 37
                                            }, this),
                                            socialEntries.map(([key, value])=>{
                                                const platform = SOCIAL_MEDIA_PLATFORMS.find((p)=>p.key === key);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: getSocialMediaUrl(key, value),
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex items-center gap-2 hover:opacity-80 transition-opacity",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-6 h-6 rounded-md ${platform?.bg || 'bg-surface-100'} ${platform?.color || 'text-surface-500'} flex items-center justify-center`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialMediaIcon, {
                                                                platform: key,
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1132,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                            lineNumber: 1131,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-surface-400",
                                                                    children: platform?.label || key
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 1135,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-surface-900",
                                                                    children: value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 1136,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                            lineNumber: 1134,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 1130,
                                                    columnNumber: 41
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-surface-400",
                                        children: "Belum diisi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1143,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1108,
                                columnNumber: 21
                            }, this),
                            hasAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[11px] font-semibold text-surface-400 uppercase tracking-wider flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1151,
                                                columnNumber: 33
                                            }, this),
                                            " Alamat"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1150,
                                        columnNumber: 29
                                    }, this),
                                    member.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-surface-900",
                                        children: member.address
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1153,
                                        columnNumber: 48
                                    }, this),
                                    member.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-surface-600",
                                        children: [
                                            "📍 ",
                                            member.city
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1154,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1149,
                                columnNumber: 25
                            }, this),
                            hasParents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[11px] font-semibold text-surface-400 uppercase tracking-wider flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1162,
                                                columnNumber: 33
                                            }, this),
                                            " Orang Tua"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1161,
                                        columnNumber: 29
                                    }, this),
                                    member.father && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 1167,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1166,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-surface-400",
                                                        children: "Ayah"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1170,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-surface-900 font-medium",
                                                        children: member.father.fullName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1171,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1169,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1165,
                                        columnNumber: 33
                                    }, this),
                                    member.mother && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 1178,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1177,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-surface-400",
                                                        children: "Ibu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1181,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-surface-900 font-medium",
                                                        children: member.mother.fullName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1182,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1180,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1176,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1160,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 1082,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 pb-4 pt-2 flex gap-2 flex-shrink-0 border-t border-surface-100",
                        children: [
                            onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (confirm(`Hapus anggota "${member.fullName}"? Tindakan ini tidak dapat dibatalkan.`)) {
                                        onDelete(member.id);
                                    }
                                },
                                className: "px-3 py-2.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center",
                                title: "Hapus",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 1202,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1193,
                                columnNumber: 25
                            }, this),
                            member.phoneWhatsapp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWhatsAppLink"])(member.phoneWhatsapp),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-400 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1212,
                                        columnNumber: 29
                                    }, this),
                                    "WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1206,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onClose();
                                    onEdit(member.id);
                                },
                                className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-primary-200 text-primary-600 text-sm font-medium hover:bg-primary-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1220,
                                        columnNumber: 25
                                    }, this),
                                    "Edit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1216,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 1191,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 1039,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
        lineNumber: 1037,
        columnNumber: 9
    }, this);
}
_c6 = MemberDetailPopup;
// ============================================
// Add Member Modal (Popup Form)
// ============================================
function AddMemberModal({ baniId, existingMembers, onClose, onSuccess }) {
    _s3();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Form state
    const [fullName, setFullName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("MALE");
    const [birthDate, setBirthDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [birthPlace, setBirthPlace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAlive, setIsAlive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [deathDate, setDeathDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneWhatsapp, setPhoneWhatsapp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [socialMediaEntries, setSocialMediaEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bio, setBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fatherId, setFatherId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [motherId, setMotherId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const fathers = existingMembers.filter((m)=>m.gender === "MALE");
    const mothers = existingMembers.filter((m)=>m.gender === "FEMALE");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const socialMedia = {};
            socialMediaEntries.forEach((e)=>{
                if (e.value) socialMedia[e.key] = e.value;
            });
            const res = await fetch("/api/members", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    baniId,
                    fullName,
                    nickname: nickname || undefined,
                    gender,
                    birthDate: birthDate || undefined,
                    birthPlace: birthPlace || undefined,
                    isAlive,
                    deathDate: !isAlive && deathDate ? deathDate : undefined,
                    address: address || undefined,
                    city: city || undefined,
                    phoneWhatsapp: phoneWhatsapp || undefined,
                    socialMedia: Object.keys(socialMedia).length > 0 ? socialMedia : undefined,
                    bio: bio || undefined,
                    fatherId: fatherId || undefined,
                    motherId: motherId || undefined
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Gagal menyimpan");
                return;
            }
            onSuccess();
            onClose();
        } catch  {
            setError("Terjadi kesalahan. Silakan coba lagi.");
        } finally{
            setLoading(false);
        }
    };
    const inputClass = "w-full px-3 py-2.5 rounded-xl border border-surface-200 text-sm text-surface-900 placeholder-surface-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all";
    const labelClass = "block text-xs font-medium text-surface-600 mb-1";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-start justify-center p-4 pt-8 sm:items-center sm:pt-4",
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 1317,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-scale-in overflow-hidden max-h-[90vh] flex flex-col",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-5 py-4 border-b border-surface-100 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-surface-900",
                                        children: "Tambah Anggota"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1325,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-surface-400",
                                        children: "Tambahkan anggota baru ke pohon nasab"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1326,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1324,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center hover:bg-surface-200 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4 text-surface-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 1332,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1328,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 1323,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto flex-1 px-5 py-4",
                        children: [
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1339,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                id: "add-member-form",
                                onSubmit: handleSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-semibold text-surface-400 uppercase tracking-wider",
                                                children: "Data Dasar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1347,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: [
                                                            "Nama Lengkap ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1350,
                                                                columnNumber: 76
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1350,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: fullName,
                                                        onChange: (e)=>setFullName(e.target.value),
                                                        className: inputClass,
                                                        placeholder: "Nama lengkap",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1351,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1349,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Nama Panggilan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1355,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: nickname,
                                                        onChange: (e)=>setNickname(e.target.value),
                                                        className: inputClass,
                                                        placeholder: "Panggilan sehari-hari"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1356,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1354,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: [
                                                            "Jenis Kelamin ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1360,
                                                                columnNumber: 77
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1360,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setGender("MALE"),
                                                                className: `flex-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${gender === "MALE" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-surface-200 text-surface-500"}`,
                                                                children: "👨 Laki-laki"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1362,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setGender("FEMALE"),
                                                                className: `flex-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${gender === "FEMALE" ? "border-pink-500 bg-pink-50 text-pink-700" : "border-surface-200 text-surface-500"}`,
                                                                children: "👩 Perempuan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1366,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1361,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1359,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Tanggal Lahir"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1375,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: birthDate,
                                                                onChange: (e)=>setBirthDate(e.target.value),
                                                                className: inputClass
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1376,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1374,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Tempat Lahir"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1379,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: birthPlace,
                                                                onChange: (e)=>setBirthPlace(e.target.value),
                                                                className: inputClass,
                                                                placeholder: "Kota"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1380,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1378,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1373,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1385,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setIsAlive(true);
                                                                    setDeathDate("");
                                                                },
                                                                className: `flex-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${isAlive ? "border-green-500 bg-green-50 text-green-700" : "border-surface-200 text-surface-500"}`,
                                                                children: "❤️ Masih Hidup"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1387,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setIsAlive(false),
                                                                className: `flex-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${!isAlive ? "border-surface-500 bg-surface-100 text-surface-700" : "border-surface-200 text-surface-500"}`,
                                                                children: "🕊️ Sudah Wafat"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1391,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1386,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1384,
                                                columnNumber: 29
                                            }, this),
                                            !isAlive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Tanggal Wafat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1400,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: deathDate,
                                                        onChange: (e)=>setDeathDate(e.target.value),
                                                        className: inputClass
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1401,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1399,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1346,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 pt-2 border-t border-surface-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-semibold text-surface-400 uppercase tracking-wider",
                                                children: "Relasi Keluarga"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1408,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Ayah"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1411,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: fatherId,
                                                        onChange: (e)=>setFatherId(e.target.value),
                                                        className: inputClass,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "-- Pilih Ayah --"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1413,
                                                                columnNumber: 37
                                                            }, this),
                                                            fathers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: m.id,
                                                                    children: [
                                                                        m.fullName,
                                                                        " (Gen. ",
                                                                        m.generation + 1,
                                                                        ")"
                                                                    ]
                                                                }, m.id, true, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 1415,
                                                                    columnNumber: 41
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1412,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1410,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Ibu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1421,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: motherId,
                                                        onChange: (e)=>setMotherId(e.target.value),
                                                        className: inputClass,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "-- Pilih Ibu --"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1423,
                                                                columnNumber: 37
                                                            }, this),
                                                            mothers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: m.id,
                                                                    children: [
                                                                        m.fullName,
                                                                        " (Gen. ",
                                                                        m.generation + 1,
                                                                        ")"
                                                                    ]
                                                                }, m.id, true, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 1425,
                                                                    columnNumber: 41
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1422,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1420,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1407,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 pt-2 border-t border-surface-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-semibold text-surface-400 uppercase tracking-wider",
                                                children: "Kontak & Alamat"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1433,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "No. WhatsApp"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1436,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        value: phoneWhatsapp,
                                                        onChange: (e)=>setPhoneWhatsapp(e.target.value),
                                                        className: inputClass,
                                                        placeholder: "08xxxxxxxxxx"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1437,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1435,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialMediaDynamicFields, {
                                                entries: socialMediaEntries,
                                                onChange: setSocialMediaEntries,
                                                inputClass: inputClass,
                                                labelClass: labelClass
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1440,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Alamat"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1449,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: address,
                                                                onChange: (e)=>setAddress(e.target.value),
                                                                className: inputClass,
                                                                placeholder: "Alamat"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1450,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1448,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Kota"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1453,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: city,
                                                                onChange: (e)=>setCity(e.target.value),
                                                                className: inputClass,
                                                                placeholder: "Kota"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1454,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1452,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1447,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Bio / Catatan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1459,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: bio,
                                                        onChange: (e)=>setBio(e.target.value),
                                                        rows: 2,
                                                        className: `${inputClass} resize-none`,
                                                        placeholder: "Catatan tentang anggota ini"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1460,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1458,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1432,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1344,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 1337,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 px-5 py-4 border-t border-surface-100 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "flex-1 py-2.5 rounded-xl border border-surface-200 text-surface-600 font-medium text-sm hover:bg-surface-50 transition-colors",
                                children: "Batal"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1468,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                form: "add-member-form",
                                disabled: loading,
                                className: "flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-sm hover:from-primary-500 hover:to-primary-600 transition-all shadow-lg shadow-primary-600/20 disabled:opacity-50 flex items-center justify-center gap-2",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 1483,
                                            columnNumber: 33
                                        }, this),
                                        "Menyimpan..."
                                    ]
                                }, void 0, true) : "Simpan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1475,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 1467,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 1318,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
        lineNumber: 1316,
        columnNumber: 9
    }, this);
}
_s3(AddMemberModal, "O5RhMSf3VcdYBO8Wl7Px3fmtV7k=");
_c7 = AddMemberModal;
// ============================================
// Edit Member Popup
// ============================================
function EditMemberPopup({ memberId, baniId, allMembers, onClose, onSuccess }) {
    _s4();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Form state
    const [fullName, setFullName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("MALE");
    const [birthDate, setBirthDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [birthPlace, setBirthPlace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAlive, setIsAlive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [deathDate, setDeathDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneWhatsapp, setPhoneWhatsapp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [socialMediaEntries, setSocialMediaEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bio, setBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fatherId, setFatherId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [motherId, setMotherId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditMemberPopup.useEffect": ()=>{
            const fetchData = {
                "EditMemberPopup.useEffect.fetchData": async ()=>{
                    try {
                        const res = await fetch(`/api/members/${memberId}`, {
                            credentials: 'include'
                        });
                        if (!res.ok) {
                            const errData = await res.json().catch({
                                "EditMemberPopup.useEffect.fetchData": ()=>({})
                            }["EditMemberPopup.useEffect.fetchData"]);
                            setError(errData.error || `Error ${res.status}`);
                            setLoading(false);
                            return;
                        }
                        const data = await res.json();
                        setFullName(data.fullName);
                        setNickname(data.nickname || "");
                        setGender(data.gender);
                        setBirthDate(data.birthDate ? data.birthDate.split("T")[0] : "");
                        setBirthPlace(data.birthPlace || "");
                        setIsAlive(data.isAlive);
                        setDeathDate(data.deathDate ? data.deathDate.split("T")[0] : "");
                        setAddress(data.address || "");
                        setCity(data.city || "");
                        setPhoneWhatsapp(data.phoneWhatsapp || "");
                        // Load social media dynamically
                        const sm = data.socialMedia;
                        if (sm) {
                            setSocialMediaEntries(Object.entries(sm).filter({
                                "EditMemberPopup.useEffect.fetchData": ([, v])=>v
                            }["EditMemberPopup.useEffect.fetchData"]).map({
                                "EditMemberPopup.useEffect.fetchData": ([key, value])=>({
                                        key,
                                        value: value
                                    })
                            }["EditMemberPopup.useEffect.fetchData"]));
                        }
                        setBio(data.bio || "");
                        setFatherId(data.fatherId || "");
                        setMotherId(data.motherId || "");
                    } catch (err) {
                        console.error("Failed to fetch:", err);
                        setError("Gagal memuat data");
                    } finally{
                        setLoading(false);
                    }
                }
            }["EditMemberPopup.useEffect.fetchData"];
            fetchData();
        }
    }["EditMemberPopup.useEffect"], [
        memberId
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setSaving(true);
        try {
            const socialMedia = {};
            socialMediaEntries.forEach((e)=>{
                if (e.value) socialMedia[e.key] = e.value;
            });
            const res = await fetch(`/api/members/${memberId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName,
                    nickname: nickname || undefined,
                    gender,
                    birthDate: birthDate || undefined,
                    birthPlace: birthPlace || undefined,
                    isAlive,
                    deathDate: !isAlive && deathDate ? deathDate : undefined,
                    address: address || undefined,
                    city: city || undefined,
                    phoneWhatsapp: phoneWhatsapp || undefined,
                    socialMedia: Object.keys(socialMedia).length > 0 ? socialMedia : undefined,
                    bio: bio || undefined,
                    fatherId: fatherId || undefined,
                    motherId: motherId || undefined
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error);
                return;
            }
            onSuccess();
        } catch  {
            setError("Terjadi kesalahan. Silakan coba lagi.");
        } finally{
            setSaving(false);
        }
    };
    const handleDelete = async ()=>{
        if (!confirm("Apakah Anda yakin ingin menghapus anggota ini? Tindakan ini tidak dapat dibatalkan.")) return;
        setDeleting(true);
        try {
            const res = await fetch(`/api/members/${memberId}`, {
                method: "DELETE"
            });
            if (!res.ok) {
                const data = await res.json();
                setError(data.error);
                return;
            }
            onSuccess();
        } catch  {
            setError("Gagal menghapus anggota");
        } finally{
            setDeleting(false);
        }
    };
    const fathers = allMembers.filter((m)=>m.gender === "MALE" && m.id !== memberId);
    const mothers = allMembers.filter((m)=>m.gender === "FEMALE" && m.id !== memberId);
    const inputClass = "w-full px-3 py-2.5 rounded-xl border border-surface-200 text-sm text-surface-900 placeholder-surface-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all";
    const labelClass = "block text-xs font-medium text-surface-600 mb-1";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-start justify-center p-4 pt-8 sm:items-center sm:pt-4",
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 1645,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-scale-in overflow-hidden max-h-[90vh] flex flex-col",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-5 py-4 border-b border-surface-100 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-surface-900",
                                        children: "Edit Anggota"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1653,
                                        columnNumber: 25
                                    }, this),
                                    fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-surface-400",
                                        children: [
                                            "Ubah data ",
                                            fullName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1654,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1652,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center hover:bg-surface-200 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4 text-surface-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 1660,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1656,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 1651,
                        columnNumber: 17
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-8 h-8 animate-spin text-primary-500"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 1666,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 1665,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-y-auto flex-1 px-5 py-4",
                                children: [
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1673,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        id: "edit-member-form",
                                        onSubmit: handleSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xs font-semibold text-surface-400 uppercase tracking-wider",
                                                        children: "Data Dasar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1679,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: [
                                                                    "Nama Lengkap ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1682,
                                                                        columnNumber: 84
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1682,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: fullName,
                                                                onChange: (e)=>setFullName(e.target.value),
                                                                className: inputClass,
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1683,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1681,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Nama Panggilan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1687,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: nickname,
                                                                onChange: (e)=>setNickname(e.target.value),
                                                                className: inputClass
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1688,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1686,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Jenis Kelamin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1692,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setGender("MALE"),
                                                                        className: `flex-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${gender === "MALE" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-surface-200 text-surface-500"}`,
                                                                        children: "👨 Laki-laki"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1694,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setGender("FEMALE"),
                                                                        className: `flex-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${gender === "FEMALE" ? "border-pink-500 bg-pink-50 text-pink-700" : "border-surface-200 text-surface-500"}`,
                                                                        children: "👩 Perempuan"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1698,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1693,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1691,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: labelClass,
                                                                        children: "Tanggal Lahir"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1707,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: birthDate,
                                                                        onChange: (e)=>setBirthDate(e.target.value),
                                                                        className: inputClass
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1708,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1706,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: labelClass,
                                                                        children: "Tempat Lahir"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1711,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: birthPlace,
                                                                        onChange: (e)=>setBirthPlace(e.target.value),
                                                                        className: inputClass
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1712,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1710,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1705,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1717,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            setIsAlive(true);
                                                                            setDeathDate("");
                                                                        },
                                                                        className: `flex-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${isAlive ? "border-green-500 bg-green-50 text-green-700" : "border-surface-200 text-surface-500"}`,
                                                                        children: "❤️ Masih Hidup"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1719,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setIsAlive(false),
                                                                        className: `flex-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${!isAlive ? "border-surface-500 bg-surface-100 text-surface-700" : "border-surface-200 text-surface-500"}`,
                                                                        children: "🕊️ Sudah Wafat"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1723,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1718,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1716,
                                                        columnNumber: 37
                                                    }, this),
                                                    !isAlive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Tanggal Wafat"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1732,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: deathDate,
                                                                onChange: (e)=>setDeathDate(e.target.value),
                                                                className: inputClass
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1733,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1731,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1678,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 pt-2 border-t border-surface-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xs font-semibold text-surface-400 uppercase tracking-wider",
                                                        children: "Relasi Keluarga"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1740,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Ayah"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1743,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: fatherId,
                                                                onChange: (e)=>setFatherId(e.target.value),
                                                                className: inputClass,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "-- Pilih Ayah --"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1745,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    fathers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: m.id,
                                                                            children: [
                                                                                m.fullName,
                                                                                " (Gen. ",
                                                                                m.generation + 1,
                                                                                ")"
                                                                            ]
                                                                        }, m.id, true, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 1747,
                                                                            columnNumber: 49
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1744,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1742,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Ibu"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1753,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: motherId,
                                                                onChange: (e)=>setMotherId(e.target.value),
                                                                className: inputClass,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "-- Pilih Ibu --"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1755,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    mothers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: m.id,
                                                                            children: [
                                                                                m.fullName,
                                                                                " (Gen. ",
                                                                                m.generation + 1,
                                                                                ")"
                                                                            ]
                                                                        }, m.id, true, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 1757,
                                                                            columnNumber: 49
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1754,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1752,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1739,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 pt-2 border-t border-surface-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xs font-semibold text-surface-400 uppercase tracking-wider",
                                                        children: "Kontak & Alamat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1765,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "No. WhatsApp"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1768,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                value: phoneWhatsapp,
                                                                onChange: (e)=>setPhoneWhatsapp(e.target.value),
                                                                className: inputClass,
                                                                placeholder: "08xxxxxxxxxx"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1769,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1767,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialMediaDynamicFields, {
                                                        entries: socialMediaEntries,
                                                        onChange: setSocialMediaEntries,
                                                        inputClass: inputClass,
                                                        labelClass: labelClass
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1772,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: labelClass,
                                                                        children: "Alamat"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1781,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: address,
                                                                        onChange: (e)=>setAddress(e.target.value),
                                                                        className: inputClass
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1782,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1780,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: labelClass,
                                                                        children: "Kota"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1785,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: city,
                                                                        onChange: (e)=>setCity(e.target.value),
                                                                        className: inputClass
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 1786,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1784,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1779,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Bio / Catatan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1791,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: bio,
                                                                onChange: (e)=>setBio(e.target.value),
                                                                rows: 2,
                                                                className: `${inputClass} resize-none`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 1792,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 1790,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 1764,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1676,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1671,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 px-5 py-4 border-t border-surface-100 flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleDelete,
                                        disabled: deleting,
                                        className: "px-3 py-2.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50 flex items-center gap-1",
                                        children: deleting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 1806,
                                            columnNumber: 45
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 1806,
                                            columnNumber: 92
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1800,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "flex-1 py-2.5 rounded-xl border border-surface-200 text-surface-600 font-medium text-sm hover:bg-surface-50 transition-colors",
                                        children: "Batal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1808,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        form: "edit-member-form",
                                        disabled: saving,
                                        className: "flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-sm hover:from-primary-500 hover:to-primary-600 transition-all shadow-lg shadow-primary-600/20 disabled:opacity-50 flex items-center justify-center gap-2",
                                        children: saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-4 h-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 1823,
                                                    columnNumber: 41
                                                }, this),
                                                "Menyimpan..."
                                            ]
                                        }, void 0, true) : "Simpan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 1815,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 1799,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 1646,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
        lineNumber: 1644,
        columnNumber: 9
    }, this);
}
_s4(EditMemberPopup, "WXm6qkHkCYmu/TwBf8leEFSn0fE=");
_c8 = EditMemberPopup;
function BaniContent({ baniId, baniName, members, canEdit, initialOrientation = "VERTICAL", initialIsPublic = false, initialShowWa = false, initialShowBirth = false, initialShowAddress = false, initialShowSocmed = false, isFreeUser = false }) {
    _s5();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("tree");
    // Tree state
    const [treeMembers, setTreeMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingTree, setLoadingTree] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Compute export stats from treeMembers
    const exportStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BaniContent.useMemo[exportStats]": ()=>{
            if (treeMembers.length === 0) return undefined;
            const totalMale = treeMembers.filter({
                "BaniContent.useMemo[exportStats]": (m)=>m.gender === 'MALE'
            }["BaniContent.useMemo[exportStats]"]).length;
            const totalFemale = treeMembers.filter({
                "BaniContent.useMemo[exportStats]": (m)=>m.gender === 'FEMALE'
            }["BaniContent.useMemo[exportStats]"]).length;
            const totalAlive = treeMembers.filter({
                "BaniContent.useMemo[exportStats]": (m)=>m.isAlive
            }["BaniContent.useMemo[exportStats]"]).length;
            const maxGen = Math.max(...treeMembers.map({
                "BaniContent.useMemo[exportStats].maxGen": (m)=>m.generation
            }["BaniContent.useMemo[exportStats].maxGen"]), 0);
            return {
                totalMembers: treeMembers.length,
                totalAlive,
                totalMale,
                totalFemale,
                totalGenerations: maxGen + 1
            };
        }
    }["BaniContent.useMemo[exportStats]"], [
        treeMembers
    ]);
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const treeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Quick add
    const [quickAddContext, setQuickAddContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [quickAddMenuNode, setQuickAddMenuNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailPopupMember, setDetailPopupMember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAddMemberModal, setShowAddMemberModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editPopupMemberId, setEditPopupMemberId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Settings popup
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [treeOrientation, setTreeOrientation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialOrientation);
    const [isPublic, setIsPublic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialIsPublic);
    const [savingSettings, setSavingSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showWaPublic, setShowWaPublic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialShowWa);
    const [showBirthPublic, setShowBirthPublic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialShowBirth);
    const [showAddressPublic, setShowAddressPublic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialShowAddress);
    const [showSocmedPublic, setShowSocmedPublic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialShowSocmed);
    // Fetch tree members (with marriage data)
    const fetchTreeMembers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[fetchTreeMembers]": async ()=>{
            try {
                const res = await fetch(`/api/members?baniId=${baniId}`);
                const data = await res.json();
                setTreeMembers(data);
                const toExpand = new Set();
                data.forEach({
                    "BaniContent.useCallback[fetchTreeMembers]": (m)=>{
                        if (m.generation <= 1) toExpand.add(m.id);
                    }
                }["BaniContent.useCallback[fetchTreeMembers]"]);
                setExpanded(toExpand);
            } catch (err) {
                console.error("Failed to fetch:", err);
            } finally{
                setLoadingTree(false);
            }
        }
    }["BaniContent.useCallback[fetchTreeMembers]"], [
        baniId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaniContent.useEffect": ()=>{
            fetchTreeMembers();
        }
    }["BaniContent.useEffect"], [
        fetchTreeMembers
    ]);
    const tree = buildTree(treeMembers);
    const toggleExpand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[toggleExpand]": (id)=>{
            setExpanded({
                "BaniContent.useCallback[toggleExpand]": (prev)=>{
                    const next = new Set(prev);
                    if (next.has(id)) next.delete(id);
                    else next.add(id);
                    return next;
                }
            }["BaniContent.useCallback[toggleExpand]"]);
        }
    }["BaniContent.useCallback[toggleExpand]"], []);
    const expandAll = ()=>setExpanded(new Set(treeMembers.map((m)=>m.id)));
    const collapseAll = ()=>setExpanded(new Set());
    const selectedMember = selectedId ? treeMembers.find((m)=>m.id === selectedId) : null;
    // No auto-open popup — detail shown inline below tree
    const zoomIn = ()=>setScale((s)=>Math.min(s + 0.1, 2));
    const zoomOut = ()=>setScale((s)=>Math.max(s - 0.1, 0.3));
    const resetZoom = ()=>setScale(1);
    const toggleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[toggleFullscreen]": ()=>{
            if (!containerRef.current) return;
            if (!document.fullscreenElement) {
                containerRef.current.requestFullscreen().catch({
                    "BaniContent.useCallback[toggleFullscreen]": (err)=>{
                        console.error("Fullscreen error:", err);
                    }
                }["BaniContent.useCallback[toggleFullscreen]"]);
            } else {
                document.exitFullscreen();
            }
        }
    }["BaniContent.useCallback[toggleFullscreen]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaniContent.useEffect": ()=>{
            const handleFsChange = {
                "BaniContent.useEffect.handleFsChange": ()=>{
                    setIsFullscreen(!!document.fullscreenElement);
                }
            }["BaniContent.useEffect.handleFsChange"];
            document.addEventListener("fullscreenchange", handleFsChange);
            return ({
                "BaniContent.useEffect": ()=>document.removeEventListener("fullscreenchange", handleFsChange)
            })["BaniContent.useEffect"];
        }
    }["BaniContent.useEffect"], []);
    // Pinch-to-zoom using Pointer Events API (works better on mobile)
    const scaleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(scale);
    scaleRef.current = scale;
    const pointersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const pinchStartDistRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const pinchStartScaleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const handlePointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[handlePointerDown]": (e)=>{
            pointersRef.current.set(e.pointerId, {
                x: e.clientX,
                y: e.clientY
            });
            e.target.setPointerCapture?.(e.pointerId);
            if (pointersRef.current.size === 2) {
                const pts = Array.from(pointersRef.current.values());
                const dx = pts[0].x - pts[1].x;
                const dy = pts[0].y - pts[1].y;
                pinchStartDistRef.current = Math.sqrt(dx * dx + dy * dy);
                pinchStartScaleRef.current = scaleRef.current;
            }
        }
    }["BaniContent.useCallback[handlePointerDown]"], []);
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[handlePointerMove]": (e)=>{
            if (!pointersRef.current.has(e.pointerId)) return;
            pointersRef.current.set(e.pointerId, {
                x: e.clientX,
                y: e.clientY
            });
            if (pointersRef.current.size === 2 && pinchStartDistRef.current > 0) {
                e.preventDefault();
                const pts = Array.from(pointersRef.current.values());
                const dx = pts[0].x - pts[1].x;
                const dy = pts[0].y - pts[1].y;
                const currentDist = Math.sqrt(dx * dx + dy * dy);
                const ratio = currentDist / pinchStartDistRef.current;
                const newScale = Math.min(Math.max(pinchStartScaleRef.current * ratio, 0.2), 3);
                setScale(Math.round(newScale * 100) / 100);
            }
        }
    }["BaniContent.useCallback[handlePointerMove]"], []);
    const handlePointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[handlePointerUp]": (e)=>{
            pointersRef.current.delete(e.pointerId);
            if (pointersRef.current.size < 2) {
                pinchStartDistRef.current = 0;
            }
        }
    }["BaniContent.useCallback[handlePointerUp]"], []);
    const handleQuickAdd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[handleQuickAdd]": (member, type)=>{
            setQuickAddContext({
                type,
                member
            });
        }
    }["BaniContent.useCallback[handleQuickAdd]"], []);
    const handleShowQuickMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[handleShowQuickMenu]": (node)=>{
            setQuickAddMenuNode(node);
        }
    }["BaniContent.useCallback[handleShowQuickMenu]"], []);
    const handleQuickMenuSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[handleQuickMenuSelect]": (type)=>{
            if (quickAddMenuNode) {
                handleQuickAdd(quickAddMenuNode, type);
                setQuickAddMenuNode(null);
            }
        }
    }["BaniContent.useCallback[handleQuickMenuSelect]"], [
        quickAddMenuNode,
        handleQuickAdd
    ]);
    const handleQuickAddSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[handleQuickAddSuccess]": ()=>{
            setQuickAddContext(null);
            fetchTreeMembers();
        }
    }["BaniContent.useCallback[handleQuickAddSuccess]"], [
        fetchTreeMembers
    ]);
    const handleAddMemberSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[handleAddMemberSuccess]": ()=>{
            fetchTreeMembers();
            window.location.reload();
        }
    }["BaniContent.useCallback[handleAddMemberSuccess]"], [
        fetchTreeMembers
    ]);
    // Settings handlers
    const saveSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[saveSettings]": async (newOrientation, newIsPublic, extras)=>{
            setSavingSettings(true);
            try {
                await fetch(`/api/banis/${baniId}/settings`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        treeOrientation: newOrientation,
                        isPublic: newIsPublic,
                        ...extras
                    })
                });
                setTreeOrientation(newOrientation);
                setIsPublic(newIsPublic);
                if (extras?.showWaPublic !== undefined) setShowWaPublic(extras.showWaPublic);
                if (extras?.showBirthPublic !== undefined) setShowBirthPublic(extras.showBirthPublic);
                if (extras?.showAddressPublic !== undefined) setShowAddressPublic(extras.showAddressPublic);
                if (extras?.showSocmedPublic !== undefined) setShowSocmedPublic(extras.showSocmedPublic);
            } catch (err) {
                console.error("Save settings error:", err);
            } finally{
                setSavingSettings(false);
            }
        }
    }["BaniContent.useCallback[saveSettings]"], [
        baniId
    ]);
    const publicUrl = ("TURBOPACK compile-time truthy", 1) ? `${window.location.origin}/tree/${baniId}` : "TURBOPACK unreachable";
    const copyPublicLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaniContent.useCallback[copyPublicLink]": async ()=>{
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(publicUrl);
                } else {
                    // Fallback for non-HTTPS / mobile
                    const textArea = document.createElement('textarea');
                    textArea.value = publicUrl;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-9999px';
                    textArea.style.top = '-9999px';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                }
                setCopied(true);
                setTimeout({
                    "BaniContent.useCallback[copyPublicLink]": ()=>setCopied(false)
                }["BaniContent.useCallback[copyPublicLink]"], 2000);
            } catch  {
                // If all else fails, prompt user to copy manually
                window.prompt('Salin link ini:', publicUrl);
            }
        }
    }["BaniContent.useCallback[copyPublicLink]"], [
        publicUrl
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex rounded-xl bg-surface-100 p-1 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("tree"),
                                        className: `flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "tree" ? "bg-white text-primary-700 shadow-sm" : "text-surface-500 hover:text-surface-700"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2106,
                                                columnNumber: 29
                                            }, this),
                                            "Pohon Nasab"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2099,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("list"),
                                        className: `flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "list" ? "bg-white text-primary-700 shadow-sm" : "text-surface-500 hover:text-surface-700"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2116,
                                                columnNumber: 29
                                            }, this),
                                            "Daftar (",
                                            members.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2109,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 2098,
                                columnNumber: 21
                            }, this),
                            canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowSettings(true),
                                className: "p-2.5 rounded-xl bg-white border border-surface-200 shadow-sm hover:bg-surface-50 active:bg-surface-100 transition-colors",
                                title: "Pengaturan",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-4 h-4 text-surface-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 2128,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 2123,
                                columnNumber: 25
                            }, this),
                            activeTab === "tree" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex items-center gap-3 ml-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center bg-white rounded-xl border border-surface-200 shadow-sm overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: zoomOut,
                                                className: "p-2.5 hover:bg-surface-50 active:bg-surface-100 transition-colors",
                                                title: "Perkecil",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                                    className: "w-4 h-4 text-surface-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 2142,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2137,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-px h-5 bg-surface-200"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2144,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: resetZoom,
                                                className: "px-3 py-2 hover:bg-surface-50 active:bg-surface-100 transition-colors",
                                                title: "Reset zoom",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold text-primary-600 min-w-[2.5rem] text-center block",
                                                    children: [
                                                        Math.round(scale * 100),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 2150,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2145,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-px h-5 bg-surface-200"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2154,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: zoomIn,
                                                className: "p-2.5 hover:bg-surface-50 active:bg-surface-100 transition-colors",
                                                title: "Perbesar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                                    className: "w-4 h-4 text-surface-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 2160,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2155,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-px h-5 bg-surface-200"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2162,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: toggleFullscreen,
                                                className: "p-2.5 hover:bg-surface-50 active:bg-surface-100 transition-colors",
                                                title: isFullscreen ? "Keluar layar penuh" : "Layar penuh",
                                                children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                                    className: "w-4 h-4 text-surface-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 2169,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                    className: "w-4 h-4 text-surface-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 2171,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2163,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2136,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        treeContainerRef: treeRef,
                                        baniName: baniName || "Pohon-Nasab",
                                        stats: exportStats,
                                        isFreeUser: isFreeUser
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2175,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 2134,
                                columnNumber: 25
                            }, this),
                            canEdit && activeTab === "list" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddMemberModal(true),
                                className: "hidden sm:inline-flex ml-auto touch-target items-center gap-2 px-4 py-2 rounded-xl bg-primary-600 text-white font-medium text-sm hover:bg-primary-500 transition-colors shadow-md shadow-primary-600/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2185,
                                        columnNumber: 29
                                    }, this),
                                    "Tambah"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 2181,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 2097,
                        columnNumber: 17
                    }, this),
                    canEdit && activeTab === "list" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowAddMemberModal(true),
                        className: "sm:hidden inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-primary-600 text-white font-medium text-xs hover:bg-primary-500 transition-colors shadow-md shadow-primary-600/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 2197,
                                columnNumber: 25
                            }, this),
                            "Tambah Anggota"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 2193,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 2096,
                columnNumber: 13
            }, this),
            activeTab === "tree" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: loadingTree ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center min-h-[40vh] sm:min-h-[60vh]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 sm:w-12 sm:h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 2209,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-surface-500 text-sm",
                                children: "Memuat pohon nasab..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 2210,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 2208,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                    lineNumber: 2207,
                    columnNumber: 25
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                treeContainerRef: treeRef,
                                baniName: baniName || "Pohon-Nasab",
                                stats: exportStats,
                                isFreeUser: isFreeUser
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 2217,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 2216,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: containerRef,
                            className: "relative overflow-auto rounded-xl sm:rounded-2xl bg-white border border-surface-200 min-h-[40vh] sm:min-h-[60vh] p-3 sm:p-8",
                            style: {
                                touchAction: 'pan-x pan-y'
                            },
                            onPointerDown: handlePointerDown,
                            onPointerMove: handlePointerMove,
                            onPointerUp: handlePointerUp,
                            onPointerCancel: handlePointerUp,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:hidden fixed bottom-20 right-3 z-30 flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: zoomIn,
                                            className: "w-10 h-10 rounded-full bg-white border border-surface-200 shadow-lg flex items-center justify-center active:bg-surface-100 transition-colors",
                                            title: "Perbesar",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                                className: "w-4 h-4 text-surface-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2237,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 2232,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetZoom,
                                            className: "w-10 h-10 rounded-full bg-white border border-surface-200 shadow-lg flex items-center justify-center active:bg-surface-100 transition-colors",
                                            title: "Reset zoom",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-primary-600",
                                                children: [
                                                    Math.round(scale * 100),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2244,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 2239,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: zoomOut,
                                            className: "w-10 h-10 rounded-full bg-white border border-surface-200 shadow-lg flex items-center justify-center active:bg-surface-100 transition-colors",
                                            title: "Perkecil",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                                className: "w-4 h-4 text-surface-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2251,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 2246,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: toggleFullscreen,
                                            className: "w-10 h-10 rounded-full bg-primary-600 shadow-lg shadow-primary-600/30 flex items-center justify-center active:bg-primary-500 transition-colors",
                                            title: isFullscreen ? "Keluar layar penuh" : "Layar penuh",
                                            children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                                className: "w-4 h-4 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2259,
                                                columnNumber: 45
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                className: "w-4 h-4 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2261,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 2253,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 2231,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: treeRef,
                                    className: "min-w-fit",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            transform: `scale(${scale})`,
                                            transformOrigin: "top left"
                                        },
                                        className: "flex justify-center min-w-fit",
                                        children: tree ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TreeNode, {
                                            node: tree,
                                            level: 0,
                                            expanded: expanded,
                                            toggleExpand: toggleExpand,
                                            selectedId: selectedId,
                                            onSelect: setSelectedId,
                                            onShowQuickMenu: handleShowQuickMenu,
                                            canEdit: canEdit,
                                            orientation: treeOrientation
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 2271,
                                            columnNumber: 45
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-surface-500",
                                                children: "Belum ada anggota di pohon ini"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2284,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 2283,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2266,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                    lineNumber: 2265,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                            lineNumber: 2221,
                            columnNumber: 29
                        }, this),
                        selectedMember && (()=>{
                            const m = selectedMember;
                            const formatDate = (d)=>{
                                if (!d) return null;
                                try {
                                    return new Date(d).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    });
                                } catch  {
                                    return d;
                                }
                            };
                            const infoParts = [];
                            if (m.birthPlace || m.birthDate) infoParts.push([
                                m.birthPlace,
                                formatDate(m.birthDate)
                            ].filter(Boolean).join(', '));
                            if (m.city) infoParts.push(m.city);
                            if (m.deathDate) infoParts.push('Wafat ' + formatDate(m.deathDate));
                            // Get spouses
                            const spouseEntries = [];
                            if (m.gender === 'MALE' && m.marriagesAsHusband) {
                                m.marriagesAsHusband.forEach((mar)=>spouseEntries.push({
                                        marriageId: mar.id,
                                        spouseId: mar.wife.id,
                                        name: mar.wife.fullName
                                    }));
                            } else if (m.gender === 'FEMALE' && m.marriagesAsWife) {
                                m.marriagesAsWife.forEach((mar)=>spouseEntries.push({
                                        marriageId: mar.id,
                                        spouseId: mar.husband.id,
                                        name: mar.husband.fullName
                                    }));
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 animate-scale-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-3 py-2.5 rounded-xl border border-surface-200 bg-white shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${m.gender === 'MALE' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'}`,
                                                children: m.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: m.photo,
                                                    alt: m.fullName,
                                                    className: "w-9 h-9 rounded-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 2318,
                                                    columnNumber: 53
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                    lineNumber: 2320,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2316,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-sm text-surface-900 truncate",
                                                                children: m.fullName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2326,
                                                                columnNumber: 53
                                                            }, this),
                                                            m.nickname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-surface-400 truncate",
                                                                children: [
                                                                    "“",
                                                                    m.nickname,
                                                                    "”"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2327,
                                                                columnNumber: 68
                                                            }, this),
                                                            !m.isAlive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] bg-surface-100 text-surface-400 px-1 py-0.5 rounded",
                                                                children: [
                                                                    "Alm",
                                                                    m.gender === 'FEMALE' ? 'h' : '',
                                                                    "."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2328,
                                                                columnNumber: 68
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-surface-400 bg-surface-50 px-1.5 py-0.5 rounded",
                                                                children: [
                                                                    "Gen ",
                                                                    m.generation
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2329,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2325,
                                                        columnNumber: 49
                                                    }, this),
                                                    infoParts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-surface-400 truncate mt-0.5",
                                                        children: infoParts.join(' · ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2332,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2324,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 flex-shrink-0",
                                                children: [
                                                    m.phoneWhatsapp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWhatsAppLink"])(m.phoneWhatsapp),
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "w-7 h-7 rounded-lg bg-green-500 text-white flex items-center justify-center hover:bg-green-400 transition-colors",
                                                        title: "WhatsApp",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                            lineNumber: 2339,
                                                            columnNumber: 57
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2338,
                                                        columnNumber: 53
                                                    }, this),
                                                    (()=>{
                                                        const sm = m.socialMedia;
                                                        if (!sm) return null;
                                                        return Object.entries(sm).filter(([, v])=>v).map(([key])=>{
                                                            const platform = SOCIAL_MEDIA_PLATFORMS.find((p)=>p.key === key);
                                                            if (!platform) return null;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: getSocialMediaUrl(key, sm[key]),
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: `w-7 h-7 rounded-lg ${platform.bg} ${platform.color} flex items-center justify-center hover:opacity-80 transition-opacity`,
                                                                title: `${platform.label}: ${sm[key]}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialMediaIcon, {
                                                                    platform: key,
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2351,
                                                                    columnNumber: 65
                                                                }, this)
                                                            }, key, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2350,
                                                                columnNumber: 61
                                                            }, this);
                                                        });
                                                    })(),
                                                    canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setEditPopupMemberId(m.id),
                                                                className: "w-7 h-7 rounded-lg border border-surface-200 text-surface-500 flex items-center justify-center hover:bg-surface-50 transition-colors",
                                                                title: "Edit",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2359,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2358,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: async ()=>{
                                                                    if (!confirm(`Hapus anggota "${m.fullName}"? Tindakan ini tidak dapat dibatalkan.`)) return;
                                                                    try {
                                                                        const res = await fetch(`/api/members/${m.id}`, {
                                                                            method: 'DELETE'
                                                                        });
                                                                        if (!res.ok) {
                                                                            const data = await res.json();
                                                                            alert(data.error || 'Gagal menghapus');
                                                                            return;
                                                                        }
                                                                        setSelectedId(null);
                                                                        fetchTreeMembers();
                                                                        window.location.reload();
                                                                    } catch  {
                                                                        alert('Gagal menghapus anggota');
                                                                    }
                                                                },
                                                                className: "w-7 h-7 rounded-lg border border-red-200 text-red-500 flex items-center justify-center hover:bg-red-50 transition-colors",
                                                                title: "Hapus",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2381,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2361,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedId(null),
                                                        className: "w-7 h-7 rounded-lg border border-surface-200 text-surface-400 flex items-center justify-center hover:bg-surface-50 transition-colors",
                                                        title: "Tutup",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                            lineNumber: 2386,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2385,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2336,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2314,
                                        columnNumber: 41
                                    }, this),
                                    spouseEntries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-2 rounded-xl border border-surface-200 bg-white shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-semibold text-surface-400 uppercase tracking-wider mb-1.5",
                                                children: "Pasangan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2394,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: spouseEntries.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${m.gender === 'MALE' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2399,
                                                                    columnNumber: 65
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2398,
                                                                columnNumber: 61
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-surface-900 font-medium flex-1 truncate",
                                                                children: entry.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2401,
                                                                columnNumber: 61
                                                            }, this),
                                                            canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 flex-shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setEditPopupMemberId(entry.spouseId),
                                                                        className: "w-6 h-6 rounded-md border border-surface-200 text-surface-500 flex items-center justify-center hover:bg-surface-50 transition-colors",
                                                                        title: "Edit pasangan",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                            className: "w-2.5 h-2.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2409,
                                                                            columnNumber: 73
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 2404,
                                                                        columnNumber: 69
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: async ()=>{
                                                                            const action = confirm(`Pilih OK untuk menghapus anggota "${entry.name}" beserta data pernikahan.\n\nPilih Cancel lalu gunakan tombol hapus di popup edit jika hanya ingin memutus hubungan pernikahan.`);
                                                                            if (!action) return;
                                                                            try {
                                                                                const res = await fetch(`/api/members/${entry.spouseId}`, {
                                                                                    method: 'DELETE'
                                                                                });
                                                                                if (!res.ok) {
                                                                                    const data = await res.json();
                                                                                    alert(data.error || 'Gagal menghapus');
                                                                                    return;
                                                                                }
                                                                                fetchTreeMembers();
                                                                                window.location.reload();
                                                                            } catch  {
                                                                                alert('Gagal menghapus pasangan');
                                                                            }
                                                                        },
                                                                        className: "w-6 h-6 rounded-md border border-red-200 text-red-500 flex items-center justify-center hover:bg-red-50 transition-colors",
                                                                        title: "Hapus pasangan",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "w-2.5 h-2.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2433,
                                                                            columnNumber: 73
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 2411,
                                                                        columnNumber: 69
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2403,
                                                                columnNumber: 65
                                                            }, this)
                                                        ]
                                                    }, entry.marriageId, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2397,
                                                        columnNumber: 57
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2395,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2393,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 2312,
                                columnNumber: 37
                            }, this);
                        })()
                    ]
                }, void 0, true)
            }, void 0, false) : /* Member List Tab */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MemberListTab, {
                members: members,
                baniId: baniId,
                onSelectMember: setDetailPopupMember
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 2450,
                columnNumber: 17
            }, this),
            quickAddMenuNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickAddMenu, {
                node: quickAddMenuNode,
                onSelect: handleQuickMenuSelect,
                onClose: ()=>setQuickAddMenuNode(null)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 2455,
                columnNumber: 17
            }, this),
            quickAddContext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickAddModal, {
                context: quickAddContext,
                allMembers: treeMembers,
                baniId: baniId,
                onClose: ()=>setQuickAddContext(null),
                onSuccess: handleQuickAddSuccess
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 2464,
                columnNumber: 17
            }, this),
            detailPopupMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MemberDetailPopup, {
                member: detailPopupMember,
                baniId: baniId,
                onClose: ()=>setDetailPopupMember(null),
                onEdit: (id)=>setEditPopupMemberId(id),
                onDelete: canEdit ? async (id)=>{
                    try {
                        const res = await fetch(`/api/members/${id}`, {
                            method: 'DELETE'
                        });
                        if (!res.ok) {
                            const data = await res.json();
                            alert(data.error || 'Gagal menghapus');
                            return;
                        }
                        setDetailPopupMember(null);
                        fetchTreeMembers();
                        window.location.reload();
                    } catch  {
                        alert('Gagal menghapus anggota');
                    }
                } : undefined
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 2475,
                columnNumber: 17
            }, this),
            editPopupMemberId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditMemberPopup, {
                memberId: editPopupMemberId,
                baniId: baniId,
                allMembers: treeMembers,
                onClose: ()=>setEditPopupMemberId(null),
                onSuccess: ()=>{
                    setEditPopupMemberId(null);
                    fetchTreeMembers();
                    window.location.reload();
                }
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 2500,
                columnNumber: 17
            }, this),
            showAddMemberModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddMemberModal, {
                baniId: baniId,
                existingMembers: treeMembers,
                onClose: ()=>setShowAddMemberModal(false),
                onSuccess: handleAddMemberSuccess
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 2515,
                columnNumber: 17
            }, this),
            showSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/40 backdrop-blur-sm",
                        onClick: ()=>setShowSettings(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 2526,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-scale-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 border-b border-surface-100 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-surface-900 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                className: "w-5 h-5 text-primary-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2530,
                                                columnNumber: 33
                                            }, this),
                                            " Pengaturan Tree"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2529,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSettings(false),
                                        className: "p-1.5 rounded-lg hover:bg-surface-100 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5 text-surface-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                            lineNumber: 2533,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2532,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 2528,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3 block flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownUp$3e$__["ArrowDownUp"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2541,
                                                        columnNumber: 37
                                                    }, this),
                                                    " Orientasi Pohon"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2540,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>saveSettings("VERTICAL", isPublic),
                                                        disabled: savingSettings,
                                                        className: `p-4 rounded-xl border-2 transition-all text-center ${treeOrientation === "VERTICAL" ? "border-primary-500 bg-primary-50" : "border-surface-200 hover:border-surface-300"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-8 h-8",
                                                                    viewBox: "0 0 32 32",
                                                                    fill: "none",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "16",
                                                                            cy: "4",
                                                                            r: "3",
                                                                            className: treeOrientation === "VERTICAL" ? "fill-primary-500" : "fill-surface-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2554,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "16",
                                                                            y1: "7",
                                                                            x2: "16",
                                                                            y2: "16",
                                                                            className: treeOrientation === "VERTICAL" ? "stroke-primary-400" : "stroke-surface-300",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2555,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "8",
                                                                            y1: "16",
                                                                            x2: "24",
                                                                            y2: "16",
                                                                            className: treeOrientation === "VERTICAL" ? "stroke-primary-400" : "stroke-surface-300",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2556,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "8",
                                                                            y1: "16",
                                                                            x2: "8",
                                                                            y2: "22",
                                                                            className: treeOrientation === "VERTICAL" ? "stroke-primary-400" : "stroke-surface-300",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2557,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "24",
                                                                            y1: "16",
                                                                            x2: "24",
                                                                            y2: "22",
                                                                            className: treeOrientation === "VERTICAL" ? "stroke-primary-400" : "stroke-surface-300",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2558,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "8",
                                                                            cy: "25",
                                                                            r: "3",
                                                                            className: treeOrientation === "VERTICAL" ? "fill-primary-400" : "fill-surface-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2559,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "24",
                                                                            cy: "25",
                                                                            r: "3",
                                                                            className: treeOrientation === "VERTICAL" ? "fill-primary-400" : "fill-surface-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2560,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2553,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs font-medium ${treeOrientation === "VERTICAL" ? "text-primary-700" : "text-surface-500"}`,
                                                                    children: "Vertikal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2562,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                            lineNumber: 2552,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2544,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>saveSettings("HORIZONTAL", isPublic),
                                                        disabled: savingSettings,
                                                        className: `p-4 rounded-xl border-2 transition-all text-center ${treeOrientation === "HORIZONTAL" ? "border-primary-500 bg-primary-50" : "border-surface-200 hover:border-surface-300"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-8 h-8",
                                                                    viewBox: "0 0 32 32",
                                                                    fill: "none",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "4",
                                                                            cy: "16",
                                                                            r: "3",
                                                                            className: treeOrientation === "HORIZONTAL" ? "fill-primary-500" : "fill-surface-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2575,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "7",
                                                                            y1: "16",
                                                                            x2: "16",
                                                                            y2: "16",
                                                                            className: treeOrientation === "HORIZONTAL" ? "stroke-primary-400" : "stroke-surface-300",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2576,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "16",
                                                                            y1: "8",
                                                                            x2: "16",
                                                                            y2: "24",
                                                                            className: treeOrientation === "HORIZONTAL" ? "stroke-primary-400" : "stroke-surface-300",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2577,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "16",
                                                                            y1: "8",
                                                                            x2: "22",
                                                                            y2: "8",
                                                                            className: treeOrientation === "HORIZONTAL" ? "stroke-primary-400" : "stroke-surface-300",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2578,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "16",
                                                                            y1: "24",
                                                                            x2: "22",
                                                                            y2: "24",
                                                                            className: treeOrientation === "HORIZONTAL" ? "stroke-primary-400" : "stroke-surface-300",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2579,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "25",
                                                                            cy: "8",
                                                                            r: "3",
                                                                            className: treeOrientation === "HORIZONTAL" ? "fill-primary-400" : "fill-surface-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2580,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "25",
                                                                            cy: "24",
                                                                            r: "3",
                                                                            className: treeOrientation === "HORIZONTAL" ? "fill-primary-400" : "fill-surface-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2581,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2574,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs font-medium ${treeOrientation === "HORIZONTAL" ? "text-primary-700" : "text-surface-500"}`,
                                                                    children: "Horizontal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2583,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                            lineNumber: 2573,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2565,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2543,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2539,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3 block flex items-center gap-1.5",
                                                children: [
                                                    isPublic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2592,
                                                        columnNumber: 49
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2592,
                                                        columnNumber: 85
                                                    }, this),
                                                    " Visibilitas"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2591,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>saveSettings(treeOrientation, false),
                                                        disabled: savingSettings,
                                                        className: `w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${!isPublic ? "border-primary-500 bg-primary-50" : "border-surface-200 hover:border-surface-300"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                className: `w-5 h-5 ${!isPublic ? "text-primary-600" : "text-surface-300"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2603,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `text-sm font-medium ${!isPublic ? "text-primary-700" : "text-surface-600"}`,
                                                                        children: "Privat"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 2605,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-surface-400",
                                                                        children: "Hanya anggota yang bisa melihat"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 2606,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2604,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2595,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>saveSettings(treeOrientation, true),
                                                        disabled: savingSettings,
                                                        className: `w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${isPublic ? "border-green-500 bg-green-50" : "border-surface-200 hover:border-surface-300"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                className: `w-5 h-5 ${isPublic ? "text-green-600" : "text-surface-300"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2617,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `text-sm font-medium ${isPublic ? "text-green-700" : "text-surface-600"}`,
                                                                        children: "Publik"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 2619,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-surface-400",
                                                                        children: "Siapapun dengan link bisa melihat pohon"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 2620,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2618,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2609,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2594,
                                                columnNumber: 33
                                            }, this),
                                            isPublic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 p-3 rounded-lg bg-green-50 border border-green-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-green-700 font-medium mb-2",
                                                        children: "Link Publik:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2628,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                readOnly: true,
                                                                value: publicUrl,
                                                                className: "flex-1 px-2.5 py-1.5 rounded-lg bg-white border border-green-200 text-xs text-surface-700 truncate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2630,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: copyPublicLink,
                                                                className: "flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs font-medium hover:bg-green-500 transition-colors flex-shrink-0",
                                                                children: [
                                                                    copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 2640,
                                                                        columnNumber: 59
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 2640,
                                                                        columnNumber: 95
                                                                    }, this),
                                                                    copied ? "Tersalin!" : "Salin"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2636,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2629,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2627,
                                                columnNumber: 37
                                            }, this),
                                            isPublic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-4 border-t border-surface-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3 block",
                                                        children: "Data Ditampilkan di Publik"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2650,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            {
                                                                key: 'showWaPublic',
                                                                label: 'Nomor WhatsApp',
                                                                value: showWaPublic,
                                                                iconComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                                                    className: "w-4 h-4 text-green-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2653,
                                                                    columnNumber: 133
                                                                }, this),
                                                                iconBg: 'bg-green-50'
                                                            },
                                                            {
                                                                key: 'showBirthPublic',
                                                                label: 'Tanggal Lahir',
                                                                value: showBirthPublic,
                                                                iconComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                                    className: "w-4 h-4 text-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2654,
                                                                    columnNumber: 138
                                                                }, this),
                                                                iconBg: 'bg-blue-50'
                                                            },
                                                            {
                                                                key: 'showAddressPublic',
                                                                label: 'Alamat',
                                                                value: showAddressPublic,
                                                                iconComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "w-4 h-4 text-red-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2655,
                                                                    columnNumber: 135
                                                                }, this),
                                                                iconBg: 'bg-red-50'
                                                            },
                                                            {
                                                                key: 'showSocmedPublic',
                                                                label: 'Sosial Media',
                                                                value: showSocmedPublic,
                                                                iconComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                    className: "w-4 h-4 text-purple-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                    lineNumber: 2656,
                                                                    columnNumber: 139
                                                                }, this),
                                                                iconBg: 'bg-purple-50'
                                                            }
                                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>saveSettings(treeOrientation, true, {
                                                                        [item.key]: !item.value
                                                                    }),
                                                                disabled: savingSettings,
                                                                className: "w-full flex items-center justify-between p-2.5 rounded-lg border border-surface-200 hover:bg-surface-50 transition-all",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-2.5 text-sm text-surface-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `w-7 h-7 rounded-lg ${item.iconBg} flex items-center justify-center flex-shrink-0`,
                                                                                children: item.iconComponent
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                                lineNumber: 2665,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: item.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                                lineNumber: 2666,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 2664,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `w-9 h-5 rounded-full transition-colors relative ${item.value ? 'bg-green-500' : 'bg-surface-300'}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${item.value ? 'translate-x-4' : 'translate-x-0.5'}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                            lineNumber: 2669,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                        lineNumber: 2668,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, item.key, true, {
                                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                                lineNumber: 2658,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                        lineNumber: 2651,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                                lineNumber: 2649,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2590,
                                        columnNumber: 29
                                    }, this),
                                    savingSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-primary-500 text-center animate-pulse",
                                        children: "Menyimpan..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                        lineNumber: 2679,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                                lineNumber: 2537,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                        lineNumber: 2527,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
                lineNumber: 2525,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/bani/[id]/BaniContent.tsx",
        lineNumber: 2094,
        columnNumber: 9
    }, this);
}
_s5(BaniContent, "lbjvhwyuycTE9wrB/gEYaHBw7Js=");
_c9 = BaniContent;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "SocialMediaIcon");
__turbopack_context__.k.register(_c1, "SocialMediaDynamicFields");
__turbopack_context__.k.register(_c2, "QuickAddMenu");
__turbopack_context__.k.register(_c3, "QuickAddModal");
__turbopack_context__.k.register(_c4, "TreeNode");
__turbopack_context__.k.register(_c5, "MemberListTab");
__turbopack_context__.k.register(_c6, "MemberDetailPopup");
__turbopack_context__.k.register(_c7, "AddMemberModal");
__turbopack_context__.k.register(_c8, "EditMemberPopup");
__turbopack_context__.k.register(_c9, "BaniContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0eb1a866._.js.map