import * as React from "react"
import { cn } from "@lib/utils"

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'
export type TooltipVariant = 'default' | 'mini'

export interface TooltipProps {
  /** The content to display in the tooltip */
  content: React.ReactNode
  /** Position of the tooltip relative to the trigger */
  position?: TooltipPosition
  /** Variant of the tooltip */
  variant?: TooltipVariant
  /** Whether to show the tooltip on hover */
  showOnHover?: boolean
  /** Whether to show the tooltip on focus */
  showOnFocus?: boolean
  /** Delay before showing tooltip (in ms) */
  delay?: number
  /** The trigger element */
  children: React.ReactElement
  /** Additional className for the tooltip */
  className?: string
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ 
    content,
    position = 'top',
    variant = 'default',
    showOnHover = true,
    showOnFocus = true,
    delay = 500,
    children,
    className,
    ...props 
  }, ref) => {
    const [visible, setVisible] = React.useState(false)
    const timeoutRef = React.useRef<NodeJS.Timeout>()
    const tooltipId = React.useId()

    const showTooltip = React.useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setVisible(true)
      }, delay)
    }, [delay])

    const hideTooltip = React.useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setVisible(false)
    }, [])

    const handleMouseEnter = () => {
      if (showOnHover) {
        showTooltip()
      }
    }

    const handleMouseLeave = () => {
      if (showOnHover) {
        hideTooltip()
      }
    }

    const handleFocus = () => {
      if (showOnFocus) {
        showTooltip()
      }
    }

    const handleBlur = () => {
      if (showOnFocus) {
        hideTooltip()
      }
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        hideTooltip()
      }
    }

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [])

    const tooltipClasses = cn(
      "pendo-tooltip__content",
      `pendo-tooltip__content--${position}`,
      variant === 'mini' && "pendo-tooltip__content--mini",
      visible && "pendo-tooltip__content--visible",
      className
    )

    // Clone the trigger element to add event handlers and aria attributes
    const triggerElement = React.cloneElement(children, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      'aria-describedby': visible ? tooltipId : undefined,
      ...children.props,
    })

    return (
      <div
        ref={ref}
        className={cn("pendo-tooltip", children.props.className)}
        {...props}
      >
        {triggerElement}
        <div
          id={tooltipId}
          className={tooltipClasses}
          role="tooltip"
          aria-hidden={!visible}
        >
          {content}
        </div>
      </div>
    )
  }
)
Tooltip.displayName = "Tooltip"

export { Tooltip }

