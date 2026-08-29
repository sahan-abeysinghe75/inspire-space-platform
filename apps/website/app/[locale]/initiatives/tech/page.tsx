import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '../../../../i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TechInitiativePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('tech');

  const focusAreas = t.raw('focusAreasList') as Array<{ title: string; desc: string }>;
  const focusIcons = ['💻', '🤖', '🛡️', '📊', '☁️', '🔌', '🌐', '📱', '🎮', '⛓️'];
  const focusAreasWithIcons = focusAreas.map((area, idx) => ({ ...area, icon: focusIcons[idx] }));

  const programs = t.raw('programsList') as Array<{ title: string; desc: string }>;

  return (
    <div className="min-h-screen bg-[#f5f6ff] text-slate-600 font-sans pb-20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-cyan-100/50 border border-cyan-200 text-cyan-800 text-sm font-semibold tracking-wide">
          {t('heroTag')}
        </div>
        
        <div className="flex justify-center mb-6 text-6xl animate-pulse">
          💻
        </div>

        <h1 className="text-[#1e1b4b] text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Inspire <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500">Tech</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t('subtitle')}
        </p>
      </section>

      {/* Mission Card */}
      <section className="px-6 lg:px-8 max-w-5xl mx-auto mb-20">
        <div className="glass-card bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100 border-l-4 border-l-cyan-500">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e1b4b] mb-4">{t('missionHeading')}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t('mission')}
          </p>
        </div>
      </section>

      {/* Focus Areas Grid (10 items) - Teal themed cards */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-[#1e1b4b] text-center mb-10">{t('focusAreasHeading')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {focusAreasWithIcons.map((area, idx) => (
            <div key={idx} className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border border-cyan-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{area.icon}</div>
              <h3 className="font-semibold text-cyan-900 mb-2">{area.title}</h3>
              <p className="text-sm text-cyan-800/80 leading-snug">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Grid (6 items) - White cards with teal hover borders */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-[#1e1b4b] text-center mb-10">{t('programsHeading')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group cursor-default">
              <h3 className="text-xl font-bold text-[#1e1b4b] mb-3 group-hover:text-cyan-600 transition-colors">{prog.title}</h3>
              <p className="text-slate-600">{prog.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-cyan-50 rounded-3xl p-10 md:p-14 text-center border border-cyan-200">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">{t('cta.heading')}</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('cta.sub')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events/request" className="btn-primary bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              {t('cta.button1')}
            </Link>
            <Link href="/about" className="btn-secondary px-8 py-3 rounded-full font-medium border border-cyan-300 text-cyan-700 hover:bg-cyan-100 transition-colors">
              {t('cta.button2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
