import React from 'react';
import { PageHeader } from '@prism/page-header';
import { Button } from '@prism/button';
import { Icon } from '@prism/icon';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'page-header',
  name: 'Page Header',
  category: 'Layout',
  description: 'Page headers provide consistent navigation and context at the top of pages. They can include titles, back links, breadcrumbs, and action buttons.',
  usage: {
    whenToUse: [
      'At the top of every page for consistent navigation',
      'To display page titles and context',
      'For primary page actions and navigation',
      'When users need to understand their current location',
      'To provide consistent back navigation patterns'
    ],
    whenNotToUse: [
      'Within modal dialogs or overlays',
      'For section headers within a page',
      'When the page already has a clear navigation pattern',
      'In compact layouts where space is limited'
    ],
    accessibility: [
      'Use proper heading hierarchy (h1 for page titles)',
      'Include skip links for keyboard navigation',
      'Ensure back links have clear labels',
      'Maintain proper focus management for interactive elements'
    ]
  }
};

// Component stories with live examples  
const PageHeaderDemo = (): ComponentStory[] => {
  return [
    {
      id: 'basic',
      name: 'Basic Header',
      description: 'A simple header with just a title.',
      code: `<PageHeader
  title="Project Overview"
/>`,
      component: (
        <div className="border border-[var(--color-gray-30)] rounded-[3px] bg-white">
          <PageHeader
            title="Project Overview"
          />
        </div>
      )
    },
    {
      id: 'with-back-link',
      name: 'With Back Link',
      description: 'Header with a back link for navigation.',
      code: `<PageHeader
  title="Project Settings"
  backLink={{
    label: "Back to Projects",
    onClick: () => console.log('Back clicked')
  }}
/>`,
      component: (
        <div className="border border-[var(--color-gray-30)] rounded-[3px] bg-white">
          <PageHeader
            title="Project Settings"
            backLink={{
              label: "Back to Projects",
              onClick: () => console.log('Back clicked')
            }}
          />
        </div>
      )
    },
    {
      id: 'with-actions',
      name: 'With Actions',
      description: 'Header with action buttons.',
      code: `<PageHeader
  title="Team Members"
  actions={
    <>
      <Button variant="secondary" size="small">
        <Icon name="Download" size="small" />
        Export
      </Button>
      <Button variant="primary" size="small">
        <Icon name="Plus" size="small" />
        Add Member
      </Button>
    </>
  }
/>`,
      component: (
        <div className="border border-[var(--color-gray-30)] rounded-[3px] bg-white">
          <PageHeader
            title="Team Members"
            actions={
              <>
                <Button variant="secondary" size="small">
                  <Icon name="Download" size="small" />
                  Export
                </Button>
                <Button variant="primary" size="small">
                  <Icon name="Plus" size="small" />
                  Add Member
                </Button>
              </>
            }
          />
        </div>
      )
    },
    {
      id: 'with-breadcrumbs',
      name: 'With Breadcrumbs',
      description: 'Header with breadcrumb navigation.',
      code: `<PageHeader
  title="User Profile"
  backLink={{
    label: 'Back to Users',
    onClick: () => console.log('Back clicked')
  }}
/>`,
      component: (
        <div className="border border-[var(--color-gray-30)] rounded-[3px] bg-white">
          <PageHeader
            title="User Profile"
            backLink={{
              label: 'Back to Users',
              onClick: () => console.log('Back clicked')
            }}
          />
        </div>
      )
    },
    {
      id: 'with-description',
      name: 'With Description',
      description: 'Header with a descriptive subtitle.',
      code: `<PageHeader
  title="Analytics Dashboard"
  description="View and analyze your application performance metrics"
  actions={
    <Button variant="primary" size="small">
      <Icon name="RefreshCw" size="small" />
      Refresh Data
    </Button>
  }
/>`,
      component: (
        <div className="border border-[var(--color-gray-30)] rounded-[3px] bg-white">
          <PageHeader
            title="Analytics Dashboard"
            description="View and analyze your application performance metrics"
            actions={
              <Button variant="primary" size="small">
                <Icon name="RefreshCw" size="small" />
                Refresh Data
              </Button>
            }
          />
        </div>
      )
    },
    {
      id: 'complex',
      name: 'Complex Example',
      description: 'Header with all features: breadcrumbs, back link, description, and actions.',
      code: `<PageHeader
  title="Campaign Details"
  description="Manage and monitor your marketing campaign performance"
  backLink={{
    label: "Back to Campaigns",
    onClick: () => console.log('Back clicked')
  }}
  breadcrumbs={[
    { label: 'Marketing', href: '/marketing' },
    { label: 'Campaigns', href: '/campaigns' },
    { label: 'Black Friday Sale', current: true }
  ]}
  actions={
    <>
      <Button variant="secondary" size="small">
        <Icon name="Share" size="small" />
        Share
      </Button>
      <Button variant="secondary" size="small">
        <Icon name="Settings" size="small" />
        Settings
      </Button>
      <Button variant="primary" size="small">
        <Icon name="Play" size="small" />
        Launch Campaign
      </Button>
    </>
  }
/>`,
      component: (
        <div className="border border-[var(--color-gray-30)] rounded-[3px] bg-white">
          <PageHeader
            title="Campaign Details"
            description="Manage and monitor your marketing campaign performance"
            backLink={{
              label: "Back to Campaigns",
              onClick: () => console.log('Back clicked')
            }}

            actions={
              <>
                <Button variant="secondary" size="small">
                  <Icon name="Share" size="small" />
                  Share
                </Button>
                <Button variant="secondary" size="small">
                  <Icon name="Settings" size="small" />
                  Settings
                </Button>
                <Button variant="primary" size="small">
                  <Icon name="Play" size="small" />
                  Launch Campaign
                </Button>
              </>
            }
          />
        </div>
      )
    }
  ];
};

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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">title</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Main page title</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">description</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Optional description or subtitle</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">backLink</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">&#123;label: string, onClick: function&#125;</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Back navigation link with label and handler</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">breadcrumbs</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Array&lt;&#123;label: string, href?: string, current?: boolean&#125;&gt;</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Breadcrumb navigation items</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">actions</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Action buttons or other interactive elements</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Additional CSS classes</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function PageHeaderPage() {
  const pageHeaderDemo = PageHeaderDemo();
  
  return (
    <ComponentShowcase 
      component={componentInfo}
      stories={pageHeaderDemo}
      propsTable={<PropsTable />}
    />
  );
}