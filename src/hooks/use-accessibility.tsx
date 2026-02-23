import {useLocale} from "next-intl";

export default function useAccessibility(): {
    locale: string;
    isRtl: boolean;
    isLtr: boolean;
    dir: "ltr" | "rtl";
    side: "left" | "right"
} {
    const locale = useLocale();
    return {
        locale,
        isRtl: locale === "ar",
        isLtr: locale === "en",
        dir: locale === "ar" ? "rtl" : "ltr",
        side: locale === "ar" ? "right" : "left",
    };
}
