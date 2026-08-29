export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-100">Users Management</h1>
      <p className="text-slate-400 text-sm">Manage system administrators and editors.</p>
      
      <div className="glass-card overflow-hidden">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-900/50 text-xs uppercase text-slate-400 border-b border-slate-800">
            <tr>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Role</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            <tr className="hover:bg-slate-800/30 transition-colors">
              <td className="px-6 py-4 font-medium text-slate-200">System Admin</td>
              <td className="px-6 py-4">admin@astrosociety.lk</td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">SUPER_ADMIN</span>
              </td>
              <td className="px-6 py-4">
                <button className="text-indigo-400 hover:text-indigo-300 font-medium">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
