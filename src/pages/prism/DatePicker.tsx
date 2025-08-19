import React, { useState } from 'react';
import { DatePicker } from '@prism/date-picker';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'date-picker',
  name: 'Date Picker',
  category: 'Form Elements',
  description: 'Allow users to select dates from a calendar interface. Supports various date formats, restrictions, validation rules, and multiple selection modes for comprehensive date input needs.',
  usage: {
    whenToUse: [
      'For scheduling events, appointments, or meetings',
      'When setting deadlines, due dates, or time-sensitive tasks',
      'For birth dates, anniversaries, or historical date inputs',
      'In travel booking and reservation systems',
      'When precise date selection is required over approximate dates'
    ],
    whenNotToUse: [
      'For approximate or relative dates ("last week", "next month")',
      'When only month/year selection is needed',
      'For date ranges that span long periods (use range pickers)',
      'In space-constrained mobile layouts without adaptation',
      'When users prefer or need manual text input'
    ],
    anatomy: [
      { element: 'Input field', description: 'Text input showing selected date in chosen format' },
      { element: 'Calendar trigger', description: 'Button or icon to open calendar popup' },
      { element: 'Calendar popup', description: 'Interactive calendar grid for date selection' },
      { element: 'Navigation controls', description: 'Previous/next buttons for month/year navigation' },
      { element: 'Date format', description: 'Visual presentation of dates (MM/DD/YYYY, etc.)' }
    ],
    accessibility: [
      'Support full keyboard navigation with arrow keys',
      'Provide screen reader support with proper ARIA labels',
      'Implement focus management and visual indicators',
      'Offer clear date formatting and validation messages',
      'Support Escape key to close calendar and Home/End navigation'
    ],
    dosDonts: {
      dos: ['Use appropriate date formats for your audience', 'Provide clear validation and error messages', 'Consider time zones for global applications'],
      donts: ['Force complex date entry for simple needs', 'Use confusing or ambiguous date formats', 'Ignore cultural date format preferences']
    }
  }
};

// Component stories with live examples
const DatePickerDemo = (): ComponentStory[] => {
  const [basicDate, setBasicDate] = useState<Date | undefined>(new Date());
  const [meetingDate, setMeetingDate] = useState<Date | undefined>();
  const [birthdayDate, setBirthdayDate] = useState<Date | undefined>();
  const [projectDate, setProjectDate] = useState<Date | undefined>();

  // Date calculations for restrictions
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  
  const pastDate = new Date('2020-01-01');
  
  const blockedDates = [
    new Date(), // Today
    new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
  ];

  const componentStories: ComponentStory[] = [
    {
      id: 'basic-usage',
      name: 'Basic Usage',
      description: 'Standard date picker with default settings',
      code: `const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

<DatePicker
  label="Select Date"
  value={selectedDate}
  onValueChange={setSelectedDate}
  placeholder="Choose a date"
/>`,
      component: (
        <div style={{ maxWidth: '300px' }}>
          <DatePicker
            label="Select Date"
            value={basicDate}
            onValueChange={(date) => setBasicDate(Array.isArray(date) ? date[0] : date)}
            placeholder="Choose a date"
          />
          <p style={{ marginTop: 'var(--spacing-sm)', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-70)' }}>
            Selected: {basicDate ? basicDate.toLocaleDateString() : 'None'}
          </p>
        </div>
      )
    },
    {
      id: 'date-formats',
      name: 'Date Formats',
      description: 'Different date formats for international usage',
      code: `{/* US Format (MM/DD/YYYY) */}
<DatePicker
  label="US Format"
  format="MM/DD/YYYY"
  defaultValue={new Date()}
/>

{/* European Format (DD/MM/YYYY) */}
<DatePicker
  label="European Format"
  format="DD/MM/YYYY"
  defaultValue={new Date()}
/>

{/* ISO Format (YYYY-MM-DD) */}
<DatePicker
  label="ISO Format"
  format="YYYY-MM-DD"
  defaultValue={new Date()}
/>`,
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
          <DatePicker
            label="US Format"
            format="MM/DD/YYYY"
            defaultValue={new Date()}
          />
          <DatePicker
            label="European Format"
            format="DD/MM/YYYY"
            defaultValue={new Date()}
          />
          <DatePicker
            label="ISO Format"
            format="YYYY-MM-DD"
            defaultValue={new Date()}
          />
        </div>
      )
    },
    {
      id: 'date-restrictions',
      name: 'Date Restrictions',
      description: 'Limit selectable dates with min/max constraints',
      code: `{/* Future dates only */}
<DatePicker
  label="Meeting Date"
  value={meetingDate}
  onValueChange={setMeetingDate}
  minDate={tomorrow}
  placeholder="Select future date"
/>

{/* Past dates only */}
<DatePicker
  label="Birth Date"
  value={birthDate}
  onValueChange={setBirthDate}
  maxDate={new Date()}
  placeholder="Select birth date"
/>`,
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
          <DatePicker
            label="Meeting Date"
            value={meetingDate}
            onValueChange={(date) => setMeetingDate(Array.isArray(date) ? date[0] : date)}
            minDate={tomorrow}
            placeholder="Select future date"
          />
          <DatePicker
            label="Birth Date"
            value={birthdayDate}
            onValueChange={(date) => setBirthdayDate(Array.isArray(date) ? date[0] : date)}
            maxDate={new Date()}
            placeholder="Select birth date"
          />
        </div>
      )
    },
    {
      id: 'date-ranges',
      name: 'Date Range Restrictions',
      description: 'Constrain selections to specific date ranges',
      code: `{/* Next 7 days only */}
<DatePicker
  label="Quick Booking"
  minDate={new Date()}
  maxDate={nextWeek}
  placeholder="Available dates"
/>

{/* Historical range */}
<DatePicker
  label="Historical Event"
  minDate={pastDate}
  maxDate={new Date()}
  placeholder="Historical date"
/>`,
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
          <div>
            <DatePicker
              label="Quick Booking"
              minDate={new Date()}
              maxDate={nextWeek}
              placeholder="Available dates"
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              Next 7 days only
            </p>
          </div>
          <div>
            <DatePicker
              label="Historical Event"
              minDate={pastDate}
              maxDate={new Date()}
              placeholder="Historical date"
            />
            <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
              2020 to today
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'disabled-dates',
      name: 'Disabled Specific Dates',
      description: 'Block specific dates from selection',
      code: `const blockedDates = [
  new Date(), // Today
  new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
];

<DatePicker
  label="Booking Date"
  disabledDates={blockedDates}
  placeholder="Available dates only"
/>`,
      component: (
        <div style={{ maxWidth: '300px' }}>
          <DatePicker
            label="Booking Date"
            disabledDates={blockedDates}
            placeholder="Available dates only"
          />
          <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
            Today and day after tomorrow are blocked
          </p>
        </div>
      )
    },
    {
      id: 'project-deadline',
      name: 'Project Deadline Example',
      description: 'Real-world example for setting project deadlines',
      code: `const [projectDeadline, setProjectDeadline] = useState<Date | undefined>();

// Only allow weekdays, no weekends
const isWeekday = (date: Date) => {
  const day = date.getDay();
  return day !== 0 && day !== 6; // Not Sunday (0) or Saturday (6)
};

<DatePicker
  label="Project Deadline"
  value={projectDeadline}
  onValueChange={setProjectDeadline}
  minDate={new Date()}
  placeholder="Select deadline"
  required
/>`,
      component: (
        <div style={{ 
          maxWidth: '400px', 
          padding: 'var(--spacing-lg)', 
          border: '1px solid var(--color-gray-40)', 
          borderRadius: '4px',
          backgroundColor: 'var(--color-gray-05)'
        }}>
          <h4 style={{ margin: '0 0 var(--spacing-md) 0', fontSize: 'var(--font-size-base)' }}>Project Setup</h4>
          <DatePicker
            label="Project Deadline"
            value={projectDate}
            onValueChange={(date) => setProjectDate(Array.isArray(date) ? date[0] : date)}
            minDate={new Date()}
            placeholder="Select deadline"
            required
          />
          <div style={{ 
            marginTop: 'var(--spacing-md)', 
            padding: 'var(--spacing-sm)', 
            backgroundColor: 'var(--color-teal-10)', 
            borderRadius: '4px',
            fontSize: 'var(--font-size-sm)'
          }}>
            <strong>💡 Tip:</strong> Choose a realistic deadline that allows for proper planning and execution.
          </div>
        </div>
      )
    },
    {
      id: 'form-states',
      name: 'Form States',
      description: 'Different states including errors and disabled',
      code: `{/* With error */}
<DatePicker
  label="Required Date"
  error="Please select a valid date"
  placeholder="Select date"
  required
/>

{/* Disabled */}
<DatePicker
  label="Locked Date"
  disabled
  defaultValue={new Date()}
/>`,
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
          <DatePicker
            label="Required Date"
            error="Please select a valid date"
            placeholder="Select date"
            required
          />
          <DatePicker
            label="Locked Date"
            disabled
            defaultValue={new Date()}
          />
        </div>
      )
    },
    {
      id: 'manual-input',
      name: 'Manual Date Entry',
      description: 'Allow typing dates directly or using calendar',
      code: `<DatePicker
  label="Event Date"
  placeholder="Type date or click calendar"
/>`,
      component: (
        <div style={{ maxWidth: '300px' }}>
          <DatePicker
            label="Event Date"
            placeholder="Type date or click calendar"
          />
          <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-70)' }}>
            You can type the date directly (e.g., "12/25/2024") or use the calendar icon
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
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Date | Date[] | [Date, Date] | undefined</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Controlled date value(s)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">defaultValue</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Date | Date[] | [Date, Date] | undefined</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Default date value(s) for uncontrolled usage</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">mode</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"single" | "multiple" | "range"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"single"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Date selection mode</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">format</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"MM/DD/YYYY" | "DD/MM/YYYY" | "YYYY-MM-DD"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"MM/DD/YYYY"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Date display and input format</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">minDate</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Date</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Minimum selectable date</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">maxDate</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Date</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Maximum selectable date</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabledDates</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Date[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Array of specific dates to disable</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">presets</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">DatePickerPreset[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Quick-select preset options (e.g., "Today", "Tomorrow")</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showPresets</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Display preset shortcuts in calendar</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Disables the date picker</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">required</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Marks the field as required</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Label for the date picker</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">placeholder</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"Select date"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Placeholder text for the input field</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">error</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Error message to display</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onValueChange</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(date: Date | Date[] | [Date, Date] | undefined) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when date selection changes</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function DatePickerPage() {
  const datePickerDemo = DatePickerDemo();
  
  return (
    <div className="space-y-8">
      <ComponentShowcase 
        component={componentInfo}
        stories={datePickerDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
}