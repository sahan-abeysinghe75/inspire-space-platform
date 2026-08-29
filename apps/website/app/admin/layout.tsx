import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <aside className="w-64 glass border-r-0 border-slate-800 flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gradient">Astro Admin</h2>
        </div>
        <nav className="mt-6 px-4 space-y-2">
          <Link href="/admin/dashboard" className="block px-4 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
            Dashboard
          </Link>
          <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-500 uppercase">Content</div>
          <Link href="/admin/knowledge/articles" className="block px-4 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
            Articles
          </Link>
          <Link href="/admin/gallery" className="block px-4 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
            Gallery
          </Link>
          <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-500 uppercase">Management</div>
          <Link href="/admin/events" className="block px-4 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
            Event Requests
          </Link>
          <Link href="/admin/users" className="block px-4 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
            Users
          </Link>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        <header className="h-16 glass border-b-0 border-slate-800 flex items-center justify-end px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-400">Admin User</div>
            <button className="text-sm bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded text-slate-200 transition-colors">
              Sign Out
            </button>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
