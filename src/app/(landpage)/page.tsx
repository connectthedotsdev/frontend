import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/landing/hero-section";
import { StudentAppSection, TeacherAppSection } from "@/components/landing/apps-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { UserRolesSection } from "@/components/landing/user-roles-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FAQSection } from "@/components/landing/faq-section";
import { CTASection } from "@/components/landing/cta-section";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("App");
    return {
        title: t("Title"),
        description: t("Description"),
    };
}

export default function LandingPage() {
    return (
        <>
            <HeroSection />
            <StudentAppSection />
            <TeacherAppSection />
            <UserRolesSection />
            <FeaturesSection />
            <HowItWorksSection />
            <BenefitsSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
        </>
    );
}
