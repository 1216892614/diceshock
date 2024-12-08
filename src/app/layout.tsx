import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import StarPlease from "@/components/StarPlease";

export const metadata: Metadata = {
    title: "DiceShock",
    description: "Boardgames-VideoGame-JPMahjong",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-Hans-CN">
            <head>
                <link rel="icon" href="/svg/favicon.svg" />
            </head>
            <body className="antialiased w-screen h-screen">
                <div
                    id="[[SCROLL-CONTAINER]]"
                    className="size-full relative overflow-x-hidden overflow-y-auto"
                >
                    <Header />

                    {children}

                    <Credits />
                    <Footer />
                </div>

                <StarPlease />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
