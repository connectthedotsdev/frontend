"use client";

import { useTranslations } from "next-intl";
import {
    BookOpen, ListChecks, MessageSquareText, CalendarDays,
    BarChart3, Users, Heart, ClipboardCheck, BookCheck,
    ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { fadeInUp, StaggerContainer } from "./motion-wrapper";
import { type LucideIcon } from "lucide-react";

type AppType = "student" | "teacher" | "both";

const appBadgeStyles: Record<AppType, string> = {
    student: "border-landing-primary/30 text-landing-primary",
    teacher: "border-blue-500/30 text-blue-600",
    both: "border-amber-500/30 text-amber-600",
};

/* ── Visual: Quran structure hierarchy ── */
function QuranDetailVisual() {
    const items = [
        { label: "Surah", sub: "114 Surahs", color: "bg-landing-primary", w: "w-full" },
        { label: "Juz", sub: "30 Ajzaa", color: "bg-landing-primary/80", w: "w-5/6" },
        { label: "Hizb", sub: "60 Ahzab", color: "bg-landing-primary/60", w: "w-4/6" },
        { label: "Rub'", sub: "240 Arba'", color: "bg-landing-primary/40", w: "w-3/6" },
    ];
    return (
        <div className="flex flex-col gap-2.5 w-full max-w-[260px]">
            {items.map((item, i) => (
                <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                    className={`${item.w} ms-auto`}
                >
                    <div className="rounded-xl bg-card border border-border/60 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-0.5">
                            <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                            <span className="text-xs font-semibold">{item.label}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground">{item.sub}</span>
                    </div>
                    {i < items.length - 1 && (
                        <div className="flex justify-center my-0.5">
                            <ChevronRight className="h-3 w-3 text-muted-foreground/40 rotate-90" />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}

/* ── Visual: Reports dashboard ── */
function ReportsDetailVisual() {
    const bars = [30, 50, 40, 65, 80, 55, 90, 70];
    return (
        <div className="flex flex-col gap-3 w-full max-w-[280px]">
            <div className="rounded-xl bg-card border border-border/60 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold">Monthly Overview</span>
                    <span className="text-[10px] text-landing-primary font-medium">+18%</span>
                </div>
                <div className="flex items-end gap-1.5 h-16">
                    {bars.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                            className={`flex-1 rounded-sm ${i === bars.length - 1 ? "bg-landing-primary" : "bg-landing-primary/30"}`}
                        />
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: "Active", value: "245" },
                    { label: "Completed", value: "89%" },
                    { label: "Sessions", value: "1.2k" },
                ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-card border border-border/60 p-2 shadow-sm text-center">
                        <span className="text-[9px] text-muted-foreground block">{stat.label}</span>
                        <span className="text-xs font-bold">{stat.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── Visual: Parent portal notifications ── */
function ParentPortalVisual() {
    const updates = [
        { text: "Memorized Ayat 1-10 of Al-Mulk", status: "completed", color: "bg-emerald-500" },
        { text: "Evaluation: Very Good", status: "graded", color: "bg-landing-primary" },
        { text: "Next session: Tomorrow 4 PM", status: "upcoming", color: "bg-blue-500" },
    ];
    return (
        <div className="flex flex-col gap-2 w-full max-w-[280px]">
            <div className="rounded-xl bg-card border border-border/60 p-3.5 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full bg-rose-500/15 flex items-center justify-center">
                        <Heart className="h-3.5 w-3.5 text-rose-500" />
                    </div>
                    <div>
                        <span className="text-xs font-semibold block">Child's Progress</span>
                        <span className="text-[9px] text-muted-foreground">Real-time updates</span>
                    </div>
                </div>
                <div className="space-y-2">
                    {updates.map((u, i) => (
                        <motion.div
                            key={u.text}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
                            className="flex items-center gap-2 rounded-lg bg-muted/40 p-2"
                        >
                            <div className={`w-1.5 h-1.5 rounded-full ${u.color} shrink-0`} />
                            <span className="text-[10px] flex-1">{u.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ── Half-width feature card ── */
function DetailCard({
    icon: Icon,
    titleKey,
    descKey,
    app,
    t,
}: {
    icon: LucideIcon;
    titleKey: string;
    descKey: string;
    app: AppType;
    t: ReturnType<typeof useTranslations>;
}) {
    return (
        <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="group rounded-2xl border border-border/50 bg-muted/30 p-8 transition-shadow duration-300 hover:shadow-lg overflow-hidden flex flex-col"
        >
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-landing-primary/10 text-landing-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                </div>
                <Badge variant="outline" className={`text-[10px] px-2 py-0.5 ${appBadgeStyles[app]}`}>
                    {t(`app_${app}`)}
                </Badge>
            </div>
            <h3 className="text-lg font-bold mb-2">{t(titleKey)}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
        </motion.div>
    );
}

/* ── Full-width feature card with visual ── */
function WideDetailCard({
    icon: Icon,
    titleKey,
    descKey,
    app,
    t,
    visual,
    reverse,
}: {
    icon: LucideIcon;
    titleKey: string;
    descKey: string;
    app: AppType;
    t: ReturnType<typeof useTranslations>;
    visual: React.ReactNode;
    reverse?: boolean;
}) {
    return (
        <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="group col-span-1 md:col-span-2 rounded-2xl border border-border/50 bg-muted/30 p-8 md:p-10 transition-shadow duration-300 hover:shadow-lg overflow-hidden"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                <div className={reverse ? "md:order-2" : ""}>
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-landing-primary/10 text-landing-primary group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-5 w-5" />
                        </div>
                        <Badge variant="outline" className={`text-[10px] px-2 py-0.5 ${appBadgeStyles[app]}`}>
                            {t(`app_${app}`)}
                        </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{t(titleKey)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
                </div>
                <div className={`flex justify-center ${reverse ? "md:order-1" : ""}`}>
                    {visual}
                </div>
            </div>
        </motion.div>
    );
}

export function FeaturesDetail() {
    const t = useTranslations("FeaturesPage.Detail");

    return (
        <section className="bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <StaggerContainer slow className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Row 1: Quran Structure — full width with visual */}
                    <WideDetailCard
                        icon={BookOpen}
                        titleKey="quranStructure"
                        descKey="quranStructureDetail"
                        app="both"
                        t={t}
                        visual={<QuranDetailVisual />}
                    />

                    {/* Row 2: Memorization + Evaluation */}
                    <DetailCard icon={ListChecks} titleKey="memorization" descKey="memorizationDetail" app="student" t={t} />
                    <DetailCard icon={MessageSquareText} titleKey="evaluation" descKey="evaluationDetail" app="teacher" t={t} />

                    {/* Row 3: Sessions + Multi-Role */}
                    <DetailCard icon={CalendarDays} titleKey="sessions" descKey="sessionsDetail" app="teacher" t={t} />
                    <DetailCard icon={Users} titleKey="multiRole" descKey="multiRoleDetail" app="both" t={t} />

                    {/* Row 4: Reports — full width with visual */}
                    <WideDetailCard
                        icon={BarChart3}
                        titleKey="reports"
                        descKey="reportsDetail"
                        app="both"
                        t={t}
                        visual={<ReportsDetailVisual />}
                        reverse
                    />

                    {/* Row 5: Attendance + Assignments */}
                    <DetailCard icon={ClipboardCheck} titleKey="attendance" descKey="attendanceDetail" app="teacher" t={t} />
                    <DetailCard icon={BookCheck} titleKey="assignments" descKey="assignmentsDetail" app="both" t={t} />

                    {/* Row 6: Parent Portal — full width with visual */}
                    <WideDetailCard
                        icon={Heart}
                        titleKey="parentPortal"
                        descKey="parentPortalDetail"
                        app="student"
                        t={t}
                        visual={<ParentPortalVisual />}
                    />
                </StaggerContainer>
            </div>
        </section>
    );
}
