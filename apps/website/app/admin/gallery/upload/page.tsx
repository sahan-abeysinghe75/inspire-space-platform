'use client'

export default function AdminGalleryUploadPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold text-slate-100">Upload Image</h1>
      
      <div className="glass-card">
        <form className="space-y-6">
          <div className="border-2 border-dashed border-slate-700 rounded-lg p-12 text-center bg-slate-900/30">
            <div className="text-4xl mb-4">📸</div>
            <p className="text-slate-300 text-sm mb-2">Drag and drop an image here, or click to browse</p>
            <p className="text-slate-500 text-xs">Supports JPG, PNG, WebP (Max 5MB)</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Title (English)</label>
              <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Title (Sinhala)</label>
              <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-indigo-500" />
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button type="button" className="btn-primary py-2 px-6">Upload</button>
          </div>
        </form>
      </div>
    </div>
  )
}
