"use client";

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import useAccessibility from "@/hooks/use-accessibility";
import { Globe } from "lucide-react";

function LangMenu({ className }: { className?: string }) {
    const { locale } = useAccessibility();
    const t = useTranslations("Navigation");

    const targetLocale = locale === "ar" ? "en" : "ar";
    const targetLabel = locale === "ar" ? t("english") : t("arabic");

    const switchLanguage = () => {
        document.cookie = `NEXT_LOCALE=${targetLocale}; path=/`;
        window.location.reload();
    };

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={switchLanguage}
            className={cn("gap-2", className)}
        >
            <span className="text-sm">{targetLabel}</span>
        </Button>
    );
}

export default LangMenu;
