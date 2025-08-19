import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@lib/utils"
import { Icon } from "@prism/icon"
import { Button } from "@prism/button"

export interface WizardStep {
  /** Unique identifier for the step */
  id: string
  /** Display label for the step */
  label: string
  /** Optional step number (auto-generated if not provided) */
  number?: number
  /** Whether this step can be navigated to directly */
  clickable?: boolean
}

export interface WizardProps {
  /** Whether the wizard is open */
  open: boolean
  /** Callback when the wizard should be closed */
  onClose: () => void
  /** The title of the wizard */
  title: string
  /** Array of wizard steps */
  steps: WizardStep[]
  /** Currently active step index */
  currentStep: number
  /** Callback when step changes */
  onStepChange?: (stepIndex: number) => void
  /** Callback when next button is clicked */
  onNext?: () => void
  /** Callback when previous button is clicked */
  onPrevious?: () => void
  /** Callback when finish button is clicked */
  onFinish?: () => void
  /** Whether to show the close button */
  showCloseButton?: boolean
  /** Custom next button text */
  nextText?: string
  /** Custom previous button text */
  previousText?: string
  /** Custom finish button text */
  finishText?: string
  /** Whether the next button is loading */
  nextLoading?: boolean
  /** Whether the finish button is loading */
  finishLoading?: boolean
  /** Wizard content */
  children: React.ReactNode
  /** Additional className for the wizard */
  className?: string
}

const Wizard = React.forwardRef<HTMLDivElement, WizardProps>(
  ({ 
    open,
    onClose,
    title,
    steps,
    currentStep,
    onStepChange,
    onNext,
    onPrevious,
    onFinish,
    showCloseButton = true,
    nextText = "Next",
    previousText = "Previous", 
    finishText = "Finish",
    nextLoading = false,
    finishLoading = false,
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
    const wizardRef = React.useRef<HTMLDivElement>(null)
    const previousFocusRef = React.useRef<HTMLElement | null>(null)

    React.useEffect(() => {
      if (open && wizardRef.current) {
        previousFocusRef.current = document.activeElement as HTMLElement
        wizardRef.current.focus()
      } else if (!open && previousFocusRef.current) {
        previousFocusRef.current.focus()
      }
    }, [open])

    const handleStepClick = (stepIndex: number) => {
      const step = steps[stepIndex]
      if (step?.clickable !== false && stepIndex <= currentStep && onStepChange) {
        onStepChange(stepIndex)
      }
    }

    const isLastStep = currentStep === steps.length - 1
    const isFirstStep = currentStep === 0

    const renderSteps = () => {
      return steps.map((step, index) => {
        const stepNumber = step.number || index + 1
        const isCompleted = index < currentStep
        const isCurrent = index === currentStep
        const isPending = index > currentStep
        
        let stepClass = "pendo-numbered-step"
        if (isCompleted) stepClass += " pendo-numbered-step--completed"
        if (isCurrent) stepClass += " pendo-numbered-step--current"
        if (isPending) stepClass += " pendo-numbered-step--pending"

        return (
          <React.Fragment key={step.id}>
            <button
              className={stepClass}
              onClick={() => handleStepClick(index)}
              disabled={isPending || step.clickable === false}
              aria-current={isCurrent ? "step" : undefined}
              type="button"
            >
              <span className="pendo-numbered-step__number">{stepNumber}.</span>
              <span className="pendo-numbered-step__label">{step.label}</span>
            </button>
            {index < steps.length - 1 && (
              <Icon 
                name="ChevronRight" 
                size="small" 
                className="pendo-numbered-step__separator"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        )
      })
    }

    const wizardContent = (
      <div className="pendo-wizard-overlay">
        <div
          ref={ref || wizardRef}
          className={cn("pendo-wizard", className)}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="wizard-title"
          {...props}
        >
          {/* Masthead */}
          <div className="pendo-wizard__masthead">
            <h1 id="wizard-title" className="pendo-wizard__title">
              {title}
            </h1>
            
            <div className="pendo-wizard__steps">
              <div className="pendo-numbered-steps">
                {renderSteps()}
              </div>
            </div>

            {showCloseButton && (
              <button
                className="pendo-wizard__close"
                onClick={onClose}
                aria-label="Close wizard"
                type="button"
              >
                <Icon name="X" size="medium" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Body */}
          <div className="pendo-wizard__body">
            <div className="pendo-wizard__content">
              <div className="pendo-wizard__card">
                <div className="pendo-wizard__card-header">
                  <h2 className="pendo-wizard__card-title">
                    {steps[currentStep]?.label}
                  </h2>
                </div>
                {children}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pendo-wizard__footer">
            <div>
              {/* Additional footer content can go here */}
            </div>
            
            <div className="pendo-wizard__footer-actions">
              {!isFirstStep && onPrevious && (
                <Button
                  variant="secondary"
                  onClick={onPrevious}
                  type="button"
                >
                  {previousText}
                </Button>
              )}
              
              {isLastStep ? (
                onFinish && (
                  <Button
                    variant="primary"
                    onClick={onFinish}
                    loading={finishLoading}
                    type="button"
                  >
                    {finishText}
                  </Button>
                )
              ) : (
                onNext && (
                  <Button
                    variant="primary"
                    onClick={onNext}
                    loading={nextLoading}
                    type="button"
                  >
                    {nextText}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    )

    if (!mounted || !open) return null

    return createPortal(wizardContent, document.body)
  }
)
Wizard.displayName = "Wizard"

export { Wizard }

