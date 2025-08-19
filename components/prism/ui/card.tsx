import * as React from "react"
import { cn } from "@lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title text displayed in the header */
  title: string
  /** Optional action buttons to display in the header */
  headerActions?: React.ReactNode
  /** Optional footer content */
  footer?: React.ReactNode
  /** Whether to remove padding from the card body */
  noPadding?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, headerActions, children, footer, noPadding = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "border border-[var(--color-gray-40)] rounded-[3px] bg-[var(--color-gray-0)] flex flex-col w-full",
          className
        )}
        {...props}
      >
        <div className="flex justify-between items-center p-4 border-b border-[var(--color-gray-40)]">
          <h3 className="text-preset-18 text-[var(--color-gray-100)] m-0">{title}</h3>
          {headerActions && (
            <div className="flex gap-2 items-center">{headerActions}</div>
          )}
        </div>
        <div className={cn("flex-1", !noPadding && "p-4")}>{children}</div>
        {footer && (
          <div className="p-4 border-t border-[var(--color-gray-40)] flex justify-between items-center">
            {footer}
          </div>
        )}
      </div>
    )
  }
)
Card.displayName = "Card"

export { Card }