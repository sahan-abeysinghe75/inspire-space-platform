import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server'

export default async function ArticlesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('knowledge')

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gradient mb-4">{t('articles')}</h1>
      </header>
      
      <div className="glass-card text-center py-20">
        <p className="text-slate-400">{t('noContent')}</p>
      </div>
    </div>
  )
}
