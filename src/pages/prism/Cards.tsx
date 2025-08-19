import React from 'react';
import { Card } from '@prism/card';
import { Button } from '@prism/button';
import { Icon } from '@prism/icon';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'cards',
  name: 'Cards',
  category: 'Data Display',
  description: 'Cards are flexible containers that group related information and actions. They provide a consistent structure for displaying content and serve as entry points to more detailed information.',
  usage: {
    whenToUse: [
      'To group related information and actions',
      'For displaying content that users can scan quickly',
      'In grid layouts and dashboards',
      'To preview content before navigation'
    ],
    whenNotToUse: [
      'For simple text that doesn\'t need visual separation',
      'When content naturally flows together',
      'In dense data tables'
    ],
    anatomy: [
      { element: 'Card container', description: 'The main card wrapper with borders and shadows' },
      { element: 'Header (optional)', description: 'Title area with optional actions' },
      { element: 'Body', description: 'Main content area with configurable padding' },
      { element: 'Footer (optional)', description: 'Action area or additional information' }
    ],
    accessibility: [
      'Use semantic HTML structure within cards',
      'Ensure proper heading hierarchy',
      'Make interactive cards keyboard accessible',
      'Provide clear focus indicators',
      'Use appropriate ARIA labels for complex cards'
    ],
    dosDonts: {
      dos: ['Keep content scannable and concise', 'Use consistent card structures', 'Group related actions together'],
      donts: ['Overcrowd cards with too much information', 'Use inconsistent spacing or layout', 'Make cards too small for touch targets']
    }
  }
};

// Component stories with live examples
const componentStories: ComponentStory[] = [
  {
    id: 'basic',
    name: 'Basic Card',
    description: 'Simple card with title and content',
    code: `<Card title="Card Title">
  <p>This is the card content. Cards can contain any content, 
  including text, images, and other components.</p>
</Card>`,
    component: (
      <div style={{ maxWidth: '400px' }}>
        <Card title="Card Title">
          <p style={{ margin: 0 }}>This is the card content. Cards can contain any content, including text, images, and other components.</p>
        </Card>
      </div>
    )
  },
  {
    id: 'no-title',
    name: 'Card Without Title',
    description: 'Card with only content, no header',
    code: `<Card>
  <h3>Custom Header</h3>
  <p>Cards don't always need a title prop. You can include 
  custom headers and content as children.</p>
</Card>`,
    component: (
      <div style={{ maxWidth: '400px' }}>
        <Card title="Example Card">
          <h3 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-lg)' }}>Custom Header</h3>
          <p style={{ margin: 0 }}>Cards don't always need a title prop. You can include custom headers and content as children.</p>
        </Card>
      </div>
    )
  },
  {
    id: 'with-actions',
    name: 'Card with Header Actions',
    description: 'Card with action buttons in the header',
    code: `<Card 
  title="Settings"
  headerActions={
    <>
      <Button size="small" variant="secondary">
        <Icon name="X" size="small" />
        Cancel
      </Button>
      <Button size="small">
        <Icon name="Check" size="small" />
        Save
      </Button>
    </>
  }
>
  <p>Content with header actions for common operations.</p>
</Card>`,
    component: (
      <div style={{ maxWidth: '400px' }}>
        <Card 
          title="Settings"
          headerActions={
            <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
              <Button size="small" variant="secondary">
                <Icon name="X" size="small" />
                Cancel
              </Button>
              <Button size="small">
                <Icon name="Check" size="small" />
                Save
              </Button>
            </div>
          }
        >
          <p style={{ margin: 0 }}>Content with header actions for common operations.</p>
        </Card>
      </div>
    )
  },
  {
    id: 'with-footer',
    name: 'Card with Footer',
    description: 'Card with footer section for additional actions',
    code: `<Card 
  title="Document"
  footer={
    <div className="flex gap-2">
      <Button size="small" variant="secondary">
        <Icon name="Download" size="small" />
        Download
      </Button>
      <Button size="small">
        <Icon name="Share2" size="small" />
        Share
      </Button>
    </div>
  }
>
  <p>Card content with a footer containing actions.</p>
</Card>`,
    component: (
      <div style={{ maxWidth: '400px' }}>
        <Card 
          title="Document"
          footer={
            <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
              <Button size="small" variant="secondary">
                <Icon name="Download" size="small" />
                Download
              </Button>
              <Button size="small">
                <Icon name="Share2" size="small" />
                Share
              </Button>
            </div>
          }
        >
          <p style={{ margin: 0 }}>Card content with a footer containing actions.</p>
        </Card>
      </div>
    )
  },
  {
    id: 'no-padding',
    name: 'Card with No Padding',
    description: 'Remove padding for custom content layouts like images',
    code: `<Card 
  title="Image Preview"
  noPadding
>
  <div className="bg-gray-100 aspect-video flex items-center justify-center">
    <Icon name="Image" size="large" className="text-gray-500" />
  </div>
</Card>`,
    component: (
      <div style={{ maxWidth: '400px' }}>
        <Card 
          title="Image Preview"
          noPadding
        >
          <div style={{ 
            backgroundColor: 'var(--color-gray-20)', 
            aspectRatio: '16/9', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <Icon name="Image" size="large" color="var(--color-gray-70)" />
          </div>
        </Card>
      </div>
    )
  },
  {
    id: 'complex-content',
    name: 'Complex Content Card',
    description: 'Card with mixed content types and layout',
    code: `<Card 
  title="User Profile"
  headerActions={
    <Button size="small" variant="secondary">
      <Icon name="Edit" size="small" />
      Edit
    </Button>
  }
  footer={
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-600">Last updated: 2 days ago</span>
      <Button size="small">View Details</Button>
    </div>
  }
>
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
      <Icon name="User" size="medium" className="text-teal-700" />
    </div>
    <div>
      <h4 className="margin-0">John Doe</h4>
      <p className="text-sm text-gray-600 margin-0">Product Manager</p>
      <p className="text-sm margin-top-xs">
        Experienced product manager with a focus on user experience and data-driven decisions.
      </p>
    </div>
  </div>
</Card>`,
    component: (
      <div style={{ maxWidth: '500px' }}>
        <Card 
          title="User Profile"
          headerActions={
            <Button size="small" variant="secondary">
              <Icon name="Edit" size="small" />
              Edit
            </Button>
          }
          footer={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Last updated: 2 days ago</span>
              <Button size="small">View Details</Button>
            </div>
          }
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: 'var(--color-teal-10)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Icon name="User" size="medium" color="var(--color-teal-70)" />
            </div>
            <div>
              <h4 style={{ margin: '0 0 var(--spacing-xs) 0', fontSize: 'var(--font-size-base)' }}>John Doe</h4>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)', margin: '0 0 var(--spacing-xs) 0' }}>Product Manager</p>
              <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>
                Experienced product manager with a focus on user experience and data-driven decisions.
              </p>
            </div>
          </div>
        </Card>
      </div>
    )
  },
  {
    id: 'card-grid',
    name: 'Card Grid Layout',
    description: 'Multiple cards in a grid layout',
    code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card title="Analytics">
    <p>View your performance metrics and insights.</p>
  </Card>
  <Card title="Settings">
    <p>Configure your account preferences.</p>
  </Card>
  <Card title="Support">
    <p>Get help and documentation.</p>
  </Card>
</div>`,
    component: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: 'var(--spacing-md)',
        maxWidth: '700px'
      }}>
        <Card title="Analytics">
          <p style={{ margin: 0, fontSize: 'var(--font-size-sm)' }}>View your performance metrics and insights.</p>
        </Card>
        <Card title="Settings">
          <p style={{ margin: 0, fontSize: 'var(--font-size-sm)' }}>Configure your account preferences.</p>
        </Card>
        <Card title="Support">
          <p style={{ margin: 0, fontSize: 'var(--font-size-sm)' }}>Get help and documentation.</p>
        </Card>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">title</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Title text displayed in the header</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">headerActions</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Optional action buttons to display in the header</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">footer</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Optional footer content</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">noPadding</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether to remove padding from the card body</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Additional CSS classes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Card content</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Cards() {
  return (
    <div className="prism-preview">
      <ComponentShowcase 
        component={componentInfo}
        stories={componentStories}
        propsTable={<PropsTable />}
      />
    </div>
  );
}