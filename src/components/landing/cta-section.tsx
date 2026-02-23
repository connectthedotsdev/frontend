"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { MotionWrapper, FloatingElement } from "./motion-wrapper";

export function CTASection() {
    const t = useTranslations("Landing.CTA");

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-landing-primary-dark via-landing-primary to-landing-primary-light">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

            {/* Floating decorative elements */}
            <FloatingElement className="absolute top-1/4 left-[8%] w-3 h-3 rounded-full bg-white/10" duration={5} y={14} />
            <FloatingElement className="absolute top-1/3 right-[12%] w-2 h-2 rounded-full bg-white/15" duration={7} y={10} />
            <FloatingElement className="absolute bottom-1/4 left-[15%] w-4 h-4 rounded-full bg-white/8" duration={8} y={18} />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <MotionWrapper className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-landing-primary-foreground tracking-tight mb-4">
                        {t("title")}
                    </h2>
                    <p className="text-landing-primary-foreground/80 text-lg mb-8 leading-relaxed">
                        {t("description")}
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Button
                            size="lg"
                            className="bg-white text-landing-primary hover:bg-white/90 px-8 font-semibold shadow-lg"
                            asChild
                        >
                            <Link href="/login">
                                {t("button")}
                                <ArrowRight className="ltr:ml-2 rtl:mr-2 h-4 w-4 rtl:rotate-180" />
                            </Link>
                        </Button>
                    </motion.div>
                    <p className="text-landing-primary-foreground/60 text-sm mt-4">
                        {t("noCredit")}
                    </p>
                </MotionWrapper>
            </div>
        </section>
    );
}
