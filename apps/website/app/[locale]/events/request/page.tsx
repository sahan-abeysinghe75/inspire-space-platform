'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function EventRequestPage() {
  const t = useTranslations('events')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  if (status === 'success') {
    return (
      <div className="container mx-auto px-4 py-24 max-w-md text-center space-y-6">
        <div className="text-5xl">✅</div>
        <h2 className="text-2xl font-extrabold text-slate-900">{t('form.successTitle')}</h2>
        <p className="text-slate-600 font-medium">{t('form.successMessage')}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl min-h-screen bg-slate-50">
      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-extrabold text-gradient">{t('title')}</h1>
        <p className="text-slate-600 font-medium">{t('subtitle')}</p>
      </header>

      <div className="glass-card bg-white border border-slate-200 shadow-sm p-8 rounded-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">{t('form.organization')}</label>
              <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all duration-300" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">{t('form.contactName')}</label>
              <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all duration-300" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">{t('form.email')}</label>
              <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all duration-300" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">{t('form.phone')}</label>
              <input type="tel" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all duration-300" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">{t('form.eventDate')}</label>
            <input type="date" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all duration-300" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">{t('form.description')}</label>
            <textarea rows={4} required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all duration-300"></textarea>
          </div>
          
          <button type="submit" disabled={status === 'submitting'} className="w-full btn-primary text-base py-3 mt-2">
            {status === 'submitting' ? t('form.submitting') : t('form.submit')}
          </button>
        </form>
      </div>
    </div>
  )
}
