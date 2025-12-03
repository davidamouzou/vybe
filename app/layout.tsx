import type {Metadata} from "next";
import {Signika} from "next/font/google";
import "@/styles/globals.css";
import React from "react";

const outfit = Signika({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-outfit',
});

export const metadata: Metadata = {
    title: "VYBE Clothing Store",
    description: "Your ultimate destination for cutting-edge streetwear fashion.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${outfit.className} bg-red-50 animate-[fade-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]`}
        >
        {children}
        </body>
        </html>
    );
}
