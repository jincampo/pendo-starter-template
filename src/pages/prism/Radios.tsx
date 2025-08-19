import React, { useState } from 'react';
import { Radio } from '@prism/radio';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'radios',
  name: 'Radio Buttons',
  category: 'Form Elements',
  description: 'Radio buttons allow users to select a single option from a list of mutually exclusive choices. They work as a group where only one option can be selected at a time.',
  usage: {
    whenToUse: [
      'For mutually exclusive options (only one can be selected)',
      'When you have 2-7 options to choose from',
      'When the user needs to see all available options',
      'For settings where only one choice is valid'
    ],
    whenNotToUse: [
      'For multiple selections (use checkboxes instead)',
      'For binary on/off choices (use toggle switches)',
      'When you have many options (use dropdown instead)',
      'For independent options that don\'t affect each other'
    ],
    anatomy: [
      { element: 'Radio input', description: 'The circular control that can be selected' },
      { element: 'Label', description: 'Descriptive text explaining the option' },
      { element: 'Radio group', description: 'Container grouping related radio options' },
      { element: 'Selected indicator', description: 'Visual mark showing the active choice' }
    ],
    accessibility: [
      'Use fieldset and legend for grouping related radios',
      'Provide clear labels for each radio option',
      'Ensure adequate click target size (44px minimum)',
      'Support keyboard navigation (arrow keys)',
      'Use role="radiogroup" for custom implementations'
    ],
    dosDonts: {
      dos: ['Group related options logically', 'Use clear, descriptive labels', 'Show all options at once'],
      donts: ['Use for multiple selections', 'Have too many options (>7)', 'Use unclear or ambiguous labels']
    }
  }
};

// Component stories with live examples
const RadiosDemo: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [theme, setTheme] = useState('light');
  const [notification, setNotification] = useState('email');

  const componentStories: ComponentStory[] = [
    {
      id: 'basic',
      name: 'Basic Radio Buttons',
      description: 'Simple radio group with mutually exclusive options',
      code: `const [selected, setSelected] = useState('option1');

<div className="radio-group">
  <label>
    <Radio
      name="example"
      value="option1"
      checked={selected === 'option1'}
      onCheckedChange={() => setSelected('option1')}
    />
    Option 1
  </label>
  
  <label>
    <Radio
      name="example"
      value="option2"
      checked={selected === 'option2'}
      onCheckedChange={() => setSelected('option2')}
    />
    Option 2
  </label>
  
  <label>
    <Radio
      name="example"
      value="option3"
      checked={selected === 'option3'}
      onCheckedChange={() => setSelected('option3')}
    />
    Option 3
  </label>
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
            <Radio
              name="example"
              value="option1"
              checked={selectedOption === 'option1'}
              onCheckedChange={() => setSelectedOption('option1')}
            />
            <span>Option 1</span>
          </label>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
            <Radio
              name="example"
              value="option2"
              checked={selectedOption === 'option2'}
              onCheckedChange={() => setSelectedOption('option2')}
            />
            <span>Option 2</span>
          </label>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
            <Radio
              name="example"
              value="option3"
              checked={selectedOption === 'option3'}
              onCheckedChange={() => setSelectedOption('option3')}
            />
            <span>Option 3</span>
          </label>
          
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)', margin: 'var(--spacing-sm) 0 0 0' }}>
            Selected: {selectedOption}
          </p>
        </div>
      )
    },
    {
      id: 'states',
      name: 'Radio States',
      description: 'Different radio button states',
      code: `{/* Different states */}
<div className="radio-states">
  <Radio />                    {/* Default */}
  <Radio checked />            {/* Selected */}
  <Radio disabled />           {/* Disabled */}
  <Radio checked disabled />   {/* Selected Disabled */}
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Default:</span>
            <Radio />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Selected:</span>
            <Radio checked />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Disabled:</span>
            <Radio disabled />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Selected Disabled:</span>
            <Radio checked disabled />
          </div>
        </div>
      )
    },
    {
      id: 'payment-method',
      name: 'Payment Method Selection',
      description: 'Real-world example of payment method selection',
      code: `const [paymentMethod, setPaymentMethod] = useState('credit-card');

<fieldset className="payment-methods">
  <legend>Payment Method</legend>
  
  <label>
    <Radio
      name="payment"
      value="credit-card"
      checked={paymentMethod === 'credit-card'}
      onCheckedChange={() => setPaymentMethod('credit-card')}
    />
    Credit Card
  </label>
  
  <label>
    <Radio
      name="payment"
      value="paypal"
      checked={paymentMethod === 'paypal'}
      onCheckedChange={() => setPaymentMethod('paypal')}
    />
    PayPal
  </label>
  
  <label>
    <Radio
      name="payment"
      value="bank-transfer"
      checked={paymentMethod === 'bank-transfer'}
      onCheckedChange={() => setPaymentMethod('bank-transfer')}
    />
    Bank Transfer
  </label>
</fieldset>`,
      component: (
        <fieldset style={{ 
          border: '1px solid var(--color-gray-40)', 
          borderRadius: '4px', 
          padding: 'var(--spacing-md)',
          maxWidth: '300px'
        }}>
          <legend style={{ 
            padding: '0 var(--spacing-xs)', 
            fontSize: 'var(--font-size-sm)', 
            fontWeight: 'var(--font-weight-medium)' 
          }}>
            Payment Method
          </legend>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
              <Radio
                name="payment"
                value="credit-card"
                checked={paymentMethod === 'credit-card'}
                onCheckedChange={() => setPaymentMethod('credit-card')}
              />
              <span>💳 Credit Card</span>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
              <Radio
                name="payment"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onCheckedChange={() => setPaymentMethod('paypal')}
              />
              <span>🏦 PayPal</span>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
              <Radio
                name="payment"
                value="bank-transfer"
                checked={paymentMethod === 'bank-transfer'}
                onCheckedChange={() => setPaymentMethod('bank-transfer')}
              />
              <span>🏧 Bank Transfer</span>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer', opacity: 0.6 }}>
              <Radio disabled />
              <span>💵 Cash (Coming Soon)</span>
            </label>
          </div>
        </fieldset>
      )
    },
    {
      id: 'theme-selection',
      name: 'Theme Selection',
      description: 'User preference selection with descriptions',
      code: `const [theme, setTheme] = useState('light');

<div className="theme-selection">
  <h4>Choose your theme</h4>
  
  <div className="theme-option">
    <Radio
      name="theme"
      value="light"
      checked={theme === 'light'}
      onCheckedChange={() => setTheme('light')}
    />
    <div className="option-content">
      <strong>Light Theme</strong>
      <p>Clean and bright interface</p>
    </div>
  </div>
  
  <div className="theme-option">
    <Radio
      name="theme"
      value="dark"
      checked={theme === 'dark'}
      onCheckedChange={() => setTheme('dark')}
    />
    <div className="option-content">
      <strong>Dark Theme</strong>
      <p>Easy on the eyes for low-light environments</p>
    </div>
  </div>
  
  <div className="theme-option">
    <Radio
      name="theme"
      value="auto"
      checked={theme === 'auto'}
      onCheckedChange={() => setTheme('auto')}
    />
    <div className="option-content">
      <strong>Auto</strong>
      <p>Matches your system preference</p>
    </div>
  </div>
</div>`,
      component: (
        <div style={{ maxWidth: '400px' }}>
          <h4 style={{ margin: '0 0 var(--spacing-md) 0', fontSize: 'var(--font-size-base)' }}>Choose your theme</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 'var(--spacing-sm)', 
              padding: 'var(--spacing-sm)',
              border: `1px solid ${theme === 'light' ? 'var(--color-teal-70)' : 'var(--color-gray-40)'}`,
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: theme === 'light' ? 'var(--color-teal-10)' : 'transparent'
            }}>
              <Radio
                name="theme"
                value="light"
                checked={theme === 'light'}
                onCheckedChange={() => setTheme('light')}
              />
              <div>
                <strong style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Light Theme</strong>
                <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>
                  Clean and bright interface
                </p>
              </div>
            </label>
            
            <label style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 'var(--spacing-sm)', 
              padding: 'var(--spacing-sm)',
              border: `1px solid ${theme === 'dark' ? 'var(--color-teal-70)' : 'var(--color-gray-40)'}`,
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: theme === 'dark' ? 'var(--color-teal-10)' : 'transparent'
            }}>
              <Radio
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onCheckedChange={() => setTheme('dark')}
              />
              <div>
                <strong style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Dark Theme</strong>
                <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>
                  Easy on the eyes for low-light environments
                </p>
              </div>
            </label>
            
            <label style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 'var(--spacing-sm)', 
              padding: 'var(--spacing-sm)',
              border: `1px solid ${theme === 'auto' ? 'var(--color-teal-70)' : 'var(--color-gray-40)'}`,
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: theme === 'auto' ? 'var(--color-teal-10)' : 'transparent'
            }}>
              <Radio
                name="theme"
                value="auto"
                checked={theme === 'auto'}
                onCheckedChange={() => setTheme('auto')}
              />
              <div>
                <strong style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Auto</strong>
                <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>
                  Matches your system preference
                </p>
              </div>
            </label>
          </div>
        </div>
      )
    },
    {
      id: 'notification-settings',
      name: 'Notification Preferences',
      description: 'Settings form with radio button groups',
      code: `const [notification, setNotification] = useState('email');

<form className="notification-settings">
  <fieldset>
    <legend>How would you like to receive notifications?</legend>
    
    <label>
      <Radio
        name="notifications"
        value="email"
        checked={notification === 'email'}
        onCheckedChange={() => setNotification('email')}
      />
      Email notifications
    </label>
    
    <label>
      <Radio
        name="notifications"
        value="sms"
        checked={notification === 'sms'}
        onCheckedChange={() => setNotification('sms')}
      />
      SMS notifications
    </label>
    
    <label>
      <Radio
        name="notifications"
        value="push"
        checked={notification === 'push'}
        onCheckedChange={() => setNotification('push')}
      />
      Push notifications
    </label>
    
    <label>
      <Radio
        name="notifications"
        value="none"
        checked={notification === 'none'}
        onCheckedChange={() => setNotification('none')}
      />
      No notifications
    </label>
  </fieldset>
</form>`,
      component: (
        <form style={{ maxWidth: '350px' }}>
          <fieldset style={{ 
            border: '1px solid var(--color-gray-40)', 
            borderRadius: '4px', 
            padding: 'var(--spacing-md)' 
          }}>
            <legend style={{ 
              padding: '0 var(--spacing-xs)', 
              fontSize: 'var(--font-size-sm)', 
              fontWeight: 'var(--font-weight-medium)' 
            }}>
              How would you like to receive notifications?
            </legend>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
                <Radio
                  name="notifications"
                  value="email"
                  checked={notification === 'email'}
                  onCheckedChange={() => setNotification('email')}
                />
                <span>📧 Email notifications</span>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
                <Radio
                  name="notifications"
                  value="sms"
                  checked={notification === 'sms'}
                  onCheckedChange={() => setNotification('sms')}
                />
                <span>📱 SMS notifications</span>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
                <Radio
                  name="notifications"
                  value="push"
                  checked={notification === 'push'}
                  onCheckedChange={() => setNotification('push')}
                />
                <span>🔔 Push notifications</span>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
                <Radio
                  name="notifications"
                  value="none"
                  checked={notification === 'none'}
                  onCheckedChange={() => setNotification('none')}
                />
                <span>🔕 No notifications</span>
              </label>
            </div>
          </fieldset>
        </form>
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">name</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Name attribute for grouping radio buttons</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">value</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Value of the radio button</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">checked</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the radio button is selected</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the radio button is disabled</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onCheckedChange</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(checked: boolean) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when the radio state changes</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Radios() {
  const radiosDemo = RadiosDemo();
  
  return (
    <div className="prism-preview">
      <ComponentShowcase 
        component={componentInfo}
        stories={radiosDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
}