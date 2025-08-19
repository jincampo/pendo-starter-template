import React, { useState } from 'react';
import { TimePicker } from '@prism/time-picker';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'time-picker',
  name: 'Time Picker',
  category: 'Form Elements',
  description: 'Allow users to select a time from a dropdown list of options. Supports both 12-hour and 24-hour formats with customizable intervals, perfect for scheduling and time-sensitive applications.',
  usage: {
    whenToUse: [
      'For scheduling appointments, meetings, or events',
      'When setting deadlines, reminders, or time-based triggers',
      'In event planning and booking systems',
      'For recurring time-based settings or configurations',
      'When precise time selection is more important than duration'
    ],
    whenNotToUse: [
      'For duration inputs (use number input with time units)',
      'When only approximate time is needed',
      'For time ranges or spans (use two separate pickers)',
      'In space-constrained mobile interfaces without adaptation',
      'When users need to enter completely custom time formats'
    ],
    anatomy: [
      { element: 'Input field', description: 'Text input displaying selected time' },
      { element: 'Dropdown trigger', description: 'Button or icon to open time options' },
      { element: 'Time options list', description: 'Dropdown containing available time slots' },
      { element: 'Time format', description: '12-hour (AM/PM) or 24-hour format display' },
      { element: 'Interval settings', description: 'Minute intervals (15, 30, 60) between options' }
    ],
    accessibility: [
      'Support full keyboard navigation for dropdown options',
      'Provide screen reader compatibility with ARIA labels',
      'Implement clear focus management and visual indicators',
      'Offer type-ahead search functionality for quick selection',
      'Include clear error messaging and validation feedback'
    ],
    dosDonts: {
      dos: ['Use appropriate time formats for your user base', 'Provide reasonable time intervals for the context', 'Consider business hours or relevant time restrictions'],
      donts: ['Force overly precise intervals when not needed', 'Use confusing time formats', 'Ignore timezone considerations for global users']
    }
  }
};

// Component stories with live examples
const TimePickerDemo = (): ComponentStory[] => {
  const [basicTime, setBasicTime] = useState('9:00 AM');
  const [meetingTime, setMeetingTime] = useState('');
  const [deadlineTime, setDeadlineTime] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const componentStories: ComponentStory[] = [
    {
      id: 'basic-usage',
      name: 'Basic Usage',
      description: 'Standard time picker with default 12-hour format',
      code: `const [selectedTime, setSelectedTime] = useState('9:00 AM');

<TimePicker
  label="Start Time"
  value={selectedTime}
  onValueChange={setSelectedTime}
  placeholder="Select time"
/>`,
      component: (
        <div style={{ maxWidth: '250px' }}>
          <TimePicker
            label="Start Time"
            value={basicTime}
            onValueChange={setBasicTime}
            placeholder="Select time"
          />
          <p style={{ marginTop: 'var(--spacing-sm)', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>
            Selected: {basicTime || 'None'}
          </p>
        </div>
      )
    },
    {
      id: 'time-formats',
      name: 'Time Formats',
      description: '12-hour and 24-hour format options',
      code: `{/* 12-hour format with AM/PM */}
<TimePicker
  label="Meeting Time"
  value={meetingTime}
  onValueChange={setMeetingTime}
  format="12"
  interval={30}
  placeholder="Select meeting time"
/>

{/* 24-hour format */}
<TimePicker
  label="Deadline Time"
  value={deadlineTime}
  onValueChange={setDeadlineTime}
  format="24"
  interval={15}
  placeholder="Select deadline"
/>`,
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
          <TimePicker
            label="Meeting Time (12hr)"
            value={meetingTime}
            onValueChange={setMeetingTime}
            format="12"
            interval={30}
            placeholder="Select meeting time"
          />
          <TimePicker
            label="Deadline Time (24hr)"
            value={deadlineTime}
            onValueChange={setDeadlineTime}
            format="24"
            interval={15}
            placeholder="Select deadline"
          />
        </div>
      )
    },
    {
      id: 'time-intervals',
      name: 'Time Intervals',
      description: 'Different minute intervals for various use cases',
      code: `{/* 15-minute intervals */}
<TimePicker
  label="Appointment"
  interval={15}
  defaultValue="2:00 PM"
/>

{/* 30-minute intervals */}
<TimePicker
  label="Meeting"
  interval={30}
  defaultValue="2:00 PM"
/>

{/* 60-minute intervals */}
<TimePicker
  label="Event"
  interval={60}
  defaultValue="2:00 PM"
/>`,
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--spacing-md)' }}>
          <div>
            <TimePicker
              label="15-min intervals"
              interval={15}
              defaultValue="2:00 PM"
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              Great for appointments
            </p>
          </div>
          <div>
            <TimePicker
              label="30-min intervals"
              interval={30}
              defaultValue="2:00 PM"
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              Perfect for meetings
            </p>
          </div>
          <div>
            <TimePicker
              label="60-min intervals"
              interval={60}
              defaultValue="2:00 PM"
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              Ideal for events
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'time-restrictions',
      name: 'Time Restrictions',
      description: 'Limit available times to specific ranges',
      code: `{/* Business hours only */}
<TimePicker
  label="Business Meeting"
  minTime="9:00 AM"
  maxTime="5:00 PM"
  interval={30}
  placeholder="Select business hours"
/>

{/* Evening hours only */}
<TimePicker
  label="Evening Event"
  minTime="6:00 PM"
  maxTime="11:00 PM"
  interval={15}
  placeholder="Select evening time"
/>`,
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--spacing-md)' }}>
          <div>
            <TimePicker
              label="Business Meeting"
              minTime="9:00 AM"
              maxTime="5:00 PM"
              interval={30}
              placeholder="Select business hours"
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              9 AM - 5 PM only
            </p>
          </div>
          <div>
            <TimePicker
              label="Evening Event"
              minTime="6:00 PM"
              maxTime="11:00 PM"
              interval={15}
              placeholder="Select evening time"
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              6 PM - 11 PM only
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'appointment-booking',
      name: 'Appointment Booking Example',
      description: 'Real-world example for medical appointment scheduling',
      code: `const [appointmentTime, setAppointmentTime] = useState('');

<div className="appointment-form">
  <h4>Schedule Appointment</h4>
  <TimePicker
    label="Preferred Time"
    value={appointmentTime}
    onValueChange={setAppointmentTime}
    minTime="8:00 AM"
    maxTime="6:00 PM"
    interval={15}
    placeholder="Select appointment time"
    required
  />
  <p className="help-text">
    Available slots: Monday-Friday, 8 AM to 6 PM
  </p>
</div>`,
      component: (
        <div style={{ 
          maxWidth: '350px', 
          padding: 'var(--spacing-lg)', 
          border: '1px solid var(--color-gray-40)', 
          borderRadius: '4px',
          backgroundColor: 'var(--color-gray-05)'
        }}>
          <h4 style={{ margin: '0 0 var(--spacing-md) 0', fontSize: 'var(--font-size-base)' }}>Schedule Appointment</h4>
          <TimePicker
            label="Preferred Time"
            value={appointmentTime}
            onValueChange={setAppointmentTime}
            minTime="8:00 AM"
            maxTime="6:00 PM"
            interval={15}
            placeholder="Select appointment time"
            required
          />
          <p style={{ 
            marginTop: 'var(--spacing-sm)', 
            fontSize: 'var(--font-size-xs)', 
            color: 'var(--color-gray-70)',
            lineHeight: '1.4'
          }}>
            Available slots: Monday-Friday, 8 AM to 6 PM
          </p>
          {appointmentTime && (
            <div style={{ 
              marginTop: 'var(--spacing-md)', 
              padding: 'var(--spacing-sm)', 
              backgroundColor: 'var(--color-green-10)', 
              borderRadius: '4px',
              fontSize: 'var(--font-size-sm)'
            }}>
              <strong>✓ Time Selected:</strong> {appointmentTime}
            </div>
          )}
        </div>
      )
    },
    {
      id: 'form-states',
      name: 'Form States',
      description: 'Different states including errors and disabled',
      code: `{/* With error */}
<TimePicker
  label="Required Time"
  error="Please select a time"
  placeholder="Select time"
  required
/>

{/* Disabled */}
<TimePicker
  label="Disabled Time"
  disabled
  defaultValue="10:00 AM"
/>`,
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
          <TimePicker
            label="Required Time"
            error="Please select a time"
            placeholder="Select time"
            required
          />
          <TimePicker
            label="Disabled Time"
            disabled
            defaultValue="10:00 AM"
          />
        </div>
      )
    },
    {
      id: 'quick-entry',
      name: 'Quick Time Entry',
      description: 'Support for typing common time formats',
      code: `<TimePicker
  label="Quick Time Entry"
  placeholder="Type or select time"
/>

// Users can type formats like:
// "3pm", "15:30", "9:45 AM", etc.`,
      component: (
        <div style={{ maxWidth: '300px' }}>
          <TimePicker
            label="Quick Time Entry"
            placeholder="Type or select time"
          />
          <div style={{ 
            marginTop: 'var(--spacing-sm)', 
            padding: 'var(--spacing-sm)', 
            backgroundColor: 'var(--color-blue-10)', 
            borderRadius: '4px',
            fontSize: 'var(--font-size-xs)'
          }}>
            <strong>💡 Tip:</strong> You can type "3pm", "15:30", "9:45 AM", or select from the dropdown
          </div>
        </div>
      )
    },
    {
      id: 'multiple-timezones',
      name: 'Multiple Time Zones',
      description: 'Handling different time zones in global applications',
      code: `<div className="timezone-times">
  <TimePicker
    label="Meeting Time (EST)"
    defaultValue="2:00 PM"
    interval={30}
  />
  
  <TimePicker
    label="Meeting Time (PST)"
    defaultValue="11:00 AM"
    interval={30}
    disabled
  />
  
  <TimePicker
    label="Meeting Time (GMT)"
    defaultValue="7:00 PM"
    interval={30}
    disabled
  />
</div>`,
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', maxWidth: '300px' }}>
          <TimePicker
            label="Meeting Time (EST)"
            defaultValue="2:00 PM"
            interval={30}
          />
          
          <div style={{ opacity: 0.7 }}>
            <TimePicker
              label="Meeting Time (PST)"
              defaultValue="11:00 AM"
              interval={30}
              disabled
            />
          </div>
          
          <div style={{ opacity: 0.7 }}>
            <TimePicker
              label="Meeting Time (GMT)"
              defaultValue="7:00 PM"
              interval={30}
              disabled
            />
          </div>
          
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)', fontStyle: 'italic' }}>
            Other time zones automatically calculated
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">value</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Controlled time value (e.g., "2:30 PM", "14:30")</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">defaultValue</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Default time value for uncontrolled usage</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">format</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"12" | "24"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"12"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Time format (12-hour with AM/PM or 24-hour)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">interval</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">15 | 30 | 60</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">15</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Minute intervals between time options</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">minTime</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Minimum selectable time (e.g., "9:00 AM")</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">maxTime</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Maximum selectable time (e.g., "5:00 PM")</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">placeholder</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"Select time"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Placeholder text for the input field</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Label for the time picker</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Disables the time picker</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">required</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Marks the field as required</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">error</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Error message to display</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onValueChange</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(value: string) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when time selection changes</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function TimePickerPage() {
  const timePickerDemo = TimePickerDemo();
  
  return (
    <ComponentShowcase 
      component={componentInfo}
      stories={timePickerDemo}
      propsTable={<PropsTable />}
    />
  );
}