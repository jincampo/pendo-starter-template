# TimePicker

A dropdown time selection component with customizable intervals and formats. Supports both 12-hour and 24-hour time formats.

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | `undefined` | Controlled time value (e.g., "2:30 PM") |
| `defaultValue` | `string` | `undefined` | Default time value for uncontrolled usage |
| `placeholder` | `string` | `"Select time"` | Placeholder text for the input |
| `label` | `string` | `undefined` | Label for the time picker |
| `error` | `string` | `undefined` | Error message to display |
| `disabled` | `boolean` | `false` | Disables the time picker |
| `required` | `boolean` | `false` | Marks the field as required |
| `format` | `"12" \| "24"` | `"12"` | Time format (12-hour or 24-hour) |
| `interval` | `15 \| 30 \| 60` | `15` | Minute intervals for time options |
| `minTime` | `string` | `undefined` | Minimum selectable time |
| `maxTime` | `string` | `undefined` | Maximum selectable time |
| `name` | `string` | `undefined` | Name attribute for form submission |
| `id` | `string` | auto-generated | ID for the input element |
| `onValueChange` | `(value: string) => void` | `undefined` | Callback when time selection changes |
| `className` | `string` | `undefined` | Additional CSS classes |

## Usage

```tsx
<TimePicker
  label="Meeting Time"
  value={time}
  onValueChange={setTime}
  format="12"
  interval={30}
  minTime="9:00 AM"
  maxTime="5:00 PM"
  required
/>
```

## Features

- **Searchable dropdown**: Type to filter time options
- **Keyboard navigation**: Arrow keys, Enter, Escape support
- **Custom intervals**: 15, 30, or 60-minute increments
- **Time restrictions**: Set min/max times to limit selection
- **Format support**: 12-hour (with AM/PM) or 24-hour format

## Accessibility

- Uses `role="combobox"` with `aria-haspopup="listbox"`
- Implements `aria-expanded`, `aria-controls`, `aria-activedescendant`
- Full keyboard navigation support
- Screen reader announcements for time options
- Error states with `aria-invalid` and `aria-describedby`

