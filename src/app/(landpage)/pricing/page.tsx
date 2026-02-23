import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PricingSection } from "@/components/landing/pricing-section";
import { PricingTable } from "@/components/landing/pricing-table";
import { PricingFAQ } from "@/components/landing/pricing-faq";
import { CTASection } from "@/components/landing/cta-section";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("PricingPage");
    return {
        title: t("title"),
    };
}

export default function PricingPage() {
    return (
        <>
            <PricingSection />
            <PricingTable />
            <PricingFAQ />
            <CTASection />
        </>
    );
}
