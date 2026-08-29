import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '../../../i18n/navigation';

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const pillars = [
    {
      title: t('pillars.items.expert.title'),
      description: t('pillars.items.expert.desc'),
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: t('pillars.items.handsOn.title'),
      description: t('pillars.items.handsOn.desc'),
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: t('pillars.items.community.title'),
      description: t('pillars.items.community.desc'),
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: t('pillars.items.future.title'),
      description: t('pillars.items.future.desc'),
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const initiatives = [
    {
      title: t('initiativesSection.astro.title'),
      description: t('initiativesSection.astro.desc'),
      color: 'violet',
      bgClass: 'bg-violet-50',
      borderClass: 'border-violet-200',
      textClass: 'text-violet-600',
      hoverClass: 'hover:border-violet-400 hover:shadow-violet-100'
    },
    {
      title: t('initiativesSection.tech.title'),
      description: t('initiativesSection.tech.desc'),
      color: 'teal',
      bgClass: 'bg-teal-50',
      borderClass: 'border-teal-200',
      textClass: 'text-teal-600',
      hoverClass: 'hover:border-teal-400 hover:shadow-teal-100'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f6ff]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-[#eef2ff] to-[#f5f6ff]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-violet-600 font-semibold tracking-wider uppercase text-sm mb-4 block">{t('hero.tag')}</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1e1b4b] mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-base md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Core Information Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="glass-card bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-indigo-50">
            <h2 className="text-xl md:text-2xl font-bold text-[#1e1b4b] mb-4">{t('who.heading')}</h2>
            <p className="text-slate-600 leading-relaxed">
              {t('who.body')}
            </p>
          </div>
          <div className="glass-card bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-indigo-50">
            <h2 className="text-xl md:text-2xl font-bold text-[#1e1b4b] mb-4">{t('mission.heading')}</h2>
            <p className="text-slate-600 leading-relaxed">
              {t('mission.body')}
            </p>
          </div>
          <div className="glass-card bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-indigo-50">
            <h2 className="text-xl md:text-2xl font-bold text-[#1e1b4b] mb-4">{t('vision.heading')}</h2>
            <p className="text-slate-600 leading-relaxed">
              {t('vision.body')}
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">{t('pillars.heading')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('pillars.subheading')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-50 hover:border-indigo-200 transition-colors duration-300">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-2">{pillar.title}</h3>
                <p className="text-slate-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">{t('initiativesSection.heading')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('initiativesSection.subheading')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-3xl border-2 ${initiative.borderClass} ${initiative.hoverClass} transition-all duration-300 shadow-sm`}
              >
                <div className={`w-16 h-16 ${initiative.bgClass} rounded-2xl flex items-center justify-center mb-6`}>
                  {initiative.color === 'violet' ? (
                    <svg className={`w-8 h-8 ${initiative.textClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  ) : (
                    <svg className={`w-8 h-8 ${initiative.textClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-[#1e1b4b] mb-4">{initiative.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {initiative.description}
                </p>
                <Link 
                  href={`/programs`}
                  className={`inline-flex items-center font-semibold ${initiative.textClass} hover:opacity-80 transition-opacity`}
                >
                  {t('initiativesSection.cta')}
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
