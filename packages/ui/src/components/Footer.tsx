import React from 'react'
import { Youtube, Facebook, Instagram, Twitter } from 'lucide-react'
import { cn } from '../lib/utils'

export interface FooterProps {
  locale: 'en' | 'si'
}

export default function Footer({ locale }: FooterProps) {
  const isEn = locale === 'en'
  const langClass = isEn ? '' : 'si'

  return (
    <footer className="relative bg-card pt-16 pb-8 border-t border-subtle overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] cosmic-gradient-bg"></div>
      
      <div className="container-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-1 bg-transparent">
            <a href={`/${locale}`} className="flex items-center gap-2 mb-4 bg-transparent border-none">
              <img src="/logo.svg" alt="AstroSL" className="h-10 w-auto bg-transparent border-none" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.removeAttribute('hidden') }} />
              <span hidden className="text-xl font-bold text-primary">AstroSL</span>
            </a>
            <p className={cn("text-secondary text-sm leading-relaxed bg-transparent", langClass)}>
              {isEn ? "Exploring the cosmos together. Join the premier astronomy society in Sri Lanka to discover the wonders of the universe." : "එක්ව විශ්වය ගවේෂණය කරමු. ශ්‍රී ලංකාවේ ප්‍රමුඛතම තාරකා විද්‍යා සංගමය හා එක්වී විශ්වයේ අරුම පුදුම දෑ ගවේෂණය කරන්න."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-transparent">
            <h4 className={cn("text-primary font-semibold mb-4 bg-transparent", langClass)}>
              {isEn ? "Quick Links" : "ක්ෂණික සබැඳි"}
            </h4>
            <ul className="flex flex-col gap-2 bg-transparent">
              {['Home', 'About', 'Services', 'Events'].map((link, i) => {
                const siLinks = ['මුල් පිටුව', 'අප ගැන', 'සේවාවන්', 'සිදුවීම්']
                const paths = ['/', '/about', '/services', '/events']
                return (
                  <li key={link} className="bg-transparent">
                    <a href={`/${locale}${paths[i] === '/' ? '' : paths[i]}`} className={cn("text-secondary hover:text-cosmic text-sm transition-colors bg-transparent border-none", langClass)}>
                      {isEn ? link : siLinks[i]}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Knowledge */}
          <div className="bg-transparent">
            <h4 className={cn("text-primary font-semibold mb-4 bg-transparent", langClass)}>
              {isEn ? "Knowledge" : "දැනුම"}
            </h4>
            <ul className="flex flex-col gap-2 bg-transparent">
              {['Articles', 'Gallery', 'Resources'].map((link, i) => {
                const siLinks = ['ලිපි', 'ගැලරිය', 'සම්පත්']
                const paths = ['/knowledge', '/gallery', '/knowledge/resources']
                return (
                  <li key={link} className="bg-transparent">
                    <a href={`/${locale}${paths[i]}`} className={cn("text-secondary hover:text-cosmic text-sm transition-colors bg-transparent border-none", langClass)}>
                      {isEn ? link : siLinks[i]}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Connect */}
          <div className="bg-transparent">
            <h4 className={cn("text-primary font-semibold mb-4 bg-transparent", langClass)}>
              {isEn ? "Connect" : "සම්බන්ධ වන්න"}
            </h4>
            <ul className="flex flex-col gap-2 bg-transparent mb-6">
              <li className="bg-transparent">
                <a href={`/${locale}/contact`} className={cn("text-secondary hover:text-cosmic text-sm transition-colors bg-transparent border-none", langClass)}>
                  {isEn ? "Contact Us" : "අපව අමතන්න"}
                </a>
              </li>
            </ul>
            <div className="flex gap-4 bg-transparent">
              <a href="#" className="text-secondary hover:text-cosmic transition-colors bg-transparent border-none"><Youtube size={20} className="bg-transparent" /></a>
              <a href="#" className="text-secondary hover:text-cosmic transition-colors bg-transparent border-none"><Facebook size={20} className="bg-transparent" /></a>
              <a href="#" className="text-secondary hover:text-cosmic transition-colors bg-transparent border-none"><Instagram size={20} className="bg-transparent" /></a>
              <a href="#" className="text-secondary hover:text-cosmic transition-colors bg-transparent border-none"><Twitter size={20} className="bg-transparent" /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-subtle flex flex-col md:flex-row justify-between items-center gap-4 bg-transparent">
          <p className="text-secondary text-sm bg-transparent">
            &copy; {new Date().getFullYear()} Astro Digital Platform. {isEn ? "All rights reserved." : "සියලු හිමිකම් ඇවිරිණි."}
          </p>
          <p className={cn("text-secondary text-sm bg-transparent", langClass)}>
            {isEn ? "Built with ♥ for the cosmos" : "විශ්වයට ආදරයෙන් නිර්මාණය කරන ලදි"}
          </p>
        </div>
      </div>
    </footer>
  )
}
