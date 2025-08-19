import React, { useState } from 'react';
import { Accordion } from '@prism/accordion';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'accordion',
  name: 'Accordion',
  category: 'Navigation',
  description: 'The Accordion component provides a vertically stacked set of interactive headings that users can expand or collapse to show and hide related content. It helps manage large amounts of content in a compact space.',
  usage: {
    whenToUse: [
      'To organize large amounts of content in a compact space',
      'When users need to scan headings and selectively reveal content',
      'For FAQ sections or help documentation',
      'To reduce cognitive load by hiding non-essential content',
      'In mobile-friendly layouts where screen space is limited'
    ],
    whenNotToUse: [
      'For critical content that users should always see',
      'When content needs to be scanned at a glance',
      'In contexts where layout consistency is essential (e.g., data tables)',
      'For sequential workflows where users need to complete all steps'
    ],
    anatomy: [
      { element: 'Accordion container', description: 'Groups multiple accordion items' },
      { element: 'Accordion item', description: 'One expandable/collapsible section' },
      { element: 'Trigger', description: 'Clickable header that controls expand/collapse' },
      { element: 'Content panel', description: 'Collapsible content area' },
      { element: 'Chevron icon', description: 'Visual indicator for expand/collapse state' }
    ],
    accessibility: [
      'Use button elements for accordion headers',
      'Apply aria-expanded="true/false" to each header',
      'Use role="region" for each panel',
      'Connect panels with aria-labelledby pointing to header id',
      'Support keyboard navigation with Tab and Enter/Space',
      'Include arrow key navigation between accordion items'
    ],
    dosDonts: {
      dos: ['Use clear, descriptive titles', 'Support keyboard navigation', 'Use smooth animations for state changes', 'Allow multiple items open when appropriate'],
      donts: ['Use vague labels like "More"', 'Nest accordions too deeply', 'Use abrupt, jarring transitions', 'Hide critical information in collapsed state']
    }
  }
};

// Component stories with live examples  
const AccordionDemo = (): ComponentStory[] => {
  const basicItems = [
    {
      id: "item-1",
      title: "General Information",
      content: (
        <div className="space-y-4">
          <p>This section contains general information about the product features and capabilities.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Feature overview and benefits</li>
            <li>System requirements</li>
            <li>Compatible platforms</li>
          </ul>
        </div>
      ),
      defaultOpen: true
    },
    {
      id: "item-2", 
      title: "Configuration Settings",
      content: (
        <div className="space-y-4">
          <p>Configure your application settings and preferences here.</p>
          <div className="bg-gray-50 p-4 rounded">
            <code>configuration.json</code> - Main config file
          </div>
        </div>
      )
    },
    {
      id: "item-3",
      title: "Troubleshooting",
      content: (
        <div className="space-y-4">
          <p>Common issues and their solutions:</p>
          <div className="space-y-2">
            <div><strong>Issue:</strong> Installation fails</div>
            <div><strong>Solution:</strong> Check system requirements and permissions</div>
          </div>
        </div>
      )
    }
  ];

  const multipleItems = [
    {
      id: "faq-1",
      title: "How do I get started?",
      content: <p>Follow the quick start guide in the documentation to set up your environment and create your first project.</p>
    },
    {
      id: "faq-2",
      title: "What are the system requirements?",
      content: (
        <div className="space-y-2">
          <p><strong>Minimum:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>4GB RAM</li>
            <li>2GB disk space</li>
            <li>Modern web browser</li>
          </ul>
        </div>
      ),
      defaultOpen: true
    },
    {
      id: "faq-3",
      title: "How do I contact support?",
      content: <p>Reach out to our support team at support@example.com or through the in-app help system.</p>,
      defaultOpen: true
    }
  ];

  const componentStories: ComponentStory[] = [
    {
      id: 'basic-single',
      name: 'Basic Single Accordion',
      description: 'A simple accordion that allows only one item to be open at a time.',
      code: `<Accordion 
  items={basicItems}
  type="single"
  collapsible={true}
/>`,
      component: (
        <Accordion 
          items={basicItems}
          type="single"
          collapsible={true}
        />
      )
    },
    {
      id: 'multiple-selection',
      name: 'Multiple Selection Accordion', 
      description: 'An accordion that allows multiple items to be open simultaneously.',
      code: `<Accordion 
  items={multipleItems}
  type="multiple"
/>`,
      component: (
        <Accordion 
          items={multipleItems}
          type="multiple"
        />
      )
    },
    {
      id: 'bordered-variant',
      name: 'Bordered Variant',
      description: 'Accordion with bordered styling for better visual separation.',
      code: `<Accordion 
  items={basicItems.slice(0, 2)}
  type="single"
  variant="bordered"
/>`,
      component: (
        <Accordion 
          items={basicItems.slice(0, 2)}
          type="single"
          variant="bordered"
        />
      )
    },
    {
      id: 'small-size',
      name: 'Small Size',
      description: 'Compact accordion with smaller padding and font sizes.',
      code: `<Accordion 
  items={basicItems.slice(0, 2)}
  type="single"
  size="small"
/>`,
      component: (
        <Accordion 
          items={basicItems.slice(0, 2)}
          type="single"
          size="small"
        />
      )
    },
    {
      id: 'disabled-items',
      name: 'With Disabled Item',
      description: 'Accordion with some items disabled to prevent user interaction.',
      code: `<Accordion 
  items={[
    ...basicItems.slice(0, 2),
    {
      id: "disabled-item",
      title: "Disabled Section",
      content: <p>This content cannot be accessed.</p>,
      disabled: true
    }
  ]}
  type="single"
/>`,
      component: (
        <Accordion 
          items={[
            ...basicItems.slice(0, 2),
            {
              id: "disabled-item",
              title: "Disabled Section",
              content: <p>This content cannot be accessed.</p>,
              disabled: true
            }
          ]}
          type="single"
        />
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">items</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">AccordionItem[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm"><strong>Required.</strong> Array of accordion items with id, title, content</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">type</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"single" | "multiple"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"single"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether to allow single or multiple items open</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">collapsible</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether items can be collapsed when open</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"default" | "bordered" | "flush"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"default"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Visual styling variant</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"small" | "medium" | "large"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"medium"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Size variant affecting padding and typography</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function AccordionPage() {
  const accordionDemo = AccordionDemo();
  
  return (
    <ComponentShowcase 
      component={componentInfo}
      stories={accordionDemo}
      propsTable={<PropsTable />}
    />
  );
}
