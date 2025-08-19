import * as React from "react"
import { cn } from "@lib/utils"

export type TagShape = 'rectangular' | 'rectangular-subtle' | 'rounded' | 'rounded-subtle'
export type TagSize = 'medium' | 'small' | 'mini'
export type TagType = 'default' | 'filter' | 'info' | 'error' | 'success' | 'warning'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  shape?: TagShape
  size?: TagSize
  type?: TagType
  backgroundColor?: string
  textColor?: string
}

const shapeStyles: Record<TagShape, string> = {
  'rectangular': 'rounded-[3px] bg-[var(--color-gray-30)] text-[var(--color-gray-100)]',
  'rectangular-subtle': 'rounded-[3px] bg-[var(--color-gray-20)] text-[var(--color-gray-70)]',
  'rounded': 'rounded-full bg-[var(--color-gray-30)] text-[var(--color-gray-100)]',
  'rounded-subtle': 'rounded-full bg-[var(--color-gray-20)] text-[var(--color-gray-70)]'
}

const filterStyles: Record<TagShape, string> = {
  'rectangular': 'rounded-[3px] bg-[var(--color-gray-0)] text-[var(--color-gray-100)] border border-[var(--color-gray-40)]',
  'rectangular-subtle': 'rounded-[3px] bg-[var(--color-gray-0)] text-[var(--color-gray-100)] border border-[var(--color-gray-40)]',
  'rounded': 'rounded-full bg-[var(--color-gray-0)] text-[var(--color-gray-100)] border border-[var(--color-gray-40)]',
  'rounded-subtle': 'rounded-full bg-[var(--color-gray-0)] text-[var(--color-gray-100)] border border-[var(--color-gray-40)]'
}

const subtleStatusStyles: Record<TagType, string> = {
  default: '',
  filter: '',
  info: 'bg-[var(--color-gray-20)] text-[var(--color-gray-70)]',
  error: 'bg-[var(--color-red-20)] text-[var(--color-red-80)]',
  success: 'bg-[var(--color-green-20)] text-[var(--color-green-100)]',
  warning: 'bg-[var(--color-yellow-20)] text-[var(--color-yellow-120)]'
}

const solidStatusStyles: Record<TagType, string> = {
  default: '',
  filter: '',
  info: 'bg-[var(--color-gray-70)] text-white',
  error: 'bg-[var(--color-red-60)] text-white',
  success: 'bg-[var(--color-green-90)] text-white',
  warning: 'bg-[var(--color-yellow-50)] text-[var(--color-gray-100)]'
}

const sizeStyles: Record<TagSize, string> = {
  'mini': 'h-4 px-1.5 extra-small-bold',
  'small': 'h-6 px-2 paragraph-small-bold',
  'medium': 'h-[27px] px-2 paragraph-base-bold'
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, shape = 'rectangular', size = 'medium', type = 'default', backgroundColor, textColor, style, ...props }, ref) => {
    let baseStyles = ''
    if (['info', 'error', 'success', 'warning'].includes(type)) {
      baseStyles = cn(
        shape.includes('rounded') ? 'rounded-full' : 'rounded-[3px]',
        shape.includes('subtle') ? subtleStatusStyles[type] : solidStatusStyles[type]
      )
    } else {
      baseStyles = type === 'filter' ? filterStyles[shape] : shapeStyles[shape]
    }
    
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          baseStyles,
          sizeStyles[size],
          className
        )}
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          ...style
        }}
        {...props}
      />
    )
  }
)
Tag.displayName = "Tag"

export { Tag }