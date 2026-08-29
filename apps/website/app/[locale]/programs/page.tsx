import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '../../../i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProgramsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('programs');

  const astroPrograms = t.raw('astroPrograms') as Array<{ title: string; desc: string }>;
  const techPrograms = t.raw('techPrograms') as Array<{ title: string; desc: string }>;

  return (
    <div className="min-h-screen bg-[#f5f6ff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1e1b4b]">{t('title')}</h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Inspire Astro Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
              Inspire Astro
            </span>
            <div className="flex-1 h-px bg-violet-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {astroPrograms.map((program, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 border-2 border-transparent hover:border-violet-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1b4b] mb-2">{program.title}</h3>
                </div>
                <p className="text-slate-600 mt-auto">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inspire Tech Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
              Inspire Tech
            </span>
            <div className="flex-1 h-px bg-cyan-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techPrograms.map((program, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 border-2 border-transparent hover:border-cyan-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1b4b] mb-2">{program.title}</h3>
                </div>
                <p className="text-slate-600 mt-auto">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e1b4b] mb-4">{t('cta.heading')}</h2>
          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('cta.sub')}
          </p>
          <Link 
            href="/events/request"
            className="inline-block bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            {t('cta.button')}
          </Link>
        </div>

      </div>
    </div>
  );
}
