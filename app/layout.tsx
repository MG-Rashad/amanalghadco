import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cairo, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aman Al-Ghad | أمان الغد - Food Distribution',
  description: 'أمان الغد لتسويق وتوزيع المنتجات الغذائية - موزع معتمد لعلامات عالمية. Trusted provider of top food brands in Libya.',
  keywords: ['food distribution', 'Libya', 'Président', 'Lactel', 'أمان الغد', 'توزيع الأغذية'],
  authors: [{ name: 'Aman Al-Ghad' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: '/images/logo.jpg',
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F4A21E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
