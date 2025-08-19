import * as React from "react"
import { cn } from "@lib/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  variant?: "solid" | "dashed" | "dotted"
  size?: "thin" | "medium" | "thick"
  color?: "light" | "medium" | "dark"
  label?: string
  className?: string
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({
    orientation = "horizontal",
    variant = "solid",
    size = "thin",
    color = "medium",
    label,
    className,
    ...props
  }, ref) => {
    if (label && orientation === "horizontal") {
      return (
        <div
          ref={ref}
          className={cn(
            "pendo-divider-with-label",
            `pendo-divider-with-label--${orientation}`,
            `pendo-divider-with-label--${variant}`,
            `pendo-divider-with-label--${size}`,
            `pendo-divider-with-label--${color}`,
            className
          )}
          role="separator"
          aria-label={label}
          {...props}
        >
          <span className="pendo-divider-with-label__line" />
          <span className="pendo-divider-with-label__label">{label}</span>
          <span className="pendo-divider-with-label__line" />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "pendo-divider",
          `pendo-divider--${orientation}`,
          `pendo-divider--${variant}`,
          `pendo-divider--${size}`,
          `pendo-divider--${color}`,
          className
        )}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    )
  }
)

Divider.displayName = "Divider"

export { Divider }

