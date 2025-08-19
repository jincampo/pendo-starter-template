#!/usr/bin/env python3
"""
Script to further split the large Figma children.json file into page-based chunks.
"""

import json
import os
import sys
from pathlib import Path

def split_figma_children(input_file="figma_split/document_detailed/children.json", output_dir="figma_pages"):
    """Split the children.json file by Figma pages for easier navigation."""
    
    print(f"Reading {input_file}...")
    
    # Read the children JSON file
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON file - {e}")
        return False
    except Exception as e:
        print(f"Error reading file: {e}")
        return False
    
    # Create output directory
    Path(output_dir).mkdir(exist_ok=True)
    
    children = data.get('children', [])
    print(f"Found {len(children)} top-level items (likely pages)")
    
    pages_created = 0
    
    for i, child in enumerate(children):
        # Get page name, fallback to index if no name
        page_name = child.get('name', f'Page_{i+1}')
        page_type = child.get('type', 'UNKNOWN')
        
        # Create safe filename
        safe_name = "".join(c for c in page_name if c.isalnum() or c in "._- ")[:50]
        output_file = os.path.join(output_dir, f"{i+1:02d}_{safe_name}_{page_type}.json")
        
        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(child, f, indent=2, ensure_ascii=False)
            
            file_size = os.path.getsize(output_file)
            print(f"Created {output_file} ({file_size / 1024 / 1024:.2f} MB) - {page_name}")
            pages_created += 1
            
            # If page has many children, create an index
            if 'children' in child and len(child['children']) > 10:
                create_page_index(child, safe_name, output_dir, i+1)
                
        except Exception as e:
            print(f"Error writing {output_file}: {e}")
    
    # Create a page index file
    page_index = {
        "total_pages": len(children),
        "pages": []
    }
    
    for i, child in enumerate(children):
        page_info = {
            "index": i + 1,
            "name": child.get('name', f'Page_{i+1}'),
            "type": child.get('type', 'UNKNOWN'),
            "id": child.get('id', ''),
            "children_count": len(child.get('children', [])),
            "filename": f"{i+1:02d}_{child.get('name', f'Page_{i+1}').replace(' ', '_')[:30]}_{child.get('type', 'UNKNOWN')}.json"
        }
        page_index["pages"].append(page_info)
    
    with open(os.path.join(output_dir, "page_index.json"), 'w', encoding='utf-8') as f:
        json.dump(page_index, f, indent=2)
    
    print(f"\n✅ Successfully split children into {pages_created} page files in '{output_dir}' directory")
    print(f"📋 Created page_index.json with page information")
    
    return True

def create_page_index(page_data, page_name, output_dir, page_num):
    """Create an index of components/frames within a page."""
    
    children = page_data.get('children', [])
    if not children:
        return
    
    # Create page index directory
    index_dir = os.path.join(output_dir, f"page_{page_num:02d}_{page_name}_index")
    Path(index_dir).mkdir(exist_ok=True)
    
    page_components = {
        "page_name": page_data.get('name', 'Unknown'),
        "page_type": page_data.get('type', 'UNKNOWN'),
        "total_children": len(children),
        "components": []
    }
    
    for i, child in enumerate(children):
        component_info = {
            "index": i + 1,
            "name": child.get('name', f'Component_{i+1}'),
            "type": child.get('type', 'UNKNOWN'),
            "id": child.get('id', ''),
            "children_count": len(child.get('children', [])) if 'children' in child else 0
        }
        page_components["components"].append(component_info)
        
        # If component is complex, save it separately
        if child.get('type') in ['COMPONENT_SET', 'COMPONENT', 'FRAME'] and len(child.get('children', [])) > 5:
            safe_component_name = "".join(c for c in child.get('name', f'Component_{i+1}') if c.isalnum() or c in "._- ")[:30]
            component_file = os.path.join(index_dir, f"component_{i+1:03d}_{safe_component_name}.json")
            
            try:
                with open(component_file, 'w', encoding='utf-8') as f:
                    json.dump(child, f, indent=2, ensure_ascii=False)
                print(f"    → Saved complex component: {component_file}")
            except Exception as e:
                print(f"    Error saving component: {e}")
    
    # Save page index
    index_file = os.path.join(index_dir, "components_index.json")
    with open(index_file, 'w', encoding='utf-8') as f:
        json.dump(page_components, f, indent=2)

def main():
    children_file = "figma_split/document_detailed/children.json"
    
    if not os.path.exists(children_file):
        print(f"Error: {children_file} not found")
        print("Please run split_figma_json.py first to create the base split files.")
        return
    
    print("📄 Figma Children Splitter")
    print("=" * 50)
    
    success = split_figma_children(children_file)
    
    if success:
        print("\n🎉 Children split completed successfully!")
        print("\nYou can now browse Figma pages individually:")
        print("  - figma_pages/page_index.json (overview of all pages)")
        print("  - figma_pages/01_*.json (individual page files)")
        print("  - figma_pages/page_*_index/ (detailed component breakdowns)")
    else:
        print("\n❌ Split failed. Please check the error messages above.")

if __name__ == "__main__":
    main()
