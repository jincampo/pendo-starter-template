import React from 'react';
import { HoverCard } from '../../../components/prism/ui/HoverCard';
import { Tag } from '../../../components/prism/ui/tag';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'hover-card',
  name: 'Hover Card',
  category: 'Data Display',
  description: 'Hover cards are used to display contextual information and metrics in a compact, interactive format. They can include a title, subheading, body, metrics, and actions.',
  usage: {
    whenToUse: [
      'To display contextual information and metrics',
      'For compact, interactive data displays',
      'When showing related information on hover or focus',
      'For dashboard widgets and summary cards',
      'To present metrics with visual hierarchy'
    ],
    whenNotToUse: [
      'For primary navigation elements', 
      'When information should always be visible',
      'For complex forms or detailed content',
      'When the card content is too large for the format'
    ],
    accessibility: [
      'Include proper ARIA labels for interactive elements',
      'Ensure keyboard navigation support',
      'Maintain adequate color contrast ratios',
      'Provide alt text for icons and visual elements'
    ]
  }
};

const metricsExample = [
  { metricText: '1,234', seriesName: 'Views' },
  { metricText: '567', seriesName: 'Clicks' },
  { metricText: '89%', seriesName: 'CTR' },
];

// Component stories with live examples  
const HoverCardDemo = (): ComponentStory[] => {
  return [
    {
      id: 'basic',
      name: 'Basic Hover Card',
      description: 'A simple hover card with a title, body, and metrics.',
      code: `<HoverCard
  title="Feature Usage"
  body="This feature helps users complete their workflow faster."
  metrics={[
    { metricText: '1,234', seriesName: 'Views' },
    { metricText: '567', seriesName: 'Clicks' },
    { metricText: '89%', seriesName: 'CTR' },
  ]}
/>`,
      component: (
        <div className="max-w-md">
          <HoverCard
            title="Feature Usage"
            body="This feature helps users complete their workflow faster."
            metrics={metricsExample}
          />
        </div>
      )
    },
    {
      id: 'with-subheading',
      name: 'With Subheading and Icon',
      description: 'Add a subheading and icon for more context.',
      code: `<HoverCard
  title="Engagement"
  subheading="Product Analytics"
  subheadingIcon="BarChart"
  body="Track how users interact with your product features."
  metrics={metricsExample}
/>`,
      component: (
        <div className="max-w-md">
          <HoverCard
            title="Engagement"
            subheading="Product Analytics"
            subheadingIcon="BarChart"
            body="Track how users interact with your product features."
            metrics={metricsExample}
          />
        </div>
      )
    },
    {
      id: 'with-view-rules',
      name: 'With View Rules Action',
      description: 'Show a link to view rules, with a count.',
      code: `<HoverCard
  title="Conversion Rules"
  body="Active rules that determine when conversions are tracked."
  metrics={metricsExample}
  viewRules={{
    count: 3,
    onClick: () => console.log('View rules clicked')
  }}
/>`,
      component: (
        <div className="max-w-md">
          <HoverCard
            title="Conversion Rules"
            body="Active rules that determine when conversions are tracked."
            metrics={metricsExample}
            viewRules={{
              count: 3,
              onClick: () => console.log('View rules clicked')
            }}
          />
        </div>
      )
    },
    {
      id: 'with-tag',
      name: 'With Tag Action',
      description: 'Include a tag action with custom styling and behavior.',
      code: `<HoverCard
  title="Segment Performance"
  body="Performance data for your targeted user segments."
  metrics={metricsExample}
  tagAction={{
    label: "High Priority",
    variant: "warning",
    onClick: () => console.log('Tag clicked')
  }}
/>`,
      component: (
        <div className="max-w-md">
          <HoverCard
            title="Segment Performance"
            body="Performance data for your targeted user segments."
            metrics={metricsExample}
            tagAction={{
              label: "High Priority",
              variant: "warning",
              onClick: () => console.log('Tag clicked')
            }}
          />
        </div>
      )
    },
    {
      id: 'complex',
      name: 'Complex Example',
      description: 'A hover card with all features: subheading, icon, view rules, and tag action.',
      code: `<HoverCard
  title="Campaign Analytics"
  subheading="Marketing Dashboard"
  subheadingIcon="TrendingUp"
  body="Comprehensive performance metrics for your marketing campaigns."
  metrics={[
    { metricText: '2,456', seriesName: 'Total Leads' },
    { metricText: '18.5%', seriesName: 'Conversion Rate' },
    { metricText: '₹45,230', seriesName: 'Revenue' },
  ]}
  viewRules={{
    count: 8,
    onClick: () => console.log('View campaign rules')
  }}
  tagAction={{
    label: "Active Campaign",
    variant: "success",
    onClick: () => console.log('Campaign tag clicked')
  }}
/>`,
      component: (
        <div className="max-w-md">
          <HoverCard
            title="Campaign Analytics"
            subheading="Marketing Dashboard"
            subheadingIcon="TrendingUp"
            body="Comprehensive performance metrics for your marketing campaigns including conversion rates and engagement."
            metrics={[
              { metricText: '2,456', seriesName: 'Total Leads' },
              { metricText: '18.5%', seriesName: 'Conversion Rate' },
              { metricText: '₹45,230', seriesName: 'Revenue' },
            ]}
            viewRules={{
              count: 8,
              onClick: () => console.log('View campaign rules')
            }}
            tagAction={{
              label: "Active Campaign",
              variant: "success",
              onClick: () => console.log('Campaign tag clicked')
            }}
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
          <td className="border border-gray-300 px-4 py-2 text-sm">Main title of the hover card</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">subheading</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Optional subheading text</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">subheadingIcon</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Lucide icon name for subheading</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">body</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Main body text content</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">metrics</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Array&lt;{metricText: string, seriesName: string}&gt;</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Array of metric objects to display</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">viewRules</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">{count: number, onClick: function}</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">View rules action with count and click handler</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">tagAction</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">{label: string, variant: string, onClick: function}</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Tag action with label, variant, and click handler</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function HoverCardPage() {
  const hoverCardDemo = HoverCardDemo();
  
  return (
    <ComponentShowcase 
      component={componentInfo}
      stories={hoverCardDemo}
      propsTable={<PropsTable />}
    />
  );
}