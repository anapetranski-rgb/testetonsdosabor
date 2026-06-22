import os
from PIL import Image
from pillow_heif import register_heif_opener

# Register HEIF opener to support .HEIC files
register_heif_opener()

src_dir = os.path.join("assets", "galeria")

def process_gallery():
    print("Starting gallery image processing...")
    
    if not os.path.exists(src_dir):
        print(f"Error: Directory '{src_dir}' does not exist.")
        return
        
    # Get all non-webp files
    files = [f for f in os.listdir(src_dir) if not f.lower().endswith('.webp')]
    # Sort files alphabetically for a deterministic assignment
    files = sorted(files)
    
    print(f"Found {len(files)} files to process: {files}")
    
    for i, file_name in enumerate(files):
        src_path = os.path.join(src_dir, file_name)
        if not os.path.isfile(src_path):
            continue
            
        dest_name = f"evento{i + 1}.webp"
        dest_path = os.path.join(src_dir, dest_name)
        
        try:
            with Image.open(src_path) as img:
                # Calculate new size maintaining aspect ratio (target width: 1000px)
                orig_width, orig_height = img.size
                if orig_width > 0:
                    width_percent = (1000 / float(orig_width))
                    new_height = int(float(orig_height) * float(width_percent))
                else:
                    new_height = orig_height
                
                # Resize
                resized_img = img.resize((1000, new_height), Image.Resampling.LANCZOS)
                
                # Convert to RGB mode if source is RGBA (preserving transparency if webp, 
                # but for photo gallery RGB is ideal and compact)
                if resized_img.mode in ('RGBA', 'LA') or (resized_img.mode == 'P' and 'transparency' in resized_img.info):
                    # Keep transparency if it exists, or convert to RGB
                    background = Image.new("RGB", resized_img.size, (255, 255, 255))
                    if 'A' in resized_img.getbands():
                        background.paste(resized_img, mask=resized_img.split()[3])
                    else:
                        background.paste(resized_img)
                    final_img = background
                else:
                    final_img = resized_img
                
                # Save as WebP with 85% quality
                final_img.save(dest_path, "WEBP", quality=85)
                print(f"Processed: {file_name} -> {dest_name} (resized to 1000x{new_height}, webp, q=85)")
            
            # Delete original file
            os.remove(src_path)
            print(f"Deleted original file: {file_name}")
            
        except Exception as e:
            print(f"Error processing {file_name}: {e}")

if __name__ == "__main__":
    process_gallery()
