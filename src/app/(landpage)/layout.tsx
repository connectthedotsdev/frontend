import React from "react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Merriweather, Quicksand, Tajawal, IBM_Plex_Sans_Arabic } from "next/font/google";




export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            id="landing-scroll-container"
            className="flex min-h-screen flex-col"
            style={{ overflow: "auto", height: "auto" }}
        >
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
        </div>
    );
}
