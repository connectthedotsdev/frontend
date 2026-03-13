"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

function GeometricPattern() {
    return (
        <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
        >
            <defs>
                {/* Islamic 8-pointed star pattern */}
                <pattern
                    id="islamicPattern"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    patternUnits="userSpaceOnUse"
                >
                    {/* Central 8-pointed star */}
                    <path
                        d="M40 10 L45 25 L60 20 L50 35 L65 40 L50 45 L60 60 L45 55 L40 70 L35 55 L20 60 L30 45 L15 40 L30 35 L20 20 L35 25 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        opacity="0.15"
                    />
                    {/* Inner diamond */}
                    <path
                        d="M40 28 L48 40 L40 52 L32 40 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.6"
                        opacity="0.1"
                    />
                    {/* Corner connectors */}
                    <path
                        d="M0 0 L10 10 M80 0 L70 10 M0 80 L10 70 M80 80 L70 70"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        opacity="0.08"
                    />
                    {/* Connecting lines */}
                    <circle cx="40" cy="40" r="18" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
                </pattern>

                {/* Subtle radial gradient overlay */}
                <radialGradient id="patternFade" cx="50%" cy="40%" r="70%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="100%" stopColor="var(--landing-primary)" stopOpacity="0.03" />
                </radialGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#islamicPattern)" className="text-landing-primary" />
            <rect width="100%" height="100%" fill="url(#patternFade)" />
        </svg>
    );
}

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const t = useTranslations("Auth");

    return (
        <div className="flex min-h-svh">
            {/* Left panel — decorative */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-landing-primary-dark via-landing-primary to-landing-primary-light">
                {/* Geometric pattern overlay */}
                <GeometricPattern />

                {/* Decorative glow circles */}
                <div className="absolute -top-32 -start-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -end-32 w-96 h-96 bg-landing-accent/10 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between w-full p-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/logo.png"
                            alt="Connect The Dots"
                            width={512}
                            height={512}
                            className="h-10 w-10 rounded-lg"
                        />
                        <span className="text-lg font-bold text-white/90">
                            Connect The Dots
                        </span>
                    </Link>

                    {/* Center quote */}
                    <div className="flex flex-col items-center text-center max-w-md mx-auto">
                        <p className="text-3xl leading-relaxed text-white/90 font-arabic mb-6" dir="rtl">
                            وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
                        </p>
                        <p className="text-sm text-white/60 leading-relaxed mb-2">
                            {t("quranTranslation")}
                        </p>
                        <p className="text-xs text-white/40">
                            {t("quranReference")}
                        </p>
                    </div>

                    {/* Bottom tagline */}
                    <p className="text-sm text-white/40 text-center">
                        {t("tagline")}
                    </p>
                </div>
            </div>

            {/* Right panel — form */}
            <div className="flex flex-1 flex-col relative bg-background">
                {/* Subtle pattern on mobile (lighter) */}
                <div className="absolute inset-0 opacity-30 lg:opacity-0 pointer-events-none">
                    <GeometricPattern />
                </div>

                {/* Mobile logo */}
                <div className="lg:hidden flex items-center justify-center pt-8 relative z-10">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/logo.png"
                            alt="Connect The Dots"
                            width={512}
                            height={512}
                            className="h-10 w-10 rounded-lg"
                        />
                        <span className="text-lg font-bold">
                            Connect The Dots
                        </span>
                    </Link>
                </div>

                {/* Form content */}
                <div className="flex flex-1 items-center justify-center px-6 py-8 md:px-10 relative z-10">
                    <div className="w-full max-w-md">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
