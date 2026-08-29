export default function AdminEventsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-100">Event Requests</h1>
      
      <div className="glass-card overflow-hidden">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-900/50 text-xs uppercase text-slate-400 border-b border-slate-800">
            <tr>
              <th className="px-6 py-4 font-medium">Organization</th>
              <th className="px-6 py-4 font-medium">Contact</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            <tr className="hover:bg-slate-800/30 transition-colors">
              <td className="px-6 py-4 font-medium text-slate-200">Royal College</td>
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">2024-11-15</td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-semibold">Pending</span>
              </td>
              <td className="px-6 py-4">
                <a href="/admin/events/1" className="text-indigo-400 hover:text-indigo-300 font-medium">View</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
