"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { SectionHeader } from "./section-header";
import { scaleIn } from "./motion-wrapper";

const steps = [
    { number: 1, titleKey: "step1Title", descKey: "step1Desc" },
    { number: 2, titleKey: "step2Title", descKey: "step2Desc" },
    { number: 3, titleKey: "step3Title", descKey: "step3Desc" },
    { number: 4, titleKey: "step4Title", descKey: "step4Desc" },
];

export function HowItWorksSection() {
    const t = useTranslations("Landing.HowItWorks");

    return (
        <section id="how-it-works" className="bg-landing-surface/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <SectionHeader
                    badge={t("badge")}
                    title={t("title")}
                    description={t("description")}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 150,
                            }}
                            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="group relative flex flex-col items-center text-center rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                                    className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] h-px bg-gradient-to-r from-landing-primary/30 to-landing-primary/10 origin-left"
                                />
                            )}
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                                className="flex items-center justify-center w-14 h-14 rounded-2xl bg-landing-primary text-landing-primary-foreground text-lg font-bold mb-4 relative z-10 shadow-md"
                            >
                                {step.number}
                            </motion.div>
                            <h3 className="text-lg font-semibold mb-2">{t(step.titleKey)}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                                {t(step.descKey)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
