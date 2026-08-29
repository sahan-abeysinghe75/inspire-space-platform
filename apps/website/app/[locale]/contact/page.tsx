'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState('')

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen bg-slate-50">
      <header className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gradient">{t('title')}</h1>
        <p className="text-slate-600 font-medium">{t('subtitle')}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Info Column */}
        <div className="space-y-6">
          <div className="glass-card flex items-start gap-4 bg-white border border-slate-200 shadow-sm p-6 rounded-3xl">
            <div className="text-3xl mt-1">📧</div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">Email Us</h3>
              <p className="text-slate-600 text-sm mt-1 font-medium">contact@inspirespacesl.org</p>
            </div>
          </div>
          <div className="glass-card flex items-start gap-4 bg-white border border-slate-200 shadow-sm p-6 rounded-3xl">
            <div className="text-3xl mt-1">📞</div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">Call Us</h3>
              <p className="text-slate-600 text-sm mt-1 font-medium">+94 11 234 5678</p>
            </div>
          </div>
          <div className="glass-card flex items-start gap-4 bg-white border border-slate-200 shadow-sm p-6 rounded-3xl">
            <div className="text-3xl mt-1">📍</div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">Location</h3>
              <p className="text-slate-600 text-sm mt-1 font-medium">Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="glass-card bg-white border border-slate-200 shadow-sm p-8 rounded-3xl">
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setStatus('Message sent successfully!'); }}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all duration-300" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all duration-300" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Subject</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all duration-300" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all duration-300" required></textarea>
            </div>
            <button type="submit" className="w-full btn-primary text-base py-3">Send Message</button>
            {status && <p className="text-green-600 text-sm font-bold text-center mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}
