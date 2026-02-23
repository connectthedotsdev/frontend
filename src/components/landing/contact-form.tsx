"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MotionWrapper } from "./motion-wrapper";
import { Send } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
    const t = useTranslations("Contact.Form");
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSending(false);
        toast.success(t("success"));
        (e.target as HTMLFormElement).reset();
    };

    return (
        <MotionWrapper>
            <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">{t("name")}</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder={t("namePlaceholder")}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">{t("email")}</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder={t("emailPlaceholder")}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">{t("subject")}</Label>
                            <Select name="subject" required>
                                <SelectTrigger>
                                    <SelectValue placeholder={t("subjectPlaceholder")} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="general">{t("subjectGeneral")}</SelectItem>
                                    <SelectItem value="support">{t("subjectSupport")}</SelectItem>
                                    <SelectItem value="partnership">{t("subjectPartnership")}</SelectItem>
                                    <SelectItem value="feedback">{t("subjectFeedback")}</SelectItem>
                                    <SelectItem value="other">{t("subjectOther")}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">{t("message")}</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder={t("messagePlaceholder")}
                                rows={5}
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={sending}
                            className="w-full bg-landing-primary text-landing-primary-foreground hover:bg-landing-primary-dark"
                        >
                            {sending ? t("sending") : t("submit")}
                            {!sending && <Send className="ml-2 h-4 w-4" />}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </MotionWrapper>
    );
}
