import * as React from "react"
import { cn } from "@lib/utils"

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  disabled?: boolean
  badge?: string | number
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: TabItem[]
  activeTab?: string
  defaultTab?: string
  variant?: "default" | "pills" | "underline"
  size?: "small" | "medium" | "large"
  onTabChange?: (tabId: string) => void
  className?: string
  hideContent?: boolean
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({
    tabs,
    activeTab: controlledActiveTab,
    defaultTab,
    variant = "default",
    size = "medium",
    onTabChange,
    className,
    hideContent = false,
    ...props
  }, ref) => {
    const [activeTab, setActiveTab] = React.useState<string>(
      controlledActiveTab || defaultTab || tabs[0]?.id || ""
    )

    const isControlled = controlledActiveTab !== undefined

    const currentActiveTab = isControlled ? controlledActiveTab : activeTab

    const handleTabClick = (tabId: string) => {
      const tab = tabs.find(t => t.id === tabId)
      if (tab?.disabled) return

      if (!isControlled) {
        setActiveTab(tabId)
      }
      onTabChange?.(tabId)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, tabId: string) => {
      const currentIndex = tabs.findIndex(tab => tab.id === tabId)
      let nextIndex = currentIndex

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault()
          nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1
          break
        case "ArrowRight":
          event.preventDefault()
          nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0
          break
        case "Home":
          event.preventDefault()
          nextIndex = 0
          break
        case "End":
          event.preventDefault()
          nextIndex = tabs.length - 1
          break
        default:
          return
      }

      const nextTab = tabs[nextIndex]
      if (nextTab && !nextTab.disabled) {
        handleTabClick(nextTab.id)
        // Focus the next tab button
        const nextButton = event.currentTarget.parentElement?.parentElement?.children[nextIndex]?.querySelector('button')
        nextButton?.focus()
      }
    }

    const activeTabContent = tabs.find(tab => tab.id === currentActiveTab)?.content

    return (
      <div
        ref={ref}
        className={cn("pendo-tabs", `pendo-tabs--${variant}`, `pendo-tabs--${size}`, className)}
        {...props}
      >
        <div className="pendo-tabs__header" role="tablist" aria-orientation="horizontal">
          {tabs.map((tab) => {
            const isActive = tab.id === currentActiveTab
            const isDisabled = tab.disabled

            return (
              <div key={tab.id} className="pendo-tabs__tab-wrapper">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  disabled={isDisabled}
                  className={cn(
                    "pendo-tabs__tab",
                    isActive && "pendo-tabs__tab--active",
                    isDisabled && "pendo-tabs__tab--disabled"
                  )}
                  onClick={() => handleTabClick(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, tab.id)}
                >
                  <span className="pendo-tabs__tab-label">{tab.label}</span>
                  {tab.badge && (
                    <span className="pendo-tabs__tab-badge" aria-hidden="true">
                      {tab.badge}
                    </span>
                  )}
                </button>
              </div>
            )
          })}
        </div>

        {!hideContent && (
          <div className="pendo-tabs__content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                id={`panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${tab.id}`}
                className={cn(
                  "pendo-tabs__panel",
                  tab.id === currentActiveTab ? "pendo-tabs__panel--active" : "pendo-tabs__panel--hidden"
                )}
                tabIndex={0}
              >
                {tab.id === currentActiveTab && tab.content}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)

Tabs.displayName = "Tabs"

export { Tabs }

