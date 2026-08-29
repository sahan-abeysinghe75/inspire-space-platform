import React from 'react'
import { cn } from '../lib/utils'

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'cosmic' | 'white'
  className?: string
}

export function LoadingSpinner({ size = 'md', color = 'cosmic', className }: LoadingSpinnerProps) {
  const sizeMap = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-10 h-10 border-[3px]'
  }
  
  const colorMap = {
    cosmic: 'border-cosmic/20 border-t-cosmic',
    white: 'border-white/20 border-t-white'
  }

  return (
    <div 
      className={cn(
        "rounded-full animate-spin bg-transparent",
        sizeMap[size],
        colorMap[color],
        className
      )}
    />
  )
}
