import React, { useState } from 'react';
import { Wizard } from '@prism/wizard';
import { Button } from '@prism/button';
import { Input } from '@prism/input';
import { Alert } from '@prism/alert';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'wizard',
  name: 'Wizard (Multi-step Flow)',
  category: 'Navigation',
  description: 'The Wizard component provides a full-screen, multi-step workflow interface for complex user tasks. It guides users through sequential steps with clear progress indication and navigation controls.',
  usage: {
    whenToUse: [
      'For complex, multi-step workflows that require user guidance',
      'When setting up new accounts, campaigns, or configurations',
      'For data collection processes with logical step progression',
      'When users need to complete multiple related tasks in sequence',
      'For onboarding flows that introduce new features'
    ],
    whenNotToUse: [
      'For simple forms that can fit on one screen',
      'When steps are not logically sequential',
      'For optional or non-critical workflows',
      'When users need to frequently jump between steps',
      'For read-only information display'
    ],
    anatomy: [
      { element: 'Masthead', description: '68px header with title, step navigation, and close button' },
      { element: 'Step indicator', description: 'Numbered steps showing current progress and labels' },
      { element: 'Content area', description: '800px wide cards containing step-specific content' },
      { element: 'Navigation footer', description: 'Previous, Next, and Finish action buttons' },
      { element: 'Close button', description: 'Exit wizard and return to previous context' }
    ],
    accessibility: [
      'Use role="dialog" and aria-modal for proper screen reader support',
      'Implement focus management within wizard steps',
      'Support Escape key to close wizard',
      'Provide clear step progress announcements',
      'Ensure keyboard navigation between steps'
    ],
    dosDonts: {
      dos: ['Keep steps logically sequential', 'Provide clear progress indication', 'Allow users to go back to previous steps'],
      donts: ['Make steps too long or complex', 'Hide important navigation options', 'Force users through unnecessary steps']
    }
  }
};

// Component stories with live examples
const WizardDemo: React.FC = () => {
  const [showWizard, setShowWizard] = useState(false);
  const [showSimpleWizard, setShowSimpleWizard] = useState(false);
  const [showOnboardingWizard, setShowOnboardingWizard] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [simpleStep, setSimpleStep] = useState(0);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [formData, setFormData] = useState({
    campaignName: '',
    content: '',
    segment: ''
  });

  const campaignSteps = [
    { id: 'details', label: 'Add details' },
    { id: 'content', label: 'Select content' },
    { id: 'segment', label: 'Choose segment' }
  ];

  const simpleSteps = [
    { id: 'basic', label: 'Basic info' },
    { id: 'review', label: 'Review' }
  ];

  const onboardingSteps = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'profile', label: 'Set up profile' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'complete', label: 'Complete' }
  ];

  const handleNext = () => {
    if (currentStep < campaignSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    console.log('Wizard completed with data:', formData);
    setShowWizard(false);
    setCurrentStep(0);
    setFormData({ campaignName: '', content: '', segment: '' });
  };

  const handleStepChange = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const renderCampaignStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <Input
              label="Campaign Name"
              placeholder="Enter campaign name"
              value={formData.campaignName}
              onChange={(e) => setFormData({...formData, campaignName: e.target.value})}
              required
            />
            <Input
              label="Description"
              placeholder="Enter campaign description"
              multiline
              rows={4}
            />
          </div>
        );
      case 1:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <h4>Select Content Type</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              {['Guide', 'Tooltip', 'Banner'].map((type) => (
                <div key={type} style={{ 
                  padding: 'var(--spacing-md)', 
                  border: '1px solid var(--color-gray-40)', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  transition: 'background-color 150ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-10)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <strong>{type}</strong>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)', margin: 'var(--spacing-xs) 0 0 0' }}>
                    {type === 'Guide' ? 'Interactive walkthrough' : 
                     type === 'Tooltip' ? 'Contextual help' : 'Announcement message'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <h4>Choose Target Segment</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              {[
                { name: 'All Users', desc: 'Target all active users' },
                { name: 'New Users', desc: 'Users who joined in the last 30 days' },
                { name: 'Power Users', desc: 'Users with high engagement' }
              ].map((segment) => (
                <div key={segment.name} style={{ 
                  padding: 'var(--spacing-md)', 
                  border: '1px solid var(--color-gray-40)', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  transition: 'background-color 150ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-10)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <strong>{segment.name}</strong>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)', margin: 'var(--spacing-xs) 0 0 0' }}>
                    {segment.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const componentStories: ComponentStory[] = [
    {
      id: 'campaign-wizard',
      name: 'Campaign Creation Wizard',
      description: 'Full-featured wizard for creating marketing campaigns',
      code: `const [showWizard, setShowWizard] = useState(false);
const [currentStep, setCurrentStep] = useState(0);

const steps = [
  { id: 'details', label: 'Add details' },
  { id: 'content', label: 'Select content' },
  { id: 'segment', label: 'Choose segment' }
];

<Button onClick={() => setShowWizard(true)}>
  Launch Campaign Wizard
</Button>

<Wizard
  open={showWizard}
  onClose={() => setShowWizard(false)}
  title="Create Campaign"
  steps={steps}
  currentStep={currentStep}
  onStepChange={handleStepChange}
  onNext={handleNext}
  onPrevious={handlePrevious}
  onFinish={handleFinish}
  nextText="Continue"
  finishText="Create Campaign"
>
  {renderStepContent()}
</Wizard>`,
      component: (
        <div>
          <Button onClick={() => setShowWizard(true)}>
            🚀 Launch Campaign Creation Wizard
          </Button>

          <Wizard
            open={showWizard}
            onClose={() => setShowWizard(false)}
            title="Create Campaign"
            steps={campaignSteps}
            currentStep={currentStep}
            onStepChange={handleStepChange}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onFinish={handleFinish}
            nextText="Continue"
            finishText="Create Campaign"
          >
            {renderCampaignStepContent()}
          </Wizard>
        </div>
      )
    },
    {
      id: 'simple-wizard',
      name: 'Simple Two-Step Wizard',
      description: 'Minimal wizard for basic workflows',
      code: `<Wizard
  open={showSimpleWizard}
  onClose={() => setShowSimpleWizard(false)}
  title="Quick Setup"
  steps={[
    { id: 'basic', label: 'Basic info' },
    { id: 'review', label: 'Review' }
  ]}
  currentStep={simpleStep}
  onStepChange={setSimpleStep}
  nextText="Next"
  finishText="Done"
>
  {simpleStep === 0 ? (
    <div>
      <h3>Basic Information</h3>
      <Input label="Name" placeholder="Enter your name" />
    </div>
  ) : (
    <div>
      <h3>Review Your Information</h3>
      <p>Please review your details before continuing.</p>
    </div>
  )}
</Wizard>`,
      component: (
        <div>
          <Button onClick={() => setShowSimpleWizard(true)} variant="secondary">
            Simple Setup Wizard
          </Button>

          <Wizard
            open={showSimpleWizard}
            onClose={() => setShowSimpleWizard(false)}
            title="Quick Setup"
            steps={simpleSteps}
            currentStep={simpleStep}
            onStepChange={setSimpleStep}
            onNext={() => setSimpleStep(Math.min(simpleStep + 1, simpleSteps.length - 1))}
            onPrevious={() => setSimpleStep(Math.max(simpleStep - 1, 0))}
            onFinish={() => {
              setShowSimpleWizard(false);
              setSimpleStep(0);
            }}
            nextText="Next"
            finishText="Done"
          >
            {simpleStep === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <h3>Basic Information</h3>
                <Input label="Name" placeholder="Enter your name" />
                <Input label="Email" placeholder="Enter your email" type="email" />
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <h3>Review Your Information</h3>
                <p>Please review your details before continuing.</p>
                <Alert variant="info" title="Almost Done">
                  Click "Done" to complete the setup process.
                </Alert>
              </div>
            )}
          </Wizard>
        </div>
      )
    },
    {
      id: 'onboarding-wizard',
      name: 'User Onboarding Wizard',
      description: 'Multi-step onboarding flow for new users',
      code: `<Wizard
  open={showOnboarding}
  onClose={() => setShowOnboarding(false)}
  title="Welcome to Our Platform"
  steps={[
    { id: 'welcome', label: 'Welcome' },
    { id: 'profile', label: 'Set up profile' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'complete', label: 'Complete' }
  ]}
  currentStep={onboardingStep}
  nextText="Continue"
  finishText="Get Started"
>
  {renderOnboardingContent()}
</Wizard>`,
      component: (
        <div>
          <Button onClick={() => setShowOnboardingWizard(true)} variant="tertiary">
            User Onboarding Flow
          </Button>

          <Wizard
            open={showOnboardingWizard}
            onClose={() => setShowOnboardingWizard(false)}
            title="Welcome to Our Platform"
            steps={onboardingSteps}
            currentStep={onboardingStep}
            onStepChange={setOnboardingStep}
            onNext={() => setOnboardingStep(Math.min(onboardingStep + 1, onboardingSteps.length - 1))}
            onPrevious={() => setOnboardingStep(Math.max(onboardingStep - 1, 0))}
            onFinish={() => {
              setShowOnboardingWizard(false);
              setOnboardingStep(0);
            }}
            nextText="Continue"
            finishText="Get Started"
          >
            {onboardingStep === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', textAlign: 'center' }}>
                <h2>👋 Welcome!</h2>
                <p>We're excited to have you on board. Let's get you set up in just a few quick steps.</p>
                <Alert variant="info" title="Quick Setup">
                  This will only take a few minutes to complete.
                </Alert>
              </div>
            )}
            {onboardingStep === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <h3>Set Up Your Profile</h3>
                <Input label="Full Name" placeholder="Enter your full name" />
                <Input label="Job Title" placeholder="Your role or position" />
                <Input label="Company" placeholder="Company name" />
              </div>
            )}
            {onboardingStep === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <h3>Customize Your Experience</h3>
                <p>Help us personalize your experience:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                  {['Marketing Professional', 'Product Manager', 'Developer', 'Other'].map((role) => (
                    <label key={role} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 'var(--spacing-sm)',
                      padding: 'var(--spacing-sm)',
                      border: '1px solid var(--color-gray-40)',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}>
                      <input type="radio" name="role" value={role} />
                      {role}
                    </label>
                  ))}
                </div>
              </div>
            )}
            {onboardingStep === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', textAlign: 'center' }}>
                <h2>🎉 You're All Set!</h2>
                <p>Your account has been configured and you're ready to start exploring.</p>
                <Alert variant="success" title="Setup Complete">
                  Welcome to our platform! Click "Get Started" to begin your journey.
                </Alert>
              </div>
            )}
          </Wizard>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">open</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Controls wizard visibility</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">steps</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">WizardStep[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm"><strong>Required.</strong> Array of wizard steps with id and label</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">currentStep</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">0</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Current active step index</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">title</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Wizard main title displayed in masthead</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onStepChange</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(step: number) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when user clicks on a step</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onNext</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">() =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback for next button</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onPrevious</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">() =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback for previous button</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onFinish</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">() =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when wizard is completed</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onClose</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">() =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when wizard is closed</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">nextText</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"Next"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Text for the next button</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">finishText</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"Finish"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Text for the finish button</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Content for the current step</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function WizardPage() {
  const wizardDemo = WizardDemo();
  
  return (
    <div className="main-content">
      <ComponentShowcase 
        component={componentInfo}
        stories={wizardDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
}