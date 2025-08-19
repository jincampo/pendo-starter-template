import React from 'react';
import { Tooltip } from '@prism/tooltip';
import { Button } from '@prism/button';
import { Icon } from '@prism/icon';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'tooltips',
  name: 'Tooltips',
  category: 'Feedback',
  description: 'Tooltips provide contextual information when users hover or focus on an element. They enhance understanding without cluttering the interface and offer helpful details on demand.',
  usage: {
    whenToUse: [
      'To explain the purpose of icon-only buttons',
      'For providing additional context without taking up space',
      'To clarify complex UI elements or features',
      'For form field help that doesn\'t warrant permanent display',
      'To show keyboard shortcuts or alternative actions'
    ],
    whenNotToUse: [
      'For critical information that users need to see',
      'On touch devices as the primary information source',
      'For long-form content or complex instructions',
      'When the information is already visible elsewhere',
      'For actionable content (use popovers instead)'
    ],
    anatomy: [
      { element: 'Trigger element', description: 'The element that activates the tooltip on hover/focus' },
      { element: 'Tooltip container', description: 'The popup containing the helpful information' },
      { element: 'Tooltip content', description: 'The explanatory text or brief description' },
      { element: 'Arrow/pointer', description: 'Visual indicator connecting tooltip to trigger' }
    ],
    accessibility: [
      'Use role="tooltip" for screen readers',
      'Connect with aria-describedby to the trigger element',
      'Support keyboard navigation (Escape to dismiss)',
      'Ensure tooltip content is readable by screen readers',
      'Don\'t trap focus within tooltips'
    ],
    dosDonts: {
      dos: ['Keep content brief and helpful', 'Position tooltips to avoid covering important content', 'Use consistent trigger behavior'],
      donts: ['Put critical information only in tooltips', 'Use tooltips for complex content', 'Make tooltips appear on touch devices only']
    }
  }
};

// Component stories with live examples
const componentStories: ComponentStory[] = [
  {
    id: 'basic-positions',
    name: 'Basic Tooltip Positions',
    description: 'Tooltips in different positions around trigger elements',
    code: `<div className="tooltip-positions">
  <Tooltip content="This tooltip appears on top" position="top">
    <Button variant="secondary">Top</Button>
  </Tooltip>

  <Tooltip content="This tooltip appears on the right" position="right">
    <Button variant="secondary">Right</Button>
  </Tooltip>

  <Tooltip content="This tooltip appears on the bottom" position="bottom">
    <Button variant="secondary">Bottom</Button>
  </Tooltip>

  <Tooltip content="This tooltip appears on the left" position="left">
    <Button variant="secondary">Left</Button>
  </Tooltip>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', alignItems: 'center' }}>
        <Tooltip content="This tooltip appears on top" position="top">
          <Button variant="secondary">Top</Button>
        </Tooltip>

        <Tooltip content="This tooltip appears on the right" position="right">
          <Button variant="secondary">Right</Button>
        </Tooltip>

        <Tooltip content="This tooltip appears on the bottom" position="bottom">
          <Button variant="secondary">Bottom</Button>
        </Tooltip>

        <Tooltip content="This tooltip appears on the left" position="left">
          <Button variant="secondary">Left</Button>
        </Tooltip>
      </div>
    )
  },
  {
    id: 'mini-tooltips',
    name: 'Mini Tooltips for Icons',
    description: 'Compact tooltips perfect for icon-only buttons',
    code: `<div className="icon-buttons">
  <Tooltip content="Edit" variant="mini">
    <button className="icon-button">
      <Icon name="Edit" size="small" />
    </button>
  </Tooltip>

  <Tooltip content="Delete" variant="mini">
    <button className="icon-button">
      <Icon name="Trash2" size="small" />
    </button>
  </Tooltip>

  <Tooltip content="Share" variant="mini">
    <button className="icon-button">
      <Icon name="Share" size="small" />
    </button>
  </Tooltip>

  <Tooltip content="More options" variant="mini">
    <button className="icon-button">
      <Icon name="MoreHorizontal" size="small" />
    </button>
  </Tooltip>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
        <Tooltip content="Edit" variant="mini">
          <button style={{ 
            padding: 'var(--spacing-xs)', 
            border: 'none', 
            background: 'transparent', 
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-20)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <Icon name="Edit" size="small" />
          </button>
        </Tooltip>

        <Tooltip content="Delete" variant="mini">
          <button style={{ 
            padding: 'var(--spacing-xs)', 
            border: 'none', 
            background: 'transparent', 
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-20)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <Icon name="Trash2" size="small" />
          </button>
        </Tooltip>

        <Tooltip content="Share" variant="mini">
          <button style={{ 
            padding: 'var(--spacing-xs)', 
            border: 'none', 
            background: 'transparent', 
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-20)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <Icon name="Share" size="small" />
          </button>
        </Tooltip>

        <Tooltip content="More options" variant="mini">
          <button style={{ 
            padding: 'var(--spacing-xs)', 
            border: 'none', 
            background: 'transparent', 
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-20)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <Icon name="MoreHorizontal" size="small" />
          </button>
        </Tooltip>
      </div>
    )
  },
  {
    id: 'trigger-options',
    name: 'Trigger Behaviors',
    description: 'Different ways to trigger tooltip display',
    code: `{/* Hover only */}
<Tooltip 
  content="This tooltip only appears on hover" 
  showOnFocus={false}
>
  <Button variant="tertiary">Hover only</Button>
</Tooltip>

{/* Focus only */}
<Tooltip 
  content="This tooltip only appears on focus (try tabbing to it)" 
  showOnHover={false}
>
  <Button variant="tertiary">Focus only</Button>
</Tooltip>

{/* Custom delay */}
<Tooltip 
  content="This tooltip has a longer delay (1 second)" 
  delay={1000}
>
  <Button variant="tertiary">Delayed tooltip</Button>
</Tooltip>`,
    component: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Hover Only</h4>
          <Tooltip 
            content="This tooltip only appears on hover" 
            showOnFocus={false}
          >
            <Button variant="tertiary">Hover only</Button>
          </Tooltip>
        </div>

        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Focus Only</h4>
          <Tooltip 
            content="This tooltip only appears on focus (try tabbing to it)" 
            showOnHover={false}
          >
            <Button variant="tertiary">Focus only</Button>
          </Tooltip>
        </div>

        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Custom Delay</h4>
          <Tooltip 
            content="This tooltip has a longer delay (1 second)" 
            delay={1000}
          >
            <Button variant="tertiary">Delayed tooltip</Button>
          </Tooltip>
        </div>
      </div>
    )
  },
  {
    id: 'data-table-actions',
    name: 'Data Table Actions',
    description: 'Tooltips used in table row actions',
    code: `<div className="table-row">
  <span>Campaign #1234</span>
  <div className="row-actions">
    <Tooltip content="View details" variant="mini">
      <button className="action-button">
        <Icon name="Eye" size="small" />
      </button>
    </Tooltip>
    
    <Tooltip content="Edit campaign" variant="mini">
      <button className="action-button">
        <Icon name="Edit" size="small" />
      </button>
    </Tooltip>
    
    <Tooltip content="Duplicate" variant="mini">
      <button className="action-button">
        <Icon name="Copy" size="small" />
      </button>
    </Tooltip>
    
    <Tooltip content="Delete campaign" variant="mini">
      <button className="action-button danger">
        <Icon name="Trash2" size="small" />
      </button>
    </Tooltip>
  </div>
</div>`,
    component: (
      <div style={{ 
        border: '1px solid var(--color-gray-40)', 
        borderRadius: '4px', 
        padding: 'var(--spacing-md)',
        maxWidth: '500px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Campaign #1234</span>
          <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
            <Tooltip content="View details" variant="mini">
              <button style={{ 
                padding: 'var(--spacing-xs)', 
                border: 'none', 
                background: 'transparent', 
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 150ms ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-20)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <Icon name="Eye" size="small" />
              </button>
            </Tooltip>
            
            <Tooltip content="Edit campaign" variant="mini">
              <button style={{ 
                padding: 'var(--spacing-xs)', 
                border: 'none', 
                background: 'transparent', 
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 150ms ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-20)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <Icon name="Edit" size="small" />
              </button>
            </Tooltip>
            
            <Tooltip content="Duplicate" variant="mini">
              <button style={{ 
                padding: 'var(--spacing-xs)', 
                border: 'none', 
                background: 'transparent', 
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 150ms ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-20)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <Icon name="Copy" size="small" />
              </button>
            </Tooltip>
            
            <Tooltip content="Delete campaign" variant="mini">
              <button style={{ 
                padding: 'var(--spacing-xs)', 
                border: 'none', 
                background: 'transparent', 
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 150ms ease',
                color: 'var(--color-red-60)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-red-10)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <Icon name="Trash2" size="small" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'form-help',
    name: 'Form Field Help',
    description: 'Tooltips providing additional context for form fields',
    code: `<div className="form-field">
  <div className="field-label">
    <label>API Key</label>
    <Tooltip 
      content="Your API key is used to authenticate requests to our service. Keep it secure!"
      position="right"
    >
      <Icon name="HelpCircle" size="small" className="help-icon" />
    </Tooltip>
  </div>
  <input 
    className="field-input" 
    placeholder="Enter your API key"
    type="password"
  />
</div>

<div className="form-field">
  <div className="field-label">
    <label>Webhook URL</label>
    <Tooltip 
      content="We'll send real-time notifications to this URL when events occur"
      position="right"
    >
      <Icon name="HelpCircle" size="small" className="help-icon" />
    </Tooltip>
  </div>
  <input 
    className="field-input" 
    placeholder="https://your-app.com/webhooks"
    type="url"
  />
</div>`,
    component: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', maxWidth: '400px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-xs)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>API Key</label>
            <Tooltip 
              content="Your API key is used to authenticate requests to our service. Keep it secure!"
              position="right"
            >
              <Icon name="HelpCircle" size="small" color="var(--color-gray-70)" />
            </Tooltip>
          </div>
          <input 
            style={{ 
              width: '100%', 
              padding: 'var(--spacing-sm)', 
              border: '1px solid var(--color-gray-50)', 
              borderRadius: '3px',
              fontSize: 'var(--font-size-sm)'
            }}
            placeholder="Enter your API key"
            type="password"
          />
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-xs)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>Webhook URL</label>
            <Tooltip 
              content="We'll send real-time notifications to this URL when events occur"
              position="right"
            >
              <Icon name="HelpCircle" size="small" color="var(--color-gray-70)" />
            </Tooltip>
          </div>
          <input 
            style={{ 
              width: '100%', 
              padding: 'var(--spacing-sm)', 
              border: '1px solid var(--color-gray-50)', 
              borderRadius: '3px',
              fontSize: 'var(--font-size-sm)'
            }}
            placeholder="https://your-app.com/webhooks"
            type="url"
          />
        </div>
      </div>
    )
  },
  {
    id: 'status-indicators',
    name: 'Status Indicators',
    description: 'Tooltips explaining status badges and indicators',
    code: `<div className="status-indicators">
  <Tooltip content="Campaign is active and running">
    <div className="status-item">
      <div className="status-dot active"></div>
      <span>Active</span>
    </div>
  </Tooltip>

  <Tooltip content="Campaign is paused">
    <div className="status-item">
      <div className="status-dot paused"></div>
      <span>Paused</span>
    </div>
  </Tooltip>

  <Tooltip content="Campaign has ended">
    <div className="status-item">
      <div className="status-dot ended"></div>
      <span>Ended</span>
    </div>
  </Tooltip>

  <Tooltip content="Campaign failed due to configuration error">
    <div className="status-item">
      <div className="status-dot error"></div>
      <span>Failed</span>
    </div>
  </Tooltip>
</div>`,
    component: (
      <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center', flexWrap: 'wrap' }}>
        <Tooltip content="Campaign is active and running">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'default' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              backgroundColor: 'var(--color-green-70)', 
              borderRadius: '50%' 
            }}></div>
            <span>Active</span>
          </div>
        </Tooltip>

        <Tooltip content="Campaign is paused">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'default' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              backgroundColor: 'var(--color-yellow-60)', 
              borderRadius: '50%' 
            }}></div>
            <span>Paused</span>
          </div>
        </Tooltip>

        <Tooltip content="Campaign has ended">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'default' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              backgroundColor: 'var(--color-gray-50)', 
              borderRadius: '50%' 
            }}></div>
            <span>Ended</span>
          </div>
        </Tooltip>

        <Tooltip content="Campaign failed due to configuration error">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'default' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              backgroundColor: 'var(--color-red-60)', 
              borderRadius: '50%' 
            }}></div>
            <span>Failed</span>
          </div>
        </Tooltip>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">content</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm"><strong>Required.</strong> The tooltip text content</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">position</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"top" | "bottom" | "left" | "right"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"top"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Preferred position relative to trigger</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"default" | "mini"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"default"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Visual style variant</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showOnHover</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Show tooltip on mouse hover</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showOnFocus</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Show tooltip on keyboard focus</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">delay</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">200</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Delay in milliseconds before showing</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">The trigger element that activates the tooltip</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Tooltips() {
  return (
    <ComponentShowcase 
      component={componentInfo}
      stories={componentStories}
      propsTable={<PropsTable />}
    />
  );
}