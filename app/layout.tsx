import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/app/styles/globals.css";

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
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
        className={`${outfit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
