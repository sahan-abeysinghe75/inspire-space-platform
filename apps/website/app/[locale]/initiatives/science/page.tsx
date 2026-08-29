import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '../../../../i18n/navigation'

export async function generateMetadata() {
  return { title: 'Inspire Science' }
}

export default async function InspireSciencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  const focusAreas = [
    { icon: '⚛️', label: 'Physics' },
    { icon: '🧪', label: 'Chemistry' },
    { icon: '🧬', label: 'Biology' },
    { icon: '📐', label: 'Mathematics' },
    { icon: '🌿', label: 'Environmental Science' },
    { icon: '📚', label: 'Scientific Literacy' },
    { icon: '🔬', label: 'STEM Activities' },
    { icon: '🥼', label: 'Lab Education' },
  ]

  const programs = [
    {
      icon: '🧪',
      title: 'Lab Science Sessions',
      desc: 'Hands-on chemistry, biology, and physics experiments for school students. Bringing textbook concepts to life.',
    },
    {
      icon: '🌿',
      title: 'Environmental Science Camp',
      desc: 'Field-based environmental science education and awareness programs exploring ecosystems and sustainability.',
    },
    {
      icon: '📐',
      title: 'Mathematics Workshops',
      desc: 'Engaging math programs to build problem-solving skills, critical thinking, and mathematical foundations.',
    },
    {
      icon: '🏆',
      title: 'Science Fair & Exhibitions',
      desc: 'Platform for students to showcase their scientific projects, models, and innovations to the community.',
    },
    {
      icon: '🏫',
      title: 'STEM Club Programs',
      desc: 'Structured curricula and activities for school STEM clubs to maintain ongoing engagement in science.',
    },
    {
      icon: '💡',
      title: 'Interdisciplinary Projects',
      desc: 'Projects combining multiple scientific disciplines to solve real-world problems and foster innovation.',
    },
  ]

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-slate-50 to-slate-50" />
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-100 text-emerald-700 text-[11px] font-bold uppercase tracking-widest shadow-sm">
            An Inspire Space Initiative
          </div>
          <div className="text-6xl animate-bounce">🔬</div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            {t('title')}
          </h1>
          <p className="text-[12px] text-emerald-600 uppercase tracking-widest font-bold">{t('tag')}</p>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">{t('subtitle')}</p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/events/request" className="btn-primary">Request a Program</Link>
            <Link href="/knowledge" className="btn-secondary bg-white">Explore Resources</Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card space-y-4 border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl">🎯</span>
              <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">{t('mission')}</p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">{t('focusAreas')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-3xl border border-slate-100 bg-slate-50 text-center hover:border-emerald-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl">{area.icon}</span>
                <span className="text-[14px] font-bold text-slate-800">{area.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">{t('programs')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-slate-200 bg-white hover:-translate-y-1 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 space-y-4">
                <span className="text-4xl block">{p.icon}</span>
                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-6 p-12 rounded-[2.5rem] border border-emerald-200 bg-emerald-50 shadow-sm relative overflow-hidden">
          <h2 className="text-2xl font-extrabold text-slate-900 relative z-10">Ready to explore science?</h2>
          <p className="text-slate-600 text-base font-medium relative z-10">Bring a science program to your school, university, or community. We provide the equipment, expertise, and engaging curriculum.</p>
          <div className="relative z-10">
            <Link href="/events/request" className="btn-primary">Request an Event</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
