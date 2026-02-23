"use client";

import { useTranslations } from "next-intl";
import { CircleCheck, Minus } from "lucide-react";
import { MotionWrapper } from "./motion-wrapper";

const rows = [
    { key: "students", parents: "upTo5", halaqat: "upTo50", schools: "unlimited" },
    { key: "teachers", parents: "na", halaqat: "upTo5Teachers", schools: "unlimited" },
    { key: "classes", parents: "na", halaqat: "upTo5Classes", schools: "unlimited" },
    { key: "progressTracking", parents: "yes", halaqat: "yes", schools: "yes" },
    { key: "evaluations", parents: "viewOnly", halaqat: "full", schools: "full" },
    { key: "sessionScheduling", parents: "no", halaqat: "yes", schools: "yes" },
    { key: "attendance", parents: "no", halaqat: "yes", schools: "yes" },
    { key: "reports", parents: "basic", halaqat: "standard", schools: "advanced" },
    { key: "adminPanel", parents: "no", halaqat: "basic", schools: "full" },
    { key: "parentPortal", parents: "yes", halaqat: "yes", schools: "yes" },
    { key: "bulkImport", parents: "no", halaqat: "no", schools: "yes" },
    { key: "prioritySupport", parents: "no", halaqat: "no", schools: "yes" },
];

function CellValue({ value, t }: { value: string; t: (key: string) => string }) {
    if (value === "yes") return <CircleCheck className="h-5 w-5 text-landing-primary mx-auto" />;
    if (value === "no" || value === "na") return <Minus className="h-5 w-5 text-muted-foreground/40 mx-auto" />;
    return <span className="text-sm">{t(value)}</span>;
}

export function PricingTable() {
    const t = useTranslations("PricingPage.Table");

    return (
        <section className="bg-background">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <MotionWrapper>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-4 px-4 font-semibold">{t("feature")}</th>
                                    <th className="text-center py-4 px-4 font-semibold">{t("parents")}</th>
                                    <th className="text-center py-4 px-4 font-semibold text-landing-primary">{t("halaqat")}</th>
                                    <th className="text-center py-4 px-4 font-semibold">{t("schools")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.key} className="border-b last:border-b-0">
                                        <td className="py-3 px-4 text-sm font-medium">{t(row.key)}</td>
                                        <td className="py-3 px-4 text-center"><CellValue value={row.parents} t={t} /></td>
                                        <td className="py-3 px-4 text-center bg-landing-primary/5"><CellValue value={row.halaqat} t={t} /></td>
                                        <td className="py-3 px-4 text-center"><CellValue value={row.schools} t={t} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}
