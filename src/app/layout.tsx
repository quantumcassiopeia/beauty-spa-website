import type { Metadata } from "next";
import { Buda, Jomolhari } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const buda = Buda({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-buda",
});

const jomolhari = Jomolhari({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jomolhari",
});

export const metadata: Metadata = {
  title: "Beauty Spa",
  description: "Relax. Renew. Rejuvenate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${buda.variable} ${jomolhari.variable} relative antialiased h-screen flex flex-col `}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
