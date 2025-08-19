import React, { useState } from 'react';
import { PendoNavigation } from '@prism/pendo-navigation';
import { cn } from '@lib/utils';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'navigation',
  name: 'Navigation',
  category: 'Navigation',
  description: 'The navigation component provides a consistent way to navigate between different sections of the application. It supports both expanded and collapsed states with smooth transitions and hover effects.',
  usage: {
    whenToUse: [
      'As the primary navigation for multi-section applications',
      'When users need persistent access to main features',
      'For hierarchical navigation with clear structure',
      'When you need to save horizontal space in wide applications',
      'For dashboard-style interfaces with multiple modules'
    ],
    whenNotToUse: [
      'For simple linear workflows (use breadcrumbs)',
      'When all content fits on one screen',
      'For mobile-only applications (use mobile patterns)',
      'When navigation items change frequently',
      'For external link navigation (use regular links)'
    ],
    anatomy: [
      { element: 'Logo area', description: 'Brand identifier and application name' },
      { element: 'Navigation items', description: 'Clickable links to main application sections' },
      { element: 'Collapse toggle', description: 'Button to expand/collapse the navigation' },
      { element: 'Item icons', description: 'Visual indicators for each navigation section' },
      { element: 'Active indicator', description: 'Shows the currently selected section' }
    ],
    accessibility: [
      'Use semantic navigation elements and ARIA labels',
      'Support keyboard navigation with Tab and Enter keys',
      'Provide focus indicators for all interactive elements',
      'Ensure sufficient color contrast for text and backgrounds',
      'Announce navigation state changes to screen readers'
    ],
    dosDonts: {
      dos: ['Keep navigation items logically organized', 'Use clear, descriptive labels', 'Maintain consistent visual hierarchy'],
      donts: ['Overcrowd with too many top-level items', 'Hide critical navigation behind collapsed state', 'Use unclear or generic labels']
    }
  }
};

// Component stories with live examples
const getNavigationStories = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedSection, setSelectedSection] = useState('product');

  const componentStories: ComponentStory[] = [
    {
      id: 'expanded-navigation',
      name: 'Expanded Navigation',
      description: 'Full navigation with labels and icons visible',
      code: `const [isOpen, setIsOpen] = useState(true);
const [selectedItem, setSelectedItem] = useState('product');

<div className="navigation-container">
              <PendoNavigation 
                isOpen={isOpen}
                selectedItem={selectedItem}
                onCollapseClick={() => setIsOpen(!isOpen)}
    disableNavigation={false}
    fixed={false}
  />
  <div className="content-area">
    <h2>Content Area</h2>
    <p>This is where your application content would appear.</p>
  </div>
</div>`,
      component: (
        <div style={{ 
          border: '1px solid var(--color-gray-40)', 
          borderRadius: '3px', 
          height: '500px', 
          position: 'relative', 
          overflow: 'hidden', 
          display: 'flex'
        }}>
          <div style={{ position: 'relative' }}>
            <PendoNavigation 
              isOpen={isExpanded}
              selectedItem={selectedSection as any}
              onCollapseClick={() => setIsExpanded(!isExpanded)}
              disableNavigation
              fixed={false}
            />
          </div>
          <div style={{ 
            flex: 1, 
            backgroundColor: 'var(--color-gray-10)', 
            padding: 'var(--spacing-lg)'
          }}>
            <h2 style={{ 
              fontSize: 'var(--font-size-3xl, 30px)', 
              color: 'var(--color-gray-100)', 
              margin: '0 0 var(--spacing-sm) 0' 
            }}>
              Content Area
            </h2>
            <p style={{ 
              fontSize: 'var(--font-size-base)', 
              color: 'var(--color-gray-70)', 
              margin: 0 
            }}>
              This is where your application content would appear. The navigation can be expanded or collapsed to save space.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'collapsed-navigation',
      name: 'Collapsed Navigation',
      description: 'Space-saving navigation showing only icons',
      code: `<PendoNavigation 
  isOpen={false}
  selectedItem="analytics"
  onCollapseClick={() => setIsOpen(true)}
  disableNavigation={false}
  fixed={false}
/>`,
      component: (
        <div style={{ 
          border: '1px solid var(--color-gray-40)', 
          borderRadius: '3px', 
          height: '500px', 
          position: 'relative', 
          overflow: 'hidden', 
          display: 'flex'
        }}>
          <div style={{ position: 'relative' }}>
            <PendoNavigation 
              isOpen={isCollapsed}
              selectedItem="analytics"
              onCollapseClick={() => setIsCollapsed(!isCollapsed)}
              disableNavigation
              fixed={false}
            />
          </div>
          <div style={{ 
            flex: 1, 
            backgroundColor: 'var(--color-gray-10)', 
            padding: 'var(--spacing-lg)'
          }}>
            <h2 style={{ 
              fontSize: 'var(--font-size-3xl, 30px)', 
              color: 'var(--color-gray-100)', 
              margin: '0 0 var(--spacing-sm) 0' 
            }}>
              Collapsed Navigation
            </h2>
            <p style={{ 
              fontSize: 'var(--font-size-base)', 
              color: 'var(--color-gray-70)', 
              margin: 0 
            }}>
              When collapsed, the navigation shows only icons to maximize content space. Hover over icons to see tooltips with section names.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-demo',
      name: 'Interactive Demo',
      description: 'Try expanding and collapsing the navigation',
      code: `const [isOpen, setIsOpen] = useState(true);
const [currentSection, setCurrentSection] = useState('product');

// Toggle navigation state
const handleToggle = () => {
  setIsOpen(!isOpen);
};

// Handle section selection
const handleSectionChange = (section) => {
  setCurrentSection(section);
};

<PendoNavigation 
  isOpen={isOpen}
  selectedItem={currentSection}
  onCollapseClick={handleToggle}
  onItemClick={handleSectionChange}
  disableNavigation={false}
  fixed={false}
/>`,
      component: (
        <div>
          <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-md)',
                backgroundColor: 'var(--color-teal-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: 'var(--font-size-sm)'
              }}
            >
              {isExpanded ? 'Collapse Navigation' : 'Expand Navigation'}
            </button>
          </div>
          
          <div style={{ 
            border: '1px solid var(--color-gray-40)', 
            borderRadius: '3px', 
            height: '400px', 
            position: 'relative', 
            overflow: 'hidden', 
            display: 'flex'
          }}>
            <div style={{ position: 'relative' }}>
              <PendoNavigation 
                isOpen={isExpanded}
                selectedItem={selectedSection as any}
                onCollapseClick={() => setIsExpanded(!isExpanded)}
                disableNavigation
                fixed={false}
              />
            </div>
            <div style={{ 
              flex: 1, 
              backgroundColor: 'var(--color-gray-10)', 
              padding: 'var(--spacing-lg)'
            }}>
              <h2 style={{ 
                fontSize: 'var(--font-size-3xl, 30px)', 
                color: 'var(--color-gray-100)', 
                margin: '0 0 var(--spacing-sm) 0' 
              }}>
                Interactive Demo
              </h2>
              <p style={{ 
                fontSize: 'var(--font-size-base)', 
                color: 'var(--color-gray-70)', 
                margin: '0 0 var(--spacing-md) 0' 
              }}>
                Click the toggle button above or the collapse button in the navigation to see the animation in action.
              </p>
              <div style={{
                padding: 'var(--spacing-md)',
                backgroundColor: 'var(--color-teal-10)',
                borderRadius: '4px',
                border: '1px solid var(--color-teal-30)'
              }}>
                <strong>Current State:</strong> {isExpanded ? 'Expanded' : 'Collapsed'}<br/>
                <strong>Selected Section:</strong> {selectedSection}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fixed-navigation',
      name: 'Fixed Navigation Layout',
      description: 'Navigation fixed to the side with proper layout spacing',
      code: `<div className="app-layout">
  {/* Fixed navigation */}
  <PendoNavigation 
    isOpen={isOpen}
    selectedItem="settings"
    fixed={true}
    className="app-navigation"
  />
  
  {/* Main content with proper spacing */}
  <main className="app-content">
    <header className="page-header">
      <h1>Settings</h1>
    </header>
    <div className="page-content">
      {/* Page content */}
    </div>
  </main>
</div>

/* CSS for layout */
.app-layout {
  display: flex;
  height: 100vh;
}

.app-content {
  flex: 1;
  margin-left: var(--navigation-width);
}`,
      component: (
        <div style={{ 
          border: '1px solid var(--color-gray-40)', 
          borderRadius: '3px', 
          height: '450px', 
          position: 'relative', 
          overflow: 'hidden', 
          display: 'flex',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ position: 'relative' }}>
            <PendoNavigation 
              isOpen={true}
              selectedItem="settings"
              disableNavigation
              fixed={false}
            />
          </div>
          <div style={{ 
            flex: 1, 
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white'
          }}>
            <header style={{ 
              padding: 'var(--spacing-lg)', 
              borderBottom: '1px solid var(--color-gray-30)',
              backgroundColor: 'white'
            }}>
              <h1 style={{ 
                fontSize: 'var(--font-size-3xl, 30px)', 
                color: 'var(--color-gray-100)', 
                margin: 0 
              }}>
                Settings
              </h1>
            </header>
            <div style={{ 
              flex: 1, 
              padding: 'var(--spacing-lg)'
            }}>
              <p style={{ 
                fontSize: 'var(--font-size-base)', 
                color: 'var(--color-gray-70)', 
                margin: '0 0 var(--spacing-md) 0' 
              }}>
                Fixed navigation layout provides a consistent sidebar that remains visible as users scroll through content.
              </p>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: 'var(--spacing-md)' 
              }}>
                <div style={{ 
                  padding: 'var(--spacing-md)', 
                  backgroundColor: 'var(--color-gray-10)', 
                  borderRadius: '4px' 
                }}>
                  <h3 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0' }}>Navigation Benefits</h3>
                  <ul style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)', margin: 0, paddingLeft: 'var(--spacing-md)' }}>
                    <li>Always accessible</li>
                    <li>Clear page context</li>
                    <li>Consistent experience</li>
                  </ul>
                </div>
                <div style={{ 
                  padding: 'var(--spacing-md)', 
                  backgroundColor: 'var(--color-gray-10)', 
                  borderRadius: '4px' 
                }}>
                  <h3 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0' }}>Layout Features</h3>
                  <ul style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)', margin: 0, paddingLeft: 'var(--spacing-md)' }}>
                    <li>Responsive design</li>
                    <li>Smooth transitions</li>
                    <li>Mobile optimization</li>
                  </ul>
                </div>
              </div>
            </div>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">isOpen</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Controls whether the navigation is expanded or collapsed</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">selectedItem</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">NavigationItemType</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"product"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Currently selected navigation item</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onCollapseClick</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">() =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when the collapse/expand button is clicked</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onItemClick</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(item: string) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when a navigation item is clicked</td>
                </tr>
                <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disableNavigation</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether to disable navigation functionality for demo purposes</td>
                </tr>
                <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">fixed</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether navigation is fixed positioned</td>
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

export default function NavigationPage() {
  const navigationDemo = getNavigationStories();
  
  return (
    <ComponentShowcase 
      component={componentInfo}
      stories={navigationDemo}
      propsTable={<PropsTable />}
    />
  );
}