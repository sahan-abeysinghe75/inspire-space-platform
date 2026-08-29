import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const badgeVariants = cva(
  'badge',
  {
    variants: {
      variant: {
        default: 'badge-default',
        blue: 'badge-blue',
        purple: 'badge-purple',
        gold: 'badge-gold',
        green: 'badge-green',
        red: 'badge-red',
        gray: 'badge-gray',
      }
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
