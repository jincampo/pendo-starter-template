import React from 'react';
import { Icon } from '@prism/icon';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Common icon sets for different use cases
const navigationIcons = ['Home', 'Search', 'Settings', 'User', 'Bell', 'Mail', 'Menu', 'ChevronDown', 'ChevronRight', 'ArrowLeft'] as const;
const actionIcons = ['Plus', 'Edit', 'Trash2', 'Copy', 'Download', 'Upload', 'Share', 'Save', 'X', 'Check'] as const;
const statusIcons = ['AlertCircle', 'CheckCircle', 'XCircle', 'Info', 'AlertTriangle', 'Clock', 'Eye', 'EyeOff', 'Lock', 'Unlock'] as const;
const sizes = ['small', 'medium', 'large'] as const;

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'icons',
  name: 'Icons',
  category: 'Media',
  description: 'Our icon system uses Lucide icons with consistent sizing, stroke weights, and semantic meaning across the interface. Icons enhance usability by providing visual cues and saving space.',
  usage: {
    whenToUse: [
      'To provide visual context for actions and content',
      'In buttons to clarify their purpose',
      'For navigation elements and status indicators',
      'To save space while maintaining clarity',
      'As visual anchors in complex interfaces'
    ],
    whenNotToUse: [
      'As decorative elements without purpose',
      'When text alone would be clearer',
      'In contexts where cultural meaning varies',
      'When icons are too small to recognize',
      'Without accompanying text for critical actions'
    ],
    anatomy: [
      { element: 'Icon symbol', description: 'The visual representation from Lucide icon set' },
      { element: 'Container', description: 'Bounding area defining size and spacing' },
      { element: 'Stroke', description: 'Line weight and style (consistently 2.5px)' },
      { element: 'Color', description: 'Fill or stroke color, often inheriting from parent' }
    ],
    accessibility: [
      'Provide alt text or aria-label for standalone icons',
      'Use aria-hidden="true" for decorative icons',
      'Ensure sufficient contrast with background',
      'Maintain consistent sizing for similar functions',
      'Consider screen reader compatibility'
    ],
    dosDonts: {
      dos: ['Use icons consistently across similar functions', 'Maintain proper sizing hierarchy', 'Pair with text for clarity'],
      donts: ['Mix different icon styles or stroke weights', 'Use icons smaller than 16px for touch targets', 'Rely solely on color to convey meaning']
    }
  }
};

// Component stories with live examples
const componentStories: ComponentStory[] = [
  {
    id: 'icon-sizes',
    name: 'Icon Sizes',
    description: 'Different icon sizes for various use cases',
    code: `{/* Small icons (16px) - for compact UIs */}
<Icon name="Home" size="small" />

{/* Medium icons (20px) - default size */}
<Icon name="Search" size="medium" />

{/* Large icons (24px) - for emphasis */}
<Icon name="Settings" size="large" />`,
    component: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xl)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '48px', 
            height: '48px', 
            borderRadius: '4px', 
            backgroundColor: 'var(--color-gray-20)' 
          }}>
            <Icon name="Home" size="small" />
          </div>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Small (16px)</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '48px', 
            height: '48px', 
            borderRadius: '4px', 
            backgroundColor: 'var(--color-gray-20)' 
          }}>
            <Icon name="Search" size="medium" />
          </div>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Medium (20px)</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '48px', 
            height: '48px', 
            borderRadius: '4px', 
            backgroundColor: 'var(--color-gray-20)' 
          }}>
            <Icon name="Settings" size="large" />
          </div>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Large (24px)</span>
        </div>
      </div>
    )
  },
  {
    id: 'navigation-icons',
    name: 'Navigation Icons',
    description: 'Common icons used in navigation and interface chrome',
    code: `{/* Navigation and interface icons */}
<Icon name="Home" />
<Icon name="Search" />
<Icon name="Settings" />
<Icon name="User" />
<Icon name="Bell" />
<Icon name="Mail" />
<Icon name="Menu" />
<Icon name="ChevronDown" />
<Icon name="ChevronRight" />
<Icon name="ArrowLeft" />`,
    component: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
        gap: 'var(--spacing-md)',
        maxWidth: '600px'
      }}>
        {navigationIcons.map((iconName) => (
          <div key={iconName} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 'var(--spacing-xs)' 
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '48px', 
              height: '48px', 
              borderRadius: '4px', 
              backgroundColor: 'var(--color-gray-20)' 
            }}>
              <Icon name={iconName} size="medium" />
            </div>
            <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)', textAlign: 'center' }}>
              {iconName}
            </code>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'action-icons',
    name: 'Action Icons',
    description: 'Icons representing user actions and operations',
    code: `{/* Action and operation icons */}
<Icon name="Plus" />
<Icon name="Edit" />
<Icon name="Trash2" />
<Icon name="Copy" />
<Icon name="Download" />
<Icon name="Upload" />
<Icon name="Share" />
<Icon name="Save" />
<Icon name="X" />
<Icon name="Check" />`,
    component: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
        gap: 'var(--spacing-md)',
        maxWidth: '600px'
      }}>
        {actionIcons.map((iconName) => (
          <div key={iconName} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 'var(--spacing-xs)' 
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '48px', 
              height: '48px', 
              borderRadius: '4px', 
              backgroundColor: 'var(--color-gray-20)' 
            }}>
              <Icon name={iconName} size="medium" />
            </div>
            <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)', textAlign: 'center' }}>
              {iconName}
            </code>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'status-icons',
    name: 'Status Icons',
    description: 'Icons that communicate state, feedback, and status',
    code: `{/* Status and feedback icons */}
<Icon name="AlertCircle" />
<Icon name="CheckCircle" />
<Icon name="XCircle" />
<Icon name="Info" />
<Icon name="AlertTriangle" />
<Icon name="Clock" />
<Icon name="Eye" />
<Icon name="EyeOff" />
<Icon name="Lock" />
<Icon name="Unlock" />`,
    component: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
        gap: 'var(--spacing-md)',
        maxWidth: '600px'
      }}>
        {statusIcons.map((iconName) => (
          <div key={iconName} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 'var(--spacing-xs)' 
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '48px', 
              height: '48px', 
              borderRadius: '4px', 
              backgroundColor: 'var(--color-gray-20)' 
            }}>
              <Icon name={iconName} size="medium" />
            </div>
            <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)', textAlign: 'center' }}>
              {iconName}
            </code>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'colored-icons',
    name: 'Colored Icons',
    description: 'Icons with semantic colors for status and meaning',
    code: `{/* Success icons */}
<Icon name="CheckCircle" style={{ color: 'var(--color-green-70)' }} />

{/* Error icons */}
<Icon name="XCircle" style={{ color: 'var(--color-red-60)' }} />

{/* Warning icons */}
<Icon name="AlertTriangle" style={{ color: 'var(--color-yellow-60)' }} />

{/* Info icons */}
<Icon name="Info" style={{ color: 'var(--color-blue-60)' }} />

{/* Primary color */}
<Icon name="Settings" style={{ color: 'var(--color-teal-primary)' }} />`,
    component: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="CheckCircle" size="large" color="var(--color-green-70)" />
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Success</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="XCircle" size="large" color="var(--color-red-60)" />
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Error</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="AlertTriangle" size="large" color="var(--color-yellow-60)" />
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Warning</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Info" size="large" color="var(--color-blue-60)" />
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Info</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Settings" size="large" color="var(--color-teal-primary)" />
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Primary</span>
        </div>
      </div>
    )
  },
  {
    id: 'icons-in-context',
    name: 'Icons in Context',
    description: 'Real-world examples of icons in UI components',
    code: `{/* In buttons */}
<button className="pendo-button">
  <Icon name="Plus" size="small" />
  Add Item
</button>

{/* In form fields */}
<div className="input-with-icon">
  <Icon name="Search" size="small" />
  <input placeholder="Search..." />
</div>

{/* In navigation */}
<nav>
  <a href="/home">
    <Icon name="Home" size="small" />
    Home
  </a>
</nav>

{/* In status indicators */}
<div className="status-indicator">
  <Icon name="CheckCircle" size="small" style={{ color: 'green' }} />
  Active
</div>`,
    component: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>In Buttons</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
            <button style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-xs)', 
              padding: 'var(--spacing-sm) var(--spacing-md)',
              backgroundColor: 'var(--color-teal-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: 'var(--font-size-sm)'
            }}>
              <Icon name="Plus" size="small" />
              Add Item
            </button>
            
            <button style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-xs)', 
              padding: 'var(--spacing-sm) var(--spacing-md)',
              backgroundColor: 'transparent',
              color: 'var(--color-gray-70)',
              border: '1px solid var(--color-gray-40)',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: 'var(--font-size-sm)'
            }}>
              <Icon name="Download" size="small" />
              Export
            </button>
          </div>
        </div>
        
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>In Form Fields</h4>
          <div style={{ position: 'relative', maxWidth: '250px' }}>
            <div style={{
              position: 'absolute', 
              left: 'var(--spacing-sm)', 
              top: '50%', 
              transform: 'translateY(-50%)'
            }}>
              <Icon 
                name="Search" 
                size="small" 
                color="var(--color-gray-70)"
              />
            </div>
            <input 
              placeholder="Search..." 
              style={{ 
                width: '100%',
                padding: 'var(--spacing-sm) var(--spacing-sm) var(--spacing-sm) var(--spacing-xl)',
                border: '1px solid var(--color-gray-40)',
                borderRadius: '3px',
                fontSize: 'var(--font-size-sm)'
              }}
            />
          </div>
        </div>
        
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>In Navigation</h4>
          <nav style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-xs)', 
              textDecoration: 'none', 
              color: 'var(--color-gray-70)',
              fontSize: 'var(--font-size-sm)'
            }}>
              <Icon name="Home" size="small" />
              Home
            </a>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-xs)', 
              textDecoration: 'none', 
              color: 'var(--color-gray-70)',
              fontSize: 'var(--font-size-sm)'
            }}>
              <Icon name="User" size="small" />
              Profile
            </a>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-xs)', 
              textDecoration: 'none', 
              color: 'var(--color-gray-70)',
              fontSize: 'var(--font-size-sm)'
            }}>
              <Icon name="Settings" size="small" />
              Settings
            </a>
          </nav>
        </div>
        
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>In Status Indicators</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', fontSize: 'var(--font-size-sm)' }}>
              <Icon name="CheckCircle" size="small" color="var(--color-green-70)" />
              Active
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', fontSize: 'var(--font-size-sm)' }}>
              <Icon name="Clock" size="small" color="var(--color-yellow-60)" />
              Pending
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', fontSize: 'var(--font-size-sm)' }}>
              <Icon name="XCircle" size="small" color="var(--color-red-60)" />
              Failed
            </div>
          </div>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">name</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">keyof typeof LucideIcons</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm"><strong>Required.</strong> The name of the Lucide icon</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"small" | "medium" | "large" | "nav"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"medium"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Icon size variant (16px | 20px | 24px | 18px)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">color</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"currentColor"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Icon color (CSS color value)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Additional CSS classes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">style</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">CSSProperties</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Inline styles for the icon</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">...props</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">SVGProps</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">All SVG element properties</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Icons() {
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