import { Link } from 'react-router-dom'
import { Button } from '../../components/prism/ui/button'
import { PageTemplate } from '@prism/page-template'
import { Card } from '../../components/prism/ui/card'
import { useState } from 'react'
import { Icon } from '@prism/icon'

export default function Home() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <PageTemplate
      isNavOpen={isOpen}
      onNavToggle={() => setIsOpen(!isOpen)}
      selectedNavItem="home"
      title="Pendo starter template"
      description="A quick guide to get you started with building Pendo applications"
      attribution={{
        author: "Pendo Team"
      }}
      lastUpdated="2024"
      actions={
        <Button variant="secondary" asChild>
          <Link to="/prism">View Design System</Link>
        </Button>
      }
    >
      <div className="max-w-3xl">
        <Card title="Getting Started">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[var(--color-teal-70)]">
                <Icon name="Palette" size="medium" />
                <h3 className="text-[var(--font-heading-3)] m-0">Design System</h3>
              </div>
              <p className="paragraph-base text-[var(--color-gray-70)]">
                Visit <Link to="/prism" className="text-[var(--color-teal-70)] hover:underline">the design system</Link> (also available at <Link to="/prism" className="text-[var(--color-teal-70)] hover:underline">"/prism"</Link>) to explore available:
              </p>
              <ul className="list-disc list-inside space-y-1 paragraph-base text-[var(--color-gray-70)]">
                <li>Design tokens for colors, typography, and data visualization</li>
                <li>Core UI components like buttons, inputs, and cards</li>
                <li>Composite components like page templates and navigation</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[var(--color-teal-70)]">
                <Icon name="Code2" size="medium" />
                <h3 className="text-[var(--font-heading-3)] m-0">Development</h3>
              </div>
  
              <ul className="list-disc list-inside space-y-1 paragraph-base text-[var(--color-gray-70)]">
                <li>Replace this page with your own content using components from the library OR</li>
                <li>Use the Page Template component as a starting point</li>
                <li>Add components by saying "Add a prism button..."</li>
                <li>Reference styles by their token name (e.g., "Make the border gray-40")</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[var(--color-teal-70)]">
                <Icon name="Lightbulb" size="medium" />
                <h3 className="text-[var(--font-heading-3)] m-0">Tips</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 paragraph-base text-[var(--color-gray-70)]">
                <li>Use Prism components when available for consistent styling</li>
                <li>Follow the token system for colors, spacing, and typography</li>
                <li>Create new pages in the pages directory</li>
                <li>Custom components go in components/ui (not components/prism)</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </PageTemplate>
  )
}