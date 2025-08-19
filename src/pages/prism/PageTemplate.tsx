import '@/index.css'
import { useState, useCallback } from 'react'
import { PageTemplate } from '@prism/page-template'
import { Button } from '@prism/button'
import { Icon } from '@prism/icon'
import { Card } from '@prism/card'

export default function PageTemplates() {
  const [isNavOpen, setIsNavOpen] = useState(true)
  const handleNavToggle = useCallback(() => setIsNavOpen(prev => !prev), [])

  return (
    <div className="prism-preview">
      <h1>Page Template</h1>
      <p className="description mb-8">
        The page template component provides a consistent layout structure with navigation, header, and content areas. It handles the overall page layout including the Pendo navigation, header section, and main content area.
      </p>

      <section className="space-y-8">
        <div className="space-y-4">
          <h2>Preview</h2>
          <div className="border border-[var(--color-gray-40)] rounded-[3px] h-[800px] relative overflow-hidden">
            <PageTemplate
              isNavOpen={isNavOpen}
              onNavToggle={handleNavToggle}
              selectedNavItem="home"
              fixed={false}
              title="Example Page"
              description="This is an example page using the page template component"
              attribution={{
                author: "Design Team"
              }}
              lastUpdated="March 2024"
              actions={
                <Button variant="secondary">
                  <Icon name="Download" size="small" className="mr-1" />
                  Export
                </Button>
              }
            >
              <p className="m-0">Main content area with standard padding and layout.</p>
            </PageTemplate>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Properties</h2>
          <Card title="Props">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Prop</th>
                  <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Type</th>
                  <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Description</th>
                  <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">isNavOpen</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Whether the navigation sidebar is expanded</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">true</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">onNavToggle</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">() =&gt; void</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Callback when navigation is toggled</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">selectedNavItem</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Currently selected navigation item</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">'home'</td> 
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">fixed</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Whether the navigation should be fixed to the left side</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">true</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">showHeader</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Whether to show the page header</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">true</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">title</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Page title displayed in header</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">description</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Page description text</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">attribution</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono"><code>{`{ author: string }`}</code></td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Attribution information</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">lastUpdated</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Last updated timestamp</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">actions</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">ReactNode</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Action buttons displayed in header</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </section>
    </div>
  )
}