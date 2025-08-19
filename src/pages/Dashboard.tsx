import { useState } from 'react'
import { PageTemplate } from '@prism/page-template'
import { Card } from '@prism/card'
import { Chart } from '@prism/chart'
import { Button } from '@prism/button'
import { Icon } from '@prism/icon'

export default function Dashboard() {
  const [isNavOpen, setIsNavOpen] = useState(true)

  const lineChartOptions = {
    title: { text: '' },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      title: { text: 'Month' }
    },
    yAxis: {
      title: { text: 'Users' }
    },
    series: [{
      type: 'line' as const,
      name: 'Active Users',
      data: [4394, 5250, 5717, 6965, 9703, 11993]
    }]
  }

  const barChartOptions = {
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
      name: '2024',
      data: [49900, 71500, 106400, 129200]
    }]
  }

  const areaChartOptions = {
    chart: { type: 'area' },
    title: { text: '' },
    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      title: { text: 'Day' }
    },
    yAxis: {
      title: { text: 'Sessions' }
    },
    series: [{
      type: 'area' as const,
      name: 'Daily Sessions',
      data: [1235, 2351, 1800, 2100, 1750, 900, 800]
    }]
  }

  const pieChartOptions = {
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
  }

  return (
    <PageTemplate
      isNavOpen={isNavOpen}
      onNavToggle={() => setIsNavOpen(!isNavOpen)}
      selectedNavItem="dashboards"
      title="Dashboard"
      description="Overview of key metrics and performance indicators"
      attribution={{
        author: "Analytics Team"
      }}
      lastUpdated="Just now"
      actions={
        <Button variant="secondary">
          <Icon name="Download" size="small" className="mr-1" />
          Export
        </Button>
      }
    >
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <Card title="User Growth">
            <Chart options={lineChartOptions} />
          </Card>
          <Card title="Revenue">
            <Chart options={barChartOptions} />
          </Card>
          <Card title="Daily Sessions">
            <Chart options={areaChartOptions} />
          </Card>
          <Card title="Device Distribution">
            <Chart options={pieChartOptions} />
          </Card>
        </div>
      </div>
    </PageTemplate>
  )
}