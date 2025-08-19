# ColorPicker

A color selection component with preset swatches, custom color input, and live preview. Ideal for theme customization and design tools.

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | `undefined` | Controlled color value (hex format) |
| `defaultValue` | `string` | `"#128297"` | Default color value for uncontrolled usage |
| `placeholder` | `string` | `"Select color"` | Placeholder text for custom input |
| `label` | `string` | `undefined` | Label for the color picker |
| `error` | `string` | `undefined` | Error message to display |
| `disabled` | `boolean` | `false` | Disables the color picker |
| `required` | `boolean` | `false` | Marks the field as required |
| `presetColors` | `string[]` | Default palette | Array of preset color values |
| `format` | `"hex" \| "rgb" \| "hsl"` | `"hex"` | Color format (future enhancement) |
| `showInput` | `boolean` | `true` | Show custom color input field |
| `showPreview` | `boolean` | `true` | Show live color preview |
| `allowAlpha` | `boolean` | `false` | Allow alpha/transparency (future enhancement) |
| `name` | `string` | `undefined` | Name attribute for form submission |
| `id` | `string` | auto-generated | ID for the trigger element |
| `onValueChange` | `(color: string) => void` | `undefined` | Callback when color selection changes |
| `className` | `string` | `undefined` | Additional CSS classes |

## Default Preset Colors

The component includes a default palette of brand and common colors:
- `#128297` - Teal Primary
- `#016479` - Teal Dark  
- `#2A2C35` - Gray 100
- `#6A6C75` - Gray 70
- `#FFFFFF` - White
- `#000000` - Black
- `#10B981` - Green
- `#F59E0B` - Yellow
- `#EF4444` - Red
- `#8B5CF6` - Purple
- `#06B6D4` - Cyan
- `#F97316` - Orange

## Usage

### Basic Color Picker
```tsx
<ColorPicker
  label="Primary Color"
  value={color}
  onValueChange={setColor}
/>
```

### Custom Preset Colors
```tsx
const brandColors = ['#FF0000', '#00FF00', '#0000FF'];

<ColorPicker
  label="Brand Color"
  value={color}
  onValueChange={setColor}
  presetColors={brandColors}
  showPreview={true}
/>
```

### Preset-Only Mode
```tsx
<ColorPicker
  label="Theme Color"
  value={color}
  onValueChange={setColor}
  showInput={false}
  presetColors={themeColors}
/>
```

## Features

- **Preset swatches**: Quick selection from predefined colors
- **Custom color input**: Native color picker and text input
- **Live preview**: Real-time color preview with value display
- **Visual feedback**: Selected state indicators and hover effects
- **Form integration**: Standard form props (name, required, disabled)

## Accessibility

- Uses `role="button"` for trigger with `aria-haspopup="dialog"`
- Implements `role="dialog"` for color panel
- Color values announced to screen readers
- Keyboard navigation for preset selection
- Focus management and visual indicators
- Error states with proper ARIA attributes

