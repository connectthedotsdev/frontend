import "./globals.css";
// import "react-day-picker/dist/style.css";

import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";

import React from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { cn } from "@/lib/utils";
import { getLocale, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner"
import { Toaster as HotToaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import QueryProvider from "@/lib/query/provider";
import DirectionProvider from "@/lib/direction/provider";
import { LangProvider } from "@/lib/direction/lang-provider";
// import { PermissionProvider } from "@/components/permissions/use-can";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});


const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-arabic",
});


export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('App');
  return {
    title: t('Title'),
    description: t('Description'),
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
      type: "website",
      url: "https://www.connectthedots.com",
      title: t('Title'),
      description: t('Description'),
      images: [
        {
          url: "https://www.connectthedots.com/og-image.png",
          width: 1200,
          height: 630,
          alt: t('OpenGraphAlt'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@connectthedots",
      title: t('Title'),
      description: t('Description'),
    },
  };
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const isRtl = locale === "ar";

  return (
    <html lang={locale} className={"light"} style={{ colorScheme: "light" }}>
      <body
        className={cn(`${isRtl ? `${ibmPlexArabic.className} ${inter.className}` : inter.className}`, isRtl ? "rtl" : "ltr")}
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* <AuthContext> */}

        <NextIntlClientProvider locale={locale}>
          <QueryProvider>
            <DirectionProvider locale={locale}>
              <LangProvider lang={locale}>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="light"
                  enableSystem
                  disableTransitionOnChange
                >
                  {/* <SocketProvider> */}
                  {/* <PermissionProvider> */}
                  <NuqsAdapter>
                    {children}
                  </NuqsAdapter>
                  {/* </PermissionProvider> */}
                  {/* </SocketProvider> */}
                </ThemeProvider>
                <Toaster richColors position="top-right" />
                <HotToaster position="top-right" />
              </LangProvider>
            </DirectionProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
