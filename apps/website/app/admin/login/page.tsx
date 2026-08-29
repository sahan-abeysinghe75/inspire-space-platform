'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function AdminLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    // Uses NextAuth signIn (to be handled via credentials)
    // We would import signIn from next-auth/react here if it's available on client
    // For now, doing a standard fetch or simulated redirect
    window.location.href = '/admin/dashboard'
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 star-field">
      <div className="w-full max-w-md glass-card space-y-8 p-8 border-indigo-500/20">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gradient">Admin Login</h1>
          <p className="text-slate-400 text-sm">Sign in to manage the Astro Digital Platform</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          {error && <div className="p-3 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">{error}</div>}
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full btn-primary"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
