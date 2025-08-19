import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';

export interface ChartProps {
  /** Highcharts configuration object */
  options: Highcharts.Options;
  /** Container height */
  height?: string;
  /** Container width */
  width?: string;
  /** Callback function when chart is loaded */
  onChartLoad?: (chart: Highcharts.Chart) => void;
}

const ChartContainer = styled.div<{ $height?: string; $width?: string }>`
  height: ${props => props.$height || '400px'};
  width: ${props => props.$width || '100%'};
`;

export const Chart: React.FC<ChartProps> = ({
  options,
  height,
  width,
  onChartLoad,
}) => {
  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);

  React.useEffect(() => {
    if (onChartLoad && chartComponentRef.current?.chart) {
      onChartLoad(chartComponentRef.current.chart);
    }
  }, [onChartLoad]);

  const defaultOptions: Highcharts.Options = {
    colors: [
      'var(--color-vis-blue-100)',
      'var(--color-vis-purple-100)',
      'var(--color-vis-magenta-100)',
      'var(--color-vis-orange-100)',
      'var(--color-vis-green-100)',
      'var(--color-vis-teal-100)',
    ],
    credits: {
      enabled: false,
    },
    title: {
      text: '',
      y: -9999,
      floating: true,
    },
    xAxis: {
      labels: {
        style: {
          fontSize: '11px',
          color: 'var(--color-gray-100)',
        },
      },
      title: {
        style: {
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          fontSize: 'var(--font-paragraph-base)',
          lineHeight: 'var(--line-height-paragraph)',
          fontWeight: '400',
          color: 'var(--color-gray-70)',
        },
        margin: 8
      },
    },
    yAxis: {
      labels: {
        style: {
          fontSize: '11px',
          color: 'var(--color-gray-100)',
        },
      },
      title: {
        style: {
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          fontSize: 'var(--font-paragraph-base)',
          lineHeight: 'var(--line-height-paragraph)',
          fontWeight: '400',
          color: 'var(--color-gray-70)',
        },
      },
    },
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      symbolWidth: 0,
      symbolHeight: 0,
      symbolRadius: 0,
      itemStyle: {
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        fontSize: 'var(--font-paragraph-small)',
        lineHeight: 'var(--line-height-paragraph)',
        fontWeight: '400',
        color: 'var(--color-gray-90)',
      },
      itemMarginBottom: 8,
      itemDistance: 12,
      useHTML: true,
      symbolPadding: 0,
      itemHoverStyle: {
        textDecoration: 'none',
      },
      y: 0,
      margin: 24,
      labelFormatter: function() {
        const color = (this as any).color || '#000000';
        return `<div style="
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          border: 1px solid var(--color-gray-40);
          border-radius: 3px;
          padding: 0 12px;
          height: 24px;
          white-space: nowrap;
          margin-left: 0;
        ">
          <div style="
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: ${color};
          "></div>
          ${this.name}
        </div>`;
      },
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 4,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
      line: {
        marker: {
          enabled: false,
        },
      },
    },
    ...options,
  };

  return (
    <ChartContainer $height={height} $width={width}>
      <HighchartsReact
        highcharts={Highcharts}
        options={defaultOptions}
        ref={chartComponentRef}
      />
    </ChartContainer>
  );
};