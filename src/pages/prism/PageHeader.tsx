import '@/index.css';
import { PageHeader } from '@prism/page-header';
import { Button } from '@prism/button';
import { Icon } from '@prism/icon';
import { Card } from '@prism/card';

type PropExample = {
  title: string;
  description: string;
  examples: React.ReactNode;
};

export default function PageHeaders() {
  const propExamples: PropExample[] = [
    {
      title: 'Basic Header',
      description: 'A simple header with just a title.',
      examples: (
        <div className="border border-[var(--color-gray-30)] rounded-[3px] bg-white">
          <PageHeader
            title="Project Overview"
          />
        </div>
      )
    },
    {
      title: 'With Back Link',
      description: 'Header with a back link for navigation.',
      examples: (
        <div className="border border-[var(--color-gray-30)] rounded-[3px] bg-white">
          <PageHeader
            title="Project Settings"
            backLink={{
              label: "Back to Projects",
              onClick: () => console.log('Back clicked')
            }}
          />
        </div>
      )
    },
    {
      title: 'With Actions',
      description: 'Header with action buttons.',
      examples: (
        <div className="border border-[var(--color-gray-30)] rounded-[3px] bg-white">
          <PageHeader
            title="Team Members"
            actions={
              <>
                <Button variant="secondary" size="small">
                  <Icon name="UserPlus" size="small" className="mr-1" />
                  Invite
                </Button>
                <Button size="small">
                  <Icon name="Plus" size="small" className="mr-1" />
                  Add Member
                </Button>
              </>
            }
          />
        </div>
      )
    },
    {
      title: 'With Attribution',
      description: 'Header showing who created the item and when it was last updated.',
      examples: (
        <div className="border border-[var(--color-gray-30)] rounded-[3px] bg-white">
          <PageHeader
            title="Analytics Dashboard"
            attribution={{
              author: "John Smith"
            }}
            lastUpdated="2 days ago"
          />
        </div>
      )
    },
    {
      title: 'Complete Example',
      description: 'Header with all features enabled.',
      examples: (
        <div className="border border-[var(--color-gray-30)] rounded-[3px] bg-white">
          <PageHeader
            title="Campaign Performance"
            backLink={{
              label: "Back to Campaigns",
              onClick: () => console.log('Back clicked')
            }}
            actions={
              <>
                <Button variant="secondary" size="small">
                  <Icon name="Download" size="small" className="mr-1" />
                  Export
                </Button>
                <Button size="small">
                  <Icon name="Edit" size="small" className="mr-1" />
                  Edit
                </Button>
              </>
            }
            attribution={{
              author: "Sarah Wilson"
            }}
            lastUpdated="Yesterday at 2:30 PM"
            description="Track and analyze the performance metrics of your marketing campaigns."
          />
        </div>
      )
    }
  ];

  return (
    <div className="prism-preview">
      <h1>Page Header</h1>
      <p className="description">
        Page headers provide consistent layout and styling for page titles, navigation, and key actions.
        They support various configurations including back navigation, action buttons, and metadata.
      </p>
      
      <section className="space-y-16">
        {propExamples.map((example) => (
          <div key={example.title} className="space-y-4">
            <h2>{example.title}</h2>
            <p className="description">{example.description}</p>
            {example.examples}
          </div>
        ))}
      </section>

      <section className="mt-16">
        <Card title="Props" className="mb-8">
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
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">titleExtra</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">ReactNode</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Optional extra content to display next to the title</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">backLink</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">BackLinkConfig</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Configuration for the back link</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">actions</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">ReactNode</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Optional actions to display in the header</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">attribution</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">AttributionConfig</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Attribution information</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">lastUpdated</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Last updated timestamp</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">description</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Description text</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  );
}