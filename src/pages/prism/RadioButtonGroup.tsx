import React, { useState } from 'react';
import { RadioButtonGroup } from '@prism/radio-button-group';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'radio-button-group',
  name: 'Radio Button Group',
  category: 'Form Elements',
  description: 'Button-style radio selection for mutually exclusive choices. Provides visual emphasis and works well for small sets of options that need more prominence than standard radio buttons.',
  usage: {
    whenToUse: [
      'For 2-5 mutually exclusive options that need visual emphasis',
      'When standard radio buttons feel too subtle',
      'For plan selection, pricing tiers, or subscription options',
      'In settings panels where choices need clear visual distinction',
      'When you need larger touch targets for mobile interfaces'
    ],
    whenNotToUse: [
      'For large sets of options (>5 items) - use dropdowns instead',
      'When space is severely constrained',
      'For simple yes/no choices - use toggle switches',
      'When standard radio buttons provide sufficient clarity',
      'In data-dense interfaces where visual weight matters'
    ],
    anatomy: [
      { element: 'Button group', description: 'Container grouping all radio button options' },
      { element: 'Radio button', description: 'Individual selectable option styled as a button' },
      { element: 'Button label', description: 'Primary text describing the option' },
      { element: 'Button description', description: 'Optional secondary text providing more context' },
      { element: 'Selected state', description: 'Visual indication of the currently active choice' }
    ],
    accessibility: [
      'Use role="radiogroup" for the container',
      'Support arrow key navigation between options',
      'Provide clear focus indicators for keyboard users',
      'Use aria-checked to indicate selected state',
      'Ensure sufficient color contrast for all states'
    ],
    dosDonts: {
      dos: ['Keep option labels concise and clear', 'Group related options logically', 'Provide adequate spacing between options'],
      donts: ['Use too many options in one group', 'Make buttons too small for easy interaction', 'Use unclear or ambiguous labels']
    }
  }
};

// Component stories with live examples
const RadioButtonGroupDemo = (): ComponentStory[] => {
  const [basicValue, setBasicValue] = useState('option-2');
  const [planValue, setPlanValue] = useState('pro');
  const [sizeValue, setSizeValue] = useState('medium');
  const [billingValue, setBillingValue] = useState('monthly');
  const [themeValue, setThemeValue] = useState('light');

  const basicOptions = [
    { value: 'option-1', label: 'Option 1', description: 'First choice available' },
    { value: 'option-2', label: 'Option 2', description: 'Second choice available' },
    { value: 'option-3', label: 'Option 3', description: 'Third choice available', disabled: true },
    { value: 'option-4', label: 'Option 4', description: 'Fourth choice available' },
  ];

  const planOptions = [
    { value: 'basic', label: 'Basic Plan', description: '$9/month - Essential features' },
    { value: 'pro', label: 'Pro Plan', description: '$19/month - Advanced features' },
    { value: 'enterprise', label: 'Enterprise', description: '$49/month - All features' },
  ];

  const sizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  const billingOptions = [
    { value: 'monthly', label: 'Monthly', description: 'Billed every month' },
    { value: 'yearly', label: 'Yearly', description: 'Billed annually (2 months free)' },
  ];

  const componentStories: ComponentStory[] = [
    {
      id: 'basic-usage',
      name: 'Basic Usage',
      description: 'Standard radio button group with labels and descriptions',
      code: `const [selected, setSelected] = useState('option-2');

const options = [
  { value: 'option-1', label: 'Option 1', description: 'First choice available' },
  { value: 'option-2', label: 'Option 2', description: 'Second choice available' },
  { value: 'option-3', label: 'Option 3', description: 'Third choice available', disabled: true },
  { value: 'option-4', label: 'Option 4', description: 'Fourth choice available' },
];

<RadioButtonGroup
  options={options}
  value={selected}
  onValueChange={setSelected}
/>`,
      component: (
        <div>
          <RadioButtonGroup
            options={basicOptions}
            value={basicValue}
            onValueChange={setBasicValue}
          />
          <p style={{ marginTop: 'var(--spacing-md)', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>
            Selected: {basicValue}
          </p>
        </div>
      )
    },
    {
      id: 'size-variants',
      name: 'Size Variants',
      description: 'Different sizes for various use cases',
      code: `{/* Small size */}
<RadioButtonGroup
  options={sizeOptions}
  value={selectedSize}
  onValueChange={setSelectedSize}
  size="small"
/>

{/* Medium size (default) */}
<RadioButtonGroup
  options={sizeOptions}
  value={selectedSize}
  onValueChange={setSelectedSize}
  size="medium"
/>

{/* Large size */}
<RadioButtonGroup
  options={sizeOptions}
  value={selectedSize}
  onValueChange={setSelectedSize}
  size="large"
/>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Small</h4>
            <RadioButtonGroup
              options={sizeOptions}
              value={sizeValue}
              onValueChange={setSizeValue}
              size="small"
            />
          </div>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Medium (Default)</h4>
            <RadioButtonGroup
              options={sizeOptions}
              value={sizeValue}
              onValueChange={setSizeValue}
              size="regular"
            />
          </div>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Large</h4>
            <RadioButtonGroup
              options={sizeOptions}
              value={sizeValue}
              onValueChange={setSizeValue}
              size="large"
            />
          </div>
        </div>
      )
    },
    {
      id: 'visual-variants',
      name: 'Visual Variants',
      description: 'Different styling options for various contexts',
      code: `{/* Default variant */}
<RadioButtonGroup
  options={planOptions}
  defaultValue="pro"
  variant="default"
/>

{/* Outlined variant */}
<RadioButtonGroup
  options={planOptions}
  defaultValue="pro"
  variant="outlined"
/>

{/* Filled variant */}
<RadioButtonGroup
  options={planOptions}
  defaultValue="pro"
  variant="filled"
/>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Default</h4>
            <RadioButtonGroup
              options={planOptions}
              defaultValue="pro"
              variant="default"
            />
          </div>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Outlined</h4>
            <RadioButtonGroup
              options={planOptions}
              defaultValue="pro"
              variant="outlined"
            />
          </div>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Filled</h4>
            <RadioButtonGroup
              options={planOptions}
              defaultValue="pro"
              variant="filled"
            />
          </div>
        </div>
      )
    },
    {
      id: 'orientation-options',
      name: 'Orientation Options',
      description: 'Horizontal and vertical layout options',
      code: `{/* Horizontal (default) */}
<RadioButtonGroup
  options={billingOptions}
  value={billing}
  onValueChange={setBilling}
  orientation="horizontal"
  variant="outlined"
/>

{/* Vertical */}
<RadioButtonGroup
  options={billingOptions}
  value={billing}
  onValueChange={setBilling}
  orientation="vertical"
  variant="outlined"
/>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Horizontal (Default)</h4>
            <RadioButtonGroup
              options={billingOptions}
              value={billingValue}
              onValueChange={setBillingValue}
              orientation="horizontal"
              variant="outlined"
            />
          </div>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-gray-70)' }}>Vertical</h4>
            <RadioButtonGroup
              options={billingOptions}
              value={billingValue}
              onValueChange={setBillingValue}
              orientation="vertical"
              variant="outlined"
            />
          </div>
        </div>
      )
    },
    {
      id: 'plan-selection',
      name: 'Plan Selection Example',
      description: 'Real-world pricing plan selection with descriptions',
      code: `const planOptions = [
  { 
    value: 'basic', 
    label: 'Basic Plan', 
    description: '$9/month - Essential features for individuals'
  },
  { 
    value: 'pro', 
    label: 'Pro Plan', 
    description: '$19/month - Advanced features for professionals'
  },
  { 
    value: 'enterprise', 
    label: 'Enterprise', 
    description: '$49/month - Full feature set for teams'
  }
];

<RadioButtonGroup
  label="Choose your plan"
  options={planOptions}
  value={selectedPlan}
  onValueChange={setSelectedPlan}
  variant="outlined"
  orientation="vertical"
/>`,
      component: (
        <div style={{ maxWidth: '400px' }}>
          <RadioButtonGroup
            label="Choose your plan"
            options={planOptions}
            value={planValue}
            onValueChange={setPlanValue}
            variant="outlined"
            orientation="vertical"
          />
          <div style={{ 
            marginTop: 'var(--spacing-md)', 
            padding: 'var(--spacing-md)', 
            backgroundColor: 'var(--color-teal-10)', 
            borderRadius: '4px',
            border: '1px solid var(--color-teal-30)'
          }}>
            <strong>Selected Plan:</strong> {planOptions.find(p => p.value === planValue)?.label}
          </div>
        </div>
      )
    },
    {
      id: 'theme-selection',
      name: 'Theme Selection',
      description: 'UI theme selection with visual emphasis',
      code: `const themeOptions = [
  { value: 'light', label: '☀️ Light', description: 'Clean and bright interface' },
  { value: 'dark', label: '🌙 Dark', description: 'Easy on the eyes' },
  { value: 'auto', label: '🔄 Auto', description: 'Match system preference' }
];

<RadioButtonGroup
  label="Interface Theme"
  options={themeOptions}
  value={theme}
  onValueChange={setTheme}
  variant="filled"
  size="large"
/>`,
      component: (
        <div style={{ maxWidth: '500px' }}>
          <RadioButtonGroup
            label="Interface Theme"
            options={[
              { value: 'light', label: '☀️ Light', description: 'Clean and bright interface' },
              { value: 'dark', label: '🌙 Dark', description: 'Easy on the eyes' },
              { value: 'auto', label: '🔄 Auto', description: 'Match system preference' }
            ]}
            value={themeValue}
            onValueChange={setThemeValue}
            variant="filled"
            size="large"
          />
        </div>
      )
    },
    {
      id: 'disabled-state',
      name: 'Disabled State',
      description: 'Radio button group in disabled state',
      code: `<RadioButtonGroup
  label="Disabled Options"
  options={planOptions}
  defaultValue="pro"
  disabled={true}
  variant="outlined"
/>`,
      component: (
        <div style={{ maxWidth: '400px' }}>
          <RadioButtonGroup
            label="Disabled Options"
            options={planOptions}
            defaultValue="pro"
            disabled={true}
            variant="outlined"
          />
          <p style={{ 
            marginTop: 'var(--spacing-sm)', 
            fontSize: 'var(--font-size-sm)', 
            color: 'var(--color-gray-70)', 
            fontStyle: 'italic' 
          }}>
            This radio button group is disabled and cannot be interacted with.
          </p>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">options</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">RadioButtonOption[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm"><strong>Required.</strong> Array of options with value, label, and optional description</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">value</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Controlled value of the selected option</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">defaultValue</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Default selected value for uncontrolled usage</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"small" | "medium" | "large"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"medium"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Size variant of the button group</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"default" | "outlined" | "filled"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"default"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Visual style variant</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">orientation</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"horizontal" | "vertical"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"horizontal"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Layout direction of the button group</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Disables the entire button group</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">required</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Marks the field as required for form validation</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Label for the radio group</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">error</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Error message to display below the group</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onValueChange</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(value: string) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when selection changes</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function RadioButtonGroupPage() {
  const radioButtonGroupDemo = RadioButtonGroupDemo();
  
  return (
    <div className="space-y-8">
      <ComponentShowcase 
        component={componentInfo}
        stories={radioButtonGroupDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
}