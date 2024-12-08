import type { Metadata } from "next";

import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

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

                    <Footer />
                </div>
            </body>
        </html>
    );
}
