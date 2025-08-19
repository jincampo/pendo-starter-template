import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@lib/utils"

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'tertiary-link' | 'destructive'
export type ButtonSize = 'default' | 'small' | 'mini'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style variant of the button */
  variant?: ButtonVariant
  /** The size of the button */
  size?: ButtonSize
  /** Whether to render as a child component */
  asChild?: boolean
  /** Whether the button is in a loading state */
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'default', 
    asChild = false, 
    loading = false,
    disabled,
    children,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const buttonClasses = cn(
      // Base class
      "pendo-button",
      // Size modifier
      `pendo-button--${size}`,
      // Variant modifier
      `pendo-button--${variant}`,
      // State modifiers
      loading && "is-loading",
      disabled && "is-disabled",
      // Custom className
      className
    )

    return (
      <Comp
        className={buttonClasses}
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <span className="pendo-spinner" aria-hidden="true" />
            <span className="sr-only">Loading...</span>
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }