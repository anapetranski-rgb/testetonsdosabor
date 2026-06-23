const initApp = () => {
    
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
    
    const viewCartBanner = document.querySelector(".view-cart-banner");
    const bannerTotalElem = document.getElementById("banner-total");
    const viewCartBannerBtn = document.querySelector(".view-cart-banner-btn");

    
    const categoryBtns = document.querySelectorAll(".category-btn");
    const searchInput = document.querySelector(".search-input");

    
    const customizationModal = document.getElementById('customizationModal');
    const dynamicCustomizationForm = document.getElementById('dynamic-customization');
    const customizationTitle = document.getElementById('customizationTitle');
    const customizationFields = document.getElementById('customizationFields');
    const modalMask = document.getElementById('modalMask');

    
    const megaDropdown = document.getElementById('mega-dropdown');
    const calculatorModal = document.getElementById('calculatorModal');
    const btnOpenCalculator = document.getElementById('btn-open-calculator');
    const calculatorForm = document.getElementById('calculator-form');
    const calculatorResults = document.getElementById('calculator-results');
    const btnCalculate = document.getElementById('btn-calculate');
    const btnApplySuggestion = document.getElementById('btn-apply-suggestion');
    const urgencyFeeLine = document.querySelector('.urgency-fee-line');
    const cartUrgencyFeeElem = document.getElementById('cart-urgency-fee');


    function fecharTodosModais() {
        if (customizationModal) {
            customizationModal.classList.remove('show');
            if (customizationModal.open) customizationModal.close();
        }
        if (calculatorModal) {
            calculatorModal.classList.remove('show');
            if (calculatorModal.open) calculatorModal.close();
        }
        if (modalMask) modalMask.classList.remove('show');
        if (typeof fecharGaleriaModal === "function") fecharGaleriaModal();
        unlockScroll();
    }



    
    const produtos = [
        
        {
            id: 1,
            nome: "Brigadeiro Preto Tradicional",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "./assets/DocesTradicionais/brigadeiroTradicional.webp",
            descricao: "O clássico e amado brigadeiro ao leite. Produto artesanal com aprox. 20g.",
            requerPersonalizacao: false
        },
        {
            id: 2,
            nome: "Brigadeiro Branco Tradicional",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "./assets/DocesTradicionais/brigadeiroBranco.webp",
            descricao: "Brigadeiro branco cremoso tradicional. Produto artesanal com aprox. 20g.",
            requerPersonalizacao: false
        },
        {
            id: 3,
            nome: "Brigadeiro Beijinho",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "./assets/DocesTradicionais/beijinho.webp",
            descricao: "Delicioso doce tradicional de coco ralado e leite condensado.",
            requerPersonalizacao: false
        },
        {
            id: 4,
            nome: "Brigadeiro Cajuzinho",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "./assets/DocesTradicionais/cajuzinho.webp",
            descricao: "Doce tradicional de amendoim com aquele toque clássico.",
            requerPersonalizacao: false
        },
        {
            id: 5,
            nome: "Brigadeiro de Paçoca",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "./assets/DocesTradicionais/paçoca.webp",
            descricao: "Sabor marcante de paçoca em formato de brigadeiro de festa.",
            requerPersonalizacao: false
        },
        {
            id: 6,
            nome: "Brigadeiro Moranguinho",
            categoria: "doces-tradicionais",
            preco: 1.49,
            imagem: "./assets/DocesTradicionais/moranguinho.webp",
            descricao: "O clássico bicho de pé, brigadeiro saborizado de morango.",
            requerPersonalizacao: false
        },

        
        {
            id: 7,
            nome: "Brigadeiro Granullé",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos",
            preco: 2.50,
            imagem: "./assets/DocesFinos/brigadeiroGranule.webp",
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
            subcategoria: "brigadeiros-finos",
            preco: 2.80,
            imagem: "./assets/DocesFinos/doisAmores.webp",
            descricao: "A união perfeita do brigadeiro preto e branco.",
            requerPersonalizacao: false
        },
        {
            id: 9,
            nome: "Seleção de Brigadeiros Especiais",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos",
            preco: 2.10,
            imagem: "./assets/DocesFinos/brigadeiroEspecial.webp",
            descricao: "Brigadeiros gourmet em sabores especiais e receitas autorais.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Churros", detalhe: "Brigadeiro artesanal de canela finalizado com doce de leite." },
                { sabor: "Ninho com Nutella", detalhe: "Brigadeiro de leite Ninho original recheado com Nutella pura." },
                { sabor: "Uva Verde", detalhe: "Uva verde fresca envolvida por brigadeiro branco." },
                { sabor: "Brûlée", detalhe: "Brigadeiro de baunilha com crosta de açúcar maçaricado." },
                { sabor: "Flor de Morango", detalhe: "Brigadeiro de morango (Nesquik) moldado em formato de florzinha." }
            ]
        },
        {
            id: 13,
            nome: "Palha Italiana",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos",
            preco: 1.90,
            imagem: "./assets/DocesFinos/palhaItaliana.webp",
            descricao: "Tradicional pedaço de palha italiana feito com brigadeiro cremoso e biscoito.",
            requerPersonalizacao: false
        },
        {
            id: 15,
            nome: "Bolo Tradicional PP",
            categoria: "bolos",
            subcategoria: "tradicionais",
            preco: 99.00, 
            imagem: "./assets/Bolos/tradicionalPP.webp",
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
            preco: 109.90, 
            imagem: "./assets/Bolos/tradicionalP.webp",
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
            preco: 135.00, 
            imagem: "./assets/Bolos/tradicionalM.webp",
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
            preco: 180.00, 
            imagem: "./assets/Bolos/tradicionalG.webp",
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
            preco: 299.00, 
            imagem: "./assets/Bolos/tradicionalGG.webp",
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
        
        {
            id: 20,
            nome: "Bolo Especial PP",
            categoria: "bolos",
            subcategoria: "especiais",
            preco: 105.00, 
            imagem: "./assets/Bolos/especialPP.webp",
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
            preco: 125.00, 
            imagem: "./assets/Bolos/especialP.webp",
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
            preco: 169.00, 
            imagem: "./assets/Bolos/especialM.webp",
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
            preco: 250.00, 
            imagem: "./assets/Bolos/gourmetG.webp",
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
            preco: 369.00, 
            imagem: "./assets/Bolos/especialGG.webp",
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
        
        {
            id: 25,
            nome: "Bolo Gourmet PP",
            categoria: "bolos",
            subcategoria: "gourmet",
            preco: 115.00, 
            imagem: "./assets/Bolos/gourmetPP.webp",
            descricao: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg). Combinações exclusivas de alta confeitaria.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Ninho com Nutella", detalhe: "Massa de chocolate, brigadeiro de leite em pó e Nutella." },
                { sabor: "Pistache com Frutas Vermelhas", detalhe: "Massa branca, mousse de pistache com pistache triturado e geleia de frutas vermelhas." },
                { sabor: "Brigadeiro Brûlée com Frutas Vermelhas", detalhe: "Massa branca, brigadeiro brûlée (gemas e baunilha) e geleia artesanal de frutas vermelhas." },
                { sabor: "Marta Rocha", detalhe: "Massa branca e de chocolate, recheio de damasco e ameixa, crocante de nozes, creme de nata, suspiro e baba de moça." },
                { sabor: "Pistache e Limão Siciliano", detalhe: "Massa branca, recheio de pistache com pistache triturado e brigadeiro de limão siciliano." },
                { sabor: "Ouro Branco", detalhe: "Massa branca e chocolate, creme de nata, bombom ouro branco triturado e ganache." },
                { sabor: "Strogonoff de Nozes", detalhe: "Massa branca, creme de doce de leite e nozes." },
                { sabor: "Red Velvet", detalhe: "Massa vermelha, creme à base de cream cheese saborizado de limão e baunilha com geleia de frutas vermelhas." }
            ]
        },
        {
            id: 26,
            nome: "Bolo Gourmet P",
            categoria: "bolos",
            subcategoria: "gourmet",
            preco: 155.00, 
            imagem: "./assets/Bolos/gourmetP.webp",
            descricao: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg). Sabores finos e sofisticados.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Ninho com Nutella", detalhe: "Massa de chocolate, brigadeiro de leite em pó e Nutella." },
                { sabor: "Pistache com Frutas Vermelhas", detalhe: "Massa branca, mousse de pistache com pistache triturado e geleia de frutas vermelhas." },
                { sabor: "Brigadeiro Brûlée com Frutas Vermelhas", detalhe: "Massa branca, brigadeiro brûlée (gemas e baunilha) e geleia artesanal de frutas vermelhas." },
                { sabor: "Marta Rocha", detalhe: "Massa branca e de chocolate, recheio de damasco e ameixa, crocante de nozes, creme de nata, suspiro e baba de moça." },
                { sabor: "Pistache e Limão Siciliano", detalhe: "Massa branca, recheio de pistache com pistache triturado e brigadeiro de limão siciliano." },
                { sabor: "Ouro Branco", detalhe: "Massa branca e chocolate, creme de nata, bombom ouro branco triturado e ganache." },
                { sabor: "Strogonoff de Nozes", detalhe: "Massa branca, creme de doce de leite e nozes." },
                { sabor: "Red Velvet", detalhe: "Massa vermelha, creme à base de cream cheese saborizado de limão e baunilha com geleia de frutas vermelhas." }
            ]
        },
        {
            id: 27,
            nome: "Bolo Gourmet M",
            categoria: "bolos",
            subcategoria: "gourmet",
            preco: 225.00, 
            imagem: "./assets/Bolos/gourmetM.webp",
            descricao: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 1,8kg). Criações requintadas.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Ninho com Nutella", detalhe: "Massa de chocolate, brigadeiro de leite em pó e Nutella." },
                { sabor: "Pistache com Frutas Vermelhas", detalhe: "Massa branca, mousse de pistache com pistache triturado e geleia de frutas vermelhas." },
                { sabor: "Brigadeiro Brûlée com Frutas Vermelhas", detalhe: "Massa branca, brigadeiro brûlée (gemas e baunilha) e geleia artesanal de frutas vermelhas." },
                { sabor: "Marta Rocha", detalhe: "Massa branca e de chocolate, recheio de damasco e ameixa, crocante de nozes, creme de nata, suspiro e baba de moça." },
                { sabor: "Pistache e Limão Siciliano", detalhe: "Massa branca, recheio de pistache com pistache triturado e brigadeiro de limão siciliano." },
                { sabor: "Ouro Branco", detalhe: "Massa branca e chocolate, creme de nata, bombom ouro branco triturado e ganache." },
                { sabor: "Strogonoff de Nozes", detalhe: "Massa branca, creme de doce de leite e nozes." },
                { sabor: "Red Velvet", detalhe: "Massa vermelha, creme à base de cream cheese saborizado de limão e baunilha com geleia de frutas vermelhas." }
            ]
        },
        {
            id: 28,
            nome: "Bolo Gourmet G",
            categoria: "bolos",
            subcategoria: "gourmet",
            preco: 305.00, 
            imagem: "./assets/Bolos/gourmetG.webp",
            descricao: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg). Experiência gastronômica marcante.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Ninho com Nutella", detalhe: "Massa de chocolate, brigadeiro de leite em pó e Nutella." },
                { sabor: "Pistache com Frutas Vermelhas", detalhe: "Massa branca, mousse de pistache com pistache triturado e geleia de frutas vermelhas." },
                { sabor: "Brigadeiro Brûlée com Frutas Vermelhas", detalhe: "Massa branca, brigadeiro brûlée (gemas e baunilha) e geleia artesanal de frutas vermelhas." },
                { sabor: "Marta Rocha", detalhe: "Massa branca e de chocolate, recheio de damasco e ameixa, crocante de nozes, creme de nata, suspiro e baba de moça." },
                { sabor: "Pistache e Limão Siciliano", detalhe: "Massa branca, recheio de pistache com pistache triturado e brigadeiro de limão siciliano." },
                { sabor: "Ouro Branco", detalhe: "Massa branca e chocolate, creme de nata, bombom ouro branco triturado e ganache." },
                { sabor: "Strogonoff de Nozes", detalhe: "Massa branca, creme de doce de leite e nozes." },
                { sabor: "Red Velvet", detalhe: "Massa vermelha, creme à base de cream cheese saborizado de limão e baunilha com geleia de frutas vermelhas." }
            ]
        },
        {
            id: 29,
            nome: "Bolo Gourmet GG",
            categoria: "bolos",
            subcategoria: "gourmet",
            preco: 429.00, 
            imagem: "./assets/Bolos/gourmetGG.webp",
            descricao: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg). O ápice do luxo para o seu grande dia.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            permiteUploadInspiracao: true,
            opcoesCoberturaExtra: [],
            opcoes: [
                { sabor: "Ninho com Nutella", detalhe: "Massa de chocolate, brigadeiro de leite em pó e Nutella." },
                { sabor: "Pistache com Frutas Vermelhas", detalhe: "Massa branca, mousse de pistache com pistache triturado e geleia de frutas vermelhas." },
                { sabor: "Brigadeiro Brûlée com Frutas Vermelhas", detalhe: "Massa branca, brigadeiro brûlée (gemas e baunilha) e geleia artesanal de frutas vermelhas." },
                { sabor: "Marta Rocha", detalhe: "Massa branca e de chocolate, recheio de damasco e ameixa, crocante de nozes, creme de nata, suspiro e baba de moça." },
                { sabor: "Pistache e Limão Siciliano", detalhe: "Massa branca, recheio de pistache com pistache triturado e brigadeiro de limão siciliano." },
                { sabor: "Ouro Branco", detalhe: "Massa branca e chocolate, creme de nata, bombom ouro branco triturado e ganache." },
                { sabor: "Strogonoff de Nozes", detalhe: "Massa branca, creme de doce de leite e nozes." },
                { sabor: "Red Velvet", detalhe: "Massa vermelha, creme à base de cream cheese saborizado de limão e baunilha com geleia de frutas vermelhas." }
            ]
        },
        {
            id: 40,
            nome: "Cupcake P",
            categoria: "sobremesas-individuais",
            subcategoria: "cupcakes",
            preco: 4.50, 
            imagem: "./assets/DocesFinos/cupcakeP.webp",
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
            categoria: "sobremesas-individuais",
            subcategoria: "cupcakes",
            preco: 8.50, 
            imagem: "./assets/DocesFinos/cupcakeG.webp",
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
            subcategoria: "bombons-e-macarons", 
            precoBase: 2.90,
            imagem: "./assets/DocesFinos/bombomTradicional.webp",
            descricao: "Deliciosos bombons tradicionais com cobertura fracionada Sicao.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Uva", detalhe: "Uva fresca com brigadeiro branco e casquinha Sicao.", adicional: 0.00 },
                { sabor: "Coco", detalhe: "Recheio cremoso de coco com casquinha Sicao.", adicional: 0.00 },
                { sabor: "Morango", detalhe: "Morango inteiro com brigadeiro e casquinha Sicao.", adicional: 0.20 },
                { sabor: "Abacaxi", detalhe: "Pedacinhos de abacaxi artesanal e casquinha Sicao.", adicional: 0.20 },
                { sabor: "Cereja", detalhe: "Cereja em calda envolta em creme e casquinha Sicao.", adicional: 0.20 },
                { sabor: "Limão", detalhe: "Creme trufado de limão refrescante e casquinha Sicao.", adicional: 0.20 }
            ]
        },
        {
            id: 43,
            nome: "Bombons Finos (Chocolate Nobre)",
            categoria: "doces-finos",
            subcategoria: "bombons-e-macarons", 
            precoBase: 4.90,
            imagem: "./assets/DocesFinos/bombomFino.webp",
            descricao: "Bombons requintados de alta confeitaria produzidos com puro chocolate nobre temperado.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Uva Fino", detalhe: "Uva premium envolta em creme e banhada em chocolate nobre.", adicional: 0.00 },
                { sabor: "Cereja Fino", detalhe: "Cereja inteira com licor e banho de chocolate nobre.", adicional: 0.00 },
                { sabor: "Pirâmide de Café e Caramelo", detalhe: "Sofisticado formato de pirâmide com recheio trufado de café e caramelo nobre.", adicional: 0.00 },
                { sabor: "Morango Tradicional", detalhe: "Morango inteiro selecionado coberto com puro chocolate nobre.", adicional: 0.60 },
                { sabor: "Morango Luxo", detalhe: "A versão mais imponente, decorada e requintada com chocolate nobre.", adicional: 1.60 }
            ]
        },
        {
            id: 44,
            nome: "Macarons Artesanais",
            categoria: "doces-finos",
            subcategoria: "bombons-e-macarons",
            preco: 7.90, 
            imagem: "./assets/DocesFinos/macaronsUnidade.webp",
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
            subcategoria: "bombons-e-macarons",
            precoBase: 425.00, 
            imagem: "./assets/DocesFinos/torreMacarons.webp",
            descricao: "Uma belíssima torre de macarons para sua mesa de doces. Selecione o tamanho desejado e digite as cores de preferência na caixinha de texto. (De acordo com o limite)",
            requerPersonalizacao: true,
            tipoPersonalizacao: "quantidade-cores", 
            permiteObservacaoExtra: true, 
            opcoes: [
                {
                    sabor: "Torre P (Aproximadamente 50 unidades)",
                    detalhe: "Ideal para mini weddings ou comemorações intimistas. Permite até 2 cores.", 
                    adicional: 0.00
                },
                {
                    sabor: "Torre M (Aproximadamente 100 unidades)",
                    detalhe: "Excelente destaque e volume para mesas médias. Permite até 3 cores.", 
                    adicional: 395.00 
                },
                {
                    sabor: "Torre G (Aproximadamente 150 unidades)",
                    detalhe: "Uma verdadeira escultura de alta confeitaria. Permite até 4 cores.", 
                    adicional: 874.00 
                }
            ]
        },
        {
            id: 46,
            nome: "Brigadeiros Callebaut",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos", 
            preco: 6.50,
            imagem: "./assets/DocesFinos/brigadeiroCallebaut.webp",
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
            nome: "Brigadeiros Finos",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos",
            preco: 2.50,
            imagem: "./assets/DocesFinos/brigadeiroFerrero.webp",
            descricao: "Sabores clássicos refinados para festas e eventos.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Limão Siciliano", detalhe: "Delicioso brigadeiro gourmet saborizado de limão siciliano com granullé branco." },
                { sabor: "Caramelo Salgado", detalhe: "Brigadeiro cremoso de caramelo salgado com granullé sabor caramelo." },
                { sabor: "Ferrero", detalhe: "Feito com chocolate nobre e pedacinhos de avelã." }
            ]
        },
        {
            id: 50,
            nome: "Brigadeiro de Pistache Fino",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos",
            preco: 4.30,
            imagem: "./assets/DocesFinos/brigadeiroPistache.webp",
            descricao: "Brigadeiro gourmet feito com pasta pura de pistache selecionado.",
            requerPersonalizacao: false
        },
        {
            id: 51,
            nome: "Brigadeiro de Suspiro com Morangos",
            categoria: "doces-finos",
            subcategoria: "brigadeiros-finos",
            preco: 2.30,
            imagem: "./assets/DocesFinos/suspiroMorango.webp",
            descricao: "Combinação leve e crocante de mini suspiros com o sabor irresistível de morango.",
            requerPersonalizacao: false
        },
        {
            id: 52,
            nome: "Ouriços Artesanais",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            precoBase: 2.30,
            imagem: "./assets/DocesFinos/ouricoAmendoa.webp",
            descricao: "Doces finos modelados com texturas marcantes e crocantes.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Coco", detalhe: "Doce artesanal de coco super cremoso por dentro com casca crocante.", adicional: 0.00 },
                { sabor: "Amêndoa", detalhe: "Envolvido em lâminas crocantes de amêndoa.", adicional: 2.20 },
                { sabor: "Pistache", detalhe: "Recheio premium coberto com pistache triturado.", adicional: 2.60 }
            ]
        },
        {
            id: 55,
            nome: "Seleção de Doces de Frutas & Castanhas",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            precoBase: 2.30,
            imagem: "./assets/DocesFinos/frutasECastanhas.webp",
            descricao: "Doces finos clássicos baseados em frutas nobres, castanhas e fondant.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Olho de Sogra Fino - Ameixa", detalhe: "Beijinho cremoso combinado com ameixa selecionada.", adicional: 0.00 },
                { sabor: "Olho de Sogra Fino - Damasco", detalhe: "Beijinho cremoso combinado com um toque nobre de damasco.", adicional: 0.00 },
                { sabor: "Romeu e Julieta Fino", detalhe: "O casamento perfeito do queijo com a goiabada em roupagem fina.", adicional: 0.20 },
                { sabor: "Morango Cristal", detalhe: "Morango inteiro envolto em brigadeiro e caramelizado com calda de açúcar.", adicional: 1.60 },
                { sabor: "Trouxinha de Nozes e Baba de Moça", detalhe: "Trouxinha fina recheada com estrogonofe de nozes e baba de moça.", adicional: 4.60 },
                { sabor: "Trouxinha Marzipan", detalhe: "Trouxinha ultra premium com autêntica pasta de marzipan de amêndoas.", adicional: 5.20 }
            ]
        },
        {
            id: 60,
            nome: "Mini Mil Folhas",
            categoria: "doces-finos",
            subcategoria: "doces-especiais",
            preco: 5.90,
            imagem: "./assets/DocesFinos/milFolhas.webp",
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
            nome: "Copinhos de Chocolate Artesanais",
            categoria: "doces-finos",
            subcategoria: "copinhos-e-tarteletes",
            precoBase: 2.90,
            imagem: "./assets/DocesFinos/copinhoClassico.webp",
            descricao: "Copinhos de chocolate nobre com recheios cremosos e combinações exclusivas.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Mousse de Maracujá", detalhe: "Mousse aerada de maracujá no copinho.", adicional: 0.00 },
                { sabor: "Mousse de Limão", detalhe: "Mousse leve e refrescante de limão.", adicional: 0.00 },
                { sabor: "Brigadeiro Tradicional", detalhe: "O nosso clássico brigadeiro cremoso.", adicional: 0.00 },
                { sabor: "Beijinho de Coco", detalhe: "Delicioso creme artesanal de coco.", adicional: 0.00 },
                { sabor: "Olho de Sogra", detalhe: "Beijinho de coco com toque de ameixa.", adicional: 0.00 },
                { sabor: "Doce de Leite com Nozes", detalhe: "Doce de leite cozido com pedacinhos de nozes.", adicional: 0.00 },
                { sabor: "Avelã e Brigadeiro", detalhe: "Encontro de brigadeiro artesanal com creme de avelã.", adicional: 1.00 },
                { sabor: "Abacaxi e Manjericão Premium", detalhe: "Combinação refrescante premium.", adicional: 1.60 },
                { sabor: "Avelã Crocante Premium", detalhe: "Recheio cremoso de avelã com toque crocante.", adicional: 2.00 }
            ]
        },
        {
            id: 62,
            nome: "Caixinhas de Chocolate Personalizadas",
            categoria: "doces-finos",
            subcategoria: "copinhos-e-tarteletes",
            precoBase: 4.90, 
            imagem: "./assets/DocesFinos/caixinhaChocolate.webp",
            descricao: "Elegantes caixinhas moldadas em chocolate com recheios finos e decorações sofisticadas. Selecione o seu sabor favorito.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                {
                    sabor: "Doce de Leite com Frutas Vermelhas",
                    detalhe: "Doce de leite cremoso coroado com frutas frescas.",
                    adicional: 0.00 
                },
                {
                    sabor: "Chocolate com Creme e Frutas Vermelhas",
                    detalhe: "Ganache meio amarga com creme e frutas selecionadas.",
                    adicional: 0.00 
                },
                {
                    sabor: "Caixinha Brûllé",
                    detalhe: "Creme brûlée suave com açúcar maçaricado no topo.",
                    adicional: 1.00 
                },
                {
                    sabor: "Physalis",
                    detalhe: "Creme trufado decorado com uma fruta Physalis inteira.",
                    adicional: -0.40 
                },
                {
                    sabor: "Cereja",
                    detalhe: "Recheio trufado com uma linda cereja com cabinho no topo.",
                    adicional: -0.40 
                },
                {
                    sabor: "Damasco",
                    detalhe: "Combinação nobre com recheio artesanal de damasco.",
                    adicional: -0.40 
                }
            ]
        },
        {
            id: 63,
            nome: "Mini Tarteletes Gourmet",
            categoria: "doces-finos",
            subcategoria: "copinhos-e-tarteletes",
            precoBase: 5.90,
            imagem: "./assets/DocesFinos/tarteleteTradicional.webp",
            descricao: "Mini tortas artesanais com massas crocantes, recheios finos e decorações sofisticadas.",
            requerPersonalizacao: true,
            tipoPersonalizacao: "sabor",
            opcoes: [
                { sabor: "Limão Siciliano", detalhe: "Creme de limão siciliano e merengue maçaricado.", adicional: 0.00 },
                { sabor: "Chocolate e Caramelo", detalhe: "Blend de chocolate meio amargo e caramelo.", adicional: 0.00 },
                { sabor: "Frutas Tradicional", detalhe: "Creme de confeiteiro leve com frutas frescas.", adicional: 0.00 },
                { sabor: "Maracujá", detalhe: "Mousse de maracujá com sementinhas decorativas.", adicional: 0.00 },
                { sabor: "Frutas Vermelhas com Mini Macaron Luxo", detalhe: "Base de frutas vermelhas com mini macaron no topo.", adicional: 3.00 },
                { sabor: "Pistache com Mini Macaron Luxo", detalhe: "Creme de pistache nobre com mini macaron no topo.", adicional: 3.00 }
            ]
        },
        {
            id: 65,
            nome: "Mini Banoffee",
            categoria: "sobremesas-individuais",
            subcategoria: "mini-sobremesas",
            preco: 5.90,
            imagem: "./assets/DocesFinos/banoffee.webp",
            descricao: "Clássica sobremesa de banana com doce de leite e chantilly leve, montada em uma delicada porção individual.",
            requerPersonalizacao: false
        },
        {
            id: 67,
            nome: "Mini Pudim",
            categoria: "sobremesas-individuais",
            subcategoria: "mini-sobremesas",
            preco: 3.30, 
            imagem: "./assets/DocesFinos/pudim.webp",
            descricao: "O clássico pudim de leite condensado, super cremoso, em uma delicada versão mini para eventos.",
            requerPersonalizacao: false
        },
        {
            id: 68,
            nome: "Mini Quindim",
            categoria: "sobremesas-individuais",
            subcategoria: "mini-sobremesas",
            preco: 3.90, 
            imagem: "./assets/DocesFinos/quindim.webp",
            descricao: "Doce tradicional à base de gemas e coco, com brilho impecável e textura perfeita.",
            requerPersonalizacao: false
        },
        {
            id: 69,
            nome: "Mini Pavlova",
            categoria: "sobremesas-individuais",
            subcategoria: "mini-sobremesas",
            preco: 4.90,
            imagem: "./assets/DocesFinos/miniPavlova.webp",
            descricao: "Delicada base de merengue assado, crocante por fora e macia por dentro, recheada com creme leve e frutas.",
            requerPersonalizacao: false
        },
        {
            id: 70,
            nome: "Mini Brownies Especiais",
            categoria: "sobremesas-individuais",
            subcategoria: "mini-sobremesas",
            preco: 4.90,
            imagem: "./assets/defaultDoces.webp",
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
            categoria: "sobremesas-individuais",
            subcategoria: "mini-sobremesas",
            preco: 6.90,
            imagem: "./assets/defaultDoces.webp",
            descricao: "Base de biscoito crocante com creme de cream cheese suave e finalizado com calda artesanal de frutas vermelhas.",
            requerPersonalizacao: false
        },
        {
            id: 72,
            nome: "Bombons Artísticos",
            categoria: "doces-finos",
            subcategoria: "bombons-e-macarons",
            preco: 5.90,
            imagem: "./assets/DocesFinos/bombomArtistico.webp",
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
            preco: 3.50, 
            imagem: "./assets/DocesFinos/camafeu.webp",
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
            categoria: "sobremesas-individuais",
            subcategoria: "petit-verrines",
            preco: 12.90,
            imagem: "./assets/defaultDoces.webp",
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
            imagem: "./assets/Lembrancinhas/macaronsPacote.webp",
            descricao: "Delicados macarons embalados em pacote de tecido com um lindo acabamento em laço.",
            requerPersonalizacao: false
        },
        {
            id: 79,
            nome: "Macarons em Caixinha (Acrílico)",
            categoria: "lembrancinhas",
            preco: 16.90,
            imagem: "./assets/Lembrancinhas/lembrancinhas-macaronsCaixinha.webp",
            descricao: "Apresentação luxuosa de macarons protegidos em uma caixinha transparente de acrílico.",
            requerPersonalizacao: false
        },
        {
            id: 80,
            nome: "Bem Casado Tradicional & Gourmet",
            categoria: "lembrancinhas",
            preco: 7.90,
            imagem: "./assets/Lembrancinhas/bemCasado.webp",
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
            imagem: "./assets/defaultLembrancinhas.webp",
            descricao: "Massa delicada recheada com muito doce de leite e coberta com uma generosa camada de chocolate.",
            requerPersonalizacao: false
        },
        {
            id: 82,
            nome: "Pão de Mel Gourmet",
            categoria: "lembrancinhas",
            preco: 7.90,
            imagem: "./assets/defaultLembrancinhas.webp",
            descricao: "Pão de mel super fofinho com especiarias, recheado e banhado no chocolate nobre.",
            requerPersonalizacao: false
        },
        {
            id: 83,
            nome: "Caixinha de Medians",
            categoria: "lembrancinhas",
            preco: 15.90,
            imagem: "./assets/defaultLembrancinhas.webp",
            descricao: "Caixinha fina contendo os tradicionais disquinhos de chocolate com frutas secas e nuts por cima.",
            requerPersonalizacao: false
        },
        {
            id: 84,
            nome: "Caixinha de Mini Fudge",
            categoria: "lembrancinhas",
            preco: 15.90,
            imagem: "./assets/defaultLembrancinhas.webp",
            descricao: "Caixinha elegante com quadradinhos de fudge de chocolate ultra macios e intensos.",
            requerPersonalizacao: false
        },
        {
            id: 85,
            nome: "Salgados Fritos Clássicos",
            categoria: "salgados",
            subcategoria: "fritos",
            preco: 1.90, 
            imagem: "./assets/Salgados/fritos.webp",
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
            preco: 2.15, 
            imagem: "./assets/Salgados/esfihas.webp",
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
            imagem: "./assets/defaultSalgado.webp",
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
            imagem: "./assets/Salgados/quiche.webp",
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
            imagem: "./assets/Salgados/croissant.webp",
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
            imagem: "./assets/defaultSalgado.webp",
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
            imagem: "./assets/defaultSalgado.webp",
            descricao: "Mini salsicha envolta em uma massa de pãozinha assada super macia.",
            requerPersonalizacao: false
        },
        {
            id: 92,
            nome: "Mini Hambúrguer",
            categoria: "salgados",
            subcategoria: "sanduiches",
            preco: 4.90,
            imagem: "./assets/Salgados/hamburguer.webp",
            descricao: "Mini hambúrguer artesanal completo e suculento, perfeito para festas.", 
            requerPersonalizacao: false
        },
        {
            id: 93,
            nome: "Mini Sanduíche de Frango",
            categoria: "salgados",
            subcategoria: "sanduiches",
            preco: 3.80,
            imagem: "./assets/Salgados/frango.webp",
            descricao: "Mini sanduíche com recheio cremoso e super temperado de frango desfiado.", 
            requerPersonalizacao: false
        },
        {
            id: 94,
            nome: "Mini Sanduíche de Carne na Cerveja",
            categoria: "salgados",
            subcategoria: "sanduiches",
            preco: 4.90,
            imagem: "./assets/Salgados/carne.webp",
            descricao: "Sofisticado mini sanduíche recheado com carne cozida lentamente na cerveja, super suculenta.", 
            requerPersonalizacao: false
        },
        {
            id: 95,
            nome: "Mini Sanduíche de Salame",
            categoria: "salgados",
            subcategoria: "sanduiches",
            preco: 4.20,
            imagem: "./assets/Salgados/salame.webp",
            descricao: "Clássica e saborosa combinação de mini sanduíche com fatias de salame selecionado.", 
            requerPersonalizacao: false
        },
    ];

    
    produtos.forEach(p => {
        if (p.categoria === "doces-tradicionais") {
            const reservaImagens = {
                1: "./assets/reserva/brigadeiroTradicional.webp",
                2: "./assets/reserva/brigadeiroBranco.webp",
                3: "./assets/reserva/beijinho.webp",
                4: "./assets/reserva/cajuzinho.webp"
            };
            if (reservaImagens[p.id]) {
                p.imagem = reservaImagens[p.id];
            } else {
                p.imagem = "./assets/defaultDoces.webp";
            }
        } else if (!p.imagem || p.imagem.trim() === "") {
            p.imagem = p.categoria === "salgados" ? "./assets/defaultSalgado.webp" : (p.categoria === "lembrancinhas" ? "./assets/defaultLembrancinhas.webp" : "./assets/defaultDoces.webp");
        }
    });

    const validCoupons = [{ code: "DESCONTO10", type: "percentage", value: 10 }];
    let carrinho = [],
        tipoEntrega = "delivery",
        appliedCoupon = null;

    
    let produtoSendoPersonalizado = null;

    
    let categoriaAtiva = "home";
    let subcategoriaAtiva = "all";
    let termoBusca = "";

    
    let taxaUrgenciaAtiva = false;
    let taxaUrgenciaValor = 0;
    let sugestoesCalculadas = null;

    const escapeHTML = (str) => {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

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

    let lastActiveElement = null;
    const abrirCarrinho = () => {
        lastActiveElement = document.activeElement;
        cartSidebar.classList.add("show");
        cartOverlay.classList.add("show");
        lockScroll();
        history.pushState({ modalAberto: true }, "");
        setTimeout(() => {
            const closeBtn = cartSidebar.querySelector(".close-cart-btn");
            if (closeBtn) closeBtn.focus();
        }, 100);
    };
    const fecharCarrinho = () => {
        cartSidebar.classList.remove("show");
        cartOverlay.classList.remove("show");
        unlockScroll();
        if (lastActiveElement) {
            lastActiveElement.focus();
        }
    };

    const trapCartFocus = (e) => {
        if (e.key !== 'Tab' || !cartSidebar.classList.contains('show')) return;
        const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableElements = Array.from(cartSidebar.querySelectorAll(focusableSelectors))
            .filter(el => !el.disabled && el.offsetWidth > 0 && el.offsetHeight > 0);
        if (focusableElements.length === 0) {
            e.preventDefault();
            return;
        }
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    };
    cartSidebar.addEventListener('keydown', trapCartFocus);

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

    
    const categoriaNomes = {
        "bolos": "Bolos",
        "doces-tradicionais": "Doces Tradicionais",
        "doces-finos": "Doces Finos &amp; Especiais",
        "sobremesas-individuais": "Sobremesas Individuais",
        "salgados": "Salgados",
        "lembrancinhas": "Lembrancinhas &amp; Presentes"
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
        "brigadeiros-finos": {
            title: "Brigadeiros Finos",
            desc: "Brigadeiros gourmet, linha belga Callebaut e sabores especiais"
        },
        "bombons-e-macarons": {
            title: "Bombons &amp; Macarons",
            desc: "Bombons finos, artísticos, trufados e macarons artesanais"
        },
        "doces-especiais": {
            title: "Doces Especiais",
            desc: "Ouriços, camafeus, mil folhas e trouxinhas nobres para eventos"
        },
        "copinhos-e-tarteletes": {
            title: "Copinhos &amp; Tarteletes",
            desc: "Copinhos de chocolate nobre e mini tarteletes gourmet"
        },
        "mini-sobremesas": {
            title: "Mini Sobremesas",
            desc: "Mini pudins, quindins, pavlovas, mini brownies e cheesecake"
        },
        "petit-verrines": {
            title: "Petit Verrines",
            desc: "Elegantes copinhos individuais com cremes e compotas"
        },
        "cupcakes": {
            title: "Cupcakes",
            desc: "Deliciosos mini bolos recheados e decorados de vários tamanhos"
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
                <span class="close-mega" aria-label="Fechar filtros">&times;</span>
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

        const closeMegaBtn = megaDropdown.querySelector(".close-mega");
        if (closeMegaBtn) {
            closeMegaBtn.addEventListener("click", () => {
                megaDropdown.classList.remove("show");
                hoveredCategory = null;
            });
        }

        
        megaDropdown.querySelectorAll(".mega-item").forEach(btn => {
            btn.addEventListener("click", () => {
                subcategoriaAtiva = btn.dataset.subcategory;
                categoriaAtiva = cat;
                
                
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

    const initProductLazyLoading = () => {
        const lazyImages = document.querySelectorAll(".product-img[data-src]");
        if (lazyImages.length === 0) return;
        
        if ("IntersectionObserver" in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute("data-src");
                        if (src) {
                            img.src = src;
                            img.removeAttribute("data-src");
                        }
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: "300px 0px"
            });
            
            lazyImages.forEach(img => imageObserver.observe(img));
        } else {
            lazyImages.forEach(img => {
                const src = img.getAttribute("data-src");
                if (src) {
                    img.src = src;
                    img.removeAttribute("data-src");
                }
            });
        }
    };
    
    const filtrarEMostrarProdutos = () => {
        mostrarProdutosTela(false);
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
                    (p, index) => {
                        const precoExibir = p.preco !== undefined ? p.preco : p.precoBase;
                        const isFirstFew = index < 4;
                        const imgSrc = isFirstFew ? p.imagem : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                        const dataSrc = isFirstFew ? "" : `data-src="${p.imagem}"`;

                         return `
                    <li>
                        <article class="product-card" data-id="${p.id}">
                            <div class="card-image-container">
                                <img class="product-img" src="${imgSrc}" ${dataSrc} alt="${p.nome}" loading="lazy" width="250" height="240">
                                <img class="card-logo-overlay" src="./assets/Bolos/logoProdutos.webp" alt="Logo" loading="lazy">
                            </div>
                            
                            <div class="product-info">
                                <h3 class="product-name">${p.nome}</h3>
                                <p class="product-description">${p.descricao}</p>
                                <p class="product-price">${formatarMoeda(precoExibir)}</p>
                                <button class="product-button">Comprar</button>
                                
                                <span class="canto-card-inf-esq"></span>
                                <span class="canto-card-inf-dir"></span>
                            </div>
                        </article>
                    </li>
                `;
                    }
                )
                .join("");
            
            // Inicializa o carregamento sob demanda para as imagens fora da viewport inicial
            initProductLazyLoading();
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
            const requiresMinimum = produto.categoria !== "bolos" && produto.id !== 45;
            const qtdInicial = requiresMinimum ? 20 : 1;
            carrinho.push({
                id: String(produto.id),
                nome: produto.nome,
                preco: basePreco,
                quantidade: qtdInicial,
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

    
    // Cache local para o horário de Brasília (5 minutos)
    let cachedTimeOffset = null; // offset em ms entre a API de Brasília e a hora local
    let lastTimeCacheTimestamp = 0; // timestamp em ms de quando o cache foi atualizado

    const obterHorarioBrasilia = async () => {
        const now = Date.now();
        if (cachedTimeOffset !== null && (now - lastTimeCacheTimestamp) < 300000) {
            return new Date(now + cachedTimeOffset);
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);
            
            const response = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo", {
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (response.ok) {
                const data = await response.json();
                const apiTime = new Date(data.datetime).getTime();
                const localTime = Date.now();
                cachedTimeOffset = apiTime - localTime;
                lastTimeCacheTimestamp = localTime;
                return new Date(apiTime);
            }
        } catch (e) {
            console.warn("Falha ao obter horário da API de Brasília, usando relógio local:", e);
        }

        if (cachedTimeOffset !== null) {
            return new Date(now + cachedTimeOffset);
        }
        return new Date();
    };

    
    const atualizarOpcoesHorario = (prefix) => {
        const dateEl = document.getElementById(`${prefix}-date`);
        const timeSelect = document.getElementById(`${prefix}-time`);
        if (!dateEl || !timeSelect) return;

        const dateVal = dateEl.value;
        if (!dateVal) {
            Array.from(timeSelect.options).forEach(opt => {
                opt.disabled = false;
                opt.style.display = "";
            });
            return;
        }

        const dateParts = dateVal.split("-");
        const dateObj = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
        const dayOfWeek = dateObj.getDay();

        Array.from(timeSelect.options).forEach(opt => {
            if (opt.value === "") return; // Pula a opção padrão

            const [hours, minutes] = opt.value.split(":").map(Number);
            const timeInMinutes = hours * 60 + minutes;

            if (dayOfWeek === 0) { // Domingo
                // Apenas das 09:00 às 12:00 são válidos
                if (timeInMinutes < 9 * 60 || timeInMinutes > 12 * 60) {
                    opt.disabled = true;
                    opt.style.display = "none";
                } else {
                    opt.disabled = false;
                    opt.style.display = "";
                }
            } else if (dayOfWeek === 1) { // Segunda
                opt.disabled = true;
                opt.style.display = "none";
            } else { // Terça a Sábado
                // Das 09:00 às 19:00
                if (timeInMinutes < 9 * 60 || timeInMinutes > 19 * 60) {
                    opt.disabled = true;
                    opt.style.display = "none";
                } else {
                    opt.disabled = false;
                    opt.style.display = "";
                }
            }
        });

        // Se o valor selecionado agora for inválido, limpa-o
        if (timeSelect.value !== "") {
            const selectedOption = timeSelect.options[timeSelect.selectedIndex];
            if (selectedOption && selectedOption.disabled) {
                timeSelect.value = "";
                timeSelect.classList.add("error");
            }
        }
    };

    const verificarTaxaUrgencia = async () => {
        const prefix = tipoEntrega === "delivery" ? "delivery" : "pickup";
        
        // Atualiza as opções do relógio dinamicamente
        atualizarOpcoesHorario(prefix);

        const dateEl = document.getElementById(`${prefix}-date`);
        const timeEl = document.getElementById(`${prefix}-time`);
        
        const dateVal = dateEl.value;
        const timeVal = timeEl.value;

        // Se data for selecionada, validar Bloqueio de Segunda-feira
        if (dateVal) {
            const dateParts = dateVal.split("-"); // YYYY-MM-DD
            const dateObj = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
            const dayOfWeek = dateObj.getDay(); // 0 = Domingo, 1 = Segunda, 2-6 = Terça a Sábado

            if (dayOfWeek === 1) { // Segunda-feira
                alert("não abrimos na segunda feira, por favor selecione outra data.");
                dateEl.value = "";
                timeEl.value = "";
                dateEl.classList.add("error");
                taxaUrgenciaAtiva = false;
                taxaUrgenciaValor = 0;
                atualizarCarrinho();
                return;
            } else {
                dateEl.classList.remove("error");
            }
        }

        if (!dateVal || !timeVal) {
            taxaUrgenciaAtiva = false;
            taxaUrgenciaValor = 0;
            atualizarCarrinho();
            return;
        }

        // Validação de horário de funcionamento do Atelier
        const dateParts = dateVal.split("-"); // YYYY-MM-DD
        const dateObj = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
        const dayOfWeek = dateObj.getDay(); // 0 = Domingo, 1 = Segunda, 2-6 = Terça a Sábado

        const [hours, minutes] = timeVal.split(":").map(Number);
        const timeInMinutes = hours * 60 + minutes;

        let isTimeValid = true;
        let scheduleRulesText = "";

        if (dayOfWeek === 0) { // Domingo
            // Domingo das 09:00 às 12:00
            if (timeInMinutes < 9 * 60 || timeInMinutes > 12 * 60) {
                isTimeValid = false;
                scheduleRulesText = "aos domingos o horário de atendimento é das 09:00 às 12:00 (apenas com agendamento prévio).";
            }
        } else { // Terça a Sábado (Segunda já foi bloqueada acima)
            // Terça a Sábado das 09:00 às 19:00
            if (timeInMinutes < 9 * 60 || timeInMinutes > 19 * 60) {
                isTimeValid = false;
                scheduleRulesText = "de terça a sábado o horário de atendimento é das 09:00 às 19:00.";
            }
        }

        if (!isTimeValid) {
            alert(`Ops! Horário indisponível: ${scheduleRulesText}\nPor favor, selecione outro horário dentro do limite de funcionamento.`);
            timeEl.value = "";
            timeEl.classList.add("error");
            taxaUrgenciaAtiva = false;
            taxaUrgenciaValor = 0;
            atualizarCarrinho();
            return;
        } else {
            timeEl.classList.remove("error");
        }

        const chosenDate = new Date(`${dateVal}T${timeVal}:00`);
        const currentDate = await obterHorarioBrasilia();

        if (chosenDate < currentDate) {
            alert("Ops! Você selecionou uma data ou hora que já passou. Por favor, escolha um momento no futuro.");
            dateEl.value = "";
            timeEl.value = "";
            dateEl.classList.add("error");
            timeEl.classList.add("error");
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

        if (carrinho.length > 0) {
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
            // Validar regras de funcionamento (Bloqueio de Segunda-feira e limites)
            const dateParts = dateInput.value.split("-");
            const dateObj = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
            const dayOfWeek = dateObj.getDay();

            if (dayOfWeek === 1) { // Segunda-feira
                alert("não abrimos na segunda feira, por favor selecione outra data.");
                dateInput.value = "";
                timeSelect.value = "";
                dateInput.classList.add("error");
                timeSelect.classList.add("error");
                return;
            } else {
                dateInput.classList.remove("error");
            }

            const [hours, minutes] = timeSelect.value.split(":").map(Number);
            const timeInMinutes = hours * 60 + minutes;

            let isTimeValid = true;
            let scheduleRulesText = "";

            if (dayOfWeek === 0) { // Domingo
                if (timeInMinutes < 9 * 60 || timeInMinutes > 12 * 60) {
                    isTimeValid = false;
                    scheduleRulesText = "aos domingos o horário de atendimento é das 09:00 às 12:00 (apenas agendamento).";
                }
            } else { // Terça a Sábado
                if (timeInMinutes < 9 * 60 || timeInMinutes > 19 * 60) {
                    isTimeValid = false;
                    scheduleRulesText = "de terça a sábado o horário de atendimento é das 09:00 às 19:00.";
                }
            }

            if (!isTimeValid) {
                alert(`Ops! Horário indisponível: ${scheduleRulesText}\nPor favor, escolha outro horário.`);
                timeSelect.value = "";
                timeSelect.classList.add("error");
                return;
            } else {
                timeSelect.classList.remove("error");
            }

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
                const wrapper = document.createElement('div');
                wrapper.className = 'radio-pill-wrapper';

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
                    if (opcao.adicional !== undefined && opcao.adicional !== 0) {
                        radio.dataset.adicional = opcao.adicional;
                        if (opcao.adicional < 0) {
                            text += ` (- ${formatarMoeda(Math.abs(opcao.adicional))})`;
                        } else {
                            text += ` (+ ${formatarMoeda(opcao.adicional)})`;
                        }
                    }
                }
                radio.value = val;
                if (idx === 0) radio.checked = true;

                const labelOpt = document.createElement('label');
                labelOpt.setAttribute('for', `opt-sabor-${idx}`);
                labelOpt.className = 'radio-pill-label';
                labelOpt.textContent = text;

                wrapper.appendChild(radio);
                wrapper.appendChild(labelOpt);
                grid.appendChild(wrapper);
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
                const wrapper = document.createElement('div');
                wrapper.className = 'radio-pill-wrapper';

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

                wrapper.appendChild(radio);
                wrapper.appendChild(labelOpt);
                gridSize.appendChild(wrapper);
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
                const wrapper = document.createElement('div');
                wrapper.className = 'radio-pill-wrapper';

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

                wrapper.appendChild(radio);
                wrapper.appendChild(labelOpt);
                gridFormat.appendChild(wrapper);
            });

            const labelFlavor = document.createElement('label');
            labelFlavor.textContent = 'Selecione o Sabor:';

            const gridFlavor = document.createElement('div');
            gridFlavor.className = 'options-grid';
            gridFlavor.id = 'custom-select-sabor-grid';

            product.opcoes.forEach((opcao, idx) => {
                const wrapper = document.createElement('div');
                wrapper.className = 'radio-pill-wrapper';

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

                wrapper.appendChild(radio);
                wrapper.appendChild(labelOpt);
                gridFlavor.appendChild(wrapper);
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

        // Injetar seletor de quantidade no modal
        const requiresMinimum = product.categoria !== "bolos" && product.id !== 45;
        const minVal = requiresMinimum ? 20 : 1;

        const labelQty = document.createElement('label');
        labelQty.setAttribute('for', 'custom-product-qty');
        labelQty.textContent = `Quantidade (Mínimo: ${minVal} un.):`;

        const qtyContainer = document.createElement('div');
        qtyContainer.className = 'custom-quantity-container';

        const btnDec = document.createElement('button');
        btnDec.type = 'button';
        btnDec.className = 'qty-btn';
        btnDec.textContent = '-';

        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.id = 'custom-product-qty';
        qtyInput.name = 'quantidade';
        qtyInput.className = 'qty-input';
        qtyInput.value = minVal;
        qtyInput.min = minVal;

        const btnInc = document.createElement('button');
        btnInc.type = 'button';
        btnInc.className = 'qty-btn';
        btnInc.textContent = '+';

        btnDec.addEventListener('click', () => {
            let current = parseInt(qtyInput.value) || minVal;
            if (current > minVal) {
                qtyInput.value = current - 1;
            }
        });

        btnInc.addEventListener('click', () => {
            let current = parseInt(qtyInput.value) || minVal;
            qtyInput.value = current + 1;
        });

        qtyInput.addEventListener('change', () => {
            let val = parseInt(qtyInput.value) || minVal;
            if (val < minVal) {
                qtyInput.value = minVal;
            }
        });

        qtyContainer.appendChild(btnDec);
        qtyContainer.appendChild(qtyInput);
        qtyContainer.appendChild(btnInc);

        customizationFields.appendChild(labelQty);
        customizationFields.appendChild(qtyContainer);

        customizationModal.showModal();
        customizationModal.dispatchEvent(new Event('show'));
        customizationModal.classList.add('show');
        if (modalMask) modalMask.classList.add('show');
        lockScroll();
        history.pushState({ modalAberto: true }, "");

        setTimeout(() => {
            // Tornar inputs focáveis
            const allFocusable = customizationFields.querySelectorAll(
                'input, select, textarea, button, label'
            );
            
            allFocusable.forEach((el, idx) => {
                if (!el.hasAttribute('tabindex') || el.getAttribute('tabindex') === '-1') {
                    el.setAttribute('tabindex', '0');
                }
                
                // Suporte a teclado para labels e itens customizados focáveis (ENTER/SPACE)
                if (el.tagName === 'LABEL' || el.classList.contains('option-item') || el.classList.contains('customization-option') || el.hasAttribute('data-option')) {
                    if (!el.dataset.keyboardBound) {
                        el.dataset.keyboardBound = "true";
                        el.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                el.click();
                            }
                        });
                    }
                }
            });
            
            // Primeiro elemento recebe foco
            if (allFocusable.length > 0) {
                allFocusable[0].focus();
            }
        }, 50);
    }

    const fecharModalCustomizacao = () => {
        if (customizationModal.open) {
            customizationModal.close();
        }
    };

    customizationModal.addEventListener("close", () => {
        customizationModal.classList.remove('show');
        if (modalMask) modalMask.classList.remove('show');
        unlockScroll();
        dynamicCustomizationForm.reset();
        produtoSendoPersonalizado = null;
    });

    function abrirCalculatorModal() {
        calculatorResults.style.display = 'none';
        btnApplySuggestion.style.display = 'none';
        calculatorForm.reset();
        calculatorModal.showModal();
        calculatorModal.classList.add('show');
        if (modalMask) modalMask.classList.add('show');
        lockScroll();
        history.pushState({ modalAberto: true }, "");

        setTimeout(() => {
            const firstFocusable = calculatorModal.querySelector(
                'input, select, textarea, button, [href], [tabindex]:not([tabindex="-1"])'
            );
            if (firstFocusable) firstFocusable.focus();
        }, 100);
    }

    const fecharCalculatorModal = () => {
        if (calculatorModal.open) {
            calculatorModal.close();
        }
    };

    calculatorModal.addEventListener("close", () => {
        calculatorModal.classList.remove('show');
        if (modalMask) modalMask.classList.remove('show');
        unlockScroll();
        sugestoesCalculadas = null;
    });

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

        let boloQtd = 0; 
        let docesQtd = 0; 
        let salgadosQtd = 0; 
        
        let htmlResultados = `<strong>Resultados Recomendados:</strong><ul>`;

        sugestoesCalculadas = {};

        if (querBolo) {
            const cakeSizes = [
                { id: 15, weight: 1.0, slices: 6, name: "Bolo Tradicional PP", label: "PP" },
                { id: 16, weight: 1.5, slices: 11, name: "Bolo Tradicional P", label: "P" },
                { id: 17, weight: 2.0, slices: 18, name: "Bolo Tradicional M", label: "M" },
                { id: 18, weight: 3.0, slices: 30, name: "Bolo Tradicional G", label: "G" },
                { id: 19, weight: 4.5, slices: 48, name: "Bolo Tradicional GG", label: "GG" }
            ];

            let bolosSugeridos = [];
            if (porcoesTotal <= 48) {
                let closest = cakeSizes.find(c => c.slices >= porcoesTotal);
                if (!closest) closest = cakeSizes[cakeSizes.length - 1];
                bolosSugeridos.push({ ...closest, quantidade: 1 });
            } else {
                const numGG = Math.floor(porcoesTotal / 48);
                const sobra = porcoesTotal % 48;
                
                bolosSugeridos.push({ ...cakeSizes[4], quantidade: numGG });
                
                if (sobra > 0.01) {
                    let closestSobra = cakeSizes.find(c => c.slices >= sobra);
                    if (!closestSobra) closestSobra = cakeSizes[cakeSizes.length - 1];
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

            const totalWeight = bolosSugeridos.reduce((acc, b) => acc + (b.weight * b.quantidade), 0);
            htmlResultados += `<li><strong>Bolo:</strong> Recomendamos o equivalente a ${totalWeight.toFixed(1)}kg de bolo. Sugerimos ${boloText}.</li>`;
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

    
    if (cartIcon) cartIcon.addEventListener("click", abrirCarrinho);
    if (closeCartBtn) closeCartBtn.addEventListener("click", fecharCarrinho);
    if (cartOverlay) cartOverlay.addEventListener("click", fecharCarrinho);
    if (applyCouponBtn) applyCouponBtn.addEventListener("click", applyCoupon);
    if (finishOrderBtn) finishOrderBtn.addEventListener("click", finalizarPedido);
    if (viewCartBannerBtn) viewCartBannerBtn.addEventListener("click", abrirCarrinho);

    if (modalMask) {
        modalMask.addEventListener("click", () => {
            fecharTodosModais();
        });
    }
    if (customizationModal) {
        customizationModal.addEventListener("click", (e) => {
            if (e.target === customizationModal) {
                fecharModalCustomizacao();
            }
        });
    }
    if (calculatorModal) {
        calculatorModal.addEventListener("click", (e) => {
            if (e.target === calculatorModal) {
                fecharCalculatorModal();
            }
        });
    }
    
    const customizationClose = document.querySelector(".customization-box .close");
    if (customizationClose) {
        customizationClose.addEventListener("click", fecharModalCustomizacao);
    }

    if (btnOpenCalculator) btnOpenCalculator.addEventListener("click", abrirCalculatorModal);
    
    const calculatorClose = document.querySelector("#calculatorModal .close-calc");
    if (calculatorClose) {
        calculatorClose.addEventListener("click", fecharCalculatorModal);
    }
    
    if (btnCalculate) btnCalculate.addEventListener("click", calcularSugestoesFesta);
    if (btnApplySuggestion) btnApplySuggestion.addEventListener("click", aplicarSugestaoAoCarrinho);

    const deliveryDateInput = document.getElementById("delivery-date");
    if (deliveryDateInput) deliveryDateInput.addEventListener("change", verificarTaxaUrgencia);
    const deliveryTimeInput = document.getElementById("delivery-time");
    if (deliveryTimeInput) deliveryTimeInput.addEventListener("change", verificarTaxaUrgencia);
    const pickupDateInput = document.getElementById("pickup-date");
    if (pickupDateInput) pickupDateInput.addEventListener("change", verificarTaxaUrgencia);
    const pickupTimeInput = document.getElementById("pickup-time");
    if (pickupTimeInput) pickupTimeInput.addEventListener("change", verificarTaxaUrgencia);

    
    if (dynamicCustomizationForm) {
        dynamicCustomizationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!produtoSendoPersonalizado) return;

            const formData = new FormData(dynamicCustomizationForm);
            let nomeCustomizado = produtoSendoPersonalizado.nome;
            let personalizacaoObj = {};
            let adicionalPreco = 0;
            const quantidade = parseInt(formData.get("quantidade")) || 1;

            const basePreco = produtoSendoPersonalizado.precoBase !== undefined ? produtoSendoPersonalizado.precoBase : produtoSendoPersonalizado.preco;

            if (produtoSendoPersonalizado.tipoPersonalizacao === "sabor") {
                const sabor = escapeHTML(formData.get("sabor"));
                personalizacaoObj = { sabor };

                const selectedOpt = dynamicCustomizationForm.querySelector("input[name='sabor']:checked");
                if (selectedOpt && selectedOpt.dataset.adicional) {
                    adicionalPreco = parseFloat(selectedOpt.dataset.adicional);
                }

                nomeCustomizado = `${produtoSendoPersonalizado.nome} (${sabor})`;
            }
            else if (produtoSendoPersonalizado.tipoPersonalizacao === "quantidade-cores") {
                const tamanho = escapeHTML(formData.get("tamanho"));
                const cores = escapeHTML(formData.get("cores"));
                personalizacaoObj = { tamanho, cores };

                const selectedOpt = dynamicCustomizationForm.querySelector("input[name='tamanho']:checked");
                if (selectedOpt && selectedOpt.dataset.adicional) {
                    adicionalPreco = parseFloat(selectedOpt.dataset.adicional);
                }

                nomeCustomizado = `${produtoSendoPersonalizado.nome} (${tamanho} - Cores: ${cores})`;
            }
            else if (produtoSendoPersonalizado.tipoPersonalizacao === "artisticos") {
                const formato = escapeHTML(formData.get("formato"));
                const sabor = escapeHTML(formData.get("sabor"));
                const pintura = escapeHTML(formData.get("pintura"));
                personalizacaoObj = { formato, sabor, pintura };

                nomeCustomizado = `${produtoSendoPersonalizado.nome} (${formato} - ${sabor} - Pintura: ${pintura})`;
            }

            if (produtoSendoPersonalizado.categoria === "bolos") {
                const cakeRefInput = document.getElementById("cake-reference");
                const cakeColors = escapeHTML(formData.get("cakeDecorColors") || "");
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
                quantidade: quantidade,
                imagem: produtoSendoPersonalizado.imagem
            };

            const itemExistente = carrinho.find(item => item.id === itemPersonalizado.id);
            if (itemExistente) {
                itemExistente.quantidade += quantidade;
            } else {
                carrinho.push(itemPersonalizado);
            }

            fecharModalCustomizacao();
            atualizarCarrinho();
        });
    }

    
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
                    history.pushState({ categoria: cat }, "");
                }
            } else {
                
                categoriaAtiva = cat;
                subcategoriaAtiva = "all";
                categoryBtns.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                megaDropdown.classList.remove("show");
                hoveredCategory = null;
                filtrarEMostrarProdutos();
                history.pushState({ categoria: cat }, "");
            }
        });
    });

    if (megaDropdown) {
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
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            termoBusca = e.target.value;
            if (typeof telaProdutos !== "undefined" && telaProdutos && telaProdutos.classList.contains("hidden")) {
                mostrarProdutosTela(true);
            }
            filtrarEMostrarProdutos();
        });
    }

    const productsContainer = document.querySelector(".products-container");
    if (productsContainer) {
        productsContainer.addEventListener("click", (e) => {
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
    }

    if (cartBody) {
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
    }

    deliveryToggleBtns.forEach((btn) =>
        btn.addEventListener("click", () => {
            deliveryToggleBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            tipoEntrega = btn.dataset.option;
            if (tipoEntrega === "delivery") {
                if (deliveryForm) deliveryForm.style.display = "block";
                if (pickupForm) pickupForm.style.display = "none";
            } else {
                if (deliveryForm) deliveryForm.style.display = "none";
                if (pickupForm) pickupForm.style.display = "block";
            }
            
            
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

    
    document
        .querySelectorAll(
            "#delivery-form-container input[required], #pickup-form-container input[required], #pickup-form-container select[required]",
        )
        .forEach((input) => {
            input.addEventListener("input", () => {
                if (input.value.trim() !== "") input.classList.remove("error");
            });
        });

    
    window.addEventListener("popstate", (e) => {
        // 1. Se houver modal ou carrinho aberto, apenas feche-os
        fecharModalCustomizacao();
        fecharCalculatorModal();
        fecharCarrinho();
        if (typeof fecharGaleriaModal === "function") fecharGaleriaModal();
        
        // 2. Se houver um estado de tela no histórico, verifique se é a galeria ou os produtos:
        if (e.state && e.state.tela === "galeria") {
            mostrarGaleriaTela(false);
        } else {
            mostrarProdutosTela(false);
            
            // Se houver um estado de categoria no histórico, volte para ela. Se não houver, resete para a Home:
            if (e.state && e.state.categoria) {
                categoriaAtiva = e.state.categoria;
                subcategoriaAtiva = "all";
            } else {
                categoriaAtiva = "home";
                subcategoriaAtiva = "all";
            }
            
            // Atualiza a barra de botões ativos para corresponder à categoria
            categoryBtns.forEach(b => {
                if (b.dataset.category === categoriaAtiva) b.classList.add("active");
                else b.classList.remove("active");
            });
            
            filtrarEMostrarProdutos();
        }
    });

    function createFocusTrap(element) {
        if (!element) return;
        if (element.dataset.focusTrapBound) return;
        element.dataset.focusTrapBound = "true";

        element.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;
            
            const focusable = element.querySelectorAll(
                'input, select, textarea, button, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusable.length === 0) return;
            
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        });
    }

    if (customizationModal) {
        customizationModal.addEventListener('show', () => {
            setTimeout(() => createFocusTrap(customizationModal), 100);
        });
    }

    if (customizationModal) createFocusTrap(customizationModal);
    if (calculatorModal) createFocusTrap(calculatorModal);

    // Garantir que ENTER/SPACE nos checkboxes da calculadora mude o estado e não envie o formulário
    if (calculatorModal) {
        const calcCheckboxes = calculatorModal.querySelectorAll('input[type="checkbox"]');
        calcCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    checkbox.click();
                }
            });
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (cartSidebar && cartSidebar.classList.contains('show')) {
                fecharCarrinho();
            }
            fecharTodosModais();
        }
    });

    // --- LOGICA DA GALERIA SPA ---
    const imagensGaleria = [
        "./assets/galeria/evento1.webp",
        "./assets/galeria/evento2.webp",
        "./assets/galeria/evento3.webp",
        "./assets/galeria/evento4.webp",
        "./assets/galeria/evento5.webp",
        "./assets/galeria/evento6.webp",
        "./assets/galeria/evento7.webp",
        "./assets/galeria/evento8.webp",
        "./assets/galeria/evento9.webp"
    ];

    const linkHome = document.getElementById("link-home");
    const linkGaleria = document.getElementById("link-galeria");
    const telaProdutos = document.getElementById("tela-produtos");
    const telaGaleria = document.getElementById("tela-galeria");
    const galeriaContainer = document.getElementById("galeria-container");
    const galeriaModal = document.getElementById("galeria-modal");
    const modalImg = document.getElementById("modal-img");
    const btnCloseModal = document.querySelector(".modal-fechar");
    const btnPrevModal = document.querySelector(".modal-prev");
    const btnNextModal = document.querySelector(".modal-next");

    let currentPhotoIndex = 0;
    let galeriaRenderizada = false;

    function renderizarGaleria() {
        if (galeriaRenderizada) return;
        
        galeriaContainer.innerHTML = imagensGaleria.map((imgSrc, index) => {
            return `
                <li class="galeria-item" data-index="${index}">
                    <img class="galeria-img" src="${imgSrc}" alt="Momento Real ${index + 1}" loading="lazy">
                    <div class="galeria-overlay">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                </li>
            `;
        }).join('');
        
        // Evento de clique para abrir o Lightbox
        const items = galeriaContainer.querySelectorAll(".galeria-item");
        items.forEach(item => {
            item.addEventListener("click", () => {
                const index = parseInt(item.dataset.index, 10);
                abrirGaleriaModal(index);
            });
        });
        
        galeriaRenderizada = true;
    }

    function mostrarGaleriaTela(push = true) {
        if (telaProdutos) telaProdutos.classList.add("hidden");
        if (telaGaleria) telaGaleria.classList.remove("hidden");
        
        // Remove active class from categories and add to gallery link
        categoryBtns.forEach(b => b.classList.remove("active"));
        if (linkGaleria) linkGaleria.classList.add("active");
        
        if (push) {
            history.pushState({ tela: "galeria" }, "");
        }
        
        renderizarGaleria();
        if (push) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    window.mostrarGaleriaTela = mostrarGaleriaTela; // Export to window if needed

    function mostrarProdutosTela(push = true) {
        if (telaGaleria) telaGaleria.classList.add("hidden");
        if (telaProdutos) telaProdutos.classList.remove("hidden");
        
        if (linkGaleria) linkGaleria.classList.remove("active");
        
        // Restore active class on the currently active category button
        categoryBtns.forEach(b => {
            if (b.dataset.category === categoriaAtiva) b.classList.add("active");
            else b.classList.remove("active");
        });
        
        if (push) {
            history.pushState({ categoria: categoriaAtiva }, "");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    window.mostrarProdutosTela = mostrarProdutosTela; // Export to window if needed

    function abrirGaleriaModal(index) {
        currentPhotoIndex = index;
        if (modalImg) {
            modalImg.src = imagensGaleria[currentPhotoIndex];
        }
        if (galeriaModal) {
            galeriaModal.classList.add("show");
            galeriaModal.setAttribute("aria-hidden", "false");
        }
        lockScroll();
        document.addEventListener("keydown", handleModalKeydown);
    }

    function fecharGaleriaModal() {
        if (galeriaModal) {
            galeriaModal.classList.remove("show");
            galeriaModal.setAttribute("aria-hidden", "true");
        }
        unlockScroll();
        document.removeEventListener("keydown", handleModalKeydown);
    }

    window.fecharGaleriaModal = fecharGaleriaModal; // Export to window so hoisting references work cleanly

    function modalAvancar() {
        currentPhotoIndex = (currentPhotoIndex + 1) % imagensGaleria.length;
        if (modalImg) {
            modalImg.src = imagensGaleria[currentPhotoIndex];
        }
    }

    function modalVoltar() {
        currentPhotoIndex = (currentPhotoIndex - 1 + imagensGaleria.length) % imagensGaleria.length;
        if (modalImg) {
            modalImg.src = imagensGaleria[currentPhotoIndex];
        }
    }

    function handleModalKeydown(e) {
        if (e.key === "Escape") {
            fecharGaleriaModal();
        } else if (e.key === "ArrowRight") {
            modalAvancar();
        } else if (e.key === "ArrowLeft") {
            modalVoltar();
        }
    }

    // Event Listeners da Galeria e Lightbox
    if (linkGaleria) {
        linkGaleria.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarGaleriaTela(true);
            renderizarGaleria(); // Força a renderização imediata do grid de fotos
        });
    }

    if (linkHome) {
        linkHome.addEventListener("click", (e) => {
            e.preventDefault();
            // Reseta a categoria ativa para "home" ao clicar na logo para voltar pro início limpo
            categoriaAtiva = "home";
            subcategoriaAtiva = "all";
            mostrarProdutosTela(true);
            filtrarEMostrarProdutos();
        });
    }

    const btnVoltarCardapio = document.getElementById("btn-voltar-cardapio");
    if (btnVoltarCardapio) {
        btnVoltarCardapio.addEventListener("click", () => {
            mostrarProdutosTela(true);
            filtrarEMostrarProdutos();
        });
    }

    if (btnCloseModal) {
        btnCloseModal.addEventListener("click", fecharGaleriaModal);
    }

    if (btnPrevModal) {
        btnPrevModal.addEventListener("click", (e) => {
            e.stopPropagation();
            modalVoltar();
        });
    }

    if (btnNextModal) {
        btnNextModal.addEventListener("click", (e) => {
            e.stopPropagation();
            modalAvancar();
        });
    }

    if (galeriaModal) {
        galeriaModal.addEventListener("click", (e) => {
            if (e.target === galeriaModal) {
                fecharGaleriaModal();
            }
        });
    }

    // Inicialização da tela (SPA) baseada no estado do histórico ou padrão
    if (history.state && history.state.tela === "galeria") {
        mostrarGaleriaTela(false);
    } else {
        mostrarProdutosTela(false);
        filtrarEMostrarProdutos();
    }
    // Adiar o carregamento do iframe do Google Maps (IntersectionObserver) para otimizar performance inicial
    const mapIframe = document.querySelector(".about-map-container iframe");
    if (mapIframe) {
        if ("IntersectionObserver" in window) {
            const mapObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const iframe = entry.target;
                        const src = iframe.getAttribute("data-src");
                        if (src) {
                            iframe.setAttribute("src", src);
                            iframe.removeAttribute("data-src");
                        }
                        observer.unobserve(iframe);
                    }
                });
            }, {
                rootMargin: "300px 0px" // Carrega o mapa quando estiver a 300px de entrar na viewport
            });
            mapObserver.observe(mapIframe);
        } else {
            // Fallback para navegadores sem suporte a IntersectionObserver
            const src = mapIframe.getAttribute("data-src");
            if (src) {
                mapIframe.setAttribute("src", src);
                mapIframe.removeAttribute("data-src");
            }
        }
    }

    atualizarCarrinho();
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}
