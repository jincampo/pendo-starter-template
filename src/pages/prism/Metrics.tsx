import React from 'react';
import { Metric } from '@prism/metric';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'metrics',
  name: 'Metrics',
  category: 'Data Display',
  description: 'Metrics display numerical data and statistics with optional context, change indicators, and loading states. They provide a clear, scannable way to present key performance indicators and data points.',
  usage: {
    whenToUse: [
      'For displaying key performance indicators (KPIs)',
      'To show numerical data with context and trends',
      'In dashboards and analytics interfaces',
      'For presenting statistics that need emphasis',
      'When showing progress toward goals or targets'
    ],
    whenNotToUse: [
      'For non-numerical data (use other display components)',
      'When detailed explanations are needed (use cards or sections)',
      'For interactive data manipulation',
      'When precise values are less important than trends',
      'For comparative data that needs tabular layout'
    ],
    anatomy: [
      { element: 'Metric value', description: 'The primary numerical value being displayed' },
      { element: 'Series name', description: 'Label identifying what the metric represents' },
      { element: 'Unit label', description: 'Additional context about the metric units or meaning' },
      { element: 'Change indicator', description: 'Shows positive, negative, or neutral change trends' },
      { element: 'Secondary label', description: 'Optional additional context or timestamp information' }
    ],
    accessibility: [
      'Provide clear, descriptive labels for all metrics',
      'Use appropriate heading levels for metric titles',
      'Ensure sufficient color contrast for change indicators',
      'Don\'t rely solely on color to convey positive/negative changes',
      'Include textual descriptions for complex metrics'
    ],
    dosDonts: {
      dos: ['Use consistent formatting across similar metrics', 'Provide meaningful context and labels', 'Choose appropriate precision for numerical values'],
      donts: ['Show too many decimal places for large numbers', 'Use metrics for non-quantitative data', 'Overload displays with too many metrics']
    }
  }
};

// Component stories with live examples
const componentStories: ComponentStory[] = [
  {
    id: 'metric-sizes',
    name: 'Metric Sizes',
    description: 'Different sizes for various use cases and visual hierarchy',
    code: `{/* Large - For primary KPIs */}
<Metric
  size="large"
  metricText="1,234"
  seriesName="Total Users"
  unitLabel="Active monthly users"
/>

{/* Medium - For secondary metrics */}
<Metric
  size="medium"
  metricText="85.3%"
  seriesName="Conversion Rate"
  unitLabel="This month"
/>

{/* Small - For compact displays */}
<Metric
  size="small"
  metricText="$12.4k"
  seriesName="Revenue"
  unitLabel="Today"
/>

{/* Extra Small - For minimal footprint */}
<Metric
  size="xs"
  metricText="127"
  seriesName="New Signups"
  unitLabel="Last 24h"
/>`,
    component: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: 'var(--spacing-lg)',
        maxWidth: '800px'
      }}>
        <Metric
          size="large"
          metricText="1,234"
          seriesName="Total Users"
          unitLabel="Active monthly users"
        />
        <Metric
          size="medium"
          metricText="85.3%"
          seriesName="Conversion Rate"
          unitLabel="This month"
        />
        <Metric
          size="small"
          metricText="$12.4k"
          seriesName="Revenue"
          unitLabel="Today"
        />
        <Metric
          size="xs"
          metricText="127"
          seriesName="New Signups"
          unitLabel="Last 24h"
        />
      </div>
    )
  },
  {
    id: 'change-indicators',
    name: 'Change Indicators',
    description: 'Show trends with positive, negative, or neutral change indicators',
    code: `{/* Positive change */}
<Metric
  size="medium"
  metricText="85.3%"
  seriesName="Conversion Rate"
  unitLabel="This month"
  changeMetric="12.5%"
  changeMetricType="positive"
/>

{/* Negative change */}
<Metric
  size="medium"
  metricText="$12.4k"
  seriesName="Revenue"
  unitLabel="This week"
  changeMetric="8.1%"
  changeMetricType="negative"
/>

{/* Neutral change */}
<Metric
  size="medium"
  metricText="1,234"
  seriesName="Page Views"
  unitLabel="Today"
  changeMetric="0%"
  changeMetricType="neutral"
/>`,
    component: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: 'var(--spacing-lg)'
      }}>
        <Metric
          size="medium"
          metricText="85.3%"
          seriesName="Conversion Rate"
          unitLabel="This month"
          changeMetric="12.5%"
          changeMetricType="positive"
        />
        <Metric
          size="medium"
          metricText="$12.4k"
          seriesName="Revenue"
          unitLabel="This week"
          changeMetric="8.1%"
          changeMetricType="negative"
        />
        <Metric
          size="medium"
          metricText="1,234"
          seriesName="Page Views"
          unitLabel="Today"
          changeMetric="0%"
          changeMetricType="neutral"
        />
      </div>
    )
  },
  {
    id: 'alignment-options',
    name: 'Alignment Options',
    description: 'Left-aligned (default) and center-aligned metrics',
    code: `{/* Left aligned (default) */}
<div className="metric-container">
  <Metric
    size="medium"
    alignment="left"
    metricText="98.1%"
    seriesName="Uptime"
    unitLabel="Last 30 days"
    changeMetric="0.2%"
    changeMetricType="positive"
  />
</div>

{/* Center aligned */}
<div className="metric-container">
  <Metric
    size="medium"
    alignment="center"
    metricText="1.2s"
    seriesName="Response Time"
    unitLabel="Average"
    changeMetric="0.1s"
    changeMetricType="negative"
  />
</div>`,
    component: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: 'var(--spacing-lg)'
      }}>
        <div style={{ 
          border: '1px solid var(--color-gray-30)', 
          borderRadius: '4px', 
          padding: 'var(--spacing-md)' 
        }}>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Left Aligned</h4>
          <Metric
            size="medium"
            alignment="left"
            metricText="98.1%"
            seriesName="Uptime"
            unitLabel="Last 30 days"
            changeMetric="0.2%"
            changeMetricType="positive"
          />
        </div>
        <div style={{ 
          border: '1px solid var(--color-gray-30)', 
          borderRadius: '4px', 
          padding: 'var(--spacing-md)' 
        }}>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Center Aligned</h4>
          <Metric
            size="medium"
            alignment="center"
            metricText="1.2s"
            seriesName="Response Time"
            unitLabel="Average"
            changeMetric="0.1s"
            changeMetricType="negative"
          />
        </div>
      </div>
    )
  },
  {
    id: 'loading-states',
    name: 'Loading States',
    description: 'Loading skeleton while data is being fetched',
    code: `{/* Loading state */}
<Metric
  size="large"
  state="loading"
  metricText="--"
  seriesName="Loading"
  unitLabel="loading"
  changeMetric="--"
/>

<Metric
  size="medium"
  state="loading"
  metricText="--"
  seriesName="Loading"
  unitLabel="loading"
/>`,
    component: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: 'var(--spacing-lg)'
      }}>
        <Metric
          size="large"
          state="loading"
          metricText="--"
          seriesName="Loading"
          unitLabel="loading"
          changeMetric="--"
        />
        <Metric
          size="medium"
          state="loading"
          metricText="--"
          seriesName="Loading"
          unitLabel="loading"
        />
      </div>
    )
  },
  {
    id: 'optional-elements',
    name: 'Optional Elements',
    description: 'Control which elements of the metric are displayed',
    code: `{/* All elements shown */}
<Metric
  size="medium"
  metricText="1,234"
  seriesName="Total Visitors"
  unitLabel="Unique visitors"
  secondaryLabel="Updated 2 minutes ago"
  changeMetric="5%"
  changeMetricType="positive"
/>

{/* Minimal metric - only value */}
<Metric
  size="medium"
  metricText="1,234"
  showSeriesName={false}
  showUnitLabel={false}
  showSecondaryLabel={false}
  showChangeMetric={false}
/>`,
    component: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: 'var(--spacing-lg)'
      }}>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Complete Metric</h4>
          <Metric
            size="medium"
            metricText="1,234"
            seriesName="Total Visitors"
            unitLabel="Unique visitors"
            secondaryLabel="Updated 2 minutes ago"
            changeMetric="5%"
            changeMetricType="positive"
          />
        </div>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Minimal Metric</h4>
          <Metric
            size="medium"
            metricText="1,234"
            showSeriesName={false}
            showUnitLabel={false}
            showSecondaryLabel={false}
            showChangeMetric={false}
          />
        </div>
      </div>
    )
  },
  {
    id: 'dashboard-example',
    name: 'Dashboard Example',
    description: 'Real-world metrics layout for a dashboard',
    code: `<div className="dashboard-metrics">
  <div className="metric-grid">
    <Metric
      size="large"
      metricText="$24.8k"
      seriesName="Revenue"
      unitLabel="This month"
      changeMetric="18.2%"
      changeMetricType="positive"
      secondaryLabel="vs last month"
    />
    
    <Metric
      size="medium"
      metricText="1,429"
      seriesName="New Customers"
      unitLabel="This month"
      changeMetric="12.5%"
      changeMetricType="positive"
    />
    
    <Metric
      size="medium"
      metricText="94.2%"
      seriesName="Customer Satisfaction"
      unitLabel="Average rating"
      changeMetric="2.1%"
      changeMetricType="positive"
    />
    
    <Metric
      size="medium"
      metricText="156"
      seriesName="Support Tickets"
      unitLabel="Open tickets"
      changeMetric="8%"
      changeMetricType="negative"
    />
  </div>
</div>`,
    component: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: 'var(--spacing-md)',
        padding: 'var(--spacing-lg)',
        backgroundColor: 'var(--color-gray-10)',
        borderRadius: '8px'
      }}>
        <Metric
          size="large"
          metricText="$24.8k"
          seriesName="Revenue"
          unitLabel="This month"
          changeMetric="18.2%"
          changeMetricType="positive"
          secondaryLabel="vs last month"
        />
        
        <Metric
          size="medium"
          metricText="1,429"
          seriesName="New Customers"
          unitLabel="This month"
          changeMetric="12.5%"
          changeMetricType="positive"
        />
        
        <Metric
          size="medium"
          metricText="94.2%"
          seriesName="Customer Satisfaction"
          unitLabel="Average rating"
          changeMetric="2.1%"
          changeMetricType="positive"
        />
        
        <Metric
          size="medium"
          metricText="156"
          seriesName="Support Tickets"
          unitLabel="Open tickets"
          changeMetric="8%"
          changeMetricType="negative"
        />
      </div>
    )
  },
  {
    id: 'different-contexts',
    name: 'Different Contexts',
    description: 'Metrics in various formatting contexts',
    code: `{/* Financial metrics */}
<Metric
  size="medium"
  metricText="$1.2M"
  seriesName="Annual Revenue"
  unitLabel="Projected"
  changeMetric="24%"
  changeMetricType="positive"
/>

{/* Time-based metrics */}
<Metric
  size="medium"
  metricText="2m 34s"
  seriesName="Average Session"
  unitLabel="Duration"
  changeMetric="15s"
  changeMetricType="positive"
/>

{/* Percentage metrics */}
<Metric
  size="medium"
  metricText="99.9%"
  seriesName="Uptime"
  unitLabel="Last 30 days"
  changeMetric="0.1%"
  changeMetricType="positive"
/>

{/* Large number metrics */}
<Metric
  size="medium"
  metricText="2.4M"
  seriesName="Page Views"
  unitLabel="This month"
  changeMetric="340K"
  changeMetricType="positive"
/>`,
    component: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: 'var(--spacing-md)'
      }}>
        <Metric
          size="medium"
          metricText="$1.2M"
          seriesName="Annual Revenue"
          unitLabel="Projected"
          changeMetric="24%"
          changeMetricType="positive"
        />
        
        <Metric
          size="medium"
          metricText="2m 34s"
          seriesName="Average Session"
          unitLabel="Duration"
          changeMetric="15s"
          changeMetricType="positive"
        />
        
        <Metric
          size="medium"
          metricText="99.9%"
          seriesName="Uptime"
          unitLabel="Last 30 days"
          changeMetric="0.1%"
          changeMetricType="positive"
        />
        
        <Metric
          size="medium"
          metricText="2.4M"
          seriesName="Page Views"
          unitLabel="This month"
          changeMetric="340K"
          changeMetricType="positive"
        />
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"xs" | "small" | "medium" | "large"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"medium"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Size variant for the metric display</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">alignment</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"left" | "center"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"left"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Text alignment for the metric content</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">state</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"loaded" | "loading"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"loaded"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Loading state of the metric</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">metricText</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm"><strong>Required.</strong> The main metric value to display</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">seriesName</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Label identifying what the metric represents</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">unitLabel</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Additional context about units or timeframe</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">secondaryLabel</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Optional additional descriptive text</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">changeMetric</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Change value to display (e.g., percentage or absolute)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">changeMetricType</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"positive" | "negative" | "neutral"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"positive"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Type of change for styling and icon</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showSeriesName</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether to show the series name</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showUnitLabel</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether to show the unit label</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showChangeMetric</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether to show the change metric</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Metrics() {
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