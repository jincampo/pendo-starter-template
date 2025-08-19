import React from 'react';
import { Chart } from '@prism/chart';
import { Card } from '@prism/card';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'charts',
  name: 'Charts',
  category: 'Data Visualization',
  description: 'Chart components use Highcharts to create beautiful, interactive data visualizations with consistent styling and accessibility features. They transform complex data into clear, actionable insights.',
  usage: {
    whenToUse: [
      'To visualize quantitative data and trends over time',
      'When comparing multiple data series or categories',
      'For showing relationships and patterns in datasets',
      'To present analytics and business intelligence data',
      'When users need to interact with data (zoom, filter, drill-down)'
    ],
    whenNotToUse: [
      'For simple numerical displays (use metrics instead)',
      'When data is too complex for visual representation',
      'For real-time data that changes rapidly',
      'When accessibility is the primary concern',
      'For decorative or non-functional visualizations'
    ],
    anatomy: [
      { element: 'Chart container', description: 'Wrapper element defining size and positioning' },
      { element: 'Plot area', description: 'Main area where data is visually represented' },
      { element: 'Axes', description: 'X and Y axis with labels, scales, and tick marks' },
      { element: 'Data series', description: 'Visual representation of data (lines, bars, points)' },
      { element: 'Legend', description: 'Key explaining what each data series represents' },
      { element: 'Tooltips', description: 'Interactive hover details for data points' }
    ],
    accessibility: [
      'Provide alternative text descriptions for screen readers',
      'Use sufficient color contrast and avoid relying solely on color',
      'Include data tables as fallbacks for complex charts',
      'Ensure keyboard navigation for interactive elements',
      'Use ARIA labels and roles for chart semantics'
    ],
    dosDonts: {
      dos: ['Choose appropriate chart types for your data', 'Use consistent colors and styling', 'Provide clear titles and axis labels'],
      donts: ['Overcomplicate charts with too many data series', 'Use misleading scales or truncated axes', 'Sacrifice clarity for visual appeal']
    }
  }
};

// Component stories with live examples
const componentStories: ComponentStory[] = [
  {
    id: 'line-chart',
    name: 'Line Chart',
    description: 'Perfect for showing trends and changes over time',
    code: `const lineChartOptions = {
  title: { text: '' },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    title: { text: 'Month' }
  },
  yAxis: {
    title: { text: 'Revenue ($)' }
  },
  series: [{
    type: 'line',
    name: 'Product A',
    data: [43934, 52503, 57177, 69658, 97031, 119931]
  }, {
    type: 'line',
    name: 'Product B', 
    data: [24916, 24064, 29742, 29851, 32490, 30282]
  }]
};

<Card title="Monthly Sales Trend">
  <Chart options={lineChartOptions} height="400px" />
</Card>`,
    component: (
      <Card title="Monthly Sales Trend">
        <Chart 
          options={{
            title: { text: '' },
            xAxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              title: { text: 'Month' }
            },
            yAxis: {
              title: { text: 'Revenue ($)' }
            },
            series: [{
              type: 'line' as const,
              name: 'Product A',
              data: [43934, 52503, 57177, 69658, 97031, 119931]
            }, {
              type: 'line' as const,
              name: 'Product B',
              data: [24916, 24064, 29742, 29851, 32490, 30282]
            }]
          }} 
          height="400px" 
        />
      </Card>
    )
  },
  {
    id: 'bar-chart',
    name: 'Bar Chart',
    description: 'Ideal for comparing quantities across different categories',
    code: `const barChartOptions = {
  chart: { type: 'column' },
  title: { text: '' },
  xAxis: {
    categories: ['Q1', 'Q2', 'Q3', 'Q4'],
    title: { text: 'Quarter' }
  },
  yAxis: {
    title: { text: 'Revenue ($)' }
  },
  series: [{
    type: 'column',
    name: '2023',
    data: [49.9, 71.5, 106.4, 129.2]
  }, {
    type: 'column', 
    name: '2024',
    data: [83.6, 78.8, 98.5, 93.4]
  }]
};

<Card title="Quarterly Revenue Comparison">
  <Chart options={barChartOptions} height="400px" />
</Card>`,
    component: (
      <Card title="Quarterly Revenue Comparison">
        <Chart 
          options={{
            chart: { type: 'column' },
            title: { text: '' },
            xAxis: {
              categories: ['Q1', 'Q2', 'Q3', 'Q4'],
              title: { text: 'Quarter' }
            },
            yAxis: {
              title: { text: 'Revenue ($)' }
            },
            series: [{
              type: 'column' as const,
              name: '2023',
              data: [49.9, 71.5, 106.4, 129.2]
            }, {
              type: 'column' as const,
              name: '2024',
              data: [83.6, 78.8, 98.5, 93.4]
            }]
          }} 
          height="400px" 
        />
      </Card>
    )
  },
  {
    id: 'pie-chart',
    name: 'Pie Chart',
    description: 'Best for showing composition and proportional relationships',
    code: `const pieChartOptions = {
  chart: { type: 'pie' },
  title: { text: '' },
  series: [{
    type: 'pie',
    name: 'Market Share',
    data: [
      ['Desktop', 45.0],
      ['Mobile', 35.8], 
      ['Tablet', 12.8],
      ['Other', 6.4]
    ]
  }]
};

<Card title="Device Market Share">
  <Chart options={pieChartOptions} height="400px" />
</Card>`,
    component: (
      <Card title="Device Market Share">
        <Chart 
          options={{
            chart: { type: 'pie' },
            title: { text: '' },
            series: [{
              type: 'pie' as const,
              name: 'Share',
              data: [
                ['Desktop', 45.0],
                ['Mobile', 35.8],
                ['Tablet', 12.8],
                ['Other', 6.4]
              ]
            }]
          }} 
          height="400px" 
        />
      </Card>
    )
  },
  {
    id: 'area-chart', 
    name: 'Area Chart',
    description: 'Shows cumulative totals and emphasizes volume over time',
    code: `const areaChartOptions = {
  chart: { type: 'area' },
  title: { text: '' },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  },
  yAxis: {
    title: { text: 'Users' }
  },
  series: [{
    type: 'area',
    name: 'New Users',
    data: [1200, 1850, 2300, 2100, 2800, 3200]
  }, {
    type: 'area',
    name: 'Returning Users', 
    data: [800, 1200, 1600, 1800, 2100, 2400]
  }]
};

<Card title="User Growth Over Time">
  <Chart options={areaChartOptions} height="350px" />
</Card>`,
    component: (
      <Card title="User Growth Over Time">
        <Chart 
          options={{
            chart: { type: 'area' },
            title: { text: '' },
            xAxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
              title: { text: 'Users' }
            },
            series: [{
              type: 'area' as const,
              name: 'New Users',
              data: [1200, 1850, 2300, 2100, 2800, 3200]
            }, {
              type: 'area' as const,
              name: 'Returning Users',
              data: [800, 1200, 1600, 1800, 2100, 2400]
            }]
          }} 
          height="350px" 
        />
      </Card>
    )
  },
  {
    id: 'scatter-plot',
    name: 'Scatter Plot',
    description: 'Reveals correlations and relationships between two variables',
    code: `const scatterOptions = {
  chart: { type: 'scatter' },
  title: { text: '' },
  xAxis: {
    title: { text: 'Marketing Spend ($)' }
  },
  yAxis: {
    title: { text: 'Revenue ($)' }
  },
  series: [{
    type: 'scatter',
    name: 'Campaigns',
    data: [
      [1000, 15000], [1500, 22000], [2000, 28000],
      [2500, 35000], [3000, 42000], [3500, 48000],
      [4000, 55000], [4500, 61000], [5000, 68000]
    ]
  }]
};

<Card title="Marketing ROI Analysis">
  <Chart options={scatterOptions} height="350px" />
</Card>`,
    component: (
      <Card title="Marketing ROI Analysis">
        <Chart 
          options={{
            chart: { type: 'scatter' },
            title: { text: '' },
            xAxis: {
              title: { text: 'Marketing Spend ($)' }
            },
            yAxis: {
              title: { text: 'Revenue ($)' }
            },
            series: [{
              type: 'scatter' as const,
              name: 'Campaigns',
              data: [
                [1000, 15000], [1500, 22000], [2000, 28000],
                [2500, 35000], [3000, 42000], [3500, 48000],
                [4000, 55000], [4500, 61000], [5000, 68000]
              ]
            }]
          }} 
          height="350px" 
        />
      </Card>
    )
  },
  {
    id: 'combo-chart',
    name: 'Combination Chart',
    description: 'Combines multiple chart types to show different data perspectives',
    code: `const comboOptions = {
  title: { text: '' },
  xAxis: {
    categories: ['Q1', 'Q2', 'Q3', 'Q4']
  },
  yAxis: [{
    title: { text: 'Revenue ($)' }
  }, {
    title: { text: 'Growth Rate (%)' },
    opposite: true
  }],
  series: [{
    type: 'column',
    name: 'Revenue',
    data: [89000, 95000, 102000, 108000],
    yAxis: 0
  }, {
    type: 'line',
    name: 'Growth Rate',
    data: [12, 8, 15, 6],
    yAxis: 1
  }]
};

<Card title="Revenue vs Growth Rate">
  <Chart options={comboOptions} height="350px" />
</Card>`,
    component: (
      <Card title="Revenue vs Growth Rate">
        <Chart 
          options={{
            title: { text: '' },
            xAxis: {
              categories: ['Q1', 'Q2', 'Q3', 'Q4']
            },
            yAxis: [{
              title: { text: 'Revenue ($)' }
            }, {
              title: { text: 'Growth Rate (%)' },
              opposite: true
            }],
            series: [{
              type: 'column' as const,
              name: 'Revenue',
              data: [89000, 95000, 102000, 108000],
              yAxis: 0
            }, {
              type: 'line' as const,
              name: 'Growth Rate',
              data: [12, 8, 15, 6],
              yAxis: 1
            }]
          }} 
          height="350px" 
        />
      </Card>
    )
  },
  {
    id: 'custom-styling',
    name: 'Custom Styling',
    description: 'Charts with custom colors and styling options',
    code: `const styledChartOptions = {
  chart: { 
    type: 'line',
    backgroundColor: 'transparent'
  },
  title: { text: '' },
  colors: ['#128297', '#10B981', '#F59E0B', '#EF4444'],
  plotOptions: {
    line: {
      lineWidth: 3,
      marker: {
        radius: 6
      }
    }
  },
  xAxis: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    gridLineWidth: 1
  },
  yAxis: {
    title: { text: 'Engagement' },
    gridLineWidth: 1
  },
  series: [{
    type: 'line',
    name: 'Email Opens',
    data: [65, 72, 68, 79]
  }, {
    type: 'line', 
    name: 'Click Through',
    data: [32, 38, 35, 42]
  }]
};

<Card title="Campaign Performance">
  <Chart options={styledChartOptions} height="300px" />
</Card>`,
    component: (
      <Card title="Campaign Performance">
        <Chart 
          options={{
            chart: { 
              type: 'line',
              backgroundColor: 'transparent'
            },
            title: { text: '' },
            colors: ['#128297', '#10B981', '#F59E0B', '#EF4444'],
            plotOptions: {
              line: {
                lineWidth: 3,
                marker: {
                  radius: 6
                }
              }
            },
            xAxis: {
              categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
              gridLineWidth: 1
            },
            yAxis: {
              title: { text: 'Engagement' },
              gridLineWidth: 1
            },
            series: [{
              type: 'line' as const,
              name: 'Email Opens',
              data: [65, 72, 68, 79]
            }, {
              type: 'line' as const,
              name: 'Click Through',
              data: [32, 38, 35, 42]
            }]
          }} 
          height="300px" 
        />
      </Card>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">options</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Highcharts.Options</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm"><strong>Required.</strong> Highcharts configuration object</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">height</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"400px"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Container height (CSS height value)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">width</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"100%"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Container width (CSS width value)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Additional CSS classes for the container</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onLoad</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(chart: Highcharts.Chart) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when chart is loaded and rendered</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">responsive</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Enable responsive behavior for different screen sizes</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Charts() {
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