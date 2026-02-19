"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Phone, MapPin, Mail } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { href: "#hero", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#products", label: t("nav.products") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        
        {/* Professional compact layout with proper spacing */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr] gap-8 sm:gap-10 lg:gap-12 items-start">
          
            {/* Column 1: Brand */}
            <div className="space-y-4">
              <div className="h-12 sm:h-14">
                <Image
                  src="/images/logo.jpg"
                  alt="Aman Al-Ghad"
                  width={120}
                  height={64}
                  style={{ width: 'auto', height: 'auto' }}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
              <p className="text-background/70 leading-relaxed text-sm max-w-sm">
                {t("footer.desc")}
              </p>
              
              {/* Divider Line */}
              <div className="border-t border-background/20 pt-4"></div>
              
              {/* Statistical Code & Legal Name */}
              <div className="space-y-1.5">
                <p className="text-xs text-[#FD820A] font-medium">
                  Statistical Code: 49235-1
                </p>
                <p className="text-xs text-[#FD820A] font-medium leading-snug max-w-xs">
                  Legal Name: Aman Al Ghad Company for Importing Foodstuffs and Livestock LLC
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-semibold text-[#FD820A] mb-3 sm:mb-4 text-base">{t("footer.quick_links")}</h4>
              <nav className="space-y-2.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-background/70 hover:text-[#FD820A] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Contact (Headquarters) */}
            <div>
              <h4 className="font-semibold text-[#FD820A] mb-3 sm:mb-4 text-base">{t("contact.address_title")}</h4>
              
              <div className="space-y-3 text-background/70 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-background/40" />
                  <p className="leading-snug">{t("contact.address")}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-background/40" />
                  <p>
                    <span dir="ltr" className="block">
                      +218 91 0340420
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-background/40" />
                  <p>info@amanalghad.com</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-2 mt-5 sm:mt-6">
               <a
                    href="https://www.facebook.com/AmanAlgad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 hover:bg-background/20 hover:text-[#FD820A] flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 hover:bg-background/20 hover:text-[#FD820A] flex items-center justify-center transition-colors"
                    aria-label="X"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 hover:bg-background/20 hover:text-[#FD820A] flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-background/10 text-center text-background/50 text-xs max-w-6xl mx-auto">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
