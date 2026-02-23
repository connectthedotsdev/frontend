import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturesHero } from "@/components/landing/features-hero";
import { FeaturesDetail } from "@/components/landing/features-detail";
import { CTASection } from "@/components/landing/cta-section";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("FeaturesPage");
    return {
        title: t("title"),
    };
}

export default function FeaturesPage() {
    return (
        <>
            <FeaturesHero />
            <FeaturesDetail />
            <CTASection />
        </>
    );
}
