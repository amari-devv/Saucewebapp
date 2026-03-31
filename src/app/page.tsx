import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Sauce - Recipes & Meal Planner",
  operatingSystem: "iOS",
  applicationCategory: "LifestyleApplication",
  description:
    "Import recipes from TikTok, Instagram, YouTube, or any website. AI extracts ingredients, steps, nutrition — then guides you through cooking step-by-step.",
  url: "https://trysauce.app",
  downloadUrl:
    "https://apps.apple.com/us/app/sauce-recipes-meal-planner/id6760685363",
  author: {
    "@type": "Person",
    name: "Amari Thomas",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: undefined,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <HowItWorks />
      <Features />
      <CTA />
    </>
  );
}
