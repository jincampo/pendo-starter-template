# Pendo Design System Components - API Documentation

This directory contains React components implementing the Pendo Design System. Each component includes comprehensive prop tables and usage examples.

## 📋 Form Components

### [RadioButtonGroup](./radio-button-group.md)
Button-style radio selection for mutually exclusive choices.
- **Props**: 12 configurable properties
- **Features**: Size variants, keyboard navigation, accessibility
- **Usage**: Mode selection, plan choosers, toolbar toggles

### [TimePicker](./time-picker.md)  
Dropdown time selection with customizable intervals.
- **Props**: 15 configurable properties
- **Features**: 12/24-hour format, searchable, time restrictions
- **Usage**: Scheduling, appointments, time-based forms

### [DatePicker](./date-picker.md)
Comprehensive date selection with calendar interface.
- **Props**: 16 configurable properties  
- **Features**: Single/multiple/range modes, presets, restrictions
- **Usage**: Event dates, date ranges, booking systems

### [ColorPicker](./color-picker.md)
Color selection with presets and custom input.
- **Props**: 15 configurable properties
- **Features**: Preset swatches, live preview, multiple formats
- **Usage**: Theme customization, design tools, branding

## 🎨 Display Components

### Alert
Status messages and notifications (updated with DS compliance)

### Modal  
Dialog overlays and popups (updated with DS compliance)

### Tooltip
Contextual information on hover/focus (updated with DS compliance)

### Wizard
Multi-step full-screen workflows (updated with DS compliance)

### Breadcrumbs
Navigation hierarchy indicators (updated with DS compliance)

### Tabs
Content organization with tabbed interface (updated with DS compliance)

### Toast
Temporary notification messages (updated with DS compliance)

### Accordion
Collapsible content sections (updated with DS compliance)

### Progress
Loading and completion indicators (updated with DS compliance)

### Divider
Visual content separators (updated with DS compliance)

## 🏗️ Layout Components

### Button, Input, Checkbox, Radio, Toggle
Basic form controls (refactored for DS compliance)

### Card, Table, Tag, Metric
Data display components (existing)

### Navigation, PageHeader, PageTemplate
Layout and structure components (existing)

## 📖 Documentation Standards

Each component documentation includes:

✅ **Complete prop table** with types, defaults, and descriptions  
✅ **Usage examples** with code snippets  
✅ **Accessibility features** and ARIA implementation  
✅ **Design system compliance** with `.pendo-*` classes  
✅ **Keyboard navigation** support  
✅ **Screen reader compatibility**  

## 🎯 Design System Compliance

All components follow Pendo Design System standards:

- **Naming Convention**: `.pendo-component__element--modifier`
- **Color System**: Teal primary (#128297), semantic tokens
- **Typography**: Inter font family, 14px base size
- **Spacing**: 8px grid system (xs=4px, sm=8px, md=16px, lg=20px, xl=24px)
- **Accessibility**: WCAG 2.1 AA compliance
- **Focus Management**: Visible focus rings and keyboard navigation
- **State Management**: Hover, focus, disabled, error states

## 🔧 Technical Implementation

- **React**: Functional components with forwardRef
- **TypeScript**: Full type safety with interfaces
- **CSS**: Design tokens and custom properties
- **Accessibility**: ARIA roles, keyboard support, screen readers
- **Testing**: Ready for unit and integration testing

For detailed prop tables and examples, see individual component documentation files.

