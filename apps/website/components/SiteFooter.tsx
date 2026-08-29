import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '../i18n/navigation'

export default function SiteFooter({ locale }: { locale: 'en' | 'si' }) {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

  return (
    <footer className="border-t border-indigo-100/80 mt-24 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 shrink-0">
                <Image src="/logo.svg" alt="Inspire Space Logo" fill sizes="48px" className="object-contain" />
              </div>
              <span className="text-[18px] font-extrabold text-[#1e1b4b] tracking-tight">Inspire Space</span>
            </Link>
            <p className="text-[#64748b] text-sm leading-relaxed max-w-xs">{t('tagline')}</p>
            <p className="text-[11px] text-indigo-400/80 uppercase tracking-widest font-medium">{t('taglineShort')}</p>
          </div>

          {/* Inspire Space links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#1e1b4b]">{t('inspire')}</h4>
            <ul className="space-y-2.5 text-sm text-[#64748b]">
              <li><Link href="/about" className="hover:text-[#7c3aed] transition-colors">{tNav('about')}</Link></li>
              <li><Link href="/programs" className="hover:text-[#7c3aed] transition-colors">{tNav('programs')}</Link></li>
              <li><Link href="/events/request" className="hover:text-[#7c3aed] transition-colors">{tNav('events')}</Link></li>
              <li><Link href="/contact" className="hover:text-[#7c3aed] transition-colors">{tNav('contact')}</Link></li>
            </ul>
          </div>

          {/* Initiatives */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#1e1b4b]">{t('initiatives')}</h4>
            <ul className="space-y-2.5 text-sm text-[#64748b]">
              <li><Link href="/initiatives/astro" className="hover:text-[#7c3aed] transition-colors">🔭 {tNav('astro')}</Link></li>
              <li><Link href="/initiatives/tech" className="hover:text-[#0891b2] transition-colors">💻 {tNav('tech')}</Link></li>
            </ul>
          </div>

          {/* Knowledge + Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#1e1b4b]">{t('knowledge')}</h4>
            <ul className="space-y-2.5 text-sm text-[#64748b]">
              <li><Link href="/knowledge" className="hover:text-[#7c3aed] transition-colors">{t('knowledgeCenter')}</Link></li>
              <li><Link href="/knowledge/articles" className="hover:text-[#7c3aed] transition-colors">{t('articles')}</Link></li>
              <li><Link href="/gallery" className="hover:text-[#7c3aed] transition-colors">{tNav('gallery')}</Link></li>
              <li>
                <a href="https://learn.inspirespacesl.org" className="hover:text-[#7c3aed] transition-colors" target="_blank" rel="noopener noreferrer">
                  {t('learningPlatform')} ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-indigo-100/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#64748b]">
          <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
          <a href="https://inspirespacesl.org" className="hover:text-[#1e1b4b] transition-colors" target="_blank" rel="noopener noreferrer">
            inspirespacesl.org
          </a>
        </div>
      </div>
    </footer>
  )
}
