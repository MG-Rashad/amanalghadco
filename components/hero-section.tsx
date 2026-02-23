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

  const brands = isRTL 
    ? ["Pav", "Al Yusr", "Président"] 
    : ["Président", "Al Yusr", "Pav"]

  return (
    <>
      <section id="hero" className="min-h-[75vh] bg-background pt-32 md:pt-36 lg:pt-40 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center min-h-[calc(75vh-5rem)] py-6 md:py-8 max-w-full">
            
            {/* Text Content */}
            <div className="space-y-6 md:space-y-8 order-1 text-start">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.1] tracking-tight text-balance break-words">
                {t("hero.title")}
              </h1>
              
              <p className="text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
                {t("hero.subtitle")}
              </p>

              {/* Brands */}
              <div>
                <p className="text-xl font-semibold text-black mb-6 text-center">
                  {t("hero.brands_label")}
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center">
                  {brands.map((brand) => (
                    <span key={brand} className="text-lg md:text-xl font-semibold text-[#FD820A]">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 h-12">
                  <Link href="#products">
                    {t("hero.cta_primary")}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 bg-transparent">
                  <Link href="#contact">
                    {t("hero.cta_secondary")}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image Slider */}
            <div className="relative order-2">
              <div className="relative aspect-[4/3] max-w-md mx-auto">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-muted">
                  {sliderImages.map((src, index) => {
                    let translateClass = "translate-x-0"
                    if (index === currentSlide) {
                      translateClass = "translate-x-0";
                    } else if (index < currentSlide) {
                      translateClass = isRTL ? "translate-x-full" : "-translate-x-full";
                    } else {
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
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
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
    </>
  )
}