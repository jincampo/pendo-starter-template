import * as React from "react"
import { cn } from "@lib/utils"
import { Icon } from "./icon"

export interface TimePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  required?: boolean
  format?: "12" | "24"
  interval?: 15 | 30 | 60
  minTime?: string
  maxTime?: string
  name?: string
  id?: string
  onValueChange?: (value: string) => void
  className?: string
}

const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  ({
    value: controlledValue,
    defaultValue,
    placeholder = "Select time",
    label,
    error,
    disabled = false,
    required = false,
    format = "12",
    interval = 15,
    minTime,
    maxTime,
    name,
    id: providedId,
    onValueChange,
    className,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "")
    const [isOpen, setIsOpen] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState("")
    
    const dropdownRef = React.useRef<HTMLDivElement>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const listRef = React.useRef<HTMLUListElement>(null)
    const autoId = React.useId()
    const timePickerId = providedId || `${autoId}-timepicker`
    const errorId = error ? `${timePickerId}-error` : undefined
    const listboxId = `${timePickerId}-listbox`

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    // Generate time options
    const timeOptions = React.useMemo(() => {
      const options: string[] = []
      const totalMinutes = 24 * 60
      
      for (let minutes = 0; minutes < totalMinutes; minutes += interval) {
        const hours = Math.floor(minutes / 60)
        const mins = minutes % 60
        
        let timeString: string
        if (format === "12") {
          const period = hours < 12 ? "AM" : "PM"
          const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
          timeString = `${displayHours}:${mins.toString().padStart(2, '0')} ${period}`
        } else {
          timeString = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`
        }
        
        // Apply min/max time filters
        if (minTime && timeString < minTime) continue
        if (maxTime && timeString > maxTime) continue
        
        options.push(timeString)
      }
      
      return options
    }, [interval, format, minTime, maxTime])

    // Filter options based on search term
    const filteredOptions = React.useMemo(() => {
      if (!searchTerm) return timeOptions
      return timeOptions.filter(option => 
        option.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }, [timeOptions, searchTerm])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value
      setSearchTerm(newValue)
      
      // If the typed value matches an option exactly, select it
      const exactMatch = timeOptions.find(option => 
        option.toLowerCase() === newValue.toLowerCase()
      )
      
      if (exactMatch) {
        handleValueChange(exactMatch)
      }
    }

    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
      setSearchTerm("")
      setIsOpen(false)
      inputRef.current?.blur()
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
          } else {
            // Focus first option
            const firstOption = listRef.current?.querySelector('[role="option"]') as HTMLElement
            firstOption?.focus()
          }
          break
        case "Escape":
          event.preventDefault()
          setIsOpen(false)
          setSearchTerm("")
          break
        case "Enter":
          event.preventDefault()
          if (filteredOptions.length === 1) {
            handleValueChange(filteredOptions[0])
          }
          break
      }
    }

    const handleOptionKeyDown = (event: React.KeyboardEvent<HTMLLIElement>, option: string) => {
      switch (event.key) {
        case "Enter":
        case " ":
          event.preventDefault()
          handleValueChange(option)
          break
        case "ArrowDown":
          event.preventDefault()
          const nextElement = event.currentTarget.nextElementSibling as HTMLElement
          nextElement?.focus()
          break
        case "ArrowUp":
          event.preventDefault()
          const prevElement = event.currentTarget.previousElementSibling as HTMLElement
          if (prevElement) {
            prevElement.focus()
          } else {
            inputRef.current?.focus()
          }
          break
        case "Escape":
          event.preventDefault()
          setIsOpen(false)
          inputRef.current?.focus()
          break
      }
    }

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false)
          setSearchTerm("")
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const displayValue = value || (searchTerm && isOpen ? searchTerm : "")

    return (
      <div
        ref={ref}
        className={cn("pendo-time-picker", className)}
        {...props}
      >
        {label && (
          <label
            htmlFor={timePickerId}
            className="pendo-label"
          >
            {label}
            {required && <span className="pendo-required-indicator"> *</span>}
          </label>
        )}
        
        <div
          ref={dropdownRef}
          className={cn(
            "pendo-time-picker__container",
            isOpen && "pendo-time-picker__container--open",
            error && "pendo-time-picker__container--error",
            disabled && "pendo-time-picker__container--disabled"
          )}
        >
          <div className="pendo-time-picker__input-wrapper">
            <input
              ref={inputRef}
              id={timePickerId}
              type="text"
              name={name}
              value={displayValue}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              className="pendo-time-picker__input"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              aria-controls={listboxId}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={errorId}
              aria-required={required}
              role="combobox"
            />
            
            <button
              type="button"
              className="pendo-time-picker__trigger"
              onClick={() => setIsOpen(!isOpen)}
              disabled={disabled}
              aria-label="Open time picker"
              tabIndex={-1}
            >
              <Icon name="Clock" size="small" />
            </button>
          </div>

          {isOpen && (
            <ul
              ref={listRef}
              id={listboxId}
              className="pendo-time-picker__dropdown"
              role="listbox"
              aria-label="Time options"
            >
              {filteredOptions.length === 0 ? (
                <li className="pendo-time-picker__no-options">
                  No times available
                </li>
              ) : (
                filteredOptions.map((option) => (
                  <li
                    key={option}
                    className={cn(
                      "pendo-time-picker__option",
                      value === option && "pendo-time-picker__option--selected"
                    )}
                    role="option"
                    aria-selected={value === option}
                    tabIndex={0}
                    onClick={() => handleValueChange(option)}
                    onKeyDown={(e) => handleOptionKeyDown(e, option)}
                  >
                    {option}
                  </li>
                ))
              )}
            </ul>
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

TimePicker.displayName = "TimePicker"

export { TimePicker }
