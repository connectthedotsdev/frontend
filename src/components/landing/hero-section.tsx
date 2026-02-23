"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { FloatingElement } from "./motion-wrapper";

export function HeroSection() {
    const t = useTranslations("Landing.Hero");

    return (
        <section id="home" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-landing-surface via-background to-background" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-landing-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-landing-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Floating decorative orbs */}
            <FloatingElement className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-landing-primary/20" duration={5} y={16} />
            <FloatingElement className="absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-landing-accent/30" duration={7} y={10} />
            <FloatingElement className="absolute bottom-1/3 left-[20%] w-4 h-4 rounded-full bg-landing-primary/10" duration={8} y={20} />
            <FloatingElement className="absolute bottom-1/4 right-[10%] w-2.5 h-2.5 rounded-full bg-landing-primary-light/20" duration={6} y={14} />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                    >
                        <Badge
                            variant="outline"
                            className="mb-6 border-landing-primary/30 text-landing-primary px-4 py-1.5 text-sm"
                        >
                            {t("badge")}
                        </Badge>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-landing-primary/80 text-lg md:text-xl font-medium mb-4"
                        style={{ fontFamily: "var(--font-scheherazade-new)" }}
                    >
                        {t("bismillah")}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        <span className="bg-gradient-to-r from-landing-primary-dark via-landing-primary to-landing-primary-light bg-clip-text text-transparent">
                            {t("title")}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
                    >
                        {t("subtitle")}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-sm text-landing-primary/70 font-medium mb-8"
                    >
                        {t("appsNote")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Button size="lg" className="bg-landing-primary text-landing-primary-foreground hover:bg-landing-primary-dark px-8" asChild>
                                <Link href="/login">
                                    {t("cta")}
                                    <ArrowRight className="ltr:ml-2 rtl:mr-2 h-4 w-4 rtl:rotate-180" />
                                </Link>
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/features">{t("learnMore")}</Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative max-w-xl"
                    >
                        <div className="absolute -inset-4 bg-landing-primary/5 rounded-2xl blur-xl" />
                        <div className="relative">
                            <p className="text-xl md:text-2xl text-landing-primary/70 italic leading-relaxed" style={{ fontFamily: "var(--font-scheherazade-new)" }}>
                                {t("quranVerse")}
                            </p>
                            <p className="text-sm text-muted-foreground mt-2 italic">
                                &quot;{t("quranVerseTranslation")}&quot;
                            </p>
                            <footer className="text-xs text-muted-foreground mt-1">
                                — {t("quranReference")}
                            </footer>
                        </div>
                    </motion.blockquote>
                </div>
            </div>
        </section>
    );
}
