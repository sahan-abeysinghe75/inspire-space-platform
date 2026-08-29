import Link from 'next/link'

export default function AdminGalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-100">Gallery</h1>
        <Link href="/admin/gallery/upload" className="btn-primary py-2 px-4 text-sm">
          + Upload Image
        </Link>
      </div>
      
      <div className="glass-card text-center py-12">
        <p className="text-slate-400">No images uploaded yet.</p>
      </div>
    </div>
  )
}
