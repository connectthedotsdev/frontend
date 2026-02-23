"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./section-header";
import { motion } from "motion/react";
import { fadeInUp, StaggerContainer } from "./motion-wrapper";

const plans = [
    {
        nameKey: "parentsName",
        priceKey: "parentsPrice",
        priceDetailKey: "parentsPriceDetail",
        descKey: "parentsDesc",
        featureKeys: ["parentsF1", "parentsF2", "parentsF3", "parentsF4", "parentsF5"],
        popular: false,
        ctaKey: "getStarted",
    },
    {
        nameKey: "halaqatName",
        priceKey: "halaqatPrice",
        priceDetailKey: "halaqatPriceDetail",
        descKey: "halaqatDesc",
        featureKeys: ["halaqatF1", "halaqatF2", "halaqatF3", "halaqatF4", "halaqatF5", "halaqatF6", "halaqatF7"],
        popular: true,
        ctaKey: "getStarted",
    },
    {
        nameKey: "schoolsName",
        priceKey: "schoolsPrice",
        priceDetailKey: "schoolsPriceDetail",
        descKey: "schoolsDesc",
        featureKeys: ["schoolsF1", "schoolsF2", "schoolsF3", "schoolsF4", "schoolsF5", "schoolsF6", "schoolsF7", "schoolsF8"],
        popular: false,
        ctaKey: "contactSales",
    },
];

export function PricingSection() {
    const t = useTranslations("Landing.Pricing");

    return (
        <section id="pricing" className="bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <SectionHeader
                    badge={t("badge")}
                    title={t("title")}
                    description={t("description")}
                />
                <StaggerContainer slow className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.nameKey}
                            variants={fadeInUp}
                            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className={`group relative flex flex-col rounded-2xl border bg-card shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden ${plan.popular ? "border-landing-primary ring-1 ring-landing-primary shadow-lg" : "border-border/50"}`}
                        >
                            {plan.popular && (
                                <div className="inset-x-0 top-0 h-1 bg-gradient-to-r from-landing-primary-dark via-landing-primary to-landing-primary-light" />
                            )}
                            <div className={`p-6 text-center ${plan.popular ? "pb-4 pt-4" : "pb-4"}`}>
                                {plan.popular && (
                                    <Badge className="mb-3 bg-landing-primary text-landing-primary-foreground px-3 shadow-md">
                                        {t("mostPopular")}
                                    </Badge>
                                )}
                                <h3 className="text-xl font-semibold">{t(plan.nameKey)}</h3>
                                <div className="mt-3">
                                    <motion.span
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="text-4xl font-bold inline-block"
                                    >
                                        {t(plan.priceKey)}
                                    </motion.span>
                                    <span className="text-muted-foreground text-sm ml-1">{t(plan.priceDetailKey)}</span>
                                </div>
                                <p className="text-muted-foreground text-sm mt-2">{t(plan.descKey)}</p>
                            </div>
                            <div className="px-6 pb-6 pt-0 flex flex-col flex-1">
                                <ul className="space-y-3 mb-6 flex-1">
                                    {plan.featureKeys.map((fKey) => (
                                        <li key={fKey} className="flex items-start gap-2.5 text-sm">
                                            <CircleCheck className="h-4 w-4 text-landing-primary mt-0.5 shrink-0" />
                                            <span className="text-muted-foreground">{t(fKey)}</span>
                                        </li>
                                    ))}
                                </ul>
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        className={`w-full ${plan.popular ? "bg-landing-primary text-landing-primary-foreground hover:bg-landing-primary-dark" : ""}`}
                                        variant={plan.popular ? "default" : "outline"}
                                        asChild
                                    >
                                        <Link href={plan.ctaKey === "contactSales" ? "/contact" : "/login"}>
                                            {t(plan.ctaKey)}
                                        </Link>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
