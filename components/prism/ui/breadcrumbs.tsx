import * as React from "react"
import { cn } from "@lib/utils"
import { Icon } from "./icon"

export interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  separator?: "chevron" | "slash"
  maxItems?: number
  className?: string
}

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ 
    items, 
    separator = "chevron", 
    maxItems, 
    className, 
    ...props 
  }, ref) => {
    const processedItems = React.useMemo(() => {
      if (!maxItems || items.length <= maxItems) {
        return items
      }

      // Show first item, ellipsis, and last few items
      const keepLast = maxItems - 2 // Account for first item and ellipsis
      return [
        items[0],
        { label: "...", ellipsis: true },
        ...items.slice(-keepLast)
      ]
    }, [items, maxItems])

    return (
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cn("pendo-breadcrumbs", className)}
        {...props}
      >
        <ol className="pendo-breadcrumbs__list">
          {processedItems.map((item, index) => {
            const isLast = index === processedItems.length - 1
            const isCurrent = item.current || isLast
            const isEllipsis = 'ellipsis' in item

            return (
              <li key={`${item.label}-${index}`} className="pendo-breadcrumbs__item">
                {isEllipsis ? (
                  <span className="pendo-breadcrumbs__ellipsis" aria-hidden="true">
                    {item.label}
                  </span>
                ) : (
                  <>
                    {item.href && !isCurrent ? (
                      <a
                        href={item.href}
                        className="pendo-breadcrumbs__link"
                        aria-current={isCurrent ? "page" : undefined}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span
                        className="pendo-breadcrumbs__current"
                        aria-current={isCurrent ? "page" : undefined}
                      >
                        {item.label}
                      </span>
                    )}
                  </>
                )}

                {!isLast && (
                  <span className="pendo-breadcrumbs__separator" aria-hidden="true">
                    {separator === "chevron" ? (
                      <Icon name="ChevronRight" size="small" />
                    ) : (
                      "/"
                    )}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
)

Breadcrumbs.displayName = "Breadcrumbs"

export { Breadcrumbs }

