'use client'
import { useState } from 'react'

export default function CreateArticlePage() {
  const [lang, setLang] = useState<'en' | 'si'>('en')

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-bold text-slate-100">Create Article</h1>
      
      <div className="glass-card">
        <div className="flex border-b border-slate-800 mb-6">
          <button 
            className={`px-4 py-2 font-medium text-sm ${lang === 'en' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-slate-400 hover:text-slate-300'}`}
            onClick={() => setLang('en')}
          >
            English Content
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm ${lang === 'si' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-slate-400 hover:text-slate-300'}`}
            onClick={() => setLang('si')}
          >
            Sinhala Content
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Title</label>
            <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder={lang === 'en' ? 'Article title' : 'ලිපියේ මාතෘකාව'} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Content</label>
            <textarea rows={12} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Markdown supported..."></textarea>
          </div>
          
          <div className="pt-4 border-t border-slate-800 flex justify-end gap-4">
            <button type="button" className="btn-secondary py-2 px-4 text-sm">Save Draft</button>
            <button type="button" className="btn-primary py-2 px-4 text-sm">Publish Article</button>
          </div>
        </form>
      </div>
    </div>
  )
}
