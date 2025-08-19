import React, { useState } from 'react';
import { Alert } from '@prism/alert';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'alerts',
  name: 'Alerts',
  category: 'Feedback',
  description: 'Alerts communicate important information to users about system status, user actions, or potential issues. They demand immediate attention and provide contextual feedback messages.',
  usage: {
    whenToUse: [
      'To communicate critical system status changes',
      'To provide feedback after user actions',
      'To warn users about potential consequences',
      'To celebrate successful task completion'
    ],
    whenNotToUse: [
      'For promotional or marketing messages',
      'For information that can be discovered through normal interaction',
      'When a more subtle notification would suffice'
    ],
    anatomy: [
      { element: 'Alert container', description: 'Main container with appropriate ARIA roles' },
      { element: 'Icon', description: 'Visual indicator of alert type/severity' },
      { element: 'Title (optional)', description: 'Brief, descriptive heading' },
      { element: 'Message', description: 'Clear explanation of the situation' },
      { element: 'Actions (optional)', description: 'Buttons for user response' }
    ],
    accessibility: [
      'Use role="alert" for urgent messages',
      'Use aria-live regions for dynamic content',
      'Ensure sufficient color contrast',
      'Don\'t rely solely on color to convey meaning',
      'Provide keyboard accessible dismiss actions'
    ],
    dosDonts: {
      dos: ['Use appropriate alert types (success, warning, error, info)', 'Keep messages concise and actionable', 'Provide clear next steps'],
      donts: ['Overuse alerts - they lose impact', 'Use alerts for non-urgent information', 'Auto-dismiss error messages too quickly']
    }
  }
};

// Component stories with live examples
const AlertsDemo: React.FC = () => {
  const [showDismissible, setShowDismissible] = useState(true);

  const componentStories: ComponentStory[] = [
    {
      id: 'variants',
      name: 'Alert Variants',
      description: 'Different alert types for various message types',
      code: `<div className="alert-variants">
  <Alert variant="info" title="Info Message" dismissible onDismiss={() => {}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sodales justo...
  </Alert>
  <Alert variant="warning" title="Warning Message" dismissible onDismiss={() => {}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sodales justo...
  </Alert>
  <Alert variant="error" title="Error Message" dismissible onDismiss={() => {}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sodales justo...
  </Alert>
  <Alert variant="success" title="Success Message" dismissible onDismiss={() => {}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sodales justo...
  </Alert>
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <Alert variant="info" title="Info Message" dismissible onDismiss={() => {}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sodales justo. Quisque tristique magna...
          </Alert>
          <Alert variant="warning" title="Warning Message" dismissible onDismiss={() => {}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sodales justo. Quisque tristique magna...
          </Alert>
          <Alert variant="error" title="Error Message" dismissible onDismiss={() => {}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sodales justo. Quisque tristique magna...
          </Alert>
          <Alert variant="success" title="Success Message" dismissible onDismiss={() => {}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sodales justo. Quisque tristique magna...
          </Alert>
        </div>
      )
    },
    {
      id: 'simple',
      name: 'Simple Alerts (No Title)',
      description: 'Alerts with only message content, no title',
      code: `<div className="simple-alerts">
  <Alert variant="success">
    Your changes have been saved successfully.
  </Alert>
  <Alert variant="info">
    New features are available in this update.
  </Alert>
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <Alert variant="success">
            Your changes have been saved successfully.
          </Alert>
          <Alert variant="info">
            New features are available in this update.
          </Alert>
        </div>
      )
    },
    {
      id: 'dismissible',
      name: 'Dismissible Alert',
      description: 'Alert that can be closed by the user',
      code: `const [showAlert, setShowAlert] = useState(true);

{showAlert && (
  <Alert 
    variant="warning" 
    title="Dismissible Alert"
    dismissible
    onDismiss={() => setShowAlert(false)}
  >
    You can close this alert by clicking the X button.
  </Alert>
)}`,
      component: (
        <div>
          {showDismissible && (
            <Alert 
              variant="warning" 
              title="Dismissible Alert"
              dismissible
              onDismiss={() => setShowDismissible(false)}
            >
              You can close this alert by clicking the X button.
            </Alert>
          )}
          {!showDismissible && (
            <button 
              className="pendo-button pendo-button--secondary pendo-button--small"
              onClick={() => setShowDismissible(true)}
              style={{ padding: 'var(--spacing-sm) var(--spacing-md)', border: '1px solid var(--color-gray-50)', borderRadius: '3px', backgroundColor: 'var(--color-gray-0)', cursor: 'pointer' }}
            >
              Show Dismissible Alert Again
            </button>
          )}
        </div>
      )
    },
    {
      id: 'use-cases',
      name: 'Common Use Cases',
      description: 'Real-world examples of alert usage',
      code: `{/* Form validation */}
<Alert variant="error" title="Form Validation Failed">
  Please correct the errors below and try again.
</Alert>

{/* System maintenance */}
<Alert variant="warning" title="Scheduled Maintenance">
  The system will be unavailable for maintenance on Sunday from 2-4 AM EST.
</Alert>

{/* Feature announcement */}
<Alert variant="info" title="New Feature Available">
  Dark mode is now available in your user preferences.
</Alert>

{/* Success confirmation */}
<Alert variant="success">
  Account settings updated successfully!
</Alert>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Form Validation</h4>
            <Alert variant="error" title="Form Validation Failed">
              Please correct the errors below and try again.
            </Alert>
          </div>
          
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>System Maintenance</h4>
            <Alert variant="warning" title="Scheduled Maintenance">
              The system will be unavailable for maintenance on Sunday from 2-4 AM EST.
            </Alert>
          </div>
          
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Feature Announcement</h4>
            <Alert variant="info" title="New Feature Available">
              Dark mode is now available in your user preferences.
            </Alert>
          </div>
          
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Success Confirmation</h4>
            <Alert variant="success">
              Account settings updated successfully!
            </Alert>
          </div>
        </div>
      )
    }
  ];

  return componentStories;
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"success" | "info" | "warning" | "error"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"info"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Visual style and semantic meaning</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">title</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">undefined</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Alert title/heading</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">undefined</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Alert content message</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">dismissible</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Show close button for dismissing alert</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onDismiss</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">() =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">undefined</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when alert is dismissed</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Alerts() {
  const alertsDemo = AlertsDemo();
  
  return (
    <div className="main-content">
      <ComponentShowcase 
        component={componentInfo}
        stories={alertsDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
}