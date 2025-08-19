# AI Style Reference - Quick Implementation Guide

## 🚀 Quick Start for AI Tools

This reference provides everything needed to implement consistent styles in the Pendo Component Library.

## 📁 Key Files for AI Tools

1. **`src/design-tokens.json`** - All design values (colors, spacing, typography)
2. **`src/component-styles-map.json`** - Component-specific style mappings  
3. **`src/styles/css-custom-properties.css`** - CSS custom properties for runtime theming
4. **`STYLE_GUIDE_AI.md`** - Comprehensive style documentation

## 🎨 Color Quick Reference

### Primary Brand Colors
```
Teal (Primary Brand): #128297
Gray (Text): #2A2C35  
Blue (Info): #028CC2
Green (Success): #00AA62
Yellow (Warning): #DBA211
Red (Error): #CE0000
```

### Semantic Colors
```css
/* Text */
--color-text-primary: #2A2C35
--color-text-secondary: #6A6C75
--color-text-placeholder: #9A9CA5

/* Backgrounds */
--color-background-base: #FFFFFF
--color-background-disabled: #F4F4F7

/* Borders */
--color-border-base: #BABCC5
--color-border-light: #DADCE5
--color-border-selectable: #6A6C75
```

## 🔧 Component Implementation Patterns

### Button Component
```vue
<template>
  <button class="pendo-button pendo-button--primary pendo-button--medium">
    Button Text
  </button>
</template>

<style>
.pendo-button {
  height: var(--button-height); /* 36px */
  padding: var(--button-padding); /* 0 8px */
  border-radius: var(--button-border-radius); /* 3px */
  font-family: var(--font-family-inter);
  font-weight: var(--font-weight-semibold); /* 600 */
}

.pendo-button--primary {
  background-color: var(--color-teal-primary);
  color: var(--color-background-base);
}
</style>
```

### Input Component
```vue
<template>
  <input class="pendo-input" type="text" placeholder="Enter text">
</template>

<style>
.pendo-input {
  height: var(--input-height); /* 36px */
  padding: var(--input-padding); /* 0 12px */
  border: 1px solid var(--color-border-light);
  border-radius: var(--input-border-radius); /* 3px */
  font-size: var(--font-size-base); /* 14px */
  color: var(--color-text-primary);
}

.pendo-input:focus {
  border-color: var(--color-border-selectable-hover);
  outline: var(--focus-visible-size) solid var(--focus-visible-color);
  outline-offset: var(--focus-visible-offset);
}
</style>
```

### Alert Component
```vue
<template>
  <div class="pendo-alert pendo-alert--success">
    <div class="pendo-alert__content">Alert message</div>
  </div>
</template>

<style>
.pendo-alert {
  padding: var(--spacing-md); /* 16px */
  border-radius: var(--border-radius-3); /* 3px */
  border: 1px solid;
}

.pendo-alert--success {
  background-color: var(--status-success-background);
  border-color: var(--status-success-border);
  color: var(--status-success-text);
}
</style>
```

## 📐 Layout & Spacing

### Spacing Scale (use CSS custom properties)
```css
--spacing-xs: 4px    /* Minimal spacing */
--spacing-sm: 8px    /* Small spacing */
--spacing-md: 16px   /* Medium spacing (most common) */
--spacing-lg: 20px   /* Large spacing */
--spacing-xl: 24px   /* Extra large spacing */
```

### Common Component Heights
```css
--button-height: 36px        /* Standard button */
--button-height-small: 32px  /* Small button */
--button-height-mini: 26px   /* Mini button */
--input-height: 36px         /* All form inputs */
```

## 🔄 State Management

### Component States
All components should support these states:
```css
.pendo-component {
  /* Default state */
}

.pendo-component:hover {
  /* Hover state */
}

.pendo-component:focus {
  /* Focus state with outline */
  outline: var(--focus-visible-size) solid var(--focus-visible-color);
  outline-offset: var(--focus-visible-offset);
}

.pendo-component.is-disabled,
.pendo-component:disabled {
  /* Disabled state */
  opacity: var(--button-disabled-opacity); /* 0.5 */
  cursor: not-allowed;
}

.pendo-component.is-loading {
  /* Loading state */
}
```

## 🎯 CSS Class Naming Convention

### BEM-like Pattern
```css
.pendo-{component}                    /* Block */
.pendo-{component}__element          /* Element */
.pendo-{component}--modifier         /* Modifier */
.pendo-{component}.is-state         /* State */
.pendo-{component}.has-feature      /* Feature */
```

### Examples
```css
.pendo-button                        /* Base button */
.pendo-button--primary              /* Primary variant */
.pendo-button--small                /* Size modifier */
.pendo-button.is-disabled           /* Disabled state */
.pendo-button.has-prefix-icon       /* With prefix icon */

.pendo-modal                        /* Base modal */
.pendo-modal__header               /* Modal header */
.pendo-modal__body                 /* Modal body */
.pendo-modal--large                /* Large size */
```

## 🌓 Theme Support

### App Theme (Default)
```css
.app .pendo-button--primary {
  background-color: var(--color-teal-primary);
  color: var(--color-background-base);
}
```

### P2-Dark Theme
```css
.p2-dark .pendo-button--secondary {
  background-color: transparent;
  border-color: var(--color-background-base);
  color: var(--color-background-base);
}
```

## 🔍 AI Implementation Checklist

When implementing a new component:

- [ ] Use CSS custom properties from `css-custom-properties.css`
- [ ] Follow `.pendo-{component}` naming convention
- [ ] Include all standard states (default, hover, focus, disabled)
- [ ] Support both app and p2-dark themes
- [ ] Use spacing values that are multiples of 8px
- [ ] Apply consistent border-radius (3px for most components)
- [ ] Include proper focus states with outline
- [ ] Use Lucid icons when icons are needed
- [ ] Reference `design-tokens.json` for exact values
- [ ] Follow patterns in `component-styles-map.json`

## 💡 Common Patterns

### Simple Step Navigation
```html
<div class="pendo-simple-steps">
  <span class="pendo-simple-step pendo-simple-step--completed">Add details</span>
  <span class="pendo-simple-step pendo-simple-step--current">Select content</span>
  <span class="pendo-simple-step pendo-simple-step--pending">Choose segment</span>
</div>
```

```css
.pendo-simple-steps {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 32px 20px 32px;
  border-bottom: 1px solid var(--color-border-base);
}

.pendo-simple-step {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-text-disabled);
  transition: all 0.2s ease;
  position: relative;
}

.pendo-simple-step--completed {
  color: var(--color-text-secondary);
}

.pendo-simple-step--current {
  color: var(--color-text-primary);
  font-weight: 600;
}

.pendo-simple-step--pending {
  color: var(--color-text-disabled);
}

/* Add separators between steps */
.pendo-simple-step:not(:last-child)::after {
  content: '›';
  position: absolute;
  right: -12px;
  color: var(--color-text-disabled);
  font-size: 14px;
}
```

### Focus Ring
```css
.pendo-component:focus-visible {
  outline: var(--focus-visible-size) solid var(--focus-visible-color);
  outline-offset: var(--focus-visible-offset);
  transition: var(--transition-focus);
}
```

### Hover Effect
```css
.pendo-component:hover {
  background-color: /* slightly darker variant */;
  transition: var(--transition-all);
}
```

### Disabled State
```css
.pendo-component:disabled,
.pendo-component.is-disabled {
  opacity: var(--button-disabled-opacity);
  cursor: not-allowed;
  pointer-events: none;
}
```

This reference provides everything needed to implement consistent, accessible components that match the existing design system.
