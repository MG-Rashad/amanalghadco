"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Language = "ar" | "en"

interface LanguageContextType {
  lang: Language
  isRTL: boolean
  toggleLang: () => void
  t: (key: string) => string
}

const content = {
  ar: {
    "meta.title": "شركة أمان الغد | توزيع وتسويق الأغذية",
    "meta.desc": "الموفر الموثوق لأفضل العلامات التجارية في ليبيا.",
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.products": "منتجاتنا",
    "nav.contact": "اتصل بنا",
    "hero.title": "الجودة التي تثق بها",
    "hero.subtitle": "نحن شركة أمان الغد، الشريك الاستراتيجي الرائد في توزيع وتسويق أرقى المنتجات الغذائية العالمية والمحلية في ليبيا.",
    "hero.cta_primary": "تصفح المنتجات",
    "hero.cta_secondary": "تواصل معنا",
    "hero.brands_label": "علاماتنا التجارية الموزعة",
    "about.title": "من نحن",
    "about.mission": "مهمتنا",
    "about.mission_desc": "توفير منتجات غذائية عالية الجودة تلبي تطلعات السوق الليبي.",
    "about.vision": "رؤيتنا",
    "about.vision_desc": "أن نكون الخيار الأول والأكثر موثوقية في توزيع المنتجات الغذائية في ليبيا.",
    "about.stats.brands": "أكثر من 10 علامات",
    "about.stats.original": "منتجات أصلية",
    "about.stats.support": "دعم فني ولوجستي",
    "about.value1": "الجودة",
    "about.value2": "الثقة",
    "about.value3": "التميز",
    "products.title": "منتجاتنا وعلاماتنا التجارية",
    "products.subtitle": "نختار بعناية أفضل الماركات العالمية والمحلية لنقدمها لك",
    "products.president": "منتجات برسيدينت",
    "products.president_desc": "منتجات رائدة مثل بريزيدنـت والجبن والمنتجات الطازجة يومياً.",
    "products.lactel": "منتجات لاكتيل",
    "products.lactel_desc": "أجود أنواع الزيوت والمنتجات ذات الجودة العالية لكل المناسبات.",
    "products.delis": "منتجات ديليس",
    "products.delis_desc": "تشكيلة كاملة من المعكرونة بجميع أشكالها وأنواعها.",
    "products.pav": "منتجات باف",
    "products.pav_desc": "مجموعة مختارة من الطماطم الطبيعي والمنتجات ذات الجودة العالية.",
    "products.alyusr": "منتجات اليسر",
    "products.alyusr_desc": "تشكيلة واسعة من المنتجات الغذائية والعصائر التي تناسب الاحتياجات اليومية.",
    "products.featured_brands": "نحن الموزع الرسمي لشركة United Integrated Group.",
    "products.request_quote": "اطلب عرض سعر",
    "nutrition.title": "قيمة غذائية وجودة فائقة",
    "nutrition.feature1": "خالي من المواد الحافظة",
    "nutrition.benefit1": "صحة أفضل",
    "nutrition.detail1": "منتجات طبيعية 100% لضمان سلامة عائلتك.",
    "nutrition.feature2": "معايير صحية دولية",
    "nutrition.benefit2": "جودة مضمونة",
    "nutrition.detail2": "خضوع منتجاتنا لفحص صارم لضمان الامتثال.",
    "contact.title": "اتصل بنا للأعمال",
    "contact.subtitle": "هل أنت تاجر أو شركة؟ انضم إلى شبكة توزيعنا.",
    "contact.form_name": "الاسم الكامل",
    "contact.form_company": "اسم الشركة",
    "contact.form_phone": "رقم الهاتف",
    "contact.form_email": "البريد الإلكتروني",
    "contact.form_message": "رسالتك",
    "contact.form_submit": "إرسال الطلب",
    "contact.address_title": "مقرنا الرئيسي",
    "contact.address": "ليبيا، طرابلس",
    "contact.phone": "+218 91 03 40 420",
    "contact.email_label": "البريد الإلكتروني:",
    "contact.email": "info@amanalghad.ly",
    "contact.map_placeholder": "خريطة الموقع",
    "contact.success": "تم استلام طلبك بنجاح!",
    "footer.desc": "شركة أمان الغد لتسويق وتوزيع المنتجات الغذائية. التزامنا بالجودة يجعلنا الخيار الأول في ليبيا.",
    "footer.quick_links": "روابط سريعة",
    "footer.copyright": "© 2026 شركة أمان الغد. جميع الحقوق محفوظة.",
    "lang.switch": "EN",
    "lang.switch_full": "Switch to English",
    "chat.title": "مساعد أمان الغد",
    "chat.placeholder": "اكتب رسالتك هنا...",
    "chat.welcome": "مرحباً! أنا مساعد أمان الغد الذكي. كيف يمكنني مساعدتك اليوم؟",
  },
  en: {
    "meta.title": "Aman Al-Ghad | Food Distribution",
    "meta.desc": "Trusted provider of top brands in Libya.",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.contact": "Contact",
    "hero.title": "Quality You Trust",
    "hero.subtitle": "We are Aman Al-Ghad, leading partner in distributing finest global and local food products in Libya.",
    "hero.cta_primary": "View Products",
    "hero.cta_secondary": "Contact Us",
    "hero.brands_label": "Our Distributed Brands",
    "about.title": "About Us",
    "about.mission": "Our Mission",
    "about.mission_desc": "Providing high-quality food products that meet aspirations of Libyan market.",
    "about.vision": "Our Vision",
    "about.vision_desc": "To be first and most reliable choice for food distribution in Libya.",
    "about.stats.brands": "10+ Brands",
    "about.stats.original": "Original Products",
    "about.stats.support": "Logistical Support",
    "about.value1": "Quality",
    "about.value2": "Trust",
    "about.value3": "Excellence",
    "products.title": "Our Products & Brands",
    "products.subtitle": "Carefully selected global and local brands",
    "products.president": "Président Products",
    "products.president_desc": "Leading products like Président, cheese, and fresh daily items.",
    "products.lactel": "Lactel Products",
    "products.lactel_desc": "The finest oils and high-quality products for all occasions.",
    "products.delis": "Delis Products",
    "products.delis_desc": "A full range of pasta and related products in all shapes.",
    "products.pav": "Pav Products",
    "products.pav_desc": "A selection of natural tomatoes and high-quality products.",
    "products.alyusr": "Al-Yusr Products",
    "products.alyusr_desc": "A wide variety of food products and juices to suit your daily needs.",
    "products.featured_brands": "The official distributor of national and international brands.",
    "products.request_quote": "Request Quote",
    "nutrition.title": "Nutritional Value & Superior Quality",
    "nutrition.feature1": "Preservative Free",
    "nutrition.benefit1": "Better Health",
    "nutrition.detail1": "100% natural products ensuring your family's safety.",
    "nutrition.feature2": "International Standards",
    "nutrition.benefit2": "Guaranteed Quality",
    "nutrition.detail2": "Strict quality control for full compliance.",
    "contact.title": "Contact Us for Business",
    "contact.subtitle": "Join our distribution network and partner in success.",
    "contact.form_name": "Full Name",
    "contact.form_company": "Company Name",
    "contact.form_phone": "Phone Number",
    "contact.form_email": "Email Address",
    "contact.form_message": "Your Message",
    "contact.form_submit": "Send Request",
    "contact.address_title": "Headquarters",
    "contact.address": "Libya, Tripoli",
    "contact.phone": "+218 91 03 40 420",
    "contact.email_label": "Email:",
    "contact.email": "info@amanalghad.ly",
    "contact.map_placeholder": "Location Map",
    "contact.success": "Request received successfully!",
    "footer.desc": "Aman Al-Ghad Company for Food Distribution. Our commitment to quality makes us first choice.",
    "footer.quick_links": "Quick Links",
    "footer.copyright": "© 2026 Aman Al-Ghad Company. All rights reserved.",
    "lang.switch": "عربي",
    "lang.switch_full": "التبديل للعربية",
    "chat.title": "Aman Al-Ghad Assistant",
    "chat.placeholder": "Type your message here...",
    "chat.welcome": "Hello! I'm Aman Al-Ghad's AI assistant. How can I help you today?",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ar")

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const newLang = prev === "ar" ? "en" : "ar"
      document.documentElement.lang = newLang
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr"
      return newLang
    })
  }, [])

  const t = useCallback(
    (key: string) => {
      return content[lang][key as keyof (typeof content)["ar"]] || key
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, isRTL: lang === "ar", toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
