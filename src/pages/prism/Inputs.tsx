import React, { useState } from 'react';
import { Input } from '@prism/input';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'inputs',
  name: 'Input Fields',
  category: 'Form Elements',
  description: 'Input fields allow users to enter and edit text. They are fundamental form controls for collecting user data and support various states like validation, errors, and different input types.',
  usage: {
    whenToUse: [
      'Collecting single-line text input from users',
      'For forms requiring user data entry',
      'Search functionality and filters',
      'Any field requiring typed input'
    ],
    whenNotToUse: [
      'For multi-line text (use textarea instead)',
      'For binary choices (use checkboxes or toggles)',
      'For selecting from predefined options (use dropdowns)'
    ],
    anatomy: [
      { element: 'Input container', description: 'The main input field element' },
      { element: 'Label', description: 'Descriptive text identifying the input purpose' },
      { element: 'Placeholder (optional)', description: 'Helper text showing expected format' },
      { element: 'Helper text (optional)', description: 'Additional guidance or error messages' }
    ],
    accessibility: [
      'Always provide labels for screen readers',
      'Use aria-describedby for helper text',
      'Ensure proper focus management',
      'Provide clear error messages',
      'Maintain proper tab order'
    ],
    dosDonts: {
      dos: ['Use clear, descriptive labels', 'Provide helpful placeholder text', 'Show clear error states'],
      donts: ['Rely only on placeholder text for labels', 'Make input fields too narrow', 'Use ambiguous validation messages']
    }
  }
};

// Component stories with live examples
const InputsDemo: React.FC = () => {
  const [basicValue, setBasicValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [multilineValue, setMultilineValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const componentStories: ComponentStory[] = [
    {
      id: 'basic',
      name: 'Basic Input',
      description: 'Standard text input field with placeholder',
      code: `const [value, setValue] = useState('');

<Input 
  placeholder="Enter text..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`,
      component: (
        <div style={{ maxWidth: '300px' }}>
          <Input 
            placeholder="Enter text..."
            value={basicValue}
            onChange={(e) => setBasicValue(e.target.value)}
          />
        </div>
      )
    },
    {
      id: 'with-label',
      name: 'Input with Label',
      description: 'Input field with descriptive label',
      code: `<Input
  label="Email"
  placeholder="Enter your email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>`,
      component: (
        <div style={{ maxWidth: '300px' }}>
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
      )
    },
    {
      id: 'states',
      name: 'Input States',
      description: 'Different input states including error and disabled',
      code: `{/* Error state */}
<Input
  label="Username"
  placeholder="Enter username"
  error="This username is already taken"
/>

{/* Disabled state */}
<Input
  label="Disabled Input"
  placeholder="This input is disabled"
  disabled
/>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', maxWidth: '300px' }}>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Error state</h4>
            <Input
              label="Username"
              placeholder="Enter username"
              error="This username is already taken"
            />
          </div>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Disabled state</h4>
            <Input
              label="Disabled Input"
              placeholder="This input is disabled"
              disabled
            />
          </div>
        </div>
      )
    },
    {
      id: 'types',
      name: 'Input Types',
      description: 'Different input types for various data formats',
      code: `{/* Email input */}
<Input
  label="Email"
  type="email"
  placeholder="user@example.com"
/>

{/* Password input */}
<Input
  label="Password"
  type="password"
  placeholder="Enter password"
/>

{/* Number input */}
<Input
  label="Age"
  type="number"
  placeholder="25"
/>

{/* Search input */}
<Input
  label="Search"
  type="search"
  placeholder="Search products..."
/>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', maxWidth: '300px' }}>
          <Input
            label="Email"
            type="email"
            placeholder="user@example.com"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
          />
          <Input
            label="Age"
            type="number"
            placeholder="25"
          />
          <Input
            label="Search"
            type="search"
            placeholder="Search products..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      )
    },
    {
      id: 'multiline',
      name: 'Multiline Input',
      description: 'Textarea for longer text input',
      code: `const [description, setDescription] = useState('');

<Input
  label="Description"
  placeholder="Enter a description..."
  multiline
  rows={4}
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>`,
      component: (
        <div style={{ maxWidth: '400px' }}>
          <Input
            label="Description"
            placeholder="Enter a description..."
            multiline
            rows={4}
            value={multilineValue}
            onChange={(e) => setMultilineValue(e.target.value)}
          />
        </div>
      )
    },
    {
      id: 'form-example',
      name: 'Form Example',
      description: 'Complete form with multiple input types',
      code: `<form className="form-example">
  <Input
    label="Full Name"
    placeholder="John Doe"
    required
  />
  <Input
    label="Email"
    type="email"
    placeholder="john@example.com"
    required
  />
  <Input
    label="Phone"
    type="tel"
    placeholder="+1 (555) 123-4567"
  />
  <Input
    label="Company"
    placeholder="Acme Inc."
  />
  <Input
    label="Message"
    placeholder="Tell us about your project..."
    multiline
    rows={3}
  />
</form>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', maxWidth: '400px' }}>
          <Input
            label="Full Name"
            placeholder="John Doe"
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            required
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
          />
          <Input
            label="Company"
            placeholder="Acme Inc."
          />
          <Input
            label="Message"
            placeholder="Tell us about your project..."
            multiline
            rows={3}
          />
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Label text displayed above the input</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">placeholder</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Placeholder text shown when input is empty</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">type</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"text"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">HTML input type (text, email, password, etc.)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">error</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Error message to display below the input</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">multiline</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether to use a textarea instead of an input</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">rows</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">3</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Number of rows for textarea</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the input is disabled</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">required</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the input is required</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Inputs() {
  const inputsDemo = InputsDemo();
  
  return (
    <div className="prism-preview">
      <ComponentShowcase 
        component={componentInfo}
        stories={inputsDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
}