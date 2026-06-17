import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { fallbackContent } from "@/data/fallbackContent";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: fallbackContent.seo.ru.title,
  description: fallbackContent.seo.ru.description,
  openGraph: {
    title: fallbackContent.seo.ru.title,
    description: fallbackContent.seo.ru.description,
    url: "https://epil-ton-riga.local",
    siteName: "EPIL_TON",
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
      <body className={onest.variable}>{children}</body>
    </html>
  );
}
