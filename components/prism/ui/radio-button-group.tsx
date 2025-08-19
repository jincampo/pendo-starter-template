import * as React from "react"
import { cn } from "@lib/utils"

export interface RadioButtonOption {
  value: string
  label: string
  disabled?: boolean
  description?: string
}

export interface RadioButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  options: RadioButtonOption[]
  value?: string
  defaultValue?: string
  name?: string
  size?: "small" | "regular" | "large"
  variant?: "default" | "outlined" | "filled"
  orientation?: "horizontal" | "vertical"
  disabled?: boolean
  required?: boolean
  label?: string
  onValueChange?: (value: string) => void
  className?: string
}

const RadioButtonGroup = React.forwardRef<HTMLDivElement, RadioButtonGroupProps>(
  ({
    options,
    value: controlledValue,
    defaultValue,
    name: providedName,
    size = "regular",
    variant = "default",
    orientation = "horizontal",
    disabled = false,
    required = false,
    label,
    onValueChange,
    className,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "")
    const nameRef = React.useRef(providedName || `radio-group-${React.useId()}`)
    
    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const handleChange = (optionValue: string) => {
      if (disabled) return
      
      const option = options.find(opt => opt.value === optionValue)
      if (option?.disabled) return

      if (!isControlled) {
        setInternalValue(optionValue)
      }
      onValueChange?.(optionValue)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>, optionValue: string) => {
      const currentIndex = options.findIndex(opt => opt.value === optionValue)
      let nextIndex = currentIndex

      switch (event.key) {
        case "ArrowDown":
        case "ArrowRight":
          event.preventDefault()
          nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0
          break
        case "ArrowUp":
        case "ArrowLeft":
          event.preventDefault()
          nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1
          break
        case " ":
        case "Enter":
          event.preventDefault()
          handleChange(optionValue)
          return
        default:
          return
      }

      // Find next non-disabled option
      let attempts = 0
      while (options[nextIndex]?.disabled && attempts < options.length) {
        nextIndex = orientation === "horizontal" || event.key === "ArrowRight" || event.key === "ArrowDown"
          ? (nextIndex < options.length - 1 ? nextIndex + 1 : 0)
          : (nextIndex > 0 ? nextIndex - 1 : options.length - 1)
        attempts++
      }

      if (!options[nextIndex]?.disabled) {
        const nextButton = event.currentTarget.parentElement?.children[nextIndex] as HTMLElement
        nextButton?.focus()
      }
    }

    const radioGroupId = React.useId()

    return (
      <div className={cn("pendo-radio-button-group-wrapper", className)}>
        {label && (
          <label 
            id={`${radioGroupId}-label`}
            className="pendo-label"
          >
            {label}
            {required && <span className="pendo-required-indicator"> *</span>}
          </label>
        )}
        
        <div
          ref={ref}
          className={cn(
            "pendo-radio-button-group",
            `pendo-radio-button-group--${size}`,
            `pendo-radio-button-group--${variant}`,
            `pendo-radio-button-group--${orientation}`,
            disabled && "pendo-radio-button-group--disabled",
          )}
          role="radiogroup"
          aria-labelledby={label ? `${radioGroupId}-label` : undefined}
          aria-required={required}
          {...props}
        >
          {options.map((option, index) => {
            const isSelected = value === option.value
            const isDisabled = disabled || option.disabled
            const isFirst = index === 0
            const isLast = index === options.length - 1
            
            let position = "middle"
            if (isFirst && isLast) position = "single"
            else if (isFirst) position = "start"
            else if (isLast) position = "end"

            return (
              <label
                key={option.value}
                className={cn(
                  "pendo-radio-button",
                  `pendo-radio-button--${position}`,
                  isSelected && "pendo-radio-button--selected",
                  isDisabled && "pendo-radio-button--disabled"
                )}
                tabIndex={isSelected ? 0 : -1}
                onKeyDown={(e) => handleKeyDown(e, option.value)}
                role="radio"
                aria-checked={isSelected}
                aria-disabled={isDisabled}
              >
                <input
                  type="radio"
                  name={nameRef.current}
                  value={option.value}
                  checked={isSelected}
                  disabled={isDisabled}
                  required={required}
                  onChange={() => handleChange(option.value)}
                  className="pendo-radio-button__input"
                  tabIndex={-1}
                />
                
                <div className="pendo-radio-button__content">
                  <span className="pendo-radio-button__label">
                    {option.label}
                  </span>
                  {option.description && (
                    <span className="pendo-radio-button__description">
                      {option.description}
                    </span>
                  )}
                </div>
              </label>
            )
          })}
        </div>
      </div>
    )
  }
)

RadioButtonGroup.displayName = "RadioButtonGroup"

export { RadioButtonGroup }
