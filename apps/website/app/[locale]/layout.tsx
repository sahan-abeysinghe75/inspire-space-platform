import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '../../i18n/routing'
import SiteNavbar from '../../components/SiteNavbar'
import SiteFooter from '../../components/SiteFooter'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: {
    template: '%s | Inspire Space',
    default: 'Inspire Space — STEM Education',
  },
  description: "Inspire Space Digital Ecosystem — Advancing STEM education across Sri Lanka.",
}

import { setRequestLocale } from 'next-intl/server'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  if (!routing.locales.includes(locale as 'en' | 'si')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <SiteNavbar locale={locale as 'en' | 'si'} />
      <main className="flex-1 flex flex-col min-h-[calc(100vh-140px)] relative pt-28">
        {children}
      </main>
      <SiteFooter locale={locale as 'en' | 'si'} />
    </NextIntlClientProvider>
  )
}
