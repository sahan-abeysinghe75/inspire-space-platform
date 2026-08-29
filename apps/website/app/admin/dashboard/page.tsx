import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-100">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Articles', value: '124', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
          { label: 'Gallery Images', value: '89', color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { label: 'Pending Event Requests', value: '12', color: 'text-orange-400', bg: 'bg-orange-500/10' },
          { label: 'Total Users', value: '34', color: 'text-purple-400', bg: 'bg-purple-500/10' },
        ].map((stat, i) => (
          <div key={i} className="glass-card">
            <h3 className="text-sm font-medium text-slate-400">{stat.label}</h3>
            <div className={`text-3xl font-bold mt-2 ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>
      
      <div className="glass-card mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link href="/admin/knowledge/articles/create" className="btn-primary py-2 px-4 text-sm">
            + New Article
          </Link>
          <Link href="/admin/gallery/upload" className="btn-secondary py-2 px-4 text-sm">
            + Upload Image
          </Link>
          <Link href="/admin/events" className="btn-secondary py-2 px-4 text-sm border border-slate-700">
            View Requests
          </Link>
        </div>
      </div>
    </div>
  )
}
