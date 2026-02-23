"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LangMenu from "@/components/layout/nav-lang";
import { MobileNav } from "./mobile-nav";

const navLinks = [
    { key: "features", href: "/features" },
    { key: "roles", href: "/who-its-for" },
    { key: "pricing", href: "/pricing" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
];

export function Navbar() {
    const t = useTranslations("Landing.Nav");
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 20);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/" || pathname === "";
        return pathname.startsWith(href);
    };

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Connect The Dots"
                            width={512}
                            height={512}
                            className="h-10 w-10 rounded-lg"
                        />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    isActive(link.href)
                                        ? "text-landing-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {t(link.key)}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-3">
                        <LangMenu />
                    </div>

                    <div className="flex lg:hidden items-center gap-2">
                        <LangMenu />
                    </div>
                </div>
            </div>

            <MobileNav
                open={mobileOpen}
                onOpenChange={setMobileOpen}
                navLinks={navLinks}
            />
        </header>
    );
}
