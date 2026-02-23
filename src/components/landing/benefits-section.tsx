"use client";

import { useTranslations } from "next-intl";
import { Layers, Clock, Repeat, Building2, Leaf, Heart } from "lucide-react";
import { SectionHeader } from "./section-header";
import { motion } from "motion/react";
import { fadeInUp, StaggerContainer } from "./motion-wrapper";
import { type LucideIcon } from "lucide-react";

/* ── Visual: Structured layers diagram ── */
function StructuredVisual() {
    const layers = [
        { label: "Quran Curriculum", w: "w-full", color: "bg-landing-primary" },
        { label: "Daily Sessions", w: "w-5/6", color: "bg-landing-primary/80" },
        { label: "Student Progress", w: "w-4/6", color: "bg-landing-primary/60" },
        { label: "Evaluations", w: "w-3/6", color: "bg-landing-primary/40" },
    ];
    return (
        <div className="flex flex-col gap-2 w-full max-w-[260px]">
            {layers.map((layer, i) => (
                <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, x: -20, width: 0 }}
                    whileInView={{ opacity: 1, x: 0, width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                    className={`${layer.w}`}
                >
                    <div className={`${layer.color} rounded-lg px-3 py-2`}>
                        <span className="text-[11px] font-medium text-white">{layer.label}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

/* ── Visual: Parent engagement connection ── */
function ParentEngagementVisual() {
    const notifications = [
        { text: "Completed Surah Al-Mulk", time: "2m ago", color: "bg-emerald-500" },
        { text: "Session evaluation: Excellent", time: "1h ago", color: "bg-landing-primary" },
        { text: "New assignment received", time: "3h ago", color: "bg-blue-500" },
    ];
    return (
        <div className="flex flex-col gap-2.5 w-full max-w-[280px]">
            <div className="rounded-xl bg-card border border-border/60 p-3 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-rose-500/15 flex items-center justify-center">
                        <Heart className="h-3.5 w-3.5 text-rose-500" />
                    </div>
                    <span className="text-xs font-semibold">Parent Dashboard</span>
                </div>
                <div className="space-y-2">
                    {notifications.map((n, i) => (
                        <motion.div
                            key={n.text}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
                            className="flex items-start gap-2"
                        >
                            <div className={`w-1.5 h-1.5 rounded-full ${n.color} mt-1.5 shrink-0`} />
                            <div className="flex-1 min-w-0">
                                <span className="text-[11px] font-medium block">{n.text}</span>
                                <span className="text-[9px] text-muted-foreground">{n.time}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ── Half-width benefit card ── */
function BenefitCard({
    icon: Icon,
    titleKey,
    descKey,
    t,
}: {
    icon: LucideIcon;
    titleKey: string;
    descKey: string;
    t: ReturnType<typeof useTranslations>;
}) {
    return (
        <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="group rounded-2xl border border-border/50 bg-muted/30 p-8 transition-shadow duration-300 hover:shadow-lg overflow-hidden flex flex-col"
        >
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-landing-primary/10 text-landing-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">{t(titleKey)}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
        </motion.div>
    );
}

/* ── Full-width benefit card with visual ── */
function WideBenefitCard({
    icon: Icon,
    titleKey,
    descKey,
    t,
    visual,
    reverse,
}: {
    icon: LucideIcon;
    titleKey: string;
    descKey: string;
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
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-landing-primary/10 text-landing-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5" />
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

export function BenefitsSection() {
    const t = useTranslations("Landing.Benefits");

    return (
        <section id="benefits" className="bg-landing-surface/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <SectionHeader
                    badge={t("badge")}
                    title={t("title")}
                    description={t("description")}
                />
                <StaggerContainer slow className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Row 1: Structured — full width with visual */}
                    <WideBenefitCard
                        icon={Layers}
                        titleKey="structured"
                        descKey="structuredDesc"
                        t={t}
                        visual={<StructuredVisual />}
                    />

                    {/* Row 2: Time Saving + Consistency */}
                    <BenefitCard icon={Clock} titleKey="timeSaving" descKey="timeSavingDesc" t={t} />
                    <BenefitCard icon={Repeat} titleKey="consistency" descKey="consistencyDesc" t={t} />

                    {/* Row 3: Parent Engagement — full width with visual */}
                    <WideBenefitCard
                        icon={Heart}
                        titleKey="parentEngagement"
                        descKey="parentEngagementDesc"
                        t={t}
                        visual={<ParentEngagementVisual />}
                        reverse
                    />

                    {/* Row 4: Scalable + Paperless */}
                    <BenefitCard icon={Leaf} titleKey="paperless" descKey="paperlessDesc" t={t} />
                    <BenefitCard icon={Building2} titleKey="scalable" descKey="scalableDesc" t={t} />
                </StaggerContainer>
            </div>
        </section>
    );
}
