"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "./section-header";
import { motion } from "motion/react";
import { fadeInUp, StaggerContainer } from "./motion-wrapper";
import { Quote } from "lucide-react";

const testimonials = [
    { quoteKey: "t1Quote", nameKey: "t1Name", roleKey: "t1Role" },
    { quoteKey: "t2Quote", nameKey: "t2Name", roleKey: "t2Role" },
    { quoteKey: "t3Quote", nameKey: "t3Name", roleKey: "t3Role" },
];

export function TestimonialsSection() {
    const t = useTranslations("Landing.Testimonials");

    return (
        <section className="bg-landing-surface/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <SectionHeader
                    badge={t("badge")}
                    title={t("title")}
                    description={t("description")}
                />
                <StaggerContainer slow className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.nameKey}
                            variants={fadeInUp}
                            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="group relative rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-landing-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />
                            <div className="relative">
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: 12, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <Quote className="h-8 w-8 text-landing-primary/20 mb-4" />
                                </motion.div>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                                    &quot;{t(testimonial.quoteKey)}&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-landing-primary/10 flex items-center justify-center text-landing-primary font-semibold text-sm group-hover:bg-landing-primary group-hover:text-landing-primary-foreground transition-colors duration-300">
                                        {t(testimonial.nameKey).charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">{t(testimonial.nameKey)}</p>
                                        <p className="text-muted-foreground text-xs">{t(testimonial.roleKey)}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
