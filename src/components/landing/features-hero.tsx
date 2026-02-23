"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export function FeaturesHero() {
    const t = useTranslations("FeaturesPage.Hero");

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-landing-surface via-background to-background" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-landing-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

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
                        <span className="bg-gradient-to-r from-landing-primary-dark via-landing-primary to-landing-primary-light bg-clip-text text-transparent">
                            {t("title")}
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
                    >
                        {t("description")}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
