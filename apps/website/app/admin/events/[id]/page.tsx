export default async function AdminEventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-100">Request #{id}</h1>
        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">Pending</span>
      </div>
      
      <div className="glass-card space-y-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-slate-500 mb-1">Organization</div>
            <div className="text-slate-200 font-medium">Royal College</div>
          </div>
          <div>
            <div className="text-slate-500 mb-1">Contact Person</div>
            <div className="text-slate-200 font-medium">John Doe</div>
          </div>
          <div>
            <div className="text-slate-500 mb-1">Email</div>
            <div className="text-slate-200 font-medium">john@example.com</div>
          </div>
          <div>
            <div className="text-slate-500 mb-1">Phone</div>
            <div className="text-slate-200 font-medium">0771234567</div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6">
          <div className="text-slate-500 mb-2 text-sm">Update Status</div>
          <div className="flex gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Approve Request</button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Reject Request</button>
          </div>
        </div>
      </div>
    </div>
  )
}
