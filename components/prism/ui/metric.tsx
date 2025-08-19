import * as React from "react"
import { cn } from "@lib/utils"
import { Tag } from "@prism/tag"

export type MetricSize = 'xs' | 'small' | 'medium' | 'large'
export type MetricAlignment = 'left' | 'center'
export type MetricState = 'loaded' | 'loading'
export type ChangeMetricType = 'positive' | 'negative' | 'neutral'

export interface MetricProps extends React.HTMLAttributes<HTMLDivElement> {
  // Core props
  size?: MetricSize
  alignment?: MetricAlignment
  state?: MetricState
  
  // Text content
  metricText: string
  seriesName?: string
  unitLabel?: string
  secondaryLabel?: string
  changeMetric?: string
  changeMetricType?: ChangeMetricType
  
  // Show/hide flags
  showSeriesName?: boolean
  showUnitLabel?: boolean
  showSecondaryLabel?: boolean
  showChangeMetric?: boolean
}

const sizeMap = {
  'xs': 'metric-xs',
  'small': 'metric-small',
  'medium': 'metric-medium',
  'large': 'metric-large',
} as const

const seriesNameMap = {
  'xs': 'paragraph-small-bold',
  'small': 'paragraph-base-bold',
  'medium': 'paragraph-base-bold',
  'large': 'paragraph-base-bold',
} as const

const labelMap = {
  'xs': 'paragraph-small',
  'small': 'paragraph-base',
  'medium': 'paragraph-base',
  'large': 'paragraph-base',
} as const

const Metric = React.forwardRef<HTMLDivElement, MetricProps>(
  ({ 
    className,
    size = 'medium',
    alignment = 'left',
    state = 'loaded',
    metricText,
    seriesName,
    unitLabel,
    secondaryLabel,
    changeMetric,
    changeMetricType = 'positive',
    showSeriesName = true,
    showUnitLabel = true,
    showSecondaryLabel = true,
    showChangeMetric = true,
    ...props
  }, ref) => {
    const getChangeMetricTag = () => {
      if (!changeMetric) return null

      const tagSize = size === 'xs' ? 'mini' : 'small'
      const prefix = changeMetricType === 'positive' ? '+' : ''
      
      let type: 'success' | 'error' | 'default'
      switch (changeMetricType) {
        case 'positive':
          type = 'success'
          break
        case 'negative':
          type = 'error'
          break
        default:
          type = 'default'
      }

      return (
        <Tag size={tagSize} type={type} shape="rectangular-subtle">
          {prefix}{changeMetric}
        </Tag>
      )
    }

    if (state === 'loading') {
      return (
        <div 
          ref={ref}
          className={cn(
            "flex flex-col",
            alignment === 'center' && "items-center text-center",
            "animate-pulse",
            className
          )}
          {...props}
        >
          {showSeriesName && (
            <div className="h-4 bg-[var(--color-gray-20)] rounded w-24 mb-1" />
          )}
          <div className="flex items-center gap-2">
            <div className={cn(
              "h-8 bg-[var(--color-gray-20)] rounded",
              size === 'large' ? "w-36" : "w-24"
            )} />
            {showChangeMetric && (
              <div className="h-6 bg-[var(--color-gray-20)] rounded w-16" />
            )}
          </div>
          {showUnitLabel && (
            <div className="h-4 bg-[var(--color-gray-20)] rounded w-16 mt-1" />
          )}
          {showSecondaryLabel && (
            <div className="h-4 bg-[var(--color-gray-20)] rounded w-20 mt-1" />
          )}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col",
          alignment === 'center' && "items-center text-center",
          className
        )}
        {...props}
      >
        {showSeriesName && seriesName && (
          <span className={cn(
            seriesNameMap[size],
            "text-[var(--color-gray-100)]"
          )}>
            {seriesName}
          </span>
        )}
        <div className="flex items-center gap-2">
          <span className={cn(
            sizeMap[size],
            "text-[var(--color-gray-100)]"
          )}>
            {metricText}
          </span>
          {showChangeMetric && changeMetric && getChangeMetricTag()}
        </div>
        {showUnitLabel && unitLabel && (
          <span className={cn(
            labelMap[size],
            "text-[var(--color-gray-110)]"
          )}>
            {unitLabel}
          </span>
        )}
        {showSecondaryLabel && secondaryLabel && (
          <span className={cn(
            labelMap[size],
            "text-[var(--color-gray-70)]"
          )}>
            {secondaryLabel}
          </span>
        )}
      </div>
    )
  }
)
Metric.displayName = "Metric"

export { Metric }