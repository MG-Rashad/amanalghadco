"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe, Facebook, Linkedin, X as XIcon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#hero", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#products", label: t("nav.products") },
    { href: "#contact", label: t("nav.contact") },
  ]

  const socialLinks = [
    { href: "https://www.facebook.com/AmanAlgad", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: XIcon, label: "X" }, // Changed: Using XIcon here
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-[#F5F5F0] ${
        scrolled ? "border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Aman Al-Ghad"
              width={110}
              height={56}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions - Social Media & Language */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white text-foreground/50 hover:text-[#E8740C] hover:bg-[#E8740C]/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            <div className="w-px h-5 bg-border" />
            
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              {t("lang.switch")}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F5F0] border-t border-border">
          <div className="container mx-auto px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-lg font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-border space-y-4">
              {/* Social Media */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-foreground/50 hover:text-[#E8740C] hover:bg-[#E8740C]/10 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <button
                onClick={() => {
                  toggleLang()
                  setMobileMenuOpen(false)
                }}
                className="flex items-center gap-2 text-foreground/70 py-2"
              >
                <Globe className="w-5 h-5" />
                {t("lang.switch_full")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
