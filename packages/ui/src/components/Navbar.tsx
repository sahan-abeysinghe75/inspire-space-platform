'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

export interface NavbarProps {
  locale: 'en' | 'si'
  currentPath?: string
}

const navLinks = [
  { nameEn: 'Home', nameSi: 'මුල් පිටුව', path: '/' },
  { nameEn: 'About', nameSi: 'අප ගැන', path: '/about' },
  { nameEn: 'Services', nameSi: 'සේවාවන්', path: '/services' },
  { nameEn: 'Knowledge', nameSi: 'දැනුම', path: '/knowledge' },
  { nameEn: 'Gallery', nameSi: 'ගැලරිය', path: '/gallery' },
  { nameEn: 'Events', nameSi: 'සිදුවීම්', path: '/events' },
  { nameEn: 'Contact', nameSi: 'සම්බන්ධ වන්න', path: '/contact' },
]

export default function Navbar({ locale, currentPath = '/' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const langFontClass = locale === 'si' ? 'si' : ''
  
  const changeLanguagePath = (targetLocale: 'en' | 'si') => {
    if (currentPath.startsWith('/en') || currentPath.startsWith('/si')) {
      return `/${targetLocale}${currentPath.substring(3)}`
    }
    return `/${targetLocale}${currentPath}`
  }

  return (
    <nav className={cn('fixed top-0 w-full z-50 transition-all duration-300', scrolled ? 'glass-dark border-b py-3' : 'bg-transparent py-5 border-b border-transparent')}>
      <div className="container-xl mx-auto flex items-center justify-between">
        <a href={`/${locale}`} className="flex items-center gap-2 z-50 relative bg-transparent border-none">
          <img src="/logo.svg" alt="AstroSL" className="h-10 w-auto bg-transparent border-none" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.removeAttribute('hidden') }} />
          <span hidden className="text-xl font-bold text-primary font-inter">AstroSL</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => {
              const href = link.path === '/' ? `/${locale}` : `/${locale}${link.path}`
              const isActive = currentPath === href || (currentPath === `/${locale}` && link.path === '/')
              return (
                <a
                  key={link.path}
                  href={href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-cosmic bg-transparent border-none',
                    isActive ? 'text-cosmic' : 'text-primary',
                    langFontClass
                  )}
                >
                  {locale === 'en' ? link.nameEn : link.nameSi}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2 border-l border-subtle pl-6 bg-transparent">
            <a href={changeLanguagePath('en')} className={cn('text-sm font-medium hover:text-cosmic bg-transparent border-none', locale === 'en' ? 'text-cosmic' : 'text-muted')}>EN</a>
            <span className="text-subtle">|</span>
            <a href={changeLanguagePath('si')} className={cn('text-sm font-medium hover:text-cosmic bg-transparent border-none si', locale === 'si' ? 'text-cosmic' : 'text-muted')}>SI</a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 text-primary bg-transparent border-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} className="bg-transparent" /> : <Menu size={24} className="bg-transparent" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 glass-dark z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        {navLinks.map((link) => {
          const href = link.path === '/' ? `/${locale}` : `/${locale}${link.path}`
          return (
            <a
              key={link.path}
              href={href}
              className={cn('text-xl font-medium bg-transparent border-none', langFontClass)}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === 'en' ? link.nameEn : link.nameSi}
            </a>
          )
        })}
        
        <div className="flex items-center gap-4 mt-4 bg-transparent">
          <a href={changeLanguagePath('en')} className={cn('text-lg font-medium bg-transparent border-none', locale === 'en' ? 'text-cosmic' : 'text-muted')}>EN</a>
          <span className="text-subtle bg-transparent">|</span>
          <a href={changeLanguagePath('si')} className={cn('text-lg font-medium bg-transparent border-none si', locale === 'si' ? 'text-cosmic' : 'text-muted')}>SI</a>
        </div>
      </div>
    </nav>
  )
}
