"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

const sliderImages = [
  "/images/a.png",
  "/images/b.png",
  "/images/c.png",
  "/images/e.png",
  "/images/f.png",
  "/images/k.png",
  "/images/v.png",
  "/images/y.png",
  "/images/g.png",
].filter(img => !img.includes('product6.png') && !img.includes('66.png'))

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t, isRTL } = useLanguage()

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  // Define brand order based on language
  // English: Président -> Lactel -> Delis -> Pav
  // Arabic: Pav -> Delis -> Lactel -> Président
  const brands = isRTL 
    ? ["Pav", "Al Yusr", "Président"] 
    : ["Président", "Al Yusr", "Pav"]

  return (
    <section id="hero" className="min-h-[75vh] bg-background pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      {/* Responsive top padding for proper spacing */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 xl:gap-20 items-center min-h-[calc(75vh-6rem)] py-4 sm:py-6 lg:py-8">
          {/* Text Content - Always Order 1 (Start) */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 order-1 text-start">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.15] tracking-tight text-balance">
              {t("hero.title")}
            </h1>
            
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* Brands */}
            <div className="pt-2">
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-4 sm:mb-5 lg:mb-6 text-center">
                {t("hero.brands_label")}
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 justify-center">
                {brands.map((brand) => (
                  <span key={brand} className="text-lg sm:text-xl font-semibold text-[#FD820A]">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto">
                <Link href="#products">
                  {t("hero.cta_primary")}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6 sm:px-8 h-11 sm:h-12 bg-transparent w-full sm:w-auto">
                <Link href="#contact">
                  {t("hero.cta_secondary")}
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Slider - Always Order 2 (End) */}
          <div className="relative order-2 mt-4 sm:mt-0">
            <div className="relative aspect-[4/3] max-w-sm sm:max-w-md mx-auto">
              {/* Image Container */}
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-muted">
                {sliderImages.map((src, index) => {
                  // Determine animation direction based on RTL
                  let translateClass = "translate-x-0";
                  if (index === currentSlide) {
                    translateClass = "translate-x-0";
                  } else if (index < currentSlide) {
                    // Previous slide moves to the Start direction
                    translateClass = isRTL ? "translate-x-full" : "-translate-x-full";
                  } else {
                    // Next slide comes from the End direction
                    translateClass = isRTL ? "-translate-x-full" : "translate-x-full";
                  }

                  return (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      } ${translateClass}`}
                    >
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Product ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 450px"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
