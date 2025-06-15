import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { TestingButton } from "@/components/TestingButton";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Beauty Spa",
  description: "Relax. Renew. Rejuvenate.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${bricolage.variable} relative antialiased h-screen flex flex-col`}
      >
        <NextIntlClientProvider>
          <Header />
          <TestingButton />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
