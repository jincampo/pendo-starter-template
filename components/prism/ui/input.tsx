import * as React from "react"
import { cn } from "@lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  /** Label text displayed above the input */
  label?: string
  /** Error message to display below the input */
  error?: string
  /** Whether to use a textarea instead of an input */
  multiline?: boolean
  /** Number of rows for textarea (only applies when multiline is true) */
  rows?: number
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ className, label, error, multiline = false, rows = 3, id, ...props }, ref) => {
    const Component = multiline ? 'textarea' : 'input'
    const inputId = id || React.useId()
    const errorId = error ? `${inputId}-error` : undefined
    
    const inputClasses = cn(
      // Base class
      "pendo-input",
      // Multiline variant
      multiline && "pendo-input--multiline",
      // Error state
      error && "is-error",
      // Custom className
      className
    )

    return (
      <div className="pendo-input-container">
        {label && (
          <label 
            htmlFor={inputId}
            className="pendo-label"
          >
            {label}
          </label>
        )}
        <Component
          ref={ref as any}
          id={inputId}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={errorId}
          rows={multiline ? rows : undefined}
          {...props}
        />
        {error && (
          <span 
            id={errorId}
            className="pendo-error-message"
            role="alert"
            aria-live="polite"
          >
            {error}
          </span>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }