import React from 'react'
import { cn } from '../lib/utils'

export interface SectionTitleProps {
  titleEn: string
  titleSi: string
  subtitleEn?: string
  subtitleSi?: string
  locale: 'en' | 'si'
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function SectionTitle({ titleEn, titleSi, subtitleEn, subtitleSi, locale, align = 'center', className }: SectionTitleProps) {
  const isEn = locale === 'en'
  const title = isEn ? titleEn : titleSi
  const subtitle = isEn ? subtitleEn : subtitleSi
  const langClass = isEn ? '' : 'si'

  const alignClass = align === 'center' ? 'items-center text-center' : align === 'right' ? 'items-end text-right' : 'items-start text-left'

  return (
    <div className={cn("flex flex-col bg-transparent mb-10", alignClass, className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold text-gradient mb-3 bg-transparent", langClass)}>
        {title}
      </h2>
      <div className={cn("h-[3px] w-16 cosmic-gradient-bg rounded-full mb-4", align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : '')}></div>
      {subtitle && (
        <p className={cn("text-secondary max-w-2xl bg-transparent", langClass)}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
