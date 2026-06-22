import os
from PIL import Image

# Define paths
src_dir = os.path.join("assets", "imgInsta")
dest_dir = os.path.join("assets", "Bolos")

# Mapping rules (as specified by user, assuming source names can be .jpg or .png)
rules = {
    "tradicionalG.jpg": "tradicionalG.webp",
    "tradicionalGG.jpg": "tradicionalGG.webp",
    "image_8f05a4.jpg": "bolo_suspiro.webp",
    "tradicionalP.jpg": "tradicionalP.webp",
    "especialGG.jpg": "especialGG.webp",
    "gourmetPP.jpg": "gourmetPP.webp",
    "gourmetP.jpg": "gourmetP.webp",
    "gourmetG.jpg": "gourmetG.webp",
    "tradicionalPP.jpg": "tradicionalPP.webp"
}

def process_images():
    print("Starting image processing...")
    
    if not os.path.exists(src_dir):
        print(f"Error: Source directory '{src_dir}' does not exist.")
        return
        
    for src_name, dest_rel_path in rules.items():
        base_name, _ = os.path.splitext(src_name)
        
        # Check for source file with .jpg, .png, .jpeg or .PNG extensions
        src_path = None
        extensions = [".jpg", ".png", ".jpeg", ".PNG", ".JPG"]
        for ext in extensions:
            potential_path = os.path.join(src_dir, base_name + ext)
            if os.path.exists(potential_path):
                src_path = potential_path
                break
                
        if not src_path:
            print(f"Warning: Source file for '{base_name}' not found in {src_dir} (tried extensions: {extensions}). Skipping.")
            continue
            
        # Target destination path
        dest_path = os.path.join(dest_dir, dest_rel_path)
        dest_subdir = os.path.dirname(dest_path)
        
        # Create subdirectories if they don't exist
        os.makedirs(dest_subdir, exist_ok=True)
        
        try:
            with Image.open(src_path) as img:
                # Calculate new size maintaining aspect ratio
                width_percent = (500 / float(img.size[0]))
                new_height = int((float(img.size[1]) * float(width_percent)))
                
                # Resize
                resized_img = img.resize((500, new_height), Image.Resampling.LANCZOS)
                
                # Convert to RGB mode if source is RGBA (WebP supports transparency but RGB is safe for general loading)
                if resized_img.mode in ('RGBA', 'LA') or (resized_img.mode == 'P' and 'transparency' in resized_img.info):
                    # Keep transparency if it exists, or convert to RGB
                    background = Image.new("RGB", resized_img.size, (255, 255, 255))
                    # Check if there is alpha channel to paste
                    if 'A' in resized_img.getbands():
                        background.paste(resized_img, mask=resized_img.split()[3]) # 3 is alpha
                    else:
                        background.paste(resized_img)
                    final_img = background
                else:
                    final_img = resized_img
                
                # Save as WebP with 85% quality
                final_img.save(dest_path, "WEBP", quality=85)
                print(f"Processed: {os.path.basename(src_path)} -> {dest_rel_path} (resized to 500x{new_height}, webp, q=85)")
                
        except Exception as e:
            print(f"Error processing {src_path}: {e}")

if __name__ == "__main__":
    process_images()
