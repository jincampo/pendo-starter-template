import * as React from "react"
import { cn } from "@lib/utils"
import { Icon } from "./icon"

export interface DatePickerPreset {
  label: string
  value: Date | [Date, Date] | Date[]
}

export interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  value?: Date | Date[] | [Date, Date]
  defaultValue?: Date | Date[] | [Date, Date]
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  required?: boolean
  minDate?: Date
  maxDate?: Date
  disabledDates?: Date[]
  format?: "MM/DD/YYYY" | "DD/MM/YYYY" | "YYYY-MM-DD"
  mode?: "single" | "multiple" | "range"
  presets?: DatePickerPreset[]
  showPresets?: boolean
  name?: string
  id?: string
  onValueChange?: (date: Date | Date[] | [Date, Date] | undefined) => void
  className?: string
}

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  ({
    value: controlledValue,
    defaultValue,
    placeholder = "Select date",
    label,
    error,
    disabled = false,
    required = false,
    minDate,
    maxDate,
    disabledDates = [],
    format = "MM/DD/YYYY",
    mode = "single",
    presets = [],
    showPresets = false,
    name,
    id: providedId,
    onValueChange,
    className,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState<Date | Date[] | [Date, Date] | undefined>(defaultValue)
    const [isOpen, setIsOpen] = React.useState(false)
    const [viewDate, setViewDate] = React.useState(new Date())
    
    const containerRef = React.useRef<HTMLDivElement>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const autoId = React.useId()
    const datePickerId = providedId || `${autoId}-datepicker`
    const errorId = error ? `${datePickerId}-error` : undefined
    const calendarId = `${datePickerId}-calendar`

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const formatDate = (date: Date | Date[] | [Date, Date] | undefined): string => {
      if (!date) return ""
      
      if (Array.isArray(date)) {
        if (mode === "range" && date.length === 2) {
          return `${formatSingleDate(date[0])} - ${formatSingleDate(date[1])}`
        } else if (mode === "multiple") {
          return date.map(d => formatSingleDate(d)).join(", ")
        }
      }
      
      return formatSingleDate(date as Date)
    }

    const formatSingleDate = (date: Date): string => {
      const year = date.getFullYear()
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const day = date.getDate().toString().padStart(2, '0')
      
      switch (format) {
        case "DD/MM/YYYY":
          return `${day}/${month}/${year}`
        case "YYYY-MM-DD":
          return `${year}-${month}-${day}`
        case "MM/DD/YYYY":
        default:
          return `${month}/${day}/${year}`
      }
    }

    const parseDate = (dateString: string): Date | undefined => {
      if (!dateString) return undefined
      
      let day: number, month: number, year: number
      
      switch (format) {
        case "DD/MM/YYYY":
          [day, month, year] = dateString.split('/').map(Number)
          break
        case "YYYY-MM-DD":
          [year, month, day] = dateString.split('-').map(Number)
          break
        case "MM/DD/YYYY":
        default:
          [month, day, year] = dateString.split('/').map(Number)
          break
      }
      
      if (!day || !month || !year) return undefined
      
      const date = new Date(year, month - 1, day)
      return isNaN(date.getTime()) ? undefined : date
    }

    const handleValueChange = (date: Date | undefined) => {
      if (!isControlled) {
        setInternalValue(date)
      }
      onValueChange?.(date)
      setIsOpen(false)
    }

    const isDateDisabled = (date: Date): boolean => {
      if (minDate && date < minDate) return true
      if (maxDate && date > maxDate) return true
      return disabledDates.some(disabledDate => 
        date.toDateString() === disabledDate.toDateString()
      )
    }

    const isSameDay = (date1: Date, date2: Date): boolean => {
      return date1.toDateString() === date2.toDateString()
    }

    const getDaysInMonth = (date: Date): Date[] => {
      const year = date.getFullYear()
      const month = date.getMonth()
      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)
      const startCalendar = new Date(firstDay)
      
      // Start from the beginning of the week
      startCalendar.setDate(startCalendar.getDate() - startCalendar.getDay())
      
      const days: Date[] = []
      const currentDate = new Date(startCalendar)
      
      // Generate 6 weeks (42 days)
      for (let i = 0; i < 42; i++) {
        days.push(new Date(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
      }
      
      return days
    }

    const navigateMonth = (direction: 'prev' | 'next') => {
      setViewDate(prevDate => {
        const newDate = new Date(prevDate)
        newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1))
        return newDate
      })
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value
      const parsedDate = parseDate(inputValue)
      
      if (parsedDate && !isDateDisabled(parsedDate)) {
        handleValueChange(parsedDate)
        setViewDate(parsedDate)
      }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case "ArrowDown":
        case "Enter":
          event.preventDefault()
          setIsOpen(true)
          break
        case "Escape":
          event.preventDefault()
          setIsOpen(false)
          break
      }
    }

    // Close calendar when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return (
      <div
        ref={ref}
        className={cn("pendo-date-picker", className)}
        {...props}
      >
        {label && (
          <label
            htmlFor={datePickerId}
            className="pendo-label"
          >
            {label}
            {required && <span className="pendo-required-indicator"> *</span>}
          </label>
        )}
        
        <div
          ref={containerRef}
          className={cn(
            "pendo-date-picker__container",
            isOpen && "pendo-date-picker__container--open",
            error && "pendo-date-picker__container--error",
            disabled && "pendo-date-picker__container--disabled"
          )}
        >
          <div className="pendo-date-picker__input-wrapper">
            <input
              ref={inputRef}
              id={datePickerId}
              type="text"
              name={name}
              value={formatDate(value)}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              className="pendo-date-picker__input"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-haspopup="dialog"
              aria-controls={calendarId}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={errorId}
              aria-required={required}
            />
            
            <button
              type="button"
              className="pendo-date-picker__trigger"
              onClick={() => setIsOpen(!isOpen)}
              disabled={disabled}
              aria-label="Open calendar"
              tabIndex={-1}
            >
              <Icon name="Calendar" size="small" />
            </button>
          </div>

          {isOpen && (
            <div 
              id={calendarId}
              className="pendo-date-picker__calendar" 
              role="dialog" 
              aria-label="Choose date"
              aria-modal="false"
            >
              {showPresets && presets.length > 0 && (
                <div className="pendo-date-picker__presets">
                  <h4 className="pendo-date-picker__presets-title">Quick Select</h4>
                  <div className="pendo-date-picker__presets-list">
                    {presets.map((preset, index) => (
                      <button
                        key={index}
                        type="button"
                        className="pendo-date-picker__preset-button"
                        onClick={() => {
                          if (!isControlled) {
                            setInternalValue(preset.value)
                          }
                          onValueChange?.(preset.value)
                          setIsOpen(false)
                        }}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="pendo-date-picker__header">
                <button
                  type="button"
                  className="pendo-date-picker__nav-button"
                  onClick={() => navigateMonth('prev')}
                  aria-label="Previous month"
                >
                  <Icon name="ChevronLeft" size="small" />
                </button>
                
                <h3 className="pendo-date-picker__month-year">
                  {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
                </h3>
                
                <button
                  type="button"
                  className="pendo-date-picker__nav-button"
                  onClick={() => navigateMonth('next')}
                  aria-label="Next month"
                >
                  <Icon name="ChevronRight" size="small" />
                </button>
              </div>

              <div className="pendo-date-picker__grid">
                <div className="pendo-date-picker__weekdays">
                  {weekDays.map(day => (
                    <div key={day} className="pendo-date-picker__weekday">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="pendo-date-picker__days">
                  {getDaysInMonth(viewDate).map((date, index) => {
                    const isCurrentMonth = date.getMonth() === viewDate.getMonth()
                    const isSelected = value && isSameDay(date, Array.isArray(value) ? value[0] : value)
                    const isToday = isSameDay(date, new Date())
                    const isDisabled = isDateDisabled(date)

                    return (
                      <button
                        key={index}
                        type="button"
                        className={cn(
                          "pendo-date-picker__day",
                          !isCurrentMonth && "pendo-date-picker__day--other-month",
                          isSelected && "pendo-date-picker__day--selected",
                          isToday && "pendo-date-picker__day--today",
                          isDisabled && "pendo-date-picker__day--disabled"
                        )}
                        onClick={() => !isDisabled && handleValueChange(date)}
                        disabled={isDisabled}
                        aria-label={formatDate(date)}
                        aria-selected={isSelected}
                      >
                        {date.getDate()}
                      </button>
                    )
                  })}
                </div>
              </div>
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

DatePicker.displayName = "DatePicker"

export { DatePicker }
