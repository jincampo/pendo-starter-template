import React, { useState } from 'react';
import { Checkbox } from '@prism/checkbox';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'checkboxes',
  name: 'Checkboxes',
  category: 'Form Elements',
  description: 'Checkboxes allow users to select one or multiple options from a set. They represent a binary choice for each option and can be used independently or as part of a group.',
  usage: {
    whenToUse: [
      'Users need to select multiple options from a list',
      'For binary choices (opt-in/opt-out)',
      'To confirm user agreement (terms and conditions)',
      'In forms where multiple selections are allowed'
    ],
    whenNotToUse: [
      'For mutually exclusive options (use radio buttons)',
      'For simple on/off states (use toggle switches)',
      'When only one option can be selected'
    ],
    anatomy: [
      { element: 'Checkbox input', description: 'The clickable checkbox control' },
      { element: 'Label', description: 'Descriptive text for the checkbox option' },
      { element: 'Check indicator', description: 'Visual mark showing selected state' },
      { element: 'Container', description: 'The overall clickable area' }
    ],
    accessibility: [
      'Provide clear labels for each checkbox',
      'Use fieldset and legend for grouped checkboxes',
      'Ensure adequate click target size (44px minimum)',
      'Provide focus indicators',
      'Support keyboard navigation (space to toggle)'
    ],
    dosDonts: {
      dos: ['Group related checkboxes logically', 'Use clear, descriptive labels', 'Indicate required vs optional selections'],
      donts: ['Use for mutually exclusive choices', 'Make labels too long or complex', 'Forget to handle indeterminate states when needed']
    }
  }
};

// Component stories with live examples
const CheckboxesDemo = (): ComponentStory[] => {
  const [basicChecked, setBasicChecked] = useState(false);
  const [indeterminateChecked, setIndeterminateChecked] = useState(false);
  const [indeterminateState, setIndeterminateState] = useState(true);
  const [preferences, setPreferences] = useState({
    notifications: true,
    newsletter: false,
    updates: true
  });
  const [selectAll, setSelectAll] = useState(false);
  const [items, setItems] = useState({
    item1: false,
    item2: false,
    item3: false
  });

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    setItems({
      item1: checked,
      item2: checked,
      item3: checked
    });
  };

  const handleItemChange = (itemKey: string, checked: boolean) => {
    const newItems = { ...items, [itemKey]: checked };
    setItems(newItems);
    
    const checkedCount = Object.values(newItems).filter(Boolean).length;
    const totalCount = Object.keys(newItems).length;
    
    setSelectAll(checkedCount === totalCount);
  };

  const componentStories: ComponentStory[] = [
    {
      id: 'basic',
      name: 'Basic Checkboxes',
      description: 'Simple checkbox options with different states',
      code: `const [checked, setChecked] = useState(false);

<div className="checkbox-group">
  <Checkbox 
    checked={checked}
    onCheckedChange={setChecked}
  >
    Toggle me
  </Checkbox>
  
  <Checkbox checked>
    Checked option
  </Checkbox>
  
  <Checkbox>
    Unchecked option
  </Checkbox>
  
  <Checkbox disabled>
    Disabled option
  </Checkbox>
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
            <Checkbox 
              checked={basicChecked}
              onCheckedChange={setBasicChecked}
            />
            <span>Toggle me</span>
          </label>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
            <Checkbox checked />
            <span>Checked option</span>
          </label>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
            <Checkbox />
            <span>Unchecked option</span>
          </label>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer', opacity: 0.6 }}>
            <Checkbox disabled />
            <span>Disabled option</span>
          </label>
        </div>
      )
    },
    {
      id: 'states',
      name: 'Checkbox States',
      description: 'All checkbox states including indeterminate',
      code: `{/* Different states */}
<div className="checkbox-states">
  <Checkbox checked />           {/* Selected */}
  <Checkbox indeterminate />     {/* Indeterminate */}
  <Checkbox />                   {/* Default */}
  <Checkbox checked disabled />  {/* Selected Disabled */}
  <Checkbox disabled />          {/* Disabled */}
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Selected:</span>
              <Checkbox checked />
            </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Indeterminate:</span>
              <Checkbox indeterminate />
            </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Default:</span>
              <Checkbox />
            </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Selected Disabled:</span>
              <Checkbox checked disabled />
            </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Disabled:</span>
              <Checkbox disabled />
            </div>
          </div>
      )
    },
    {
      id: 'indeterminate',
      name: 'Indeterminate State',
      description: 'Checkbox with indeterminate state that becomes checked when clicked',
      code: `const [indeterminate, setIndeterminate] = useState(true);
const [checked, setChecked] = useState(false);

<Checkbox
  indeterminate={indeterminate}
  checked={!indeterminate && checked}
  onCheckedChange={(newChecked) => {
    setIndeterminate(false);
    setChecked(newChecked);
  }}
>
  Indeterminate example
</Checkbox>`,
      component: (
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
            <Checkbox
              indeterminate={indeterminateState}
              checked={!indeterminateState && indeterminateChecked}
              onCheckedChange={(newChecked) => {
                setIndeterminateState(false);
                setIndeterminateChecked(newChecked);
              }}
            />
            <span>Indeterminate example</span>
          </label>
          <button 
            onClick={() => {
              setIndeterminateState(true);
              setIndeterminateChecked(false);
            }}
            style={{ 
              marginTop: 'var(--spacing-sm)', 
              padding: 'var(--spacing-xs) var(--spacing-sm)', 
              border: '1px solid var(--color-gray-50)', 
              borderRadius: '3px', 
              backgroundColor: 'var(--color-gray-0)', 
              cursor: 'pointer',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            Reset to indeterminate
          </button>
        </div>
      )
    },
    {
      id: 'group',
      name: 'Checkbox Group',
      description: 'Multiple related checkbox options in a group',
      code: `const [preferences, setPreferences] = useState({
  notifications: true,
  newsletter: false,
  updates: true
});

<fieldset className="checkbox-group">
  <legend>Preferences</legend>
  <Checkbox
    checked={preferences.notifications}
    onCheckedChange={(checked) => 
      setPreferences(prev => ({ ...prev, notifications: checked }))
    }
  >
    Email notifications
  </Checkbox>
  <Checkbox
    checked={preferences.newsletter}
    onCheckedChange={(checked) => 
      setPreferences(prev => ({ ...prev, newsletter: checked }))
    }
  >
    Newsletter subscription
  </Checkbox>
  <Checkbox
    checked={preferences.updates}
    onCheckedChange={(checked) => 
      setPreferences(prev => ({ ...prev, updates: checked }))
    }
  >
    Product updates
  </Checkbox>
</fieldset>`,
      component: (
        <fieldset style={{ border: '1px solid var(--color-gray-40)', borderRadius: '4px', padding: 'var(--spacing-md)' }}>
          <legend style={{ padding: '0 var(--spacing-xs)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>Preferences</legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
              <Checkbox
                checked={preferences.notifications}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, notifications: checked }))
                }
              />
              <span>Email notifications</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
              <Checkbox
                checked={preferences.newsletter}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, newsletter: checked }))
                }
              />
              <span>Newsletter subscription</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
              <Checkbox
                checked={preferences.updates}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, updates: checked }))
                }
              />
              <span>Product updates</span>
              </label>
            </div>
        </fieldset>
      )
    },
    {
      id: 'select-all',
      name: 'Select All Pattern',
      description: 'Master checkbox that controls multiple child checkboxes',
      code: `const [selectAll, setSelectAll] = useState(false);
const [items, setItems] = useState({
  item1: false,
  item2: false,
  item3: false
});

const handleSelectAll = (checked) => {
  setSelectAll(checked);
  setItems({
    item1: checked,
    item2: checked,
    item3: checked
  });
};

const handleItemChange = (itemKey, checked) => {
  const newItems = { ...items, [itemKey]: checked };
  setItems(newItems);
  
  const checkedCount = Object.values(newItems).filter(Boolean).length;
  const totalCount = Object.keys(newItems).length;
  
  setSelectAll(checkedCount === totalCount);
};

<div className="select-all-pattern">
  <Checkbox
    checked={selectAll}
    indeterminate={Object.values(items).some(Boolean) && !selectAll}
    onCheckedChange={handleSelectAll}
  >
    Select All
  </Checkbox>
  
  <div className="ml-4">
    <Checkbox
      checked={items.item1}
      onCheckedChange={(checked) => handleItemChange('item1', checked)}
    >
      Item 1
    </Checkbox>
    <Checkbox
      checked={items.item2}
      onCheckedChange={(checked) => handleItemChange('item2', checked)}
    >
      Item 2
    </Checkbox>
    <Checkbox
      checked={items.item3}
      onCheckedChange={(checked) => handleItemChange('item3', checked)}
    >
      Item 3
    </Checkbox>
  </div>
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer', fontWeight: 'var(--font-weight-medium)' }}>
            <Checkbox
              checked={selectAll}
              indeterminate={Object.values(items).some(Boolean) && !selectAll}
              onCheckedChange={handleSelectAll}
            />
            <span>Select All</span>
          </label>
          
          <div style={{ marginLeft: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
              <Checkbox
                checked={items.item1}
                onCheckedChange={(checked) => handleItemChange('item1', checked)}
              />
              <span>Item 1</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
              <Checkbox
                checked={items.item2}
                onCheckedChange={(checked) => handleItemChange('item2', checked)}
              />
              <span>Item 2</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
              <Checkbox
                checked={items.item3}
                onCheckedChange={(checked) => handleItemChange('item3', checked)}
              />
              <span>Item 3</span>
              </label>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">checked</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the checkbox is checked</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">indeterminate</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the checkbox is in an indeterminate state</td>
              </tr>
              <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the checkbox is disabled</td>
              </tr>
              <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onCheckedChange</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(checked: boolean) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when the checkbox state changes</td>
              </tr>
              <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Label content for the checkbox</td>
              </tr>
            </tbody>
          </table>
  </div>
);

export default function Checkboxes() {
  const checkboxesDemo = CheckboxesDemo();
  
  return (
    <div className="prism-preview">
      <ComponentShowcase 
        component={componentInfo}
        stories={checkboxesDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
}