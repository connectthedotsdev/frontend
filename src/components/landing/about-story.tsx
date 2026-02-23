"use client";

import { useTranslations } from "next-intl";
import { MotionWrapper } from "./motion-wrapper";

export function AboutStory() {
    const t = useTranslations("About.Story");

    return (
        <section className="bg-landing-surface/50">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <MotionWrapper>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
                        {t("title")}
                    </h2>
                    <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                        <p>{t("p1")}</p>
                        <p>{t("p2")}</p>
                        <p>{t("p3")}</p>
                        <p>{t("p4")}</p>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}
