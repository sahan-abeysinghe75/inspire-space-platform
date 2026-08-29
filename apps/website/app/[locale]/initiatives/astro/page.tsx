import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '../../../../i18n/navigation';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'astro' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function AstroInitiativePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('astro');

  const focusAreas = t.raw('focusAreasList') as Array<{ title: string; desc: string; icon: string }>;
  
  // Adding icons to focusAreas since we only translated text
  const icons = ['⭐', '🪐', '🌌', '📡', '⚛️', '☀️', '🧬', '🔭'];
  const focusAreasWithIcons = focusAreas.map((area, idx) => ({ ...area, icon: icons[idx] }));

  const programs = t.raw('programsList') as Array<{ name: string; level: string; duration: string }>;

  return (
    <main className="min-h-screen bg-[#f5f6ff] text-slate-600">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#f5f0ff] to-[#f5f6ff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-medium text-sm mb-8 border border-violet-200">
              {t('heroTag')}
            </div>
            
            <div className="text-7xl mb-6 animate-pulse">🔭</div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-[#1e1b4b] mb-6 tracking-tight">
              Inspire <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500">Astro</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/programs" className="btn-primary bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-violet-500/30 transition-all">
                {t('programsBtn')}
              </Link>
              <Link href="/about" className="btn-secondary bg-white text-violet-700 border-2 border-violet-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all">
                {t('learnMoreBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card bg-white rounded-2xl p-8 md:p-12 shadow-sm border-l-4 border-violet-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl text-violet-900 pointer-events-none">
                ✨
              </div>
              <h2 className="text-3xl font-bold text-[#1e1b4b] mb-6">{t('missionHeading')}</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                {t('mission')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#1e1b4b] mb-4">{t('focusAreasHeading')}</h2>
            <p className="text-lg text-slate-600">
              {t('focusAreasSub')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {focusAreasWithIcons.map((area, idx) => (
              <div key={idx} className="bg-violet-50 rounded-2xl p-6 border border-violet-100 hover:shadow-md hover:border-violet-300 transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{area.icon}</div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-2">{area.title}</h3>
                <p className="text-slate-600 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-[#1e1b4b] mb-4">{t('programsHeading')}</h2>
              <p className="text-lg text-slate-600">{t('programsSub')}</p>
            </div>
            <Link href="/programs" className="text-violet-600 font-bold hover:text-violet-800 hidden sm:block">
              {t('viewAllPrograms')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((prog, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-100 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
                    {prog.level}
                  </span>
                  <span className="text-sm text-slate-500">{prog.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-4">{prog.name}</h3>
                <div className="text-violet-600 font-medium text-sm flex items-center group">
                  {t('learnMoreInline')}
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-violet-50 rounded-3xl p-10 md:p-16 border border-violet-200 text-center shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">{t('cta.heading')}</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              {t('cta.sub')}
            </p>
            <Link href="/events/request" className="inline-block bg-[#1e1b4b] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-900 transition-colors">
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
