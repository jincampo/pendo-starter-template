import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@lib/utils"
import { Icon } from "@prism/icon"

export type ModalSize = 'small' | 'medium' | 'large'

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean
  /** Callback when the modal should be closed */
  onClose: () => void
  /** The title of the modal */
  title?: string
  /** The size of the modal */
  size?: ModalSize
  /** Whether to show the close button */
  showCloseButton?: boolean
  /** Modal content */
  children: React.ReactNode
  /** Additional className for the modal */
  className?: string
}

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pendo-modal__footer", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ModalFooter.displayName = "ModalFooter"

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ 
    open,
    onClose,
    title,
    size = 'medium',
    showCloseButton = true,
    children,
    className,
    ...props 
  }, ref) => {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
      setMounted(true)
    }, [])

    React.useEffect(() => {
      if (!open) return

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose()
        }
      }

      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'

      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }, [open, onClose])

    // Focus management
    const modalRef = React.useRef<HTMLDivElement>(null)
    const previousFocusRef = React.useRef<HTMLElement | null>(null)

    React.useEffect(() => {
      if (open && modalRef.current) {
        // Store the previously focused element
        previousFocusRef.current = document.activeElement as HTMLElement
        
        // Focus the modal
        modalRef.current.focus()
      } else if (!open && previousFocusRef.current) {
        // Return focus to the previously focused element
        previousFocusRef.current.focus()
      }
    }, [open])

    const handleOverlayClick = (event: React.MouseEvent) => {
      if (event.target === event.currentTarget) {
        onClose()
      }
    }

    const modalContent = (
      <div
        className="pendo-modal-overlay"
        onClick={handleOverlayClick}
        aria-modal="true"
        role="dialog"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        <div
          ref={ref || modalRef}
          className={cn(
            "pendo-modal",
            `pendo-modal--${size}`,
            className
          )}
          tabIndex={-1}
          {...props}
        >
          {(title || showCloseButton) && (
            <div className="pendo-modal__header">
              {title && (
                <h2 id="modal-title" className="pendo-modal__title">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  className="pendo-modal__close"
                  onClick={onClose}
                  aria-label="Close modal"
                  type="button"
                >
                  <Icon name="X" size="medium" aria-hidden="true" />
                </button>
              )}
            </div>
          )}
          
          <div className="pendo-modal__body">
            {children}
          </div>
        </div>
      </div>
    )

    if (!mounted || !open) return null

    return createPortal(modalContent, document.body)
  }
)
Modal.displayName = "Modal"

export { Modal, ModalFooter }

