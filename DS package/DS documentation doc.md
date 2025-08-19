## **Breadcrumbs**

### **What is a breadcrumbs component?**

Breadcrumbs display the current location of a user within a navigational hierarchy. They help users understand the structure of the site and navigate back to previous levels.

Breadcrumbs serve three primary functions:

1. **Navigation.** Allow users to move up the hierarchy.  
2. **Orientation.** Confirm the user’s current location within the structure.  
3. **Context.** Provide clarity when users arrive via external links or searches.

### **When to use breadcrumbs**

Use breadcrumbs in experiences that:

* Have a hierarchy of more than two levels.  
* Require users to understand their position within a complex navigation structure.

Breadcrumbs are especially useful in sub-navigation or drill-down flows, helping users keep track of their location and how they arrived there.

**Do’s and Dont’s**  
Do:

* Truncate long labels if necessary  
* Show the current page clearly  
* Use consistent separators (e.g. chevrons)

Dont:

* Use breadcrumbs as primary navigation  
* Link the final breadcrumb item  
* Mix icon types or sizes

### **When not to use breadcrumbs**

Avoid using breadcrumbs if:

* The design involves a step-by-step process; use a stepper UI instead.  
* A second-level navigation, like a table of contents, is already present and visible, making breadcrumbs redundant.

### **Accessibility Guidelines**

* Use `<nav aria-label="breadcrumb">` to identify the region.  
* Mark the last item with `aria-current="page"`.  
* Ensure adequate **contrast** between text and background (AA minimum).  
* Icons should not rely solely on color to indicate state.

### 

### **Component Anatomy**

| Element | Description |
| :---- | :---- |
| Container | `<nav>` element with `aria-label="breadcrumb"` |
| Breadcrumb items | Clickable text links, except final item |
| Separator icon | Visual divider (e.g., chevron or slash) |
| Current page | Non-clickable, with `aria-current="page"` |

## **Checkbox**

### **What is a checkbox component?**

Checkboxes are used to enable binary choices. The user can have an individual  
choice or a collection of choices.

### **When to use checkboxes**

Use a checkbox to present the user with a choice in a form.  
A checkbox should be used to apply the users choice immediately, sometimes a user may have to select a save button to confirm their selection.

**Do’s and Dont’s**  
Do:

* Use labels for all checkboxes  
* Use indeterminate for grouped selections  
* Ensure focus styles are visible

Dont:

* Use a checkbox without a label or aria-label  
* Use indeterminate as a permanent state  
* Rely on color alone to indicate state

### **When not to use breadcrumbs**

* If you are intending to use in the case of enabling a feature, for example, use a toggle switch instead.

### 

### **Accessibility Guidelines**

* Labeling requirements (aria-label if no visible label)  
* Keyboard support (tab and spacebar interaction)  
* Focus ring (for WCAG 2.1 AA)  
* aria-checked, aria-disabled state support  
* Indeterminate state via aria-checked="mixed"

###  **Component Anatomy**

| Element | Description |
| :---- | :---- |
| Checkbox box | The square interactive element |
| Checkmark icon | Displayed when selected |
| Label text | Descriptive text next to checkbox |
| Container | Optional wrapper for alignment, grouping, and spacing`"` |

### **Updates needed**

We should add a pressed state

## **Accordian/Collapse**

### **What is an accordion component?**

The Accordion is a vertically stacked set of interactive headings that users can expand or collapse to show and hide related content. It helps manage large amounts of content in a compact space.

### **When to use an accordion**

Use an accordion when you want to:

* Allow users to **scan and reveal content selectively**.  
* Reduce cognitive load by hiding non-essential content.  
* Provide a clean, **mobile-friendly alternative** to long-scroll layouts.

**Do’s and Dont’s**  
Do:

* Use clear, descriptive titles	  
* Nest accordions inside each other  
* Use motion to reinforce open/close state	

Dont:

* Use vague labels like “More”  
* Link the final breadcrumb item  
* Use abrupt, jarring transitions

### **When not to use an accordion**

* For critical content that users should always see  
* When content needs to be scanned at a glance  
* In contexts where layout consistency is essential (e.g., data tables)

### **Accessibility Guidelines**

* Use a **button** element for the header  
* Apply `aria-expanded="true/false"` to each header  
* Each panel should be:  
  * `role="region"`  
  * `aria-labelledby` pointing to the header `id`  
* Ensure focusable, keyboard-operable toggling with `Tab` and `Enter/Space`

### 

### **Component Anatomy**

| Element | Description |
| :---- | :---- |
| Accordion container | Groups multiple accordion items |
| Accordion item	 | One expandable/collapsible section |
| Header / Trigger | Clickable title that toggles content |
| Chevron icon | Visual indicator for expand/collapse |
| Content panel | The collapsible body that reveals details |

### **Updates needed**

We need to revisit this component completely and consolidate to one option  
[https://carbondesignsystem.com/components/accordion/usage/?utm\_source=chatgpt.com](https://carbondesignsystem.com/components/accordion/usage/?utm_source=chatgpt.com)

## 

## **Color picker**

### **Component Overview**

#### **What is Color Picker?**

The Color Picker component allows users to select and apply a specific color. It typically includes a trigger (e.g., swatch or input) to open the picker panel, where users can choose a color via a visual spectrum, input a hex/RGB value, or select from preset swatches.

#### **When to use Color Picker**

* When users need to choose a custom or predefined color in a design, chart, or UI customization setting.

* When the task benefits from both manual value entry and visual color selection.

#### **When not to use Color Picker**

* When only a small set of fixed color choices is needed (use a simple radio or dropdown instead).

* When color selection is not relevant to the user’s task.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Trigger | The button, swatch, or input field that opens the color picker panel. |
| Color Swatch | A small visual preview of the current color selection. |
| Color Input | A text field to enter or adjust color values in hex, RGB, or other formats. |
| Picker Panel | The expanded interface for selecting colors from a gradient, spectrum, or sliders. |
| Preset Swatches | Predefined color options for quick selection. |
| Selection Indicator | Visual cue showing the currently selected color (e.g., checkmark). |
| Disabled State | Non-interactive visual state indicating the component is unavailable. |

---

### **States and Variants**

#### **Trigger States**

* **Default** – Standard state with the current color visible in swatch and hex input.

* **Hover** – Highlight or border change indicating interactivity.

* **Text Clicked** – Text field is active for manual input.

* **Swatch Clicked** – Color swatch is active for manual selection.

* **Disabled** – Component is visually muted and non-interactive.

#### **Preset Swatch States**

* **Default** – Swatch is available for selection.

* **Hover** – Border or background change signals interactivity.

* **Swatch Clicked** – Selected swatch with a visible checkmark indicator.

---

### **Interactive Properties**

* **Open/Close Behavior** – Trigger opens the color picker panel; clicking outside closes it.

* **Keyboard Input** – User can type a valid color code into the text field.

* **Preset Selection** – Clicking a preset swatch applies that color immediately.

* **Live Preview** – Changes update the swatch preview in real time.

---

### **Do’s and Don’ts**

**Do:**

* Ensure visual feedback for all interaction states.

* Provide both manual input and visual selection for accessibility and flexibility.

**Don’t:**

* Overload the picker with too many presets—keep them concise and relevant.

* Hide the current selection state—users should always see the active color.

---

### **Content Guidelines**

* Use clear labels for color formats (e.g., “Hex”, “RGB”).

* Ensure input field placeholders are descriptive (e.g., `#FFFFFF` for hex).

* Keep tone instructional and concise in any helper text or tooltips.

---

### **Accessibility Guidelines**

* **ARIA roles**: Use `role="button"` for trigger, `role="dialog"` for panel, and appropriate ARIA attributes for current selection.

* **Contrast**: Ensure swatch borders and indicators meet WCAG 2.1 contrast requirements.

* **Keyboard Support**: Allow focus on the trigger, input field, and preset swatches; support `Enter`/`Space` to open and select colors; `Escape` to close.

* **Screen Reader Support**: Announce current color value and selection changes in real time.

## **Date picker**

### **Component Overview**

#### **What is Date Picker?**

The Date Picker is a form control that enables users to select a date or a range of dates. It supports single-date selection, date ranges, and multiple-date selection, with additional features like predefined shortcuts and min/max date limits.

#### **When to use Date Picker**

* When users need to select a specific date or a date range for filtering, scheduling, or data entry.

* When quick date selection improves workflow, such as booking systems, reports, or form inputs.

#### **When not to use Date Picker**

* When only fixed, known date options are available (use a dropdown or radio button group instead).

* When the date is not user-editable or is static.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Trigger | Button or input field that opens the date picker panel. |
| Calendar Panel | The main interactive calendar grid for selecting dates. |
| Month/Year Navigation | Controls to switch between months or years. |
| Preset Shortcuts | Quick links to common date ranges (e.g., “Today”, “Last 7 Days”). |
| Date Cells (Numbers) | Individual date elements in the grid, styled according to state. |
| Range Highlight | Visual indicator of the selected start and end dates in range mode. |
| Disabled Dates | Dates outside selectable range, styled as inactive. |
| Focus Indicator | Outline or highlight showing the currently focused date for keyboard navigation. |

---

### **States and Variants**

#### **Date Picker Number States (Base Component)**

* **Default** – Standard date number with no highlight.

* **Hover** – Date number outlined or background-highlighted to indicate interactivity.

* **Selected** – Date number with filled background to indicate current selection.

* **Range Start / Range End** – Dates at the boundaries of a selected range, styled with emphasis.

* **Range Middle** – Dates between the start and end of a range, styled with lighter highlight.

* **Disabled** – Muted styling indicating the date cannot be selected.

#### **Date Picker Variants**

* **Default** – Single-date selection with current month view.

* **Min/Max** – Limits date selection to a specific range.

* **Multiple** – Allows selecting more than one individual date.

* **Range** – Allows selecting a start and end date, with range highlighting.

* **Range Shortcuts** – Includes quick-select options for predefined ranges.

#### **Calendar States**

* **Default** – Calendar visible with no date selected.

* **Hover** – Date cell highlights on mouse hover.

* **Focus** – Date cell visually outlined for keyboard navigation.

---

### **Interactive Properties**

* **Open/Close Behavior** – Clicking the trigger opens the panel; clicking outside or pressing `Escape` closes it.

* **Keyboard Navigation** – Arrow keys move focus between days; `Enter` selects a date; `Tab` cycles focus.

* **Range Selection** – First click sets the start date; second click sets the end date.

* **Preset Shortcuts** – Clicking a shortcut auto-fills the date(s).

* **Dynamic Limits** – Min and max dates can adjust dynamically based on other form inputs.

---

### **Do’s and Don’ts**

**Do:**

* Provide clear visual feedback for hover, focus, and selected states.

* Offer shortcuts for common date ranges to save time.

**Don’t:**

* Overcrowd the interface with too many preset options.

* Allow selection of unavailable dates without clear visual indicators.

---

### **Content Guidelines**

* Use plain language for presets (e.g., “Next 30 Days” instead of “+30 Days”).

* Clearly display the selected date(s) in the trigger input.

* Use consistent date formats that match the user’s locale.

---

### **Accessibility Guidelines**

* **ARIA roles**: Use `role="dialog"` for the panel, `role="grid"` for the calendar, `role="gridcell"` for dates.

* **Labels**: Ensure month/year navigation buttons have descriptive labels (e.g., “Next Month”).

* **Keyboard Support**: Fully operable via keyboard, including navigation and selection.

* **Contrast**: Meet WCAG 2.1 minimum contrast for all text and interactive states.

* **Screen Reader Support**: Announce selected dates, range start/end, and unavailable dates.

## **Divider**

### **Component Overview**

#### **What is Divider?**

The Divider is a non-interactive UI element used to visually separate content or sections within a layout. It can be oriented horizontally or vertically depending on the layout needs.

#### **When to use Divider**

* To create clear separation between related but distinct groups of content.

* To improve visual hierarchy in complex layouts.

#### **When not to use Divider**

* When whitespace alone is sufficient to create separation.

* To indicate interactivity (use buttons, links, or other interactive elements instead).

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Divider Line | The visible rule or line that creates separation between content. |
| Orientation | Defines whether the divider is horizontal (row separation) or vertical (column separation). |

---

### **States and Variants**

#### **Variants**

* **Horizontal** – Extends across the width of the container to separate sections vertically.

* **Vertical** – Extends along the height of the container to separate sections horizontally.

---

### **Interactive Properties**

The Divider is a static element with no interactive behaviors.

---

### **Do’s and Don’ts**

**Do:**

* Use dividers sparingly to avoid visual clutter.

* Ensure divider color and thickness are consistent with the design system’s visual language.

**Don’t:**

* Overuse dividers in small spaces.

* Use dividers as decorative elements without purpose.

---

### **Content Guidelines**

* No text content is typically associated with dividers.

* Ensure orientation is correct for the layout context.

---

### **Accessibility Guidelines**

* Decorative dividers should use `role="presentation"` or `aria-hidden="true"` so they are ignored by assistive technologies.

* If used to separate semantic sections, ensure proper heading structure and ARIA landmarks are present for screen readers.

## 

## **Drawer/Blade**

### **Component Overview**

#### **What is Drawer / Blade?**

The Drawer (also referred to as a Blade) is a UI component that expands from the side to display additional content without navigating away from the current page. Drawers **push the main page content over** rather than overlaying it. This preserves visibility of the surrounding context while providing space for additional actions or information.

#### **When to use Drawer / Blade**

* To display additional details, forms, or actions while keeping the original page visible.

* For workflows that require context preservation during editing or review.

* To segment complex information into manageable sections.

#### **When not to use Drawer / Blade**

* When you need an **overlay** that covers the page content — use the **Full screen drawer** component instead.

* For simple notifications or brief confirmations — use toasts or modals.

* When the content is the primary focus and requires the full page for interaction.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Masthead | Top section containing the title, core action buttons, and close button. May include an entity icon or label. |
| Header | Contains the entity title, close button, and optional metadata or action buttons. |
| Body | Main content area for details, forms, tables, or visualizations. |
| Tabs | Optional segmented navigation for multiple content sections within the drawer. |
| Action Buttons | Primary and secondary calls-to-action, typically positioned near the header or footer. |
| Borders | Visual separators for content areas inside the body. |
| Footer | Bottom section containing persistent actions such as Save, Cancel, or Save Draft. |
| Sticky Header/Footer | Optional fixed positioning for critical actions in tall drawers. |

---

### **States and Variants**

#### **Variants**

* **Side Drawer – Standard**: Pushes page content horizontally to reveal the drawer.

* **Full-Screen Drawer**: Expands to fill the entire viewport width; still shifts rather than overlays.

* **Drawer with Tabs**: Allows switching between multiple related content areas.

#### **States**

* **Default** – Drawer is visible with content loaded.

* **Scrolling** – Sticky headers/footers remain visible during vertical scrolling.

* **Collapsed** – Drawer hidden, main content returns to full width.

---

### **Interactive Properties**

* **Open/Close Behavior** – Drawer pushes page content aside when opening; closes by reversing this shift.

* **No Overlay Mode** – Overlays are not supported; use the Wizard for overlay experiences.

* **Tab Switching** – Switching content sections without reloading the drawer.

* **Sticky Regions** – Optional fixed header or footer for quick access to primary actions.

* **Responsive Layout** – Drawer width adjusts to breakpoints, maintaining push behavior.

---

### **Do’s and Don’ts**

**Do:**

* Keep the push interaction smooth and consistent.

* Use drawers to keep relevant page context visible.

* Provide clear titles and grouped actions.

**Don’t:**

* Use a drawer to cover content (use Wizard instead).

* Overpopulate headers with unrelated actions.

* Hide the close button — always give users a way to dismiss.

---

### **Content Guidelines**

* Drawer titles should be descriptive and context-specific.

* Action buttons should be labeled with verbs.

* Tab labels should be short and clearly differentiated.

---

### **Accessibility Guidelines**

* **ARIA Roles**: Use `role="dialog"` for the drawer container.

* **Focus Management**: Focus moves to drawer on open, returns to trigger on close.

* **Keyboard Support**: ESC closes; Tab cycles focus within the drawer.

* **Contrast**: Meet WCAG 2.1 for all elements.

* **Screen Reader Announcements**: Announce the drawer title and that it pushes content, not overlays.

# **Full screen drawer/wizard**

### **Component Overview**

#### **What is Full Screen Drawer?**

The Full Screen Drawer is a variant of the Drawer component that expands to occupy the entire viewport width and height. It is used for focused workflows where page context is not required, such as multi-step creation flows or detailed data entry. It supports both single-page tasks and multi-step wizards depending on the workflow complexity.

#### **When to use Full Screen Drawer**

* When a workflow requires full attention without the need to reference surrounding page content.

* For multi-step processes (wizard-style) where clarity and focus are essential.

* For single-screen tasks that require a distraction-free space, such as detailed data input.

* When the action launched from the main page takes the user into a dedicated creation or editing mode.

#### **When not to use Full Screen Drawer**

* When users need to maintain visibility of the underlying page — use a Side Drawer (pushes content) instead.

* For quick edits or small forms that do not require the full screen — use a modal or side drawer.

* For complex multi-step processes requiring extensive navigation — consider breaking into separate pages.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Masthead | Three-section header with title (252px), numbered step navigation (flexible center), and close button (252px). 68px height with subtle shadow. |
| Numbered Steps | Interactive numbered step indicators positioned in masthead center with chevron separators. Shows progress and allows navigation to completed steps. |
| Body | Light gray background (#f8f8f9) with 72px vertical padding containing centered content cards. |
| Content Card | 800px white card with header (step title) and body sections. Includes border, shadow, and proper spacing matching design system. |
| Footer | Contains primary and secondary navigation actions (Previous, Next, Finish). Positioned at bottom with shadow. |
| Close Button | X icon in top-right of masthead that dismisses the drawer with confirmation. |

---

### **States and Variants**

#### **Variants**

* **Single-Page Full Screen Drawer** – Used for standalone tasks that fit on one screen. Does not include step navigation.

* **Multi-Step Full Screen Drawer (Wizard)** – Includes step navigation at the top, guiding the user through a defined sequence of steps.

#### **States**

* **Default** – Drawer is open and content is ready for interaction.

* **Active Step** – Current step highlighted in step navigation (multi-step variant only).

* **Disabled Step** – Step not yet available due to workflow rules.

---

### **Step Navigation Patterns**

The Multi-Step Full Screen Drawer supports a simple header-based step navigation pattern for guiding users through sequential workflows.

#### **Numbered Header Steps**

* **Use for**: 2-4 step workflows with self-explanatory step names
* **Pattern**: Numbered labels with chevron separators positioned in the masthead center
* **Example**: "1. Add details › 2. Select content › 3. Choose segment"
* **Layout**: Centered between title and close button in header

**Implementation:**
```html
<div class="pendo-numbered-steps">
  <button class="pendo-numbered-step pendo-numbered-step--completed">
    <span class="pendo-numbered-step__number">1.</span>
    <span class="pendo-numbered-step__label">Add details</span>
  </button>
  <ChevronRight className="pendo-numbered-step__separator" />
  <button class="pendo-numbered-step pendo-numbered-step--current">
    <span class="pendo-numbered-step__number">2.</span>
    <span class="pendo-numbered-step__label">Select content</span>
  </button>
  <ChevronRight className="pendo-numbered-step__separator" />
  <button class="pendo-numbered-step pendo-numbered-step--pending">
    <span class="pendo-numbered-step__number">3.</span>
    <span class="pendo-numbered-step__label">Choose segment</span>
  </button>
</div>
```

**Step States:**
* **Completed** (`.pendo-numbered-step--completed`) – Steps that have been finished, clickable to navigate back
* **Current** (`.pendo-numbered-step--current`) – Active step being worked on, displayed with semibold weight
* **Pending** (`.pendo-numbered-step--pending`) – Future steps not yet accessible, secondary text color

**Visual Specifications:**
* **Header Height**: Exactly 68px with no vertical padding (matching Figma)
* **Title Font**: 22.78px Inter Semi Bold, line-height 1.3
* **Step Font**: 14px Inter, Regular for normal/pending, Semi Bold for current
* **Card Dimensions**: 800px width, 419px minimum height
* **Card Styling**: White background, #dadce5 border, 4px border-radius, subtle shadow
* **Body Background**: Light gray #f8f8f9 with 72px top/bottom padding

**Guidelines:**
* Keep step labels concise and action-oriented (e.g., "Add details", "Select content") 
* Use 2-4 steps maximum for optimal readability
* Ensure step names are self-explanatory without additional descriptions
* Maintain consistent verb tense across step labels (all imperative: "Add", "Select", "Choose")
* Include numbers before each step label for clear progression
* Center steps in masthead between title and close button

---

### **Interactive Properties**

* **Open/Close Behavior** – Opens via an action trigger; closes via close button or ESC key.

* **Step Navigation** – Allows linear progression forward and backward navigation to completed steps. Current step highlighted with semibold weight, completed steps clickable.

* **Responsive Layout** – Scales content for different viewport sizes while maintaining full-screen coverage.

* **Keyboard Navigation** – Tab order moves sequentially through content; ESC closes drawer.

---

### **Do’s and Don’ts**

#### **Do:**

* Use clear, action-oriented step labels.

* Keep each step or page focused and manageable.

* Provide consistent navigation actions in the footer.

* Adapt layout for both single and multi-step experiences.

#### **Don’t:**

* Overload a single page or step with too much information.

* Use for simple interactions where a smaller component would suffice.

* Hide navigation actions — always provide a way to progress or exit.

* Confuse users by mixing single-screen and multi-step paradigms without clarity.

---

### **Content Guidelines**

* Title should match the workflow purpose (e.g., “Create Idea Poll”).

* Step labels (for multi-step flows) should be short, descriptive, and numbered when appropriate.

* Action buttons should use verbs (e.g., “Next: Set Schedule”, “Save and Exit”).

* Keep content concise, scannable, and focused per screen/step.

---

### **Accessibility Guidelines**

* **ARIA Roles**: Use `role="dialog"` and ensure proper labeling with the drawer title.

* **Focus Management**: Move focus to the first interactive element on open; return focus to the trigger on close.

* **Keyboard Support**: ESC closes drawer; Tab and Shift+Tab move focus within drawer.

* **Screen Reader Announcements**: Announce the drawer opening, current step (if multi-step), and any changes in state.

### **Implementation Example**

A complete React TypeScript implementation example is available demonstrating:

* **Numbered step navigation** in masthead header
* **Centered card layout** with proper spacing and shadows  
* **Three-step workflow**: "Add details" → "Select content" → "Choose segment"
* **Full accessibility support** with ARIA attributes and keyboard navigation
* **Responsive design** that works on desktop and mobile
* **Form validation** and proper state management
* **TypeScript interfaces** for component props and step definitions

**File Structure:**
```
├── Wizard.tsx              # Main wizard component
├── Wizard.css              # Complete styling following design system
├── WizardExample.tsx        # Example implementation with 3 steps
└── index.ts                # Export definitions
```

**Key Features Implemented:**
- Exact Figma design specifications (68px header, 800px cards, proper shadows)
- Pendo design system naming conventions (`.pendo-*` classes)
- Complete accessibility (WCAG AA compliance)
- Interactive numbered steps with chevron separators
- Card-based content layout matching design system patterns

* **Contrast**: Meet WCAG 2.1 AA for all interactive elements and text.

# **Input text**

### **Component Overview**

#### **What is Input (Text)?**

The Text Input component is a form control that allows users to enter and edit single-line text. It supports multiple configurations, including default, slotted (with prepend/append elements), and password fields. Inputs are available in three sizes: Regular, Small, and Mini.

#### **When to use Input (Text)**

* For collecting short, structured text such as names, email addresses, or search queries.

* When a user needs to enter data that cannot be efficiently captured with a select, checkbox, or radio button.

#### **When not to use Input (Text)**

* For long-form content entry — use a Text Area component instead.

* For numeric-only input — use a Number Input or dedicated numeric field.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Label | Descriptive text indicating the purpose of the input. |
| Input Field | Editable area where the user types their response. |
| Prepend Slot | Optional element placed before the input text (e.g., icon, prefix). |
| Append Slot | Optional element placed after the input text (e.g., icon, suffix, toggle). |
| Error Message | Text providing feedback when the entered value is invalid. |
| Password Toggle (Password variant) | Control to show or hide password characters. |

---

### **States and Variants**

#### **Variants**

* **Default** – Basic text input with label.

* **Slot** – Input with prepend and/or append elements.

* **Password** – Secure input with toggle to reveal/hide entered characters.

#### **Sizes**

* **Regular** – Standard form field height.

* **Small** – Compact version for dense layouts.

* **Mini** – Extra compact for space-constrained areas.

#### **States**

* **Default** – Idle state with placeholder or existing value.

* **Hover** – Border or background change indicating interactivity.

* **Focused** – Active input ready for typing.

* **Disabled** – Non-interactive with muted styling.

* **Error/Validation** – Border and message indicate input does not meet requirements.

---

### **Interactive Properties**

* **Focus Behavior** – Clicking or tabbing into the field applies the focused state.

* **Slot Support** – Prepend/append elements can contain icons, text, or controls.

* **Password Toggle** – For password variant, clicking the toggle switches between masked and visible text.

* **Validation Feedback** – Error state can be triggered on blur, form submission, or live validation.

---

### **Do’s and Don’ts**

**Do:**

* Keep labels short, clear, and descriptive.

* Use placeholder text for examples, not as the primary label.

* Ensure consistent padding and alignment across sizes.

**Don’t:**

* Use placeholder text instead of labels — it disappears when typing.

* Overload prepend/append areas with multiple unrelated controls.

* Hide error messages — make them visible and descriptive.

---

### **Content Guidelines**

* Labels should clearly state what information is required.

* Error messages should be specific (e.g., “Enter a valid email address” rather than “Invalid input”).

* Use sentence case for labels and messages.

---

### **Accessibility Guidelines**

* **Label Association**: Each input must have an associated `<label>` or `aria-label`.

* **Keyboard Navigation**: Fully operable with keyboard; focus order should follow logical form sequence.

* **ARIA Attributes**: Use `aria-invalid="true"` when in error state; associate `aria-describedby` with error messages.

* **Contrast**: Meet WCAG 2.1 standards for text and state indicators.

* **Password Field**: Announce the show/hide toggle to assistive technology.

# **Text area**

### **Component Overview**

#### **What is Text Area?**

The Text Area is a multi-line text input field used to capture longer-form text content, such as comments, descriptions, or messages. It supports multiple visual states, including default, hover, focused, and error/validation.

#### **When to use Text Area**

* When the user needs to enter paragraphs or multiple lines of text.

* For unstructured, open-ended responses such as feedback forms or notes.

#### **When not to use Text Area**

* For short, single-line entries — use the **Text Input** component instead.

* For structured text entry that requires formatting — consider a rich text editor.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Label | Descriptive text indicating the purpose of the text area. |
| Text Area Field | Editable multi-line field where the user types their response. |
| Error Message | Text providing feedback when the entered value is invalid. |

---

### **States and Variants**

#### **States**

* **Default** – Idle state with placeholder or existing value.

* **Hover** – Border or background change to indicate interactivity.

* **Focused** – Active state when the user is typing.

* **Error/Validation** – Border and message indicate the content does not meet requirements.

---

### **Interactive Properties**

* **Resizing** – Depending on design specifications, may allow manual resizing or remain fixed.

* **Validation Feedback** – Error state can be triggered on blur, submission, or live validation.

* **Keyboard Navigation** – Supports multiline entry with `Enter`/`Return`.

---

### **Do’s and Don’ts**

**Do:**

* Use for inputs requiring more than one sentence.

* Keep labels concise but descriptive.

* Provide clear error messages when validation fails.

**Don’t:**

* Replace a single-line input with a text area for short values.

* Overload with placeholder text that mimics labels.

---

### **Content Guidelines**

* Labels should describe the expected content (e.g., “Project Description”).

* Placeholders can provide examples of the desired format or tone.

* Error messages should be actionable (e.g., “Description must be under 500 characters”).

---

### **Accessibility Guidelines**

* **Label Association**: Each text area must have an associated `<label>` or `aria-label`.

* **ARIA Attributes**: Use `aria-invalid="true"` when in error state and `aria-describedby` to link error messages.

* **Keyboard Support**: Fully operable with keyboard; Enter creates new lines.

* **Contrast**: Meet WCAG 2.1 requirements for text, borders, and error indicators.

# **Input (number)**

#### **What is Input (Number)?**

The Input (Number) component is a form control that allows users to input numeric values. It can include precision formatting, contextual labels, and visual slots (prepend/append) to enhance clarity and usability.

#### **When to use Input (Number)**

* When users need to input quantities, measurements, prices, or other numeric data.

* When numeric input benefits from precision (e.g., currency, decimal values).

* When the UI requires contextual elements (like units, currency, or suffixes).

#### **When not to use Input (Number)**

* When input must be textual, date-based, or include non-numeric characters.

* When users should select from predefined numeric values — consider using sliders or dropdowns instead.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Label (Top) | Optional label positioned above the input field. |
| Input Field | The field where users enter numeric values. |
| Label (Bottom) | Optional helper text or annotation below the input. |
| Prepend Slot | Optional element shown before the input (e.g., currency symbol or icon). |
| Append Slot | Optional element shown after the input (e.g., units or a suffix label). |
| Decimal Precision | Allows control over decimal formatting for precision inputs. |

---

### **States and Variants**

#### **Default**

* **Purpose:** Unfocused, editable input.

* **Example:** A neutral input showing a number.

* **Usage:** Standard state ready for user interaction.

#### **Hover**

* **Purpose:** Indicates interactivity.

* **Example:** Subtle border or background change on hover.

* **Usage:** Helps users discover interactivity.

#### **Focused**

* **Purpose:** Active input state.

* **Example:** Clear visual ring or border.

* **Usage:** Use accessible focus indicators to guide input.

#### **Disabled**

* **Purpose:** Prevents user input and indicates inactivity.

* **Example:** Grayed out input, cursor shows not-allowed.

* **Usage:** Use when input is conditionally unavailable.

#### **With Labels**

* **Purpose:** Clarifies context or instructions.

* **Example:** Labels above ("Top") or below ("Bottom") the input.

* **Usage:** Use to provide contextual cues without clutter.

#### **Precision Input**

* **Purpose:** Supports decimal formatting (e.g., `0.00`).

* **Example:** Used for financial or scientific data entry.

* **Usage:** Ensure formatting is clear and consistent.

#### **With Slots**

* **Purpose:** Supports prefix/suffix visuals or text.

* **Example:** "kg", "$", or "min" surrounding the input.

* **Usage:** Improve context without adding form elements.

---

### **Interactive Properties**

* **Typing & Editing:** Users can type numbers directly.

* **Focus/Blur Events:** Triggered for validation or UI changes.

* **Precision Enforcement:** Input can be restricted to decimal formats.

* **Slot Interactions:** Prepend and append slots can hold interactive components (icons, buttons, tooltips), though their focus behavior should be managed carefully.

**Example (Precision with Slots):**

jsx  
CopyEdit  
`<InputNumber`   
  `labelTop="Amount"`  
  `labelBottom="Enter value in USD"`  
  `value="100.00"`  
  `prepend="$"`  
  `append=".00"`  
`/>`

---

### **Do’s and Don’ts**

**Do:**

* Use top and bottom labels to add clarity where needed.

* Use slots to show contextual information like currency or units.

* Apply precision formatting when working with decimal or currency values.

**Don't:**

* Use this component for freeform text or mixed alphanumeric inputs.

* Add too many visual decorations — keep context helpful, not distracting.

* Use labels in multiple positions unnecessarily (e.g., both inline and top).

---

### **Content Guidelines**

* Use **short, descriptive** labels (e.g., "Amount", "Quantity", "Weight").

* For top labels, prefer **sentence case** without punctuation.

* For suffixes or slots, use **concise units** (e.g., "kg", "$", "%").

* Bottom labels can clarify format or constraints (e.g., “Max: 1000”).

---

### **Accessibility Guidelines**

* **ARIA Attributes:** Use `aria-label`, `aria-labelledby`, and `aria-describedby` as needed for screen reader context.

* **Keyboard Navigation:** All interactions (input, focus) should be accessible via keyboard.

* **Focus Management:** Ensure a visible, high-contrast focus ring.

* **Contrast Ratios:** Text and borders must meet WCAG AA at minimum (4.5:1 for text).

* **Disabled State:** Use `aria-disabled="true"` and visual cues together.

# **Button**

#### **What is Button?**

A Button is a UI element that enables users to trigger actions, submit forms, or navigate within the application. Buttons serve as clear visual cues for interaction.

#### **When to use Button**

* To initiate a primary action (e.g., submit, save, continue).

* To trigger secondary or supporting actions (e.g., cancel, reset).

* For inline actions (e.g., adding a tag, toggling views).

#### **When not to use Button**

* When navigation is the sole purpose — consider using a link instead.

* When actions are passive or informational — use badges or labels instead.

* When an icon alone can suffice and is universally understood.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Label | Describes the action the button performs. |
| Icon (optional) | Used to reinforce meaning or stand alone (icon-only buttons). |
| Container | Button body styled according to type (e.g., primary, ghost). |
| Loading Spinner | Optional indicator for in-progress actions. |

---

### **States and Variants**

#### **Default**

* **Purpose:** Ready-to-use state.

* **Example:** “Save” button on a form.

* **Usage:** Appears when enabled and not interacted with.

#### **Hover**

* **Purpose:** Indicates interactivity.

* **Example:** Slight background or shadow change.

* **Usage:** Provides affordance for pointer devices.

#### **Active/Pressed**

* **Purpose:** Reflects click or touch activation.

* **Example:** Button darkens briefly on click.

* **Usage:** Reinforces that an action is being triggered.

#### **Focused**

* **Purpose:** Supports keyboard navigation.

* **Example:** Outline or ring appears.

* **Usage:** Ensures accessibility and visibility.

#### **Disabled**

* **Purpose:** Indicates unavailable action.

* **Example:** Grayed out with no pointer events.

* **Usage:** Prevents interaction and signals inactive state.

---

### **Interactive Properties**

* **Click Behavior:** Executes assigned action.

* **Keyboard Support:** Fully operable with `Tab`, `Enter`, and `Space`.

* **Loading State:** Prevents duplicate actions; shows progress.

* **Focus Management:** Keyboard and screen reader friendly.

**Example:**

jsx  
CopyEdit  
`<Button type="primary" onClick={submitForm}>Submit</Button>`

---

### **Do’s and Don’ts**

**Do:**

* Pair Cancel/Close buttons with Primary buttons using Secondary styling.

* Use icons to reinforce meaning when space is limited.

* Follow the visual hierarchy (Primary, Secondary, Tertiary) based on importance.

**Don't:**

* Use multiple primary buttons in the same view.

* Use buttons for navigation when a link is more appropriate.

* Rely only on color to indicate type (ensure shape, icon, or label clarity).

---

### **Content Guidelines**

* Use **concise, action-oriented** text: “Save”, “Add User”, “Launch Designer”.

* Avoid vague labels like “Click Here” or “Submit” unless context is clear.

* Use **title case** for button labels (e.g., “Add Column”).

* Icon-only buttons should include accessible labels (`aria-label`).

---

### **Accessibility Guidelines**

* **ARIA Roles:** Defaults to `role="button"`. Add `aria-pressed`, `aria-label` as needed.

* **Keyboard Support:** All buttons must support focus, activation with `Enter`/`Space`.

* **Color Contrast:** Text and background must meet WCAG 2.1 AA contrast ratio (4.5:1).

* **Focus Indicators:** Must be clearly visible and distinct.

* **Screen Reader Support:** Provide hidden text or `aria-label` for icon-only buttons.

# **Alert banner**

#### **What is Alert Banner?**

An Alert Banner is a system-level message used to inform users of critical events, warnings, errors, or updates within an application. It appears prominently within the UI to interrupt or draw attention when necessary.

#### **When to use Alert Banner**

* When communicating high-priority, time-sensitive system messages.

* When notifying users of critical updates that affect workflow or outcomes.

* To confirm success after an action is taken or alert users to issues.

#### **When not to use Alert Banner**

* For inline validation messages — use inline error messages instead.

* For low-urgency or passive updates — consider using toasts or badges.

* As a replacement for empty states, page banners, or status indicators.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Icon | Visually represents the alert type (info, warning, error, success). |
| Title | Optional headline summarizing the alert. |
| Description | Main message content that provides detail or context. |
| Close Icon | Dismissal control to hide the alert (if applicable). |
| Style Variant | Color and icon styling adjusted based on alert type. |

---

### **States and Variants**

#### **Informational**

* **Purpose:** Notifies users of a change or status update that does not require action.

* **Example:** "System settings are now managed by your admin."

* **Guidelines:** Do not use for general promotional information. Keep neutral in tone.

#### **Warning**

* **Purpose:** Informs users of potential issues that may require attention.

* **Example:** "Our website will be undergoing maintenance soon."

* **Guidelines:** Provide actionable instructions if applicable; avoid excessive warnings.

#### **Error**

* **Purpose:** Communicates a critical problem that prevents workflow or system access.

* **Example:** "Your browser is not supported. Please switch to a modern browser."

* **Guidelines:** Use clear, solution-focused language. Offer recovery steps or links.

#### **Success**

* **Purpose:** Confirms successful completion of an action.

* **Example:** "Your file has been successfully uploaded."

* **Guidelines:** Use briefly to acknowledge actions. Avoid overuse for passive updates.

---

### **Interactive Properties**

* **Dismissible Option:** Users can close the alert if configured with a close icon.

* **Dynamic Content:** Can include links or buttons for further action.

* **Auto-dismiss (Optional):** For non-critical messages like success notifications.

**Example:**

jsx  
CopyEdit  
`<AlertBanner type="error" dismissible>`  
  `<strong>There were 2 errors.</strong> Check your browser or try again later.`  
`</AlertBanner>`

---

### **Do’s and Don’ts**

**Do:**

* ✅ Use a single alert per page when possible.

* ✅ Clearly communicate the issue and the user’s next step.

* ✅ Include relevant context with each alert.

* ✅ Use alert styling to match the severity level (info, warning, error, success).

**Don't:**

* ❌ Use alerts as passive feedback for actions users initiate (use toasts instead).

* ❌ Display multiple alerts unnecessarily.

* ❌ Cover important UI elements with alerts.

* ❌ Use alerts for information that doesn’t require immediate attention.

---

### **Content Guidelines**

#### **Language**

* Use action-oriented, clear instructions.

* Avoid technical jargon where possible.

* Replace negative phrases with constructive alternatives.

  * ✅ “Please enter a valid postal code”

  * ❌ “The form contains errors”

#### **Tone**

* Be neutral, respectful, and non-blaming.

* Avoid alarmist language — guide users through resolution.

* Write as if speaking to the user, using conversational language.

#### **Content**

* Focus on resolution, not just the issue.

* Include only relevant details; keep alerts concise.

* Use expandable sections if deeper technical guidance is needed.

* Offer next steps or links to help users solve the issue.

---

### **Accessibility Guidelines**

* **Role:** Use `role="alert"` for error and warning types. For non-urgent messages, use `role="status"`.

* **Keyboard Navigation:** Ensure alerts are reachable and focusable if interactive.

* **Screen Reader Support:** Alert content should be announced immediately via ARIA.

* **Dismiss Button:** Ensure the close icon is labeled (e.g., `aria-label="Close alert"`).

* **Color Contrast:** Ensure text and background colors meet WCAG AA standards (4.5:1 minimum for normal text).

# **Metrics**

#### **What is Metrics?**

The Metrics component highlights important, high-level data points for users to understand performance at a glance. It is often used in dashboards, reports, and data summaries to provide quick insights with minimal interaction.

#### **When to use Metrics**

* To display summarized performance indicators (e.g., completion rates, visitor counts).

* In dashboards or overviews where quick scan-ability is critical.

* When comparing current values with previous periods via trend indicators.

#### **When not to use Metrics**

* For dense or complex data visualizations — consider tables or charts instead.

* When inline labels or small typography would hinder readability.

* If users need to interact with or manipulate the data — pair with filters or charts.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Primary Value | The main metric displayed (e.g., percentage or count). |
| Label | A short descriptor that clarifies what the value represents. |
| Trend Tag | Optional tag showing the metric’s change since the previous period. |
| Series Name | Optional label identifying the metric’s category (e.g., visitor segment). |
| Secondary Label | Optional descriptive sub-label (e.g., "Completed", "Out of 918 visitors"). |
| Loader | Optional ghost-style placeholder shown while the metric is loading. |
| Arrow Icon (legacy) | Optional arrow indicating positive or negative change direction. |

---

### **States and Variants**

#### **Loaded**

* **Purpose:** Displays full metric value, trend, and labels.

* **Example:** `67% Completed`, `+1.3%`, with series label.

* **Usage:** Shown once data is retrieved and ready.

#### **Loading**

* **Purpose:** Placeholder state using ghost-style blocks.

* **Example:** Grey rectangles in place of metric and labels.

* **Usage:** Used while data is being fetched or calculated.

#### **Sizes**

* **Extra Small:** Compact displays, such as within cards.

* **Small:** Common for embedded dashboards or sidebar use.

* **Medium (Default):** Ideal for summaries and overview sections.

#### **Alignment**

* **Left-aligned:** Text and values are left-justified; most common layout.

* **Center-aligned:** Values and text are centered for symmetrical layouts.

---

### **Interactive Properties**

* **Non-interactive:** Metrics are display-only by default.

* **Loading animation:** Loader animates between frames for prototyping.

* **Dynamic tag values:** Trend tags adapt based on metric direction and magnitude.

**Example (React JSX):**

jsx  
CopyEdit  
`<Metric`  
  `value="67%"`  
  `label="Completed"`  
  `seriesName="Series name"`  
  `trend="+1.3%"`  
  `alignment="left"`  
  `size="medium"`  
`/>`

---

### **Do’s and Don’ts**

**Do:**

* Use consistent alignment and sizing within a metrics group.

* Show trend tags for period-over-period comparison when meaningful.

* Use loaders to avoid layout shifts while loading.

* Provide secondary labels for additional context (e.g., “614 out of 918 visitors”).

**Don't:**

* Display metrics without labels — users need context for numbers.

* Use trend tags without clarifying what they refer to.

* Overcrowd a metrics block with unrelated data points.

* Rely only on color for conveying meaning — pair with labels or icons.

---

### **Content Guidelines**

* Keep metric labels concise and scannable (e.g., “Completed”, “Bounce Rate”).

* Use percentages or whole numbers based on clarity and relevance.

* Include a second-line label to clarify what the main value represents.

* Trend tags:

  * **Green**: Positive trend (e.g., \+1.3%)

  * **Red**: Negative trend (e.g., \-1.3%)

  * **Grey**: No change

  * **Outlined**: No data or undefined states

---

### **Accessibility Guidelines**

* **Text Labels:** Ensure all values and labels are readable by screen readers.

* **Loader State:** Use `aria-busy="true"` while loading.

* **Contrast:** Ensure text and trend tags meet minimum WCAG contrast standards.

* **Trend Indicators:** Use icons or text in addition to color to convey direction.

# **Modals**

**What is Modal?**

A Modal is a dialog overlay that interrupts the current workflow to capture user attention for focused tasks such as confirmations, form submissions, or alerts. It temporarily disables interaction with the background content until dismissed or completed.

#### **When to use Modal**

* To capture critical decisions (e.g., deletions, confirmations).

* To input or collect specific data (e.g., uploading a file, completing a short form).

* For alert settings or step-by-step guidance that needs full user attention.

#### **When not to use Modal**

* For long or complex flows — consider a full-page experience instead.

* For passive information — use inline messages, banners, or tooltips.

* To display non-blocking information — consider side panels or drawers.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Header | Includes a title summarizing the modal’s purpose. |
| Body | Contains the main content area — forms, messages, or component embeds. |
| Footer | Hosts action buttons like Cancel, Save, or Delete. |
| Overlay | A semi-transparent backdrop that prevents interaction with background UI. |
| Close Button | Optional button (usually in top-right) to dismiss the modal. |

---

### **States and Variants**

#### **Default**

* **Purpose:** Standard modal used for general tasks like form input.

* **Example:** "Share Dashboard", "Upload CSV".

* **Usage:** Use when no special styling is needed beyond the default container.

#### **Confirmation**

* **Purpose:** Modal used for verifying user intent before proceeding.

* **Example:** “Are you sure you want to save changes?”

* **Usage:** Use when user action requires deliberate acknowledgment.

#### **Destructive**

* **Purpose:** Modal for critical, irreversible actions.

* **Example:** "Delete this item permanently."

* **Usage:** Always use bold, colored action buttons (e.g., red for "Delete") to warn users.

---

### **Interactive Properties**

* **Open/Close Control:** Can be triggered via button, menu, or interaction.

* **Focus Trap:** Automatically retains keyboard focus inside the modal until closed.

* **Dismiss Options:** Via cancel button, close icon, or ESC key.

* **Scrollable Content:** Body section supports scroll when content exceeds viewport height.

* **Primary/Secondary Actions:** Buttons placed consistently in footer (primary on the right, secondary on the left in LTR layouts).

**Example (React JSX):**

jsx  
CopyEdit  
`<Modal title="Upload File" onClose={handleClose}>`  
  `<p>Please upload a CSV with the required format.</p>`  
  `<ModalFooter>`  
    `<Button variant="secondary" onClick={handleClose}>Cancel</Button>`  
    `<Button variant="primary" onClick={handleUpload}>Upload</Button>`  
  `</ModalFooter>`  
`</Modal>`

---

### **Do’s and Don’ts**

**Do:**

* Use clear, actionable titles (e.g., “Upload CSV”, “Delete Dashboard”).

* Keep content focused and concise.

* Prioritize the primary action with color and placement.

* Use descriptive button labels (e.g., “Yes, Delete” rather than just “Delete”).

**Don't:**

* Overload modals with too many form fields or steps.

* Use modals for non-critical alerts or guidance.

* Block interaction with unnecessary confirmations.

* Nest modals inside other modals (avoid stacking).

---

### **Content Guidelines**

* **Titles:** Begin with a strong verb (e.g., “Confirm Deletion”, “Share Dashboard”).

* **Body Copy:** Explain the purpose clearly; use short paragraphs or bullets for readability.

* **Button Labels:** Action-focused (e.g., “Cancel”, “Save”, “Upload”, “Yes, Delete”).

* **Error Messaging:** Display inline within the modal if applicable (avoid redirecting the user).

---

### **Accessibility Guidelines**

* **ARIA Roles:** Use `role="dialog"` and `aria-modal="true"` on the modal container.

* **Keyboard Navigation:**

  * Modal must trap focus inside until dismissed.

  * Allow closing with the `Esc` key.

  * Ensure focus returns to trigger element after modal closes.

* **Screen Reader Labels:** Use `aria-labelledby` for title, `aria-describedby` for body content.

* **Contrast:** Ensure overlay and modal elements meet minimum WCAG contrast ratios.

* **Focus Management:** Auto-focus the first interactive element inside the modal.

# **Dropdown**

#### **What is Dropdown?**

A Dropdown is a UI component that allows users to select one or multiple values from a list. It’s used to reduce visual clutter by hiding options until needed.

#### **When to use Dropdown**

* To allow users to choose from a list of discrete options.

* When the list is too long for radio buttons or checkboxes.

* To support contextual filters, status selection, or data source inputs.

#### **When not to use Dropdown**

* When all options should be visible at once — use checkboxes or radio buttons.

* For entering freeform text — use a text input or autocomplete field.

* For binary choices — use a toggle or switch instead.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Trigger Button | Opens the dropdown menu. Can be standard, text-based, or contextual. |
| Label | Optional text label above the dropdown. |
| Placeholder | Text shown in the trigger before selection is made. |
| Option List | The menu that displays selectable items. |
| Option Item | Each row in the dropdown with optional icon, tag, or status indicator. |
| Search Input | Optional input field to filter list items. |
| Helper/Error Text | Optional line of text for feedback or validation below the trigger. |

---

### **States and Variants**

#### **Triggers**

* **Standard Dropdown**

  * Includes label, placeholder, and optional error messaging.

  * Use for most form-based dropdowns.

* **Text Trigger**

  * Inline, minimal style dropdown. Often used in table headers or filters.

  * Supports icons and single-line styling.

* **Data Source Trigger**

  * Used for selecting external or system-connected data sources.

  * Often paired with backend logic and status indicators.

* **Chart Trigger**

  * Specifically used in chart contexts for toggling series or views.

#### **Presets**

* **Single Select**

  * Allows selection of one item.

  * Use for form fields, filters, and selection menus.

* **Multi Select**

  * Allows multiple selections.

  * Includes “Clear” and “Selected” tags.

  * Use when users need to apply multiple filters or criteria.

* **Status Options**

  * Uses visual dots to indicate a state or category.

  * Best for pipelines, task stages, or lifecycle indicators.

#### **Option Item States**

* **Selected**: Highlighted or marked with check/tick.

* **Disabled**: Dimmed, not interactive.

* **Locked/Restricted**: Includes icon lock or tooltip on hover.

* **With Tags or Icons**: Enhanced context using color dots, icons, or text cues.

---

### **Interactive Properties**

* **Keyboard Support**: Navigate via up/down arrows; `Enter` to select, `Esc` to close.

* **Searchable Dropdowns**: Input filter appears inside dropdown for fast scanning.

* **Clear Selection**: Clear icon or button to reset selection (especially in multi-select).

* **Accessibility Support**:

  * ARIA roles: `role="listbox"` for dropdown, `role="option"` for items.

  * Label association via `aria-labelledby`.

**Example (React JSX):**

jsx  
CopyEdit  
`<Dropdown`  
  `label="Status"`  
  `placeholder="Select status"`  
  `options={statusOptions}`  
  `multiSelect`  
  `searchable`  
`/>`

---

### **Do’s and Don’ts**

**Do:**

* Use clear labels and placeholders for context.

* Match trigger styles to the use case (e.g., text triggers for table views).

* Use tags, icons, or color dots for option differentiation when helpful.

* Validate selections and show errors inline when needed.

**Don't:**

* Overload dropdowns with unrelated or excessive options.

* Use dropdowns for inputs that require frequent typing — use autocomplete instead.

* Hide critical form validation feedback beneath the dropdown.

* Disable search for long option lists.

---

### **Content Guidelines**

* **Trigger Label**: Concise and clear (e.g., “Select Source”, “Filter by Status”).

* **Placeholder**: Should indicate expected input (e.g., “Choose an option”).

* **Options**: Use sentence case, avoid abbreviations, and keep text brief.

* **Helper Text**: Use to clarify optionality or errors (e.g., “Required field”, “Max 3 selections”).

---

### **Accessibility Guidelines**

* **ARIA Roles**:

  * `role="button"` for trigger.

  * `role="listbox"` for the dropdown container.

  * `role="option"` for each item.

  * Add `aria-selected`, `aria-disabled`, `aria-multiselectable` as needed.

* **Keyboard Navigation**: Full support for navigation, selection, and dismissal.

* **Screen Reader Support**: Announce selection and dropdown state changes.

* **Focus Management**: Return focus to trigger after selection or close.

# **Toast notification**

#### **What is Toast Notification?**

A Toast Notification is a brief, non-blocking message that appears temporarily to inform users of a system occurrence. Typically triggered by a user action, toast notifications help confirm actions, alert users to issues, or provide feedback without interrupting workflow.

#### **When to use Toast Notification**

* To confirm user actions (e.g., “Settings saved”).

* To notify users of background events (e.g., “File uploaded”).

* To display transient system information that doesn’t require user input.

#### **When not to use Toast Notification**

* For critical, persistent system alerts — use alert banners instead.

* For long-form content or guidance — use modals or side panels.

* When the message must remain visible until user interaction — use inline or persistent messaging.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Icon | Indicates the type of notification (success, warning, error, info). |
| Heading | Short, bold message that summarizes the toast purpose. |
| Description | Optional supporting text providing additional detail. |
| Dismiss Button | Allows users to manually close the toast. |
| Container | Card-like structure, often with subtle shadow and rounded corners. |

---

### **States and Variants**

#### **Success**

* **Purpose:** Confirms that an action was successfully completed.

* **Example:** “Your profile was updated.”

* **Icon:** Green checkmark.

* **Usage:** Use after saving, uploading, or completing actions.

#### **Warning**

* **Purpose:** Informs users of a potential issue or caution.

* **Example:** “Upload succeeded, but some rows were skipped.”

* **Icon:** Yellow exclamation mark.

* **Usage:** Use when partial success or risk exists.

#### **Error**

* **Purpose:** Alerts the user that an error occurred.

* **Example:** “Failed to save changes.”

* **Icon:** Red error icon.

* **Usage:** Use for failed actions that need user awareness.

#### **Info**

* **Purpose:** Provides neutral or contextual information.

* **Example:** “New features are available.”

* **Icon:** Blue info icon.

* **Usage:** Use for announcements or updates that don’t require action.

---

### **Interactive Properties**

* **Auto-dismiss:** Typically disappears after 3–5 seconds.

* **Manual Dismiss:** Includes a close (“×”) button to dismiss early.

* **Stacking:** Multiple toasts may stack vertically; limit to 3–5 visible at once.

* **Animation:** Fade-in and fade-out transitions for smooth appearance.

**Example (React JSX):**

jsx  
CopyEdit  
`<Toast type="success" heading="Profile updated" description="Your changes have been saved." />`

---

### **Do’s and Don’ts**

**Do:**

* Use concise, action-focused headings.

* Include only necessary descriptions for context.

* Keep toast visible long enough to be read (3–5 seconds recommended).

* Use icons consistently across variants.

**Don't:**

* Use toasts for messages that require user action.

* Display too many toasts at once — avoid overwhelming the user.

* Leave toast messages without an accessible alternative.

* Use toast for critical system failures — those require persistent alerts.

---

### **Content Guidelines**

* **Heading:** Use plain language and strong verbs (e.g., “File Uploaded”).

* **Description:** Optional; keep it short and scannable.

* **Tone:** Friendly, neutral, and informative.

* **Capitalization:** Use sentence or title case depending on platform norms.

---

### **Accessibility Guidelines**

* **ARIA Attributes:** Use `role="status"` or `role="alert"` depending on urgency.

* **Live Region:** Ensure screen readers announce toast content (`aria-live="polite"` or `assertive`).

* **Dismiss Button:** Should be keyboard-accessible and labeled (e.g., `aria-label="Close"`).

* **Focus Handling:** Do not steal focus; toasts should not interrupt workflow.

* **Contrast:** Ensure background and text contrast meets WCAG AA standards.

# **Progress Indicator**

#### **What are Progress Indicators?**

Progress Indicators visually communicate the status of ongoing processes such as loading, uploading, or completing a task. They help set expectations and provide users with real-time feedback.

#### **When to use Progress Indicators**

* When an action takes more than a brief moment (e.g., file upload, data processing).

* To display real-time completion status (e.g., report generation, metric loading).

* As part of dashboards or status UIs where data is being incrementally revealed.

#### **When not to use Progress Indicators**

* For instant operations — use a loading spinner instead.

* When the task duration is unknown and can’t be tracked — use indeterminate loaders.

* As the sole feedback mechanism for critical operations — pair with supporting text or toast.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Track (Background) | The container area that represents the total progress path. |
| Indicator (Fill) | The animated or filled portion indicating the current progress value. |
| Label (Optional) | Used to show numeric progress (e.g., “67%”) or descriptive status text. |
| Value | The actual percent or number determining how much of the indicator is filled. |

---

### **States and Variants**

#### **Progress Bar**

* **Purpose:** Displays horizontal progress.

* **Example:** Upload progress bar.

* **Usage:** Ideal for linear tasks or processes.

**Properties:**

* Value from 0–100%

* Horizontal layout

* Can be embedded in modals, cards, or inline UIs

**Figma editing tip:**  
 To adjust the fill, edit the “Value” property or manipulate the “Spacing between items” if using auto-layout.

---

#### **Progress Circle**

* **Purpose:** Displays radial progress, often for metric visualizations.

* **Example:** Dashboard metrics, guide completion, report status.

* **Usage:** Best for compact, visual indicators of completion.

**Variants:**

* Sizes: Extra Small to Large (scalable as needed).

* Color: Customizable via design tokens or pre-set styles.

* Format: With or without inner label/percentage.

**Usage Guidelines:**

* Use in data widgets or metric tiles.

* Pair with numeric values or labels for context.

* Can indicate percentage complete or status state visually.

---

### **Interactive Properties**

* **Value Updates:** Animate fill as values increase or decrease.

* **Color Coding:** Use green for success, red for critical errors, neutral for in-progress.

* **Text Display:** Optionally show percent or status label inside or beside the indicator.

* **Animation:** Smooth transitions are recommended for progressive updates.

**Example (React JSX):**

jsx  
CopyEdit  
`<ProgressBar value={62} />`  
`<ProgressCircle value={78} size="medium" showLabel />`

---

### **Do’s and Don’ts**

**Do:**

* Use progress indicators for tasks longer than 500ms.

* Match progress indicator type to layout context (bar for linear, circle for compact).

* Keep color and size consistent within dashboards or related components.

* Use animation for smoother transitions, especially with real-time data.

**Don't:**

* Mix multiple styles within a single view unnecessarily.

* Display a circular progress indicator without context or supporting label.

* Use progress bars for tasks without measurable steps.

---

### **Content Guidelines**

* **Labels:** Optional but recommended — use percentages or meaningful status (e.g., “Uploading…”).

* **Tone:** Informative and neutral (“In progress”, “Completed”, “67%”).

* **Placement:** Position near the relevant action or object being tracked.

---

### **Accessibility Guidelines**

* **ARIA Attributes:**

  * `role="progressbar"` is required.

  * Use `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` to communicate progress.

* **Labeling:**

  * Use `aria-label` or `aria-labelledby` to describe what the progress is for.

* **Text Alternatives:** Ensure screen readers can access both the numeric and descriptive info.

* **Contrast:** Ensure the progress fill has adequate contrast against its background.

# **Radio Group** 

#### **What is Radio Group?**

A Radio Group is a form control that presents a list of mutually exclusive options, allowing the user to select only one at a time. It is ideal for simple decision-making tasks where a single answer is required.

#### **When to use Radio Group**

* When the selection is part of a **form or settings panel**.

* When the options are **text-based** and require minimal styling.

* When clarity and **form semantics** (e.g., with a `fieldset`) are important.

* When the group may need **helper text**, validation, or detailed descriptions.

#### **When not to use Radio Group**

* When the selection needs to appear as **interactive buttons or toggles** — use a Radio Button Group.

* When space is limited and a dropdown would be more efficient.

* When an option might allow **multiple selections** — use checkboxes.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Radio Button | A circular control that indicates one selected option from the group. |
| Label Text | Text label associated with each radio option. |
| Group Label | Optional heading describing the entire radio group context. |
| Help/Error Text | Optional guidance or error messaging below the group. |

---

### **States and Variants**

#### **Default**

* **Purpose:** Neutral, unselected radio option.

* **Usage:** Displayed before user interaction.

#### **Selected**

* **Purpose:** Indicates the chosen option.

* **Usage:** Only one radio in the group may be selected at a time.

#### **Disabled**

* **Purpose:** Option is non-interactive.

* **Usage:** Use when an option is not currently available or valid.

#### **Focused**

* **Purpose:** Shows keyboard or screen reader focus.

* **Usage:** Activated via tab key; indicated by an outline around the radio and label.

---

### **Interactive Properties**

* **Keyboard Navigation:**

  * Use `Tab` to move between groups.

  * Use `ArrowUp` / `ArrowDown` or `ArrowLeft` / `ArrowRight` to navigate options.

  * Use `Enter` or `Space` to select.

* **Selection Behavior:** Only one radio can be selected at a time within the group.

* **Focus State:** Shows a visible outline on the selected or focused option, including label association.

**Example (React JSX):**

jsx  
CopyEdit  
`<RadioGroup label="Select an option">`  
  `<Radio value="1">Option 1</Radio>`  
  `<Radio value="2">Option 2</Radio>`  
  `<Radio value="3">Option 3</Radio>`  
`</RadioGroup>`

---

### **Do’s and Don’ts**

**Do:**

* Group at least two options together for a meaningful choice.

* Stack radios vertically or horizontally with consistent spacing (e.g., 16px).

* Ensure clear, descriptive labels for each option.

* Use a visible label or legend for context.

**Don't:**

* Use a single radio button by itself — it defeats the purpose of exclusive choice.

* Mix disabled and active radios without clearly communicating why.

* Overuse in dense UIs; consider dropdowns or selects for compactness.

---

### **Content Guidelines**

* **Label Text:** Short, descriptive, and mutually exclusive (e.g., “Line”, “Bar”, “Pie”).

* **Group Label (Legend):** Optional but helpful for context (e.g., “Chart Type”).

* **Tone:** Neutral and task-focused.

* **Capitalization:** Sentence or title case depending on system rules.

---

### **Accessibility Guidelines**

* **Group Label:** Use `<fieldset>` and `<legend>` or associate `aria-labelledby` to a group label.

* **ARIA Roles:**

  * Group: `role="radiogroup"`

  * Options: `role="radio"`

  * Use `aria-checked` and `aria-disabled` appropriately.

* **Keyboard Support:** Full navigation and selection support via keyboard.

* **Focus Ring:** Ensure visible indication when navigating with keyboard.

* **Screen Reader Support:** Ensure group and option labels are read correctly with current selection status.

# **Radio Button Group**

#### **What is Radio Button Group?**

A Radio Button Group is a set of visually styled buttons that function like radio buttons. Only one button in the group can be selected at a time, making them ideal for visually distinct single-choice actions.

#### **When to use Radio Button Group**

* When choices represent **modes, views, or tools** (e.g., Grid vs. List).

* When selection needs to be **highly visible and easy to toggle**.

* When aligning buttons **horizontally** in a toolbar, filter panel, or header.

* When **icons** or **compact toggle styles** are required.

#### **When not to use Radio Button Group**

* For **form-heavy UIs** requiring helper text or complex validation.

* When options benefit from being stacked vertically with **accessible form labeling**.

* When you need to support **descriptive or multiline labels** — use Radio Group instead.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Group Wrapper | Container that manages layout, state, and interaction across all buttons. |
| Button | Represents a single selectable option in the group. |
| Label | Text (and optionally, icon) indicating the purpose of each button. |
| State Styling | Visual treatment varies by interaction state (hover, selected, focus, etc.). |

---

### **States and Variants**

#### **States**

| State | Description |
| ----- | ----- |
| Default | Unselected and idle. |
| Hover | Visual feedback on hover. |
| Selected | Active/selected button in the group. |
| Focused | Focus ring shown on keyboard navigation. |
| Disabled | Button is non-interactive and styled accordingly. |

#### **Sizes**

* **Regular**: Default size used in most UIs.

* **Small**: Compact version for tight layouts (e.g., sidebars).

* **Large**: Emphasized version for high-visibility toggles.

#### **Placement**

* **Left**, **Middle**, **End**: Different visual edge treatments (e.g., rounded corners) depending on button position in the group.

---

### **Interactive Properties**

* **Keyboard Navigation**:

  * `Tab` to enter group.

  * `ArrowLeft` / `ArrowRight` to cycle.

  * `Enter` or `Space` to select.

* **Single Selection**: Only one button may be selected at a time.

* **Focusable States**: Includes clear outline for accessibility.

**Example (React JSX):**

jsx  
CopyEdit  
`<RadioButtonGroup label="View">`  
  `<RadioButton value="table">Table</RadioButton>`  
  `<RadioButton value="chart">Chart</RadioButton>`  
`</RadioButtonGroup>`

---

### **Do’s and Don’ts**

**Do:**

* Use icons for visual reinforcement when space allows.

* Limit button group options to 5 or fewer for clarity.

* Ensure size and spacing are consistent within each group.

* Use different states (hover, focus, selected) to reinforce interaction affordances.

**Don't:**

* Stack too many button groups vertically without spacing.

* Use for inputs that allow multiple selections.

* Make buttons overly small — they must remain clickable and legible.

---

### **Content Guidelines**

* **Label Text**: Keep short and descriptive (e.g., “Grid”, “List”, “All”).

* **Icons (optional)**: Only use if they clearly reinforce the option’s meaning.

* **Capitalization**: Use title case (e.g., “Option One”) or follow system standards.

* **Tooltip (optional)**: Use for icon-only buttons to ensure accessibility.

---

### **Accessibility Guidelines**

* **ARIA Roles**:

  * `role="radiogroup"` for the container.

  * `role="radio"` for each button.

  * Use `aria-checked` to indicate selected state.

* **Keyboard Navigation**: Fully navigable with keyboard (tab, arrow keys).

* **Screen Reader Support**: Each button should include accessible labels.

* **Focus Ring**: Provide a visible outline on focused buttons for keyboard users.

* **Contrast**: Ensure selected and hover states meet WCAG color contrast requirements.

# **Table**

#### **What is Table?**

A Table is a data presentation component that arranges content into rows and columns, allowing users to scan, compare, and interact with structured data. Tables support sorting, filtering, pagination, and cell-level actions for efficiency.

#### **When to use Table**

* When displaying large datasets in a structured, readable format.

* To compare multiple entities across consistent attributes.

* For dashboards, reports, feedback queues, or analytics summaries.

#### **When not to use Table**

* For simple lists or static data — use a List or Card layout.

* When the structure isn’t tabular — use grids or repeaters instead.

* For mobile-dense UIs without room for horizontal scrolling — use condensed views or stacked lists.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Column Header | Contains the label and optional controls (sort, show/hide, checkbox, etc.). |
| Row | A horizontal strip of related cells; each row represents a unique data entry. |
| Table Cell | A single unit of data, with multiple visual/interactive formats. |
| Table Footer (optional) | Includes pagination, filters, or metadata. |
| Table Element Header | Top bar that summarizes view or enables breakdown toggling and filters. |

---

### **States and Variants**

#### **Table Variants**

* **Static Table**: Fixed data set with visible headers.

* **Scrolling Table**: Enables horizontal scrolling for many columns.

* **Paginated Table**: Used when dataset is too large for single-page view.

#### **Table Row States**

* **Hover**: Reveals row-level actions (e.g., edit, delete).

* **Expanded**: Shows additional nested content.

* **Selected**: Row is actively selected (via checkbox or action).

#### **Table Cell Types**

| Type | Description |
| ----- | ----- |
| Text | Plain text value |
| Text (Numeric) | Right-aligned numeric content |
| Text \+ Icon | Combines icon and text |
| Text (Link) | Hyperlinked label |
| Checkbox / Checkbox \+ Label | Supports selection per row or inline interaction |
| Toggle | Inline on/off switch |
| Inline Editing | Editable cell (e.g., click to edit number or label) |
| Dropdown / Multiselect | Selectable menu embedded in the cell |
| Chart: Percentage | Inline progress or fill bar |
| Chart: Engagement | Inline bar chart for comparisons |
| Color Box | Visual color swatch (e.g., status, category) |
| Custom | Any compound or interactive cell (e.g., “Swap Instances”) |

---

### **Interactive Properties**

* **Sortable Headers**: Users can sort ascending/descending by column.

* **Expandable Rows**: Show/hide nested information.

* **Inline Actions**: Hover reveals icons (edit, delete, link).

* **Resizable/Hideable Columns**: Custom column management.

* **Inline Editing**: Direct updates within cells (e.g., status, value).

* **Selectable Rows**: Via checkboxes for bulk actions.

* **Pagination Controls**: Bottom of table with items-per-page and page nav.

* **Scrolling**: Horizontally scrolls with fixed headers.

---

### **Do’s and Don’ts**

**Do:**

* Use column headers with clear, concise labels.

* Support sorting and filtering for large datasets.

* Provide pagination when data exceeds a manageable size.

* Use consistent cell formatting (e.g., alignment, padding).

* Include meaningful empty states if no data is available.

**Don't:**

* Overload tables with unrelated actions or inputs.

* Use tables for unstructured content.

* Display too many columns without scroll or grouping.

* Show all data at once without pagination or lazy loading.

---

### **Content Guidelines**

* **Headers**: Short, title case, no punctuation (e.g., “Visitor”, “Status”).

* **Cells**: Keep text scannable (single line where possible).

* **Links**: Label links clearly and keep them distinguishable from static text.

* **Actions**: Use icons with tooltips for clarity when no label is provided.

* **Empty States**: Indicate when data is not available with a placeholder (“—”).

---

### **Accessibility Guidelines**

* **ARIA Roles**:

  * Table: `role="table"`

  * Header: `role="columnheader"`

  * Row: `role="row"`

  * Cell: `role="cell"`

* **Keyboard Navigation**:

  * `Tab` through interactive elements (e.g., links, inputs, dropdowns).

  * Use arrow keys for table navigation if applicable.

* **Focus States**: Ensure focus visibility for row/column interactions.

* **Screen Reader Support**: Use `aria-label` or visually hidden labels to describe context.

* **Contrast**: Ensure sufficient contrast for all text, borders, and icons.

---

### **Table Subcomponents**

#### **Table Cell**

* Supports many formats including icon, chart, link, toggle, dropdown, inline edit.

* Modular: can mix types per column.

* Shows hover and selection actions inline.

#### **Table Column Header**

* Supports: sort, show/hide, select all, collapse, favorite, and custom headers.

* Can be master control for entire table view (checkbox, visibility, actions).

#### **Table Elements (Header)**

* Master: Full-featured, multi-dimension selector (e.g., filters, groupings).

* Simple: Label with basic control (e.g., "Breakdown (6)").

* With Breakdown: Summarized grouping by type or dimension.

#### **Ready Columns**

* Preconfigured visual and interactive elements:

  * Visibility icon

  * Checkbox

  * Expand/collapse

  * Tag color

  * App name

  * Metric/number fields

# **Tabs**

#### **What is Tabs?**

Tabs are a navigation component used to separate content into distinct views or logical sections. They allow users to quickly switch between related content without leaving the current page.

#### **When to use Tabs**

* When content is closely related but too much to display all at once.

* When users need to switch contexts (e.g., between settings, sections, or data types).

* When grouping related panels or dashboards in a compact area.

* When content switching does **not** require a page refresh.

#### **When not to use Tabs**

* When content is unrelated — consider separate pages or views.

* For more than 5–7 options — use a dropdown or segmented navigation.

* When the content in tabs is dependent on each other — use accordion or inline sections.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Tab List | Container that holds the tab items. |
| Tab Item | The clickable label that switches views (can include icons or badges). |
| Active Indicator | A visual underline or highlight on the active tab. |
| Tab Panel | The content area that displays based on the selected tab. |
| Overflow Behavior | Handles cases when tabs exceed the available space (e.g., scroll, collapse). |

---

### **States and Variants**

#### **Variants**

* **Horizontal Tabs**

  * Default layout.

  * Common in headers, dashboards, settings pages.

  * Recommended for up to 5–7 tabs.

* **Vertical Tabs**

  * Tabs stack vertically on the left.

  * Suitable for profile, admin, or multi-step settings UIs.

  * Often paired with side navigation.

* **Card Tabs**

  * Tabs embedded within cards or panels.

  * Often used in dashboards, metrics widgets, or secondary UI blocks.

#### **States**

* **Default**: Unselected, clickable tab.

* **Active**: Currently selected and highlighted tab.

* **Hover**: Indicates interactivity.

* **Disabled**: Non-clickable, visually muted tab.

---

### **Interactive Properties**

* **Keyboard Navigation**:

  * Use `Tab` to enter the tab group.

  * Use `ArrowLeft` / `ArrowRight` (or `ArrowUp` / `ArrowDown` for vertical) to navigate tabs.

  * Use `Enter` or `Space` to activate a tab.

* **Dynamic Content Rendering**:

  * Only renders the active tab panel content for performance.

* **Responsive Behavior**:

  * May collapse or scroll tabs on small screens.

* **Badging**:

  * Tabs can include notification dots or counts to indicate status changes.

**Example (React JSX):**

jsx  
CopyEdit  
`<Tabs defaultValue="overview">`  
  `<TabList>`  
    `<Tab value="overview">Overview</Tab>`  
    `<Tab value="settings">Settings</Tab>`  
    `<Tab value="experiments">Experiments</Tab>`  
  `</TabList>`  
  `<TabPanel value="overview">...</TabPanel>`  
  `<TabPanel value="settings">...</TabPanel>`  
  `<TabPanel value="experiments">...</TabPanel>`  
`</Tabs>`

---

### **Do’s and Don’ts**

**Do:**

* Limit tabs to 5–7 max for readability.

* Use meaningful, clear labels (e.g., “Overview”, “Guide Alerts”).

* Match tab placement to UI context (horizontal for primary, vertical for configuration).

* Persist the selected tab state when possible.

**Don't:**

* Use tabs as primary navigation across unrelated pages.

* Nest multiple tab sets within the same view.

* Use vague or duplicated tab names.

* Hide critical functionality behind unselected tabs.

---

### **Content Guidelines**

* **Tab Labels**: Use concise and meaningful text.

  * ✅ Good: “Overview”, “Details”, “Settings”

  * ❌ Bad: “Tab 1”, “More”, “Misc”

* **Capitalization**: Title case is preferred (e.g., “Guide Alerts”).

* **Icons**: Optional, useful for reinforcing meaning or saving space.

* **Badges/Counts**: Use to surface activity or notification relevance.

---

### **Accessibility Guidelines**

* **ARIA Roles**:

  * Use `role="tablist"` for container.

  * Use `role="tab"` for each tab.

  * Use `role="tabpanel"` for each content section.

* **Focus Management**:

  * Focus should move with arrow keys and activate with `Enter` or `Space`.

* **ARIA Attributes**:

  * Tabs should include `aria-selected`, `aria-controls`, and `aria-labelledby`.

* **Screen Reader Support**:

  * Tabs should clearly indicate which is active and what content is shown.

* **Contrast & Indicators**:

  * Ensure the active tab is visually distinguishable and meets WCAG AA contrast ratios.

# **Time picker**

#### **What is Time Picker?**

The Time Picker component allows users to select a specific time value using a dropdown list. It is typically used in scheduling, filtering, or time-sensitive workflows, providing an easy, accessible way to input time data.

#### **When to use Time Picker**

* When users need to select a time (e.g., for scheduling events, filtering reports, setting reminders).

* When time values follow a consistent interval (e.g., every 15 minutes).

* When visual dropdown selection is more user-friendly than typing.

#### **When not to use Time Picker**

* When full date \+ time selection is needed — use a **DateTime Picker** instead.

* For freeform or exact timestamps — use a **text input with validation**.

* If time is an optional field or not critical to the user journey.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Trigger Button | Opens the dropdown containing available time values. |
| Label (Optional) | Describes the field, e.g., “Start Time” or “Select Time.” |
| Dropdown List | Contains selectable time options formatted according to intervals. |
| Time Option Item | Individual time values in the dropdown (e.g., 12:00am, 12:15am, etc.). |
| Placeholder Text | Displayed in the trigger when no value is selected (e.g., “Select Time”). |

---

### **States and Variants**

#### **Default**

* **Purpose:** Unselected and ready for user interaction.

* **Usage:** Standard appearance before a time is selected.

#### **Selected**

* **Purpose:** Displays the selected time value.

* **Usage:** Replaces placeholder with the chosen option.

#### **Disabled**

* **Purpose:** Indicates the field is unavailable for interaction.

* **Usage:** Use when the time input should be conditionally locked.

#### **Error**

* **Purpose:** Highlights validation issues or incorrect entries.

* **Usage:** Paired with error messaging and red outline or icon.

---

### **Interactive Properties**

* **Dropdown Trigger:**

  * Opens a menu of preset time options.

  * Includes a visual indicator (chevron) for affordance.

* **Dropdown List:**

  * Options spaced vertically and scrollable if content exceeds height.

  * Recommended to use 15–30 minute intervals.

* **Keyboard Support:**

  * `Tab` to focus the trigger.

  * `Enter` or `Space` to open dropdown.

  * `Arrow` keys to navigate options.

  * `Enter` to select.

**Example (React JSX):**

jsx  
CopyEdit  
`<TimePicker`  
  `label="Select Time"`  
  `placeholder="Select Time"`  
  `options={[`  
    `"12:00am", "12:15am", "12:30am", "12:45am",`  
    `"1:00am", "1:15am", "1:30am", "1:45am",`  
    `"2:00am", "2:15am"`  
  `]}`  
`/>`

---

### **Do’s and Don’ts**

**Do:**

* Use consistent time formatting (e.g., 12-hour with “am/pm” or 24-hour, not both).

* Keep options within a scrollable container if the list is long.

* Use dropdown presets where available to maintain consistency.

**Don't:**

* Display too many time intervals — avoid overwhelming users.

* Modify preset structure unnecessarily — extend from the standard trigger if needed.

* Use placeholder-only dropdowns without labels in form contexts.

---

### **Content Guidelines**

* **Label**: Clearly indicate purpose (e.g., “Start Time”, “Reminder Time”).

* **Placeholder**: Guide user action (e.g., “Select Time”).

* **Time Format**: Stick to 12-hour with “am/pm” or 24-hour based on locale/system standard.

* **Descriptions/Helper Text** (if needed): Use for constraints (e.g., “Must be between 8:00am–5:00pm”).

---

### **Accessibility Guidelines**

* **ARIA Support:**

  * Use `aria-haspopup="listbox"` on the trigger.

  * Apply `role="listbox"` and `role="option"` to dropdown elements.

  * Use `aria-expanded`, `aria-activedescendant`, and `aria-controls` where applicable.

* **Keyboard Navigation**:

  * Fully operable with keyboard and screen reader tools.

  * Focus should move into the dropdown and return to trigger on close.

* **Contrast and Focus**:

  * Ensure visible focus states.

  * All text should meet WCAG AA minimum contrast (4.5:1).

# **Toggle**

#### **What is Toggle?**

A Toggle is a two-state switch used to control a single binary option, such as turning a setting on or off. It provides a quick, accessible way for users to change system states.

#### **When to use Toggle**

* To control a **binary state**, such as enable/disable, show/hide, on/off.

* When immediate feedback is expected (e.g., “Email notifications ON/OFF”).

* For settings that are applied instantly without the need to submit a form.

#### **When not to use Toggle**

* When the choice is not binary — use checkboxes or radio buttons.

* When user confirmation is required before applying the change.

* For one-time actions — use buttons instead.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Track | The background of the toggle, indicating ON/OFF visually. |
| Thumb (Handle) | The circular element that moves to reflect the current state. |
| Icon (optional) | Can appear inside the thumb to reinforce state (e.g., check). |

---

### **States and Variants**

#### **Active**

* **Toggle On**

  * **Purpose:** Indicates the feature is currently enabled.

  * **Visual:** Green track, thumb on the right, optional check icon.

* **Toggle Off**

  * **Purpose:** Indicates the feature is currently disabled.

  * **Visual:** Gray track, thumb on the left.

#### **Disabled**

* **Toggle On (Disabled)**

  * **Purpose:** ON state but not interactive.

  * **Visual:** Muted colors to indicate inactive control.

* **Toggle Off (Disabled)**

  * **Purpose:** OFF state but not interactive.

  * **Visual:** Muted appearance, thumb locked in left position.

---

### **Interactive Properties**

* **Click/Tap**: Changes the state from on to off or vice versa.

* **Keyboard Support**:

  * `Tab` to focus

  * `Space` to toggle state

* **Visual Feedback**: Smooth animated transition between states.

* **Accessible Labeling**: Should be paired with visible or aria-based labels for clarity.

**Example (React JSX):**

jsx  
CopyEdit  
`<Toggle`  
  `id="notifications"`  
  `label="Enable notifications"`  
  `checked={isEnabled}`  
  `onChange={(val) => setEnabled(val)}`  
`/>`

---

### **Do’s and Don’ts**

**Do:**

* Use toggles for persistent settings that take effect immediately.

* Pair with a clear label describing what is being toggled.

* Ensure accessible names are provided (visible or via `aria-label`).

**Don't:**

* Use toggles for actions that require saving — use a form submission instead.

* Display toggles without labeling what the ON and OFF states mean.

* Rely solely on color to communicate the toggle’s state.

---

### **Content Guidelines**

* **Label**: Clear and action-oriented, describing what the toggle controls.

  * ✅ “Enable notifications”

  * ❌ “On/Off”

* **Tone**: Neutral, user-focused.

* **Capitalization**: Sentence case for toggle labels (e.g., “Enable dark mode”).

---

### **Accessibility Guidelines**

* **ARIA Roles and Attributes**:

  * Use `role="switch"` and `aria-checked` to communicate state.

  * Use `aria-label` or `aria-labelledby` to describe what the toggle controls.

* **Keyboard Navigation**: Fully operable with `Tab` and `Space`.

* **Screen Reader Support**: Should announce the label and whether the switch is on or off.

* **Contrast Requirements**: Ensure toggle elements meet WCAG AA for all states.

# **Tooltip**

#### **What is Tooltip?**

A Tooltip is a compact UI component used to provide additional information when users hover or focus on an element. Tooltips enhance understanding without cluttering the interface, often appearing in data visualizations, form controls, or icon-based UIs.

#### **When to use Tooltip**

* To explain icon meanings or button purposes.

* To reveal precise data values on hover (e.g., charts).

* To surface supporting or metadata details without taking up layout space.

* To clarify functionality of UI elements, filters, or toggles.

#### **When not to use Tooltip**

* For critical or always-visible information — use inline content instead.

* For complex instructions or multiple actions — use a Popover.

* When relying on hover-only behavior on mobile — consider click/focus-based alternatives.

---

### **Component Anatomy**

| Element | Description |
| ----- | ----- |
| Trigger Element | The UI element that, when hovered or focused, reveals the tooltip. |
| Tooltip Container | The box containing the tooltip content. |
| Arrow (optional) | Visual connector pointing to the trigger. |
| Content Area | The information displayed inside — usually text or values. |

---

### **States and Variants**

#### **Default (Regular) Tooltip**

* **Purpose**: General-purpose tooltip for labels, data, or help text.

* **Size**: Medium-width content box, multiline supported.

* **Use Cases**:

  * Hovering over a chart value.

  * Label explanation on an input.

  * Clarifying button actions or dropdown items.

#### **Mini Tooltip**

* **Purpose**: Very short, space-efficient tooltip for dense UIs.

* **Size**: Smallest width, typically single-line.

* **Visual**: Subtle styling with no arrow or padding.

* **Use Cases**:

  * Hovering over an icon or tag in a table.

  * Tooltip label for a disabled toggle or radio.

  * Explaining color dots or compact symbols.

##### **Mini vs Regular Rules**

| Guideline | Use Mini Tooltip | Use Regular Tooltip |
| ----- | ----- | ----- |
| Length of content | 1–2 words or short phrases | Full sentence, multiline, or data detail |
| Trigger area | Small icons, table cells | Buttons, charts, input fields |
| Context sensitivity | Subtle or passive clarification | Contextual guidance or user-facing detail |
| Layout density | High-density layouts (tables, chips) | Standard layouts or large containers |
| Content hierarchy | Non-critical or optional | Important but not always visible |

---

### **Interactive Properties**

* **Trigger types**:

  * `hover` (mouse)

  * `focus` (keyboard)

  * `click` (for extended popovers)

* **Auto-positioning**: Adjusts based on available screen space.

* **Dismissal**: Hides on blur, mouseleave, or ESC key (for accessible tooltips).

**Example (Regular Tooltip JSX):**

jsx  
CopyEdit  
`<Tooltip content="Click to upload your file.">`  
  `<Button icon="upload" />`  
`</Tooltip>`

**Example (Mini Tooltip JSX):**

jsx  
CopyEdit  
`<Tooltip content="Draft" variant="mini">`  
  `<Badge status="warning" />`  
`</Tooltip>`

---

### **Do’s and Don’ts**

**Do:**

* Use short, scannable language.

* Ensure tooltip is accessible with both mouse and keyboard.

* Choose mini tooltips for icons or tightly packed UIs.

* Keep tooltips positioned close to their trigger.

**Don't:**

* Rely on color alone in the tooltip (e.g., “Red means error”).

* Include links, buttons, or actions — use a popover instead.

* Nest tooltips or delay their appearance too long.

* Display tooltips for non-interactive elements unless helpful.

---

### **Content Guidelines**

* **Tone**: Informative and helpful, not instructional.

* **Length**:

  * **Mini**: 1–2 words max.

  * **Regular**: Short sentence, avoid long paragraphs.

* **Style**: Sentence case, no punctuation unless a full sentence.

* **Units/Context**: Include units for numbers or clarify values (e.g., “67.8%” not just “67.8”).

---

### **Accessibility Guidelines**

* **ARIA Roles**:

  * Tooltip container: `role="tooltip"`

  * Use `aria-describedby` to link tooltip to trigger.

* **Focus Behavior**:

  * Tooltip should appear on `focus` as well as `hover`.

  * Trigger element must be keyboard-focusable.

* **Screen Readers**:

  * Content must be discoverable via assistive tech.

  * Avoid using tooltip-only content for required input instructions.

