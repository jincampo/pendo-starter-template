import React, { useState } from 'react';
import { Dropdown, DropdownOption } from '@prism/dropdown';
import { Icon } from '@prism/icon';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'dropdowns',
  name: 'Dropdowns',
  category: 'Form Elements',
  description: 'Dropdowns allow users to select a single value from a list of options. They save space by hiding options until activated and support various styles, states, and customizations.',
  usage: {
    whenToUse: [
      'When you have 4+ options to choose from',
      'To save space compared to radio buttons',
      'For selecting from a list of known options',
      'When options are categorical or predefined',
      'In forms where space is limited'
    ],
    whenNotToUse: [
      'For 2-3 options (use radio buttons instead)',
      'When users need to see all options at once',
      'For text input (use text fields)',
      'When options change frequently',
      'For complex multi-select (use specialized components)'
    ],
    anatomy: [
      { element: 'Trigger button', description: 'Clickable element showing selected value or placeholder' },
      { element: 'Dropdown icon', description: 'Arrow indicator showing dropdown state' },
      { element: 'Options list', description: 'Popup containing selectable options' },
      { element: 'Option item', description: 'Individual selectable choice' },
      { element: 'Label (optional)', description: 'Descriptive text above the dropdown' }
    ],
    accessibility: [
      'Use role="combobox" and aria-expanded for the trigger',
      'Support keyboard navigation with arrow keys',
      'Use aria-selected for the chosen option',
      'Provide clear labels and descriptions',
      'Support Escape key to close dropdown'
    ],
    dosDonts: {
      dos: ['Keep option labels concise', 'Order options logically', 'Provide clear default selections'],
      donts: ['Use dropdowns for very few options', 'Make dropdowns too narrow for content', 'Hide critical options at the bottom']
    }
  }
};

// Component stories with live examples
const DropdownsDemo = (): ComponentStory[] => {
  const [basicValue, setBasicValue] = useState('');
  const [statusValue, setStatusValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');

  const componentStories: ComponentStory[] = [
    {
      id: 'basic',
      name: 'Basic Dropdown',
      description: 'Simple dropdown with placeholder and options',
      code: `const [selected, setSelected] = useState('');

<Dropdown 
  placeholder="Select a fruit"
  value={selected}
  onChange={setSelected}
>
  <DropdownOption value="apple">Apple</DropdownOption>
  <DropdownOption value="banana">Banana</DropdownOption>
  <DropdownOption value="orange">Orange</DropdownOption>
  <DropdownOption value="grape">Grape</DropdownOption>
</Dropdown>`,
      component: (
        <div style={{ maxWidth: '250px' }}>
          <Dropdown 
            placeholder="Select a fruit"
            value={basicValue}
            onChange={setBasicValue}
          >
            <DropdownOption value="apple">🍎 Apple</DropdownOption>
            <DropdownOption value="banana">🍌 Banana</DropdownOption>
            <DropdownOption value="orange">🍊 Orange</DropdownOption>
            <DropdownOption value="grape">🍇 Grape</DropdownOption>
          </Dropdown>
          {basicValue && (
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>
              Selected: {basicValue}
            </p>
          )}
        </div>
      )
    },
    {
      id: 'with-label-error',
      name: 'Dropdown with Label and Error',
      description: 'Dropdown with form validation states',
      code: `<Dropdown
  label="Favorite Fruit"
  placeholder="Select a fruit"
  error="Please select a fruit"
  value={value}
  onChange={setValue}
>
  <DropdownOption value="apple">Apple</DropdownOption>
  <DropdownOption value="banana">Banana</DropdownOption>
  <DropdownOption value="orange">Orange</DropdownOption>
</Dropdown>`,
      component: (
        <div style={{ maxWidth: '250px' }}>
          <Dropdown
            label="Favorite Fruit"
            placeholder="Select a fruit"
            error="Please select a fruit"
          >
            <DropdownOption value="apple">🍎 Apple</DropdownOption>
            <DropdownOption value="banana">🍌 Banana</DropdownOption>
            <DropdownOption value="orange">🍊 Orange</DropdownOption>
          </Dropdown>
        </div>
      )
    },
    {
      id: 'with-prefix-icon',
      name: 'Dropdown with Prefix Icon',
      description: 'Dropdown with icon indicating the content type',
      code: `<Dropdown
  placeholder="Select a status"
  prefixIcon={<Icon name="Circle" size="small" />}
  value={status}
  onChange={setStatus}
>
  <DropdownOption value="active">Active</DropdownOption>
  <DropdownOption value="inactive">Inactive</DropdownOption>
  <DropdownOption value="pending">Pending</DropdownOption>
  <DropdownOption value="suspended">Suspended</DropdownOption>
</Dropdown>`,
      component: (
        <div style={{ maxWidth: '250px' }}>
          <Dropdown
            placeholder="Select a status"
            prefixIcon={<Icon name="Circle" size="small" color="var(--color-gray-50)" />}
            value={statusValue}
            onChange={setStatusValue}
          >
            <DropdownOption value="active">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                <Icon name="Circle" size="small" color="var(--color-green-70)" />
                Active
              </div>
            </DropdownOption>
            <DropdownOption value="inactive">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                <Icon name="Circle" size="small" color="var(--color-gray-50)" />
                Inactive
              </div>
            </DropdownOption>
            <DropdownOption value="pending">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                <Icon name="Circle" size="small" color="var(--color-yellow-60)" />
                Pending
              </div>
            </DropdownOption>
            <DropdownOption value="suspended">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                <Icon name="Circle" size="small" color="var(--color-red-60)" />
                Suspended
              </div>
            </DropdownOption>
          </Dropdown>
        </div>
      )
    },
    {
      id: 'text-trigger',
      name: 'Text Trigger Dropdown',
      description: 'Minimal dropdown with text-only trigger',
      code: `<Dropdown
  triggerType="text"
  placeholder="Sort by"
  value={sortBy}
  onChange={setSortBy}
>
  <DropdownOption value="name">Name (A-Z)</DropdownOption>
  <DropdownOption value="date">Date (Newest)</DropdownOption>
  <DropdownOption value="size">Size (Largest)</DropdownOption>
  <DropdownOption value="type">Type</DropdownOption>
</Dropdown>`,
      component: (
        <div style={{ maxWidth: '200px' }}>
          <Dropdown
            triggerType="text"
            placeholder="Sort by"
            value={sortValue}
            onChange={setSortValue}
          >
            <DropdownOption value="name">Name (A-Z)</DropdownOption>
            <DropdownOption value="date">Date (Newest)</DropdownOption>
            <DropdownOption value="size">Size (Largest)</DropdownOption>
            <DropdownOption value="type">Type</DropdownOption>
          </Dropdown>
        </div>
      )
    },
    {
      id: 'disabled-states',
      name: 'Disabled States',
      description: 'Dropdown and option disabled states',
      code: `{/* Disabled dropdown */}
<Dropdown
  placeholder="Select an option"
  disabled
>
  <DropdownOption value="1">Option 1</DropdownOption>
  <DropdownOption value="2">Option 2</DropdownOption>
</Dropdown>

{/* Disabled options */}
<Dropdown placeholder="Select an option">
  <DropdownOption value="1">Available Option</DropdownOption>
  <DropdownOption value="2" disabled>Disabled Option</DropdownOption>
  <DropdownOption value="3">Another Available</DropdownOption>
</Dropdown>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', maxWidth: '250px' }}>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Disabled Dropdown</h4>
            <Dropdown
              placeholder="Select an option"
              disabled
            >
              <DropdownOption value="1">Option 1</DropdownOption>
              <DropdownOption value="2">Option 2</DropdownOption>
            </Dropdown>
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Disabled Options</h4>
            <Dropdown placeholder="Select an option">
              <DropdownOption value="1">Available Option</DropdownOption>
              <DropdownOption value="2" disabled>Disabled Option</DropdownOption>
              <DropdownOption value="3">Another Available</DropdownOption>
            </Dropdown>
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Text Trigger Disabled</h4>
            <Dropdown
              triggerType="text"
              placeholder="Sort by"
              disabled
            >
              <DropdownOption value="name">Name</DropdownOption>
              <DropdownOption value="date">Date</DropdownOption>
            </Dropdown>
          </div>
        </div>
      )
    },
    {
      id: 'category-selection',
      name: 'Category Selection',
      description: 'Real-world example with categorized options',
      code: `<Dropdown
  label="Product Category"
  placeholder="Choose a category"
  value={category}
  onChange={setCategory}
>
  <DropdownOption value="electronics">
    📱 Electronics
  </DropdownOption>
  <DropdownOption value="clothing">
    👕 Clothing & Fashion
  </DropdownOption>
  <DropdownOption value="home">
    🏠 Home & Garden
  </DropdownOption>
  <DropdownOption value="books">
    📚 Books & Media
  </DropdownOption>
  <DropdownOption value="sports">
    ⚽ Sports & Outdoors
  </DropdownOption>
  <DropdownOption value="toys">
    🧸 Toys & Games
  </DropdownOption>
</Dropdown>`,
      component: (
        <div style={{ maxWidth: '300px' }}>
          <Dropdown
            label="Product Category"
            placeholder="Choose a category"
            value={categoryValue}
            onChange={setCategoryValue}
          >
            <DropdownOption value="electronics">
              📱 Electronics
            </DropdownOption>
            <DropdownOption value="clothing">
              👕 Clothing & Fashion
            </DropdownOption>
            <DropdownOption value="home">
              🏠 Home & Garden
            </DropdownOption>
            <DropdownOption value="books">
              📚 Books & Media
            </DropdownOption>
            <DropdownOption value="sports">
              ⚽ Sports & Outdoors
            </DropdownOption>
            <DropdownOption value="toys">
              🧸 Toys & Games
            </DropdownOption>
          </Dropdown>
        </div>
      )
    },
    {
      id: 'use-cases',
      name: 'Common Use Cases',
      description: 'Real-world dropdown implementations',
      code: `{/* User role selection */}
<Dropdown label="User Role" placeholder="Select role">
  <DropdownOption value="admin">Administrator</DropdownOption>
  <DropdownOption value="editor">Editor</DropdownOption>
  <DropdownOption value="viewer">Viewer</DropdownOption>
</Dropdown>

{/* Time zone selection */}
<Dropdown label="Time Zone" placeholder="Select timezone">
  <DropdownOption value="pst">Pacific Time (PST)</DropdownOption>
  <DropdownOption value="mst">Mountain Time (MST)</DropdownOption>
  <DropdownOption value="cst">Central Time (CST)</DropdownOption>
  <DropdownOption value="est">Eastern Time (EST)</DropdownOption>
</Dropdown>

{/* Language selection */}
<Dropdown 
  label="Language" 
  placeholder="Choose language"
  prefixIcon={<Icon name="Globe" size="small" />}
>
  <DropdownOption value="en">🇺🇸 English</DropdownOption>
  <DropdownOption value="es">🇪🇸 Español</DropdownOption>
  <DropdownOption value="fr">🇫🇷 Français</DropdownOption>
  <DropdownOption value="de">🇩🇪 Deutsch</DropdownOption>
</Dropdown>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', maxWidth: '280px' }}>
          <Dropdown label="User Role" placeholder="Select role">
            <DropdownOption value="admin">👑 Administrator</DropdownOption>
            <DropdownOption value="editor">✏️ Editor</DropdownOption>
            <DropdownOption value="viewer">👁️ Viewer</DropdownOption>
          </Dropdown>

          <Dropdown label="Time Zone" placeholder="Select timezone">
            <DropdownOption value="pst">🌅 Pacific Time (PST)</DropdownOption>
            <DropdownOption value="mst">🏔️ Mountain Time (MST)</DropdownOption>
            <DropdownOption value="cst">🌾 Central Time (CST)</DropdownOption>
            <DropdownOption value="est">🌆 Eastern Time (EST)</DropdownOption>
          </Dropdown>

          <Dropdown 
            label="Language" 
            placeholder="Choose language"
            prefixIcon={<Icon name="Globe" size="small" />}
          >
            <DropdownOption value="en">🇺🇸 English</DropdownOption>
            <DropdownOption value="es">🇪🇸 Español</DropdownOption>
            <DropdownOption value="fr">🇫🇷 Français</DropdownOption>
            <DropdownOption value="de">🇩🇪 Deutsch</DropdownOption>
          </Dropdown>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">value</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">The currently selected value</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">placeholder</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"Select an option"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Placeholder text when no value is selected</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Label text displayed above the dropdown</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">error</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Error message to display below the dropdown</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the dropdown is disabled</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">prefixIcon</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Optional icon to display before the text</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">triggerType</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"default" | "text"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"default"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">The visual style of the dropdown trigger</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onChange</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(value: string) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when the selected value changes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">DropdownOption[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">DropdownOption components representing choices</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Dropdowns() {
  const dropdownsDemo = DropdownsDemo();
  
  return (
    <div className="prism-preview">
      <ComponentShowcase 
        component={componentInfo}
        stories={dropdownsDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
}