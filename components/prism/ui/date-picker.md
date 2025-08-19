# DatePicker

A comprehensive date selection component supporting single dates, date ranges, and multiple date selection with calendar interface.

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `Date \| Date[] \| [Date, Date]` | `undefined` | Controlled date value(s) |
| `defaultValue` | `Date \| Date[] \| [Date, Date]` | `undefined` | Default date value(s) for uncontrolled usage |
| `placeholder` | `string` | `"Select date"` | Placeholder text for the input |
| `label` | `string` | `undefined` | Label for the date picker |
| `error` | `string` | `undefined` | Error message to display |
| `disabled` | `boolean` | `false` | Disables the date picker |
| `required` | `boolean` | `false` | Marks the field as required |
| `minDate` | `Date` | `undefined` | Minimum selectable date |
| `maxDate` | `Date` | `undefined` | Maximum selectable date |
| `disabledDates` | `Date[]` | `[]` | Array of specific dates to disable |
| `format` | `"MM/DD/YYYY" \| "DD/MM/YYYY" \| "YYYY-MM-DD"` | `"MM/DD/YYYY"` | Date display format |
| `mode` | `"single" \| "multiple" \| "range"` | `"single"` | Selection mode |
| `presets` | `DatePickerPreset[]` | `[]` | Quick-select preset options |
| `showPresets` | `boolean` | `false` | Show preset shortcuts |
| `name` | `string` | `undefined` | Name attribute for form submission |
| `id` | `string` | auto-generated | ID for the input element |
| `onValueChange` | `(date: Date \| Date[] \| [Date, Date] \| undefined) => void` | `undefined` | Callback when date selection changes |
| `className` | `string` | `undefined` | Additional CSS classes |

## DatePickerPreset

| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | Display text for the preset (e.g., "Today", "Last 7 Days") |
| `value` | `Date \| [Date, Date] \| Date[]` | The date value(s) for this preset |

## Usage

### Single Date Selection
```tsx
<DatePicker
  label="Event Date"
  value={date}
  onValueChange={setDate}
  minDate={new Date()}
  format="MM/DD/YYYY"
/>
```

### Date Range Selection
```tsx
<DatePicker
  label="Date Range"
  mode="range"
  value={dateRange}
  onValueChange={setDateRange}
  showPresets
  presets={[
    { label: "Last 7 Days", value: [subDays(new Date(), 7), new Date()] },
    { label: "Last 30 Days", value: [subDays(new Date(), 30), new Date()] }
  ]}
/>
```

### Multiple Date Selection
```tsx
<DatePicker
  label="Available Dates"
  mode="multiple"
  value={multipleDates}
  onValueChange={setMultipleDates}
  disabledDates={blockedDates}
/>
```

## Features

- **Multiple selection modes**: Single, multiple, or range selection
- **Date restrictions**: Min/max dates and disabled date arrays
- **Preset shortcuts**: Quick-select common date ranges
- **Manual input**: Type dates directly or use calendar
- **Format support**: Multiple international date formats
- **Navigation**: Month/year navigation with keyboard support

## Accessibility

- Uses `role="dialog"` for calendar with `aria-modal="false"`
- Implements `role="grid"` for calendar with `role="gridcell"` for dates
- Full keyboard navigation (Arrow keys, Enter, Escape, Tab)
- Month navigation with accessible button labels
- Screen reader support for date announcements
- Focus management and visual indicators

