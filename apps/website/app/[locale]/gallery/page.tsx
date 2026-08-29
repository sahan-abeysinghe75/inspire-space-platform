'use client';

import { useState } from 'react';
import { Camera, Telescope, Cpu, Calendar, Users, Upload } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All', icon: Camera, color: 'text-indigo-600' },
  { id: 'astro', label: 'Inspire Astro', icon: Telescope, color: 'text-violet-600' },
  { id: 'tech', label: 'Inspire Tech', icon: Cpu, color: 'text-teal-600' },
  { id: 'events', label: 'Events', icon: Calendar, color: 'text-amber-600' },
  { id: 'outreach', label: 'Outreach', icon: Users, color: 'text-indigo-600' },
];

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('all');

  const activeCategory = CATEGORIES.find(c => c.id === activeFilter) || CATEGORIES[0];
  const Icon = activeCategory.icon;

  return (
    <div className="min-h-screen bg-[#f5f6ff] flex flex-col font-sans">
      {/* Hero Section */}
      <section className="bg-cosmic relative overflow-hidden py-24 px-6 sm:px-12 lg:px-24 shadow-xl rounded-b-[3rem] mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4338ca] opacity-90 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl font-light text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            A visual journey through our cosmic exploration, tech innovation, and community impact.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 sm:px-12 lg:px-24 mb-12">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/40 transform scale-105'
                  : 'bg-white text-slate-600 border border-indigo-100 hover:border-violet-300 hover:text-violet-600 shadow-sm hover:shadow'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="px-6 sm:px-12 lg:px-24 flex-grow mb-16">
        <div className="max-w-6xl mx-auto">
          {/* Empty State Card */}
          <div className="glass-card rounded-3xl p-16 text-center border border-indigo-100 shadow-lg bg-white/70 backdrop-blur-md transition-all hover:shadow-xl hover:border-violet-300 flex flex-col items-center justify-center min-h-[450px]">
            <div className={`p-6 rounded-full bg-indigo-50/50 mb-8 shadow-inner ${activeCategory.color}`}>
              <Icon className="w-16 h-16 opacity-80" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#1e1b4b] mb-4 tracking-tight">
              {activeCategory.label} Media
            </h3>
            <p className="text-slate-600 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
              We are currently curating our finest moments for this category. Check back soon to explore our latest photos and videos!
            </p>
            {activeFilter !== 'all' && (
              <button 
                onClick={() => setActiveFilter('all')}
                className="btn-secondary px-8 py-3 rounded-full text-[#4338ca] font-semibold border-2 border-indigo-100 hover:border-[#4338ca] hover:bg-indigo-50 transition-colors shadow-sm"
              >
                View All Categories
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Upload CTA for admins */}
      <section className="mt-auto px-6 py-6 border-t border-indigo-100 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Inspire Space</p>
          <button className="flex items-center gap-2 mt-4 sm:mt-0 hover:text-violet-600 transition-colors px-4 py-2 rounded-lg hover:bg-white/60">
            <Upload className="w-4 h-4" />
            Admin: Upload New Media
          </button>
        </div>
      </section>
    </div>
  );
}
