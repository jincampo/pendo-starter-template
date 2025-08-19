import * as React from "react"
import { cn } from "@lib/utils"

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Whether the radio is checked */
  checked?: boolean
  /** Whether the radio is disabled */
  disabled?: boolean
  /** Callback when the radio state changes */
  onCheckedChange?: (checked: boolean) => void
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, checked, disabled, onCheckedChange, ...props }, ref) => {
    return (
      <div className={cn("pendo-radio", className)}>
        <input
          type="radio"
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className="pendo-radio__input"
          {...props}
        />
        <div className="pendo-radio__circle">
          {checked && <div className="pendo-radio__dot" />}
        </div>
      </div>
    )
  }
)
Radio.displayName = "Radio"

export { Radio }