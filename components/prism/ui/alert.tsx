import * as React from "react"
import { cn } from "@lib/utils"
import { Icon } from "@prism/icon"

export type AlertVariant = 'success' | 'info' | 'warning' | 'error'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The visual style variant of the alert */
  variant?: AlertVariant
  /** Optional title for the alert */
  title?: string
  /** Whether the alert can be dismissed */
  dismissible?: boolean
  /** Callback when the alert is dismissed */
  onDismiss?: () => void
}

const variantIconMap: Record<AlertVariant, keyof typeof import('lucide-react')> = {
  success: 'CheckCircle',
  info: 'Info',
  warning: 'AlertTriangle',
  error: 'AlertCircle',
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    className, 
    variant = 'info', 
    title, 
    dismissible = false,
    onDismiss,
    children,
    ...props 
  }, ref) => {
    const alertClasses = cn(
      // Base class
      "pendo-alert",
      // Variant modifier
      `pendo-alert--${variant}`,
      // Custom className
      className
    )

    const IconComponent = variantIconMap[variant]

    return (
      <div
        ref={ref}
        className={alertClasses}
        role="alert"
        aria-live="polite"
        {...props}
      >
        <div className="pendo-alert__icon">
          <Icon 
            name={IconComponent}
            size="medium" 
            aria-hidden="true"
          />
        </div>
        
        <div className="pendo-alert__content">
          {title && (
            <div className="pendo-alert__title">
              {title}
            </div>
          )}
          {children && (
            <div className="pendo-alert__description">
              {children}
            </div>
          )}
        </div>

        {dismissible && onDismiss && (
          <button
            className="pendo-alert__close"
            onClick={onDismiss}
            aria-label="Close alert"
            type="button"
          >
            <Icon 
              name="X" 
              size="small" 
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    )
  }
)
Alert.displayName = "Alert"

export { Alert }

