import type { Metadata } from "next";

import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
    title: "DiceShock",
    description: "Boardgames-VideoGame-JMahjong",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-Hans-CN">
            <body className="antialiased w-screen h-screen">
                <main
                    id="[[SCROLL-CONTAINER]]"
                    className="size-full relative overflow-x-hidden overflow-y-auto"
                >
                    <Header />

                    {children}
                </main>
            </body>
        </html>
    );
}
