"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { NutritionSection } from "@/components/nutrition-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AIChatWidget } from "@/components/ai-chat-widget"
import { Toaster } from "@/components/ui/toaster"

export default function HomePage() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <NutritionSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatWidget />
      <Toaster />
    </LanguageProvider>
  )
}
