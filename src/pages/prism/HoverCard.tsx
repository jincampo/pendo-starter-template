import '@/index.css';
import { HoverCard } from '../../../components/prism/ui/HoverCard';
import { Tag } from '../../../components/prism/ui/tag';

const metricsExample = [
  { metricText: '1,234', seriesName: 'Views' },
  { metricText: '567', seriesName: 'Clicks' },
  { metricText: '89%', seriesName: 'CTR' },
];

export default function HoverCardPreview() {
  return (
    <div className="prism-preview">
      <h1>Hover Card</h1>
      <p className="description">
        Hover cards are used to display contextual information and metrics in a compact, interactive format. They can include a title, subheading, body, metrics, and actions.
      </p>

      <section className="space-y-8">
        <div className="space-y-4">
          <h2>Basic Hover Card</h2>
          <p className="description">A simple hover card with a title, body, and metrics.</p>
          <div className="max-w-md">
            <HoverCard
              title="Feature Usage"
              body="This feature helps users complete their workflow faster."
              metrics={metricsExample}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2>With Subheading and Icon</h2>
          <p className="description">Add a subheading and icon for more context.</p>
          <div className="max-w-md">
            <HoverCard
              title="Engagement"
              subheading="Product Analytics"
              subheadingIcon="BarChart"
              body="Track how users interact with your product features."
              metrics={metricsExample}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2>With View Rules Action</h2>
          <p className="description">Show a link to view rules, with a count.</p>
          <div className="max-w-md">
            <HoverCard
              title="Segmentation"
              subheading="Audience Rules"
              subheadingIcon="Users"
              body="This segment targets users based on custom rules."
              metrics={metricsExample}
              onViewRules={() => alert('View rules clicked!')}
              rulesCount={3}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2>With Tag</h2>
          <p className="description">Add a tag above the title, aligned with the View details link.</p>
          <div className="max-w-md">
            <HoverCard
              tag={<Tag size="small" shape="rectangular" type="default">Tag text</Tag>}
              title="Details Hover Card Title"
              subheading="Subheading goes here"
              body="Details hover card body text can go into multiple lines based on the height of the Title section. This gives a detailed description of the feature or item."
              metrics={[
                { metricText: '10.1k', seriesName: 'Feature clicks' },
                { metricText: '200', seriesName: 'Unique visitors' },
                { metricText: '65', seriesName: 'Unique accounts' },
              ]}
              onViewRules={() => alert('View rules clicked!')}
              rulesCount={12}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2>Borderless Variant</h2>
          <p className="description">Remove the border and shadow for a minimal look.</p>
          <div className="max-w-md">
            <HoverCard
              title="Minimal Card"
              body="A borderless hover card for subtle UI contexts."
              metrics={metricsExample}
              borderless
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-2xl">
          <h2 className="mb-4">Props</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Prop</th>
                <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Type</th>
                <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Description</th>
                <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">title</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Title text displayed in the header</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">subheading</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Optional subheading text</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">subheadingIcon</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Optional icon for the subheading</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">body</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Main content of the card</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">metrics</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">MetricProps[]</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Array of metrics to display</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">[]</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">onViewRules</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">() =&gt; void</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Callback for the View rules link</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">rulesCount</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">number</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Number of rules to display in the link</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">0</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">borderless</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Removes border and shadow</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">tag</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">React.ReactNode</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Optional tag to display above the title</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
} 