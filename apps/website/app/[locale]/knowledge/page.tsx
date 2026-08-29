import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from '../../../i18n/navigation';

export default async function KnowledgeCenterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('knowledge');

  return (
    <main className="min-h-screen bg-[#f5f6ff] text-[#1e1b4b] pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#eef2ff] to-[#f5f6ff] pt-24 pb-16 px-6 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold text-[#1e1b4b] tracking-tight mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Articles */}
          <Link href="/knowledge/articles" className="block group">
            <div className="glass-card bg-white border border-indigo-50 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-violet-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-violet-500"></div>
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl drop-shadow-sm">📝</div>
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                  {t('tagGeneral')}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#1e1b4b] mb-3 group-hover:text-violet-600 transition-colors">
                {t('articles')}
              </h2>
              <p className="text-slate-600 mb-8 flex-grow">
                {t('articlesDesc')}
              </p>
              <div className="font-semibold text-violet-600 flex items-center mt-auto">
                {t('explore')} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Monthly Sky Guide */}
          <Link href="/knowledge/sky-guide" className="block group">
            <div className="glass-card bg-white border border-indigo-50 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-amber-400 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl drop-shadow-sm">🔭</div>
                <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 ring-1 ring-inset ring-violet-700/10">
                  {t('tagAstro')}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#1e1b4b] mb-3 group-hover:text-amber-600 transition-colors">
                {t('skyGuide')}
              </h2>
              <p className="text-slate-600 mb-8 flex-grow">
                {t('skyGuideDesc')}
              </p>
              <div className="font-semibold text-amber-600 flex items-center mt-auto">
                {t('explore')} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Downloads */}
          <Link href="/knowledge/downloads" className="block group">
            <div className="glass-card bg-white border border-indigo-50 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-teal-400 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl drop-shadow-sm">📥</div>
                <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-700/10">
                  {t('tagTech')}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#1e1b4b] mb-3 group-hover:text-teal-600 transition-colors">
                {t('downloads')}
              </h2>
              <p className="text-slate-600 mb-8 flex-grow">
                {t('downloadsDesc')}
              </p>
              <div className="font-semibold text-teal-600 flex items-center mt-auto">
                {t('explore')} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* FAQs */}
          <Link href="/knowledge/faqs" className="block group">
            <div className="glass-card bg-white border border-indigo-50 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-400 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl drop-shadow-sm">❓</div>
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                  {t('tagGeneral')}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#1e1b4b] mb-3 group-hover:text-indigo-600 transition-colors">
                {t('faqs')}
              </h2>
              <p className="text-slate-600 mb-8 flex-grow">
                {t('faqsDesc')}
              </p>
              <div className="font-semibold text-indigo-600 flex items-center mt-auto">
                {t('explore')} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
          
        </div>

        <div className="mt-12 text-center bg-white/50 rounded-2xl py-4 px-6 border border-indigo-50 inline-block mx-auto">
          <p className="text-sm text-slate-500">
            {t('note')}
          </p>
        </div>
      </section>
    </main>
  );
}
