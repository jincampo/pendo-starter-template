import * as React from "react"
import { cn } from "@lib/utils"
import { Icon } from "@prism/icon"

export interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Whether the toggle is checked */
  checked?: boolean
  /** Whether the toggle is disabled */
  disabled?: boolean
  /** Callback when the toggle state changes */
  onCheckedChange?: (checked: boolean) => void
  /** Label for the toggle (for screen readers) */
  label?: string
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ 
    className,
    checked, 
    disabled, 
    onCheckedChange, 
    label,
    id,
    ...props 
  }, ref) => {
    const toggleId = id || React.useId()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(event.target.checked)
      }
    }

    return (
      <div className={cn("pendo-toggle", className)}>
        <input
          id={toggleId}
          type="checkbox"
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="pendo-toggle__input"
          role="switch"
          aria-checked={checked}
          aria-label={label}
          {...props}
        />
        <label 
          htmlFor={toggleId}
          className="pendo-toggle__track"
          aria-hidden="true"
        />
        <div className="pendo-toggle__icon">
          <Icon name="Check" size="small" aria-hidden="true" />
        </div>
      </div>
    )
  }
)
Toggle.displayName = "Toggle"

export { Toggle }