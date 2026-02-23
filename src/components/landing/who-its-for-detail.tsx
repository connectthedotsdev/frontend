"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Heart, Users, GraduationCap, CircleCheck, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { fadeInUp, slideInLeft, slideInRight } from "./motion-wrapper";

const audiences = [
    {
        icon: Heart,
        titleKey: "parentsTitle",
        descKey: "parentsDesc",
        detailKey: "parentsDetail",
        appKey: "parentsApp",
        featureKeys: ["parentsF1", "parentsF2", "parentsF3", "parentsF4", "parentsF5", "parentsF6"],
        ctaKey: "parentsCta",
        ctaHref: "/login",
        gradient: "from-pink-500/10 to-rose-500/5",
        iconBg: "bg-pink-500/10 text-pink-600",
        appBadgeColor: "border-pink-500/30 text-pink-600",
    },
    {
        icon: Users,
        titleKey: "halaqatTitle",
        descKey: "halaqatDesc",
        detailKey: "halaqatDetail",
        appKey: "halaqatApp",
        featureKeys: ["halaqatF1", "halaqatF2", "halaqatF3", "halaqatF4", "halaqatF5", "halaqatF6"],
        ctaKey: "halaqatCta",
        ctaHref: "/login",
        gradient: "from-landing-primary/10 to-emerald-500/5",
        iconBg: "bg-landing-primary/10 text-landing-primary",
        appBadgeColor: "border-landing-primary/30 text-landing-primary",
    },
    {
        icon: GraduationCap,
        titleKey: "schoolsTitle",
        descKey: "schoolsDesc",
        detailKey: "schoolsDetail",
        appKey: "schoolsApp",
        featureKeys: ["schoolsF1", "schoolsF2", "schoolsF3", "schoolsF4", "schoolsF5", "schoolsF6"],
        ctaKey: "schoolsCta",
        ctaHref: "/contact",
        gradient: "from-blue-500/10 to-indigo-500/5",
        iconBg: "bg-blue-500/10 text-blue-600",
        appBadgeColor: "border-blue-500/30 text-blue-600",
    },
];

export function WhoItsForDetail() {
    const t = useTranslations("WhoItsFor.Detail");

    return (
        <section className="bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="space-y-12">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={audience.titleKey}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5 }}
                            className="group relative rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${audience.gradient}`} />
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                <motion.div
                                    variants={index % 2 === 0 ? slideInLeft : slideInRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className={`bg-gradient-to-br ${audience.gradient} p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`flex items-center justify-center w-14 h-14 rounded-2xl ${audience.iconBg} mb-4`}
                                    >
                                        <audience.icon className="h-7 w-7" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold mb-3">{t(audience.titleKey)}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">{t(audience.descKey)}</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t(audience.detailKey)}</p>
                                    <div className="flex items-center gap-2">
                                        <Smartphone className="h-4 w-4 text-muted-foreground" />
                                        <Badge variant="outline" className={`text-xs ${audience.appBadgeColor}`}>
                                            {t(audience.appKey)}
                                        </Badge>
                                    </div>
                                </motion.div>
                                <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <h4 className="text-lg font-semibold mb-6">{t("whatsIncluded")}</h4>
                                    <ul className="space-y-3 mb-8">
                                        {audience.featureKeys.map((fKey) => (
                                            <li key={fKey} className="flex items-start gap-3 text-sm">
                                                <CircleCheck className="h-5 w-5 text-landing-primary mt-0.5 shrink-0" />
                                                <span className="text-muted-foreground">{t(fKey)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                        <Button
                                            className="w-fit bg-landing-primary text-landing-primary-foreground hover:bg-landing-primary-dark"
                                            asChild
                                        >
                                            <Link href={audience.ctaHref}>{t(audience.ctaKey)}</Link>
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
