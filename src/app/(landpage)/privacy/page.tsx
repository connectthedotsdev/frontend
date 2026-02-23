import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PrivacyContent } from "@/components/landing/privacy-content";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Privacy");
    return {
        title: t("title"),
    };
}

export default function PrivacyPage() {
    return <PrivacyContent />;
}
