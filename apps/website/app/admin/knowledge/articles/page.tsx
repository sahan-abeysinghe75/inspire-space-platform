import Link from 'next/link'

export default function AdminArticlesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-100">Articles</h1>
        <Link href="/admin/knowledge/articles/create" className="btn-primary py-2 px-4 text-sm">
          + Create Article
        </Link>
      </div>
      
      <div className="glass-card text-center py-12">
        <p className="text-slate-400">No articles yet.</p>
      </div>
    </div>
  )
}
