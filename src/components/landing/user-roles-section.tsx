"use client";

import { useTranslations } from "next-intl";
import { Heart, Users, GraduationCap, CircleCheck } from "lucide-react";
import { SectionHeader } from "./section-header";
import { motion } from "motion/react";
import { fadeInUp, StaggerContainer } from "./motion-wrapper";

const audiences = [
    {
        icon: Heart,
        titleKey: "parentsTitle",
        descKey: "parentsDesc",
        featureKeys: ["parentsF1", "parentsF2", "parentsF3", "parentsF4"],
        gradient: "from-pink-500/10 to-rose-500/5",
        iconBg: "bg-pink-500/10 text-pink-600",
    },
    {
        icon: Users,
        titleKey: "halaqatTitle",
        descKey: "halaqatDesc",
        featureKeys: ["halaqatF1", "halaqatF2", "halaqatF3", "halaqatF4"],
        gradient: "from-landing-primary/10 to-emerald-500/5",
        iconBg: "bg-landing-primary/10 text-landing-primary",
    },
    {
        icon: GraduationCap,
        titleKey: "schoolsTitle",
        descKey: "schoolsDesc",
        featureKeys: ["schoolsF1", "schoolsF2", "schoolsF3", "schoolsF4"],
        gradient: "from-blue-500/10 to-indigo-500/5",
        iconBg: "bg-blue-500/10 text-blue-600",
    },
];

export function UserRolesSection() {
    const t = useTranslations("Landing.Audience");

    return (
        <section id="roles" className="bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <SectionHeader
                    badge={t("badge")}
                    title={t("title")}
                    description={t("description")}
                />
                <StaggerContainer slow className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {audiences.map((audience) => (
                        <motion.div
                            key={audience.titleKey}
                            variants={fadeInUp}
                            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="group relative rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            {/* Gradient top strip */}
                            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            {/* Glow on hover */}
                            <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${audience.gradient} blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                            <div className="relative p-6">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={`flex items-center justify-center w-12 h-12 rounded-xl ${audience.iconBg} mb-4`}
                                >
                                    <audience.icon className="h-6 w-6" />
                                </motion.div>
                                <h3 className="text-xl font-semibold mb-2">{t(audience.titleKey)}</h3>
                                <p className="text-muted-foreground text-sm mb-5">{t(audience.descKey)}</p>
                                <ul className="space-y-2.5">
                                    {audience.featureKeys.map((fKey) => (
                                        <li key={fKey} className="flex items-start gap-2.5 text-sm">
                                            <CircleCheck className="h-4 w-4 text-landing-primary mt-0.5 shrink-0" />
                                            <span className="text-muted-foreground">{t(fKey)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
