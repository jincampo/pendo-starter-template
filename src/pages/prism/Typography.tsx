import '@/index.css'
import { useState } from 'react'
import { Tabs } from '@prism/tabs'

export default function Typography() {
  const [activeTab, setActiveTab] = useState('text-presets')

  const tabs = [
    { id: 'text-presets', label: 'Text Presets' },
    { id: 'headings', label: 'Headings' },
    { id: 'paragraphs', label: 'Paragraphs' },
    { id: 'metrics', label: 'Metrics' },
    { id: 'misc', label: 'Misc' }
  ]

  const renderTextPresets = () => (
    <section>
      <h2>Text Presets</h2>
      <p className="description">
        Standardized text sizes and weights for consistent typography throughout the application.
      </p>
      <table className="typography-table">
        <thead>
          <tr>
            <th>Token Name</th>
            <th>Size (px)</th>
            <th>Size (rem)</th>
            <th>Line Height %</th>
            <th>Weight</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>text-preset-46</td>
            <td>46.184px</td>
            <td>2.887rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-46">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-41</td>
            <td>41.053px</td>
            <td>2.566rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-41">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-36</td>
            <td>36.5px</td>
            <td>2.281rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-36">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-32</td>
            <td>32.44px</td>
            <td>2.028rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-32">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-29</td>
            <td>28.836px</td>
            <td>1.802rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-29">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-26</td>
            <td>25.632px</td>
            <td>1.602rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-26">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-23</td>
            <td>22.784px</td>
            <td>1.424rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-23">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-20</td>
            <td>20.25px</td>
            <td>1.266rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-20">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-18</td>
            <td>18px</td>
            <td>1.125rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-18">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-16</td>
            <td>16px</td>
            <td>1rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-16">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-14</td>
            <td>14.222px</td>
            <td>0.889rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-14">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-13</td>
            <td>12.64px</td>
            <td>0.79rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-13">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-11</td>
            <td>11.235px</td>
            <td>0.702rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-11">Example</span></td>
          </tr>
          <tr>
            <td>text-preset-10</td>
            <td>9.987px</td>
            <td>0.624rem</td>
            <td>130%</td>
            <td>400</td>
            <td><span className="text-preset-10">Example</span></td>
          </tr>
        </tbody>
      </table>
    </section>
  )

  const renderHeadings = () => (
    <section>
      <h2>Headings</h2>
      <p className="description">
        Hierarchical heading styles for content structure and visual hierarchy.
      </p>
      <div className="heading-examples">
        <div className="heading-example">
          <h1 className="heading-display">Display Heading</h1>
          <p className="heading-meta">font-heading-display • 46px • 400 weight</p>
        </div>
        <div className="heading-example">
          <h1 className="heading-1">Heading 1</h1>
          <p className="heading-meta">font-heading-1 • 36px • 400 weight</p>
        </div>
        <div className="heading-example">
          <h2 className="heading-2">Heading 2</h2>
          <p className="heading-meta">font-heading-2 • 29px • 400 weight</p>
        </div>
        <div className="heading-example">
          <h3 className="heading-3">Heading 3</h3>
          <p className="heading-meta">font-heading-3 • 23px • 400 weight</p>
        </div>
        <div className="heading-example">
          <h4 className="heading-4">Heading 4</h4>
          <p className="heading-meta">font-heading-4 • 18px • 400 weight</p>
        </div>
        <div className="heading-example">
          <h5 className="heading-5">Heading 5</h5>
          <p className="heading-meta">font-heading-5 • 16px • 600 weight</p>
        </div>
        <div className="heading-example">
          <h6 className="heading-6">Heading 6</h6>
          <p className="heading-meta">font-heading-6 • 14px • 600 weight</p>
        </div>
      </div>
    </section>
  )

  const renderParagraphs = () => (
    <section>
      <h2>Paragraphs</h2>
      <p className="description">
        Body text styles for readable content across different contexts.
      </p>
      <div className="paragraph-examples">
        <div className="paragraph-example">
          <p className="paragraph-large">Large paragraph text for introductory content and important descriptions.</p>
          <p className="example-meta">paragraph-large • 18px • 400 weight • 1.5 line height</p>
        </div>
        <div className="paragraph-example">
          <p className="paragraph-base">Base paragraph text for standard body content and general reading.</p>
          <p className="example-meta">paragraph-base • 16px • 400 weight • 1.5 line height</p>
        </div>
        <div className="paragraph-example">
          <p className="paragraph-small">Small paragraph text for secondary information and captions.</p>
          <p className="example-meta">paragraph-small • 14px • 400 weight • 1.4 line height</p>
        </div>
        <div className="paragraph-example">
          <p className="paragraph-xs">Extra small text for fine print and metadata.</p>
          <p className="example-meta">paragraph-xs • 12px • 400 weight • 1.4 line height</p>
        </div>
      </div>
    </section>
  )

  const renderMetrics = () => (
    <section>
      <h2>Metrics</h2>
      <p className="description">
        Large numerical displays for dashboards, KPIs, and data visualization.
      </p>
      <div className="metrics-examples">
        <div className="metric-example">
          <div className="metric-display">1,234.56</div>
          <p className="metric-meta">metric-display • 46px • 400 weight</p>
        </div>
        <div className="metric-example">
          <div className="metric-large">987</div>
          <p className="metric-meta">metric-large • 36px • 400 weight</p>
        </div>
        <div className="metric-example">
          <div className="metric-medium">65.4%</div>
          <p className="metric-meta">metric-medium • 29px • 400 weight</p>
        </div>
        <div className="metric-example">
          <div className="metric-small">123</div>
          <p className="metric-meta">metric-small • 23px • 400 weight</p>
        </div>
      </div>
    </section>
  )

  const renderMisc = () => (
    <section>
      <h2>Miscellaneous</h2>
      <p className="description">
        Additional text styles for specific use cases and interface elements.
      </p>
      <div className="misc-examples">
        <div className="misc-example">
          <span className="label-text">Label Text</span>
          <p className="example-meta">label • 14px • 600 weight</p>
        </div>
        <div className="misc-example">
          <span className="button-text">Button Text</span>
          <p className="example-meta">button • 14px • 500 weight</p>
        </div>
        <div className="misc-example">
          <span className="link-text">Link Text</span>
          <p className="example-meta">link • 14px • 400 weight • underline</p>
        </div>
        <div className="misc-example">
          <code className="code-text">Code Text</code>
          <p className="example-meta">code • 14px • 400 weight • monospace</p>
        </div>
        <div className="misc-example">
          <span className="caption-text">Caption Text</span>
          <p className="example-meta">caption • 12px • 400 weight</p>
        </div>
      </div>
    </section>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'text-presets':
        return renderTextPresets()
      case 'headings':
        return renderHeadings()
      case 'paragraphs':
        return renderParagraphs()
      case 'metrics':
        return renderMetrics()
      case 'misc':
        return renderMisc()
      default:
        return renderTextPresets()
    }
  }

  return (
    <div className="prism-preview">
      <h1 style={{ fontSize: 'var(--font-size-3xl, 30px)' }}>Typography System</h1>
      <p className="description">
        Heading styles and scales using the modular major second scale (8:9 / multiplier 1.125x) to achieve relational
        harmony. Follow these typographic standards to ensure consistency and inject personality wherever writing for
        Pendo. See <a href="https://type-scale.com/">https://type-scale.com/</a> for more insight.
      </p>

      {/* Tab Navigation */}
      <Tabs
        tabs={tabs.map(tab => ({
          id: tab.id,
          label: tab.label,
          content: <div></div> // Not used
        }))}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        hideContent={true}
      />

      {/* Tab Content */}
      <div className="tab-content">
        {renderTabContent()}
      </div>

      <style>{`
        .tab-content {
          padding: 2rem 0;
        }

        .heading-examples,
        .paragraph-examples,
        .metrics-examples,
        .misc-examples {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .heading-example,
        .paragraph-example,
        .metric-example,
        .misc-example {
          padding: 1.5rem;
          border: 1px solid var(--color-gray-30);
          border-radius: 4px;
          background: white;
        }

        .heading-meta,
        .example-meta,
        .metric-meta {
          margin: 0.5rem 0 0 0;
          font-size: 12px;
          color: var(--color-gray-70);
          font-family: monospace;
        }

        .metric-display {
          font-size: var(--font-size-display);
          font-weight: 400;
          line-height: 1.2;
          color: var(--color-gray-100);
        }

        .metric-large {
          font-size: var(--font-size-xl);
          font-weight: 400;
          line-height: 1.2;
          color: var(--color-gray-100);
        }

        .metric-medium {
          font-size: var(--font-size-lg);
          font-weight: 400;
          line-height: 1.2;
          color: var(--color-gray-100);
        }

        .metric-small {
          font-size: var(--font-size-base);
          font-weight: 400;
          line-height: 1.2;
          color: var(--color-gray-100);
        }

        .label-text {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-gray-100);
        }

        .button-text {
          font-size: 14px;
          font-weight: 500;
          color: var(--color-gray-100);
        }

        .link-text {
          font-size: 14px;
          font-weight: 400;
          color: var(--color-teal-primary);
          text-decoration: underline;
        }

        .code-text {
          font-size: 14px;
          font-weight: 400;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          background: var(--color-gray-10);
          padding: 2px 4px;
          border-radius: 2px;
        }

        .caption-text {
          font-size: 12px;
          font-weight: 400;
          color: var(--color-gray-70);
        }
      `}</style>
    </div>
  )
}