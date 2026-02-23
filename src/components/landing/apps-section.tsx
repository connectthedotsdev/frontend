"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
    GraduationCap, BookOpen, BarChart3, ClipboardCheck,
    UserCog, Users, MessageSquareText, CalendarDays,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { fadeInUp, StaggerContainer, FloatingElement } from "./motion-wrapper";

const studentFeatures = [
    { icon: BookOpen, key: "studentF1" },
    { icon: BarChart3, key: "studentF2" },
    { icon: ClipboardCheck, key: "studentF3" },
    { icon: GraduationCap, key: "studentF4" },
];

const teacherFeatures = [
    { icon: Users, key: "teacherF1" },
    { icon: MessageSquareText, key: "teacherF2" },
    { icon: CalendarDays, key: "teacherF3" },
    { icon: UserCog, key: "teacherF4" },
];

function StoreBadges() {
    return (
        <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#">
                    <Image
                        src="/images/app-store.png"
                        alt="Download on the App Store"
                        width={675}
                        height={200}
                        className="h-11 w-auto"
                    />
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#">
                    <Image
                        src="/images/play-store.png"
                        alt="Get it on Google Play"
                        width={675}
                        height={200}
                        className="h-11 w-auto"
                    />
                </Link>
            </motion.div>
        </div>
    );
}

export function StudentAppSection() {
    const t = useTranslations("Landing.Apps");

    return (
        <section id="student-app" className="relative bg-muted/30 overflow-hidden">
            <FloatingElement className="absolute top-1/4 right-[8%] w-3 h-3 rounded-full bg-landing-primary/15" duration={6} y={14} />
            <FloatingElement className="absolute bottom-1/3 left-[5%] w-2.5 h-2.5 rounded-full bg-landing-accent/20" duration={8} y={18} />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Badge variant="outline" className="mb-4 border-landing-primary/30 text-landing-primary text-xs">
                            {t("studentAppBadge")}
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            {t("studentAppTitle")}
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            {t("studentAppDesc")}
                        </p>

                        <StaggerContainer className="space-y-4 mb-8">
                            {studentFeatures.map((feature) => (
                                <motion.div
                                    key={feature.key}
                                    variants={fadeInUp}
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-landing-primary/10 text-landing-primary shrink-0">
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">{t(feature.key)}</span>
                                </motion.div>
                            ))}
                        </StaggerContainer>

                        <StoreBadges />
                    </motion.div>

                    {/* Visual / Phone mockup area */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-64 h-[500px] rounded-[3rem] border-[6px] border-foreground/10 bg-card shadow-2xl overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-8 bg-foreground/5 flex items-center justify-center">
                                <div className="w-20 h-4 rounded-full bg-foreground/10" />
                            </div>
                            <div className="p-5 pt-12 space-y-4">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-landing-primary/20" />
                                    <div className="space-y-1.5">
                                        <div className="h-3 w-24 rounded bg-foreground/10" />
                                        <div className="h-2 w-16 rounded bg-foreground/5" />
                                    </div>
                                </div>
                                {[80, 45, 100, 60].map((progress, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                                        className="rounded-xl bg-muted/50 p-3 space-y-2"
                                    >
                                        <div className="flex justify-between">
                                            <div className="h-2.5 w-20 rounded bg-foreground/10" />
                                            <div className="h-2.5 w-8 rounded bg-landing-primary/20" />
                                        </div>
                                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                                                className="h-full rounded-full bg-landing-primary"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function TeacherAppSection() {
    const t = useTranslations("Landing.Apps");

    return (
        <section id="teacher-app" className="relative bg-background overflow-hidden">
            <FloatingElement className="absolute top-1/3 left-[8%] w-3 h-3 rounded-full bg-blue-500/15" duration={7} y={16} />
            <FloatingElement className="absolute bottom-1/4 right-[5%] w-2.5 h-2.5 rounded-full bg-indigo-500/20" duration={9} y={12} />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Visual / Phone mockup area */}
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex justify-center order-2 lg:order-1"
                    >
                        <div className="relative w-64 h-[500px] rounded-[3rem] border-[6px] border-foreground/10 bg-card shadow-2xl overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-8 bg-foreground/5 flex items-center justify-center">
                                <div className="w-20 h-4 rounded-full bg-foreground/10" />
                            </div>
                            <div className="p-5 pt-12 space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20" />
                                    <div className="space-y-1.5">
                                        <div className="h-3 w-24 rounded bg-foreground/10" />
                                        <div className="h-2 w-16 rounded bg-foreground/5" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { label: "128", color: "bg-blue-500/20" },
                                        { label: "87%", color: "bg-indigo-500/20" },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                                            className="rounded-xl bg-muted/50 p-3 text-center"
                                        >
                                            <div className={`h-2 w-10 mx-auto rounded ${stat.color} mb-2`} />
                                            <span className="text-xs font-bold">{stat.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                {[35, 55, 70, 85, 65].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
                                        className="flex items-center gap-3 rounded-lg bg-muted/50 p-2.5"
                                    >
                                        <div className="w-7 h-7 rounded-lg bg-blue-500/15 shrink-0" />
                                        <div className="flex-1 space-y-1.5">
                                            <div className="h-2 w-full rounded bg-foreground/8" />
                                            <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${h}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                                                    className="h-full rounded-full bg-blue-500"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-600 text-xs">
                            {t("teacherAppBadge")}
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            {t("teacherAppTitle")}
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            {t("teacherAppDesc")}
                        </p>

                        <StaggerContainer className="space-y-4 mb-8">
                            {teacherFeatures.map((feature) => (
                                <motion.div
                                    key={feature.key}
                                    variants={fadeInUp}
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 shrink-0">
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">{t(feature.key)}</span>
                                </motion.div>
                            ))}
                        </StaggerContainer>

                        <StoreBadges />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
