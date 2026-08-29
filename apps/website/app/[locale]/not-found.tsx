import { Link } from '../../i18n/navigation'
import { getTranslations } from 'next-intl/server'

export default async function NotFound() {
  const t = await getTranslations('common')

  return (
    <div className="container mx-auto px-4 py-24 min-h-[75vh] flex flex-col items-center justify-center text-center bg-slate-50">
      <div className="max-w-md space-y-6">
        {/* Animated Icon */}
        <div className="text-7xl animate-bounce">🚀</div>

        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">404</h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-800">Route Under Construction</h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            This page is either not found or currently being built as part of the Inspire Space STEM ecosystem!
          </p>
        </div>

        <div className="pt-6">
          <Link href="/" className="btn-primary text-base px-8 py-3.5 shadow-md">
            {t('backToHome')}
          </Link>
        </div>
      </div>
    </div>
  )
}
