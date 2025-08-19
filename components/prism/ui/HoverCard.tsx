import * as React from 'react';
import { Icon } from './icon';
import { MetricProps } from './metric';

export interface HoverCardProps {
  title: string;
  subheading?: string;
  subheadingIcon?: string;
  body: string;
  metrics: MetricProps[];
  onViewRules?: () => void;
  rulesCount?: number;
  borderless?: boolean;
  tag?: React.ReactNode;
}

export const HoverCard: React.FC<HoverCardProps> = ({
  title,
  subheading,
  subheadingIcon,
  body,
  metrics,
  onViewRules,
  rulesCount = 0,
  borderless = false,
  tag,
}) => {
  return (
    <div
      className={
        `relative rounded-[3px] p-4 bg-white w-full` +
        (borderless ? '' : ' border border-[var(--color-gray-40)]')
      }
      style={borderless ? {} : { boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.17)' }}
    >
      {/* Tag and View details row (only if tag is present) */}
      {tag && (
        <div className="flex justify-between items-center" style={{ marginBottom: 12 }}>
          <div>{tag}</div>
          <div className="flex flex-col items-end">
            <button className="tertiary-link text-[var(--color-teal-70)] text-xs font-medium hover:underline focus:outline-none" type="button">
              View details <Icon name="ArrowRight" size="small" className="inline ml-1 align-text-bottom" />
            </button>
          </div>
        </div>
      )}
      {/* Header Row */}
      <div className="flex justify-between items-start gap-2 min-w-0 mb-0.5">
        <div className="flex flex-col min-w-0">
          <div className="min-w-0">
            <div className="paragraph-base-bold text-[var(--color-gray-100)] truncate">{title}</div>
            {subheading && (
              <div className="flex items-center gap-1 paragraph-small text-[var(--color-gray-70)] mt-0.5">
                {subheadingIcon && <Icon name={subheadingIcon as any} size="small" className="text-[var(--color-gray-60)]" />}
                <span className="truncate">{subheading}</span>
              </div>
            )}
          </div>
        </div>
        {/* View details button (only if tag is not present) */}
        {!tag && (
          <div className="flex flex-col items-end">
            <button className="tertiary-link text-[var(--color-teal-70)] text-xs font-medium hover:underline focus:outline-none" type="button">
              View details <Icon name="ArrowRight" size="small" className="inline ml-1 align-text-bottom" />
            </button>
          </div>
        )}
      </div>
      {/* Divider */}
      <div className="border-t border-[var(--color-gray-40)] my-3" />
      {/* Body */}
      <div className="paragraph-small text-[var(--color-gray-100)] mt-2 mb-2" style={{ whiteSpace: 'normal', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
        {body}
      </div>
      {/* View rules link */}
      {onViewRules && (
        <button className="tertiary-link text-[var(--color-teal-70)] text-xs font-medium mb-2 hover:underline focus:outline-none" onClick={onViewRules} type="button">
          View rules{rulesCount ? ` (${rulesCount})` : ''}
        </button>
      )}
      {/* Metrics Header */}
      <div className="mt-4 mb-1 flex items-center gap-2">
        <span className="paragraph-small-bold text-[var(--color-gray-70)]">Metrics</span>
        <span className="text-[10px] text-[var(--color-gray-70)] font-normal">Last 30 days</span>
      </div>
      {/* Metrics */}
      <div className="mb-0">
        <div className={`flex w-full rounded-[3px] bg-[var(--color-gray-20)] overflow-hidden`}>
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`flex-1 flex flex-col items-center justify-center py-2 px-2 ${i !== 0 ? 'border-l border-[var(--color-gray-40)]' : ''}`}
            >
              <div className="paragraph-base-bold text-[var(--color-gray-100)] mb-0.5">{metric.metricText}</div>
              {metric.seriesName && (
                <div className="paragraph-small text-[var(--color-gray-70)] text-center">{metric.seriesName}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 