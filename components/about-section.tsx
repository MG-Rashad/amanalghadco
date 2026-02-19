"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Target, Eye, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t, isRTL } = useLanguage()

  // Add your 6 image filenames here
  const aboutImages = [
    "/images/15.jpg",
    "/images/20.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
    "/images/18.jpg",
    "/images/19.jpg",
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % aboutImages.length)
  }, [aboutImages.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  // Directly setting the title here
  const titleText = isRTL ? "مهمتنا و رؤيتنا" : "Our Mission & Our Vision"

  const stats = [
    { value: "10+", label: t("about.stats.brands") },
    { value: "100%", label: t("about.stats.original") },
    { value: "24/7", label: t("about.stats.support") },
  ]

  return (
    <section id="about" className="border-t border-border mt-10 sm:mt-12 lg:mt-16 pt-10 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-28 bg-background">
      {/* Responsive spacing between sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
            {titleText}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-24 items-center mb-10 sm:mb-12 lg:mb-16">
          {/* Slider Container */}
          <div className={`relative ${isRTL ? "lg:order-2" : "lg:order-1"}`}>
            {/* Added max-w-md mx-auto to match Hero Section size */}
            <div className="relative aspect-[4/3] max-w-sm sm:max-w-md mx-auto rounded-xl sm:rounded-2xl overflow-hidden bg-muted">
              {aboutImages.map((src, index) => {
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
                      alt="About Aman Al-Ghad"
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 450px"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                )
              })}
              
              {/* Navigation Dots have been removed */}
            </div>
          </div>

          {/* Text Content */}
          <div className={`space-y-8 sm:space-y-10 ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-[#FD820A]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{t("about.mission")}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {t("about.mission_desc")}
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-[#FD820A]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{t("about.vision")}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {t("about.vision_desc")}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6">
              {[t("about.value1") || "Quality", t("about.value2") || "Trust", t("about.value3") || "Excellence"].map((value, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-[#FD820A]" />
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-lg sm:rounded-xl overflow-hidden">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background p-8 sm:p-10 lg:p-12 text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FD820A] mb-2 sm:mb-3">{stat.value}</div>
              <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
