import React, { useState } from 'react';
import { Toggle } from '@prism/toggle';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'toggles',
  name: 'Toggle Switches',
  category: 'Form Elements',
  description: 'Toggle switches allow users to turn an option on or off. They provide an immediate, binary choice with clear visual feedback about the current state.',
  usage: {
    whenToUse: [
      'For on/off settings and preferences',
      'To enable or disable features instantly',
      'When the change takes effect immediately',
      'For binary choices that don\'t require confirmation'
    ],
    whenNotToUse: [
      'For actions that require confirmation',
      'When multiple options need to be selected (use checkboxes)',
      'For navigation or links (use buttons)',
      'When the action has serious consequences'
    ],
    anatomy: [
      { element: 'Track', description: 'The background rail that indicates the toggle area' },
      { element: 'Thumb', description: 'The draggable control that slides between positions' },
      { element: 'Label (optional)', description: 'Descriptive text explaining the toggle purpose' },
      { element: 'State indicator', description: 'Visual changes showing current on/off state' }
    ],
    accessibility: [
      'Provide clear labels describing what the toggle controls',
      'Use role="switch" and aria-checked attributes',
      'Ensure adequate focus indicators',
      'Support keyboard navigation (space bar to toggle)',
      'Provide immediate feedback when state changes'
    ],
    dosDonts: {
      dos: ['Use for immediate settings changes', 'Provide clear labels', 'Show current state visually'],
      donts: ['Use for actions requiring confirmation', 'Make toggles too small to interact with', 'Use ambiguous labels']
    }
  }
};

// Component stories with live examples
const TogglesDemo: React.FC = () => {
  const [basicToggle, setBasicToggle] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(true);
  const [darkModeToggle, setDarkModeToggle] = useState(false);
  const [autoSaveToggle, setAutoSaveToggle] = useState(true);
  const [settingsToggles, setSettingsToggles] = useState({
    notifications: true,
    autoSave: false,
    analytics: true,
    beta: false
  });

  const handleSettingToggle = (setting: string, value: boolean) => {
    setSettingsToggles(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const componentStories: ComponentStory[] = [
    {
      id: 'basic',
      name: 'Basic Toggle',
      description: 'Simple toggle switch with interactive state',
      code: `const [checked, setChecked] = useState(false);

<Toggle 
  checked={checked} 
  onCheckedChange={setChecked} 
/>`,
      component: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
          <Toggle 
            checked={basicToggle} 
            onCheckedChange={setBasicToggle} 
          />
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>
            Current state: {basicToggle ? 'On' : 'Off'}
          </span>
        </div>
      )
    },
    {
      id: 'states',
      name: 'Toggle States',
      description: 'All toggle states including disabled',
      code: `{/* Different states */}
<div className="toggle-states">
  <Toggle checked={true} />           {/* On */}
  <Toggle checked={false} />          {/* Off */}
  <Toggle checked={true} disabled />  {/* On - Disabled */}
  <Toggle checked={false} disabled /> {/* Off - Disabled */}
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>On:</span>
            <Toggle checked={true} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Off:</span>
            <Toggle checked={false} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>On - Disabled:</span>
            <Toggle checked={true} disabled />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
            <span style={{ minWidth: '120px', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>Off - Disabled:</span>
            <Toggle checked={false} disabled />
          </div>
        </div>
      )
    },
    {
      id: 'with-labels',
      name: 'Toggles with Labels',
      description: 'Toggles with descriptive labels for better UX',
      code: `<div className="toggle-with-labels">
  <label className="toggle-label">
    <Toggle 
      checked={notifications} 
      onCheckedChange={setNotifications} 
    />
    <span>Email notifications</span>
  </label>
  
  <label className="toggle-label">
    <Toggle 
      checked={darkMode} 
      onCheckedChange={setDarkMode} 
    />
    <span>Dark mode</span>
  </label>
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
            <Toggle 
              checked={notificationToggle} 
              onCheckedChange={setNotificationToggle} 
            />
            <span>Email notifications</span>
          </label>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
            <Toggle 
              checked={darkModeToggle} 
              onCheckedChange={setDarkModeToggle} 
            />
            <span>Dark mode</span>
          </label>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
            <Toggle 
              checked={autoSaveToggle} 
              onCheckedChange={setAutoSaveToggle} 
            />
            <span>Auto-save documents</span>
          </label>
        </div>
      )
    },
    {
      id: 'settings-panel',
      name: 'Settings Panel',
      description: 'Group of related toggles in a settings context',
      code: `const [settings, setSettings] = useState({
  notifications: true,
  autoSave: false,
  analytics: true,
  beta: false
});

<div className="settings-panel">
  <h4>Application Settings</h4>
  
  <div className="setting-item">
    <div className="setting-info">
      <label>Push Notifications</label>
      <p>Receive notifications about important updates</p>
    </div>
    <Toggle 
      checked={settings.notifications}
      onCheckedChange={(checked) => 
        setSettings(prev => ({ ...prev, notifications: checked }))
      }
    />
  </div>
  
  <div className="setting-item">
    <div className="setting-info">
      <label>Auto-save</label>
      <p>Automatically save your work every few minutes</p>
    </div>
    <Toggle 
      checked={settings.autoSave}
      onCheckedChange={(checked) => 
        setSettings(prev => ({ ...prev, autoSave: checked }))
      }
    />
  </div>
</div>`,
      component: (
        <div style={{ 
          border: '1px solid var(--color-gray-40)', 
          borderRadius: '8px', 
          padding: 'var(--spacing-lg)',
          maxWidth: '500px'
        }}>
          <h4 style={{ margin: '0 0 var(--spacing-lg) 0', fontSize: 'var(--font-size-lg)' }}>Application Settings</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)', display: 'block', marginBottom: 'var(--spacing-xs)' }}>
                  Push Notifications
                </label>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)', margin: 0 }}>
                  Receive notifications about important updates
                </p>
              </div>
              <Toggle 
                checked={settingsToggles.notifications}
                onCheckedChange={(checked) => handleSettingToggle('notifications', checked)}
              />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)', display: 'block', marginBottom: 'var(--spacing-xs)' }}>
                  Auto-save
                </label>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)', margin: 0 }}>
                  Automatically save your work every few minutes
                </p>
              </div>
              <Toggle 
                checked={settingsToggles.autoSave}
                onCheckedChange={(checked) => handleSettingToggle('autoSave', checked)}
              />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)', display: 'block', marginBottom: 'var(--spacing-xs)' }}>
                  Analytics
                </label>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)', margin: 0 }}>
                  Help us improve by sharing usage analytics
                </p>
              </div>
              <Toggle 
                checked={settingsToggles.analytics}
                onCheckedChange={(checked) => handleSettingToggle('analytics', checked)}
              />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)', display: 'block', marginBottom: 'var(--spacing-xs)' }}>
                  Beta Features
                </label>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)', margin: 0 }}>
                  Enable experimental features and early access
                </p>
              </div>
              <Toggle 
                checked={settingsToggles.beta}
                onCheckedChange={(checked) => handleSettingToggle('beta', checked)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'use-cases',
      name: 'Common Use Cases',
      description: 'Real-world examples of toggle usage',
      code: `{/* Privacy settings */}
<div className="privacy-toggles">
  <Toggle checked={true} /> <span>Make profile public</span>
  <Toggle checked={false} /> <span>Allow search indexing</span>
  <Toggle checked={true} /> <span>Show online status</span>
</div>

{/* Feature flags */}
<div className="feature-toggles">
  <Toggle checked={true} /> <span>New dashboard (Beta)</span>
  <Toggle checked={false} /> <span>Advanced analytics</span>
  <Toggle checked={true} /> <span>Real-time updates</span>
</div>

{/* System preferences */}
<div className="system-toggles">
  <Toggle checked={false} /> <span>Dark mode</span>
  <Toggle checked={true} /> <span>Reduced motion</span>
  <Toggle checked={true} /> <span>High contrast</span>
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Privacy settings</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                <Toggle checked={true} />
                <span>Make profile public</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                <Toggle checked={false} />
                <span>Allow search indexing</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                <Toggle checked={true} />
                <span>Show online status</span>
              </label>
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Feature flags</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                <Toggle checked={true} />
                <span>New dashboard (Beta)</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                <Toggle checked={false} />
                <span>Advanced analytics</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                <Toggle checked={true} />
                <span>Real-time updates</span>
              </label>
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--spacing-xs) 0', color: 'var(--color-gray-70)' }}>Accessibility preferences</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                <Toggle checked={false} />
                <span>Dark mode</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                <Toggle checked={true} />
                <span>Reduced motion</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                <Toggle checked={true} />
                <span>High contrast</span>
              </label>
            </div>
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
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the toggle is in the checked (on) state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Whether the toggle is disabled and non-interactive</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onCheckedChange</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(checked: boolean) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback function called when the toggle state changes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Additional CSS classes to apply</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Toggles() {
  const togglesDemo = TogglesDemo();
  
  return (
    <div className="prism-preview">
      <ComponentShowcase 
        component={componentInfo}
        stories={togglesDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
}