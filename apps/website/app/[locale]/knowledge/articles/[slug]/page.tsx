import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation'

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug } = await params
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <article className="glass-card p-8 md:p-12 space-y-8">
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="text-indigo-400 text-sm font-medium uppercase tracking-wider">Astronomy</div>
          <h1 className="text-4xl font-bold text-slate-100 capitalize">{slug.replace(/-/g, ' ')}</h1>
          <div className="text-slate-500 text-sm">Published recently • 5 min read</div>
        </header>
        <div className="prose prose-invert prose-indigo max-w-none">
          <p className="text-slate-300 leading-relaxed text-lg">
            This is a placeholder for the article content. The full rich text content will be rendered here.
          </p>
        </div>
      </article>
    </div>
  )
}
