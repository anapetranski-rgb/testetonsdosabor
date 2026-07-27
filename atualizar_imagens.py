import os
import sys
import shutil
import glob
from pathlib import Path

# Configurar stdout para utf-8 no Windows para evitar UnicodeEncodeError no terminal
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

from PIL import Image, ImageOps

# Extensões de imagem suportadas
IMAGE_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.bmp', '.tiff', '.webp'}
NON_WEBP_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.bmp', '.tiff'}

def get_image_files(directory):
    """Retorna um dicionário com todos os arquivos de imagem em um diretório."""
    images = {}
    path = Path(directory)
    if not path.exists():
        return images
    
    for file_path in path.rglob('*'):
        if file_path.is_file() and file_path.suffix.lower() in IMAGE_EXTENSIONS:
            images[file_path.name.lower()] = file_path
    return images

def auto_rotate_image(img):
    """Aplica rotação automática com base nos dados EXIF (evita fotos viradas)."""
    try:
        return ImageOps.exif_transpose(img)
    except Exception:
        return img

def convert_to_webp(image_path, quality=90, method=6):
    """
    Converte uma imagem para WebP com qualidade 90 e método 6 (mais lento e melhor compressão).
    Retorna o caminho da imagem WebP criada ou None em caso de falha.
    """
    try:
        webp_path = image_path.with_suffix('.webp')
        
        with Image.open(image_path) as img:
            # Corrigir orientação da câmera se houver EXIF
            img = auto_rotate_image(img)
            
            # Tratar modos de cor para WebP (preservar transparência RGBA/LA)
            if img.mode in ('RGBA', 'LA'):
                pass  # Manter o canal alfa
            elif img.mode == 'P':
                if 'transparency' in img.info:
                    img = img.convert('RGBA')
                else:
                    img = img.convert('RGB')
            elif img.mode != 'RGB':
                img = img.convert('RGB')

            # Salvar em formato WebP com otimização máxima (quality=90, method=6)
            img.save(webp_path, 'WEBP', quality=quality, method=method)
            
        return webp_path
    except Exception as e:
        print(f"  [ERRO] Falha ao converter {image_path.name}: {e}")
        return None

def update_code_references(project_dir, replacements_map):
    """
    Atualiza referências de imagens (.png, .jpg) para .webp nos arquivos .html, .css e .js.
    """
    if not replacements_map:
        return 0
        
    code_extensions = {'.html', '.css', '.js', '.json', '.php'}
    updated_files = 0
    
    print("\n[INFO] Verificando e atualizando referencias em arquivos do codigo (HTML, CSS, JS)...")
    
    for root, _, files in os.walk(project_dir):
        # Ignorar node_modules e .git
        if 'node_modules' in root or '.git' in root:
            continue
            
        for file in files:
            file_path = Path(root) / file
            if file_path.suffix.lower() in code_extensions:
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    new_content = content
                    for old_name, new_name in replacements_map.items():
                        if old_name in new_content:
                            new_content = new_content.replace(old_name, new_name)
                    
                    if new_content != content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"  [ATUALIZADO] Referencias atualizadas em: {file_path.relative_to(project_dir)}")
                        updated_files += 1
                except Exception:
                    # Se falhar leitura utf-8, ignorar arquivos binários
                    pass

    return updated_files

def main():
    print("=" * 65)
    print(" AGENTE DE AUTOMACAO -- ATUALIZACAO E OTIMIZACAO DE IMAGENS")
    print("=" * 65)

    # 1. Localizar pasta de novas fotos
    possible_source_dirs = ['novas_fotos', 'novas-fotos', 'novas-fotos-tons-do-sabor', 'assets/novas-fotos-tons-do-sabor', '../novas_fotos', '../novas-fotos']
    source_dir = None

    if len(sys.argv) > 1 and os.path.isdir(sys.argv[1]):
        source_dir = sys.argv[1]
    else:
        for d in possible_source_dirs:
            if os.path.isdir(d):
                source_dir = d
                break

    project_dir = Path(os.getcwd())

    print(f"\n[PASTA PROJETO]  {project_dir.resolve()}")
    if source_dir:
        print(f"[NOVAS FOTOS]    {Path(source_dir).resolve()}")
    else:
        print("[AVISO] Pasta 'novas_fotos' ou 'novas-fotos' nao encontrada no diretorio atual.")
        print("        O script ira otimizar e converter para WebP as imagens ja existentes no projeto.")

    # 2. Mapeamento de novas fotos
    new_photos_map = {}
    new_photos_by_path = {}
    
    if source_dir:
        for p in Path(source_dir).rglob('*'):
            if p.is_file() and p.suffix.lower() in IMAGE_EXTENSIONS:
                folder_name = p.parent.name.lower()
                rel_key = (folder_name, p.name.lower())
                new_photos_by_path[rel_key] = p
                new_photos_map[p.name.lower()] = p
        print(f"[MAPEAMENTO] Total de novas imagens encontradas: {len(new_photos_by_path)}")

    # 3. Varredura do projeto para substituição
    print("\n[BUSCA] Procurando arquivos correspondentes dentro do projeto...")
    replaced_count = 0
    ref_replacements = {}  # Mapeia 'imagem.png' -> 'imagem.webp'
    
    project_images = []
    for root, _, files in os.walk(project_dir):
        if 'node_modules' in root or '.git' in root or (source_dir and os.path.abspath(root).startswith(os.path.abspath(source_dir))):
            continue
            
        for file in files:
            file_path = Path(root) / file
            ext = file_path.suffix.lower()
            if ext in IMAGE_EXTENSIONS:
                project_images.append(file_path)

    # Executar substituições se houver pasta de novas fotos
    if source_dir and new_photos_by_path:
        for target_img in project_images:
            name_lower = target_img.name.lower()
            parent_lower = target_img.parent.name.lower()
            rel_key = (parent_lower, name_lower)

            matched_source = None
            if rel_key in new_photos_by_path:
                matched_source = new_photos_by_path[rel_key]
            elif name_lower in new_photos_map:
                matched_source = new_photos_map[name_lower]

            if matched_source:
                try:
                    shutil.copy2(matched_source, target_img)
                    print(f"  [SUBSTITUIDO] {target_img.relative_to(project_dir)} <-- {matched_source.parent.name}/{matched_source.name}")
                    replaced_count += 1
                except Exception as e:
                    print(f"  [ERRO] Falha ao substituir {target_img.name}: {e}")

    print(f"[OK] Substituicoes concluidas: {replaced_count} arquivos atualizados.")

    # 4. Conversão para WebP (Qualidade 90, Método 6) e Limpeza
    print("\n[CONVERSAO] Convertendo para .webp (Qualidade: 90 | Metodo: 6 - Otimizacao Maxima)...")
    
    converted_count = 0
    cleaned_count = 0
    total_saved_bytes = 0

    # Recarregar lista de imagens do projeto após substituições
    current_project_images = []
    for root, _, files in os.walk(project_dir):
        if 'node_modules' in root or '.git' in root or (source_dir and os.path.abspath(root).startswith(os.path.abspath(source_dir))):
            continue
        for file in files:
            file_path = Path(root) / file
            if file_path.suffix.lower() in IMAGE_EXTENSIONS:
                current_project_images.append(file_path)

    for img_path in current_project_images:
        ext = img_path.suffix.lower()
        
        # Se for um formato diferente de webp, converte
        if ext in NON_WEBP_EXTENSIONS:
            orig_size = img_path.stat().st_size
            webp_path = convert_to_webp(img_path, quality=90, method=6)
            
            if webp_path and webp_path.exists():
                webp_size = webp_path.stat().st_size
                saved = orig_size - webp_size
                total_saved_bytes += max(0, saved)
                converted_count += 1
                
                # Mapear para atualizar código se nome mudou de extensões
                ref_replacements[img_path.name] = webp_path.name
                
                print(f"  [CONVERTIDO] {img_path.name} -> {webp_path.name} ({orig_size//1024} KB -> {webp_size//1024} KB)")
                
                # Excluir o arquivo original antigo
                try:
                    os.remove(img_path)
                    cleaned_count += 1
                    print(f"  [REMOVIDO] {img_path.name}")
                except Exception as e:
                    print(f"  [AVISO] Nao foi possivel remover {img_path.name}: {e}")

    # 5. Atualizar referências no código (se imagens mudaram de extensão para .webp)
    updated_files = update_code_references(project_dir, ref_replacements)

    # Resumo Final
    print("\n" + "=" * 65)
    print(" PROCESSAMENTO CONCLUIDO COM SUCESSO!")
    print("=" * 65)
    print(f" Fotos novas mapeadas:        {len(new_photos_map) if source_dir else 0}")
    print(f" Arquivos substituidos:       {replaced_count}")
    print(f" Arquivos convertidos WebP:    {converted_count}")
    print(f" Imagens antigas removidas:   {cleaned_count}")
    print(f" Arquivos de codigo atualizados: {updated_files}")
    if total_saved_bytes > 0:
        print(f" Espaco economizado:           {total_saved_bytes / (1024*1024):.2f} MB")
    print("=" * 65)

if __name__ == "__main__":
    main()
