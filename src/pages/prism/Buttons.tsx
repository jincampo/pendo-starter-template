import React from 'react';
import '@/index.css';
import { Button } from '@prism/button';
import { Icon } from '@prism/icon';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

const buttonSizes = ['default', 'small', 'mini'] as const;
const buttonVariants = ['primary', 'secondary', 'tertiary', 'tertiary-link', 'destructive'] as const;

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'buttons',
  name: 'Buttons',
  category: 'Actions',
  description: 'Buttons trigger actions and allow users to make choices with a single click or tap. They communicate calls to action to the user and allow users to interact with pages.',
  usage: {
    whenToUse: [
      'To trigger an action or navigate users to another page',
      'For form submissions and confirmations',
      'As primary or secondary calls-to-action',
      'To open modals, menus, or other interactive elements'
    ],
    whenNotToUse: [
      'For navigation that should be handled by links',
      'When the action is not immediately actionable',
      'For toggles or state changes (use Toggle component instead)'
    ],
    anatomy: [
      { element: 'Button container', description: 'The clickable area with proper focus and hover states' },
      { element: 'Button text', description: 'Clear, action-oriented label' },
      { element: 'Icon (optional)', description: 'Supporting visual element to clarify action' }
    ],
    accessibility: [
      'Use descriptive button text that explains the action',
      'Ensure adequate contrast ratios (4.5:1 minimum)',
      'Provide focus indicators for keyboard navigation',
      'Use aria-disabled for disabled states',
      'Consider aria-label for icon-only buttons'
    ],
    dosDonts: {
      dos: ['Use clear, action-oriented labels', 'Maintain consistent button hierarchy', 'Provide visual feedback on interaction'],
      donts: ['Use too many primary buttons on one page', 'Make buttons too small to touch/click easily', 'Use vague labels like "Click here"']
    }
  }
};

// Component stories with live examples
const componentStories: ComponentStory[] = [
  {
    id: 'variants',
    name: 'Button Variants',
    description: 'Different button types showing the visual hierarchy',
    code: `<div className="button-group">
  <Button variant="primary">Primary Button</Button>
  <Button variant="secondary">Secondary Button</Button>
  <Button variant="tertiary">Tertiary Button</Button>
  <Button variant="tertiary-link">Tertiary Link</Button>
  <Button variant="destructive">Destructive Button</Button>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="tertiary">Tertiary Button</Button>
        <Button variant="tertiary-link">Tertiary Link</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>
    )
  },
  {
    id: 'sizes',
    name: 'Button Sizes',
    description: 'Different button sizes available',
    code: `<div className="button-group">
  <Button size="mini">Mini</Button>
  <Button size="small">Small</Button>
  <Button size="default">Default</Button>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button size="mini">Mini</Button>
        <Button size="small">Small</Button>
        <Button size="default">Default</Button>
      </div>
    )
  },
  {
    id: 'states',
    name: 'Button States',
    description: 'Normal, loading, and disabled button states',
    code: `<div className="button-group">
  <Button>Normal State</Button>
  <Button loading>Loading State</Button>
  <Button disabled>Disabled State</Button>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
        <Button>Normal State</Button>
        <Button loading>Loading State</Button>
        <Button disabled>Disabled State</Button>
      </div>
    )
  },
  {
    id: 'with-icons',
    name: 'Buttons with Icons',
    description: 'Buttons with prefix, suffix, or both icons',
    code: `<div className="button-group">
  <Button variant="primary">
    <Icon name="Plus" size="small" />
    With Prefix
  </Button>
  <Button variant="secondary">
    With Suffix
    <Icon name="ArrowRight" size="small" />
  </Button>
  <Button variant="tertiary">
    <Icon name="Download" size="small" />
    Both Icons
    <Icon name="ExternalLink" size="small" />
  </Button>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
        <Button variant="primary">
          <Icon name="Plus" size="small" />
          With Prefix
        </Button>
        <Button variant="secondary">
          With Suffix
          <Icon name="ArrowRight" size="small" />
        </Button>
        <Button variant="tertiary">
          <Icon name="Download" size="small" />
          Both Icons
          <Icon name="ExternalLink" size="small" />
        </Button>
      </div>
    )
  },
  {
    id: 'icon-only',
    name: 'Icon Only Buttons',
    description: 'Compact buttons with only icons',
    code: `<div className="button-group">
  <Button size="mini" variant="primary">
    <Icon name="Plus" size="small" />
  </Button>
  <Button size="mini" variant="secondary">
    <Icon name="Edit" size="small" />
  </Button>
  <Button size="mini" variant="tertiary">
    <Icon name="Settings" size="small" />
  </Button>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
        <Button size="mini" variant="primary">
          <Icon name="Plus" size="small" />
        </Button>
        <Button size="mini" variant="secondary">
          <Icon name="Edit" size="small" />
        </Button>
        <Button size="mini" variant="tertiary">
          <Icon name="Settings" size="small" />
        </Button>
      </div>
    )
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Example',
    description: 'All button variations and states showcased together',
    code: `{/* All button sizes and variants */}
{buttonVariants.map(variant => (
  <div key={variant}>
    <h4>{variant} Buttons</h4>
    {buttonSizes.map(size => (
      <div key={size}>
        <Button variant={variant} size={size}>Button</Button>
        <Button variant={variant} size={size} disabled>Disabled</Button>
      </div>
    ))}
  </div>
))}`,
    component: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        {buttonVariants.map(variant => (
          <div key={variant} style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-gray-40)', borderRadius: '4px' }}>
            <h4 style={{ margin: '0 0 var(--spacing-md) 0', textTransform: 'capitalize', color: 'var(--color-gray-100)' }}>{variant} Buttons</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              {buttonSizes.map(size => (
                <div key={size} style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                  <span style={{ minWidth: '60px', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>{size}:</span>
                  <Button variant={variant} size={size}>Button</Button>
                  <Button variant={variant} size={size} disabled>Disabled</Button>
                </div>
              ))}
            </div>
          </div>
        ))}
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'primary' | 'secondary' | 'tertiary' | 'tertiary-link' | 'destructive'</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">'primary'</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">The visual style variant of the button</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'default' | 'small' | 'mini' | 'icon'</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">'default'</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">The size of the button</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">loading</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the button is in a loading state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the button is disabled</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">asChild</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether to merge props onto child element</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Buttons() {
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