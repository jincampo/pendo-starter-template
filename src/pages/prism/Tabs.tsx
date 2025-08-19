import React, { useState } from 'react';
import { Tabs } from '@prism/tabs';
import { Alert } from '@prism/alert';
import { Button } from '@prism/button';
import { Input } from '@prism/input';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'tabs',
  name: 'Tabs',
  category: 'Navigation',
  description: 'Tabs organize content into multiple sections that users can navigate between. They help structure information hierarchically and provide easy access to different views of related content.',
  usage: {
    whenToUse: [
      'To organize related content into manageable sections',
      'When switching between different views of the same data',
      'To group similar functionality or settings',
      'To save vertical space by stacking content',
      'When content sections are mutually exclusive'
    ],
    whenNotToUse: [
      'For sequential workflows (use stepper/wizard instead)',
      'When users need to compare content side-by-side',
      'For primary site navigation (use navigation menus)',
      'With too many tabs (>7 tabs)',
      'When content relationships aren\'t clear to users'
    ],
    anatomy: [
      { element: 'Tab list', description: 'Container holding all tab triggers' },
      { element: 'Tab trigger', description: 'Clickable label that activates a tab panel' },
      { element: 'Active indicator', description: 'Visual marker showing the current tab' },
      { element: 'Tab panel', description: 'Content area associated with each tab' },
      { element: 'Badge (optional)', description: 'Count or status indicator on tab labels' }
    ],
    accessibility: [
      'Use role="tablist" and role="tab" for proper semantics',
      'Implement arrow key navigation between tabs',
      'Use aria-selected to indicate active tab',
      'Connect panels with aria-controls and aria-labelledby',
      'Support Home/End keys for first/last tab navigation'
    ],
    dosDonts: {
      dos: ['Keep tab labels concise and descriptive', 'Use consistent tab ordering', 'Provide visual feedback for active state'],
      donts: ['Create too many tabs in one group', 'Use tabs for sequential processes', 'Hide important actions inside inactive tabs']
    }
  }
};

// Component stories with live examples
const TabsDemo = (): ComponentStory[] => {
  const [activeTab, setActiveTab] = useState('overview');

  const componentStories: ComponentStory[] = [
    {
      id: 'basic-tabs',
      name: 'Basic Tabs',
      description: 'Standard tabs with different content sections',
      code: `const [activeTab, setActiveTab] = useState('overview');

const basicTabs = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <div>
        <h3>Campaign Overview</h3>
        <p>Main overview information about your campaign performance.</p>
      </div>
    )
  },
  {
    id: 'analytics',
    label: 'Analytics',
    badge: '5',
    content: (
      <div>
        <h3>Analytics Dashboard</h3>
        <p>Detailed analytics and performance metrics.</p>
      </div>
    )
  },
  {
    id: 'settings',
    label: 'Settings',
    content: (
      <div>
        <h3>Campaign Settings</h3>
        <p>Configure your campaign settings and preferences.</p>
      </div>
    )
  }
];

<Tabs
  tabs={basicTabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>`,
      component: (
        <div style={{ width: '100%' }}>
          <Tabs
            tabs={[
              {
                id: 'overview',
                label: 'Overview',
                content: (
                  <div style={{ padding: 'var(--spacing-md)' }}>
                    <h3 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-3xl, 30px)' }}>Campaign Overview</h3>
                    <p style={{ margin: '0 0 var(--spacing-md) 0' }}>This tab contains the main overview information about your campaign performance, including key metrics and insights.</p>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                      gap: 'var(--spacing-md)'
                    }}>
                      <div style={{ 
                        padding: 'var(--spacing-md)', 
                        backgroundColor: 'var(--color-gray-10)', 
                        borderRadius: '4px' 
                      }}>
                        <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', margin: '0 0 var(--spacing-xs) 0' }}>Total Views</h4>
                        <p style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-teal-primary)', margin: 0 }}>12,345</p>
                      </div>
                      <div style={{ 
                        padding: 'var(--spacing-md)', 
                        backgroundColor: 'var(--color-gray-10)', 
                        borderRadius: '4px' 
                      }}>
                        <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', margin: '0 0 var(--spacing-xs) 0' }}>Conversions</h4>
                        <p style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-green-70)', margin: 0 }}>1,234</p>
                      </div>
                      <div style={{ 
                        padding: 'var(--spacing-md)', 
                        backgroundColor: 'var(--color-gray-10)', 
                        borderRadius: '4px' 
                      }}>
                        <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', margin: '0 0 var(--spacing-xs) 0' }}>Rate</h4>
                        <p style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)', margin: 0 }}>10.0%</p>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: 'analytics',
                label: 'Analytics',
                badge: '5',
                content: (
                  <div style={{ padding: 'var(--spacing-md)' }}>
                    <h3 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-3xl, 30px)' }}>Analytics Dashboard</h3>
                    <p style={{ margin: '0 0 var(--spacing-md) 0' }}>Detailed analytics and performance metrics for your campaigns.</p>
                    <Alert variant="info" title="New Reports Available">
                      5 new analytics reports are ready for review.
                    </Alert>
                  </div>
                )
              },
              {
                id: 'settings',
                label: 'Settings',
                content: (
                  <div style={{ padding: 'var(--spacing-md)' }}>
                    <h3 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-3xl, 30px)' }}>Campaign Settings</h3>
                    <p style={{ margin: '0 0 var(--spacing-md) 0' }}>Configure your campaign settings and preferences.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', maxWidth: '300px' }}>
                      <Input label="Campaign Name" placeholder="Enter campaign name" />
                      <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                        <Button size="small">Save Changes</Button>
                        <Button variant="secondary" size="small">Cancel</Button>
                      </div>
                    </div>
                  </div>
                )
              }
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      )
    },
    {
      id: 'tab-variants',
      name: 'Tab Variants',
      description: 'Different visual styles for tabs',
      code: `{/* Pills variant */}
<Tabs
  tabs={pillTabs}
  variant="pills"
  defaultTab="active"
/>

{/* Underline variant */}
<Tabs
  tabs={simpleTabs}
  variant="underline"
/>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Pills Variant</h4>
            <Tabs
              tabs={[
                {
                  id: 'all',
                  label: 'All Items',
                  badge: '24',
                  content: <div style={{ padding: 'var(--spacing-md)' }}>All items content goes here...</div>
                },
                {
                  id: 'active',
                  label: 'Active',
                  badge: '18',
                  content: <div style={{ padding: 'var(--spacing-md)' }}>Active items content goes here...</div>
                },
                {
                  id: 'inactive',
                  label: 'Inactive',
                  badge: '6',
                  content: <div style={{ padding: 'var(--spacing-md)' }}>Inactive items content goes here...</div>
                }
              ]}
              variant="pills"
              defaultTab="active"
            />
          </div>
          
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Underline Variant</h4>
            <Tabs
              tabs={[
                {
                  id: 'tab1',
                  label: 'First Tab',
                  content: <div style={{ padding: 'var(--spacing-md)' }}>Content for the first tab</div>
                },
                {
                  id: 'tab2',
                  label: 'Second Tab',
                  content: <div style={{ padding: 'var(--spacing-md)' }}>Content for the second tab</div>
                }
              ]}
              variant="underline"
            />
          </div>
        </div>
      )
    },
    {
      id: 'tab-sizes',
      name: 'Tab Sizes',
      description: 'Different sizes for various use cases',
      code: `{/* Small tabs */}
<Tabs
  tabs={smallTabs}
  size="small"
/>

{/* Large tabs */}
<Tabs
  tabs={largeTabs}
  size="large"
/>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Small Tabs</h4>
            <Tabs
              tabs={[
                { id: 'small1', label: 'First', content: <div style={{ padding: 'var(--spacing-sm)' }}>Small tab content</div> },
                { id: 'small2', label: 'Second', content: <div style={{ padding: 'var(--spacing-sm)' }}>More small content</div> }
              ]}
              size="small"
            />
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Large Tabs</h4>
            <Tabs
              tabs={[
                { id: 'large1', label: 'First', content: <div style={{ padding: 'var(--spacing-lg)' }}>Large tab content</div> },
                { id: 'large2', label: 'Second', content: <div style={{ padding: 'var(--spacing-lg)' }}>More large content</div> }
              ]}
              size="large"
            />
          </div>
        </div>
      )
    },
    {
      id: 'tabs-with-badges',
      name: 'Tabs with Badges',
      description: 'Tabs with count indicators and status badges',
      code: `<Tabs
  tabs={[
    { 
      id: 'inbox', 
      label: 'Inbox', 
      badge: '12', 
      content: <div>12 unread messages</div> 
    },
    { 
      id: 'sent', 
      label: 'Sent', 
      content: <div>Sent messages</div> 
    },
    { 
      id: 'drafts', 
      label: 'Drafts', 
      badge: '3', 
      content: <div>3 draft messages</div> 
    },
    { 
      id: 'trash', 
      label: 'Trash', 
      badge: '∞', 
      content: <div>Deleted messages</div> 
    }
  ]}
  variant="pills"
/>`,
      component: (
        <Tabs
          tabs={[
            { id: 'inbox', label: 'Inbox', badge: '12', content: <div style={{ padding: 'var(--spacing-md)' }}>12 unread messages</div> },
            { id: 'sent', label: 'Sent', content: <div style={{ padding: 'var(--spacing-md)' }}>Sent messages</div> },
            { id: 'drafts', label: 'Drafts', badge: '3', content: <div style={{ padding: 'var(--spacing-md)' }}>3 draft messages</div> },
            { id: 'trash', label: 'Trash', badge: '∞', content: <div style={{ padding: 'var(--spacing-md)' }}>Deleted messages</div> }
          ]}
          variant="pills"
        />
      )
    },
    {
      id: 'disabled-tabs',
      name: 'Disabled Tabs',
      description: 'Tabs with disabled states for unavailable content',
      code: `<Tabs
  tabs={[
    {
      id: 'available',
      label: 'Available',
      content: <div>This content is available</div>
    },
    {
      id: 'disabled',
      label: 'Disabled Tab',
      disabled: true,
      content: <div>This content should not be visible</div>
    },
    {
      id: 'another',
      label: 'Another Tab',
      content: <div>Another available tab</div>
    }
  ]}
/>`,
      component: (
        <Tabs
          tabs={[
            {
              id: 'available',
              label: 'Available',
              content: <div style={{ padding: 'var(--spacing-md)' }}>This content is available</div>
            },
            {
              id: 'disabled',
              label: 'Disabled Tab',
              disabled: true,
              content: <div style={{ padding: 'var(--spacing-md)' }}>This content should not be visible</div>
            },
            {
              id: 'another',
              label: 'Another Tab',
              content: <div style={{ padding: 'var(--spacing-md)' }}>Another available tab</div>
            }
          ]}
        />
      )
    },
    {
      id: 'keyboard-navigation',
      name: 'Keyboard Navigation',
      description: 'Demonstration of keyboard accessibility features',
      code: `{/* Tab component automatically includes keyboard navigation */}
<Tabs tabs={simpleTabs} />

{/* Keyboard shortcuts available:
- Arrow Left/Right: Navigate between tabs
- Home: Go to first tab  
- End: Go to last tab
- Tab: Move focus to tab content
- Enter/Space: Activate focused tab
*/}`,
      component: (
        <div>
          <Tabs
            tabs={[
              { id: 'first', label: 'First', content: <div style={{ padding: 'var(--spacing-md)' }}>Try using arrow keys to navigate between tabs</div> },
              { id: 'second', label: 'Second', content: <div style={{ padding: 'var(--spacing-md)' }}>Home and End keys jump to first/last tabs</div> },
              { id: 'third', label: 'Third', content: <div style={{ padding: 'var(--spacing-md)' }}>Tab key moves focus to content area</div> }
            ]}
          />
          
          <div style={{ 
            marginTop: 'var(--spacing-md)', 
            padding: 'var(--spacing-md)', 
            backgroundColor: 'var(--color-gray-10)', 
            borderRadius: '4px' 
          }}>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0' }}>Try these keyboard shortcuts:</h4>
            <ul style={{ margin: 0, paddingLeft: 'var(--spacing-lg)', fontSize: 'var(--font-size-sm)' }}>
              <li><kbd style={{ padding: '2px 6px', backgroundColor: 'white', borderRadius: '2px', border: '1px solid var(--color-gray-40)', fontSize: 'var(--font-size-xs)' }}>←</kbd> <kbd style={{ padding: '2px 6px', backgroundColor: 'white', borderRadius: '2px', border: '1px solid var(--color-gray-40)', fontSize: 'var(--font-size-xs)' }}>→</kbd> Navigate between tabs</li>
              <li><kbd style={{ padding: '2px 6px', backgroundColor: 'white', borderRadius: '2px', border: '1px solid var(--color-gray-40)', fontSize: 'var(--font-size-xs)' }}>Home</kbd> Go to first tab</li>
              <li><kbd style={{ padding: '2px 6px', backgroundColor: 'white', borderRadius: '2px', border: '1px solid var(--color-gray-40)', fontSize: 'var(--font-size-xs)' }}>End</kbd> Go to last tab</li>
              <li><kbd style={{ padding: '2px 6px', backgroundColor: 'white', borderRadius: '2px', border: '1px solid var(--color-gray-40)', fontSize: 'var(--font-size-xs)' }}>Tab</kbd> Move focus to tab content</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return componentStories;
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">tabs</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">TabItem[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm"><strong>Required.</strong> Array of tab items with id, label, content, etc.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">activeTab</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">first tab id</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Controlled active tab value</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">defaultTab</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">first tab id</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Default active tab for uncontrolled usage</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"default" | "pills" | "underline"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"default"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Visual style variant</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"small" | "medium" | "large"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"medium"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Size variant for tabs</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onTabChange</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(tabId: string) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when active tab changes</td>
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

export default function TabsPage() {
  const tabsDemo = TabsDemo();
  
  return (
    <ComponentShowcase 
      component={componentInfo}
      stories={tabsDemo}
      propsTable={<PropsTable />}
    />
  );
}