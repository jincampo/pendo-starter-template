import React from 'react';
import { Tag } from '@prism/tag';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

const shapes = ['rectangular', 'rectangular-subtle', 'rounded', 'rounded-subtle'] as const;
const sizes = ['medium', 'small', 'mini'] as const;
const types = ['default', 'filter', 'info', 'error', 'success', 'warning'] as const;

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'tags',
  name: 'Tags',
  category: 'Data Display',
  description: 'Tags are compact elements that represent attributes, categories, or metadata. They help users quickly identify and filter content, displaying status information or organizational labels.',
  usage: {
    whenToUse: [
      'To categorize or label content',
      'For displaying metadata or attributes',
      'In filtering and search interfaces',
      'To show status or state information'
    ],
    whenNotToUse: [
      'For primary actions (use buttons instead)',
      'For long text or descriptions',
      'When space is extremely limited',
      'As the sole means of conveying critical information'
    ],
    anatomy: [
      { element: 'Tag container', description: 'The wrapper element with background and border' },
      { element: 'Tag text', description: 'The label content, kept short and descriptive' },
      { element: 'Optional icon', description: 'Visual indicator for status or category type' }
    ],
    accessibility: [
      'Ensure sufficient contrast for text and background',
      'Make interactive tags keyboard accessible',
      'Provide clear labels for screen readers',
      'Use appropriate ARIA attributes for removable tags',
      'Don\'t rely solely on color to convey meaning'
    ],
    dosDonts: {
      dos: ['Use consistent color coding for tag types', 'Keep tag text short and descriptive', 'Group related tags together'],
      donts: ['Use too many different tag styles on one page', 'Make tags too small to read or interact with', 'Use tags for primary navigation']
    }
  }
};

// Component stories with live examples
const componentStories: ComponentStory[] = [
  {
    id: 'basic',
    name: 'Basic Tags',
    description: 'Standard tags in different sizes',
    code: `<div className="tag-group">
  <Tag size="medium">Medium Tag</Tag>
  <Tag size="small">Small Tag</Tag>
  <Tag size="mini">Mini Tag</Tag>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
        <Tag size="medium">Medium Tag</Tag>
        <Tag size="small">Small Tag</Tag>
        <Tag size="mini">Mini Tag</Tag>
      </div>
    )
  },
  {
    id: 'shapes',
    name: 'Tag Shapes',
    description: 'Different visual styles and shapes',
    code: `<div className="tag-shapes">
  <Tag shape="rectangular">Rectangular</Tag>
  <Tag shape="rectangular-subtle">Rectangular Subtle</Tag>
  <Tag shape="rounded">Rounded</Tag>
  <Tag shape="rounded-subtle">Rounded Subtle</Tag>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
        <Tag shape="rectangular">Rectangular</Tag>
        <Tag shape="rectangular-subtle">Rectangular Subtle</Tag>
        <Tag shape="rounded">Rounded</Tag>
        <Tag shape="rounded-subtle">Rounded Subtle</Tag>
      </div>
    )
  },
  {
    id: 'types',
    name: 'Tag Types',
    description: 'Semantic tag types for different purposes',
    code: `<div className="tag-types">
  <Tag type="default">Default</Tag>
  <Tag type="filter">Filter</Tag>
  <Tag type="info">Information</Tag>
  <Tag type="success">Success</Tag>
  <Tag type="warning">Warning</Tag>
  <Tag type="error">Error</Tag>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
        <Tag type="default">Default</Tag>
        <Tag type="filter">Filter</Tag>
        <Tag type="info">Information</Tag>
        <Tag type="success">Success</Tag>
        <Tag type="warning">Warning</Tag>
        <Tag type="error">Error</Tag>
      </div>
    )
  },
  {
    id: 'custom-colors',
    name: 'Custom Colors',
    description: 'Tags with custom background and text colors',
    code: `<div className="custom-color-tags">
  <Tag backgroundColor="var(--color-teal-70)" textColor="white">
    Teal Tag
  </Tag>
  <Tag backgroundColor="var(--color-pink-100)" textColor="white">
    Pink Tag
  </Tag>
  <Tag backgroundColor="var(--color-blue-10)" textColor="var(--color-blue-100)">
    Blue Tag
  </Tag>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
        <Tag backgroundColor="var(--color-teal-70)" textColor="white">
          Teal Tag
        </Tag>
        <Tag backgroundColor="var(--color-pink-100)" textColor="white">
          Pink Tag
        </Tag>
        <Tag backgroundColor="var(--color-blue-10)" textColor="var(--color-blue-100)">
          Blue Tag
        </Tag>
      </div>
    )
  },
  {
    id: 'size-comparison',
    name: 'Size Comparison',
    description: 'All tag sizes with different types for comparison',
    code: `<div className="size-comparison">
  {/* Medium */}
  <div className="size-group">
    <Tag size="medium" type="default">Medium Default</Tag>
    <Tag size="medium" type="info">Medium Info</Tag>
    <Tag size="medium" type="success">Medium Success</Tag>
  </div>
  
  {/* Small */}
  <div className="size-group">
    <Tag size="small" type="default">Small Default</Tag>
    <Tag size="small" type="info">Small Info</Tag>
    <Tag size="small" type="success">Small Success</Tag>
  </div>
  
  {/* Mini */}
  <div className="size-group">
    <Tag size="mini" type="default">Mini Default</Tag>
    <Tag size="mini" type="info">Mini Info</Tag>
    <Tag size="mini" type="success">Mini Success</Tag>
  </div>
</div>`,
    component: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Medium</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Tag size="medium" type="default">Medium Default</Tag>
            <Tag size="medium" type="info">Medium Info</Tag>
            <Tag size="medium" type="success">Medium Success</Tag>
          </div>
        </div>
        
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Small</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Tag size="small" type="default">Small Default</Tag>
            <Tag size="small" type="info">Small Info</Tag>
            <Tag size="small" type="success">Small Success</Tag>
          </div>
        </div>
        
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Mini</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Tag size="mini" type="default">Mini Default</Tag>
            <Tag size="mini" type="info">Mini Info</Tag>
            <Tag size="mini" type="success">Mini Success</Tag>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'use-cases',
    name: 'Common Use Cases',
    description: 'Real-world examples of tag usage',
    code: `{/* Status indicators */}
<div className="status-tags">
  <Tag type="success" size="small">Published</Tag>
  <Tag type="warning" size="small">Draft</Tag>
  <Tag type="error" size="small">Archived</Tag>
</div>

{/* Category labels */}
<div className="category-tags">
  <Tag shape="rounded" size="small">React</Tag>
  <Tag shape="rounded" size="small">TypeScript</Tag>
  <Tag shape="rounded" size="small">UI/UX</Tag>
</div>

{/* Filter tags */}
<div className="filter-tags">
  <Tag type="filter" size="small">Price: $0-$50</Tag>
  <Tag type="filter" size="small">Rating: 4+ stars</Tag>
  <Tag type="filter" size="small">In Stock</Tag>
</div>

{/* Priority indicators */}
<div className="priority-tags">
  <Tag backgroundColor="var(--color-red-70)" textColor="white" size="mini">High</Tag>
  <Tag backgroundColor="var(--color-orange-70)" textColor="white" size="mini">Medium</Tag>
  <Tag backgroundColor="var(--color-green-70)" textColor="white" size="mini">Low</Tag>
</div>`,
    component: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Status indicators</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Tag type="success" size="small">Published</Tag>
            <Tag type="warning" size="small">Draft</Tag>
            <Tag type="error" size="small">Archived</Tag>
          </div>
        </div>
        
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Category labels</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Tag shape="rounded" size="small">React</Tag>
            <Tag shape="rounded" size="small">TypeScript</Tag>
            <Tag shape="rounded" size="small">UI/UX</Tag>
          </div>
        </div>
        
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Filter tags</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Tag type="filter" size="small">Price: $0-$50</Tag>
            <Tag type="filter" size="small">Rating: 4+ stars</Tag>
            <Tag type="filter" size="small">In Stock</Tag>
          </div>
        </div>
        
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Priority indicators</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Tag backgroundColor="var(--color-red-70)" textColor="white" size="mini">High</Tag>
            <Tag backgroundColor="var(--color-orange-70)" textColor="white" size="mini">Medium</Tag>
            <Tag backgroundColor="var(--color-green-70)" textColor="white" size="mini">Low</Tag>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">shape</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'rectangular' | 'rectangular-subtle' | 'rounded' | 'rounded-subtle'</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">'rectangular'</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">The visual shape and style of the tag</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'medium' | 'small' | 'mini'</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">'medium'</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">The size of the tag</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">type</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'default' | 'filter' | 'info' | 'error' | 'success' | 'warning'</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">'default'</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">The semantic type of tag with predefined colors</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">backgroundColor</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Custom background color (overrides type)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">textColor</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Custom text color (overrides type)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Tag content/label</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Tags() {
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