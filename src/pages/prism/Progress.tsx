import React, { useState } from 'react';
import { Progress, LinearProgress, CircularProgress } from '@prism/progress';
import { Button } from '@prism/button';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'progress',
  name: 'Progress Indicators',
  category: 'Feedback',
  description: 'Progress indicators visually communicate the status of ongoing processes such as loading, uploading, or completing tasks. They help set user expectations and provide real-time feedback during operations.',
  usage: {
    whenToUse: [
      'For operations taking longer than 500ms',
      'To display real-time completion status (file uploads, data processing)',
      'In dashboards where data is being incrementally revealed',
      'For multi-step workflows to show completion progress',
      'When users need feedback about system status'
    ],
    whenNotToUse: [
      'For instant operations (use loading spinner instead)',
      'When task duration is unknown and cannot be tracked',
      'As the sole feedback mechanism for critical operations',
      'For decorative purposes without functional meaning'
    ],
    anatomy: [
      { element: 'Track (Background)', description: 'Container representing the total progress path' },
      { element: 'Indicator (Fill)', description: 'Animated portion indicating current progress value' },
      { element: 'Label (Optional)', description: 'Descriptive text or percentage display' },
      { element: 'Value', description: 'Actual percent or number determining fill amount' }
    ],
    accessibility: [
      'Use role="progressbar" with proper ARIA attributes',
      'Include aria-valuemin, aria-valuemax, and aria-valuenow',
      'Provide aria-label or aria-labelledby for context',
      'Ensure adequate color contrast for visibility',
      'Announce progress updates to screen readers'
    ],
    dosDonts: {
      dos: ['Match progress indicator type to layout context', 'Use appropriate colors for semantic meaning', 'Animate progress smoothly for better UX', 'Provide descriptive labels'],
      donts: ['Mix multiple styles within a single view unnecessarily', 'Display without context or supporting label', 'Use for tasks without measurable steps', 'Auto-complete too quickly for users to perceive']
    }
  }
};

// Component stories with live examples
const ProgressDemo: React.FC = () => {
  const [animatedValue, setAnimatedValue] = useState(30);
  const [uploadProgress, setUploadProgress] = useState(0);

  const simulateProgress = () => {
    setAnimatedValue(0);
    const timer = setInterval(() => {
      setAnimatedValue(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const timer = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const componentStories: ComponentStory[] = [
    {
      id: 'linear-progress',
      name: 'Linear Progress Bars',
      description: 'Horizontal progress indicators perfect for showing completion status.',
      code: `<div className="progress-examples">
  <LinearProgress value={25} />
  <LinearProgress value={50} />
  <LinearProgress value={75} />
  <LinearProgress value={100} />
</div>`,
      component: (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm text-[var(--color-gray-70)]">25% Complete</div>
            <LinearProgress value={25} />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-[var(--color-gray-70)]">50% Complete</div>
            <LinearProgress value={50} />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-[var(--color-gray-70)]">75% Complete</div>
            <LinearProgress value={75} />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-[var(--color-gray-70)]">100% Complete</div>
            <LinearProgress value={100} />
          </div>
        </div>
      )
    },
    {
      id: 'circular-progress',
      name: 'Circular Progress Indicators',
      description: 'Circular indicators ideal for confined spaces and dashboard metrics.',
      code: `<div className="circular-examples">
  <CircularProgress value={25} size="small" />
  <CircularProgress value={50} />
  <CircularProgress value={75} />
  <CircularProgress value={100} size="large" />
</div>`,
      component: (
        <div className="flex items-center justify-center gap-8">
          <div className="text-center space-y-2">
            <CircularProgress value={25} size="small" />
            <div className="text-sm text-[var(--color-gray-70)]">Small</div>
          </div>
          <div className="text-center space-y-2">
            <CircularProgress value={50} />
            <div className="text-sm text-[var(--color-gray-70)]">Medium</div>
          </div>
          <div className="text-center space-y-2">
            <CircularProgress value={75} />
            <div className="text-sm text-[var(--color-gray-70)]">Large</div>
          </div>
          <div className="text-center space-y-2">
            <CircularProgress value={100} size="large" />
            <div className="text-sm text-[var(--color-gray-70)]">Extra Large</div>
          </div>
        </div>
      )
    },
    {
      id: 'color-variants',
      name: 'Color Variants',
      description: 'Different colors to indicate various states and contexts.',
      code: `<div className="color-variants">
  <LinearProgress value={60} variant="primary" />
  <LinearProgress value={60} variant="success" />
  <LinearProgress value={60} variant="warning" />
  <LinearProgress value={60} variant="error" />
</div>`,
      component: (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm text-[var(--color-gray-70)]">Primary (Default)</div>
            <LinearProgress value={60} variant="primary" />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-[var(--color-gray-70)]">Success</div>
            <LinearProgress value={60} variant="success" />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-[var(--color-gray-70)]">Warning</div>
            <LinearProgress value={60} variant="warning" />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-[var(--color-gray-70)]">Error</div>
            <LinearProgress value={60} variant="error" />
          </div>
        </div>
      )
    },
    {
      id: 'interactive-progress',
      name: 'Interactive Progress',
      description: 'Real-time progress updates with interactive controls.',
      code: `<div className="interactive-example">
  <LinearProgress value={animatedValue} />
  <Button onClick={simulateProgress} variant="primary">
    Simulate Progress
  </Button>
</div>`,
      component: (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm text-[var(--color-gray-70)]">
              Animated Progress: {animatedValue}%
            </div>
            <LinearProgress value={animatedValue} />
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={simulateProgress}
              variant="primary"
              size="small"
            >
              Simulate Progress
            </Button>
            <Button 
              onClick={() => setAnimatedValue(0)}
              variant="secondary"
              size="small"
            >
              Reset
            </Button>
          </div>
        </div>
      )
    },
    {
      id: 'indeterminate-progress',
      name: 'Indeterminate Progress',
      description: 'For operations where completion time is unknown.',
      code: `<div className="indeterminate-examples">
  <LinearProgress indeterminate />
  <CircularProgress indeterminate />
</div>`,
      component: (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-sm text-[var(--color-gray-70)]">Loading data...</div>
            <LinearProgress indeterminate />
          </div>
          <div className="text-center space-y-2">
            <div className="text-sm text-[var(--color-gray-70)]">Processing...</div>
            <CircularProgress indeterminate />
          </div>
        </div>
      )
    }
  ];

  return componentStories;
};

// Props table component
const PropsTable = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">LinearProgress Props</h3>
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
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">value</td>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">0</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">Progress value from 0 to 100</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"primary" | "success" | "warning" | "error"</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">"primary"</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">Color variant of the progress bar</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">indeterminate</td>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">Show animated indeterminate state</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"small" | "medium" | "large"</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">"medium"</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">Height of the progress bar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">CircularProgress Props</h3>
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
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">value</td>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">0</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">Progress value from 0 to 100</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"small" | "medium" | "large"</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">"medium"</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">Size of the circular indicator</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">indeterminate</td>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">Show animated indeterminate state</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">strokeWidth</td>
              <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">4</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">Width of the progress stroke</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default function ProgressPage() {
  const progressDemo = ProgressDemo();
  
  return (
    <div className="main-content">
      <ComponentShowcase 
        component={componentInfo}
        stories={progressDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
}