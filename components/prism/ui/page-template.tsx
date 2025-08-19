import * as React from "react"
import { cn } from "@lib/utils"
import { PendoNavigation } from "@prism/pendo-navigation"
import { PageHeader, PageHeaderProps } from "@prism/page-header"
import type { NavigationItemType } from "./navigation"

type PageTemplateProps = Omit<PageHeaderProps, 'ref'> & {
  /** Navigation state */
  isNavOpen?: boolean;
  onNavToggle?: () => void;
  selectedNavItem?: NavigationItemType;
  /** Whether the navigation should be fixed to the left side */
  fixed?: boolean;
  /** Whether to show the page header */
  showHeader?: boolean;
  /** Page content */
  children: React.ReactNode;
}

const PageTemplate = React.forwardRef<HTMLDivElement, PageTemplateProps>(
  ({ 
    isNavOpen = true,
    onNavToggle,
    selectedNavItem = 'home',
    fixed = true,
    showHeader = true,
    children,
    ...props
  }, ref) => {
    return (
      <div ref={ref} {...props}>
        <PendoNavigation
          isOpen={isNavOpen}
          selectedItem={selectedNavItem}
          onCollapseClick={onNavToggle}
          fixed={fixed}
        />
        <div className={cn(
          "transition-[margin] min-h-screen bg-[var(--color-gray-10)]",
          fixed && (isNavOpen ? "ml-[244px]" : "ml-16")
        )}>
          {showHeader && (
            <div className="border-b border-[var(--color-gray-40)] px-8 bg-[var(--color-gray-0)]">
              <PageHeader
                {...props}
              />
            </div>
          )}
          <div className="px-8 py-8 bg-[var(--color-gray-10)]">
            {children}
          </div>
        </div>
      </div>
    );
  }
);
PageTemplate.displayName = "PageTemplate";

export { PageTemplate };