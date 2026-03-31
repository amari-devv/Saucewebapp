import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PostHogProvider } from "@/components/PostHogProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const APP_URL = "https://trysauce.app";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "Sauce — Turn Any Recipe Link Into a Perfect Cooking Experience",
    template: "%s — Sauce",
  },
  description:
    "Import recipes from TikTok, Instagram, YouTube, or any website. Sauce uses AI to extract ingredients, steps, nutrition, and more — then guides you through cooking step-by-step.",
  keywords: [
    "recipe app",
    "cooking app",
    "recipe manager",
    "TikTok recipes",
    "Instagram recipes",
    "YouTube recipes",
    "meal planning",
    "grocery list",
    "step-by-step cooking",
    "AI recipe extraction",
    "recipe organizer",
    "cooking guide",
    "nutrition tracker",
    "pantry tracker",
    "recipe importer",
    "cookbook app",
  ],
  authors: [{ name: "Sauce" }],
  creator: "Sauce",
  publisher: "Sauce",
  openGraph: {
    title: "Sauce — Turn Any Recipe Link Into a Perfect Cooking Experience",
    description:
      "Import recipes from TikTok, Instagram, YouTube, or any website. AI extracts ingredients, steps, nutrition — then guides you through cooking step-by-step.",
    url: APP_URL,
    siteName: "Sauce",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sauce — AI-Powered Recipe Manager",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sauce — Turn Any Recipe Link Into a Perfect Cooking Experience",
    description:
      "Import recipes from TikTok, Instagram, YouTube, or any website. AI extracts ingredients, steps, nutrition — then guides you through cooking step-by-step.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: APP_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <PostHogProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
