"use client";

import { useTranslations } from "next-intl";
import { Mail, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MotionWrapper } from "./motion-wrapper";
import Link from "next/link";

export function ContactInfo() {
    const t = useTranslations("Contact.Info");

    return (
        <MotionWrapper delay={0.2}>
            <Card className="border-0 shadow-sm h-full">
                <CardContent className="pt-6 space-y-6">
                    <h3 className="text-lg font-semibold">{t("title")}</h3>

                    <div className="flex gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-landing-primary/10 text-landing-primary shrink-0">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-medium text-sm">{t("emailLabel")}</p>
                            <p className="text-muted-foreground text-sm">{t("email")}</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-landing-primary/10 text-landing-primary shrink-0">
                            <Clock className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-medium text-sm">{t("hoursLabel")}</p>
                            <p className="text-muted-foreground text-sm">{t("hours")}</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-landing-primary/10 text-landing-primary shrink-0">
                            <MessageCircle className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-medium text-sm">{t("responseLabel")}</p>
                            <p className="text-muted-foreground text-sm">{t("response")}</p>
                        </div>
                    </div>

                    <div className="pt-4 border-t">
                        <p className="text-muted-foreground text-sm">
                            {t("faqNote")}{" "}
                            <Link href="/#faq" className="text-landing-primary hover:underline">
                                {t("faqLink")}
                            </Link>{" "}
                            {t("faqSuffix")}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </MotionWrapper>
    );
}
