import * as React from "react"
import { Button } from "@prism/button"
import { Icon } from "@prism/icon"

export interface PageHeaderProps {
  /** Title text displayed in the header */
  title: string
  /** Optional extra content to display next to the title */
  titleExtra?: React.ReactNode
  /** Configuration for the back link */
  backLink?: {
    label: string
    onClick: () => void
  }
  /** Optional actions to display in the header */
  actions?: React.ReactNode
  /** Attribution information */
  attribution?: {
    author: string
  }
  /** Last updated timestamp */
  lastUpdated?: string
  /** Description text */
  description?: string
  /** Whether to show the top section with back link */
  showTopSection?: boolean
  /** Whether to show the actions section */
  showActions?: boolean
  /** Whether to show attribution information */
  showAttribution?: boolean
  /** Whether to show the description */
  showDescription?: boolean
}

const PageHeader = React.forwardRef<HTMLElement, PageHeaderProps>(
  ({ 
    title,
    titleExtra,
    backLink,
    actions,
    attribution,
    lastUpdated,
    description,
    showTopSection = true,
    showActions = true,
    showAttribution = true,
    showDescription = true,
  }, ref) => {
    const hasTopSection = backLink && showTopSection

    return (
      <header
        ref={ref}
        className="flex flex-col gap-4 py-6"
      >
        {hasTopSection && (
          <div className="flex items-center gap-6">
            <Button 
              variant="tertiary-link"
              size="small"
              onClick={backLink.onClick}
            >
              <Icon name="ChevronLeft" size="small" className="mr-1" />
              {backLink.label}
            </Button>
          </div>
        )}

        <div className="flex justify-between items-start gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h1 className="text-[var(--font-heading-2)] text-[var(--color-gray-100)] m-0">
                {title}
              </h1>
              {titleExtra}
            </div>
            
            {showAttribution && (attribution || lastUpdated) && (
              <div className="flex items-center gap-2 paragraph-base text-[var(--color-gray-70)]">
                {attribution && (
                  <>
                    <span>Created by {attribution.author}</span>
                    {lastUpdated && <span className="text-[var(--color-gray-70)]">|</span>}
                  </>
                )}
                {lastUpdated && (
                  <span>Last updated {lastUpdated}</span>
                )}
              </div>
            )}
            
            {showDescription && description && (
              <p className="paragraph-base text-[var(--color-gray-70)] m-0">
                {description}
              </p>
            )}
          </div>

          {showActions && actions && (
            <div className="flex gap-2 items-center">
              {actions}
            </div>
          )}
        </div>
      </header>
    )
  }
)
PageHeader.displayName = "PageHeader"

export { PageHeader }