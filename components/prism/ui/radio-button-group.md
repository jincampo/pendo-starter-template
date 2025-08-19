# RadioButtonGroup

A button-style radio selection component for mutually exclusive choices. Provides visual emphasis and works well for small sets of options.

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `options` | `RadioButtonOption[]` | - | **Required.** Array of options to display |
| `value` | `string` | `undefined` | Controlled value of selected option |
| `defaultValue` | `string` | `undefined` | Default selected value for uncontrolled usage |
| `name` | `string` | auto-generated | Name attribute for radio inputs |
| `size` | `"small" \| "regular" \| "large"` | `"regular"` | Size variant of the button group |
| `variant` | `"default" \| "outlined" \| "filled"` | `"default"` | Visual style variant |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction |
| `disabled` | `boolean` | `false` | Disables the entire group |
| `required` | `boolean` | `false` | Marks the field as required |
| `label` | `string` | `undefined` | Label for the radio group |
| `onValueChange` | `(value: string) => void` | `undefined` | Callback when selection changes |
| `className` | `string` | `undefined` | Additional CSS classes |

## RadioButtonOption

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | - | **Required.** Unique value for this option |
| `label` | `string` | - | **Required.** Display text for the option |
| `disabled` | `boolean` | `false` | Disables this specific option |
| `description` | `string` | `undefined` | Optional description text |

## Usage

```tsx
const options = [
  { value: 'option-1', label: 'Option 1', description: 'First choice' },
  { value: 'option-2', label: 'Option 2', description: 'Second choice' }
]

<RadioButtonGroup
  label="Choose an option"
  options={options}
  value={value}
  onValueChange={setValue}
  size="regular"
  variant="default"
/>
```

## Accessibility

- Uses `role="radiogroup"` and `role="radio"`
- Supports keyboard navigation (Tab, Arrow keys, Enter/Space)
- Implements `aria-checked`, `aria-labelledby`, `aria-required`
- Screen reader compatible with proper labeling

