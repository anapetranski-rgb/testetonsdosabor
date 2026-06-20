document.addEventListener("DOMContentLoaded", () => {
    // --- SELETORES GLOBAIS ---
    const cartIcon = document.querySelector(".cart-icon"),
        cartSidebar = document.querySelector(".cart-sidebar"),
        cartOverlay = document.querySelector(".cart-overlay"),
        closeCartBtn = document.querySelector(".close-cart-btn"),
        cartBody = document.querySelector(".cart-body"),
        cartBadge = document.querySelector(".cart-badge");
    const deliveryToggleBtns = document.querySelectorAll(".delivery-btn");
    const deliveryForm = document.getElementById("delivery-form-container"),
        pickupForm = document.getElementById("pickup-form-container");
    const trocoContainer = document.getElementById("troco-container");
    const couponInput = document.getElementById("coupon-input"),
        applyCouponBtn = document.getElementById("apply-coupon-btn"),
        couponFeedback = document.getElementById("coupon-feedback");
    const subtotalElem = document.getElementById("cart-subtotal"),
        cartDiscountElem = document.getElementById("cart-discount"),
        discountLineElem = document.querySelector(".discount-line"),
        totalElem = document.getElementById("cart-total");
    const finishOrderBtn = document.getElementById("finish-order-btn");
    // Seletores da barra inferior
    const viewCartBanner = document.querySelector(".view-cart-banner");
    const bannerTotalElem = document.getElementById("banner-total");
    const viewCartBannerBtn = document.querySelector(".view-cart-banner-btn");

    // Seletores para o sistema de filtro
    const categoryBtns = document.querySelectorAll(".category-btn");
    const searchInput = document.querySelector(".search-input");

    // Seletores dos Modais de Personalização
    const customizationModal = document.getElementById('customizationModal');
    const dynamicCustomizationForm = document.getElementById('dynamic-customization');
    const customizationTitle = document.getElementById('customizationTitle');
    const customizationFields = document.getElementById('customizationFields');
    const modalMask = document.getElementById('modalMask');

    // Seletores da Calculadora de Festa e Subcategorias
    const megaDropdown = document.getElementById('mega-dropdown');
    const calculatorModal = document.getElementById('calculatorModal');
    const btnOpenCalculator = document.getElementById('btn-open-calculator');
    const calculatorForm = document.getElementById('calculator-form');
    const calculatorResults = document.getElementById('calculator-results');
    const btnCalculate = document.getElementById('btn-calculate');
    const btnApplySuggestion = document.getElementById('btn-apply-suggestion');
    const urgencyFeeLine = document.querySelector('.urgency-fee-line');
    const cartUrgencyFeeElem = document.getElementById('cart-urgency-fee');


    // --- ESTADO DA APLICAÇÃO ---
    const produtos = [
        // === DOCES TRADICIONAIS UNIFICADOS ===
        {
            id: 1,
            nome: "Brigadeiro Preto Tradicional",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "./assets/DocesTradicionais/brigadeiroTradicional.png",
            descricao: "O clássico e amado brigadeiro ao leite. Produto artesanal com aprox. 20g.",
            requerPersonalizacao: false
        },
        {
            id: 2,
            nome: "Brigadeiro Branco Tradicional",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "./assets/DocesTradicionais/brigadeiroBranco.png",
            descricao: "Brigadeiro branco cremoso tradicional. Produto artesanal com aprox. 20g.",
            requerPersonalizacao: false
        },
        {
            id: 3,
            nome: "Brigadeiro Beijinho",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "./assets/DocesTradicionais/beijinho.png",
            descricao: "Delicioso doce tradicional de coco ralado e leite condensado.",
            requerPersonalizacao: false
        },
        {
            id: 4,
            nome: "Brigadeiro Cajuzinho",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "./assets/DocesTradicionais/cajuzinho.png",
            descricao: "Doce tradicional de amendoim com aquele toque clássico.",
            requerPersonalizacao: false
        },
        {
            id: 5,
            nome: "Brigadeiro de Paçoca",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Sabor marcante de paçoca em formato de brigadeiro de festa.",
            requerPersonalizacao: false
        },
        {
            id: 6,
            nome: "Brigadeiro Moranguinho",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "/assets/dafaultDoces.png",
            descricao: "O clássico bicho de pé, brigadeiro saborizado de morango.",
            requerPersonalizacao: false
        },

        // Itens do Cardápio por Unidade / Finos
        {
            id: 7,
            nome: "Brigadeiro Granullé",
            categoria: "doces-finos",
            preco: 2.50,
            imagem: "./assets/DocesFinos/brigadeiroGranule.png",
            descricao: "Brigadeiro nobre coberto com splits de chocolate. Escolha a sua variação favorita.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Ao Leite", detalhe: "Brigadeiro gourmet coberto com splits de chocolate belga ao leite." },
                { sabor: "Meio Amargo", detalhe: "Brigadeiro nobre coberto com granulado split meio amargo." },
                { sabor: "Branco", detalhe: "Brigadeiro branco coberto com splits de chocolate belga branco." }
            ]
        },
        {
            id: 8,
            nome: "Brigadeiro Dois Amores",
            categoria: "doces-finos",
            preco: 2.80,
            imagem: "./assets/DocesFinos/doisAmores.png",
            descricao: "A união perfeita do brigadeiro preto e branco. ",
            requerPersonalizacao: false,

        },
        {
            id: 9,
            nome: "Brigadeiro de Churros",
            categoria: "doces-finos",
            preco: 2.10,
            imagem: "/assets/defaultDoces.png",
            descricao: "Brigadeiro artesanal de canela finalizado com um gracioso bico de doce de leite.",
            requerPersonalizacao: false
        },
        {
            id: 10,
            nome: "Brigadeiro de Ninho com Nutella",
            categoria: "doces-finos",
            preco: 2.10,
            imagem: "./assets/DocesFinos/ninhoNutella.png",
            descricao: "Brigadeiro de leite Ninho original recheado com Nutella pura.",
            requerPersonalizacao: false
        },
        {
            id: 11,
            nome: "Brigadeiro de Uva Verde",
            categoria: "doces-finos",
            preco: 2.10,
            imagem: "./assets/DocesFinos/brigadeiroUva.png",
            descricao: "Uma uva verde fresca e inteira envolvida por uma camada de brigadeiro branco.",
            requerPersonalizacao: false
        },
        {
            id: 12,
            nome: "Brigadeiro Brûlée",
            categoria: "doces-finos",
            preco: 2.10,
            imagem: "./assets/DocesFinos/brigadeiroBrulle.png",
            descricao: "Brigadeiro de baunilha com aquela crosta crocante de açúcar maçaricado.",
            requerPersonalizacao: false
        },
        {
            id: 13,
            nome: "Palha Italiana",
            categoria: "doces-finos",
            preco: 1.90,
            imagem: "./assets/DocesFinos/palhaItaliana.png",
            descricao: "Tradicional pedaço de palha italiana feito com brigadeiro cremoso e biscoito.",
            requerPersonalizacao: false
        },
        {
            id: 14,
            nome: "Flor de Morango",
            categoria: "doces-finos",
            preco: 2.10,
            imagem: "/assets/defaultDoces.png",
            descricao: "Brigadeiro saborizado de morango (Nesquik) moldado delicadamente em formato de florzinha.",
            requerPersonalizacao: false
        },
        {
            id: 15,
            nome: "Bolo Tradicional PP",
            categoria: "bolos",
            subcategoria: "tradicionais",
            preco: 99.00, // Preço do Word
            imagem: "/assets/dafaultDoces.png",
            descricao: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg). Lindo acabamento em chantilly.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Brigadeiro", detalhe: "Massa de chocolate fofinha com recheio cremoso de brigadeiro tradicional." },
                { sabor: "Prestígio", detalhe: "Massa de chocolate marcante com recheio cremoso de coco flocado." },
                { sabor: "2 Amores", detalhe: "Duas camadas de recheio: brigadeiro preto casado com brigadeiro branco cremoso." },
                { sabor: "Ninho", detalhe: "Massa de chocolate combinada com um autêntico brigadeiro de leite em pó." },
                { sabor: "4 Leites", detalhe: "Massa branca delicada com recheio premium de brigadeiro de quatro leites." },
                { sabor: "Paçoca", detalhe: "Massa branca macia com um surpreendente brigadeiro artesanal de paçoca." }
            ]
        },
        {
            id: 16,
            nome: "Bolo Tradicional P",
            categoria: "bolos",
            subcategoria: "tradicionais",
            preco: 109.90, // Preço do Word
            imagem: "./assets/Bolos/TradicionalP.PNG",
            descricao: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg). Lindo acabamento em chantilly.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Brigadeiro", detalhe: "Massa de chocolate fofinha com recheio cremoso de brigadeiro tradicional." },
                { sabor: "Prestígio", detalhe: "Massa de chocolate marcante com recheio cremoso de coco flocado." },
                { sabor: "2 Amores", detalhe: "Duas camadas de recheio: brigadeiro preto casado com brigadeiro branco cremoso." },
                { sabor: "Ninho", detalhe: "Massa de chocolate combinada com um autêntico brigadeiro de leite em pó." },
                { sabor: "4 Leites", detalhe: "Massa branca delicada com recheio premium de brigadeiro de quatro leites." },
                { sabor: "Paçoca", detalhe: "Massa branca macia com um surpreendente brigadeiro artesanal de paçoca." }
            ]
        },
        {
            id: 17,
            nome: "Bolo Tradicional M",
            categoria: "bolos",
            subcategoria: "tradicionais",
            preco: 135.00, // Preço do PDF
            imagem: "./assets/Bolos/TradicionalM.png",
            descricao: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg). Lindo acabamento em chantilly.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Brigadeiro", detalhe: "Massa de chocolate fofinha com recheio cremoso de brigadeiro tradicional." },
                { sabor: "Prestígio", detalhe: "Massa de chocolate marcante com recheio cremoso de coco flocado." },
                { sabor: "2 Amores", detalhe: "Duas camadas de recheio: brigadeiro preto casado com brigadeiro branco cremoso." },
                { sabor: "Ninho", detalhe: "Massa de chocolate combinada com um autêntico brigadeiro de leite em pó." },
                { sabor: "4 Leites", detalhe: "Massa branca delicada com recheio premium de brigadeiro de quatro leites." },
                { sabor: "Paçoca", detalhe: "Massa branca macia com um surpreendente brigadeiro artesanal de paçoca." }
            ]
        },
        {
            id: 18,
            nome: "Bolo Tradicional G",
            categoria: "bolos",
            subcategoria: "tradicionais",
            preco: 180.00, // Preço do PDF
            imagem: "/assets/dafaultDoces.png",
            descricao: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg). Lindo acabamento em chantilly.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Brigadeiro", detalhe: "Massa de chocolate fofinha com recheio cremoso de brigadeiro tradicional." },
                { sabor: "Prestígio", detalhe: "Massa de chocolate marcante com recheio cremoso de coco flocado." },
                { sabor: "2 Amores", detalhe: "Duas camadas de recheio: brigadeiro preto casado com brigadeiro branco cremoso." },
                { sabor: "Ninho", detalhe: "Massa de chocolate combinada com um autêntico brigadeiro de leite em pó." },
                { sabor: "4 Leites", detalhe: "Massa branca delicada com recheio premium de brigadeiro de quatro leites." },
                { sabor: "Paçoca", detalhe: "Massa branca macia com um surpreendente brigadeiro artesanal de paçoca." }
            ]
        },
        {
            id: 19,
            nome: "Bolo Tradicional GG",
            categoria: "bolos",
            subcategoria: "tradicionais",
            preco: 299.00, // Preço do Word
            imagem: "/assets/dafaultDoces.png",
            descricao: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg). Lindo acabamento em chantilly.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Brigadeiro", detalhe: "Massa de chocolate fofinha com recheio cremoso de brigadeiro tradicional." },
                { sabor: "Prestígio", detalhe: "Massa de chocolate marcante com recheio cremoso de coco flocado." },
                { sabor: "2 Amores", detalhe: "Duas camadas de recheio: brigadeiro preto casado com brigadeiro branco cremoso." },
                { sabor: "Ninho", detalhe: "Massa de chocolate combinada com um autêntico brigadeiro de leite em pó." },
                { sabor: "4 Leites", detalhe: "Massa branca delicada com recheio premium de brigadeiro de quatro leites." },
                { sabor: "Paçoca", detalhe: "Massa branca macia com um surpreendente brigadeiro artesanal de paçoca." }
            ]
        },
        // --- SUBCATEGORIA: ESPECIAIS (FRUTAS) ---
        {
            id: 20,
            nome: "Bolo Especial PP",
            categoria: "bolos",
            subcategoria: "especiais",
            preco: 105.00, // Preço atualizado do Word
            imagem: "./assets/Bolos/EspecialPP.png",
            descricao: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg). Deliciosas combinações com frutas frescas.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Tropical", detalhe: "Massa branca com creme de natas e abacaxi, pêssego, uva, morango e ameixa." },
                { sabor: "Morango com Chocolate", detalhe: "Massa de chocolate, brigadeiro preto com pedaços de morango." },
                { sabor: "Ninho com Uva ou Morango", detalhe: "Massa branca, brigadeiro de leite em pó e frutas (uva ou morango)." },
                { sabor: "Abacaxi com Coco", detalhe: "Massa branca com creme de nata, coco cremoso e abacaxi em cubos." },
                { sabor: "Nata com Morangos e Suspiros", detalhe: "Massa branca, creme de natas, morango e suspiros." }
            ]
        },
        {
            id: 21,
            nome: "Bolo Especial P",
            categoria: "bolos",
            subcategoria: "especiais",
            preco: 125.00, // Preço atualizado do Word
            imagem: "./assets/Bolos/EspecialP.png",
            descricao: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg). Perfeito equilíbrio de doçura e frescor.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Tropical", detalhe: "Massa branca com creme de natas e abacaxi, pêssego, uva, morango e ameixa." },
                { sabor: "Morango com Chocolate", detalhe: "Massa de chocolate, brigadeiro preto com pedaços de morango." },
                { sabor: "Ninho com Uva ou Morango", detalhe: "Massa branca, brigadeiro de leite em pó e frutas (uva ou morango)." },
                { sabor: "Abacaxi com Coco", detalhe: "Massa branca com creme de nata, coco cremoso e abacaxi em cubos." },
                { sabor: "Nata com Morangos e Suspiros", detalhe: "Massa branca, creme de natas, morango e suspiros." }
            ]
        },
        {
            id: 22,
            nome: "Bolo Especial M",
            categoria: "bolos",
            subcategoria: "especiais",
            preco: 169.00, // Preço do PDF
            imagem: "./assets/Bolos/EspecialM.png",
            descricao: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg). Recheios artesanais com frutas selecionadas.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Tropical", detalhe: "Massa branca com creme de natas e abacaxi, pêssego, uva, morango e ameixa." },
                { sabor: "Morango com Chocolate", detalhe: "Massa de chocolate, brigadeiro preto com pedaços de morango." },
                { sabor: "Ninho com Uva ou Morango", detalhe: "Massa branca, brigadeiro de leite em pó e frutas (uva ou morango)." },
                { sabor: "Abacaxi com Coco", detalhe: "Massa branca com creme de nata, coco cremoso e abacaxi em cubos." },
                { sabor: "Nata com Morangos e Suspiros", detalhe: "Massa branca, creme de natas, morango e suspiros." }
            ]
        },
        {
            id: 23,
            nome: "Bolo Especial G",
            categoria: "bolos",
            subcategoria: "especiais",
            preco: 250.00, // Preço do PDF
            imagem: "./assets/Bolos/EspecialG.png",
            descricao: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg). Estrutura elegante ideal para comemorações.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Tropical", detalhe: "Massa branca com creme de natas e abacaxi, pêssego, uva, morango e ameixa." },
                { sabor: "Morango com Chocolate", detalhe: "Massa de chocolate, brigadeiro preto com pedaços de morango." },
                { sabor: "Ninho com Uva ou Morango", detalhe: "Massa branca, brigadeiro de leite em pó e frutas (uva ou morango)." },
                { sabor: "Abacaxi com Coco", detalhe: "Massa branca com creme de nata, coco cremoso e abacaxi em cubos." },
                { sabor: "Nata com Morangos e Suspiros", detalhe: "Massa branca, creme de natas, morango e suspiros." }
            ]
        },
        {
            id: 24,
            nome: "Bolo Especial GG",
            categoria: "bolos",
            subcategoria: "especiais",
            preco: 369.00, // Preço atualizado do Word
            imagem: "/assets/dafaultDoces.png",
            descricao: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg). Perfeito para casamentos e grandes eventos.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Tropical", detalhe: "Massa branca com creme de natas e abacaxi, pêssego, uva, morango e ameixa." },
                { sabor: "Morango com Chocolate", detalhe: "Massa de chocolate, brigadeiro preto com pedaços de morango." },
                { sabor: "Ninho com Uva ou Morango", detalhe: "Massa branca, brigadeiro de leite em pó e frutas (uva ou morango)." },
                { sabor: "Abacaxi com Coco", detalhe: "Massa branca com creme de nata, coco cremoso e abacaxi em cubos." },
                { sabor: "Nata com Morangos e Suspiros", detalhe: "Massa branca, creme de natas, morango e suspiros." }
            ]
        },
        // --- SUBCATEGORIA: GOURMET ---
        {
            id: 25,
            nome: "Bolo Gourmet PP",
            categoria: "bolos",
            subcategoria: "gourmet",
            preco: 115.00, // Preço atualizado do Word 
            imagem: "/assets/dafaultDoces.png",
            descricao: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg)[cite: 195]. Combinações exclusivas de alta confeitaria.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Ninho com Nutella", detalhe: "Massa de chocolate, brigadeiro de leite em pó e Nutella[cite: 151, 152]." },
                { sabor: "Pistache com Frutas Vermelhas", detalhe: "Massa branca, mousse de pistache com pistache triturado e geleia de frutas vermelhas[cite: 153, 154]." },
                { sabor: "Brigadeiro Brûlée com Frutas Vermelhas", detalhe: "Massa branca, brigadeiro brûlée (gemas e baunilha) e geleia artesanal de frutas vermelhas[cite: 155, 156]." },
                { sabor: "Marta Rocha", detalhe: "Massa branca e de chocolate, recheio de damasco e ameixa, crocante de nozes, creme de nata, suspiro e baba de moça[cite: 157, 158]." },
                { sabor: "Pistache e Limão Siciliano", detalhe: "Massa branca, recheio de pistache com pistache triturado e brigadeiro de limão siciliano[cite: 159, 160]." },
                { sabor: "Ouro Branco", detalhe: "Massa branca e chocolate, creme de nata, bombom ouro branco triturado e ganache[cite: 161, 162, 163]." },
                { sabor: "Strogonoff de Nozes", detalhe: "Massa branca, creme de doce de leite e nozes[cite: 164, 165]." },
                { sabor: "Red Velvet", detalhe: "Massa vermelha, creme à base de cream cheese saborizado de limão e baunilha com geleia de frutas vermelhas[cite: 167]." }
            ]
        },
        {
            id: 26,
            nome: "Bolo Gourmet P",
            categoria: "bolos",
            subcategoria: "gourmet",
            preco: 155.00, // Preço atualizado do Word 
            imagem: "/assets/dafaultDoces.png",
            descricao: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg)[cite: 199]. Sabores finos e sofisticados.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Ninho com Nutella", detalhe: "Massa de chocolate, brigadeiro de leite em pó e Nutella[cite: 151, 152]." },
                { sabor: "Pistache com Frutas Vermelhas", detalhe: "Massa branca, mousse de pistache com pistache triturado e geleia de frutas vermelhas[cite: 153, 154]." },
                { sabor: "Brigadeiro Brûlée com Frutas Vermelhas", detalhe: "Massa branca, brigadeiro brûlée (gemas e baunilha) e geleia artesanal de frutas vermelhas[cite: 155, 156]." },
                { sabor: "Marta Rocha", detalhe: "Massa branca e de chocolate, recheio de damasco e ameixa, crocante de nozes, creme de nata, suspiro e baba de moça[cite: 157, 158]." },
                { sabor: "Pistache e Limão Siciliano", detalhe: "Massa branca, recheio de pistache com pistache triturado e brigadeiro de limão siciliano[cite: 159, 160]." },
                { sabor: "Ouro Branco", detalhe: "Massa branca e chocolate, creme de nata, bombom ouro branco triturado e ganache[cite: 161, 162, 163]." },
                { sabor: "Strogonoff de Nozes", detalhe: "Massa branca, creme de doce de leite e nozes[cite: 164, 165]." },
                { sabor: "Red Velvet", detalhe: "Massa vermelha, creme à base de cream cheese saborizado de limão e baunilha com geleia de frutas vermelhas[cite: 167]." }
            ]
        },
        {
            id: 27,
            nome: "Bolo Gourmet M",
            categoria: "bolos",
            subcategoria: "gourmet",
            preco: 225.00, // Preço do PDF [cite: 147]
            imagem: "./assets/Bolos/GourmetM.png",
            descricao: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 1,8kg)[cite: 203]. Criações requintadas.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Ninho com Nutella", detalhe: "Massa de chocolate, brigadeiro de leite em pó e Nutella[cite: 151, 152]." },
                { sabor: "Pistache com Frutas Vermelhas", detalhe: "Massa branca, mousse de pistache com pistache triturado e geleia de frutas vermelhas[cite: 153, 154]." },
                { sabor: "Brigadeiro Brûlée com Frutas Vermelhas", detalhe: "Massa branca, brigadeiro brûlée (gemas e baunilha) e geleia artesanal de frutas vermelhas[cite: 155, 156]." },
                { sabor: "Marta Rocha", detalhe: "Massa branca e de chocolate, recheio de damasco e ameixa, crocante de nozes, creme de nata, suspiro e baba de moça[cite: 157, 158]." },
                { sabor: "Pistache e Limão Siciliano", detalhe: "Massa branca, recheio de pistache com pistache triturado e brigadeiro de limão siciliano[cite: 159, 160]." },
                { sabor: "Ouro Branco", detalhe: "Massa branca e chocolate, creme de nata, bombom ouro branco triturado e ganache[cite: 161, 162, 163]." },
                { sabor: "Strogonoff de Nozes", detalhe: "Massa branca, creme de doce de leite e nozes[cite: 164, 165]." },
                { sabor: "Red Velvet", detalhe: "Massa vermelha, creme à base de cream cheese saborizado de limão e baunilha com geleia de frutas vermelhas[cite: 167]." }
            ]
        },
        {
            id: 28,
            nome: "Bolo Gourmet G",
            categoria: "bolos",
            subcategoria: "gourmet",
            preco: 305.00, // Preço do PDF [cite: 147]
            imagem: "./assets/Bolos/GourmetG.png",
            descricao: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg)[cite: 204]. Experiência gastronômica marcante.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Ninho com Nutella", detalhe: "Massa de chocolate, brigadeiro de leite em pó e Nutella[cite: 151, 152]." },
                { sabor: "Pistache com Frutas Vermelhas", detalhe: "Massa branca, mousse de pistache com pistache triturado e geleia de frutas vermelhas[cite: 153, 154]." },
                { sabor: "Brigadeiro Brûlée com Frutas Vermelhas", detalhe: "Massa branca, brigadeiro brûlée (gemas e baunilha) e geleia artesanal de frutas vermelhas[cite: 155, 156]." },
                { sabor: "Marta Rocha", detalhe: "Massa branca e de chocolate, recheio de damasco e ameixa, crocante de nozes, creme de nata, suspiro e baba de moça[cite: 157, 158]." },
                { sabor: "Pistache e Limão Siciliano", detalhe: "Massa branca, recheio de pistache com pistache triturado e brigadeiro de limão siciliano[cite: 159, 160]." },
                { sabor: "Ouro Branco", detalhe: "Massa branca e chocolate, creme de nata, bombom ouro branco triturado e ganache[cite: 161, 162, 163]." },
                { sabor: "Strogonoff de Nozes", detalhe: "Massa branca, creme de doce de leite e nozes[cite: 164, 165]." },
                { sabor: "Red Velvet", detalhe: "Massa vermelha, creme à base de cream cheese saborizado de limão e baunilha com geleia de frutas vermelhas[cite: 167]." }
            ]
        },
        {
            id: 29,
            nome: "Bolo Gourmet GG",
            categoria: "bolos",
            subcategoria: "gourmet",
            preco: 429.00, // Preço atualizado do Word 
            imagem: "./assets/Bolos/GourmetGG.png",
            descricao: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg)[cite: 205]. O ápice do luxo para o seu grande dia.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Ninho com Nutella", detalhe: "Massa de chocolate, brigadeiro de leite em pó e Nutella[cite: 151, 152]." },
                { sabor: "Pistache com Frutas Vermelhas", detalhe: "Massa branca, mousse de pistache com pistache triturado e geleia de frutas vermelhas[cite: 153, 154]." },
                { sabor: "Brigadeiro Brûlée com Frutas Vermelhas", detalhe: "Massa branca, brigadeiro brûlée (gemas e baunilha) e geleia artesanal de frutas vermelhas[cite: 155, 156]." },
                { sabor: "Marta Rocha", detalhe: "Massa branca e de chocolate, recheio de damasco e ameixa, crocante de nozes, creme de nata, suspiro e baba de moça[cite: 157, 158]." },
                { sabor: "Pistache e Limão Siciliano", detalhe: "Massa branca, recheio de pistache com pistache triturado e brigadeiro de limão siciliano[cite: 159, 160]." },
                { sabor: "Ouro Branco", detalhe: "Massa branca e chocolate, creme de nata, bombom ouro branco triturado e ganache[cite: 161, 162, 163]." },
                { sabor: "Strogonoff de Nozes", detalhe: "Massa branca, creme de doce de leite e nozes[cite: 164, 165]." },
                { sabor: "Red Velvet", detalhe: "Massa vermelha, creme à base de cream cheese saborizado de limão e baunilha com geleia de frutas vermelhas[cite: 167]." }
            ]
        },
        {
            id: 40,
            nome: "Cupcake P",
            categoria: "cupcakes",
            preco: 4.50, // Base padrão para mini cupcakes decorados
            imagem: "/assets/dafaultDoces.png",
            descricao: "Delicado mini bolo recheado e decorado com cobertura artesanal. Escolha o seu sabor favorito.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Nutella", detalhe: "Massa de chocolate fofinha com recheio e cobertura generosa de Nutella pura." },
                { sabor: "Doce de Leite", detalhe: "Massa de baunilha com recheio de doce de leite cozido e cobertura decorada." },
                { sabor: "Beijinho", detalhe: "Massa de baunilha, recheio cremoso de coco e finalizado com cobertura de coco ralado." },
                { sabor: "Brigadeiro Tradicional", detalhe: "Massa de chocolate com recheio e cobertura do nosso clássico brigadeiro gourmet." }
            ]
        },
        {
            id: 41,
            nome: "Cupcake G",
            categoria: "cupcakes",
            preco: 8.50, // Tamanho tradicional individual
            imagem: "./assets/DocesFinos/cupcakeG.png",
            descricao: "Tamanho perfeito para lanches individuais ou lembrancinhas. Recheado e lindamente decorado.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Nutella", detalhe: "Massa de chocolate fofinha com recheio e cobertura generosa de Nutella pura." },
                { sabor: "Doce de Leite", detalhe: "Massa de baunilha com recheio de doce de leite cozido e cobertura decorada." },
                { sabor: "Beijinho", detalhe: "Massa de baunilha, recheio cremoso de coco e finalizado com cobertura de coco ralado." },
                { sabor: "Brigadeiro Tradicional", detalhe: "Massa de chocolate com recheio e cobertura do nosso clássico brigadeiro gourmet." }
            ]
        },
        {
            id: 42,
            nome: "Bombons Tradicionais (Sicao)",
            categoria: "doces-finos",
            subcategoria: "bombons", // Mesma subcategoria para linkar no único botão!
            preco: 2.90,
            imagem: "./assets/DocesFinos/bombomTradicional.png",
            descricao: "Deliciosos bombons tradicionais com cobertura fracionada Sicao.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Uva", detalhe: "Uva fresca com brigadeiro branco e casquinha Sicao. (R$ 2,90/un)" },
                { sabor: "Coco", detalhe: "Recheio cremoso de coco com casquinha Sicao. (R$ 2,90/un)" },
                { sabor: "Morango", detalhe: "Morango inteiro com brigadeiro e casquinha Sicao. (R$ 3,10/un)" },
                { sabor: "Abacaxi", detalhe: "Pedacinhos de abacaxi artesanal e casquinha Sicao. (R$ 3,10/un)" },
                { sabor: "Cereja", detalhe: "Cereja em calda envolta em creme e casquinha Sicao. (R$ 3,10/un)" },
                { sabor: "Limão", detalhe: "Creme trufado de limão refrescante e casquinha Sicao. (R$ 3,10/un)" }
            ]
        },
        {
            id: 43,
            nome: "Bombons Finos (Chocolate Nobre)",
            categoria: "doces-finos",
            subcategoria: "bombons", // Mesma subcategoria para nascer junto no clique!
            preco: 4.90,
            imagem: "./assets/DocesFinos/bombomFino.png",
            descricao: "Bombons requintados de alta confeitaria produzidos com puro chocolate nobre temperado.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Uva Fino", detalhe: "Uva premium envolta em creme e banhada em chocolate nobre. (R$ 4,90/un)" },
                { sabor: "Cereja Fino", detalhe: "Cereja inteira com licor e banho de chocolate nobre. (R$ 4,90/un)" },
                { sabor: "Pirâmide de Café e Caramelo", detalhe: "Sofisticado formato de pirâmide com recheio trufado de café e caramelo nobre. (R$ 4,90/un)" },
                { sabor: "Morango Tradicional", detalhe: "Morango inteiro selecionado coberto com puro chocolate nobre. (R$ 5,50/un)" },
                { sabor: "Morango Luxo", detalhe: "A versão mais imponente, decorada e requintada com chocolate nobre. (R$ 6,50/un)" }
            ]
        },
        {
            id: 44,
            nome: "Macarons Artesanais",
            categoria: "doces-finos",
            subcategoria: "macarons",
            preco: 7.90, // Atualizado conforme o cardápio!
            imagem: "./assets/DocesFinos/macaronsUnidade.png",
            descricao: "Clássico doce francês crocante por fora e incrivelmente macio por dentro.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Baunilha", detalhe: "Ganache delicada de baunilha de Madagascar." },
                { sabor: "Pistache", detalhe: "Recheio cremoso com pasta artesanal de pistache nobre." },
                { sabor: "Frutas Vermelhas", detalhe: "Geleia artesanal com toque azedinho de frutas selecionadas." },
                { sabor: "Chocolate Meio Amargo", detalhe: "Ganache intensa com blend de chocolate nobre." },
                { sabor: "Limão Siciliano", detalhe: "Creme refrescante e cítrico de limão siciliano." }
            ]
        },
        {
            id: 45,
            nome: "Torre de Macarons",
            categoria: "doces-finos",
            subcategoria: "macarons",
            precoBase: 425.00, // Preço da menor torre (Aprox. 50 un.) [cite: 226]
            imagem: "./assets/DocesFinos/torreMacarons.png",
            descricao: "Uma belíssima torre de macarons para sua mesa de doces. Selecione o tamanho desejado e digite as cores de preferência na caixinha de texto. (De acordo com o limite)",
            requerPersonalizacao: true,
            tipoPersonalizacao: "quantidade-cores", // Identificador único para o seu JS saber o que renderizar
            permiteObservacaoExtra: true, // Abre o campo de texto livre no modal para as cores!
            opcoes: [
                {
                    sabor: "Torre P (Aproximadamente 50 unidades)",
                    detalhe: "Ideal para mini weddings ou comemorações intimistas. Permite até 2 cores. (R$ 425,00)", // [cite: 223, 226]
                    adicional: 0.00
                },
                {
                    sabor: "Torre M (Aproximadamente 100 unidades)",
                    detalhe: "Excelente destaque e volume para mesas médias. Permite até 3 cores. (R$ 820,00)", // [cite: 223, 227]
                    adicional: 395.00 // R$ 425,00 + R$ 395,00 = R$ 820,00 [cite: 226, 227]
                },
                {
                    sabor: "Torre G (Aproximadamente 150 unidades)",
                    detalhe: "Uma verdadeira escultura de alta confeitaria. Permite até 4 cores. (R$ 1.299,00)", // [cite: 223, 228]
                    adicional: 874.00 // R$ 425,00 + R$ 874,00 = R$ 1.299,00 [cite: 226, 228]
                }
            ]
        },
        {
            id: 46,
            nome: "Brigadeiros Callebaut",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos", // Brota junto com o Granullé e Dois Amores
            preco: 6.50,
            imagem: "./assets/DocesFinos/brigadeiroCallebaut.png",
            descricao: "Linha premium produzida com o autêntico chocolate belga Callebaut. Escolha a sua opção favorita.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Brigadeiro em Granulado Split", detalhe: "Delicioso brigadeiro gourmet envolvido em splits de chocolate belga." },
                { sabor: "Caramelo Salgado em Crispearls", detalhe: "Brigadeiro de caramelo salgado finalizado com as famosas esferas crocantes Crispearls." }
            ]
        },
        {
            id: 47,
            nome: "Brigadeiro de Limão Siciliano",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos",
            preco: 2.50,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Delicioso brigadeiro gourmet saborizado de limão siciliano com acabamento em granullé branco.",
            requerPersonalizacao: false
        },
        {
            id: 48,
            nome: "Brigadeiro de Caramelo Salgado",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos",
            preco: 2.50,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Brigadeiro cremoso de caramelo salgado com acabamento em granullé sabor caramelo.",
            requerPersonalizacao: false
        },
        {
            id: 49,
            nome: "Brigadeiro Ferrero",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos",
            preco: 2.50,
            imagem: "./assets/DocesFinos/brigadeiroFerrero.png",
            descricao: "Inspirado no famoso bombom, com chocolate nobre e pedacinhos de avelã.",
            requerPersonalizacao: false
        },
        {
            id: 50,
            nome: "Brigadeiro de Pistache Fino",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos",
            preco: 4.30,
            imagem: "./assets/DocesFinos/brigadeiroPistache.png",
            descricao: "Brigadeiro gourmet feito com pasta pura de pistache selecionado.",
            requerPersonalizacao: false
        },
        {
            id: 51,
            nome: "Brigadeiro de Suspiro com Morangos",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos",
            preco: 2.30,
            imagem: "./assets/DocesFinos/suspiroMorango.png",
            descricao: "Combinação leve e crocante de mini suspiros com o sabor irresistível de morango.",
            requerPersonalizacao: false
        },

        // --- SUBCATEGORIA: DOCES ESPECIAIS (OURIÇOS, TROUXINHAS E AFINS) ---
        {
            id: 52,
            nome: "Ouriço de Coco",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            preco: 2.30,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Doce artesanal de coco super cremoso por dentro com aquela crosta crocante por fora.",
            requerPersonalizacao: false
        },
        {
            id: 53,
            nome: "Ouriço de Amêndoa",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            preco: 4.50,
            imagem: "./assets/DocesFinos/ouricoAmendoa.png",
            descricao: "Sofisticado doce fino com recheio cremoso e envolvido em lâminas crocantes de amêndoa.",
            requerPersonalizacao: false
        },
        {
            id: 54,
            nome: "Ouriço de Pistache",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            preco: 4.90,
            imagem: "./assets/DocesFinos/brigadeiroPistache.png",
            descricao: "O ápice da sofisticação: recheio premium coberto com pistache triturado.",
            requerPersonalizacao: false
        },
        {
            id: 55,
            nome: "Romeu e Julieta Fino",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            preco: 2.50,
            imagem: "/assets/dafaultDoces.png",
            descricao: "O casamento perfeito do queijo com a goiabada em uma roupagem fina para casamentos e eventos.",
            requerPersonalizacao: false
        },
        {
            id: 56,
            nome: "Olho de Sogra Fino",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            preco: 2.30,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Clássico doce de festa repaginado. Escolha a sua base de preferência.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Ameixa", detalhe: "Beijinho cremoso combinado com ameixa selecionada." },
                { sabor: "Damasco", detalhe: "Beijinho cremoso combinado com um toque nobre de damasco." }
            ]
        },
        {
            id: 57,
            nome: "Morango Cristal",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            preco: 3.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Morango inteiro fresco envolto em uma delicada camada de brigadeiro e caramelizado com calda de açúcar cristal.",
            requerPersonalizacao: false
        },
        {
            id: 58,
            nome: "Trouxinha Marzipan",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            preco: 7.50,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Doce fino ultra premium moldado em formato de trouxinha com autêntica pasta de marzipan de amêndoas.",
            requerPersonalizacao: false
        },
        {
            id: 59,
            nome: "Trouxinha de Nozes e Baba de Moça",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            preco: 6.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Trouxinha fina recheada com um nobre estrogonofe de nozes e a tradicional baba de moça.",
            requerPersonalizacao: false
        },
        {
            id: 60,
            nome: "Mini Mil Folhas",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            preco: 5.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Massa folhada incrivelmente crocante intercalada com recheio artesanal. Escolha o sabor.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Creme", detalhe: "Recheado com o clássico creme de confeiteiro suave." },
                { sabor: "Doce de Leite", detalhe: "Recheado com doce de leite cozido cremoso." }
            ]
        },
        {
            id: 61,
            nome: "Copinhos de Chocolate Premium",
            categoria: "doces-finos",
            subcategoria: "tarteletes-e-caixinhas",
            precoBase: 4.50, // Preço base do copinho tradicional
            imagem: "./assets/DocesFinos/copinhoPersonalizado.png",
            descricao: "Delicados copinhos de puro chocolate nobre recheados. Selecione o sabor de sua preferência.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                {
                    sabor: "Abacaxi e Manjericão",
                    detalhe: "Combinação surpreendente, leve e refrescante. (R$ 4,50/un)",
                    adicional: 0.00 // R$ 4,50 base + R$ 0,00 = R$ 4,50
                },
                {
                    sabor: "Avelã Crocante",
                    detalhe: "Recheio cremoso de avelã com toque crocante premium. (R$ 4,90/un)",
                    adicional: 0.40 // R$ 4,50 base + R$ 0,40 = R$ 4,90
                },
                {
                    sabor: "Avelã e Brigadeiro",
                    detalhe: "O encontro do nosso brigadeiro artesanal com creme de avelã. (R$ 3,90/un)",
                    adicional: -0.60 // R$ 4,50 base - R$ 0,60 = R$ 3,90 (O JS aceita menos também!)
                }
            ]
        },
        {
            id: 62,
            nome: "Caixinhas de Chocolate Personalizadas",
            categoria: "doces-finos",
            subcategoria: "tarteletes-e-caixinhas",
            precoBase: 4.90, // Preço base da maioria das caixinhas
            imagem: "./assets/DocesFinos/caixinhaChocolate.png",
            descricao: "Elegantes caixinhas moldadas em chocolate com recheios finos e decorações sofisticadas. Selecione o seu sabor favorito.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                {
                    sabor: "Doce de Leite com Frutas Vermelhas",
                    detalhe: "Doce de leite cremoso coroado com frutas frescas. (R$ 4,90/un)",
                    adicional: 0.00 // R$ 4,90 base + R$ 0,00 = R$ 4,90
                },
                {
                    sabor: "Chocolate com Creme e Frutas Vermelhas",
                    detalhe: "Ganache meio amarga com creme e frutas selecionadas. (R$ 4,90/un)",
                    adicional: 0.00 // R$ 4,90 base + R$ 0,00 = R$ 4,90
                },
                {
                    sabor: "Caixinha Brûllé",
                    detalhe: "Creme brûlée suave com açúcar maçaricado no topo. (R$ 5,90/un)",
                    adicional: 1.00 // R$ 4,90 base + R$ 1,00 = R$ 5,90
                },
                {
                    sabor: "Physalis",
                    detalhe: "Creme trufado decorado com uma fruta Physalis inteira. (R$ 4,50/un)",
                    adicional: -0.40 // R$ 4,90 base - R$ 0,40 = R$ 4,50
                },
                {
                    sabor: "Cereja",
                    detalhe: "Recheio trufado com uma linda cereja com cabinho no topo. (R$ 4,50/un)",
                    adicional: -0.40 // R$ 4,90 base - R$ 0,40 = R$ 4,50
                },
                {
                    sabor: "Damasco",
                    detalhe: "Combinação nobre com recheio artesanal de damasco. (R$ 4,50/un)",
                    adicional: -0.40 // R$ 4,90 base - R$ 0,40 = R$ 4,50
                }
            ]
        },
        {
            id: 63,
            nome: "Mini Tarteletes Tradicionais",
            categoria: "doces-finos",
            subcategoria: "tarteletes-e-caixinhas",
            preco: 5.90, // Preço inicial dessa linha
            imagem: "./assets/DocesFinos/tarteleteTradicional.png",
            descricao: "Mini tortinhas crocantes de massa sablée com recheios tradicionais e opções cítricas irresistíveis.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Limão Siciliano", detalhe: "Creme de limão siciliano e merengue maçaricado." },
                { sabor: "Chocolate e Caramelo", detalhe: "Blend intenso de chocolate meio amargo e caramelo." },
                { sabor: "Frutas Tradicional", detalhe: "Creme de confeiteiro leve com frutas frescas da estação." },
                { sabor: "Maracujá", detalhe: "Mousse cremosa de maracujá com sementinhas decorativas." }
            ]
        },
        {
            id: 64,
            nome: "Mini Tarteletes Luxo",
            categoria: "doces-finos",
            subcategoria: "tarteletes-e-caixinhas",
            preco: 8.90, // Preço fixo dessa linha sofisticada
            imagem: "/assets/dafaultDoces.png",
            descricao: "O ápice da alta confeitaria: mini tortinhas finas decoradas e coroadas com um mini macaron artesanal.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Frutas Vermelhas com Mini Macaron", detalhe: "Base de frutas vermelhas com mini macaron no topo. (R$ 8,90/un)" },
                { sabor: "Pistache com Mini Macaron", detalhe: "Creme de pistache nobre com mini macaron combinando. (R$ 8,90/un)" }
            ]
        },
        {
            id: 65,
            nome: "Mini Banoffee",
            categoria: "doces-finos",
            subcategoria: "tarteletes-e-caixinhas",
            preco: 5.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Clássica sobremesa de banana com doce de leite e chantilly leve, montada em uma delicada porção individual.",
            requerPersonalizacao: false
        },
        {
            id: 66,
            nome: "Copinhos de Chocolate Clássicos",
            categoria: "doces-finos",
            subcategoria: "tarteletes-e-caixinhas",
            preco: 2.90,
            imagem: "./assets/DocesFinos/copinhoClassico.png",
            descricao: "Copinhos de chocolate nobre com recheios tradicionais e cremosos. Selecione o sabor de sua preferência.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Mousse de Maracujá", detalhe: "Mousse aerada de maracujá azedinho no copinho de chocolate. (R$ 2,90/un)" },
                { sabor: "Mousse de Limão", detalhe: "Mousse leve e refrescante de limão. (R$ 2,90/un)" },
                { sabor: "Brigadeiro Tradicional", detalhe: "O nosso clássico brigadeiro cremoso em formato de copinho. (R$ 2,90/un)" },
                { sabor: "Beijinho (Coco)", detalhe: "Delicioso creme artesanal de coco. (R$ 2,90/un)" },
                { sabor: "Olho de Sogra", detalhe: "Combinação clássica de beijinho de coco com toque de ameixa. (R$ 2,90/un)" },
                { sabor: "Doce de Leite com Nozes", detalhe: "Doce de leite cozido perfeitamente equilibrado com pedacinhos de nozes. (R$ 2,90/un)" }
            ]
        },
        {
            id: 67,
            nome: "Mini Pudim",
            categoria: "doces-finos",
            subcategoria: "mini-sobremesas",
            preco: 3.30, // Atualizado conforme o Word!
            imagem: "./assets/DocesFinos/pudim.png",
            descricao: "O clássico pudim de leite condensado, super cremoso, em uma delicada versão mini para eventos.",
            requerPersonalizacao: false
        },
        {
            id: 68,
            nome: "Mini Quindim",
            categoria: "doces-finos",
            subcategoria: "mini-sobremesas",
            preco: 3.90, // Atualizado conforme o Word!
            imagem: "./assets/DocesFinos/quindim.png",
            descricao: "Doce tradicional à base de gemas e coco, com brilho impecável e textura perfeita.",
            requerPersonalizacao: false
        },
        {
            id: 69,
            nome: "Mini Pavlova",
            categoria: "doces-finos",
            subcategoria: "mini-sobremesas",
            preco: 4.90,
            imagem: "./assets/DocesFinos/miniPavlova.png",
            descricao: "Delicada base de merengue assado, crocante por fora e macia por dentro, recheada com creme leve e frutas.",
            requerPersonalizacao: false
        },
        {
            id: 70,
            nome: "Mini Brownies Especiais",
            categoria: "doces-finos",
            subcategoria: "mini-sobremesas",
            preco: 4.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Brownie artesanal denso e chocolatudo com coberturas nobres. Selecione o seu sabor favorito.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Brigadeiro com Morango", detalhe: "Coberto com nosso brigadeiro gourmet e pedaço de morango fresco." },
                { sabor: "Nutella", detalhe: "Cobertura generosa de pura Nutella." }
            ]
        },
        {
            id: 71,
            nome: "Mini Cheesecake",
            categoria: "doces-finos",
            subcategoria: "mini-sobremesas",
            preco: 6.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Base de biscoito crocante com creme de cream cheese suave e finalizado com calda artesanal de frutas vermelhas.",
            requerPersonalizacao: false
        },
        {
            id: 72,
            nome: "Bombons Artísticos",
            categoria: "doces-finos",
            subcategoria: "bombons",
            preco: 5.90,
            imagem: "./assets/DocesFinos/bombomArtistico.png",
            descricao: "Bombons finos pintados artesanalmente. Selecione o sabor de sua preferência.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Café", detalhe: "Recheio trufado intenso de café." },
                { sabor: "Frutas Vermelhas", detalhe: "Ganache com geleia artesanal cítrica de frutas vermelhas." },
                { sabor: "Abacaxi e Castanha do Pará", detalhe: "Equilíbrio perfeito de fruta com a crocância da castanha." },
                { sabor: "Limão Siciliano", detalhe: "Creme refrescante de limão siciliano." },
                { sabor: "Toffee e Tomilho", detalhe: "Combinação sofisticada de caramelo toffee com infusão de tomilho." },
                { sabor: "Maracujá", detalhe: "Ganache cremosa e azedinha de maracujá." }
            ]
        },
        {
            id: 76,
            nome: "Camafeu de Nozes Tradicional",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            preco: 3.50, // Atualizado conforme o Word!
            imagem: "./assets/DocesFinos/camafeu.png",
            descricao: "O mais tradicional doce fino de casamento feito com nozes selecionadas. Escolha o banho de sua preferência.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Fondant Tradicional", detalhe: "Banhado na clássica calda de açúcar vítrea com pedaço de nozes no topo." },
                { sabor: "Chocolate Branco", detalhe: "Uma roupagem moderna banhada em puro chocolate branco nobre." }
            ]
        },
        {
            id: 77,
            nome: "Petit Verrines Premium",
            categoria: "petit-verrines", // Corrigido para a categoria exclusiva!
            preco: 12.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Sobremesas finas e sofisticadas servidas em elegantes copinhos individuais. Selecione o seu sabor favorito.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Red Velvet", detalhe: "Camadas de bolo aveludado com creme de cream cheese." },
                { sabor: "Torta de Limão", detalhe: "Creme cítrico de limão com base crocante e merengue." },
                { sabor: "Mousse de Queijo e Frutas Vermelhas", detalhe: "Equilíbrio perfeito do queijo com calda artesanal de frutas." },
                { sabor: "Banoffee", detalhe: "O clássico de banana, doce de leite e chantilly." },
                { sabor: "Compota de Cereja", detalhe: "Deliciosa sobremesa com pedaços e calda de cereja." },
                { sabor: "Panacotta", detalhe: "Tradicional receita italiana, leve e espelhada." },
                { sabor: "Mousse de Chocolate, Amarula e Caramelo", detalhe: "Combinação intensa e cremosa com toque de licor." },
                { sabor: "Mousse de Coulis de Maracujá", detalhe: "Mousse aerada finalizada com calda brilhante de maracujá." },
                { sabor: "Sopa de Morangos", detalhe: "Sobremesa refrescante e nobre à base de morangos selecionados." }
            ]
        },
        {
            id: 78,
            nome: "Macarons em Pacote (Tecido e Laço)",
            categoria: "lembrancinhas",
            preco: 9.50,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Delicados macarons embalados em pacote de tecido com um lindo acabamento em laço.",
            requerPersonalizacao: false
        },
        {
            id: 79,
            nome: "Macarons em Caixinha (Acrílico)",
            categoria: "lembrancinhas",
            preco: 16.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Apresentação luxuosa de macarons protegidos em uma caixinha transparente de acrílico.",
            requerPersonalizacao: false
        },
        {
            id: 80,
            nome: "Bem Casado Tradicional & Gourmet",
            categoria: "lembrancinhas",
            preco: 7.90,
            imagem: "./assets/Lembrancinhas/bemCasado.png",
            descricao: "O maior clássico das celebrações. Escolha o recheio perfeito para os seus convidados.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Doce de Leite", detalhe: "O recheio mais tradicional e amado por todos." },
                { sabor: "Pistache", detalhe: "Creme nobre de pistache selecionado." },
                { sabor: "Limão Siciliano", detalhe: "Toque cítrico e refrescante." },
                { sabor: "Chocolate", detalhe: "Ganache cremosa de chocolate nobre." },
                { sabor: "Brigadeiro", detalhe: "O nosso brigadeiro de festa artesanal." },
                { sabor: "Frutas Vermelhas", detalhe: "Geleia artesanal pedaçuda." },
                { sabor: "Red Velvet", detalhe: "Massa vermelha aveludada com recheio especial." }
            ]
        },
        {
            id: 81,
            nome: "Alfajor Artesanal",
            categoria: "lembrancinhas",
            preco: 7.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Massa delicada recheada com muito doce de leite e coberta com uma generosa camada de chocolate.",
            requerPersonalizacao: false
        },
        {
            id: 82,
            nome: "Pão de Mel Gourmet",
            categoria: "lembrancinhas",
            preco: 7.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Pão de mel super fofinho com especiarias, recheado e banhado no chocolate nobre.",
            requerPersonalizacao: false
        },
        {
            id: 83,
            nome: "Caixinha de Medians",
            categoria: "lembrancinhas",
            preco: 15.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Caixinha fina contendo os tradicionais disquinhos de chocolate com frutas secas e nuts por cima.",
            requerPersonalizacao: false
        },
        {
            id: 84,
            nome: "Caixinha de Mini Fudge",
            categoria: "lembrancinhas",
            preco: 15.90,
            imagem: "/assets/dafaultDoces.png",
            descricao: "Caixinha elegante com quadradinhos de fudge de chocolate ultra macios e intensos.",
            requerPersonalizacao: false
        },
        {
            id: 85,
            nome: "Salgados Fritos Clássicos",
            categoria: "salgados",
            subcategoria: "fritos",
            preco: 1.90, // Corrigido para o valor do cento!
            imagem: "/assets/Salgados/fritos.jpg",
            descricao: "Salgadinhos fritos artesanais. * Selecione o seu sabor favorito.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Coxinha", detalhe: "Clássica coxinha de frango desfiado temperado." },
                { sabor: "Risoles de Carne", detalhe: "Massa leve com recheio de carne perfeitamente temperada." },
                { sabor: "Risoles de Queijo e Presunto", detalhe: "O tradicional risoles misto super cremoso." },
                { sabor: "Quibe", detalhe: "Quibe frito tradicional com tempero da casa." },
                { sabor: "Bolinha de Queijo", detalhe: "Favorita das festas, recheada com queijo que derrete." },
                { sabor: "Croquete de Salsicha", detalhe: "Salgadinho crocante recheado com salsicha selecionada." }
            ]
        },
        {
            id: 86,
            nome: "Mini Esfihas Assadas",
            categoria: "salgados",
            subcategoria: "assados",
            preco: 2.15, // Preço por unidade
            imagem: "/assets/defaultSalgado.jpg",
            descricao: "Mini esfihas com massa super macia. Selecione o sabor.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Carne", detalhe: "Tradicional recheio de carne moída temperada." },
                { sabor: "Frango", detalhe: "Frango desfiado suculento." },
                { sabor: "Queijo e Presunto", detalhe: "O clássico recheio misto." }
            ]
        },
        {
            id: 87,
            nome: "Mini Empadas",
            categoria: "salgados",
            subcategoria: "assados",
            preco: 2.15,
            imagem: "/assets/defaultSalgado.jpg",
            descricao: "Empadinhas com aquela massa podre deliciosa que derrete na boca.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Frango", detalhe: "Recheio cremoso de frango." },
                { sabor: "Palmito", detalhe: "Recheio cremoso de palmito selecionado." },
                { sabor: "Frango com Palmito", detalhe: "A combinação perfeita dos dois recheios." }
            ]
        },
        {
            id: 88,
            nome: "Mini Quiches Gourmet",
            categoria: "salgados",
            subcategoria: "assados",
            preco: 1.99,
            imagem: "/assets/Salgados/quiche.jpg",
            descricao: "Delicadas tortinhas abertas com recheio cremoso e sofisticado.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Bacon com Alho Poró", detalhe: "Combinação marcante e deliciosa." },
                { sabor: "Lorraine", detalhe: "O clássico francês com queijo e bacon." },
                { sabor: "Cogumelos", detalhe: "Opção vegetariana sofisticada com mix de cogumelos." },
                { sabor: "Tomate com Brócolis", detalhe: "Leve, colorido e vegetariano." }
            ]
        },
        {
            id: 89,
            nome: "Croissants Folhados",
            categoria: "salgados",
            subcategoria: "assados",
            preco: 2.15,
            imagem: "/assets/Salgados/croissant.jpg",
            descricao: "Massa folhada leve e amanteigada.Selecione a sua opção.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Frango com Requeijão", detalhe: "Recheio super cremoso e suculento." },
                { sabor: "Queijo e Presunto", detalhe: "A clássica combinação perfeita." },
                { sabor: "Chocolate", detalhe: "Opção doce com recheio cremoso de chocolate." }
            ]
        },
        {
            id: 90,
            nome: "Mini Folhados Especiais",
            categoria: "salgados",
            subcategoria: "assados",
            preco: 2.15,
            imagem: "/assets/defaultSalgado.jpg",
            descricao: "Salgadinhos folhados super crocantes. Selecione o sabor.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Frango", detalhe: "Recheio clássico de frango." },
                { sabor: "Carne", detalhe: "Carne moída bem temperada." },
                { sabor: "Palmito", detalhe: "Creme de palmito super suave." },
                { sabor: "Queijo e Presunto", detalhe: "Recheio misto tradicional." },
                { sabor: "Calabresa", detalhe: "Calabresa moída saborosa." }
            ]
        },
        {
            id: 91,
            nome: "Mini Doguinho Assado",
            categoria: "salgados",
            subcategoria: "assados",
            preco: 1.75,
            imagem: "/assets/defaultSalgado.jpg",
            descricao: "Mini salsicha envolta em uma massa de pãozinha assada super macia.",
            requerPersonalizacao: false
        },
        {
            id: 92,
            nome: "Mini Hambúrguer",
            categoria: "salgados",
            subcategoria: "sanduiches",
            preco: 4.90,
            imagem: "/assets/Salgados/hamburguer.jpg",
            descricao: "Mini hambúrguer artesanal completo e suculento, perfeito para festas.", // Atualizado!
            requerPersonalizacao: false
        },
        {
            id: 93,
            nome: "Mini Sanduíche de Frango",
            categoria: "salgados",
            subcategoria: "sanduiches",
            preco: 3.80,
            imagem: "/assets/Salgados/frango.jpg",
            descricao: "Mini sanduíche com recheio cremoso e super temperado de frango desfiado.", // Atualizado!
            requerPersonalizacao: false
        },
        {
            id: 94,
            nome: "Mini Sanduíche de Carne na Cerveja",
            categoria: "salgados",
            subcategoria: "sanduiches",
            preco: 4.90,
            imagem: "/assets/defaultSalgado.jpg",
            descricao: "Sofisticado mini sanduíche recheado com carne cozida lentamente na cerveja, super suculenta.", // Atualizado!
            requerPersonalizacao: false
        },
        {
            id: 95,
            nome: "Mini Sanduíche de Salame",
            categoria: "salgados",
            subcategoria: "sanduiches",
            preco: 4.20,
            imagem: "/assets/defaultSalgado.jpg",
            descricao: "Clássica e saborosa combinação de mini sanduíche com fatias de salame selecionado.", // Atualizado!
            requerPersonalizacao: false
        },
    ];

    // Garantir que todos os produtos tenham uma imagem configurada e válida
    produtos.forEach(p => {
        if (!p.imagem || p.imagem.trim() === "") {
            p.imagem = p.categoria === "salgados" ? "/assets/defaultSalgado.jpg" : "/assets/defaultDoces.png";
        }
    });

    const validCoupons = [{ code: "DESCONTO10", type: "percentage", value: 10 }];
    let carrinho = [],
        tipoEntrega = "delivery",
        appliedCoupon = null;

    // Guarda qual produto o cliente clicou para personalizar
    let produtoSendoPersonalizado = null;

    // Variáveis de estado para filtros
    let categoriaAtiva = "home";
    let subcategoriaAtiva = "all";
    let termoBusca = "";

    // Novas variáveis de estado para taxas e calculadora
    let taxaUrgenciaAtiva = false;
    let taxaUrgenciaValor = 0;
    let sugestoesCalculadas = null;

    const formatarMoeda = (v) =>
        v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    const getScrollbarWidth = () =>
        window.innerWidth - document.documentElement.clientWidth;
    const lockScroll = () => {
        document.body.style.paddingRight = `${getScrollbarWidth()}px`;
        document.body.classList.add("no-scroll");
    };
    const unlockScroll = () => {
        document.body.style.paddingRight = "";
        document.body.classList.remove("no-scroll");
    };
    const abrirCarrinho = () => {
        cartSidebar.classList.add("show");
        cartOverlay.classList.add("show");
        lockScroll();
    };
    const fecharCarrinho = () => {
        cartSidebar.classList.remove("show");
        cartOverlay.classList.remove("show");
        unlockScroll();
    };

    const animacaoVoarParaCarrinho = (productCard) => {
        const productImg = productCard.querySelector(".product-img"),
            imgRect = productImg.getBoundingClientRect(),
            cartRect = cartIcon.getBoundingClientRect(),
            flyingImg = document.createElement("img");
        flyingImg.src = productImg.src;
        flyingImg.classList.add("product-image-fly");
        flyingImg.style.left = `${imgRect.left}px`;
        flyingImg.style.top = `${imgRect.top}px`;
        flyingImg.style.width = `${imgRect.width}px`;
        flyingImg.style.height = `${imgRect.height}px`;
        document.body.appendChild(flyingImg);
        requestAnimationFrame(() => {
            flyingImg.style.left = `${cartRect.left + cartRect.width / 2}px`;
            flyingImg.style.top = `${cartRect.top + cartRect.height / 2}px`;
            flyingImg.style.width = "0px";
            flyingImg.style.height = "0px";
            flyingImg.style.opacity = "0";
        });
        flyingImg.addEventListener("transitionend", () => flyingImg.remove());
    };

    // Mapeamento de categorias e subcategorias para o Mega Dropdown
    const categoriaNomes = {
        "bolos": "Bolos Festivos",
        "doces-tradicionais": "Doces Tradicionais",
        "doces-finos": "Doces Finos",
        "petit-verrines": "Petit Verrines",
        "salgados": "Salgados",
        "cupcakes": "Cupcakes",
        "lembrancinhas": "Lembrancinhas"
    };

    const subcategoryMeta = {
        "all": {
            title: "Ver Tudo",
            desc: "Explore a seleção completa de delícias"
        },
        "tradicionais": {
            title: "Bolos Tradicionais",
            desc: "Massas fofinhas e recheios clássicos cobertos com chantilly"
        },
        "especiais": {
            title: "Bolos Especiais",
            desc: "Combinações refrescantes com frutas frescas selecionadas"
        },
        "gourmet": {
            title: "Bolos Gourmet",
            desc: "Criações requintadas e sabores sofisticados de alta confeitaria"
        },
        "bombons": {
            title: "Bombons Finos",
            desc: "Bombons artísticos e trufados com chocolate nobre"
        },
        "macarons": {
            title: "Macarons",
            desc: "Clássicos macarons franceses crocantes e torres festivas"
        },
        "brigadeiros-finos": {
            title: "Brigadeiros Finos",
            desc: "Brigadeiros gourmet e linha belga Callebaut"
        },
        "doces-especiais": {
            title: "Doces Especiais",
            desc: "Ouriços, camafeus e trouxinhas delicadas para eventos"
        },
        "tarteletes-e-caixinhas": {
            title: "Tarteletes e Caixinhas",
            desc: "Mini tortinhas crocantes e caixinhas recheadas de chocolate"
        },
        "mini-sobremesas": {
            title: "Mini Sobremesas",
            desc: "Pudins, quindins, cheesecakes e pavlovas em porções individuais"
        },
        "fritos": {
            title: "Salgados Fritos",
            desc: "Coxinhas, risoles e bolinhas fritas na hora"
        },
        "assados": {
            title: "Salgados Assados",
            desc: "Esfihas, empadas, quiches e folhados artesanais macios"
        },
        "sanduiches": {
            title: "Mini Sanduíches",
            desc: "Hambúrgueres, sanduíches de frango e carne na cerveja"
        }
    };

    let megaMenuTimeout = null;
    let hoveredCategory = null;

    const getSubcategories = (cat) => {
        if (cat === "home" || cat === "all") return [];
        const produtosDaCat = produtos.filter(p => p.categoria === cat);
        return [...new Set(produtosDaCat.map(p => p.subcategoria).filter(Boolean))];
    };

    const renderizarMegaDropdown = (cat) => {
        const subcats = getSubcategories(cat);
        if (subcats.length === 0) {
            megaDropdown.classList.remove("show");
            return;
        }

        const items = ["all", ...subcats];
        
        megaDropdown.innerHTML = `
            <div class="mega-dropdown-content">
                <span class="mega-dropdown-title">Filtros de ${categoriaNomes[cat] || cat}</span>
                <div class="mega-dropdown-grid">
                    ${items.map(sub => {
                        const meta = subcategoryMeta[sub] || { title: sub, desc: "" };
                        const isActive = subcategoriaAtiva === sub && categoriaAtiva === cat;
                        return `
                            <button class="mega-item ${isActive ? 'active' : ''}" data-subcategory="${sub}">
                                <span class="mega-item-title">${meta.title}</span>
                                ${meta.desc ? `<span class="mega-item-desc">${meta.desc}</span>` : ''}
                            </button>
                        `;
                    }).join('')}
                </div>
            </div>
        `;

        // Event listeners para os itens do mega menu
        megaDropdown.querySelectorAll(".mega-item").forEach(btn => {
            btn.addEventListener("click", () => {
                subcategoriaAtiva = btn.dataset.subcategory;
                categoriaAtiva = cat;
                
                // Marca o botão da categoria correspondente como ativo no menu principal
                categoryBtns.forEach(b => {
                    if (b.dataset.category === cat) {
                        b.classList.add("active");
                    } else {
                        b.classList.remove("active");
                    }
                });

                filtrarEMostrarProdutos();
                megaDropdown.classList.remove("show");
                hoveredCategory = null;
            });
        });
    };

    const showMegaMenu = (cat) => {
        clearTimeout(megaMenuTimeout);
        hoveredCategory = cat;
        renderizarMegaDropdown(cat);
        const subcats = getSubcategories(cat);
        if (subcats.length > 0) {
            megaDropdown.classList.add("show");
        } else {
            megaDropdown.classList.remove("show");
        }
    };

    const hideMegaMenu = () => {
        clearTimeout(megaMenuTimeout);
        megaMenuTimeout = setTimeout(() => {
            megaDropdown.classList.remove("show");
            hoveredCategory = null;
        }, 250);
    };

    // Função para filtrar e mostrar produtos
    const filtrarEMostrarProdutos = () => {
        const secaoQuemSomos = document.getElementById("about");

        if (categoriaAtiva === "home" && termoBusca.trim() === "") {
            document.querySelector(".products-container").innerHTML = "";
            if (secaoQuemSomos) secaoQuemSomos.style.display = "block";
            return;
        }

        if (secaoQuemSomos) secaoQuemSomos.style.display = "none";

        let produtosFiltrados = produtos;

        if (categoriaAtiva !== "all" && categoriaAtiva !== "home") {
            produtosFiltrados = produtosFiltrados.filter(
                (produto) => produto.categoria === categoriaAtiva,
            );

            // Filtro por subcategoria ativa
            if (subcategoriaAtiva !== "all") {
                produtosFiltrados = produtosFiltrados.filter(
                    (produto) => produto.subcategoria === subcategoriaAtiva,
                );
            }
        }

        if (termoBusca.trim() !== "") {
            const termo = termoBusca.toLowerCase();
            produtosFiltrados = produtosFiltrados.filter(
                (produto) =>
                    produto.nome.toLowerCase().includes(termo) ||
                    produto.descricao.toLowerCase().includes(termo),
            );
        }

        const container = document.querySelector(".products-container");
        if (produtosFiltrados.length === 0) {
            container.innerHTML = `
                        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #999;">
                            <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                            <p style="font-size: 1.2rem; font-weight: 600;">Nenhum produto encontrado</p>
                        </div>
                    `;
        } else {
            container.innerHTML = produtosFiltrados
                .map(
                    (p) => {
                        const precoExibir = p.preco !== undefined ? p.preco : p.precoBase;

                        return `
                    <div class="product-card" data-id="${p.id}">
                        <img class="product-img" src="${p.imagem}" alt="${p.nome}">
                        
                        <div class="product-info">
                            <h3 class="product-name">${p.nome}</h3>
                            <p class="product-description">${p.descricao}</p>
                            <p class="product-price">${formatarMoeda(precoExibir)}</p>
                            <button class="product-button">Comprar</button>
                            
                            <span class="canto-card-inf-esq"></span>
                            <span class="canto-card-inf-dir"></span>
                        </div>
                    </div>
                `;
                    }
                )
                .join("");
        }
    };

    const adicionarAoCarrinho = (produtoId, productCard) => {
        if (productCard) animacaoVoarParaCarrinho(productCard);
        const produto = produtos.find((p) => p.id === produtoId);
        if (!produto) return;

        const basePreco = produto.preco !== undefined ? produto.preco : produto.precoBase;

        const itemNoCarrinho = carrinho.find((item) => item.id === String(produto.id));
        if (itemNoCarrinho) {
            itemNoCarrinho.quantidade++;
        } else {
            carrinho.push({
                id: String(produto.id),
                nome: produto.nome,
                preco: basePreco,
                quantidade: 1,
                imagem: produto.imagem
            });
        }
        atualizarCarrinho();
    };

    const alterarQuantidade = (id, acao) => {
        const item = carrinho.find((i) => i.id === id);
        if (!item) return;
        if (acao === "aumentar") item.quantidade++;
        else if (acao === "diminuir") {
            item.quantidade--;
            if (item.quantidade <= 0)
                carrinho = carrinho.filter((i) => i.id !== id);
        }
        atualizarCarrinho();
    };

    // Lógica para consultar horário de Brasília
    const obterHorarioBrasilia = async () => {
        try {
            const response = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo");
            if (response.ok) {
                const data = await response.json();
                return new Date(data.datetime);
            }
        } catch (e) {
            console.warn("Falha ao obter horário da API de Brasília, usando relógio local:", e);
        }
        return new Date();
    };

    // Verifica se a taxa de urgência de 20% deve ser aplicada (< 30 horas)
    const verificarTaxaUrgencia = async () => {
        const prefix = tipoEntrega === "delivery" ? "delivery" : "pickup";
        const dateVal = document.getElementById(`${prefix}-date`).value;
        const timeVal = document.getElementById(`${prefix}-time`).value;

        if (!dateVal || !timeVal) {
            taxaUrgenciaAtiva = false;
            taxaUrgenciaValor = 0;
            atualizarCarrinho();
            return;
        }

        const chosenDate = new Date(`${dateVal}T${timeVal}:00`);
        const currentDate = await obterHorarioBrasilia();

        if (chosenDate < currentDate) {
            alert("Ops! Você selecionou uma data ou hora que já passou. Por favor, escolha um momento no futuro.");
            document.getElementById(`${prefix}-date`).value = "";
            document.getElementById(`${prefix}-time`).value = "";
            taxaUrgenciaAtiva = false;
            taxaUrgenciaValor = 0;
            atualizarCarrinho();
            return;
        }

        const diffMs = chosenDate - currentDate;
        const diffHours = diffMs / (1000 * 60 * 60);

        if (diffHours > 0 && diffHours < 30) {
            taxaUrgenciaAtiva = true;
        } else {
            taxaUrgenciaAtiva = false;
        }
        atualizarCarrinho();
    };

    const atualizarCarrinho = () => {
        if (carrinho.length === 0) {
            cartBody.innerHTML = `<div class="cart-empty"><i class="fa-solid fa-box-open"></i><p>Seu carrinho está vazio.</p></div>`;
        } else {
            cartBody.innerHTML = carrinho
                .map((item) => {
                    const prod = produtos.find(p => p.id === parseInt(item.id));
                    const requiresMinimum = prod && prod.categoria !== "bolos" && prod.id !== 45;
                    const showWarning = requiresMinimum && item.quantidade < 20;
                    const warningTag = showWarning ? `<p style='color: #e11d48; font-size: 0.8rem; font-weight: 700; margin-top: 0.2rem;'>Mínimo: 20 un. por sabor</p>` : '';

                    return `
                        <div class="cart-item" data-id="${item.id}">
                            <img src="${item.imagem}" alt="${item.nome}" class="cart-item-img">
                            <div class="cart-item-info">
                                <h4 class="cart-item-name">${item.nome}</h4>
                                ${warningTag}
                                <p class="cart-item-price">${formatarMoeda(item.preco)}</p>
                                <div class="cart-item-controls">
                                    <button class="quantity-btn" data-action="diminuir">-</button>
                                    <span class="quantity">${item.quantidade}</span>
                                    <button class="quantity-btn" data-action="aumentar">+</button>
                                </div>
                            </div>
                            <button class="remove-item-btn">&times;</button>
                        </div>
                    `;
                })
                .join("");
        }
        const subtotal = carrinho.reduce(
            (acc, item) => acc + item.preco * item.quantidade,
            0,
        );
        let discountAmount = 0;
        if (appliedCoupon && appliedCoupon.type === "percentage")
            discountAmount = subtotal * (appliedCoupon.value / 100);

        // Aplica a taxa de urgência
        if (taxaUrgenciaAtiva && subtotal > 0) {
            taxaUrgenciaValor = subtotal * 0.20;
            urgencyFeeLine.style.display = "flex";
            cartUrgencyFeeElem.textContent = formatarMoeda(taxaUrgenciaValor);
        } else {
            taxaUrgenciaValor = 0;
            urgencyFeeLine.style.display = "none";
        }

        const total = subtotal + taxaUrgenciaValor - discountAmount;
        subtotalElem.textContent = formatarMoeda(subtotal);
        if (discountAmount > 0) {
            cartDiscountElem.textContent = `- ${formatarMoeda(discountAmount)}`;
            discountLineElem.style.display = "flex";
        } else {
            discountLineElem.style.display = "none";
        }
        totalElem.textContent = formatarMoeda(total);
        cartBadge.textContent = carrinho.reduce(
            (acc, item) => acc + item.quantidade,
            0,
        );

        // Verifica a restrição de mínimo de 20 unidades
        let hasMinViolation = false;
        carrinho.forEach(item => {
            const prod = produtos.find(p => p.id === parseInt(item.id));
            if (prod && prod.categoria !== "bolos" && prod.id !== 45 && item.quantidade < 20) {
                hasMinViolation = true;
            }
        });

        if (hasMinViolation) {
            finishOrderBtn.disabled = true;
            finishOrderBtn.innerHTML = "Quantidade mínima não atingida";
        } else {
            finishOrderBtn.disabled = carrinho.length === 0;
            finishOrderBtn.innerHTML = `<i class="fa-brands fa-whatsapp"></i> Finalizar Pedido`;
        }

        if (carrinho.length > 0 && window.innerWidth <= 768) {
            bannerTotalElem.textContent = formatarMoeda(total);
            viewCartBanner.classList.add("show");
        } else {
            viewCartBanner.classList.remove("show");
        }
    };

    const applyCoupon = () => {
        const code = couponInput.value.trim().toUpperCase(),
            foundCoupon = validCoupons.find((c) => c.code === code);
        couponFeedback.classList.remove("success", "error");
        if (foundCoupon) {
            appliedCoupon = foundCoupon;
            couponFeedback.textContent = "Cupom aplicado!";
            couponFeedback.classList.add("success");
        } else {
            appliedCoupon = null;
            couponFeedback.textContent = "Cupom inválido.";
            couponFeedback.classList.add("error");
        }
        atualizarCarrinho();
    };

    const finalizarPedido = async () => {
        let valid = true;
        let fieldsToValidate = [];

        if (tipoEntrega === "delivery") {
            fieldsToValidate = [
                "delivery-name",
                "delivery-phone",
                "delivery-cep",
                "delivery-address",
                "delivery-date",
                "delivery-time",
            ];
        } else {
            fieldsToValidate = ["pickup-name", "pickup-date", "pickup-time"];
        }

        fieldsToValidate.forEach((id) => {
            const el = document.getElementById(id);
            let isFieldValid = el.value.trim() !== "";

            if (id.includes("name") && isFieldValid) {
                if (
                    el.value
                        .trim()
                        .split(" ")
                        .filter((word) => word).length < 2
                ) {
                    isFieldValid = false;
                }
            }

            if (!isFieldValid) {
                el.classList.add("error");
                valid = false;
            } else {
                el.classList.remove("error");
            }
        });

        if (!valid) {
            alert(
                "Por favor, preencha todos os campos obrigatórios marcados em vermelho.",
            );
            return;
        }

        const prefix = tipoEntrega === "delivery" ? "delivery" : "pickup";
        const dateInput = document.getElementById(`${prefix}-date`);
        const timeSelect = document.getElementById(`${prefix}-time`);

        if (dateInput.value && timeSelect.value) {
            const chosenDate = new Date(`${dateInput.value}T${timeSelect.value}:00`);
            const currentDate = await obterHorarioBrasilia();

            if (chosenDate < currentDate) {
                alert("Ops! A data e hora do agendamento não podem ser no passado. Por favor, escolha um momento no futuro.");
                dateInput.classList.add("error");
                timeSelect.classList.add("error");
                return;
            } else {
                dateInput.classList.remove("error");
                timeSelect.classList.remove("error");
            }
        }

        const numeroWhatsApp = "5541998848492";
        const itensPedido = carrinho
            .map((item) => {
                let textoItem = `  - ${item.quantidade}x ${item.nome}`;

                if (item.personalizacao) {
                    Object.entries(item.personalizacao).forEach(([key, val]) => {
                        if (val && val.trim() !== "") {
                            const label = key.charAt(0).toUpperCase() + key.slice(1);
                            textoItem += `\n    └ ${label}: ${val}`;
                        }
                    });
                }
                return textoItem;
            })
            .join("\n");
        const subtotal = carrinho.reduce(
            (acc, item) => acc + item.preco * item.quantidade,
            0,
        );
        let discountAmount = 0;
        if (appliedCoupon) {
            discountAmount = subtotal * (appliedCoupon.value / 100);
        }
        const total = subtotal + (taxaUrgenciaAtiva ? subtotal * 0.20 : 0) - discountAmount;
        let mensagem = `*-- NOVO PEDIDO Atelier Tons do Sabor --*\n\n*Itens:*\n${itensPedido}`;

        if (tipoEntrega === "delivery") {
            const nome = document.getElementById("delivery-name").value;
            const phone = document.getElementById("delivery-phone").value;
            const address = document.getElementById("delivery-address").value;
            const hora = document.getElementById("delivery-time").value;
            const dataInput = document.getElementById("delivery-date").value;

            const [year, month, day] = dataInput.split("-");
            const dataFormatada = `${day}/${month}/${year}`;

            mensagem += `\n\n*Tipo de Pedido:* Entrega\n\n*Nome:* ${nome}\n*Telefone:* ${phone}\n*Endereço:* ${address}\n*Data de Entrega:* ${dataFormatada}\n*Hora de Entrega:* ${hora}`;
        }
        else {
            const nome = document.getElementById("pickup-name").value;
            const dataInput = document.getElementById("pickup-date").value;
            const hora = document.getElementById("pickup-time").value;
            const [year, month, day] = dataInput.split("-");
            const dataFormatada = `${day}/${month}/${year}`;

            mensagem += `\n\n*Tipo de Pedido:* Retirada\n\n*Nome para Retirada:* ${nome}\n*Data Agendada:* ${dataFormatada}\n*Hora Agendada:* ${hora}`;
        }

        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        let paymentInfo = `*Forma de Pagamento:* ${paymentMethod}`;

        if (paymentMethod === "Dinheiro") {
            const troco = document.getElementById("troco-para").value;
            paymentInfo += troco ? ` (Troco para R$ ${troco})` : " (Não precisa de troco)";
        }

        let resumoValores = `\n\n*Resumo do Pedido:*`;
        resumoValores += `\n  Subtotal: ${formatarMoeda(subtotal)}`;

        if (taxaUrgenciaAtiva) {
            resumoValores += `\n  Taxa de Urgência (20%): ${formatarMoeda(subtotal * 0.20)}`;
        }

        if (discountAmount > 0) {
            resumoValores += `\n  Desconto (${appliedCoupon.code}): - ${formatarMoeda(discountAmount)}`;
        }

        resumoValores += `\n  *Total: ${formatarMoeda(total)}*`;

        mensagem += `${resumoValores}\n\n${paymentInfo}`;

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    };

    // ========== MODAL DE CUSTOMIZAÇÃO DINÂMICO ==========
    function abrirModalCustomizacao(productId) {
        const product = produtos.find(p => p.id === productId);
        if (!product) return;

        produtoSendoPersonalizado = product;
        customizationTitle.textContent = product.nome;
        customizationFields.innerHTML = '';

        if (product.tipoPersonalizacao === "sabor") {
            const label = document.createElement('label');
            label.textContent = 'Selecione o Sabor:';

            const grid = document.createElement('div');
            grid.className = 'options-grid';
            grid.id = 'custom-select-sabor-grid';

            product.opcoes.forEach((opcao, idx) => {
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'sabor';
                radio.id = `opt-sabor-${idx}`;
                radio.className = 'radio-pill-input';
                radio.required = true;
                
                let val, text;
                if (typeof opcao === 'string') {
                    val = opcao;
                    text = opcao;
                } else {
                    val = opcao.sabor;
                    text = opcao.sabor;
                    if (opcao.detalhe) {
                        text += ` - ${opcao.detalhe}`;
                    }
                    if (opcao.adicional && opcao.adicional !== 0) {
                        radio.dataset.adicional = opcao.adicional;
                        text += ` (+ ${formatarMoeda(opcao.adicional)})`;
                    }
                }
                radio.value = val;
                if (idx === 0) radio.checked = true;

                const labelOpt = document.createElement('label');
                labelOpt.setAttribute('for', `opt-sabor-${idx}`);
                labelOpt.className = 'radio-pill-label';
                labelOpt.textContent = text;

                grid.appendChild(radio);
                grid.appendChild(labelOpt);
            });

            customizationFields.appendChild(label);
            customizationFields.appendChild(grid);
        }
        else if (product.tipoPersonalizacao === "quantidade-cores") {
            const labelSize = document.createElement('label');
            labelSize.textContent = 'Selecione o Tamanho da Torre:';

            const gridSize = document.createElement('div');
            gridSize.className = 'options-grid';
            gridSize.id = 'custom-select-tamanho-grid';

            product.opcoes.forEach((opcao, idx) => {
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'tamanho';
                radio.id = `opt-tamanho-${idx}`;
                radio.className = 'radio-pill-input';
                radio.required = true;
                radio.value = opcao.sabor;
                if (opcao.adicional !== undefined) {
                    radio.dataset.adicional = opcao.adicional;
                }
                if (idx === 0) radio.checked = true;

                let text = opcao.sabor;
                if (opcao.detalhe) {
                    text += ` (${opcao.detalhe})`;
                }

                const labelOpt = document.createElement('label');
                labelOpt.setAttribute('for', `opt-tamanho-${idx}`);
                labelOpt.className = 'radio-pill-label';
                labelOpt.textContent = text;

                gridSize.appendChild(radio);
                gridSize.appendChild(labelOpt);
            });

            const labelColors = document.createElement('label');
            labelColors.setAttribute('for', 'custom-text-cores');
            labelColors.textContent = 'Digite as cores desejadas (Texto Livre):';

            const inputColors = document.createElement('input');
            inputColors.type = 'text';
            inputColors.id = 'custom-text-cores';
            inputColors.name = 'cores';
            inputColors.placeholder = 'Ex: 25 rosa claro e 25 dourados';
            inputColors.required = true;

            customizationFields.appendChild(labelSize);
            customizationFields.appendChild(gridSize);
            customizationFields.appendChild(labelColors);
            customizationFields.appendChild(inputColors);
        }
        else if (product.tipoPersonalizacao === "artisticos") {
            const labelFormat = document.createElement('label');
            labelFormat.textContent = 'Selecione o Formato:';

            const gridFormat = document.createElement('div');
            gridFormat.className = 'options-grid';
            gridFormat.id = 'custom-select-formato-grid';

            const formatos = product.formatos || ["Redondo", "Quadrado", "Flor"];
            formatos.forEach((f, idx) => {
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'formato';
                radio.id = `opt-formato-${idx}`;
                radio.className = 'radio-pill-input';
                radio.required = true;
                radio.value = f;
                if (idx === 0) radio.checked = true;

                const labelOpt = document.createElement('label');
                labelOpt.setAttribute('for', `opt-formato-${idx}`);
                labelOpt.className = 'radio-pill-label';
                labelOpt.textContent = f;

                gridFormat.appendChild(radio);
                gridFormat.appendChild(labelOpt);
            });

            const labelFlavor = document.createElement('label');
            labelFlavor.textContent = 'Selecione o Sabor:';

            const gridFlavor = document.createElement('div');
            gridFlavor.className = 'options-grid';
            gridFlavor.id = 'custom-select-sabor-grid';

            product.opcoes.forEach((opcao, idx) => {
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'sabor';
                radio.id = `opt-sabor-${idx}`;
                radio.className = 'radio-pill-input';
                radio.required = true;
                radio.value = opcao.sabor;
                if (idx === 0) radio.checked = true;

                let text = opcao.sabor;
                if (opcao.detalhe) {
                    text += ` - ${opcao.detalhe}`;
                }

                const labelOpt = document.createElement('label');
                labelOpt.setAttribute('for', `opt-sabor-${idx}`);
                labelOpt.className = 'radio-pill-label';
                labelOpt.textContent = text;

                gridFlavor.appendChild(radio);
                gridFlavor.appendChild(labelOpt);
            });

            const labelPaint = document.createElement('label');
            labelPaint.setAttribute('for', 'custom-text-pintura');
            labelPaint.textContent = 'Cor da Pintura das Casquinhas (Texto Livre):';

            const inputPaint = document.createElement('input');
            inputPaint.type = 'text';
            inputPaint.id = 'custom-text-pintura';
            inputPaint.name = 'pintura';
            inputPaint.placeholder = 'Ex: Salpicos dourados, base perolada';
            inputPaint.required = true;

            customizationFields.appendChild(labelFormat);
            customizationFields.appendChild(gridFormat);
            customizationFields.appendChild(labelFlavor);
            customizationFields.appendChild(gridFlavor);
            customizationFields.appendChild(labelPaint);
            customizationFields.appendChild(inputPaint);
        }

        if (product.categoria === "bolos") {
            const labelRef = document.createElement('label');
            labelRef.setAttribute('for', 'cake-reference');
            labelRef.textContent = 'Foto de Referência / Inspiração (Opcional):';

            const inputRef = document.createElement('input');
            inputRef.type = 'file';
            inputRef.id = 'cake-reference';
            inputRef.name = 'cakeReference';
            inputRef.accept = 'image/*';

            inputRef.addEventListener('change', async (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const btnConfirm = dynamicCustomizationForm.querySelector('.btn-confirm');
                const originalText = btnConfirm ? btnConfirm.textContent : 'Adicionar ao Carrinho';
                if (btnConfirm) {
                    btnConfirm.disabled = true;
                    btnConfirm.textContent = 'Enviando foto (Aguarde...)...';
                    btnConfirm.style.opacity = '0.7';
                    btnConfirm.style.cursor = 'not-allowed';
                }

                try {
                    const formData = new FormData();
                    formData.append('file', file);

                    const response = await fetch('https://tmpfiles.org/api/v1/upload', {
                        method: 'POST',
                        body: formData
                    });

                    if (!response.ok) throw new Error('Falha no upload');

                    const resData = await response.json();
                    if (resData.status === 'success' && resData.data && resData.data.url) {
                        const directUrl = resData.data.url.replace('https://tmpfiles.org/', 'https://tmpfiles.org/dl/');
                        inputRef.dataset.publicUrl = directUrl;
                    } else {
                        throw new Error('Formato de resposta inválido');
                    }
                } catch (err) {
                    console.error('Erro no upload da imagem:', err);
                    alert('Não foi possível hospedar a foto online. Usaremos o link local temporário.');
                    const localUrl = URL.createObjectURL(file);
                    inputRef.dataset.publicUrl = localUrl;
                } finally {
                    if (btnConfirm) {
                        btnConfirm.disabled = false;
                        btnConfirm.textContent = originalText;
                        btnConfirm.style.opacity = '';
                        btnConfirm.style.cursor = '';
                    }
                }
            });

            const labelColors = document.createElement('label');
            labelColors.setAttribute('for', 'cake-decor-colors');
            labelColors.textContent = 'Quais as cores de preferência para a decoração?:';

            const inputColors = document.createElement('input');
            inputColors.type = 'text';
            inputColors.id = 'cake-decor-colors';
            inputColors.name = 'cakeDecorColors';
            inputColors.placeholder = 'Ex: Rosa chá com detalhes dourados';

            customizationFields.appendChild(labelRef);
            customizationFields.appendChild(inputRef);
            customizationFields.appendChild(labelColors);
            customizationFields.appendChild(inputColors);
        }

        customizationModal.classList.add('show');
        modalMask.classList.add('show');
        lockScroll();
    }

    function fecharModalCustomizacao() {
        customizationModal.classList.remove('show');
        modalMask.classList.remove('show');
        unlockScroll();
        dynamicCustomizationForm.reset();
        produtoSendoPersonalizado = null;
    }

    // ========== CALCULADORA DE FESTA ==========
    function abrirCalculatorModal() {
        calculatorResults.style.display = 'none';
        btnApplySuggestion.style.display = 'none';
        calculatorForm.reset();
        calculatorModal.classList.add('show');
        modalMask.classList.add('show');
        lockScroll();
    }

    function fecharCalculatorModal() {
        calculatorModal.classList.remove('show');
        modalMask.classList.remove('show');
        unlockScroll();
        sugestoesCalculadas = null;
    }

    function calcularSugestoesFesta() {
        const adultos = parseInt(document.getElementById('calc-adults').value) || 0;
        const criancas = parseInt(document.getElementById('calc-children').value) || 0;
        const querBolo = document.getElementById('calc-serve-bolos').checked;
        const querDoces = document.getElementById('calc-serve-doces').checked;
        const querSalgados = document.getElementById('calc-serve-salgados').checked;

        if (adultos === 0 && criancas === 0) {
            alert("Por favor, insira pelo menos 1 adulto ou 1 criança.");
            return;
        }

        if (!querBolo && !querDoces && !querSalgados) {
            alert("Por favor, selecione pelo menos uma opção para servir.");
            return;
        }

        const porcoesTotal = adultos + (criancas * 0.5);

        let boloQtd = 0; // em gramas
        let docesQtd = 0; // em unidades
        let salgadosQtd = 0; // em unidades
        
        let htmlResultados = `<strong>Resultados Recomendados:</strong><ul>`;

        sugestoesCalculadas = {};

        if (querBolo) {
            boloQtd = porcoesTotal * 100;
            const weightKg = boloQtd / 1000;

            const cakeSizes = [
                { id: 15, weight: 1.0, name: "Bolo Tradicional PP", label: "PP" },
                { id: 16, weight: 1.5, name: "Bolo Tradicional P", label: "P" },
                { id: 17, weight: 2.0, name: "Bolo Tradicional M", label: "M" },
                { id: 18, weight: 3.0, name: "Bolo Tradicional G", label: "G" },
                { id: 19, weight: 4.5, name: "Bolo Tradicional GG", label: "GG" }
            ];

            const findClosestCake = (w, excludeGG = false) => {
                let candidates = excludeGG ? cakeSizes.slice(0, 4) : cakeSizes;
                let closest = candidates[0];
                let minDiff = Math.abs(w - closest.weight);
                for (let i = 1; i < candidates.length; i++) {
                    let diff = Math.abs(w - candidates[i].weight);
                    if (diff < minDiff) {
                        minDiff = diff;
                        closest = candidates[i];
                    }
                }
                return closest;
            };

            let bolosSugeridos = [];
            if (weightKg <= 4.5) {
                const closest = findClosestCake(weightKg, false);
                bolosSugeridos.push({ ...closest, quantidade: 1 });
            } else {
                const numGG = Math.floor(weightKg / 4.5);
                const sobra = weightKg - numGG * 4.5;
                
                bolosSugeridos.push({ ...cakeSizes[4], quantidade: numGG });
                
                if (sobra > 0.01) {
                    const closestSobra = findClosestCake(sobra, true);
                    bolosSugeridos.push({ ...closestSobra, quantidade: 1 });
                }
            }

            sugestoesCalculadas.bolos = bolosSugeridos;

            const textParts = bolosSugeridos.map(b => {
                const plural = b.quantidade > 1 ? "Bolos" : "Bolo";
                return `${b.quantidade} ${plural} ${b.label}`;
            });
            
            let boloText = "";
            if (textParts.length === 1) {
                boloText = textParts[0];
            } else if (textParts.length > 1) {
                boloText = textParts.slice(0, -1).join(", ") + " e " + textParts[textParts.length - 1];
            }

            htmlResultados += `<li><strong>Bolo:</strong> Aprox. ${weightKg.toFixed(2)}kg recomendados. Sugerimos ${boloText}.</li>`;
        }

        if (querDoces) {
            docesQtd = Math.ceil((porcoesTotal * 5) / 10) * 10;
            if (docesQtd < 20) {
                docesQtd = 20;
            }
            sugestoesCalculadas.doces = { id: 1, quantidade: docesQtd };
            const pDoce = produtos.find(p => p.id === 1);
            htmlResultados += `<li><strong>Doces:</strong> ${docesQtd} unidades recomendadas. Sugerimos o clássico <em>${pDoce.nome}</em>.</li>`;
        }

        if (querSalgados) {
            salgadosQtd = Math.ceil((porcoesTotal * 12) / 10) * 10;
            if (salgadosQtd < 20) {
                salgadosQtd = 20;
            }
            sugestoesCalculadas.salgados = { id: 91, quantidade: salgadosQtd };
            const pSalgado = produtos.find(p => p.id === 91);
            htmlResultados += `<li><strong>Salgados:</strong> ${salgadosQtd} unidades recomendadas. Sugerimos o <em>${pSalgado.nome}</em>.</li>`;
        }

        htmlResultados += `</ul><p style="margin-top: 0.8rem; font-size: 0.85rem; color: #666;">*Estimativa de porção para crianças calculada como meia porção de adulto.</p>`;
        
        calculatorResults.innerHTML = htmlResultados;
        calculatorResults.style.display = 'block';
        btnApplySuggestion.style.display = 'block';
    }

    function aplicarSugestaoAoCarrinho() {
        if (!sugestoesCalculadas) return;

        if (sugestoesCalculadas.bolos && sugestoesCalculadas.bolos.length > 0) {
            sugestoesCalculadas.bolos.forEach(sugestao => {
                const product = produtos.find(p => p.id === sugestao.id);
                if (product) {
                    const nomeCustom = `${product.nome} (2 Amores)`;
                    const itemId = `${product.id}-${nomeCustom}`;
                    const itemExistente = carrinho.find(item => item.id === itemId);
                    if (itemExistente) {
                        itemExistente.quantidade += sugestao.quantidade;
                    } else {
                        carrinho.push({
                            id: itemId,
                            nome: nomeCustom,
                            preco: product.preco !== undefined ? product.preco : product.precoBase,
                            personalizacao: { sabor: "2 Amores" },
                            quantidade: sugestao.quantidade,
                            imagem: product.imagem
                        });
                    }
                }
            });
        }

        if (sugestoesCalculadas.doces) {
            const product = produtos.find(p => p.id === sugestoesCalculadas.doces.id);
            if (product) {
                const itemId = String(product.id);
                const itemExistente = carrinho.find(item => item.id === itemId);
                if (itemExistente) {
                    itemExistente.quantidade += sugestoesCalculadas.doces.quantidade;
                } else {
                    carrinho.push({
                        id: itemId,
                        nome: product.nome,
                        preco: product.preco,
                        quantidade: sugestoesCalculadas.doces.quantidade,
                        imagem: product.imagem
                    });
                }
            }
        }

        if (sugestoesCalculadas.salgados) {
            const product = produtos.find(p => p.id === sugestoesCalculadas.salgados.id);
            if (product) {
                const itemId = String(product.id);
                const itemExistente = carrinho.find(item => item.id === itemId);
                if (itemExistente) {
                    itemExistente.quantidade += sugestoesCalculadas.salgados.quantidade;
                } else {
                    carrinho.push({
                        id: itemId,
                        nome: product.nome,
                        preco: product.preco,
                        quantidade: sugestoesCalculadas.salgados.quantidade,
                        imagem: product.imagem
                    });
                }
            }
        }

        atualizarCarrinho();
        fecharCalculatorModal();
        abrirCarrinho();
    }

    // --- EVENT LISTENERS GLOBAIS ---
    cartIcon.addEventListener("click", abrirCarrinho);
    closeCartBtn.addEventListener("click", fecharCarrinho);
    cartOverlay.addEventListener("click", fecharCarrinho);
    applyCouponBtn.addEventListener("click", applyCoupon);
    finishOrderBtn.addEventListener("click", finalizarPedido);
    viewCartBannerBtn.addEventListener("click", abrirCarrinho);

    // Event listeners dos modais
    modalMask.addEventListener("click", () => {
        fecharModalCustomizacao();
        fecharCalculatorModal();
    });
    document.querySelector(".customization-box .close").addEventListener("click", fecharModalCustomizacao);

    // Calculadora de Festa listeners
    btnOpenCalculator.addEventListener("click", abrirCalculatorModal);
    document.querySelector("#calculatorModal .close-calc").addEventListener("click", fecharCalculatorModal);
    btnCalculate.addEventListener("click", calcularSugestoesFesta);
    btnApplySuggestion.addEventListener("click", aplicarSugestaoAoCarrinho);

    // Monitora alterações na data/hora para calcular taxa de urgência
    document.getElementById("delivery-date").addEventListener("change", verificarTaxaUrgencia);
    document.getElementById("delivery-time").addEventListener("change", verificarTaxaUrgencia);
    document.getElementById("pickup-date").addEventListener("change", verificarTaxaUrgencia);
    document.getElementById("pickup-time").addEventListener("change", verificarTaxaUrgencia);

    // Envio do Formulário de Customização Dinâmica
    dynamicCustomizationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!produtoSendoPersonalizado) return;

        const formData = new FormData(dynamicCustomizationForm);
        let nomeCustomizado = produtoSendoPersonalizado.nome;
        let personalizacaoObj = {};
        let adicionalPreco = 0;

        const basePreco = produtoSendoPersonalizado.precoBase !== undefined ? produtoSendoPersonalizado.precoBase : produtoSendoPersonalizado.preco;

        if (produtoSendoPersonalizado.tipoPersonalizacao === "sabor") {
            const sabor = formData.get("sabor");
            personalizacaoObj = { sabor };

            const selectedOpt = dynamicCustomizationForm.querySelector("input[name='sabor']:checked");
            if (selectedOpt && selectedOpt.dataset.adicional) {
                adicionalPreco = parseFloat(selectedOpt.dataset.adicional);
            }

            nomeCustomizado = `${produtoSendoPersonalizado.nome} (${sabor})`;
        }
        else if (produtoSendoPersonalizado.tipoPersonalizacao === "quantidade-cores") {
            const tamanho = formData.get("tamanho");
            const cores = formData.get("cores");
            personalizacaoObj = { tamanho, cores };

            const selectedOpt = dynamicCustomizationForm.querySelector("input[name='tamanho']:checked");
            if (selectedOpt && selectedOpt.dataset.adicional) {
                adicionalPreco = parseFloat(selectedOpt.dataset.adicional);
            }

            nomeCustomizado = `${produtoSendoPersonalizado.nome} (${tamanho} - Cores: ${cores})`;
        }
        else if (produtoSendoPersonalizado.tipoPersonalizacao === "artisticos") {
            const formato = formData.get("formato");
            const sabor = formData.get("sabor");
            const pintura = formData.get("pintura");
            personalizacaoObj = { formato, sabor, pintura };

            nomeCustomizado = `${produtoSendoPersonalizado.nome} (${formato} - ${sabor} - Pintura: ${pintura})`;
        }

        if (produtoSendoPersonalizado.categoria === "bolos") {
            const cakeRefInput = document.getElementById("cake-reference");
            const cakeColors = formData.get("cakeDecorColors") || "";
            const publicUrl = cakeRefInput ? cakeRefInput.dataset.publicUrl : "";

            if (publicUrl) {
                personalizacaoObj["foto de Referência"] = publicUrl;
            }
            if (cakeColors) {
                personalizacaoObj["cores de Preferência"] = cakeColors;
            }
        }

        const itemId = `${produtoSendoPersonalizado.id}-${nomeCustomizado}`;
        const itemPersonalizado = {
            id: itemId,
            nome: nomeCustomizado,
            preco: basePreco + adicionalPreco,
            personalizacao: personalizacaoObj,
            quantidade: 1,
            imagem: produtoSendoPersonalizado.imagem
        };

        const itemExistente = carrinho.find(item => item.id === itemPersonalizado.id);
        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push(itemPersonalizado);
        }

        fecharModalCustomizacao();
        atualizarCarrinho();
    });

    // Event listeners para botões de categoria (Mega Menu Hover & Click)
    categoryBtns.forEach((btn) => {
        const cat = btn.dataset.category;
        
        btn.addEventListener("mouseenter", () => {
            if (window.innerWidth > 768) {
                showMegaMenu(cat);
            }
        });

        btn.addEventListener("mouseleave", () => {
            if (window.innerWidth > 768) {
                hideMegaMenu();
            }
        });

        btn.addEventListener("click", (e) => {
            const subcats = getSubcategories(cat);
            
            if (window.innerWidth <= 768) {
                // Mobile: toggle menu if has subcategories
                if (subcats.length > 0) {
                    e.preventDefault();
                    if (megaDropdown.classList.contains("show") && hoveredCategory === cat) {
                        megaDropdown.classList.remove("show");
                        hoveredCategory = null;
                    } else {
                        showMegaMenu(cat);
                    }
                } else {
                    categoriaAtiva = cat;
                    subcategoriaAtiva = "all";
                    categoryBtns.forEach((b) => b.classList.remove("active"));
                    btn.classList.add("active");
                    megaDropdown.classList.remove("show");
                    hoveredCategory = null;
                    filtrarEMostrarProdutos();
                }
            } else {
                // Desktop: click directly filters and hides the menu
                categoriaAtiva = cat;
                subcategoriaAtiva = "all";
                categoryBtns.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                megaDropdown.classList.remove("show");
                hoveredCategory = null;
                filtrarEMostrarProdutos();
            }
        });
    });

    megaDropdown.addEventListener("mouseenter", () => {
        if (window.innerWidth > 768) {
            clearTimeout(megaMenuTimeout);
        }
    });

    megaDropdown.addEventListener("mouseleave", () => {
        if (window.innerWidth > 768) {
            hideMegaMenu();
        }
    });

    // Event listener para campo de busca
    searchInput.addEventListener("input", (e) => {
        termoBusca = e.target.value;
        filtrarEMostrarProdutos();
    });

    // --- MOMENTO 1: INTERCEPTAR O CLIQUE ---
    document
        .querySelector(".products-container")
        .addEventListener("click", (e) => {
            if (e.target.matches(".product-button")) {
                const productCard = e.target.closest(".product-card");
                const id = Number.parseInt(productCard.dataset.id);
                const product = produtos.find((p) => p.id === id);

                if (product && product.requerPersonalizacao) {
                    abrirModalCustomizacao(id);
                } else {
                    adicionarAoCarrinho(id, productCard);
                }
            }
        });

    cartBody.addEventListener("click", (e) => {
        const cartItem = e.target.closest(".cart-item");
        if (cartItem) {
            const id = cartItem.dataset.id;
            if (e.target.matches(".quantity-btn"))
                alterarQuantidade(id, e.target.dataset.action);
            if (e.target.matches(".remove-item-btn")) {
                carrinho = carrinho.filter((i) => i.id !== id);
                atualizarCarrinho();
            }
        }
    });

    deliveryToggleBtns.forEach((btn) =>
        btn.addEventListener("click", () => {
            deliveryToggleBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            tipoEntrega = btn.dataset.option;
            if (tipoEntrega === "delivery") {
                deliveryForm.style.display = "block";
                pickupForm.style.display = "none";
            } else {
                deliveryForm.style.display = "none";
                pickupForm.style.display = "block";
            }
            
            // Monitora taxa de urgência na troca de entrega/retirada
            verificarTaxaUrgencia();
        }),
    );

    document.querySelectorAll('input[name="payment"]').forEach((radio) => {
        radio.addEventListener("change", (e) => {
            trocoContainer.style.display =
                e.target.value === "Dinheiro" ? "block" : "none";
            document
                .querySelectorAll(".payment-option")
                .forEach((label) => label.classList.remove("selected"));
            e.target.closest(".payment-option").classList.add("selected");
        });
    });

    // Remove o erro ao digitar
    document
        .querySelectorAll(
            "#delivery-form-container input[required], #pickup-form-container input[required], #pickup-form-container select[required]",
        )
        .forEach((input) => {
            input.addEventListener("input", () => {
                if (input.value.trim() !== "") input.classList.remove("error");
            });
        });

    // --- INICIALIZAÇÃO ---
    filtrarEMostrarProdutos();
    atualizarCarrinho();
});
