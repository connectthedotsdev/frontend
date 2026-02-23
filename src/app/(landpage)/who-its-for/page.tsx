import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { WhoItsForHero } from "@/components/landing/who-its-for-hero";
import { WhoItsForDetail } from "@/components/landing/who-its-for-detail";
import { CTASection } from "@/components/landing/cta-section";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("WhoItsFor");
    return {
        title: t("title"),
    };
}

export default function WhoItsForPage() {
    return (
        <>
            <WhoItsForHero />
            <WhoItsForDetail />
            <CTASection />
        </>
    );
}
