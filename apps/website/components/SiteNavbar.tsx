'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { usePathname, Link } from '../i18n/navigation'
import { useTranslations } from 'next-intl'

// Only 2 initiatives now (Science removed)
const getInitiatives = (t: any) => [
  {
    href: '/initiatives/astro' as const,
    icon: '🔭',
    emoji: '🪐',
    name: t('astro'),
    tag: t('astro_tag'),
    desc: t('astro_desc'),
    color: 'text-violet-700',
    tagColor: 'bg-violet-100 text-violet-700',
    border: 'border-violet-200',
    glow: 'rgba(124, 58, 237, 0.12)',
  },
  {
    href: '/initiatives/tech' as const,
    icon: '💻',
    emoji: '⚡',
    name: t('tech'),
    tag: t('tech_tag'),
    desc: t('tech_desc'),
    color: 'text-cyan-700',
    tagColor: 'bg-cyan-100 text-cyan-700',
    border: 'border-cyan-200',
    glow: 'rgba(8, 145, 178, 0.12)',
  },
]

const navLinks = [
  { href: '/' as const, key: 'home', icon: '⬡' },
  { href: '/about' as const, key: 'about', icon: '◎' },
  { href: '/programs' as const, key: 'programs', icon: '◈' },
  { href: '/knowledge' as const, key: 'knowledge', icon: '◉' },
  { href: '/gallery' as const, key: 'gallery', icon: '◫' },
  { href: '/events/request' as const, key: 'events', icon: '◬' },
  { href: '/contact' as const, key: 'contact', icon: '◌' },
]

export default function SiteNavbar({ locale }: { locale: 'en' | 'si' }) {
  const pathname = usePathname()
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [initiativesOpen, setInitiativesOpen] = useState(false)
  const [mobileInitiativesOpen, setMobileInitiativesOpen] = useState(false)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  
  const initiatives = getInitiatives(t)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const initiativesActive = pathname.startsWith('/initiatives')

  // Hover handlers with delay to prevent flicker when crossing the gap
  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setInitiativesOpen(true)
  }
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setInitiativesOpen(false), 150)
  }

  return (
    <header
      className={`fixed z-50 transition-all duration-500 left-1/2 -translate-x-1/2 top-4 w-[95%] max-w-6xl rounded-full border py-3 ${
        scrolled
          ? 'bg-[#060b18]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(99,102,241,0.25)] border-indigo-500/30'
          : 'bg-[#0a1024]/70 backdrop-blur-md shadow-2xl border-indigo-500/10'
      }`}
    >
      {/* Dynamic ambient glow behind the navbar when scrolled */}
      <div 
        className={`absolute inset-0 rounded-full transition-opacity duration-500 pointer-events-none -z-10 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
        style={{ boxShadow: 'inset 0 0 20px rgba(99,102,241,0.1)' }}
      />

      <div className="px-6 flex items-center justify-between gap-4 relative z-10">

        {/* Logo — with orbital ring */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 shrink-0">
            {/* Orbital ring */}
            <div
              className="absolute inset-[-4px] rounded-full border border-indigo-400/30 group-hover:border-violet-400/80 transition-colors duration-500"
              style={{ animation: 'orbit-spin 8s linear infinite' }}
            />
            <div
              className="absolute inset-[-8px] rounded-full border border-indigo-300/10 group-hover:border-violet-300/40 transition-colors duration-500"
              style={{ animation: 'orbit-spin 14s linear infinite reverse' }}
            />
            <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              <Image src="/logo.svg" alt="Inspire Space Logo" fill sizes="40px" className="object-contain" priority />
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="block text-[16px] font-extrabold tracking-tight text-white drop-shadow-md">
              Inspire Space
            </span>
            <span className="block text-[8px] font-bold tracking-[0.2em] uppercase text-indigo-300">
              STEM · COSMOS · TECH
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">

          {/* Regular nav links except Initiatives */}
          {navLinks.slice(0, 2).map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 group overflow-hidden ${
                isActive(href) ? 'text-white' : 'text-indigo-200/70 hover:text-white'
              }`}
            >
              {isActive(href) && (
                <span className="absolute inset-0 rounded-full bg-indigo-500/20 border border-indigo-400/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
              )}
              <span className="absolute inset-0 rounded-full bg-transparent group-hover:bg-indigo-400/10 transition-colors duration-300" />
              <span className="relative z-10">{t(key as any)}</span>
            </Link>
          ))}

          {/* Initiatives Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              onClick={() => setInitiativesOpen(!initiativesOpen)}
              className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 overflow-hidden ${
                initiativesActive ? 'text-white' : 'text-indigo-200/70 hover:text-white'
              }`}
            >
              {initiativesActive && (
                <span className="absolute inset-0 rounded-full bg-indigo-500/20 border border-indigo-400/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
              )}
              <span className="absolute inset-0 rounded-full bg-transparent hover:bg-indigo-400/10 transition-colors duration-300" />
              <span className="relative z-10">{t('initiatives')}</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`relative z-10 w-3.5 h-3.5 transition-transform duration-500 ${initiativesOpen ? '-rotate-180 text-violet-400' : 'text-indigo-400/70'}`}
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-500 ${
                initiativesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
              style={{ width: '460px' }}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="relative rounded-3xl p-5 grid grid-cols-2 gap-4 bg-[#0a1024]/95 backdrop-blur-2xl border border-indigo-500/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(99,102,241,0.15)] overflow-hidden">
                {/* Decorative glow inside dropdown */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50" />
                
                {initiatives.map((init) => (
                  <Link
                    key={init.href}
                    href={init.href}
                    onClick={() => setInitiativesOpen(false)}
                    className="relative flex flex-col gap-3 p-5 rounded-2xl border border-indigo-500/10 bg-[#111a36]/50 hover:bg-[#162143] transition-all duration-300 group overflow-hidden"
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ background: `radial-gradient(circle at top right, ${init.glow}, transparent 70%)` }} />
                    <div className="flex items-center gap-2 relative z-10">
                      <span className="text-2xl drop-shadow-md group-hover:scale-110 transition-transform duration-300">{init.emoji}</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-black/40 ${init.color} border border-current/20`}>{init.tag}</span>
                    </div>
                    <div className="relative z-10">
                      <div className="text-[15px] font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200 transition-all duration-300">{init.name}</div>
                      <p className="text-[11px] text-indigo-200/60 leading-relaxed mt-1 group-hover:text-indigo-200/90 transition-colors">{init.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Remaining nav links */}
          {navLinks.slice(2).map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 group overflow-hidden ${
                isActive(href) ? 'text-white' : 'text-indigo-200/70 hover:text-white'
              }`}
            >
              {isActive(href) && (
                <span className="absolute inset-0 rounded-full bg-indigo-500/20 border border-indigo-400/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
              )}
              <span className="absolute inset-0 rounded-full bg-transparent group-hover:bg-indigo-400/10 transition-colors duration-300" />
              <span className="relative z-10">{t(key as any)}</span>
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language switcher */}
          <Link
            href={pathname as any}
            locale={locale === 'en' ? 'si' : 'en'}
            className="text-[10px] font-bold tracking-widest transition-all duration-300 px-3 py-1.5 rounded-full text-indigo-300 hover:text-white border border-indigo-500/30 hover:border-indigo-400 hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] bg-[#0f172a]/50"
          >
            {locale === 'en' ? 'සිං' : 'EN'}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col gap-[4px] p-2 relative z-50"
          >
            <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 origin-center bg-indigo-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-[2px] w-5 rounded-full transition-all duration-200 bg-indigo-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 origin-center bg-indigo-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-x-4 top-20 rounded-3xl overflow-hidden transition-all duration-500 ease-out border border-indigo-500/20 shadow-2xl ${
          menuOpen ? 'max-h-[70vh] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{
          background: 'rgba(10, 16, 36, 0.95)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <nav className="p-6 flex flex-col gap-2 overflow-y-auto max-h-[70vh] custom-scrollbar">
          {navLinks.slice(0, 2).map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`px-5 py-3.5 text-sm font-bold rounded-2xl transition-all ${
                isActive(href) ? 'text-white bg-indigo-500/20 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]' : 'text-indigo-200/80 hover:text-white hover:bg-indigo-500/10'
              }`}
            >
              {t(key as any)}
            </Link>
          ))}

          {/* Mobile Initiatives accordion */}
          <div className="rounded-2xl border border-indigo-500/10 bg-[#111a36]/40 overflow-hidden">
            <button
              onClick={() => setMobileInitiativesOpen(!mobileInitiativesOpen)}
              className={`w-full flex items-center justify-between px-5 py-3.5 text-sm font-bold transition-all ${
                initiativesActive ? 'text-white bg-indigo-500/10' : 'text-indigo-200/80 hover:text-white hover:bg-indigo-500/5'
              }`}
            >
              {t('initiatives')}
              <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform duration-300 text-indigo-400 ${mobileInitiativesOpen ? 'rotate-180' : ''}`}>
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileInitiativesOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-3 flex flex-col gap-2 bg-[#0a1024]/50">
                {initiatives.map((init) => (
                  <Link
                    key={init.href}
                    href={init.href}
                    onClick={() => { setMenuOpen(false); setMobileInitiativesOpen(false) }}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all ${
                      pathname.startsWith(init.href) ? 'text-white bg-indigo-500/20 shadow-inner' : 'text-indigo-200/70 hover:text-white hover:bg-indigo-500/10'
                    }`}
                  >
                    <span className="text-xl drop-shadow-sm">{init.emoji}</span>
                    <span>{init.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(2).map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`px-5 py-3.5 text-sm font-bold rounded-2xl transition-all ${
                isActive(href) ? 'text-white bg-indigo-500/20 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]' : 'text-indigo-200/80 hover:text-white hover:bg-indigo-500/10'
              }`}
            >
              {t(key as any)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
