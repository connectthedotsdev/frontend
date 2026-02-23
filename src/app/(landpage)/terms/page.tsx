import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TermsContent } from "@/components/landing/terms-content";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Terms");
    return {
        title: t("title"),
    };
}

export default function TermsPage() {
    return <TermsContent />;
}
