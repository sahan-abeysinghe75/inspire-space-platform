import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inspire Space — STEM Education Platform',
  description: "Inspire Space is a STEM education platform advancing astronomy, science, and technology across Sri Lanka.",
}

import { Inter, Noto_Sans_Sinhala } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansSinhala = Noto_Sans_Sinhala({ subsets: ['sinhala'], variable: '--font-noto-sans-sinhala' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansSinhala.variable}`}>
      <body className="antialiased min-h-screen" style={{ background: '#f5f6ff', color: '#1e1b4b' }}>
        {children}
      </body>
    </html>
  )
}
