import * as React from "react"
import { cn } from "@lib/utils"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  variant?: "bar" | "circle"
  size?: "small" | "medium" | "large"
  color?: "primary" | "success" | "warning" | "error"
  showValue?: boolean
  showLabel?: boolean
  label?: string
  indeterminate?: boolean
  className?: string
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({
    value = 0,
    max = 100,
    variant = "bar",
    size = "medium",
    color = "primary",
    showValue = false,
    showLabel = false,
    label,
    indeterminate = false,
    className,
    ...props
  }, ref) => {
    const percentage = indeterminate ? 0 : Math.min(100, Math.max(0, (value / max) * 100))
    const displayValue = Math.round(percentage)

    const getCircleProps = () => {
      const sizeMap = {
        small: { radius: 16, strokeWidth: 3, size: 40 },
        medium: { radius: 20, strokeWidth: 4, size: 48 },
        large: { radius: 24, strokeWidth: 5, size: 56 }
      }
      
      const config = sizeMap[size]
      const circumference = 2 * Math.PI * config.radius
      const strokeDashoffset = indeterminate ? 0 : circumference - (percentage / 100) * circumference

      return {
        ...config,
        circumference,
        strokeDashoffset
      }
    }

    if (variant === "circle") {
      const { radius, strokeWidth, size: circleSize, circumference, strokeDashoffset } = getCircleProps()

      return (
        <div
          ref={ref}
          className={cn(
            "pendo-progress-circle",
            `pendo-progress-circle--${size}`,
            `pendo-progress-circle--${color}`,
            indeterminate && "pendo-progress-circle--indeterminate",
            className
          )}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
          {...props}
        >
          <svg
            width={circleSize}
            height={circleSize}
            className="pendo-progress-circle__svg"
          >
            {/* Background circle */}
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              className="pendo-progress-circle__background"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              className="pendo-progress-circle__progress"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
            />
          </svg>
          
          {(showValue || showLabel) && (
            <div className="pendo-progress-circle__content">
              {showValue && !indeterminate && (
                <span className="pendo-progress-circle__value">
                  {displayValue}%
                </span>
              )}
              {showLabel && label && (
                <span className="pendo-progress-circle__label">
                  {label}
                </span>
              )}
            </div>
          )}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "pendo-progress",
          `pendo-progress--${size}`,
          `pendo-progress--${color}`,
          indeterminate && "pendo-progress--indeterminate",
          className
        )}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        {...props}
      >
        {(showLabel && label) && (
          <div className="pendo-progress__header">
            <span className="pendo-progress__label">{label}</span>
            {showValue && !indeterminate && (
              <span className="pendo-progress__value">
                {displayValue}%
              </span>
            )}
          </div>
        )}
        
        <div className="pendo-progress__track">
          <div
            className="pendo-progress__bar"
            style={{
              width: indeterminate ? "100%" : `${percentage}%`
            }}
          />
        </div>
      </div>
    )
  }
)

Progress.displayName = "Progress"

// Linear Progress (alias for bar variant)
export interface LinearProgressProps extends Omit<ProgressProps, 'variant'> {}

const LinearProgress = React.forwardRef<HTMLDivElement, LinearProgressProps>(
  (props, ref) => {
    return <Progress ref={ref} variant="bar" {...props} />
  }
)

LinearProgress.displayName = "LinearProgress"

// Circular Progress (alias for circle variant)
export interface CircularProgressProps extends Omit<ProgressProps, 'variant'> {}

const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  (props, ref) => {
    return <Progress ref={ref} variant="circle" {...props} />
  }
)

CircularProgress.displayName = "CircularProgress"

export { Progress, LinearProgress, CircularProgress }

