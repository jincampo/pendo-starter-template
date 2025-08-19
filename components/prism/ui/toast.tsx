import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@lib/utils"
import { Icon } from "./icon"

export interface ToastProps {
  id: string
  title?: string
  description?: string
  variant?: "success" | "error" | "warning" | "info"
  duration?: number
  dismissible?: boolean
  onDismiss?: (id: string) => void
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"
}

export interface ToastOptions extends Omit<ToastProps, 'id'> {
  id?: string
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({
    id,
    title,
    description,
    variant = "info",
    duration = 5000,
    dismissible = true,
    onDismiss,
    position = "top-right"
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const [isLeaving, setIsLeaving] = React.useState(false)
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    React.useEffect(() => {
      // Start visible animation
      const timer = setTimeout(() => setIsVisible(true), 10)
      
      // Auto dismiss
      if (duration > 0) {
        timeoutRef.current = setTimeout(() => {
          handleDismiss()
        }, duration)
      }

      return () => {
        clearTimeout(timer)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [duration])

    const handleDismiss = () => {
      setIsLeaving(true)
      setTimeout(() => {
        onDismiss?.(id)
      }, 300) // Match animation duration
    }

    const getIcon = () => {
      switch (variant) {
        case "success":
          return "CheckCircle"
        case "error":
          return "XCircle"
        case "warning":
          return "AlertTriangle"
        case "info":
        default:
          return "Info"
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "pendo-toast",
          `pendo-toast--${variant}`,
          `pendo-toast--${position}`,
          isVisible && !isLeaving && "pendo-toast--visible",
          isLeaving && "pendo-toast--leaving"
        )}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="pendo-toast__content">
          <div className="pendo-toast__icon">
            <Icon name={getIcon() as any} size="small" aria-hidden="true" />
          </div>
          
          <div className="pendo-toast__body">
            {title && (
              <div className="pendo-toast__title">{title}</div>
            )}
            {description && (
              <div className="pendo-toast__description">{description}</div>
            )}
          </div>

          {dismissible && (
            <button
              type="button"
              className="pendo-toast__close"
              onClick={handleDismiss}
              aria-label="Close notification"
            >
              <Icon name="X" size="small" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    )
  }
)

Toast.displayName = "Toast"

// Toast Provider Context and Hook
interface ToastContextType {
  toasts: ToastProps[]
  addToast: (toast: ToastOptions) => string
  removeToast: (id: string) => void
  removeAllToasts: () => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

// Toast Provider Component
export interface ToastProviderProps {
  children: React.ReactNode
  position?: ToastProps['position']
  maxToasts?: number
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = "top-right",
  maxToasts = 5
}) => {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const addToast = React.useCallback((toast: ToastOptions): string => {
    const id = toast.id || `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    
    const newToast: ToastProps = {
      ...toast,
      id,
      position: toast.position || position,
      onDismiss: (toastId: string) => {
        removeToast(toastId)
        toast.onDismiss?.(toastId)
      }
    }

    setToasts(prev => {
      const updated = [newToast, ...prev]
      return updated.slice(0, maxToasts) // Limit number of toasts
    })

    return id
  }, [position, maxToasts])

  const removeToast = React.useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const removeAllToasts = React.useCallback(() => {
    setToasts([])
  }, [])

  const contextValue = React.useMemo(() => ({
    toasts,
    addToast,
    removeToast,
    removeAllToasts
  }), [toasts, addToast, removeToast, removeAllToasts])

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  )
}

// Toast Container Component
interface ToastContainerProps {
  toasts: ToastProps[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || typeof window === 'undefined') {
    return null
  }

  // Group toasts by position
  const toastsByPosition = toasts.reduce((acc, toast) => {
    const pos = toast.position || "top-right"
    if (!acc[pos]) acc[pos] = []
    acc[pos].push(toast)
    return acc
  }, {} as Record<string, ToastProps[]>)

  return createPortal(
    <>
      {Object.entries(toastsByPosition).map(([position, positionToasts]) => (
        <div
          key={position}
          className={cn("pendo-toast-container", `pendo-toast-container--${position}`)}
        >
          {positionToasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </div>
      ))}
    </>,
    document.body
  )
}

// Convenience functions
export const toast = {
  success: (message: string, options?: Omit<ToastOptions, 'variant'>) => {
    // This will be implemented by the hook
    console.warn('toast.success called outside of ToastProvider')
  },
  error: (message: string, options?: Omit<ToastOptions, 'variant'>) => {
    console.warn('toast.error called outside of ToastProvider')
  },
  warning: (message: string, options?: Omit<ToastOptions, 'variant'>) => {
    console.warn('toast.warning called outside of ToastProvider')
  },
  info: (message: string, options?: Omit<ToastOptions, 'variant'>) => {
    console.warn('toast.info called outside of ToastProvider')
  }
}

export { Toast }

