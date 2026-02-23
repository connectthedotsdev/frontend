"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
    { value: 114, labelKey: "surahs" },
    { value: 30, labelKey: "juz" },
    { value: 60, labelKey: "hizb" },
    { value: 240, labelKey: "rub" },
];

function AnimatedCounter({ value, inView }: { value: number; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1500;
        const increment = value / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, value]);

    return <span>{count}</span>;
}

export function StatsSection() {
    const t = useTranslations("Landing.Stats");
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="bg-gradient-to-r from-landing-primary-dark via-landing-primary to-landing-primary-light relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.labelKey}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 150,
                            }}
                            whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 300 } }}
                            className="flex flex-col items-center text-center"
                        >
                            <span className="text-4xl md:text-5xl font-bold text-landing-primary-foreground">
                                <AnimatedCounter value={stat.value} inView={inView} />
                            </span>
                            <span className="text-landing-primary-foreground/80 text-sm md:text-base mt-1 font-medium">
                                {t(stat.labelKey)}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
