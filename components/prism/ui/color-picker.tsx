import * as React from "react"
import { cn } from "@lib/utils"

export interface ColorPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  required?: boolean
  presetColors?: string[]
  format?: "hex" | "rgb" | "hsl"
  showInput?: boolean
  showPreview?: boolean
  allowAlpha?: boolean
  name?: string
  id?: string
  onValueChange?: (color: string) => void
  className?: string
}

const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
  ({
    value: controlledValue,
    defaultValue = "#128297",
    placeholder = "Select color",
    label,
    error,
    disabled = false,
    required = false,
    presetColors = [
      "#128297", // Teal primary
      "#016479", // Teal dark
      "#2A2C35", // Gray 100
      "#6A6C75", // Gray 70
      "#FFFFFF", // White
      "#000000", // Black
      "#10B981", // Green
      "#F59E0B", // Yellow
      "#EF4444", // Red
      "#8B5CF6", // Purple
      "#06B6D4", // Cyan
      "#F97316", // Orange
    ],
    format = "hex",
    showInput = true,
    showPreview = true,
    allowAlpha = false,
    name,
    id: providedId,
    onValueChange,
    className,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const [isOpen, setIsOpen] = React.useState(false)
    const [customColor, setCustomColor] = React.useState("")
    
    const containerRef = React.useRef<HTMLDivElement>(null)
    const autoId = React.useId()
    const colorPickerId = providedId || `${autoId}-colorpicker`
    const errorId = error ? `${colorPickerId}-error` : undefined
    const panelId = `${colorPickerId}-panel`

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const handleValueChange = (color: string) => {
      if (!isControlled) {
        setInternalValue(color)
      }
      onValueChange?.(color)
      setIsOpen(false)
    }

    const handleCustomColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = event.target.value
      setCustomColor(newColor)
      handleValueChange(newColor)
    }

    const handlePresetClick = (color: string) => {
      handleValueChange(color)
    }

    const isValidColor = (color: string): boolean => {
      const style = new Option().style
      style.color = color
      return style.color !== ""
    }

    // Close picker when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const formatColorValue = (color: string): string => {
      // For this simple implementation, we'll primarily work with hex
      // In a full implementation, you'd convert between formats
      return color
    }

    return (
      <div
        ref={ref}
        className={cn("pendo-color-picker", className)}
        {...props}
      >
        {label && (
          <label
            htmlFor={colorPickerId}
            className="pendo-label"
          >
            {label}
            {required && <span className="pendo-required-indicator"> *</span>}
          </label>
        )}
        
        <div
          ref={containerRef}
          className={cn(
            "pendo-color-picker__container",
            isOpen && "pendo-color-picker__container--open",
            error && "pendo-color-picker__container--error",
            disabled && "pendo-color-picker__container--disabled"
          )}
        >
          <div className="pendo-color-picker__trigger-wrapper">
            <button
              id={colorPickerId}
              type="button"
              name={name}
              className="pendo-color-picker__trigger"
              onClick={() => !disabled && setIsOpen(!isOpen)}
              disabled={disabled}
              aria-expanded={isOpen}
              aria-haspopup="dialog"
              aria-controls={panelId}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={errorId}
              aria-required={required}
              role="button"
            >
              <div 
                className="pendo-color-picker__swatch"
                style={{ backgroundColor: value }}
                aria-hidden="true"
              />
              <span className="pendo-color-picker__value">
                {formatColorValue(value)}
              </span>
            </button>
          </div>

          {isOpen && (
            <div 
              id={panelId}
              className="pendo-color-picker__panel" 
              role="dialog" 
              aria-label="Choose color"
              aria-modal="false"
            >
              {showInput && (
                <div className="pendo-color-picker__input-section">
                  <label className="pendo-color-picker__input-label">
                    Custom Color
                  </label>
                  <div className="pendo-color-picker__input-wrapper">
                    <input
                      type="color"
                      value={value}
                      onChange={handleCustomColorChange}
                      className="pendo-color-picker__color-input"
                      aria-label="Color picker"
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => {
                        const newValue = e.target.value
                        if (isValidColor(newValue)) {
                          handleValueChange(newValue)
                        }
                      }}
                      className="pendo-color-picker__text-input"
                      placeholder={placeholder}
                    />
                  </div>
                </div>
              )}

              {presetColors.length > 0 && (
                <div className="pendo-color-picker__presets">
                  <label className="pendo-color-picker__presets-label">
                    Preset Colors
                  </label>
                  <div className="pendo-color-picker__preset-grid">
                    {presetColors.map((color, index) => (
                      <button
                        key={color}
                        type="button"
                        className={cn(
                          "pendo-color-picker__preset",
                          value === color && "pendo-color-picker__preset--selected"
                        )}
                        style={{ backgroundColor: color }}
                        onClick={() => handlePresetClick(color)}
                        aria-label={`Select color ${color}`}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {showPreview && (
                <div className="pendo-color-picker__preview">
                  <label className="pendo-color-picker__preview-label">
                    Live Preview
                  </label>
                  <div 
                    className="pendo-color-picker__preview-swatch"
                    style={{ backgroundColor: value }}
                    aria-label={`Current color: ${value}`}
                  >
                    <span className="pendo-color-picker__preview-value">
                      {value}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

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

ColorPicker.displayName = "ColorPicker"

export { ColorPicker }
