import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sauce — Turn Any Recipe Link Into a Perfect Cooking Experience",
  description:
    "Paste a TikTok, Instagram, or website recipe and instantly get a clean step-by-step cooking guide with ingredients, servings, and nutrition.",
  keywords: [
    "recipe app",
    "cooking app",
    "TikTok recipes",
    "Instagram recipes",
    "meal planning",
    "grocery list",
    "step-by-step cooking",
  ],
  openGraph: {
    title: "Sauce — Turn Any Recipe Link Into a Perfect Cooking Experience",
    description:
      "Paste a TikTok, Instagram, or website recipe and instantly get a clean step-by-step cooking guide with ingredients, servings, and nutrition.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sauce — Turn Any Recipe Link Into a Perfect Cooking Experience",
    description:
      "Paste a TikTok, Instagram, or website recipe and instantly get a clean step-by-step cooking guide with ingredients, servings, and nutrition.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
