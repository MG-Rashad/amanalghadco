"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Plus } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// Unified Product Card with Slider Logic
function ProductCard({ name, desc, images }: { name: string; desc: string; images: string[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t, isRTL } = useLanguage()

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <Link href="#contact" className="group block text-center">
      {/* Slider Container - Size matched to Hero/About */}
      <div className="relative aspect-[4/3] max-w-md mx-auto rounded-2xl overflow-hidden bg-muted mb-4">
        {images.map((src, index) => {
          // Determine animation direction based on RTL (Same as Hero/About)
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
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      } ${translateClass}`}
                    >
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={index === 0}
                      />
                    </div>
                  )
        })}
        
        {/* Hover Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Plus className="w-5 h-5" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{desc}</p>
    </Link>
  )
}

export function ProductsSection() {
  const { t, isRTL } = useLanguage()

  // Prepare data with arrays for slides.
  const products = [
    { 
      name: isRTL ? "بريزيدنـت" : "Président", 
      desc: t("products.president_desc"), 
      images: ["/images/a.png", "/images/b.png", "/images/c.png"] 
    },
    { 
      name: t("products.pav"), 
      desc: t("products.pav_desc"), 
      images: ["/images/e.png", "/images/f.png"] 
    },
    { 
      name: t("products.alyusr"), 
      desc: t("products.alyusr_desc"), 
      images: ["/images/k.png", "/images/v.png", "/images/y.png"] 
    },
  ]

  return (
    <section id="products" className="pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 bg-muted/50">
      {/* Responsive padding for consistent spacing */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header - Centered and Resized, Arrows Removed */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
            {t("products.title")}
          </h2>
        </div>

        {/* Products Grid */}
        {/* First Row: 3 Items (Large Screens) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 justify-center">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        {/* Second Row: 2 Items (Large Screens) */}
        <div className="grid sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mt-8 justify-center">
          {products.slice(3).map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            {isRTL ? "الموزع الرسمي للعلامات التجارية الوطنية والعالمية." : t("products.featured_brands")}
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 text-foreground font-semibold hover:gap-4 transition-all group hover:text-[#FD820A]"
          >
            {t("products.request_quote")}
            <Plus className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
