"use client";

import { useTranslations } from "next-intl";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./section-header";
import { MotionWrapper } from "./motion-wrapper";

const faqs = [
    { qKey: "q1", aKey: "a1" },
    { qKey: "q2", aKey: "a2" },
    { qKey: "q3", aKey: "a3" },
    { qKey: "q4", aKey: "a4" },
    { qKey: "q5", aKey: "a5" },
    { qKey: "q6", aKey: "a6" },
];

export function FAQSection() {
    const t = useTranslations("Landing.FAQ");

    return (
        <section id="faq" className="bg-background">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <SectionHeader
                    badge={t("badge")}
                    title={t("title")}
                    description={t("description")}
                />
                <MotionWrapper>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq) => (
                            <AccordionItem key={faq.qKey} value={faq.qKey}>
                                <AccordionTrigger className="text-left font-medium">
                                    {t(faq.qKey)}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {t(faq.aKey)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </MotionWrapper>
            </div>
        </section>
    );
}
