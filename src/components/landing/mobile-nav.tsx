"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface MobileNavProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    navLinks: { key: string; href: string }[];
}

export function MobileNav({ open, onOpenChange, navLinks }: MobileNavProps) {
    const t = useTranslations("Landing.Nav");
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/" || pathname === "";
        return pathname.startsWith(href);
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                        <BookOpenText className="h-6 w-6 text-landing-primary" />
                        <span>Connect The Dots</span>
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            onClick={() => onOpenChange(false)}
                            className={cn(
                                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                isActive(link.href)
                                    ? "text-landing-primary bg-landing-primary/10"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                        >
                            {t(link.key)}
                        </Link>
                    ))}
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-3 px-3">
                    <Button variant="outline" asChild>
                        <Link href="/login">{t("signIn")}</Link>
                    </Button>
                    <Button className="bg-landing-primary text-landing-primary-foreground hover:bg-landing-primary-dark" asChild>
                        <Link href="/login">{t("getStarted")}</Link>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}
