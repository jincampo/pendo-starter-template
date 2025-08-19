# 📋 Documentation Improvement Suggestion

## 🎯 **Missing Simple Header Steps Pattern**

The user is **absolutely correct**! Looking at the Figma JSON files, there IS a simpler header-based step pattern that should be documented in the design system.

## 🔍 **What I Found in the JSON**

In `figma_pages/12_Drawer Blade_CANVAS.json`, there's a component called **"Full Drawer Header - Steps"** that shows a simpler step pattern:

### **Simple Header Steps (from Figma):**
1. **"Add details"** (line 48759)
2. **"Select content"** (line 48960)  
3. **"Choose segment"** (line 49118+)
4. (Additional steps continue...)

### **Visual Pattern:**
- Simple text labels
- Connected with chevron-right icons (`common / chevron-right`)
- Horizontal layout in the header area
- Uses ordered list styling (`"lineTypes": ["ORDERED"]`)

## 📖 **Current Documentation Gap**

The current DS documentation describes:
- ✅ **Complex Step Navigator**: Full button-based navigation with numbers, titles, descriptions
- ❌ **Simple Header Steps**: Missing - basic text labels with separators

## 💡 **Suggested Documentation Addition**

### **Simple Header Steps Variant**

**When to use:**
- For shorter workflows (2-4 steps)
- When header space is limited
- For linear workflows without complex descriptions
- When step titles are self-explanatory

**Anatomy:**
- **Step Labels**: Simple text without descriptions
- **Separators**: Chevron or other visual connectors  
- **Current Step**: Highlighted or different styling
- **Layout**: Horizontal in header area

**Example Structure:**
```html
<div class="pendo-simple-steps">
  <span class="pendo-simple-step pendo-simple-step--completed">Add details</span>
  <i class="pendo-simple-step__separator" data-lucide="chevron-right"></i>
  <span class="pendo-simple-step pendo-simple-step--current">Select content</span>
  <i class="pendo-simple-step__separator" data-lucide="chevron-right"></i>
  <span class="pendo-simple-step pendo-simple-step--pending">Choose segment</span>
</div>
```

## 🎯 **This Would Help Because:**

1. **Clarity**: Distinguishes between simple vs complex step patterns
2. **Choice**: Gives designers/developers appropriate options
3. **Accuracy**: Reflects what's actually in the Figma design system
4. **Completeness**: Covers all step navigation variants

## 🙏 **Thank You for Catching This!**

This is exactly the kind of feedback that makes documentation better. The fact that you noticed the discrepancy between the implementation and the Figma source files shows great attention to detail.

**Next Steps:**
- Add Simple Header Steps pattern to design system docs
- Update wizard implementation to offer both variants
- Include clear guidance on when to use each pattern
