"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { BookOpenText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    const t = useTranslations("Landing");

    return (
        <footer className="bg-foreground text-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <BookOpenText className="h-7 w-7 text-landing-primary-light" />
                            <span className="text-xl font-bold">{t("Hero.title")}</span>
                        </Link>
                        <p className="text-sm text-background/70 leading-relaxed">
                            {t("Footer.description")}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{t("Footer.product")}</h3>
                        <ul className="space-y-2 text-sm text-background/70">
                            <li><Link href="/features" className="hover:text-background transition-colors">{t("Nav.features")}</Link></li>
                            <li><Link href="/who-its-for" className="hover:text-background transition-colors">{t("Nav.roles")}</Link></li>
                            <li><Link href="/pricing" className="hover:text-background transition-colors">{t("Nav.pricing")}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{t("Footer.company")}</h3>
                        <ul className="space-y-2 text-sm text-background/70">
                            <li><Link href="/about" className="hover:text-background transition-colors">{t("Nav.about")}</Link></li>
                            <li><Link href="/contact" className="hover:text-background transition-colors">{t("Nav.contact")}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{t("Footer.legal")}</h3>
                        <ul className="space-y-2 text-sm text-background/70">
                            <li><Link href="/terms" className="hover:text-background transition-colors">{t("Footer.termsOfService")}</Link></li>
                            <li><Link href="/privacy" className="hover:text-background transition-colors">{t("Footer.privacyPolicy")}</Link></li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8 bg-background/10" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
                    <p>{t("Footer.copyright")}</p>
                    <p>{t("Footer.madeWith")}</p>
                </div>
            </div>
        </footer>
    );
}
