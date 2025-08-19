# AI-Friendly Style Guide

## Overview
This style guide provides structured information about the Pendo Component Library's design system for easy consumption by AI tools. All styles are organized by component with clear patterns and conventions.

## Design Tokens Location
- **Design Tokens**: `src/design-tokens.json` - Contains all color, typography, spacing, and other design values
- **Component Mapping**: `src/component-styles-map.json` - Maps each component to its specific style variables and variants

## Color System

### Core Colors
The design system uses a systematic color palette with numbered scales:

```
Gray: 0-110 (0=white, 110=darkest)
Pink: 10-120 
Teal: 5-120 (primary brand color)
Blue: 5-120
Green: 5-120
Yellow: 5-120
Orange: 10-120
Red: 5-120
Magenta: 10-120
Purple: 10-120
Lime: 10-120
```

### Color Usage Patterns
- **Primary Actions**: Teal-70 (#128297)
- **Text Primary**: Gray-100 (#2A2C35)
- **Text Secondary**: Gray-70 (#6A6C75)
- **Borders**: Gray-40/50 for light, Gray-70 for selectable
- **Backgrounds**: White, Gray-10/20 for light fills
- **Status Colors**: Green (success), Blue (info), Yellow (warning), Red (error)

## Typography

### Font Families
- **Primary**: Inter (body text, UI elements)
- **Display**: Sora (headings, special text)

### Font Sizes
- **Base**: 14px (primary UI size)
- **Mini**: 12px
- **Small**: 13px  
- **Large**: 18px

### Font Weights
- **Primary**: 400 (normal)
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Component Patterns

### Button Component
**Base Structure**: `.pendo-button` + type + size + theme + state modifiers

**Types**: primary, secondary, tertiary, link, danger
**Sizes**: mini (26px), small (32px), medium (36px)
**Themes**: app, p2-dark
**States**: default, hover, focus, disabled, loading

**CSS Classes Pattern**:
```css
.pendo-button
.pendo-button--{type}    /* primary, secondary, etc */
.pendo-button--{size}    /* mini, small, medium */
.{theme}                 /* app, p2-dark */
.is-{state}             /* disabled, loading, block */
.has-{modifier}         /* prefix-icon, suffix-icon */
```

### Alert Component
**Base Structure**: `.pendo-alert` + variant

**Variants**: success, info, warning, error
**Structure**: Title + description + optional close button + icon

### Card Component
**Base Structure**: `.pendo-card` + optional modifiers

**Features**: Header, body, footer sections
**States**: default, hover (with transform and shadow)
**Types**: Regular card, AI card (purple background), media card

### Form Components (Input, Checkbox, etc.)
**Common Pattern**: 
- Base class: `.pendo-{component}`
- States: `:focus`, `:hover`, `:disabled`, `.is-invalid`
- Consistent sizing: 36px height for inputs
- Consistent border-radius: 3px

## Layout & Spacing

### Spacing Scale
- **Base unit**: 8px
- **Sizes**: xs(4px), sm(8px), md(16px), lg(20px), xl(24px)

### Border Radius
- **Standard**: 3px (most components)
- **Small**: 1-2px (form elements)
- **Circle**: 100% (avatars, radio buttons)

## Theme System

### App Theme (Default)
- Light backgrounds
- Teal primary colors
- Standard contrast ratios

### P2-Dark Theme
- Dark backgrounds
- White text
- Adjusted contrast for dark mode

## CSS Custom Properties

The system should support CSS custom properties for runtime theming:

```css
:root {
  --color-teal-primary: #128297;
  --color-text-primary: #2A2C35;
  --border-radius-base: 3px;
  --spacing-base: 8px;
  /* etc... */
}
```

## AI Implementation Guidelines

### When Building Components:
1. **Reference design-tokens.json** for all color/spacing values
2. **Use component-styles-map.json** to understand existing patterns
3. **Follow naming conventions**: `.pendo-{component}--{modifier}`
4. **Include all states**: default, hover, focus, disabled
5. **Support theming**: app and p2-dark themes
6. **Use consistent spacing**: multiples of 8px base unit
7. **Apply proper focus states**: 2px outline with 1px offset

### Color Selection Priority:
1. Check if semantic color exists (text-primary, border-base, etc.)
2. Use status colors for alerts/notifications
3. Select from core palette maintaining contrast ratios
4. Default to gray scale for neutral elements

### Icon Integration:
- **Icon Library**: Lucid icons (referenced in memory)
- **Standard sizes**: 14px, 16px, 20px, 24px
- **Placement**: prefix-icon (left), suffix-icon (right), icon-only
- **Stroke width**: 2.5 for most icons

## File Organization

```
src/
├── design-tokens.json           # All design values
├── component-styles-map.json    # Component-specific mappings
├── styles/
│   ├── global/                  # Core SCSS files
│   │   ├── _colors.scss
│   │   ├── _variables.scss
│   │   ├── _typography.scss
│   │   └── _mixins.scss
│   └── themes/                  # Theme-specific overrides
│       ├── app/
│       └── p2-dark/
└── components/                  # Component implementations
    └── {component}/
        └── pendo-{component}.vue
```

## Quick Reference

### Most Common Values:
- **Primary Button**: Background: teal-70, Text: white
- **Input Height**: 36px
- **Border Radius**: 3px
- **Base Font**: 14px Inter
- **Primary Text**: gray-100
- **Base Spacing**: 8px increments
- **Focus Color**: gray-80 with 2px outline

This guide enables AI tools to understand and implement consistent styling across the component library.
