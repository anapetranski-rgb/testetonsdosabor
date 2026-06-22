import os
import shutil
import re
from PIL import Image

# Define paths
bolos_dir = os.path.join("assets", "Bolos")
src_logo = os.path.join("assets", "logoProdutos.png")
dest_logo = os.path.join(bolos_dir, "logoProdutos.png")
script_js = "script.js"
style_css = "style.css"

def process_images():
    print("Processing images in assets/Bolos...")
    if not os.path.exists(bolos_dir):
        print(f"Error: {bolos_dir} does not exist")
        return
        
    for file_name in os.listdir(bolos_dir):
        if file_name.endswith(".png") and file_name != "logoProdutos.png":
            png_path = os.path.join(bolos_dir, file_name)
            base_name = os.path.splitext(file_name)[0]
            
            # Determine destination name
            if base_name == "gourmetGG":
                dest_name = "gourmetGG.webp"
            else:
                dest_name = f"{base_name}.webp"
                
            webp_path = os.path.join(bolos_dir, dest_name)
            
            try:
                with Image.open(png_path) as img:
                    # Calculate new height maintaining aspect ratio (width=500px)
                    width_percent = (500 / float(img.size[0]))
                    new_height = int((float(img.size[1]) * float(width_percent)))
                    
                    resized_img = img.resize((500, new_height), Image.Resampling.LANCZOS)
                    
                    # Convert to RGB mode if source has alpha
                    if resized_img.mode in ('RGBA', 'LA') or (resized_img.mode == 'P' and 'transparency' in resized_img.info):
                        background = Image.new("RGB", resized_img.size, (255, 255, 255))
                        if 'A' in resized_img.getbands():
                            background.paste(resized_img, mask=resized_img.split()[3])
                        else:
                            background.paste(resized_img)
                        final_img = background
                    else:
                        final_img = resized_img
                        
                    final_img.save(webp_path, "WEBP", quality=85)
                    print(f"Processed: {file_name} -> {dest_name} (500x{new_height}, quality=85)")
                    
                # Delete the original PNG file
                os.remove(png_path)
                print(f"Deleted original: {file_name}")
            except Exception as e:
                print(f"Error processing {file_name}: {e}")

def handle_logo():
    print("Handling logo...")
    if os.path.exists(src_logo):
        shutil.copy2(src_logo, dest_logo)
        print(f"Copied {src_logo} to {dest_logo}")
    else:
        print(f"Warning: {src_logo} not found")

def update_js():
    print("Updating script.js...")
    if not os.path.exists(script_js):
        print(f"Error: {script_js} not found")
        return
        
    with open(script_js, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Replace image paths in the products array
    # e.g., imagem: "./assets/Bolos/TradicionalM.webp" -> imagem: "./assets/Bolos/tradicionalM.webp"
    # and gourmetGG -> gourmetGG.webp
    def replace_image_path(match):
        prefix = match.group(1)
        name = match.group(2)
        return f'{prefix}{name}.webp"'
        
    updated_content = re.sub(
        r'(imagem:\s*"\./assets/Bolos/)([^"/]+)\.webp"',
        replace_image_path,
        content,
        flags=re.IGNORECASE
    )
    
    # Check if we also need to change product rendering HTML structure
    old_card_pattern = r'(<article class="product-card" data-id="\${p\.id}">\s*)<img class="product-img" src="\${p\.imagem}" alt="\${p\.nome}" loading="lazy" width="250" height="240">'
    
    new_card_replacement = (
        '\\1<div class="card-image-container">\n'
        '                                <img class="product-img" src="${p.imagem}" alt="${p.nome}" loading="lazy" width="250" height="240">\n'
        '                                <img class="card-logo-overlay" src="./assets/Bolos/logoProdutos.png" alt="Logo">\n'
        '                            </div>'
    )
    
    if re.search(old_card_pattern, updated_content):
        updated_content = re.sub(old_card_pattern, new_card_replacement, updated_content)
        print("Updated HTML structure of product cards in script.js")
    else:
        print("Warning: Could not find product card HTML structure in script.js")
        
    with open(script_js, "w", encoding="utf-8") as f:
        f.write(updated_content)
    print("script.js updated.")

def update_css():
    print("Updating style.css...")
    if not os.path.exists(style_css):
        print(f"Error: {style_css} not found")
        return
        
    with open(style_css, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Append the CSS rules if they are not already there
    css_rules = """
/* Logo Flutuante nos Cards de Produtos */
.card-image-container {
    position: relative;
    overflow: hidden;
}
.card-logo-overlay {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 50px; /* Ajuste o tamanho conforme necessário */
    height: auto;
    opacity: 0.85;
    pointer-events: none; /* Garante que não atrapalhe cliques no card */
    z-index: 5;
}
"""
    if ".card-logo-overlay" not in content:
        with open(style_css, "a", encoding="utf-8") as f:
            f.write(css_rules)
        print("CSS rules appended to style.css")
    else:
        print("CSS rules already present in style.css")

if __name__ == "__main__":
    process_images()
    handle_logo()
    update_js()
    update_css()
    print("All tasks completed successfully!")
