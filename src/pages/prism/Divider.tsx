import React, { useState } from 'react';
import { Divider } from '@prism/divider';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'divider',
  name: 'Divider',
  category: 'Layout',
  description: 'A visual separator that creates clear divisions between content sections. Supports horizontal and vertical orientations with various styles to improve content organization and visual hierarchy.',
  usage: {
    whenToUse: [
      'To separate content sections or groups logically',
      'When creating visual hierarchy in complex layouts',
      'To divide content in lists, menus, or forms',
      'When whitespace alone is insufficient for clear separation',
      'To group related content while maintaining visual flow'
    ],
    whenNotToUse: [
      'When whitespace alone is sufficient to create separation',
      'To indicate interactivity (use buttons, links, or other interactive elements)',
      'In very small spaces where it creates visual clutter',
      'As decorative elements without functional purpose',
      'When overusing them reduces overall design clarity'
    ],
    anatomy: [
      { element: 'Divider Line', description: 'The visible rule or line that creates separation between content' },
      { element: 'Orientation', description: 'Defines whether the divider is horizontal (row separation) or vertical (column separation)' },
      { element: 'Style Variant', description: 'Visual style: solid, dashed, or dotted lines' },
      { element: 'Thickness', description: 'Line weight: thin, medium, or thick options' },
      { element: 'Color', description: 'Visual emphasis: light, medium, or dark color variants' },
      { element: 'Label (optional)', description: 'Text content that can be displayed with horizontal dividers' }
    ],
    accessibility: [
      'Use role="separator" for semantic meaning',
      'Decorative dividers should use role="presentation" or aria-hidden="true"',
      'For content separation, ensure proper heading structure and ARIA landmarks',
      'Provide sufficient color contrast for visibility',
      'Ensure dividers don\'t interfere with keyboard navigation flow'
    ],
    dosDonts: {
      dos: [
        'Use dividers sparingly to avoid visual clutter',
        'Ensure consistent styling across your application',
        'Choose appropriate thickness and color for context',
        'Use semantic markup for meaningful content separation',
        'Consider the visual weight in your overall design'
      ],
      donts: [
        'Overuse dividers in small spaces or compact layouts',
        'Use dividers as purely decorative elements',
        'Mix inconsistent divider styles within the same context',
        'Rely solely on dividers for content structure',
        'Use dividers that compete with more important visual elements'
      ]
    }
  }
};

// Interactive demo component
const InteractiveDividerDemo: React.FC = () => {
  const [showLabels, setShowLabels] = useState(false);

  return (
    <div>
      <div style={{ marginBottom: 'var(--spacing-lg)' }}>
        <button 
          onClick={() => setShowLabels(!showLabels)}
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
          {showLabels ? 'Hide Labels' : 'Show Labels'}
        </button>
      </div>
      
      <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-gray-05)', borderRadius: '4px', marginBottom: 'var(--spacing-md)' }}>
        <h4 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-base)' }}>Content Above</h4>
        <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>This content appears above the divider.</p>
      </div>
      
      <Divider 
        variant="solid"
        size="medium"
        color="medium"
        label={showLabels ? "Section Separator" : undefined}
      />
      
      <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-gray-05)', borderRadius: '4px', marginTop: 'var(--spacing-md)' }}>
        <h4 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-base)' }}>Content Below</h4>
        <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>This content appears below the divider.</p>
      </div>
      
      <div style={{ 
        marginTop: 'var(--spacing-lg)',
        padding: 'var(--spacing-md)',
        backgroundColor: 'var(--color-blue-10)',
        borderRadius: '4px',
        fontSize: 'var(--font-size-sm)'
      }}>
        <strong>Current State:</strong> {showLabels ? 'Labels shown' : 'Labels hidden'}
      </div>
    </div>
  );
};

// Component stories with live examples
function getDividerStories(): ComponentStory[] {
  const componentStories: ComponentStory[] = [
    {
      id: 'basic-horizontal',
      name: 'Basic Horizontal Divider',
      description: 'Standard horizontal divider to separate content sections',
      code: `<div className="content-section">
  <h3>Section One</h3>
  <p>This is the first section of content.</p>
</div>

<Divider />

<div className="content-section">
  <h3>Section Two</h3>
  <p>This is the second section of content.</p>
</div>`,
      component: (
        <div style={{ width: '100%' }}>
          <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-gray-05)', borderRadius: '4px', marginBottom: 'var(--spacing-md)' }}>
            <h3 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-base)', fontWeight: '600' }}>Section One</h3>
            <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>This is the first section of content with important information.</p>
          </div>
          
          <Divider />
          
          <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-gray-05)', borderRadius: '4px', marginTop: 'var(--spacing-md)' }}>
            <h3 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-base)', fontWeight: '600' }}>Section Two</h3>
            <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>This is the second section with different content that is clearly separated.</p>
          </div>
        </div>
      )
    },
    {
      id: 'divider-variants',
      name: 'Style Variants',
      description: 'Different visual styles: solid, dashed, and dotted',
      code: `{/* Solid divider (default) */}
<Divider variant="solid" />

{/* Dashed divider */}
<Divider variant="dashed" />

{/* Dotted divider */}
<Divider variant="dotted" />`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div>
            <p style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>Solid (Default)</p>
            <Divider variant="solid" />
          </div>
          
          <div>
            <p style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>Dashed</p>
            <Divider variant="dashed" />
          </div>
          
          <div>
            <p style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>Dotted</p>
            <Divider variant="dotted" />
          </div>
        </div>
      )
    },
    {
      id: 'divider-sizes',
      name: 'Size Options',
      description: 'Different thicknesses for various visual emphasis levels',
      code: `{/* Thin divider */}
<Divider size="thin" />

{/* Medium divider */}
<Divider size="medium" />

{/* Thick divider */}
<Divider size="thick" />`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div>
            <p style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>Thin</p>
            <Divider size="thin" />
          </div>
          
          <div>
            <p style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>Medium</p>
            <Divider size="medium" />
          </div>
          
          <div>
            <p style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>Thick</p>
            <Divider size="thick" />
          </div>
        </div>
      )
    },
    {
      id: 'divider-colors',
      name: 'Color Variants',
      description: 'Different color intensities for various contexts',
      code: `{/* Light divider - subtle separation */}
<Divider color="light" />

{/* Medium divider - standard emphasis */}
<Divider color="medium" />

{/* Dark divider - strong emphasis */}
<Divider color="dark" />`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div>
            <p style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>Light - Subtle separation</p>
            <Divider color="light" />
          </div>
          
          <div>
            <p style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>Medium - Standard emphasis</p>
            <Divider color="medium" />
          </div>
          
          <div>
            <p style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>Dark - Strong emphasis</p>
            <Divider color="dark" />
          </div>
        </div>
      )
    },
    {
      id: 'vertical-dividers',
      name: 'Vertical Dividers',
      description: 'Vertical orientation for separating side-by-side content',
      code: `<div className="flex-container">
  <div className="content-column">
    <h4>Left Column</h4>
    <p>Content on the left side.</p>
  </div>
  
  <Divider orientation="vertical" />
  
  <div className="content-column">
    <h4>Right Column</h4>
    <p>Content on the right side.</p>
  </div>
</div>`,
      component: (
        <div style={{ 
          display: 'flex', 
          alignItems: 'stretch',
          minHeight: '120px',
          border: '1px solid var(--color-gray-30)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{ 
            flex: 1, 
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--color-gray-05)'
          }}>
            <h4 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '600' }}>Left Column</h4>
            <p style={{ margin: 0, fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Content on the left side with important information and details.</p>
          </div>
          
          <Divider orientation="vertical" />
          
          <div style={{ 
            flex: 1, 
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--color-gray-05)'
          }}>
            <h4 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '600' }}>Right Column</h4>
            <p style={{ margin: 0, fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Content on the right side that is clearly separated from the left.</p>
          </div>
        </div>
      )
    },
    {
      id: 'labeled-dividers',
      name: 'Dividers with Labels',
      description: 'Horizontal dividers with descriptive text labels',
      code: `{/* Divider with label */}
<Divider label="Personal Information" />

{/* Divider with label and custom styling */}
<Divider 
  label="Account Settings" 
  variant="dashed" 
  color="medium" 
/>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
          <div>
            <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-gray-05)', borderRadius: '4px 4px 0 0' }}>
              <h4 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)' }}>Contact Details</h4>
              <p style={{ margin: 0, fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Basic contact information fields</p>
            </div>
            
            <Divider label="Personal Information" />
            
            <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-gray-05)', borderRadius: '0 0 4px 4px' }}>
              <h4 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)' }}>Profile Details</h4>
              <p style={{ margin: 0, fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Additional profile information and preferences</p>
            </div>
          </div>
          
          <div>
            <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-gray-05)', borderRadius: '4px 4px 0 0' }}>
              <h4 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)' }}>User Preferences</h4>
              <p style={{ margin: 0, fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Display and notification settings</p>
            </div>
            
            <Divider label="Account Settings" variant="dashed" color="medium" />
            
            <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-gray-05)', borderRadius: '0 0 4px 4px' }}>
              <h4 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)' }}>Security Options</h4>
              <p style={{ margin: 0, fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>Password and authentication settings</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'list-separation',
      name: 'List Item Separation',
      description: 'Using dividers to separate items in lists and menus',
      code: `<div className="menu-list">
  <div className="menu-item">Dashboard</div>
  <Divider color="light" />
  
  <div className="menu-item">Analytics</div>
  <Divider color="light" />
  
  <div className="menu-item">Settings</div>
  <Divider color="light" />
  
  <div className="menu-item">Help & Support</div>
</div>`,
      component: (
        <div style={{ 
          border: '1px solid var(--color-gray-30)',
          borderRadius: '4px',
          backgroundColor: 'white',
          maxWidth: '300px'
        }}>
          <div style={{ 
            padding: 'var(--spacing-md)', 
            fontSize: 'var(--font-size-sm)',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            📊 Dashboard
          </div>
          <Divider color="light" />
          
          <div style={{ 
            padding: 'var(--spacing-md)', 
            fontSize: 'var(--font-size-sm)',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            📈 Analytics
          </div>
          <Divider color="light" />
          
          <div style={{ 
            padding: 'var(--spacing-md)', 
            fontSize: 'var(--font-size-sm)',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            ⚙️ Settings
          </div>
          <Divider color="light" />
          
          <div style={{ 
            padding: 'var(--spacing-md)', 
            fontSize: 'var(--font-size-sm)',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            ❓ Help & Support
          </div>
        </div>
      )
    },
    {
      id: 'form-sections',
      name: 'Form Section Separation',
      description: 'Organizing form content with labeled dividers',
      code: `<form className="profile-form">
  {/* Basic Information */}
  <div className="form-section">
    <input placeholder="First Name" />
    <input placeholder="Last Name" />
    <input placeholder="Email" />
  </div>
  
  <Divider label="Contact Details" />
  
  {/* Contact Information */}
  <div className="form-section">
    <input placeholder="Phone Number" />
    <input placeholder="Address" />
    <input placeholder="City" />
  </div>
  
  <Divider label="Preferences" variant="dashed" />
  
  {/* User Preferences */}
  <div className="form-section">
    <label>
      <input type="checkbox" /> Email notifications
    </label>
    <label>
      <input type="checkbox" /> SMS alerts
    </label>
  </div>
</form>`,
      component: (
        <div style={{ 
          maxWidth: '400px',
          padding: 'var(--spacing-lg)',
          border: '1px solid var(--color-gray-30)',
          borderRadius: '4px',
          backgroundColor: 'white'
        }}>
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
              <input 
                placeholder="First Name" 
                style={{ 
                  padding: 'var(--spacing-sm)',
                  border: '1px solid var(--color-gray-40)',
                  borderRadius: '3px',
                  fontSize: 'var(--font-size-sm)'
                }} 
              />
              <input 
                placeholder="Last Name" 
                style={{ 
                  padding: 'var(--spacing-sm)',
                  border: '1px solid var(--color-gray-40)',
                  borderRadius: '3px',
                  fontSize: 'var(--font-size-sm)'
                }} 
              />
              <input 
                placeholder="Email" 
                style={{ 
                  padding: 'var(--spacing-sm)',
                  border: '1px solid var(--color-gray-40)',
                  borderRadius: '3px',
                  fontSize: 'var(--font-size-sm)'
                }} 
              />
            </div>
          </div>
          
          <Divider label="Contact Details" />
          
          <div style={{ margin: 'var(--spacing-lg) 0' }}>
            <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
              <input 
                placeholder="Phone Number" 
                style={{ 
                  padding: 'var(--spacing-sm)',
                  border: '1px solid var(--color-gray-40)',
                  borderRadius: '3px',
                  fontSize: 'var(--font-size-sm)'
                }} 
              />
              <input 
                placeholder="Address" 
                style={{ 
                  padding: 'var(--spacing-sm)',
                  border: '1px solid var(--color-gray-40)',
                  borderRadius: '3px',
                  fontSize: 'var(--font-size-sm)'
                }} 
              />
            </div>
          </div>
          
          <Divider label="Preferences" variant="dashed" />
          
          <div style={{ marginTop: 'var(--spacing-lg)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontSize: 'var(--font-size-sm)' }}>
                <input type="checkbox" />
                Email notifications
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontSize: 'var(--font-size-sm)' }}>
                <input type="checkbox" />
                SMS alerts
              </label>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-demo',
      name: 'Interactive Demo',
      description: 'Try different combinations of divider properties',
      code: `const [showLabels, setShowLabels] = useState(false);

<div className="divider-demo">
  <button onClick={() => setShowLabels(!showLabels)}>
    {showLabels ? 'Hide Labels' : 'Show Labels'}
  </button>
  
  <Divider 
    variant="solid"
    size="medium"
    color="medium"
    label={showLabels ? "Section Separator" : undefined}
  />
</div>`,
      component: <InteractiveDividerDemo />
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">orientation</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"horizontal" | "vertical"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"horizontal"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Defines the direction of the divider line</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"solid" | "dashed" | "dotted"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"solid"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Visual style of the divider line</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"thin" | "medium" | "thick"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"thin"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Thickness of the divider line</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">color</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"light" | "medium" | "dark"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"medium"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Color intensity of the divider line</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Optional text label (only works with horizontal orientation)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Additional CSS classes for custom styling</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">...props</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">HTMLDivElement</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">All standard HTML div element properties</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function DividerPage() {
  const dividerStories = getDividerStories();
  
  return (
    <ComponentShowcase 
      component={componentInfo}
      stories={dividerStories}
      propsTable={<PropsTable />}
    />
  );
}
