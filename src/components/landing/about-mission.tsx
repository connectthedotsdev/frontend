"use client";

import { useTranslations } from "next-intl";
import { Heart, Star, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { fadeInUp, MotionWrapper } from "./motion-wrapper";

const values = [
    { icon: Heart, titleKey: "sincerity", descKey: "sincerityDesc" },
    { icon: Star, titleKey: "excellence", descKey: "excellenceDesc" },
    { icon: Globe, titleKey: "community", descKey: "communityDesc" },
    { icon: Lightbulb, titleKey: "innovation", descKey: "innovationDesc" },
];

export function AboutMission() {
    const t = useTranslations("About.Mission");

    return (
        <section className="bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <MotionWrapper className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {t("title")}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {t("description")}
                    </p>
                </MotionWrapper>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.titleKey}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 h-full text-center">
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-landing-primary/10 text-landing-primary mb-4 mx-auto">
                                        <value.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{t(value.titleKey)}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{t(value.descKey)}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
