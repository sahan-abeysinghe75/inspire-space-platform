import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server'

export default async function SkyGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('knowledge')

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-gradient">{t('skyGuide')}</h1>
      </header>
      
      <div className="glass-card text-center py-20">
        <p className="text-slate-400">{t('noContent')}</p>
      </div>
    </div>
  )
}
