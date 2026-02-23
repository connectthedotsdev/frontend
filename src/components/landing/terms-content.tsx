"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { MotionWrapper } from "./motion-wrapper";

export function TermsContent() {
    const t = useTranslations("Terms");

    const sections = [
        { titleKey: "s1Title", contentKey: "s1Content" },
        { titleKey: "s2Title", contentKey: "s2Content" },
        { titleKey: "s3Title", contentKey: "s3Content" },
        { titleKey: "s4Title", contentKey: "s4Content" },
        { titleKey: "s5Title", contentKey: "s5Content" },
        { titleKey: "s6Title", contentKey: "s6Content" },
        { titleKey: "s7Title", contentKey: "s7Content" },
        { titleKey: "s8Title", contentKey: "s8Content" },
    ];

    return (
        <>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-landing-surface via-background to-background" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge variant="outline" className="mb-6 border-landing-primary/30 text-landing-primary px-4 py-1.5 text-sm">
                                {t("badge")}
                            </Badge>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                        >
                            {t("heading")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-muted-foreground"
                        >
                            {t("lastUpdated")}
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="bg-background">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        {sections.map((section, index) => (
                            <MotionWrapper key={section.titleKey} delay={index * 0.05}>
                                <h2 className="text-xl font-semibold mt-8 mb-3">{t(section.titleKey)}</h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">{t(section.contentKey)}</p>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
