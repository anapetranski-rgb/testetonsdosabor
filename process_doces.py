import os
import re
from PIL import Image

# Define paths
src_dir = os.path.join("assets", "imgInsta")
dest_dir = os.path.join("assets", "DocesTradicionais")
script_js = "script.js"

# Mappings of imgInsta png files to DocesTradicionais webp names
mappings = {
    "beijinho.png": "beijinho.webp",
    "brigadeiroBranco.png": "brigadeiroBranco.webp",
    "brigadeiroPacoca.png": "paçoca.webp",
    "brigadeiroTradicional.png": "brigadeiroTradicional.webp",
    "cajuzinho.png": "cajuzinho.webp",
    "moranguinho.png": "moranguinho.webp"
}

def process_doces():
    print("Processing doces images...")
    if not os.path.exists(src_dir):
        print(f"Error: {src_dir} not found")
        return
        
    os.makedirs(dest_dir, exist_ok=True)
    
    for file_name in os.listdir(src_dir):
        if file_name.endswith(".png") and file_name in mappings:
            png_path = os.path.join(src_dir, file_name)
            dest_name = mappings[file_name]
            webp_path = os.path.join(dest_dir, dest_name)
            
            try:
                with Image.open(png_path) as img:
                    # Resize to 500px width maintaining aspect ratio
                    width_percent = (500 / float(img.size[0]))
                    new_height = int((float(img.size[1]) * float(width_percent)))
                    
                    resized_img = img.resize((500, new_height), Image.Resampling.LANCZOS)
                    
                    # Convert to RGB mode if source has transparency/palette
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
                    
                # Delete original PNG
                os.remove(png_path)
                print(f"Deleted original: {file_name}")
            except Exception as e:
                print(f"Error processing {file_name}: {e}")

def update_js():
    print("Updating script.js...")
    if not os.path.exists(script_js):
        print(f"Error: {script_js} not found")
        return
        
    with open(script_js, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Replaces for the respective ID items
    # ID 1
    content = re.sub(
        r'(id:\s*1,\s*nome:\s*"Brigadeiro Preto Tradicional".*?imagem:\s*")[^"]+(")',
        r'\g<1>./assets/DocesTradicionais/brigadeiroTradicional.webp\2',
        content,
        flags=re.DOTALL
    )
    # ID 2
    content = re.sub(
        r'(id:\s*2,\s*nome:\s*"Brigadeiro Branco Tradicional".*?imagem:\s*")[^"]+(")',
        r'\g<1>./assets/DocesTradicionais/brigadeiroBranco.webp\2',
        content,
        flags=re.DOTALL
    )
    # ID 3
    content = re.sub(
        r'(id:\s*3,\s*nome:\s*"Brigadeiro Beijinho".*?imagem:\s*")[^"]+(")',
        r'\g<1>./assets/DocesTradicionais/beijinho.webp\2',
        content,
        flags=re.DOTALL
    )
    # ID 4
    content = re.sub(
        r'(id:\s*4,\s*nome:\s*"Brigadeiro Cajuzinho".*?imagem:\s*")[^"]+(")',
        r'\g<1>./assets/DocesTradicionais/cajuzinho.webp\2',
        content,
        flags=re.DOTALL
    )
    # ID 5
    content = re.sub(
        r'(id:\s*5,\s*nome:\s*"Brigadeiro de Paçoca".*?imagem:\s*")[^"]+(")',
        r'\g<1>./assets/DocesTradicionais/paçoca.webp\2',
        content,
        flags=re.DOTALL
    )
    # ID 6
    content = re.sub(
        r'(id:\s*6,\s*nome:\s*"Brigadeiro Moranguinho".*?imagem:\s*")[^"]+(")',
        r'\g<1>./assets/DocesTradicionais/moranguinho.webp\2',
        content,
        flags=re.DOTALL
    )
    
    with open(script_js, "w", encoding="utf-8") as f:
        f.write(content)
    print("script.js updated.")

if __name__ == "__main__":
    process_doces()
    update_js()
    print("Doces task finished successfully!")
