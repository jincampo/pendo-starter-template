#!/usr/bin/env python3
"""
Script to split a large Figma JSON file into smaller, manageable pieces.
"""

import json
import os
import sys
from pathlib import Path

def split_figma_json(input_file, output_dir="figma_split"):
    """Split a Figma JSON file into smaller chunks based on its structure."""
    
    print(f"Reading {input_file}...")
    
    # Read the large JSON file
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
    
    print(f"Successfully loaded JSON with {len(data)} top-level keys")
    print(f"Top-level keys: {list(data.keys())}")
    
    # Split by main sections
    sections_created = 0
    
    for key, value in data.items():
        output_file = os.path.join(output_dir, f"figma_{key}.json")
        
        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump({key: value}, f, indent=2, ensure_ascii=False)
            
            file_size = os.path.getsize(output_file)
            print(f"Created {output_file} ({file_size / 1024 / 1024:.2f} MB)")
            sections_created += 1
            
            # If a section is still very large, try to split it further
            if file_size > 5 * 1024 * 1024:  # 5MB threshold
                print(f"  ⚠️  {key} section is still large, attempting further split...")
                split_large_section(key, value, output_dir)
                
        except Exception as e:
            print(f"Error writing {output_file}: {e}")
    
    # Create a metadata file
    metadata = {
        "original_file": input_file,
        "split_timestamp": "2025-01-14",
        "total_sections": sections_created,
        "top_level_keys": list(data.keys()),
        "file_info": {
            "name": data.get("name", "Unknown"),
            "lastModified": data.get("lastModified", "Unknown"),
            "version": data.get("version", "Unknown")
        }
    }
    
    with open(os.path.join(output_dir, "metadata.json"), 'w', encoding='utf-8') as f:
        json.dump(metadata, f, indent=2)
    
    print(f"\n✅ Successfully split into {sections_created} files in '{output_dir}' directory")
    print(f"📋 Created metadata.json with file information")
    
    return True

def split_large_section(section_name, section_data, output_dir):
    """Further split large sections like components or styles."""
    
    if not isinstance(section_data, dict):
        return
    
    # Create subsection directory
    subsection_dir = os.path.join(output_dir, f"{section_name}_detailed")
    Path(subsection_dir).mkdir(exist_ok=True)
    
    if len(section_data) > 100:  # If there are many items
        # Group items into chunks
        items = list(section_data.items())
        chunk_size = 50
        
        for i in range(0, len(items), chunk_size):
            chunk = dict(items[i:i + chunk_size])
            chunk_file = os.path.join(subsection_dir, f"{section_name}_chunk_{i//chunk_size + 1}.json")
            
            try:
                with open(chunk_file, 'w', encoding='utf-8') as f:
                    json.dump(chunk, f, indent=2, ensure_ascii=False)
                
                file_size = os.path.getsize(chunk_file)
                print(f"    Created {chunk_file} ({file_size / 1024:.1f} KB)")
                
            except Exception as e:
                print(f"    Error writing {chunk_file}: {e}")
    
    else:
        # Split by individual items if reasonable
        for item_key, item_value in section_data.items():
            # Clean filename
            safe_filename = "".join(c for c in item_key if c.isalnum() or c in "._- ")[:50]
            item_file = os.path.join(subsection_dir, f"{safe_filename}.json")
            
            try:
                with open(item_file, 'w', encoding='utf-8') as f:
                    json.dump({item_key: item_value}, f, indent=2, ensure_ascii=False)
            except Exception as e:
                print(f"    Error writing {item_file}: {e}")

def main():
    input_file = "figma-file.json"
    
    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found")
        return
    
    print("🔧 Figma JSON Splitter")
    print("=" * 50)
    
    success = split_figma_json(input_file)
    
    if success:
        print("\n🎉 Split completed successfully!")
        print("\nYou can now read the smaller JSON files:")
        print("  - figma_split/figma_document.json (document structure)")
        print("  - figma_split/figma_components.json (component definitions)")
        print("  - figma_split/figma_componentSets.json (component sets)")
        print("  - figma_split/figma_styles.json (design styles)")
        print("  - figma_split/metadata.json (file information)")
    else:
        print("\n❌ Split failed. Please check the error messages above.")

if __name__ == "__main__":
    main()
