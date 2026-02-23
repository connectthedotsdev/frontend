"use client";

import { useTranslations } from "next-intl";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MotionWrapper } from "./motion-wrapper";

const faqs = [
    { qKey: "q1", aKey: "a1" },
    { qKey: "q2", aKey: "a2" },
    { qKey: "q3", aKey: "a3" },
    { qKey: "q4", aKey: "a4" },
];

export function PricingFAQ() {
    const t = useTranslations("PricingPage.FAQ");

    return (
        <section className="bg-landing-surface/50">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <MotionWrapper className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {t("title")}
                    </h2>
                </MotionWrapper>
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
