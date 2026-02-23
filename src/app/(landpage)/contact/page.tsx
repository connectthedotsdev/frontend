import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/landing/contact-form";
import { ContactInfo } from "@/components/landing/contact-info";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Contact");
    return {
        title: t("title"),
    };
}

export default function ContactPage() {
    return (
        <>
            <ContactPageContent />
        </>
    );
}

async function ContactPageContent() {
    const t = await getTranslations("Contact.Hero");

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    <span className="bg-gradient-to-r from-landing-primary-dark via-landing-primary to-landing-primary-light bg-clip-text text-transparent">
                        {t("title")}
                    </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("description")}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                <div className="lg:col-span-3">
                    <ContactForm />
                </div>
                <div className="lg:col-span-2">
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
}
