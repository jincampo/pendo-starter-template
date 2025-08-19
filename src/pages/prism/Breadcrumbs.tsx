import React from 'react';
import { Breadcrumbs } from '@prism/breadcrumbs';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'breadcrumbs',
  name: 'Breadcrumbs',
  category: 'Navigation',
  description: 'Breadcrumbs display the current location of a user within a navigational hierarchy. They help users understand the structure of the site and navigate back to previous levels.',
  usage: {
    whenToUse: [
      'Have a hierarchy of more than two levels',
      'Require users to understand their position within a complex navigation structure',
      'In sub-navigation or drill-down flows, helping users keep track of their location'
    ],
    whenNotToUse: [
      'The design involves a step-by-step process; use a stepper UI instead',
      'A second-level navigation, like a table of contents, is already present and visible'
    ],
    anatomy: [
      { element: 'Container', description: '<nav> element with aria-label="breadcrumb"' },
      { element: 'Breadcrumb items', description: 'Clickable text links, except final item' },
      { element: 'Separator icon', description: 'Visual divider (e.g., chevron or slash)' },
      { element: 'Current page', description: 'Non-clickable, with aria-current="page"' }
    ],
    accessibility: [
      'Use <nav aria-label="breadcrumb"> to identify the region',
      'Mark the last item with aria-current="page"',
      'Ensure adequate contrast between text and background (AA minimum)',
      'Icons should not rely solely on color to indicate state'
    ],
    dosDonts: {
      dos: ['Truncate long labels if necessary', 'Show the current page clearly', 'Use consistent separators (e.g. chevrons)'],
      donts: ['Use breadcrumbs as primary navigation', 'Link the final breadcrumb item', 'Mix icon types or sizes']
    }
  }
};

// Component stories with live examples
const componentStories: ComponentStory[] = [
  {
    id: 'basic',
    name: 'Basic Breadcrumbs',
    description: 'Simple breadcrumb navigation with chevron separator',
    code: `<Breadcrumbs 
  items={[
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Electronics', href: '#' },
    { label: 'Smartphones', current: true }
  ]}
/>`,
    component: (
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '#' },
          { label: 'Products', href: '#' },
          { label: 'Electronics', href: '#' },
          { label: 'Smartphones', current: true }
        ]}
      />
    )
  },
  {
    id: 'separators',
    name: 'Different Separators',
    description: 'Breadcrumbs with chevron and slash separators',
    code: `{/* Chevron separator (default) */}
<Breadcrumbs 
  items={[
    { label: 'Dashboard', href: '#' },
    { label: 'Analytics', href: '#' },
    { label: 'Reports', current: true }
  ]}
/>

{/* Slash separator */}
<Breadcrumbs 
  items={[
    { label: 'Dashboard', href: '#' },
    { label: 'Analytics', href: '#' },
    { label: 'Reports', current: true }
  ]}
  separator="slash"
/>`,
    component: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Chevron separator (default)</h4>
          <Breadcrumbs 
            items={[
              { label: 'Dashboard', href: '#' },
              { label: 'Analytics', href: '#' },
              { label: 'Reports', current: true }
            ]}
          />
        </div>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Slash separator</h4>
          <Breadcrumbs 
            items={[
              { label: 'Dashboard', href: '#' },
              { label: 'Analytics', href: '#' },
              { label: 'Reports', current: true }
            ]}
            separator="slash"
          />
        </div>
      </div>
    )
  },
  {
    id: 'truncation',
    name: 'Long Path with Truncation',
    description: 'Breadcrumbs that truncate long paths with ellipsis',
    code: `const longItems = [
  { label: 'Dashboard', href: '#' },
  { label: 'Analytics', href: '#' },
  { label: 'User Engagement', href: '#' },
  { label: 'Campaign Performance', href: '#' },
  { label: 'Detailed Reports', href: '#' },
  { label: 'Q4 2024 Analysis', current: true }
];

{/* Full path */}
<Breadcrumbs items={longItems} />

{/* Truncated to 4 items max */}
<Breadcrumbs items={longItems} maxItems={4} />

{/* Truncated to 3 items max */}
<Breadcrumbs items={longItems} maxItems={3} />`,
    component: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Full path (no truncation)</h4>
          <Breadcrumbs 
            items={[
              { label: 'Dashboard', href: '#' },
              { label: 'Analytics', href: '#' },
              { label: 'User Engagement', href: '#' },
              { label: 'Campaign Performance', href: '#' },
              { label: 'Detailed Reports', href: '#' },
              { label: 'Q4 2024 Analysis', current: true }
            ]}
          />
        </div>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Truncated to 4 items max</h4>
          <Breadcrumbs 
            items={[
              { label: 'Dashboard', href: '#' },
              { label: 'Analytics', href: '#' },
              { label: 'User Engagement', href: '#' },
              { label: 'Campaign Performance', href: '#' },
              { label: 'Detailed Reports', href: '#' },
              { label: 'Q4 2024 Analysis', current: true }
            ]}
            maxItems={4}
          />
        </div>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Truncated to 3 items max</h4>
          <Breadcrumbs 
            items={[
              { label: 'Dashboard', href: '#' },
              { label: 'Analytics', href: '#' },
              { label: 'User Engagement', href: '#' },
              { label: 'Campaign Performance', href: '#' },
              { label: 'Detailed Reports', href: '#' },
              { label: 'Q4 2024 Analysis', current: true }
            ]}
            maxItems={3}
          />
        </div>
      </div>
    )
  },
  {
    id: 'use-cases',
    name: 'Common Use Cases',
    description: 'Real-world examples of breadcrumb usage in different contexts',
    code: `{/* E-commerce Navigation */}
<Breadcrumbs
  items={[
    { label: 'Home', href: '#' },
    { label: 'Category', href: '#' },
    { label: 'Electronics', href: '#' },
    { label: 'Laptops', href: '#' },
    { label: 'MacBook Pro 16"', current: true }
  ]}
/>

{/* Admin Dashboard */}
<Breadcrumbs
  items={[
    { label: 'Dashboard', href: '#' },
    { label: 'User Management', href: '#' },
    { label: 'Edit User', current: true }
  ]}
  separator="slash"
/>

{/* Documentation Navigation */}
<Breadcrumbs
  items={[
    { label: 'Docs', href: '#' },
    { label: 'Components', href: '#' },
    { label: 'Navigation', href: '#' },
    { label: 'Breadcrumbs', current: true }
  ]}
/>`,
    component: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>E-commerce Navigation</h4>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '#' },
              { label: 'Category', href: '#' },
              { label: 'Electronics', href: '#' },
              { label: 'Laptops', href: '#' },
              { label: 'MacBook Pro 16"', current: true }
            ]}
          />
        </div>
        
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Admin Dashboard</h4>
          <Breadcrumbs
            items={[
              { label: 'Dashboard', href: '#' },
              { label: 'User Management', href: '#' },
              { label: 'Edit User', current: true }
            ]}
            separator="slash"
          />
        </div>
        
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Documentation Navigation</h4>
          <Breadcrumbs
            items={[
              { label: 'Docs', href: '#' },
              { label: 'Components', href: '#' },
              { label: 'Navigation', href: '#' },
              { label: 'Breadcrumbs', current: true }
            ]}
          />
        </div>
      </div>
    )
  }
];

// Props table component
const PropsTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-50">
          <th className="border border-gray-300 px-4 py-2 text-left">Property</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">items</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">BreadcrumbItem[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm"><strong>Required.</strong> Array of breadcrumb items</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">separator</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"chevron" | "slash"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"chevron"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Type of separator between items</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">maxItems</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">undefined</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Maximum items before truncation</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">undefined</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Additional CSS classes</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function BreadcrumbsPage() {
  return (
    <ComponentShowcase 
      component={componentInfo}
      stories={componentStories}
      propsTable={<PropsTable />}
    />
  );
}