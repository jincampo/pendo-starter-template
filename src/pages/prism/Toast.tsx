import React from 'react';
import { ToastProvider, useToast } from '@prism/toast';
import { Button } from '@prism/button';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'toast',
  name: 'Toast Notifications',
  category: 'Feedback',
  description: 'Toast notifications provide temporary, non-intrusive feedback about actions, processes, or system status. They appear briefly and disappear automatically, keeping users informed without blocking their workflow.',
  usage: {
    whenToUse: [
      'To confirm successful actions',
      'For non-critical error messages',
      'To provide system status updates',
      'For brief, temporary notifications',
      'To give feedback without disrupting user flow'
    ],
    whenNotToUse: [
      'For critical errors requiring immediate action',
      'For information that must be retained',
      'For complex or lengthy messages',
      'As primary navigation or calls-to-action',
      'For promotional or marketing content'
    ],
    anatomy: [
      { element: 'Toast container', description: 'Positioned overlay containing the notification' },
      { element: 'Icon (optional)', description: 'Visual indicator of toast type/status' },
      { element: 'Title (optional)', description: 'Brief heading describing the notification' },
      { element: 'Message', description: 'Main notification content' },
      { element: 'Close button (optional)', description: 'Manual dismiss control' }
    ],
    accessibility: [
      'Use role="alert" for urgent messages',
      'Use aria-live="polite" for non-urgent notifications',
      'Provide sufficient contrast for text and background',
      'Support keyboard navigation for dismissible toasts',
      'Don\'t rely solely on color to convey meaning'
    ],
    dosDonts: {
      dos: ['Keep messages concise and clear', 'Use appropriate timing for auto-dismiss', 'Position consistently'],
      donts: ['Stack too many toasts', 'Auto-dismiss critical errors too quickly', 'Use for complex information']
    }
  }
};

// Toast demo component that uses the toast context
const ToastDemo = (): ComponentStory[] => {
  const { addToast, removeAllToasts } = useToast();

  const componentStories: ComponentStory[] = [
    {
      id: 'basic-variants',
      name: 'Toast Variants',
      description: 'Different toast types for various message types',
      code: `const { addToast } = useToast();

// Success toast
const showSuccess = () => {
  addToast({
    variant: 'success',
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    duration: 4000
  });
};

// Error toast
const showError = () => {
  addToast({
    variant: 'error',
    title: 'Error occurred',
    description: 'Something went wrong. Please try again.',
    duration: 6000
  });
};

// Warning toast
const showWarning = () => {
  addToast({
    variant: 'warning',
    title: 'Warning',
    description: 'This action cannot be undone.',
    duration: 5000
  });
};

// Info toast
const showInfo = () => {
  addToast({
    variant: 'info',
    title: 'Information',
    description: 'New features are available in this update.',
    duration: 4000
  });
};`,
      component: (
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
          <Button 
            onClick={() => addToast({
              variant: 'success',
              title: 'Success!',
              description: 'Your changes have been saved successfully.',
              duration: 4000
            })} 
            variant="secondary"
          >
            Show Success
          </Button>
          <Button 
            onClick={() => addToast({
              variant: 'error',
              title: 'Error occurred',
              description: 'Something went wrong. Please try again.',
              duration: 6000
            })} 
            variant="secondary"
          >
            Show Error
          </Button>
          <Button 
            onClick={() => addToast({
              variant: 'warning',
              title: 'Warning',
              description: 'This action cannot be undone.',
              duration: 5000
            })} 
            variant="secondary"
          >
            Show Warning
          </Button>
          <Button 
            onClick={() => addToast({
              variant: 'info',
              title: 'Information',
              description: 'New features are available in this update.',
              duration: 4000
            })} 
            variant="secondary"
          >
            Show Info
          </Button>
        </div>
      )
    },
    {
      id: 'variations',
      name: 'Toast Variations',
      description: 'Different toast configurations and behaviors',
      code: `// Simple toast without title
const showSimple = () => {
  addToast({
    variant: 'success',
    description: 'Simple toast without title.',
    duration: 3000
  });
};

// Persistent toast (manual dismiss)
const showPersistent = () => {
  addToast({
    variant: 'info',
    title: 'Persistent Toast',
    description: 'This toast will not auto-dismiss. Click X to close.',
    duration: 0,
    dismissible: true
  });
};

// Different positions
const showBottomToast = () => {
  addToast({
    variant: 'info',
    title: 'Bottom Toast',
    description: 'This toast appears at the bottom.',
    position: 'bottom-right',
    duration: 4000
  });
};`,
      component: (
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
          <Button 
            onClick={() => addToast({
              variant: 'success',
              description: 'Simple toast without title.',
              duration: 3000
            })} 
            variant="tertiary"
          >
            Simple Toast
          </Button>
          <Button 
            onClick={() => addToast({
              variant: 'info',
              title: 'Persistent Toast',
              description: 'This toast will not auto-dismiss. Click the X to close.',
              duration: 0,
              dismissible: true
            })} 
            variant="tertiary"
          >
            Persistent Toast
          </Button>
          <Button 
            onClick={() => addToast({
              variant: 'info',
              title: 'Bottom Toast',
              description: 'This toast appears at the bottom of the screen.',
              position: 'bottom-right',
              duration: 4000
            })} 
            variant="tertiary"
          >
            Bottom Position
          </Button>
        </div>
      )
    },
    {
      id: 'form-actions',
      name: 'Form Action Feedback',
      description: 'Real-world examples for form interactions',
      code: `// Profile save success
const handleProfileSave = () => {
  addToast({
    variant: 'success',
    title: 'Profile Updated',
    description: 'Your profile information has been updated successfully.',
    duration: 4000
  });
};

// Validation error
const handleValidationError = () => {
  addToast({
    variant: 'error',
    title: 'Validation Error',
    description: 'Please fill in all required fields before submitting.',
    duration: 6000
  });
};

// Auto-save notification
const handleAutoSave = () => {
  addToast({
    variant: 'info',
    description: 'Draft saved automatically',
    duration: 2000
  });
};`,
      component: (
        <div style={{ 
          border: '1px solid var(--color-gray-40)', 
          borderRadius: '4px', 
          padding: 'var(--spacing-md)',
          maxWidth: '400px'
        }}>
          <h4 style={{ margin: '0 0 var(--spacing-md) 0', fontSize: 'var(--font-size-base)' }}>Form Actions</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
            <Button
              onClick={() => addToast({
                variant: 'success',
                title: 'Profile Updated',
                description: 'Your profile information has been updated successfully.',
                duration: 4000
              })}
              size="small"
            >
              Save Profile
            </Button>
            <Button
              onClick={() => addToast({
                variant: 'error',
                title: 'Validation Error',
                description: 'Please fill in all required fields before submitting.',
                duration: 6000
              })}
              variant="secondary"
              size="small"
            >
              Trigger Validation
            </Button>
            <Button
              onClick={() => addToast({
                variant: 'info',
                description: 'Draft saved automatically',
                duration: 2000
              })}
              variant="tertiary"
              size="small"
            >
              Auto-save
            </Button>
          </div>
        </div>
      )
    },
    {
      id: 'system-actions',
      name: 'System Status Updates',
      description: 'Toast notifications for system events',
      code: `// Connection status
const showConnectionIssue = () => {
  addToast({
    variant: 'warning',
    title: 'Connection Issue',
    description: 'Reconnecting to server... Your data may not be saved.',
    duration: 0,
    dismissible: true
  });
};

// Auto-save enabled
const showAutoSaveEnabled = () => {
  addToast({
    variant: 'info',
    title: 'Auto-save Enabled',
    description: 'Your changes are being saved automatically.',
    duration: 3000
  });
};

// Update available
const showUpdateAvailable = () => {
  addToast({
    variant: 'info',
    title: 'Update Available',
    description: 'A new version is available. Refresh to update.',
    duration: 8000,
    dismissible: true
  });
};`,
      component: (
        <div style={{ 
          border: '1px solid var(--color-gray-40)', 
          borderRadius: '4px', 
          padding: 'var(--spacing-md)',
          maxWidth: '400px'
        }}>
          <h4 style={{ margin: '0 0 var(--spacing-md) 0', fontSize: 'var(--font-size-base)' }}>System Actions</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
            <Button
              onClick={() => addToast({
                variant: 'warning',
                title: 'Connection Issue',
                description: 'Reconnecting to server... Your data may not be saved.',
                duration: 0,
                dismissible: true
              })}
              size="small"
              variant="secondary"
            >
              Connection Issue
            </Button>
            <Button
              onClick={() => addToast({
                variant: 'info',
                title: 'Auto-save Enabled',
                description: 'Your changes are being saved automatically.',
                duration: 3000
              })}
              size="small"
              variant="secondary"
            >
              Enable Auto-save
            </Button>
            <Button
              onClick={() => addToast({
                variant: 'info',
                title: 'Update Available',
                description: 'A new version is available. Refresh to update.',
                duration: 8000,
                dismissible: true
              })}
              size="small"
              variant="secondary"
            >
              Update Available
            </Button>
          </div>
        </div>
      )
    },
    {
      id: 'bulk-actions',
      name: 'Bulk Operations',
      description: 'Progress updates for multiple items',
      code: `// Bulk operation with progress updates
const processBulkItems = () => {
  addToast({
    variant: 'info',
    description: 'Processing 1 of 5 items...',
    duration: 1000
  });
  
  setTimeout(() => addToast({
    variant: 'info',
    description: 'Processing 3 of 5 items...',
    duration: 1000
  }), 1500);
  
  setTimeout(() => addToast({
    variant: 'success',
    title: 'Bulk Action Complete',
    description: 'Successfully processed 5 items.',
    duration: 4000
  }), 3000);
};`,
      component: (
        <div style={{ 
          border: '1px solid var(--color-gray-40)', 
          borderRadius: '4px', 
          padding: 'var(--spacing-md)',
          maxWidth: '400px'
        }}>
          <h4 style={{ margin: '0 0 var(--spacing-md) 0', fontSize: 'var(--font-size-base)' }}>Bulk Actions</h4>
          <Button
            onClick={() => {
              addToast({
                variant: 'info',
                description: 'Processing 1 of 5 items...',
                duration: 1000
              });
              setTimeout(() => addToast({
                variant: 'info',
                description: 'Processing 3 of 5 items...',
                duration: 1000
              }), 1500);
              setTimeout(() => addToast({
                variant: 'success',
                title: 'Bulk Action Complete',
                description: 'Successfully processed 5 items.',
                duration: 4000
              }), 3000);
            }}
            size="small"
            variant="secondary"
          >
            Process Multiple Items
          </Button>
        </div>
      )
    },
    {
      id: 'management',
      name: 'Toast Management',
      description: 'Managing multiple toasts and cleanup',
      code: `const { removeAllToasts } = useToast();

// Clear all toasts
const clearAll = () => {
  removeAllToasts();
};

// Show multiple toasts
const showMultiple = () => {
  addToast({ variant: 'info', description: 'First toast', duration: 5000 });
  addToast({ variant: 'success', description: 'Second toast', duration: 5000 });
  addToast({ variant: 'warning', description: 'Third toast', duration: 5000 });
};`,
      component: (
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
          <Button 
            onClick={() => {
              addToast({ variant: 'info', description: 'First toast', duration: 5000 });
              addToast({ variant: 'success', description: 'Second toast', duration: 5000 });
              addToast({ variant: 'warning', description: 'Third toast', duration: 5000 });
            }}
            variant="tertiary"
          >
            Show Multiple Toasts
          </Button>
          <Button 
            onClick={removeAllToasts} 
            variant="destructive"
          >
            Clear All Toasts
          </Button>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">position</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"top-right"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Toast position on screen</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">title</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Toast title/heading</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">description</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Toast message content</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">duration</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">4000</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Auto-dismiss duration in milliseconds (0 = manual)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">dismissible</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Show close button for manual dismissal</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onDismiss</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">() =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when toast is dismissed</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// Demo wrapper component that provides toast context
const ToastPageContent: React.FC = () => {
  const toastDemo = ToastDemo();
  
  return (
    <div className="main-content">
      <ComponentShowcase 
        component={componentInfo}
        stories={toastDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
};

export default function ToastPage() {
  return (
    <ToastProvider position="top-right" maxToasts={5}>
      <ToastPageContent />
    </ToastProvider>
  );
}