"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function NutritionSection() {
  const { t, isRTL } = useLanguage()

  // Add your 2 image filenames here
  const nutritionImages = [
    "/images/88.png",
    "/images/55.png",
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % nutritionImages.length)
  }, [nutritionImages.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const nutritionRows = [
    { feature: t("nutrition.feature1"), benefit: t("nutrition.benefit1"), detail: t("nutrition.detail1") },
    { feature: t("nutrition.feature2"), benefit: t("nutrition.benefit2"), detail: t("nutrition.detail2") },
  ]

  return (
    <section id="nutrition" className="pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-24 lg:pb-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header - Centered and Resized */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
            {t("nutrition.title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center mt-8 md:mt-12">
          
          {/* Content */}
          <div className={`space-y-10 ${isRTL ? "lg:order-2" : "lg:order-1"}`}>
            {nutritionRows.map((row, index) => (
              <div key={row.feature} className="space-y-4">
                
                {/* Feature Row */}
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FD820A] flex-shrink-0" />
                  <h3 className="text-xl font-bold text-black">{row.feature}</h3>
                </div>

                {/* Benefit Row */}
                <p className="text-lg font-medium text-black pl-13">
                  {row.benefit}
                </p>
                
                <p className="text-muted-foreground leading-relaxed pl-13">
                  {row.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Image - Slider Fixed with NO TRANSITION (Instant Snap) */}
          <div className={`relative ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
            <div className="aspect-[4/3] max-w-md mx-auto rounded-2xl overflow-hidden">
              {nutritionImages.map((src, index) => {
                // Determine position based on RTL
                let translateClass = "translate-x-0";
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
                      className={`absolute inset-0 transition-none ${
                        index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                      } ${translateClass}`}
                    >
                      <Image
                        src={src || "/placeholder.svg"}
                        alt="Healthy food products"
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
    </section>
  )
}
