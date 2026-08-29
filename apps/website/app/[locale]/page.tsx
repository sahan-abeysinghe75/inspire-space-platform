import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '../../i18n/navigation';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return (
    <main className="min-h-screen bg-[#f5f6ff] flex flex-col items-center justify-start pb-20 font-sans -mt-28">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[850px] flex items-center justify-start text-left px-4 sm:px-8 lg:px-16 mb-20 overflow-hidden shadow-2xl">
        {/* Background Image */}
        <Image 
          src="/images/boy_rocket_wide.jpg" 
          alt="Inspire Space STEM Education"
          fill
          className="object-cover object-right md:object-center z-0"
          priority
        />
        
        {/* Gradient Overlays for Text Legibility */}
        {/* Mobile: dark gradient from bottom to top. Desktop: dark gradient from left to right */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/95 via-[#1e1b4b]/70 to-transparent md:bg-gradient-to-r md:from-[#1e1b4b]/95 md:via-[#1e1b4b]/80 md:to-transparent z-10" />
        
        {/* Content */}
        <div className="relative z-20 w-full max-w-3xl mt-auto pb-12 md:mt-0 md:pb-0 pt-24 md:pt-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl">
            {t('hero.title')} <br className="hidden md:block"/>
            <span className="text-indigo-300">{t('hero.brand')}</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-indigo-50 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed font-medium drop-shadow-xl">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
            <Link href="/about" className="w-full sm:w-auto px-8 py-4 rounded-full text-[#1e1b4b] bg-white hover:bg-slate-100 font-bold transition-all shadow-xl hover:-translate-y-1 text-lg">
              {t('hero.cta1')}
            </Link>
            <Link href="/about" className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-bold transition-all bg-[#4338ca]/80 hover:bg-[#4338ca] border border-white/20 backdrop-blur-md shadow-xl text-lg hover:-translate-y-1">
              {t('hero.cta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">{t('initiatives.heading')}</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">{t('initiatives.subheading')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Astro Card */}
          <div className="flex flex-col h-full bg-white rounded-3xl p-8 shadow-xl transition-transform hover:-translate-y-2 border-t-8" style={{ borderColor: '#7c3aed' }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner bg-violet-100">
              <svg className="w-8 h-8" style={{ color: '#7c3aed' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e1b4b]">{t('initiatives.astro.name')}</h3>
              <span className="px-3 py-1 rounded-full text-xs md:text-sm font-medium" style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed' }}>{t('initiatives.astro.tag')}</span>
            </div>
            <p className="text-slate-600 text-base md:text-lg mb-8 flex-grow">
              {t('initiatives.astro.desc')}
            </p>
            <Link href="/initiatives/astro" className="mt-auto block w-full text-center py-4 rounded-xl text-white bg-violet-600 hover:bg-violet-700 font-semibold transition-all shadow-md hover:shadow-lg">
              {t('initiatives.astro.cta')}
            </Link>
          </div>

          {/* Tech Card */}
          <div className="flex flex-col h-full bg-white rounded-3xl p-8 shadow-xl transition-transform hover:-translate-y-2 border-t-8" style={{ borderColor: '#0891b2' }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner bg-cyan-100">
              <svg className="w-8 h-8" style={{ color: '#0891b2' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e1b4b]">{t('initiatives.tech.name')}</h3>
              <span className="px-3 py-1 rounded-full text-xs md:text-sm font-medium" style={{ background: 'rgba(8, 145, 178, 0.1)', color: '#0891b2' }}>{t('initiatives.tech.tag')}</span>
            </div>
            <p className="text-slate-600 text-base md:text-lg mb-8 flex-grow">
              {t('initiatives.tech.desc')}
            </p>
            <Link href="/initiatives/tech" className="mt-auto block w-full text-center py-4 rounded-xl text-white bg-cyan-600 hover:bg-cyan-700 font-semibold transition-all shadow-md hover:shadow-lg">
              {t('initiatives.tech.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-16 shadow-lg border border-indigo-50">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] text-center mb-12">{t('platform.heading')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[#1e1b4b] mb-2">{t('platform.features.curricula.title')}</h4>
              <p className="text-slate-600 text-sm">{t('platform.features.curricula.desc')}</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-violet-100 flex items-center justify-center mb-4 text-violet-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[#1e1b4b] mb-2">{t('platform.features.labs.title')}</h4>
              <p className="text-slate-600 text-sm">{t('platform.features.labs.desc')}</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-cyan-100 flex items-center justify-center mb-4 text-cyan-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[#1e1b4b] mb-2">{t('platform.features.community.title')}</h4>
              <p className="text-slate-600 text-sm">{t('platform.features.community.desc')}</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-4 text-amber-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[#1e1b4b] mb-2">{t('platform.features.tracking.title')}</h4>
              <p className="text-slate-600 text-sm">{t('platform.features.tracking.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-10 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1e1b4b] mb-6">{t('cta.heading')}</h2>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">{t('cta.sub')}</p>
        <Link href="/events/request" className="inline-block px-8 py-4 md:px-10 md:py-5 rounded-full text-white bg-[#1e1b4b] hover:bg-[#312e81] text-base md:text-lg font-bold transition-transform hover:scale-105 shadow-xl">
          {t('cta.button')}
        </Link>
      </section>
    </main>
  );
}
