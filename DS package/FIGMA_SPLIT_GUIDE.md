# Figma File Split Guide

Your large 41MB `figma-file.json` has been successfully split into smaller, manageable pieces for easier reading and analysis.

## 📁 File Structure Overview

### Main Split Files (`figma_split/`)
The original JSON was split into these main sections:

| File | Size | Description |
|------|------|-------------|
| `figma_components.json` | 0.32 MB | All component definitions and properties |
| `figma_componentSets.json` | 0.05 MB | Component set definitions (variants, etc.) |
| `figma_styles.json` | 0.05 MB | Design system styles (colors, typography, effects) |
| `figma_document.json` | 153.31 MB | Full document structure (very large) |
| `metadata.json` | <1 KB | File metadata and split information |

### Individual Pages (`figma_pages/`)
The large document section was further split into 56 individual page files:

#### 🧬 Components
- **Buttons** (8.50 MB) - Button component variants
- **Breadcrumbs** (12.61 MB) - Navigation breadcrumb components  
- **Input Text** (2.23 MB) - Text input components
- **Multiselect Dropdowns** (6.06 MB) - Dropdown component variants
- **Date Picker** (8.71 MB) - Date selection components
- **Time Picker** (25.35 MB) - Time selection components
- And many more form elements...

#### 📟 Messaging
- **Alert Banners** (2.79 MB) - Alert and notification components
- **Notification Toast** (0.22 MB) - Toast message components
- **Metrics** (2.85 MB) - Data visualization components
- **Modal** (0.80 MB) - Modal dialog components

#### 🪲 Composites  
- **Tables** (20.21 MB) - Complex table components
- **Page frames** (8.59 MB) - Page layout templates
- **Empty states** (6.28 MB) - Empty state illustrations and layouts

#### ➡️ Workflow Assets
- **Annotations** (0.86 MB) - Design annotation components
- **Design/Dev Checklist** (1.18 MB) - QA and review components
- **Cursors** (0.56 MB) - Custom cursor designs

## 🔍 How to Use These Files

### 1. Quick Overview
Start with these files to understand the design system:
```bash
# Basic file information
cat figma_split/metadata.json

# Overview of all pages
cat figma_pages/page_index.json

# Design system styles (colors, typography)
cat figma_split/figma_styles.json
```

### 2. Component Analysis
To examine specific components:
```bash
# Look at button components
cat "figma_pages/07_Buttons_CANVAS.json"

# Check form elements
cat "figma_pages/16_Input Text_CANVAS.json"
cat "figma_pages/18_Multiselect Dropdowns_CANVAS.json"
```

### 3. Design Tokens
Extract design tokens and styles:
```bash
# All design system styles
cat figma_split/figma_styles.json

# Component definitions (good for understanding structure)
cat figma_split/figma_components.json
```

## 📋 Page Index Summary

The Figma file contains these main sections:

1. **Components (Pages 6-39)**: Individual UI components
2. **Composites (Pages 42-47)**: Complex component combinations  
3. **Workflow Assets (Pages 50-56)**: Design process tools

## 🛠 Next Steps for Wizard Updates

Based on the split files, you can now:

1. **Read specific component files** to understand current design patterns
2. **Extract design tokens** from the styles file
3. **Update wizard components** to match the latest design system
4. **Reference component anatomy** from individual page files

### Recommended Files to Check for Wizard Updates:
- `figma_pages/07_Buttons_CANVAS.json` - Button variants and states
- `figma_pages/16_Input Text_CANVAS.json` - Input field designs
- `figma_pages/19_Checkboxes_CANVAS.json` - Checkbox components
- `figma_pages/22_Date Picker_CANVAS.json` - Date picker components
- `figma_pages/23_Color Picker_CANVAS.json` - Color picker designs
- `figma_split/figma_styles.json` - Latest color tokens and typography

## 🧹 Cleanup

The original 41MB file is preserved as `figma-file.json`. The split files are organized in:
- `figma_split/` - Main sections
- `figma_pages/` - Individual pages
- Split scripts: `split_figma_json.py` and `split_figma_children.py`

You can now safely read any of these smaller JSON files without hitting token limits!
