import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server'

export default async function FaqsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('knowledge')

  const faqs = [
    { q: 'What is Inspire Astro?', a: 'Inspire Astro (FOADS) is the astronomy initiative of Inspire Space, dedicated to advancing astronomy education, observational astronomy, and space science awareness across Sri Lanka.' },
    { q: 'Do I need a telescope to participate in events?', a: 'No, we provide telescopes at our observation sessions and events.' },
    { q: 'How much does it cost to request an event?', a: 'Event costs vary based on requirements. Contact us for a quote.' }
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold text-gradient mb-12 text-center">{t('faqs')}</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="glass-card group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-medium text-lg text-slate-200">
              {faq.q}
              <span className="transition-transform group-open:rotate-180 text-indigo-400">▼</span>
            </summary>
            <div className="mt-4 text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
