import React, { useState } from 'react';
import { ColorPicker } from '@prism/color-picker';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'color-picker',
  name: 'Color Picker',
  category: 'Form Elements',
  description: 'Allow users to select colors from preset options or use a custom color picker. Perfect for theming, branding, and design customization features with support for multiple color formats.',
  usage: {
    whenToUse: [
      'Theme customization and branding features',
      'Chart and data visualization color configuration',
      'Design tools and creative applications',
      'User personalization features',
      'When offering predefined color palettes for consistency',
      'UI customization interfaces'
    ],
    whenNotToUse: [
      'For binary choices (use toggle or radio instead)',
      'When accessibility is critical and colors are the only differentiator',
      'In forms with many required fields where color is secondary',
      'For color-blind users without accessible alternatives',
      'When brand colors must remain completely consistent',
      'In contexts where precise color matching is critical'
    ],
    anatomy: [
      { element: 'Color swatch', description: 'Visual preview of currently selected color' },
      { element: 'Dropdown trigger', description: 'Button to open color selection interface' },
      { element: 'Preset palette', description: 'Grid of predefined color options' },
      { element: 'Custom input', description: 'Text field for entering hex values manually' },
      { element: 'Native picker', description: 'Browser color picker for advanced selection' },
      { element: 'Preview area', description: 'Live preview of selected color effects' }
    ],
    accessibility: [
      'Provide color names or descriptions for screen readers',
      'Ensure sufficient contrast for color swatch borders',
      'Support keyboard navigation through color options',
      'Include text-based color values alongside visual swatches',
      'Offer high contrast mode alternatives for accessibility'
    ],
    dosDonts: {
      dos: [
        'Provide meaningful preset color palettes for your brand',
        'Include color previews and hex values for clarity',
        'Consider accessibility with sufficient contrast ratios',
        'Group related colors logically in preset palettes',
        'Validate color format inputs and provide helpful errors'
      ],
      donts: [
        'Rely solely on color for important information',
        'Use too many color options that overwhelm users',
        'Force users to remember exact hex values',
        'Ignore accessibility needs for color-blind users',
        'Skip color validation and error handling'
      ]
    }
  }
};

// Component stories with live examples
const ColorPickerDemo: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState('#128297');
  const [accentColor, setAccentColor] = useState('#10B981');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [themeColor, setThemeColor] = useState('#128297');

  const brandColors = [
    '#128297', // Teal primary
    '#016479', // Teal dark
    '#2A2C35', // Gray 100
    '#6A6C75', // Gray 70
    '#10B981', // Green
    '#F59E0B', // Yellow
    '#EF4444', // Red
    '#8B5CF6', // Purple
  ];

  const limitedColors = [
    '#FF0000', // Red
    '#00FF00', // Green  
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#FF00FF', // Magenta
    '#00FFFF', // Cyan
  ];

  const componentStories: ComponentStory[] = [
    {
      id: 'basic-usage',
      name: 'Basic Usage',
      description: 'Standard color picker with default preset colors and hex input',
      code: `const [selectedColor, setSelectedColor] = useState('#128297');

<ColorPicker
  label="Primary Color"
  value={selectedColor}
  onValueChange={setSelectedColor}
/>

<div className="mt-4 p-4 rounded" style={{ backgroundColor: selectedColor }}>
  <p className="text-white text-sm font-medium">
    Preview: {selectedColor}
  </p>
</div>`,
      component: (
        <div style={{ maxWidth: '320px' }}>
          <ColorPicker
            label="Primary Color"
            value={primaryColor}
            onValueChange={setPrimaryColor}
          />
          <div 
            style={{ 
              marginTop: 'var(--spacing-md)', 
              padding: 'var(--spacing-md)', 
              borderRadius: '4px',
              backgroundColor: primaryColor,
              color: '#ffffff',
              fontSize: 'var(--font-size-sm)',
              fontWeight: '500'
            }}
          >
            Preview: {primaryColor}
          </div>
        </div>
      )
    },
    {
      id: 'custom-presets',
      name: 'Custom Preset Colors',
      description: 'Using custom color palettes for brand consistency',
      code: `const brandColors = [
  '#128297', // Teal primary
  '#016479', // Teal dark  
  '#2A2C35', // Gray 100
  '#6A6C75', // Gray 70
  '#10B981', // Green
  '#F59E0B', // Yellow
  '#EF4444', // Red
  '#8B5CF6', // Purple
];

<ColorPicker
  label="Brand Color"
  value={accentColor}
  onValueChange={setAccentColor}
  presetColors={brandColors}
/>`,
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
          <div>
            <ColorPicker
              label="Brand Colors"
              value={accentColor}
              onValueChange={setAccentColor}
              presetColors={brandColors}
            />
            <p style={{ marginTop: 'var(--spacing-sm)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              8 brand-specific colors
            </p>
          </div>
          <div>
            <ColorPicker
              label="Limited Palette"
              presetColors={limitedColors}
              defaultValue="#FF0000"
            />
            <p style={{ marginTop: 'var(--spacing-sm)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              6 basic colors only
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'input-options',
      name: 'Input Options',
      description: 'Different input configurations for various use cases',
      code: `{/* With custom hex input */}
<ColorPicker
  label="Background Color"
  value={backgroundColor}
  onValueChange={setBackgroundColor}
  showInput={true}
  placeholder="Enter hex color"
/>

{/* Preset colors only */}
<ColorPicker
  label="Theme Color"
  showInput={false}
  defaultValue="#128297"
/>`,
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--spacing-md)' }}>
          <div>
            <ColorPicker
              label="Background Color"
              value={backgroundColor}
              onValueChange={setBackgroundColor}
              showInput={true}
              placeholder="Enter hex color"
            />
            <p style={{ marginTop: 'var(--spacing-sm)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              Allows manual hex input
            </p>
          </div>
          <div>
            <ColorPicker
              label="Theme Color"
              showInput={false}
              defaultValue="#128297"
            />
            <p style={{ marginTop: 'var(--spacing-sm)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              Preset colors only
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'form-states',
      name: 'Form States',
      description: 'Error states and disabled functionality',
      code: `{/* With error state */}
<ColorPicker
  label="Required Color"
  error="Please select a valid color"
  required
/>

{/* Disabled state */}
<ColorPicker
  label="Locked Color"
  disabled
  defaultValue="#128297"
/>`,
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
          <ColorPicker
            label="Required Color"
            error="Please select a valid color"
            required
          />
          <ColorPicker
            label="Locked Color"
            disabled
            defaultValue="#128297"
          />
        </div>
      )
    },
    {
      id: 'theming-example',
      name: 'UI Theming Example',
      description: 'Real-world example for customizing UI themes',
      code: `const [primaryColor, setPrimaryColor] = useState('#128297');
const [accentColor, setAccentColor] = useState('#10B981');
const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

<div className="theme-builder">
  <h4>Theme Builder</h4>
  <div className="color-controls">
    <ColorPicker
      label="Primary"
      value={primaryColor}
      onValueChange={setPrimaryColor}
      presetColors={brandColors}
    />
    <ColorPicker
      label="Accent"
      value={accentColor}
      onValueChange={setAccentColor}
      presetColors={brandColors}
    />
    <ColorPicker
      label="Background"
      value={backgroundColor}
      onValueChange={setBackgroundColor}
    />
  </div>
</div>`,
      component: (
        <div style={{ 
          padding: 'var(--spacing-lg)',
          border: '1px solid var(--color-gray-40)',
          borderRadius: '4px',
          backgroundColor: 'var(--color-gray-05)'
        }}>
          <h4 style={{ margin: '0 0 var(--spacing-md) 0', fontSize: 'var(--font-size-base)' }}>
            Theme Builder
          </h4>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            <ColorPicker
              label="Primary"
              value={primaryColor}
              onValueChange={setPrimaryColor}
              presetColors={brandColors}
            />
            <ColorPicker
              label="Accent"
              value={accentColor}
              onValueChange={setAccentColor}
              presetColors={brandColors}
            />
            <ColorPicker
              label="Background"
              value={backgroundColor}
              onValueChange={setBackgroundColor}
            />
          </div>
          
          <div 
            style={{ 
              padding: 'var(--spacing-lg)',
              borderRadius: '4px',
              border: `2px solid ${primaryColor}`,
              backgroundColor: backgroundColor
            }}
          >
            <h4 
              style={{ 
                margin: '0 0 var(--spacing-sm) 0',
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'bold',
                color: primaryColor
              }}
            >
              Live Preview
            </h4>
            <p style={{ 
              marginBottom: 'var(--spacing-md)',
              color: 'var(--color-gray-70)'
            }}>
              This preview updates as you change the colors above.
            </p>
            <button 
              style={{ 
                padding: 'var(--spacing-sm) var(--spacing-md)',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: accentColor,
                color: '#ffffff',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Call to Action
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'data-visualization',
      name: 'Data Visualization Colors',
      description: 'Setting up color schemes for charts and data representation',
      code: `<div className="chart-colors">
  <h4>Chart Color Configuration</h4>
  <ColorPicker
    label="Data Series 1"
    defaultValue="#3B82F6"
    presetColors={chartColors}
  />
  <ColorPicker
    label="Data Series 2" 
    defaultValue="#10B981"
    presetColors={chartColors}
  />
  <ColorPicker
    label="Data Series 3"
    defaultValue="#F59E0B"
    presetColors={chartColors}
  />
</div>`,
      component: (
        <div style={{ maxWidth: '400px' }}>
          <h4 style={{ margin: '0 0 var(--spacing-md) 0', fontSize: 'var(--font-size-base)' }}>
            Chart Color Configuration
          </h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <ColorPicker
              label="Data Series 1"
              defaultValue="#3B82F6"
            />
            <ColorPicker
              label="Data Series 2" 
              defaultValue="#10B981"
            />
            <ColorPicker
              label="Data Series 3"
              defaultValue="#F59E0B"
            />
          </div>
          
          <div style={{ 
            marginTop: 'var(--spacing-lg)',
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--color-gray-10)',
            borderRadius: '4px'
          }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
              <div style={{ width: '20px', height: '12px', backgroundColor: '#3B82F6', borderRadius: '2px' }}></div>
              <span style={{ fontSize: 'var(--font-size-sm)' }}>Sales</span>
            </div>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', margin: 'var(--spacing-xs) 0' }}>
              <div style={{ width: '20px', height: '12px', backgroundColor: '#10B981', borderRadius: '2px' }}></div>
              <span style={{ fontSize: 'var(--font-size-sm)' }}>Revenue</span>
            </div>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
              <div style={{ width: '20px', height: '12px', backgroundColor: '#F59E0B', borderRadius: '2px' }}></div>
              <span style={{ fontSize: 'var(--font-size-sm)' }}>Profit</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'brand-identity',
      name: 'Brand Identity Setup',
      description: 'Creating consistent brand color schemes',
      code: `<div className="brand-setup">
  <h4>Brand Identity Colors</h4>
  <ColorPicker
    label="Primary Brand Color"
    presetColors={brandColors}
    defaultValue="#128297"
  />
  <ColorPicker
    label="Secondary Brand Color"
    presetColors={brandColors}
    defaultValue="#F59E0B"
  />
  <ColorPicker
    label="Neutral Color"
    presetColors={brandColors}
    defaultValue="#2A2C35"
  />
</div>`,
      component: (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: 'var(--spacing-md)',
          maxWidth: '600px'
        }}>
          <div>
            <ColorPicker
              label="Primary Brand"
              presetColors={brandColors}
              defaultValue="#128297"
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              Main brand color
            </p>
          </div>
          <div>
            <ColorPicker
              label="Secondary Brand"
              presetColors={brandColors}
              defaultValue="#F59E0B"
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              Accent and highlights
            </p>
          </div>
          <div>
            <ColorPicker
              label="Neutral Color"
              presetColors={brandColors}
              defaultValue="#2A2C35"
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              Text and borders
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'accessibility-features',
      name: 'Accessibility Features',
      description: 'Color picker with accessibility considerations',
      code: `<ColorPicker
  label="High Contrast Mode"
  value={themeColor}
  onValueChange={setThemeColor}
  showColorName={true}
  showHexValue={true}
  aria-describedby="color-help"
/>

<p id="color-help" className="sr-only">
  Choose a color that meets WCAG AA contrast requirements
</p>`,
      component: (
        <div style={{ maxWidth: '350px' }}>
          <ColorPicker
            label="Accessible Color Selection"
            value={themeColor}
            onValueChange={setThemeColor}
            presetColors={brandColors}
          />
          
          <div style={{ 
            marginTop: 'var(--spacing-md)',
            padding: 'var(--spacing-sm)',
            backgroundColor: 'var(--color-blue-10)',
            borderRadius: '4px',
            fontSize: 'var(--font-size-xs)'
          }}>
            <strong>Accessibility Info:</strong>
            <ul style={{ margin: 'var(--spacing-xs) 0 0 0', paddingLeft: 'var(--spacing-md)' }}>
              <li>Selected color: {themeColor}</li>
              <li>Ensure sufficient contrast ratios</li>
              <li>Provide color names for screen readers</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'compact-layout',
      name: 'Compact Layout',
      description: 'Space-efficient color picker for tight layouts',
      code: `<div className="compact-colors">
  <ColorPicker
    label="Compact"
    size="small"
    showInput={false}
    presetColors={limitedColors}
  />
  
  <ColorPicker
    label="Inline"
    layout="inline"
    showInput={false}
    presetColors={brandColors.slice(0, 4)}
  />
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', maxWidth: '300px' }}>
          <div>
            <ColorPicker
              label="Compact Size"
              showInput={false}
              presetColors={limitedColors}
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              Minimal preset-only picker
            </p>
          </div>
          
          <div>
            <ColorPicker
              label="Quick Selection"
              showInput={false}
              presetColors={brandColors.slice(0, 4)}
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              Limited to 4 most-used colors
            </p>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">value</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Controlled color value (hex format: #RRGGBB)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">defaultValue</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"#128297"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Default color value for uncontrolled usage</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">presetColors</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Default palette</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Array of preset color values in hex format</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showInput</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Show custom hex color input field</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showPreview</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Show live color preview swatch</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">format</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"hex" | "rgb" | "hsl"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"hex"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Color format (currently hex only)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">allowAlpha</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Allow alpha/transparency selection</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Disables the color picker interaction</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">required</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Marks the field as required in forms</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Label text for the color picker</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">placeholder</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"Select color"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Placeholder text for hex input field</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">error</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Error message to display below picker</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onValueChange</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(color: string) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when color selection changes</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function ColorPickerPage() {
  const colorPickerDemo = ColorPickerDemo();
  
  return (
    <ComponentShowcase 
      component={componentInfo}
      stories={colorPickerDemo}
      propsTable={<PropsTable />}
    />
  );
}