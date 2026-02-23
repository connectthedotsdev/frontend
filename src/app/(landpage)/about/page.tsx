import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutHero } from "@/components/landing/about-hero";
import { AboutMission } from "@/components/landing/about-mission";
import { AboutStory } from "@/components/landing/about-story";
import { CTASection } from "@/components/landing/cta-section";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("About");
    return {
        title: t("title"),
    };
}

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutMission />
            <AboutStory />
            <CTASection />
        </>
    );
}
