import * as React from "react"
import { cn } from "@lib/utils"
import { Icon } from "./icon"

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
  disabled?: boolean
  defaultOpen?: boolean
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[]
  type?: "single" | "multiple"
  collapsible?: boolean
  variant?: "default" | "bordered" | "flush"
  size?: "small" | "medium" | "large"
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  className?: string
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({
    items,
    type = "single",
    collapsible = true,
    variant = "default",
    size = "medium",
    defaultValue,
    value: controlledValue,
    onValueChange,
    className,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(() => {
      if (controlledValue !== undefined) return controlledValue
      if (defaultValue !== undefined) return defaultValue
      
      // Set default open items
      const defaultOpenItems = items
        .filter(item => item.defaultOpen && !item.disabled)
        .map(item => item.id)
      
      return type === "single" ? (defaultOpenItems[0] || "") : defaultOpenItems
    })

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const updateValue = React.useCallback((newValue: string | string[]) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }, [isControlled, onValueChange])

    const isItemOpen = React.useCallback((itemId: string) => {
      if (type === "single") {
        return value === itemId
      }
      return Array.isArray(value) && value.includes(itemId)
    }, [value, type])

    const toggleItem = React.useCallback((itemId: string) => {
      const item = items.find(i => i.id === itemId)
      if (item?.disabled) return

      if (type === "single") {
        const newValue = isItemOpen(itemId) && collapsible ? "" : itemId
        updateValue(newValue)
      } else {
        const currentArray = Array.isArray(value) ? value : []
        const newValue = isItemOpen(itemId)
          ? currentArray.filter(id => id !== itemId)
          : [...currentArray, itemId]
        updateValue(newValue)
      }
    }, [items, type, isItemOpen, collapsible, value, updateValue])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, itemId: string) => {
      switch (event.key) {
        case "Enter":
        case " ":
          event.preventDefault()
          toggleItem(itemId)
          break
        case "ArrowDown":
          event.preventDefault()
          const currentIndex = items.findIndex(item => item.id === itemId)
          const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
          const nextButton = event.currentTarget
            .parentElement?.parentElement?.children[nextIndex]
            ?.querySelector('button')
          nextButton?.focus()
          break
        case "ArrowUp":
          event.preventDefault()
          const currentIndexUp = items.findIndex(item => item.id === itemId)
          const prevIndex = currentIndexUp > 0 ? currentIndexUp - 1 : items.length - 1
          const prevButton = event.currentTarget
            .parentElement?.parentElement?.children[prevIndex]
            ?.querySelector('button')
          prevButton?.focus()
          break
        case "Home":
          event.preventDefault()
          const firstButton = event.currentTarget
            .parentElement?.parentElement?.children[0]
            ?.querySelector('button')
          firstButton?.focus()
          break
        case "End":
          event.preventDefault()
          const lastButton = event.currentTarget
            .parentElement?.parentElement?.children[items.length - 1]
            ?.querySelector('button')
          lastButton?.focus()
          break
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "pendo-accordion",
          `pendo-accordion--${variant}`,
          `pendo-accordion--${size}`,
          className
        )}
        {...props}
      >
        {items.map((item, index) => {
          const isOpen = isItemOpen(item.id)
          const isDisabled = item.disabled

          return (
            <div
              key={item.id}
              className={cn(
                "pendo-accordion__item",
                isOpen && "pendo-accordion__item--open",
                isDisabled && "pendo-accordion__item--disabled"
              )}
            >
              <button
                type="button"
                className={cn(
                  "pendo-accordion__trigger",
                  isOpen && "pendo-accordion__trigger--open",
                  isDisabled && "pendo-accordion__trigger--disabled"
                )}
                aria-expanded={isOpen}
                aria-controls={`panel-${item.id}`}
                id={`trigger-${item.id}`}
                disabled={isDisabled}
                onClick={() => toggleItem(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
              >
                <span className="pendo-accordion__title">{item.title}</span>
                <span className="pendo-accordion__icon" aria-hidden="true">
                  <Icon 
                    name="ChevronDown" 
                    size="small"
                    className={cn(
                      "transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </span>
              </button>

              <div
                id={`panel-${item.id}`}
                role="region"
                aria-labelledby={`trigger-${item.id}`}
                className={cn(
                  "pendo-accordion__content",
                  isOpen ? "pendo-accordion__content--open" : "pendo-accordion__content--closed"
                )}
              >
                <div className="pendo-accordion__body">
                  {item.content}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
)

Accordion.displayName = "Accordion"

export { Accordion }

