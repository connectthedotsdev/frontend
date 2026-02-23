"use client";

import { useTranslations } from "next-intl";
import {
    BookOpen, ListChecks, MessageSquareText, CalendarDays,
    BarChart3, Users, Heart, ClipboardCheck, BookCheck,
    ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./section-header";
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
function QuranStructureVisual() {
    const items = [
        { label: "Juz 30", sub: "Hizb 59-60", color: "bg-landing-primary", w: "w-full" },
        { label: "Hizb 60", sub: "Rub' 237-240", color: "bg-landing-primary/80", w: "w-5/6" },
        { label: "Rub' 240", sub: "Surah An-Nas", color: "bg-landing-primary/60", w: "w-4/6" },
    ];
    return (
        <div className="flex flex-col gap-3 w-full max-w-[260px]">
            {items.map((item, i) => (
                <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                    className={`${item.w} ms-auto`}
                >
                    <div className="rounded-xl bg-card border border-border/60 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                            <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                            <span className="text-xs font-semibold">{item.label}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground">{item.sub}</span>
                    </div>
                    {i < items.length - 1 && (
                        <div className="flex justify-center my-1">
                            <ChevronRight className="h-3 w-3 text-muted-foreground/40 rotate-90" />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}

/* ── Visual: Analytics mini chart ── */
function ReportsVisual() {
    const bars = [35, 55, 45, 70, 85, 65, 90, 75];
    return (
        <div className="flex flex-col gap-3 w-full max-w-[280px]">
            <div className="rounded-xl bg-card border border-border/60 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold">Weekly Progress</span>
                    <span className="text-[10px] text-landing-primary font-medium">+24%</span>
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
                <div className="flex justify-between mt-2">
                    <span className="text-[9px] text-muted-foreground">Sat</span>
                    <span className="text-[9px] text-muted-foreground">Fri</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-card border border-border/60 p-2.5 shadow-sm">
                    <span className="text-[10px] text-muted-foreground block">Students</span>
                    <span className="text-sm font-bold">128</span>
                </div>
                <div className="rounded-lg bg-card border border-border/60 p-2.5 shadow-sm">
                    <span className="text-[10px] text-muted-foreground block">Completion</span>
                    <span className="text-sm font-bold text-landing-primary">87%</span>
                </div>
            </div>
        </div>
    );
}

/* ── Visual: Assignment mini cards ── */
function AssignmentsVisual() {
    const assignments = [
        { surah: "Al-Mulk", ayat: "1-10", progress: 80, color: "bg-landing-primary" },
        { surah: "Al-Qalam", ayat: "1-15", progress: 45, color: "bg-blue-500" },
        { surah: "Al-Haqqah", ayat: "1-12", progress: 100, color: "bg-emerald-500" },
    ];
    return (
        <div className="flex flex-col gap-2.5 w-full max-w-[280px]">
            {assignments.map((a, i) => (
                <motion.div
                    key={a.surah}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                    className="rounded-xl bg-card border border-border/60 p-3 shadow-sm"
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg ${a.color}/10 flex items-center justify-center shrink-0`}>
                            <BookCheck className={`h-4 w-4 ${a.color === "bg-landing-primary" ? "text-landing-primary" : a.color === "bg-blue-500" ? "text-blue-500" : "text-emerald-500"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold">{a.surah}</span>
                                <span className="text-[10px] text-muted-foreground">Ayat {a.ayat}</span>
                            </div>
                            <div className="w-full h-1.5 bg-muted rounded-full mt-1.5 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${a.progress}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }}
                                    className={`h-full rounded-full ${a.color}`}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

/* ── Feature card for medium (half-width) items ── */
function FeatureCard({
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

/* ── Wide card with internal 2-col layout (text + visual) ── */
function WideFeatureCard({
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
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center ${reverse ? "" : ""}`}>
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

export function FeaturesSection() {
    const t = useTranslations("Landing.Features");

    return (
        <section id="features" className="bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <SectionHeader
                    badge={t("badge")}
                    title={t("title")}
                    description={t("description")}
                />
                <StaggerContainer slow className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Row 1: Quran Structure — full width with visual */}
                    <WideFeatureCard
                        icon={BookOpen}
                        titleKey="quranStructure"
                        descKey="quranStructureDesc"
                        app="both"
                        t={t}
                        visual={<QuranStructureVisual />}
                    />

                    {/* Row 2: Memorization + Evaluation */}
                    <FeatureCard icon={ListChecks} titleKey="memorization" descKey="memorizationDesc" app="student" t={t} />
                    <FeatureCard icon={MessageSquareText} titleKey="evaluation" descKey="evaluationDesc" app="teacher" t={t} />

                    {/* Row 3: Sessions + Multi-Role */}
                    <FeatureCard icon={CalendarDays} titleKey="sessions" descKey="sessionsDesc" app="teacher" t={t} />
                    <FeatureCard icon={Users} titleKey="multiRole" descKey="multiRoleDesc" app="both" t={t} />

                    {/* Row 4: Reports — full width with visual */}
                    <WideFeatureCard
                        icon={BarChart3}
                        titleKey="reports"
                        descKey="reportsDesc"
                        app="both"
                        t={t}
                        visual={<ReportsVisual />}
                        reverse
                    />

                    {/* Row 5: Parent Portal + Attendance */}
                    <FeatureCard icon={Heart} titleKey="parentPortal" descKey="parentPortalDesc" app="student" t={t} />
                    <FeatureCard icon={ClipboardCheck} titleKey="attendance" descKey="attendanceDesc" app="teacher" t={t} />

                    {/* Row 6: Assignments — full width with visual */}
                    <WideFeatureCard
                        icon={BookCheck}
                        titleKey="assignments"
                        descKey="assignmentsDesc"
                        app="both"
                        t={t}
                        visual={<AssignmentsVisual />}
                    />
                </StaggerContainer>
            </div>
        </section>
    );
}
