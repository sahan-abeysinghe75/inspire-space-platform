import React from 'react'
import { cn } from '../lib/utils'

export interface PageHeroProps {
  titleEn: string
  titleSi: string
  subtitleEn?: string
  subtitleSi?: string
  locale: 'en' | 'si'
  children?: React.ReactNode
}

export function PageHero({ titleEn, titleSi, subtitleEn, subtitleSi, locale, children }: PageHeroProps) {
  const isEn = locale === 'en'
  const title = isEn ? titleEn : titleSi
  const subtitle = isEn ? subtitleEn : subtitleSi
  const langClass = isEn ? '' : 'si'

  return (
    <section className="relative w-full min-h-[40vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-base z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,127,255,0.15),transparent_50%)] z-0"></div>
      <div className="star-field z-0"></div>
      
      <div className="container-xl relative z-10 text-center flex flex-col items-center animate-fadeInUp bg-transparent">
        <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4 bg-transparent", langClass)}>
          {title}
        </h1>
        {subtitle && (
          <p className={cn("text-lg md:text-xl text-secondary max-w-2xl mx-auto bg-transparent", langClass)}>
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8 bg-transparent w-full">
            {children}
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-base to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}
