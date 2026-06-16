import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { fallbackContent } from "@/data/fallbackContent";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: fallbackContent.seo.ru.title,
  description: fallbackContent.seo.ru.description,
  openGraph: {
    title: fallbackContent.seo.ru.title,
    description: fallbackContent.seo.ru.description,
    url: "https://epil-ton-riga.local",
    siteName: "EPIL_TON Riga",
    locale: "ru_LV",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
