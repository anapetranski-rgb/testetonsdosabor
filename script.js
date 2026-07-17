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
        id: 3,
        nome: "Beijinho",
        categoria: "doces-classicos-especiais",
        subcategoria: "doces-classicos",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/beijinho.webp",
        descricao: "Delicioso doce tradicional de coco ralado e leite condensado.",
        requerPersonalizacao: false
        },
        {
        id: 2,
        nome: "Brigadeiro Branco",
        categoria: "doces-classicos-especiais",
        subcategoria: "doces-classicos",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/brigadeiroBranco.webp",
        descricao: "Brigadeiro branco cremoso tradicional. Produto artesanal com aprox. 20g.",
        requerPersonalizacao: false
        },
        {
        id: 5,
        nome: "Brigadeiro de Paçoca",
        categoria: "doces-classicos-especiais",
        subcategoria: "doces-classicos",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/paçoca.webp",
        descricao: "Sabor marcante de paçoca em formato de brigadeiro de festa.",
        requerPersonalizacao: false
        },
        {
        id: 1,
        nome: "Brigadeiro Preto Tradicional",
        categoria: "doces-classicos-especiais",
        subcategoria: "doces-classicos",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/brigadeiroTradicional.webp",
        descricao: "O clássico e amado brigadeiro ao leite. Produto artesanal com aprox. 20g.",
        requerPersonalizacao: false
        },
        {
        id: 4,
        nome: "Cajuzinho",
        categoria: "doces-classicos-especiais",
        subcategoria: "doces-classicos",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/cajuzinho.webp",
        descricao: "Doce tradicional de amendoim com aquele toque clássico.",
        requerPersonalizacao: false
        },
        {
        id: 6,
        nome: "Moranguinho",
        categoria: "doces-classicos-especiais",
        subcategoria: "doces-classicos",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/moranguinho.webp",
        descricao: "O clássico bicho de pé, brigadeiro saborizado de morango.",
        requerPersonalizacao: false
        },
        {
        id: 13,
        nome: "Palha Italiana",
        categoria: "doces-classicos-especiais",
        subcategoria: "doces-classicos",
        preco: 1.90,
        imagem: "./assets/DocesFinos/palhaItaliana.webp",
        descricao: "Tradicional pedaço de palha italiana feito com brigadeiro cremoso e biscoito.",
        requerPersonalizacao: false
        },
        {
        id: 102,
        nome: "Brigadeiro Brûlée",
        categoria: "doces-classicos-especiais",
        subcategoria: "brigadeiros-especiais",
        preco: 2.10,
        imagem: "./assets/DocesFinos/brigadeiroEspecial.webp",
        descricao: "Brigadeiro de baunilha com crosta de açúcar maçaricado.",
        requerPersonalizacao: false
        },
        {
        id: 101,
        nome: "Brigadeiro Churros",
        categoria: "doces-classicos-especiais",
        subcategoria: "brigadeiros-especiais",
        preco: 2.10,
        imagem: "./assets/DocesFinos/brigadeiroEspecial.webp",
        descricao: "Brigadeiro artesanal de canela finalizado com doce de leite.",
        requerPersonalizacao: false
        },
        {
        id: 103,
        nome: "Brigadeiro Dois Amores",
        categoria: "doces-classicos-especiais",
        subcategoria: "brigadeiros-especiais",
        preco: 2.10,
        imagem: "./assets/DocesFinos/doisAmores.webp",
        descricao: "A união perfeita do brigadeiro preto e branco em um único docinho.",
        requerPersonalizacao: false
        },
        {
        id: 104,
        nome: "Brigadeiro Flor de Morango",
        categoria: "doces-classicos-especiais",
        subcategoria: "brigadeiros-especiais",
        preco: 2.10,
        imagem: "./assets/DocesFinos/brigadeiroEspecial.webp",
        descricao: "Brigadeiro de morango (Nesquik) moldado em formato de florzinha.",
        requerPersonalizacao: false
        },
        {
        id: 105,
        nome: "Brigadeiro Ninho com Nutella",
        categoria: "doces-classicos-especiais",
        subcategoria: "brigadeiros-especiais",
        preco: 2.10,
        imagem: "./assets/DocesFinos/brigadeiroEspecial.webp",
        descricao: "Brigadeiro de leite Ninho original recheado com Nutella pura.",
        requerPersonalizacao: false
        },
        {
        id: 106,
        nome: "Brigadeiro Uva Verde",
        categoria: "doces-classicos-especiais",
        subcategoria: "brigadeiros-especiais",
        preco: 2.10,
        imagem: "./assets/DocesFinos/brigadeiroEspecial.webp",
        descricao: "Uva verde fresca envolvida por brigadeiro branco.",
        requerPersonalizacao: false
        },
        {
        id: 508,
        nome: "Copinho de Abacaxi e Manjericão",
        categoria: "doces-classicos-especiais",
        subcategoria: "copinhos",
        preco: 4.50,
        imagem: "./assets/DocesFinos/copinhoClassico.webp",
        descricao: "Copinho de chocolate nobre com recheio refrescante premium de abacaxi e manjericão.",
        requerPersonalizacao: false
        },
        {
        id: 509,
        nome: "Copinho de Avelã Crocante",
        categoria: "doces-classicos-especiais",
        subcategoria: "copinhos",
        preco: 4.90,
        imagem: "./assets/DocesFinos/copinhoClassico.webp",
        descricao: "Copinho de chocolate nobre com recheio cremoso de avelã com toque crocante.",
        requerPersonalizacao: false
        },
        {
        id: 507,
        nome: "Copinho de Avelã e Brigadeiro",
        categoria: "doces-classicos-especiais",
        subcategoria: "copinhos",
        preco: 3.90,
        imagem: "./assets/DocesFinos/copinhoClassico.webp",
        descricao: "Copinho de chocolate nobre com brigadeiro artesanal e creme de avelã.",
        requerPersonalizacao: false
        },
        {
        id: 504,
        nome: "Copinho de Beijinho de Coco",
        categoria: "doces-classicos-especiais",
        subcategoria: "copinhos",
        preco: 2.90,
        imagem: "./assets/DocesFinos/copinhoClassico.webp",
        descricao: "Copinho de chocolate nobre recheado com delicioso creme artesanal de coco.",
        requerPersonalizacao: false
        },
        {
        id: 503,
        nome: "Copinho de Brigadeiro Tradicional",
        categoria: "doces-classicos-especiais",
        subcategoria: "copinhos",
        preco: 2.90,
        imagem: "./assets/DocesFinos/copinhoClassico.webp",
        descricao: "Copinho de chocolate nobre recheado com o nosso clássico brigadeiro cremoso.",
        requerPersonalizacao: false
        },
        {
        id: 506,
        nome: "Copinho de Doce de Leite com Nozes",
        categoria: "doces-classicos-especiais",
        subcategoria: "copinhos",
        preco: 2.90,
        imagem: "./assets/DocesFinos/copinhoClassico.webp",
        descricao: "Copinho de chocolate nobre com doce de leite cozido e pedacinhos de nozes.",
        requerPersonalizacao: false
        },
        {
        id: 502,
        nome: "Copinho de Mousse de Limão",
        categoria: "doces-classicos-especiais",
        subcategoria: "copinhos",
        preco: 2.90,
        imagem: "./assets/DocesFinos/copinhoClassico.webp",
        descricao: "Copinho de chocolate nobre com mousse leve e refrescante de limão.",
        requerPersonalizacao: false
        },
        {
        id: 501,
        nome: "Copinho de Mousse de Maracujá",
        categoria: "doces-classicos-especiais",
        subcategoria: "copinhos",
        preco: 2.90,
        imagem: "./assets/DocesFinos/copinhoClassico.webp",
        descricao: "Copinho de chocolate nobre com mousse aerada de maracujá.",
        requerPersonalizacao: false
        },
        {
        id: 505,
        nome: "Copinho de Olho de Sogra",
        categoria: "doces-classicos-especiais",
        subcategoria: "copinhos",
        preco: 2.90,
        imagem: "./assets/DocesFinos/copinhoClassico.webp",
        descricao: "Copinho de chocolate nobre recheado com beijinho de coco com toque de ameixa.",
        requerPersonalizacao: false
        },
        {
        id: 403,
        nome: "Cupcake de Beijinho",
        categoria: "doces-classicos-especiais",
        subcategoria: "cupcakes-macarons",
        precoBase: 4.50,
        imagem: "./assets/DocesFinos/cupcakeG.webp",
        descricao: "Massa de baunilha, recheio cremoso de coco e finalizado com cobertura de coco ralado. Escolha o tamanho.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-simples",
        opcoes: [
            {
                sabor: "P",
                detalhe: "Tamanho Pequeno (Mini)",
                adicional: 0.00
            },
            {
                sabor: "G",
                detalhe: "Tamanho Grande (Padrão)",
                adicional: 4.00
            }
        ]
        },
        {
        id: 404,
        nome: "Cupcake de Brigadeiro Tradicional",
        categoria: "doces-classicos-especiais",
        subcategoria: "cupcakes-macarons",
        precoBase: 4.50,
        imagem: "./assets/DocesFinos/cupcakeG.webp",
        descricao: "Massa de chocolate com recheio e cobertura do nosso clássico brigadeiro. Escolha o tamanho.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-simples",
        opcoes: [
            {
                sabor: "P",
                detalhe: "Tamanho Pequeno (Mini)",
                adicional: 0.00
            },
            {
                sabor: "G",
                detalhe: "Tamanho Grande (Padrão)",
                adicional: 4.00
            }
        ]
        },
        {
        id: 402,
        nome: "Cupcake de Doce de Leite",
        categoria: "doces-classicos-especiais",
        subcategoria: "cupcakes-macarons",
        precoBase: 4.50,
        imagem: "./assets/DocesFinos/cupcakeG.webp",
        descricao: "Massa de baunilha com recheio de doce de leite cozido e cobertura decorada. Escolha o tamanho.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-simples",
        opcoes: [
            {
                sabor: "P",
                detalhe: "Tamanho Pequeno (Mini)",
                adicional: 0.00
            },
            {
                sabor: "G",
                detalhe: "Tamanho Grande (Padrão)",
                adicional: 4.00
            }
        ]
        },
        {
        id: 401,
        nome: "Cupcake de Nutella",
        categoria: "doces-classicos-especiais",
        subcategoria: "cupcakes-macarons",
        precoBase: 4.50,
        imagem: "./assets/DocesFinos/cupcakeG.webp",
        descricao: "Massa de chocolate fofinha com recheio e cobertura generosa de Nutella pura. Escolha o tamanho.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-simples",
        opcoes: [
            {
                sabor: "P",
                detalhe: "Tamanho Pequeno (Mini)",
                adicional: 0.00
            },
            {
                sabor: "G",
                detalhe: "Tamanho Grande (Padrão)",
                adicional: 4.00
            }
        ]
        },
        {
        id: 441,
        nome: "Macaron de Baunilha",
        categoria: "doces-classicos-especiais",
        subcategoria: "cupcakes-macarons",
        preco: 7.90,
        imagem: "./assets/DocesFinos/macaronsUnidade.webp",
        descricao: "Macaron artesanal recheado com ganache delicada de baunilha de Madagascar.",
        requerPersonalizacao: false
        },
        {
        id: 444,
        nome: "Macaron de Chocolate Meio Amargo",
        categoria: "doces-classicos-especiais",
        subcategoria: "cupcakes-macarons",
        preco: 7.90,
        imagem: "./assets/DocesFinos/macaronsUnidade.webp",
        descricao: "Macaron artesanal recheado com ganache intensa blend de chocolate nobre.",
        requerPersonalizacao: false
        },
        {
        id: 443,
        nome: "Macaron de Frutas Vermelhas",
        categoria: "doces-classicos-especiais",
        subcategoria: "cupcakes-macarons",
        preco: 7.90,
        imagem: "./assets/DocesFinos/macaronsUnidade.webp",
        descricao: "Macaron artesanal recheado com geleia artesanal cítrica de frutas vermelhas selecionadas.",
        requerPersonalizacao: false
        },
        {
        id: 445,
        nome: "Macaron de Limão Siciliano",
        categoria: "doces-classicos-especiais",
        subcategoria: "cupcakes-macarons",
        preco: 7.90,
        imagem: "./assets/DocesFinos/macaronsUnidade.webp",
        descricao: "Macaron artesanal recheado com creme refrescante e cítrico de limão siciliano.",
        requerPersonalizacao: false
        },
        {
        id: 442,
        nome: "Macaron de Pistache",
        categoria: "doces-classicos-especiais",
        subcategoria: "cupcakes-macarons",
        preco: 7.90,
        imagem: "./assets/DocesFinos/macaronsUnidade.webp",
        descricao: "Macaron artesanal recheado com creme cremoso de pasta artesanal de pistache nobre.",
        requerPersonalizacao: false
        },
        {
        id: 491,
        nome: "Brigadeiro de Suspiro com Morangos",
        categoria: "doces-classicos-especiais",
        subcategoria: "frutas-castanhas",
        preco: 2.30,
        imagem: "./assets/DocesFinos/frutasECastanhas.webp",
        descricao: "Combinação leve e crocante de mini suspiros com sabor irresistível de morango.",
        requerPersonalizacao: false
        },
        {
        id: 495,
        nome: "Morango Cristal",
        categoria: "doces-classicos-especiais",
        subcategoria: "frutas-castanhas",
        preco: 3.90,
        imagem: "./assets/DocesFinos/frutasECastanhas.webp",
        descricao: "Morango inteiro envolto em brigadeiro e caramelizado com calda de açúcar vítrea.",
        requerPersonalizacao: false
        },
        {
        id: 492,
        nome: "Olho de Sogra com Ameixa",
        categoria: "doces-classicos-especiais",
        subcategoria: "frutas-castanhas",
        preco: 2.30,
        imagem: "./assets/DocesFinos/frutasECastanhas.webp",
        descricao: "Beijinho cremoso combinado com ameixa selecionada de forma tradicional.",
        requerPersonalizacao: false
        },
        {
        id: 493,
        nome: "Olho de Sogra com Damasco",
        categoria: "doces-classicos-especiais",
        subcategoria: "frutas-castanhas",
        preco: 2.30,
        imagem: "./assets/DocesFinos/frutasECastanhas.webp",
        descricao: "Beijinho cremoso combinado com o toque nobre de damasco selecionado.",
        requerPersonalizacao: false
        },
        {
        id: 494,
        nome: "Romeu e Julieta",
        categoria: "doces-classicos-especiais",
        subcategoria: "frutas-castanhas",
        preco: 2.50,
        imagem: "./assets/DocesFinos/frutasECastanhas.webp",
        descricao: "O casamento perfeito do queijo com a goiabada em uma roupagem fina.",
        requerPersonalizacao: false
        },
        {
        id: 497,
        nome: "Trouxinha de Marzipan",
        categoria: "doces-classicos-especiais",
        subcategoria: "frutas-castanhas",
        preco: 7.50,
        imagem: "./assets/DocesFinos/frutasECastanhas.webp",
        descricao: "Trouxinha ultra premium com autêntica pasta de marzipan de amêndoas doces.",
        requerPersonalizacao: false
        },
        {
        id: 496,
        nome: "Trouxinha de Nozes e Baba de Moça",
        categoria: "doces-classicos-especiais",
        subcategoria: "frutas-castanhas",
        preco: 6.90,
        imagem: "./assets/DocesFinos/frutasECastanhas.webp",
        descricao: "Trouxinha fina recheada com estrogonofe de nozes e baba de moça artesanal.",
        requerPersonalizacao: false
        },
        {
        id: 513,
        nome: "Caixinha Brûlée",
        categoria: "doces-finos-artisticos",
        subcategoria: "caixinhas-ouricos",
        preco: 5.90,
        imagem: "./assets/DocesFinos/caixinhaChocolate.webp",
        descricao: "Elegantes caixinhas moldadas em chocolate com creme brûlée suave com açúcar maçaricado no topo.",
        requerPersonalizacao: false
        },
        {
        id: 515,
        nome: "Caixinha de Cereja",
        categoria: "doces-finos-artisticos",
        subcategoria: "caixinhas-ouricos",
        preco: 4.50,
        imagem: "./assets/DocesFinos/caixinhaChocolate.webp",
        descricao: "Elegantes caixinhas de chocolate com recheio trufado com uma cereja com cabinho no topo.",
        requerPersonalizacao: false
        },
        {
        id: 512,
        nome: "Caixinha de Chocolate com Creme e Frutas Vermelhas",
        categoria: "doces-finos-artisticos",
        subcategoria: "caixinhas-ouricos",
        preco: 4.90,
        imagem: "./assets/DocesFinos/caixinhaChocolate.webp",
        descricao: "Elegantes caixinhas moldadas em chocolate com ganache meio amarga cremoso com creme e frutas selecionadas.",
        requerPersonalizacao: false
        },
        {
        id: 516,
        nome: "Caixinha de Damasco",
        categoria: "doces-finos-artisticos",
        subcategoria: "caixinhas-ouricos",
        preco: 4.50,
        imagem: "./assets/DocesFinos/caixinhaChocolate.webp",
        descricao: "Elegantes caixinhas de chocolate em combinação nobre com recheio artesanal de damasco.",
        requerPersonalizacao: false
        },
        {
        id: 511,
        nome: "Caixinha de Doce de Leite com Frutas Vermelhas",
        categoria: "doces-finos-artisticos",
        subcategoria: "caixinhas-ouricos",
        preco: 4.90,
        imagem: "./assets/DocesFinos/caixinhaChocolate.webp",
        descricao: "Elegantes caixinhas moldadas em chocolate com recheio cremoso de doce de leite coroado com frutas vermelhas frescas.",
        requerPersonalizacao: false
        },
        {
        id: 514,
        nome: "Caixinha de Physalis",
        categoria: "doces-finos-artisticos",
        subcategoria: "caixinhas-ouricos",
        preco: 4.50,
        imagem: "./assets/DocesFinos/caixinhaChocolate.webp",
        descricao: "Elegantes caixinhas moldadas em chocolate com creme trufado e decorada com fruta Physalis inteira.",
        requerPersonalizacao: false
        },
        {
        id: 482,
        nome: "Ouriço de Amêndoa",
        categoria: "doces-finos-artisticos",
        subcategoria: "caixinhas-ouricos",
        preco: 4.50,
        imagem: "./assets/DocesFinos/ouricoAmendoa.webp",
        descricao: "Doce fino de amêndoa envolvido em lâminas crocantes de amêndoa dourada.",
        requerPersonalizacao: false
        },
        {
        id: 481,
        nome: "Ouriço de Coco",
        categoria: "doces-finos-artisticos",
        subcategoria: "caixinhas-ouricos",
        preco: 2.30,
        imagem: "./assets/DocesFinos/ouricoAmendoa.webp",
        descricao: "Doce artesanal de coco super cremoso por dentro com casca crocante de coco.",
        requerPersonalizacao: false
        },
        {
        id: 483,
        nome: "Ouriço de Pistache",
        categoria: "doces-finos-artisticos",
        subcategoria: "caixinhas-ouricos",
        preco: 4.90,
        imagem: "./assets/DocesFinos/ouricoAmendoa.webp",
        descricao: "Doce fino premium de pistache coberto com pistache selecionado triturado.",
        requerPersonalizacao: false
        },
        {
        id: 424,
        nome: "Bombom de Abacaxi",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-tradicionais",
        preco: 3.10,
        imagem: "./assets/DocesFinos/bombomTradicional.webp",
        descricao: "Pedacinhos de abacaxi artesanal e casquinha de chocolate fracionado Sicao.",
        requerPersonalizacao: false
        },
        {
        id: 425,
        nome: "Bombom de Cereja",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-tradicionais",
        preco: 3.10,
        imagem: "./assets/DocesFinos/bombomTradicional.webp",
        descricao: "Cereja em calda envolta em creme e casquinha de chocolate fracionado Sicao.",
        requerPersonalizacao: false
        },
        {
        id: 422,
        nome: "Bombom de Coco",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-tradicionais",
        preco: 2.90,
        imagem: "./assets/DocesFinos/bombomTradicional.webp",
        descricao: "Recheio cremoso de coco com casquinha de chocolate fracionado Sicao.",
        requerPersonalizacao: false
        },
        {
        id: 426,
        nome: "Bombom de Limão",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-tradicionais",
        preco: 3.10,
        imagem: "./assets/DocesFinos/bombomTradicional.webp",
        descricao: "Creme trufado de limão refrescante e casquinha de chocolate fracionado Sicao.",
        requerPersonalizacao: false
        },
        {
        id: 423,
        nome: "Bombom de Morango",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-tradicionais",
        preco: 3.10,
        imagem: "./assets/DocesFinos/bombomTradicional.webp",
        descricao: "Morango fresco inteiro com brigadeiro e casquinha de chocolate fracionado Sicao.",
        requerPersonalizacao: false
        },
        {
        id: 421,
        nome: "Bombom de Uva",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-tradicionais",
        preco: 2.90,
        imagem: "./assets/DocesFinos/bombomTradicional.webp",
        descricao: "Uva fresca selecionada com brigadeiro branco e casquinha de chocolate fracionado Sicao.",
        requerPersonalizacao: false
        },
        {
        id: 432,
        nome: "Bombom de Cereja",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-finos-camafeus",
        preco: 4.90,
        imagem: "./assets/DocesFinos/bombomFino.webp",
        descricao: "Cereja inteira selecionada com licor e banho de chocolate nobre temperado.",
        requerPersonalizacao: false
        },
        {
        id: 434,
        nome: "Bombom de Morango com Chocolate Nobre",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-finos-camafeus",
        preco: 5.50,
        imagem: "./assets/DocesFinos/bombomFino.webp",
        descricao: "Morango inteiro selecionado coberto com puro chocolate nobre temperado.",
        requerPersonalizacao: false,
        aliases: ["Morango Tradicional"]
        },
        {
        id: 431,
        nome: "Bombom de Uva",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-finos-camafeus",
        preco: 4.90,
        imagem: "./assets/DocesFinos/bombomFino.webp",
        descricao: "Uva premium envolta em creme e banhada em puro chocolate nobre temperado.",
        requerPersonalizacao: false
        },
        {
        id: 461,
        nome: "Brigadeiro Callebaut",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-finos-camafeus",
        preco: 6.50,
        imagem: "./assets/DocesFinos/brigadeiroCallebaut.webp",
        descricao: "Delicioso brigadeiro fino feito com chocolate belga e finalizado com granulado Split.",
        requerPersonalizacao: false,
        aliases: ["Brigadeiro com Granulado Split"]
        },
        {
        id: 528,
        nome: "Camafeu de Nozes com Chocolate Branco",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-finos-camafeus",
        preco: 3.50,
        imagem: "./assets/DocesFinos/bombomArtistico.webp",
        descricao: "Camafeu em roupagem moderna banhado em puro chocolate branco nobre.",
        requerPersonalizacao: false
        },
        {
        id: 527,
        nome: "Camafeu de Nozes com Fondant",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-finos-camafeus",
        preco: 3.50,
        imagem: "./assets/DocesFinos/bombomArtistico.webp",
        descricao: "Banhado na calda de açúcar vítrea tradicional com nozes selecionadas.",
        requerPersonalizacao: false
        },
        {
        id: 462,
        nome: "Caramelo Salgado",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-finos-camafeus",
        preco: 6.50,
        imagem: "./assets/DocesFinos/brigadeiroCallebaut.webp",
        descricao: "Brigadeiro de caramelo salgado belga com acabamento de esferas crocantes Crispearls.",
        requerPersonalizacao: false,
        aliases: ["Caramelo com Crispearls"]
        },
        {
        id: 433,
        nome: "Pirâmide de Café e Caramelo",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-finos-camafeus",
        preco: 4.90,
        imagem: "./assets/DocesFinos/bombomFino.webp",
        descricao: "Sofisticado formato de pirâmide com recheio trufado de café e caramelo nobre.",
        requerPersonalizacao: false
        },
        {
        id: 523,
        nome: "Bombom de Abacaxi e Castanha-do-Pará",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-artisticos-torres",
        preco: 5.90,
        imagem: "./assets/DocesFinos/bombomArtistico.webp",
        descricao: "Equilíbrio de fruta com a crocância da castanha em bombom pintado artesanalmente.",
        requerPersonalizacao: false
        },
        {
        id: 521,
        nome: "Bombom de Café",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-artisticos-torres",
        preco: 5.90,
        imagem: "./assets/DocesFinos/bombomArtistico.webp",
        descricao: "Recheio trufado intenso de café em bombom pintado artesanalmente.",
        requerPersonalizacao: false
        },
        {
        id: 522,
        nome: "Bombom de Frutas Vermelhas",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-artisticos-torres",
        preco: 5.90,
        imagem: "./assets/DocesFinos/bombomArtistico.webp",
        descricao: "Ganache com geleia artesanal cítrica de frutas vermelhas em bombom pintado artesanalmente.",
        requerPersonalizacao: false
        },
        {
        id: 524,
        nome: "Bombom de Limão Siciliano",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-artisticos-torres",
        preco: 5.90,
        imagem: "./assets/DocesFinos/bombomArtistico.webp",
        descricao: "Creme refrescante de limão siciliano em bombom pintado artesanalmente.",
        requerPersonalizacao: false
        },
        {
        id: 526,
        nome: "Bombom de Maracujá",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-artisticos-torres",
        preco: 5.90,
        imagem: "./assets/DocesFinos/bombomArtistico.webp",
        descricao: "Ganache cremosa e azedinha de maracujá em bombom pintado artesanalmente.",
        requerPersonalizacao: false
        },
        {
        id: 435,
        nome: "Bombom de Morango Decorado",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-artisticos-torres",
        preco: 6.50,
        imagem: "./assets/DocesFinos/bombomArtistico.webp",
        descricao: "Bombom de morango inteiro selecionado coberto com chocolate nobre e com acabamento mais elaborado, decoração diferenciada e apresentação artística.",
        requerPersonalizacao: false,
        aliases: ["Morango Luxo"]
        },
        {
        id: 525,
        nome: "Bombom de Toffee e Tomilho",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-artisticos-torres",
        preco: 5.90,
        imagem: "./assets/DocesFinos/bombomArtistico.webp",
        descricao: "Combinação sofisticada de caramelo toffee com infusão de tomilho em bombom pintado.",
        requerPersonalizacao: false
        },
        {
        id: 45,
        nome: "Torre de Macarons",
        categoria: "doces-finos-artisticos",
        subcategoria: "bombons-artisticos-torres",
        precoBase: 425.00,
        imagem: "./assets/DocesFinos/torreMacarons.webp",
        descricao: "Uma belíssima torre de macarons para sua mesa de doces. Selecione o tamanho e indique as cores.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "quantidade-cores",
        permiteObservacaoExtra: true,
        opcoes: [
            {
                sabor: "Torre P (Aproximadamente 50 unidades)",
                detalhe: "Permite até 2 cores.",
                adicional: 0.00
            },
            {
                sabor: "Torre M (Aproximadamente 100 unidades)",
                detalhe: "Permite até 3 cores.",
                adicional: 395.00
            },
            {
                sabor: "Torre G (Aproximadamente 150 unidades)",
                detalhe: "Permite até 4 cores.",
                adicional: 874.00
            }
        ]
        },
        {
        id: 472,
        nome: "Brigadeiro de Caramelo Salgado",
        categoria: "doces-finos-artisticos",
        subcategoria: "brigadeiros-finos",
        preco: 2.50,
        imagem: "./assets/DocesFinos/brigadeiroFerrero.webp",
        descricao: "Brigadeiro cremoso de caramelo salgado com split de caramelo.",
        requerPersonalizacao: false
        },
        {
        id: 471,
        nome: "Brigadeiro de Limão Siciliano",
        categoria: "doces-finos-artisticos",
        subcategoria: "brigadeiros-finos",
        preco: 2.50,
        imagem: "./assets/DocesFinos/brigadeiroFerrero.webp",
        descricao: "Brigadeiro fino saborizado de limão siciliano com splits brancos.",
        requerPersonalizacao: false
        },
        {
        id: 474,
        nome: "Brigadeiro de Pistache",
        categoria: "doces-finos-artisticos",
        subcategoria: "brigadeiros-finos",
        preco: 4.30,
        imagem: "./assets/DocesFinos/brigadeiroFerrero.webp",
        descricao: "Brigadeiro fino feito com pasta pura de pistache selecionado.",
        requerPersonalizacao: false
        },
        {
        id: 475,
        nome: "Brigadeiro de Suspiro com Morangos",
        categoria: "doces-finos-artisticos",
        subcategoria: "brigadeiros-finos",
        preco: 2.50,
        imagem: "./assets/DocesFinos/brigadeiroFerrero.webp",
        descricao: "Combinação leve e crocante de mini suspiros com morango.",
        requerPersonalizacao: false
        },
        {
        id: 473,
        nome: "Brigadeiro Ferrero",
        categoria: "doces-finos-artisticos",
        subcategoria: "brigadeiros-finos",
        preco: 2.50,
        imagem: "./assets/DocesFinos/brigadeiroFerrero.webp",
        descricao: "Feito com chocolate nobre e pedacinhos de avelã triturada.",
        requerPersonalizacao: false
        },
        {
        id: 751,
        nome: "Brigadeiro Granullé ao Leite",
        categoria: "doces-finos-artisticos",
        subcategoria: "brigadeiros-finos",
        preco: 2.50,
        imagem: "./assets/DocesFinos/brigadeiroGranule.webp",
        descricao: "Brigadeiro nobre coberto com splits de chocolate belga ao leite.",
        requerPersonalizacao: false
        },
        {
        id: 753,
        nome: "Brigadeiro Granullé Branco",
        categoria: "doces-finos-artisticos",
        subcategoria: "brigadeiros-finos",
        preco: 2.50,
        imagem: "./assets/DocesFinos/brigadeiroGranule.webp",
        descricao: "Brigadeiro nobre coberto com splits de chocolate belga branco.",
        requerPersonalizacao: false
        },
        {
        id: 752,
        nome: "Brigadeiro Granullé Meio Amargo",
        categoria: "doces-finos-artisticos",
        subcategoria: "brigadeiros-finos",
        preco: 2.50,
        imagem: "./assets/DocesFinos/brigadeiroGranule.webp",
        descricao: "Brigadeiro nobre coberto com splits de chocolate belga meio amargo.",
        requerPersonalizacao: false
        },
        {
        id: 301,
        nome: "Bolo Brigadeiro",
        categoria: "bolos",
        subcategoria: "bolos-tradicionais",
        precoBase: 99.00,
        imagem: "./assets/Bolos/tradicionalPP.webp",
        descricao: "Massa de chocolate fofinha com recheio cremoso de brigadeiro tradicional.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 10.90
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 36.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 81.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 200.00
            }
        ]
        },
        {
        id: 303,
        nome: "Bolo Dois Amores",
        categoria: "bolos",
        subcategoria: "bolos-tradicionais",
        precoBase: 99.00,
        imagem: "./assets/Bolos/tradicionalPP.webp",
        descricao: "Duas camadas de recheio: brigadeiro preto casado com brigadeiro branco cremoso.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 10.90
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 36.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 81.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 200.00
            }
        ]
        },
        {
        id: 304,
        nome: "Bolo Ninho",
        categoria: "bolos",
        subcategoria: "bolos-tradicionais",
        precoBase: 99.00,
        imagem: "./assets/Bolos/tradicionalPP.webp",
        descricao: "Massa de chocolate combinada com um autêntico brigadeiro de leite em pó.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 10.90
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 36.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 81.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 200.00
            }
        ]
        },
        {
        id: 306,
        nome: "Bolo Paçoca",
        categoria: "bolos",
        subcategoria: "bolos-tradicionais",
        precoBase: 99.00,
        imagem: "./assets/Bolos/tradicionalPP.webp",
        descricao: "Massa branca macia com um surpreendente brigadeiro artesanal de paçoca.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 10.90
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 36.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 81.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 200.00
            }
        ]
        },
        {
        id: 302,
        nome: "Bolo Prestígio",
        categoria: "bolos",
        subcategoria: "bolos-tradicionais",
        precoBase: 99.00,
        imagem: "./assets/Bolos/tradicionalPP.webp",
        descricao: "Massa de chocolate marcante com recheio cremoso de coco flocado.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 10.90
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 36.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 81.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 200.00
            }
        ]
        },
        {
        id: 305,
        nome: "Bolo Quatro Leites",
        categoria: "bolos",
        subcategoria: "bolos-tradicionais",
        precoBase: 99.00,
        imagem: "./assets/Bolos/tradicionalPP.webp",
        descricao: "Massa branca delicada com recheio premium de brigadeiro de quatro leites.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 10.90
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 36.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 81.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 200.00
            }
        ]
        },
        {
        id: 310,
        nome: "Bolo Abacaxi com Coco",
        categoria: "bolos",
        subcategoria: "bolos-especiais",
        precoBase: 105.00,
        imagem: "./assets/Bolos/especialPP.webp",
        descricao: "Massa branca com creme de nata, coco cremoso e abacaxi em cubos.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 20.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 64.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 145.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 264.00
            }
        ]
        },
        {
        id: 308,
        nome: "Bolo Morango com Chocolate",
        categoria: "bolos",
        subcategoria: "bolos-especiais",
        precoBase: 105.00,
        imagem: "./assets/Bolos/especialPP.webp",
        descricao: "Massa de chocolate, brigadeiro preto com pedaços de morango.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 20.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 64.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 145.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 264.00
            }
        ]
        },
        {
        id: 311,
        nome: "Bolo Nata com Morangos e Suspiros",
        categoria: "bolos",
        subcategoria: "bolos-especiais",
        precoBase: 105.00,
        imagem: "./assets/Bolos/especialPP.webp",
        descricao: "Massa branca, creme de natas, morango e suspiros.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 20.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 64.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 145.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 264.00
            }
        ]
        },
        {
        id: 320,
        nome: "Bolo Ninho com Morango",
        categoria: "bolos",
        subcategoria: "bolos-especiais",
        precoBase: 105.00,
        imagem: "./assets/Bolos/especialPP.webp",
        descricao: "Massa branca, brigadeiro de leite em pó e morangos frescos selecionados.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 20.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 64.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 145.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 264.00
            }
        ]
        },
        {
        id: 309,
        nome: "Bolo Ninho com Uva",
        categoria: "bolos",
        subcategoria: "bolos-especiais",
        precoBase: 105.00,
        imagem: "./assets/Bolos/especialPP.webp",
        descricao: "Massa branca, brigadeiro de leite em pó e uvas verdes frescas selecionadas.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 20.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 64.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 145.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 264.00
            }
        ]
        },
        {
        id: 307,
        nome: "Bolo Tropical",
        categoria: "bolos",
        subcategoria: "bolos-especiais",
        precoBase: 105.00,
        imagem: "./assets/Bolos/especialPP.webp",
        descricao: "Massa branca com creme de natas e abacaxi, pêssego, uva, morango e ameixa.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 20.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 2kg).",
                adicional: 64.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 145.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 264.00
            }
        ]
        },
        {
        id: 314,
        nome: "Bolo Brigadeiro Brûlée com Frutas Vermelhas",
        categoria: "bolos",
        subcategoria: "bolos-finos",
        precoBase: 115.00,
        imagem: "./assets/Bolos/finosPP.webp",
        descricao: "Massa branca, brigadeiro brûlée (gemas e baunilha) e geleia artesanal de frutas vermelhas.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 40.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 1,8kg).",
                adicional: 110.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 190.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 314.00
            }
        ]
        },
        {
        id: 315,
        nome: "Bolo Marta Rocha",
        categoria: "bolos",
        subcategoria: "bolos-finos",
        precoBase: 115.00,
        imagem: "./assets/Bolos/finosPP.webp",
        descricao: "Massa branca e de chocolate, recheio de damasco e ameixa, crocante de nozes, creme de nata, suspiro e baba de moça.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 40.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 1,8kg).",
                adicional: 110.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 190.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 314.00
            }
        ]
        },
        {
        id: 312,
        nome: "Bolo Ninho com Nutella",
        categoria: "bolos",
        subcategoria: "bolos-finos",
        precoBase: 115.00,
        imagem: "./assets/Bolos/finosPP.webp",
        descricao: "Massa de chocolate, brigadeiro de leite em pó e Nutella.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 40.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 1,8kg).",
                adicional: 110.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 190.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 314.00
            }
        ]
        },
        {
        id: 317,
        nome: "Bolo Ouro Branco",
        categoria: "bolos",
        subcategoria: "bolos-finos",
        precoBase: 115.00,
        imagem: "./assets/Bolos/finosPP.webp",
        descricao: "Massa branca e chocolate, creme de nata, bombom ouro branco triturado e ganache.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 40.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 1,8kg).",
                adicional: 110.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 190.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 314.00
            }
        ]
        },
        {
        id: 313,
        nome: "Bolo Pistache com Frutas Vermelhas",
        categoria: "bolos",
        subcategoria: "bolos-finos",
        precoBase: 115.00,
        imagem: "./assets/Bolos/finosPP.webp",
        descricao: "Massa branca, mousse de pistache com pistache triturado e geleia de frutas vermelhas.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 40.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 1,8kg).",
                adicional: 110.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 190.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 314.00
            }
        ]
        },
        {
        id: 316,
        nome: "Bolo Pistache e Limão Siciliano",
        categoria: "bolos",
        subcategoria: "bolos-finos",
        precoBase: 115.00,
        imagem: "./assets/Bolos/finosPP.webp",
        descricao: "Massa branca, recheio de pistache com pistache triturado e brigadeiro de limão siciliano.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 40.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 1,8kg).",
                adicional: 110.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 190.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 314.00
            }
        ]
        },
        {
        id: 319,
        nome: "Bolo Red Velvet",
        categoria: "bolos",
        subcategoria: "bolos-finos",
        precoBase: 115.00,
        imagem: "./assets/Bolos/finosPP.webp",
        descricao: "Massa vermelha, creme à base de cream cheese saborizado de limão e baunilha com geleia de frutas vermelhas.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 40.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 1,8kg).",
                adicional: 110.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 190.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 314.00
            }
        ]
        },
        {
        id: 318,
        nome: "Bolo Strogonoff de Nozes",
        categoria: "bolos",
        subcategoria: "bolos-finos",
        precoBase: 115.00,
        imagem: "./assets/Bolos/finosPP.webp",
        descricao: "Massa branca, creme de doce de leite e nozes.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "tamanho-bolo",
        permiteUploadInspiracao: true,
        opcoes: [
            {
                sabor: "PP",
                detalhe: "Rende até 6 fatias. Diâmetro de 13cm (Aprox. 1kg).",
                adicional: 0.00
            },
            {
                sabor: "P",
                detalhe: "Rende até 11 fatias. Diâmetro de 15cm (Aprox. 1,5kg).",
                adicional: 40.00
            },
            {
                sabor: "M",
                detalhe: "Rende até 18 fatias. Diâmetro de 17cm (Aprox. 1,8kg).",
                adicional: 110.00
            },
            {
                sabor: "G",
                detalhe: "Rende até 30 fatias. Diâmetro de 20cm (Aprox. 3kg).",
                adicional: 190.00
            },
            {
                sabor: "GG",
                detalhe: "Rende até 48 fatias. Diâmetro de 27cm (Aprox. 4,5kg).",
                adicional: 314.00
            }
        ]
        },
{
        id: 23,
        nome: "Bolo Especial G",
        categoria: "bolos",
        subcategoria: "especiais",
        preco: 250.00,
        imagem: "./assets/Bolos/finosG.webp",
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
        ],
        ativo: false
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
        ],
        ativo: false
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
        ],
        ativo: false
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
        ],
        ativo: false
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
        ],
        ativo: false
        },
{
        id: 28,
        nome: "Bolo Fino G",
        categoria: "bolos",
        subcategoria: "finos",
        preco: 305.00,
        imagem: "./assets/Bolos/finosG.webp",
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
        ],
        ativo: false
        },
{
        id: 29,
        nome: "Bolo Fino GG",
        categoria: "bolos",
        subcategoria: "finos",
        preco: 429.00,
        imagem: "./assets/Bolos/finosGG.webp",
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
        ],
        ativo: false
        },
{
        id: 27,
        nome: "Bolo Fino M",
        categoria: "bolos",
        subcategoria: "finos",
        preco: 225.00,
        imagem: "./assets/Bolos/finosM.webp",
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
        ],
        ativo: false
        },
{
        id: 26,
        nome: "Bolo Fino P",
        categoria: "bolos",
        subcategoria: "finos",
        preco: 155.00,
        imagem: "./assets/Bolos/finosP.webp",
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
        ],
        ativo: false
        },
{
        id: 25,
        nome: "Bolo Fino PP",
        categoria: "bolos",
        subcategoria: "finos",
        preco: 115.00,
        imagem: "./assets/Bolos/finosPP.webp",
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
        ],
        ativo: false
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
        ],
        ativo: false
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
        ],
        ativo: false
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
        ],
        ativo: false
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
        ],
        ativo: false
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
        ],
        ativo: false
        },
        {
        id: 205,
        nome: "Bolinha de Queijo",
        categoria: "salgados",
        subcategoria: "fritos",
        preco: 1.90,
        imagem: "./assets/Salgados/fritos.webp",
        descricao: "Favorita das festas, recheada com queijo que derrete.",
        requerPersonalizacao: false
        },
        {
        id: 201,
        nome: "Coxinha",
        categoria: "salgados",
        subcategoria: "fritos",
        preco: 1.90,
        imagem: "./assets/Salgados/fritos.webp",
        descricao: "Clássica coxinha de frango desfiado temperado.",
        requerPersonalizacao: false
        },
        {
        id: 206,
        nome: "Croquete de Salsicha",
        categoria: "salgados",
        subcategoria: "fritos",
        preco: 1.90,
        imagem: "./assets/Salgados/fritos.webp",
        descricao: "Salgadinho crocante recheado com salsicha selecionada.",
        requerPersonalizacao: false
        },
        {
        id: 204,
        nome: "Quibe",
        categoria: "salgados",
        subcategoria: "fritos",
        preco: 1.90,
        imagem: "./assets/Salgados/fritos.webp",
        descricao: "Quibe frito tradicional com tempero da casa.",
        requerPersonalizacao: false
        },
        {
        id: 202,
        nome: "Risoles de Carne",
        categoria: "salgados",
        subcategoria: "fritos",
        preco: 1.90,
        imagem: "./assets/Salgados/fritos.webp",
        descricao: "Massa leve com recheio de carne perfeitamente temperada.",
        requerPersonalizacao: false
        },
        {
        id: 203,
        nome: "Risoles de Queijo e Presunto",
        categoria: "salgados",
        subcategoria: "fritos",
        preco: 1.90,
        imagem: "./assets/Salgados/fritos.webp",
        descricao: "O tradicional risoles misto super cremoso.",
        requerPersonalizacao: false
        },
{
        id: 69,
        nome: "Salgados Fritos Cl\u00e1ssicos",
        categoria: "salgados",
        subcategoria: "fritos",
        preco: 1.90,
        imagem: "./assets/Salgados/fritos.webp",
        descricao: "Salgadinhos fritos artesanais. * Selecione o seu sabor favorito.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Coxinha", detalhe: "Cl\u00e1ssica coxinha de frango desfiado temperado." },
        { sabor: "Risoles de Carne", detalhe: "Massa leve com recheio de carne perfeitamente temperada." },
        { sabor: "Risoles de Queijo e Presunto", detalhe: "O tradicional risoles misto super cremoso." },
        { sabor: "Quibe", detalhe: "Quibe frito tradicional com tempero da casa." },
        { sabor: "Bolinha de Queijo", detalhe: "Favorita das festas, recheada com queijo que derrete." },
        { sabor: "Croquete de Salsicha", detalhe: "Salgadinho crocante recheado com salsicha selecionada." }
        ],
        ativo: false
        },
        {
        id: 711,
        nome: "Mini Empada de Frango",
        categoria: "salgados",
        subcategoria: "empadas-esfihas",
        preco: 2.15,
        imagem: "./assets/defaultSalgado.webp",
        descricao: "Empadinha com aquela massa podre deliciosa recheada de frango desfiado.",
        requerPersonalizacao: false
        },
        {
        id: 713,
        nome: "Mini Empada de Frango com Palmito",
        categoria: "salgados",
        subcategoria: "empadas-esfihas",
        preco: 2.15,
        imagem: "./assets/defaultSalgado.webp",
        descricao: "A combinação perfeita dos recheios de frango e palmito.",
        requerPersonalizacao: false
        },
        {
        id: 712,
        nome: "Mini Empada de Palmito",
        categoria: "salgados",
        subcategoria: "empadas-esfihas",
        preco: 2.15,
        imagem: "./assets/defaultSalgado.webp",
        descricao: "Empadinha com aquela massa podre deliciosa recheada de palmito cremoso.",
        requerPersonalizacao: false
        },
        {
        id: 721,
        nome: "Mini Esfiha de Carne",
        categoria: "salgados",
        subcategoria: "empadas-esfihas",
        preco: 2.15,
        imagem: "./assets/Salgados/esfihas.webp",
        descricao: "Mini esfiha assada com massa macia e tradicional recheio de carne moída.",
        requerPersonalizacao: false
        },
        {
        id: 722,
        nome: "Mini Esfiha de Frango",
        categoria: "salgados",
        subcategoria: "empadas-esfihas",
        preco: 2.15,
        imagem: "./assets/Salgados/esfihas.webp",
        descricao: "Mini esfiha assada com massa macia e suculento frango desfiado.",
        requerPersonalizacao: false
        },
        {
        id: 723,
        nome: "Mini Esfiha de Queijo e Presunto",
        categoria: "salgados",
        subcategoria: "empadas-esfihas",
        preco: 2.15,
        imagem: "./assets/Salgados/esfihas.webp",
        descricao: "Mini esfiha assada com o clássico recheio misto de queijo e presunto.",
        requerPersonalizacao: false
        },
        {
        id: 733,
        nome: "Croissant de Chocolate",
        categoria: "salgados",
        subcategoria: "folhados-croissants",
        preco: 2.15,
        imagem: "./assets/Salgados/croissant.webp",
        descricao: "Massa folhada leve amanteigada com recheio cremoso de chocolate nobre.",
        requerPersonalizacao: false
        },
        {
        id: 731,
        nome: "Croissant de Frango com Requeijão",
        categoria: "salgados",
        subcategoria: "folhados-croissants",
        preco: 2.15,
        imagem: "./assets/Salgados/croissant.webp",
        descricao: "Massa folhada leve amanteigada com recheio cremoso e suculento de frango.",
        requerPersonalizacao: false
        },
        {
        id: 732,
        nome: "Croissant de Queijo e Presunto",
        categoria: "salgados",
        subcategoria: "folhados-croissants",
        preco: 2.15,
        imagem: "./assets/Salgados/croissant.webp",
        descricao: "Massa folhada leve amanteigada com a clássica combinação misto de queijo e presunto.",
        requerPersonalizacao: false
        },
        {
        id: 745,
        nome: "Mini Folhado de Calabresa",
        categoria: "salgados",
        subcategoria: "folhados-croissants",
        preco: 2.15,
        imagem: "./assets/defaultSalgado.webp",
        descricao: "Salgadinho folhado super crocante recheado com calabresa moída saborosa.",
        requerPersonalizacao: false
        },
        {
        id: 742,
        nome: "Mini Folhado de Carne",
        categoria: "salgados",
        subcategoria: "folhados-croissants",
        preco: 2.15,
        imagem: "./assets/defaultSalgado.webp",
        descricao: "Salgadinho folhado super crocante recheado com carne moída bem temperada.",
        requerPersonalizacao: false
        },
        {
        id: 741,
        nome: "Mini Folhado de Frango",
        categoria: "salgados",
        subcategoria: "folhados-croissants",
        preco: 2.15,
        imagem: "./assets/defaultSalgado.webp",
        descricao: "Salgadinho folhado super crocante recheado com frango desfiado.",
        requerPersonalizacao: false
        },
        {
        id: 743,
        nome: "Mini Folhado de Palmito",
        categoria: "salgados",
        subcategoria: "folhados-croissants",
        preco: 2.15,
        imagem: "./assets/defaultSalgado.webp",
        descricao: "Salgadinho folhado super crocante recheado com creme de palmito suave.",
        requerPersonalizacao: false
        },
        {
        id: 744,
        nome: "Mini Folhado de Queijo e Presunto",
        categoria: "salgados",
        subcategoria: "folhados-croissants",
        preco: 2.15,
        imagem: "./assets/defaultSalgado.webp",
        descricao: "Salgadinho folhado super crocante recheado com queijo e presunto misto.",
        requerPersonalizacao: false
        },
        {
        id: 75,
        nome: "Mini Doguinho Assado",
        categoria: "salgados",
        subcategoria: "quiches-assados-especiais",
        preco: 1.75,
        imagem: "./assets/defaultSalgado.webp",
        descricao: "Mini salsicha envolta em uma massa de pãozinho assada super macia.",
        requerPersonalizacao: false
        },
        {
        id: 761,
        nome: "Mini Quiche de Bacon com Alho-Poró",
        categoria: "salgados",
        subcategoria: "quiches-assados-especiais",
        preco: 1.99,
        imagem: "./assets/Salgados/quiche.webp",
        descricao: "Delicada tortinha aberta com recheio cremoso de bacon com alho-poró.",
        requerPersonalizacao: false
        },
        {
        id: 763,
        nome: "Mini Quiche de Cogumelos",
        categoria: "salgados",
        subcategoria: "quiches-assados-especiais",
        preco: 1.99,
        imagem: "./assets/Salgados/quiche.webp",
        descricao: "Delicada tortinha aberta vegetariana com mix de cogumelos finos.",
        requerPersonalizacao: false
        },
        {
        id: 764,
        nome: "Mini Quiche de Tomate com Brócolis",
        categoria: "salgados",
        subcategoria: "quiches-assados-especiais",
        preco: 1.99,
        imagem: "./assets/Salgados/quiche.webp",
        descricao: "Delicada tortinha aberta leve e colorida de tomate com brócolis.",
        requerPersonalizacao: false
        },
        {
        id: 762,
        nome: "Mini Quiche Lorraine",
        categoria: "salgados",
        subcategoria: "quiches-assados-especiais",
        preco: 1.99,
        imagem: "./assets/Salgados/quiche.webp",
        descricao: "Delicada tortinha aberta com o clássico recheio francês de queijo e bacon.",
        requerPersonalizacao: false
        },
        {
        id: 76,
        nome: "Mini Hambúrguer",
        categoria: "salgados",
        subcategoria: "mini-sanduiches",
        preco: 4.90,
        imagem: "./assets/Salgados/hamburguer.webp",
        descricao: "Mini hambúrguer artesanal completo e suculento, perfeito para festas.",
        requerPersonalizacao: false
        },
        {
        id: 78,
        nome: "Mini Sanduíche de Carne na Cerveja",
        categoria: "salgados",
        subcategoria: "mini-sanduiches",
        preco: 4.90,
        imagem: "./assets/Salgados/carne.webp",
        descricao: "Sofisticado mini sanduíche recheado com carne cozida lentamente na cerveja.",
        requerPersonalizacao: false
        },
        {
        id: 77,
        nome: "Mini Sanduíche de Frango",
        categoria: "salgados",
        subcategoria: "mini-sanduiches",
        preco: 3.80,
        imagem: "./assets/Salgados/frango.webp",
        descricao: "Mini sanduíche com recheio cremoso e super temperado de frango desfiado.",
        requerPersonalizacao: false
        },
        {
        id: 79,
        nome: "Mini Sanduíche de Salame",
        categoria: "salgados",
        subcategoria: "mini-sanduiches",
        preco: 4.20,
        imagem: "./assets/Salgados/salame.webp",
        descricao: "Clássica e saborosa combinação de mini sanduíche com salame selecionado.",
        requerPersonalizacao: false
        },
{
        id: 73,
        nome: "Croissants Folhados",
        categoria: "salgados",
        subcategoria: "assados",
        preco: 2.15,
        imagem: "./assets/Salgados/croissant.webp",
        descricao: "Massa folhada leve e amanteigada. Selecione a sua op\u00e7\u00e3o.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Frango com Requeij\u00e3o", detalhe: "Recheio super cremoso e suculento." },
        { sabor: "Queijo e Presunto", detalhe: "A cl\u00e1ssica combina\u00e7\u00e3o perfeita." },
        { sabor: "Chocolate", detalhe: "Op\u00e7\u00e3o doce com recheio cremoso de chocolate." }
        ],
        ativo: false
        },
{
        id: 75,
        nome: "Mini Doguinho Assado",
        categoria: "salgados",
        subcategoria: "assados",
        preco: 1.75,
        imagem: "./assets/defaultSalgado.webp",
        descricao: "Mini salsicha envolta em uma massa de p\u00e3ozinha assada super macia.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 71,
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
        { sabor: "Frango com Palmito", detalhe: "A combina\u00e7\u00e3o perfeita dos dois recheios." }
        ],
        ativo: false
        },
{
        id: 70,
        nome: "Mini Esfihas Assadas",
        categoria: "salgados",
        subcategoria: "assados",
        preco: 2.15,
        imagem: "./assets/Salgados/esfihas.webp",
        descricao: "Mini esfihas com massa super macia. Selecione o sabor.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Carne", detalhe: "Tradicional recheio de carne mo\u00edda temperada." },
        { sabor: "Frango", detalhe: "Frango desfiado suculento." },
        { sabor: "Queijo e Presunto", detalhe: "O cl\u00e1ssico recheio misto." }
        ],
        ativo: false
        },
{
        id: 74,
        nome: "Mini Folhados Especiais",
        categoria: "salgados",
        subcategoria: "assados",
        preco: 2.15,
        imagem: "./assets/defaultSalgado.webp",
        descricao: "Salgadinhos folhados super crocantes. Selecione o sabor.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Frango", detalhe: "Recheio cl\u00e1ssico de frango." },
        { sabor: "Carne", detalhe: "Carne mo\u00edda bem temperada." },
        { sabor: "Palmito", detalhe: "Creme de palmito super suave." },
        { sabor: "Queijo e Presunto", detalhe: "Recheio misto tradicional." },
        { sabor: "Calabresa", detalhe: "Calabresa mo\u00edda saborosa." }
        ],
        ativo: false
        },
{
        id: 76,
        nome: "Mini Hamb\u00farger",
        categoria: "salgados",
        subcategoria: "sanduiches",
        preco: 4.90,
        imagem: "./assets/Salgados/hamburguer.webp",
        descricao: "Mini hamb\u00farger artesanal completo e suculento, perfeito para festas.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 72,
        nome: "Mini Quiches Finas",
        categoria: "salgados",
        subcategoria: "assados",
        preco: 1.99,
        imagem: "./assets/Salgados/quiche.webp",
        descricao: "Delicadas tortinhas abertas com recheio cremoso e sofisticado.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Bacon com Alho Por\u00f3", detalhe: "Combina\u00e7\u00e3o marcante e deliciosa." },
        { sabor: "Lorraine", detalhe: "O cl\u00e1ssico franc\u00eas com queijo e bacon." },
        { sabor: "Cogumelos", detalhe: "Op\u00e7\u00e3o vegetariana sofisticada com mix de cogumelos." },
        { sabor: "Tomate com Br\u00f3colis", detalhe: "Leve, colorido e vegetariano." }
        ],
        ativo: false
        },
{
        id: 78,
        nome: "Mini Sandu\u00edche de Carne na Cerveja",
        categoria: "salgados",
        subcategoria: "sanduiches",
        preco: 4.90,
        imagem: "./assets/Salgados/carne.webp",
        descricao: "Sofisticado mini sandu\u00edche recheado com carne cozida lentamente na cerveja, super suculenta.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 77,
        nome: "Mini Sandu\u00edche de Frango",
        categoria: "salgados",
        subcategoria: "sanduiches",
        preco: 3.80,
        imagem: "./assets/Salgados/frango.webp",
        descricao: "Mini sandu\u00edche com recheio cremoso e super temperado de frango desfiado.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 79,
        nome: "Mini Sandu\u00edche de Salame",
        categoria: "salgados",
        subcategoria: "sanduiches",
        preco: 4.20,
        imagem: "./assets/Salgados/salame.webp",
        descricao: "Cl\u00e1ssica e saborosa combina\u00e7\u00e3o de mini sandu\u00edche com fatias de salame selecionado.",
        requerPersonalizacao: false,
        ativo: false
        },
        {
        id: 645,
        nome: "Bem-Casado de Brigadeiro",
        categoria: "lembrancinhas",
        subcategoria: "bem-casados",
        preco: 7.90,
        imagem: "./assets/Lembrancinhas/bemCasado.webp",
        descricao: "Bem-casado artesanal recheado com nosso brigadeiro de festa tradicional.",
        requerPersonalizacao: false
        },
        {
        id: 644,
        nome: "Bem-Casado de Chocolate",
        categoria: "lembrancinhas",
        subcategoria: "bem-casados",
        preco: 7.90,
        imagem: "./assets/Lembrancinhas/bemCasado.webp",
        descricao: "Bem-casado artesanal recheado com ganache cremosa de chocolate nobre.",
        requerPersonalizacao: false
        },
        {
        id: 641,
        nome: "Bem-Casado de Doce de Leite",
        categoria: "lembrancinhas",
        subcategoria: "bem-casados",
        preco: 7.90,
        imagem: "./assets/Lembrancinhas/bemCasado.webp",
        descricao: "Bem-casado artesanal recheado com doce de leite cremoso tradicional.",
        requerPersonalizacao: false
        },
        {
        id: 646,
        nome: "Bem-Casado de Frutas Vermelhas",
        categoria: "lembrancinhas",
        subcategoria: "bem-casados",
        preco: 7.90,
        imagem: "./assets/Lembrancinhas/bemCasado.webp",
        descricao: "Bem-casado artesanal recheado com geleia artesanal cítrica de frutas vermelhas.",
        requerPersonalizacao: false
        },
        {
        id: 643,
        nome: "Bem-Casado de Limão Siciliano",
        categoria: "lembrancinhas",
        subcategoria: "bem-casados",
        preco: 7.90,
        imagem: "./assets/Lembrancinhas/bemCasado.webp",
        descricao: "Bem-casado artesanal recheado com creme cítrico e refrescante de limão siciliano.",
        requerPersonalizacao: false
        },
        {
        id: 642,
        nome: "Bem-Casado de Pistache",
        categoria: "lembrancinhas",
        subcategoria: "bem-casados",
        preco: 7.90,
        imagem: "./assets/Lembrancinhas/bemCasado.webp",
        descricao: "Bem-casado artesanal recheado com creme nobre de pistache selecionado.",
        requerPersonalizacao: false
        },
        {
        id: 647,
        nome: "Bem-Casado Red Velvet",
        categoria: "lembrancinhas",
        subcategoria: "bem-casados",
        preco: 7.90,
        imagem: "./assets/Lembrancinhas/bemCasado.webp",
        descricao: "Bem-casado especial com massa Red Velvet e recheio aveludado.",
        requerPersonalizacao: false
        },
        {
        id: 67,
        nome: "Caixinha de Medians",
        categoria: "lembrancinhas",
        subcategoria: "caixinhas-macarons",
        preco: 15.90,
        imagem: "./assets/defaultLembrancinhas.webp",
        descricao: "Caixinha fina contendo disquinhos de chocolate com frutas secas e nuts.",
        requerPersonalizacao: false
        },
        {
        id: 68,
        nome: "Caixinha de Mini Fudge",
        categoria: "lembrancinhas",
        subcategoria: "caixinhas-macarons",
        preco: 15.90,
        imagem: "./assets/defaultLembrancinhas.webp",
        descricao: "Caixinha elegante com quadradinhos de fudge de chocolate ultra macios.",
        requerPersonalizacao: false
        },
        {
        id: 63,
        nome: "Macarons em Caixinha de Acrílico",
        categoria: "lembrancinhas",
        subcategoria: "caixinhas-macarons",
        preco: 16.90,
        imagem: "./assets/Lembrancinhas/lembrancinhas-macaronsCaixinha.webp",
        descricao: "Apresentação luxuosa de macarons protegidos em uma caixinha transparente.",
        requerPersonalizacao: false
        },
        {
        id: 62,
        nome: "Macarons em Pacote com Tecido e Laço",
        categoria: "lembrancinhas",
        subcategoria: "caixinhas-macarons",
        preco: 9.50,
        imagem: "./assets/Lembrancinhas/macaronsPacote.webp",
        descricao: "Delicados macarons embalados em pacote de tecido com lindo acabamento.",
        requerPersonalizacao: false
        },
        {
        id: 65,
        nome: "Alfajor Artesanal",
        categoria: "lembrancinhas",
        subcategoria: "alfajor-pao-mel",
        preco: 7.90,
        imagem: "./assets/defaultLembrancinhas.webp",
        descricao: "Massa delicada recheada com muito doce de leite e coberta com chocolate.",
        requerPersonalizacao: false
        },
        {
        id: 66,
        nome: "Pão de Mel Fino",
        categoria: "lembrancinhas",
        subcategoria: "alfajor-pao-mel",
        preco: 7.90,
        imagem: "./assets/defaultLembrancinhas.webp",
        descricao: "Pão de mel fofinho com especiarias, recheado e banhado no chocolate nobre.",
        requerPersonalizacao: false
        },
{
        id: 65,
        nome: "Alfajor Artesanal",
        categoria: "lembrancinhas",
        preco: 7.90,
        imagem: "./assets/defaultLembrancinhas.webp",
        descricao: "Massa delicada recheada com muito doce de leite e coberta com uma generosa camada de chocolate.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 64,
        nome: "Bem Casado Tradicional & Fino",
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
        ],
        ativo: false
        },
{
        id: 67,
        nome: "Caixinha de Medians",
        categoria: "lembrancinhas",
        preco: 15.90,
        imagem: "./assets/defaultLembrancinhas.webp",
        descricao: "Caixinha fina contendo os tradicionais disquinhos de chocolate com frutas secas e nuts por cima.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 68,
        nome: "Caixinha de Mini Fudge",
        categoria: "lembrancinhas",
        preco: 15.90,
        imagem: "./assets/defaultLembrancinhas.webp",
        descricao: "Caixinha elegante com quadradinhos de fudge de chocolate ultra macios e intensos.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 63,
        nome: "Macarons em Caixinha (Acrílico)",
        categoria: "lembrancinhas",
        preco: 16.90,
        imagem: "./assets/Lembrancinhas/lembrancinhas-macaronsCaixinha.webp",
        descricao: "Apresentação luxuosa de macarons protegidos em uma caixinha transparente de acrílico.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 62,
        nome: "Macarons em Pacote (Tecido e Laço)",
        categoria: "lembrancinhas",
        preco: 9.50,
        imagem: "./assets/Lembrancinhas/macaronsPacote.webp",
        descricao: "Delicados macarons embalados em pacote de tecido com um lindo acabamento em laço.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 66,
        nome: "Pão de Mel Fino",
        categoria: "lembrancinhas",
        preco: 7.90,
        imagem: "./assets/defaultLembrancinhas.webp",
        descricao: "Pão de mel super fofinho com especiarias, recheado e banhado no chocolate nobre.",
        requerPersonalizacao: false,
        ativo: false
        },
        {
        id: 55,
        nome: "Mini Banoffee",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas-classicas",
        preco: 5.90,
        imagem: "./assets/DocesFinos/banoffee.webp",
        descricao: "Clássica sobremesa de banana com doce de leite e chantilly leve.",
        requerPersonalizacao: false
        },
        {
        id: 60,
        nome: "Mini Cheesecake",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas-classicas",
        preco: 6.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Base de biscoito com creme de cream cheese e calda de frutas vermelhas.",
        requerPersonalizacao: false
        },
        {
        id: 58,
        nome: "Mini Pavlova",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas-classicas",
        preco: 4.90,
        imagem: "./assets/DocesFinos/miniPavlova.webp",
        descricao: "Delicada base de merengue assado recheada com creme leve e frutas.",
        requerPersonalizacao: false
        },
        {
        id: 56,
        nome: "Mini Pudim",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas-classicas",
        preco: 3.30,
        imagem: "./assets/DocesFinos/pudim.webp",
        descricao: "O clássico pudim de leite condensado, super cremoso, em versão mini.",
        requerPersonalizacao: false
        },
        {
        id: 57,
        nome: "Mini Quindim",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas-classicas",
        preco: 3.90,
        imagem: "./assets/DocesFinos/quindim.webp",
        descricao: "Doce tradicional à base de gemas e coco, com brilho impecável.",
        requerPersonalizacao: false
        },
        {
        id: 591,
        nome: "Mini Brownie de Brigadeiro com Morango",
        categoria: "sobremesas-tortas",
        subcategoria: "brownies-mil-folhas",
        preco: 4.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Mini brownie coberto com nosso brigadeiro e pedaço de morango.",
        requerPersonalizacao: false
        },
        {
        id: 592,
        nome: "Mini Brownie de Nutella",
        categoria: "sobremesas-tortas",
        subcategoria: "brownies-mil-folhas",
        preco: 4.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Mini brownie denso e chocolatudo com cobertura generosa de pura Nutella.",
        requerPersonalizacao: false
        },
        {
        id: 531,
        nome: "Mini Mil-Folhas de Creme",
        categoria: "sobremesas-tortas",
        subcategoria: "brownies-mil-folhas",
        preco: 5.90,
        imagem: "./assets/DocesFinos/milFolhas.webp",
        descricao: "Massa folhada crocante com o clássico creme de confeiteiro suave.",
        requerPersonalizacao: false
        },
        {
        id: 532,
        nome: "Mini Mil-Folhas de Doce de Leite",
        categoria: "sobremesas-tortas",
        subcategoria: "brownies-mil-folhas",
        preco: 5.90,
        imagem: "./assets/DocesFinos/milFolhas.webp",
        descricao: "Massa folhada crocante recheada com doce de leite cozido cremoso.",
        requerPersonalizacao: false
        },
        {
        id: 542,
        nome: "Tartelete de Chocolate e Caramelo",
        categoria: "sobremesas-tortas",
        subcategoria: "tarteletes",
        preco: 5.90,
        imagem: "./assets/DocesFinos/tarteleteTradicional.webp",
        descricao: "Mini torta artesanal recheada de chocolate meio amargo e caramelo.",
        requerPersonalizacao: false
        },
        {
        id: 543,
        nome: "Tartelete de Frutas Tradicional",
        categoria: "sobremesas-tortas",
        subcategoria: "tarteletes",
        preco: 5.90,
        imagem: "./assets/DocesFinos/tarteleteTradicional.webp",
        descricao: "Mini torta artesanal com creme de confeiteiro leve e frutas frescas.",
        requerPersonalizacao: false
        },
        {
        id: 545,
        nome: "Tartelete de Frutas Vermelhas com Mini Macaron",
        categoria: "sobremesas-tortas",
        subcategoria: "tarteletes",
        preco: 8.90,
        imagem: "./assets/DocesFinos/tarteleteTradicional.webp",
        descricao: "Mini torta artesanal com base de frutas vermelhas com mini macaron no topo.",
        requerPersonalizacao: false
        },
        {
        id: 541,
        nome: "Tartelete de Limão Siciliano",
        categoria: "sobremesas-tortas",
        subcategoria: "tarteletes",
        preco: 5.90,
        imagem: "./assets/DocesFinos/tarteleteTradicional.webp",
        descricao: "Mini torta artesanal com creme de limão siciliano e merengue maçaricado.",
        requerPersonalizacao: false
        },
        {
        id: 544,
        nome: "Tartelete de Maracujá",
        categoria: "sobremesas-tortas",
        subcategoria: "tarteletes",
        preco: 5.90,
        imagem: "./assets/DocesFinos/tarteleteTradicional.webp",
        descricao: "Mini torta artesanal com mousse de maracujá com sementinhas decorativas.",
        requerPersonalizacao: false
        },
        {
        id: 546,
        nome: "Tartelete de Pistache com Mini Macaron",
        categoria: "sobremesas-tortas",
        subcategoria: "tarteletes",
        preco: 8.90,
        imagem: "./assets/DocesFinos/tarteleteTradicional.webp",
        descricao: "Mini torta artesanal com creme de pistache nobre com mini macaron no topo.",
        requerPersonalizacao: false
        },
        {
        id: 613,
        nome: "Verrine Banoffee",
        categoria: "sobremesas-tortas",
        subcategoria: "verrines-classicas",
        preco: 12.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Sobremesa fina em copinho de camadas de banana, doce de leite e chantilly leve.",
        requerPersonalizacao: false
        },
        {
        id: 615,
        nome: "Verrine de Mousse de Chocolate",
        categoria: "sobremesas-tortas",
        subcategoria: "verrines-classicas",
        preco: 12.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Sobremesa fina em copinho de mousse cremosa blend de chocolate nobre.",
        requerPersonalizacao: false
        },
        {
        id: 614,
        nome: "Verrine Panna Cotta",
        categoria: "sobremesas-tortas",
        subcategoria: "verrines-classicas",
        preco: 12.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Traditional receita italiana de panna cotta, leve e espelhada com calda.",
        requerPersonalizacao: false
        },
        {
        id: 611,
        nome: "Verrine Red Velvet",
        categoria: "sobremesas-tortas",
        subcategoria: "verrines-classicas",
        preco: 12.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Sobremesa fina em copinho com camadas de bolo Red Velvet e creme de cream cheese.",
        requerPersonalizacao: false
        },
        {
        id: 612,
        nome: "Verrine Torta de Limão",
        categoria: "sobremesas-tortas",
        subcategoria: "verrines-classicas",
        preco: 12.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Sobremesa fina em copinho de creme cítrico de limão com base de biscoito e merengue.",
        requerPersonalizacao: false
        },
        {
        id: 623,
        nome: "Verrine de Amarula e Caramelo",
        categoria: "sobremesas-tortas",
        subcategoria: "verrines-frutadas-especiais",
        preco: 12.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Sobremesa fina de mousse de chocolate, amarula e caramelo nobre.",
        requerPersonalizacao: false
        },
        {
        id: 622,
        nome: "Verrine de Compota de Cereja",
        categoria: "sobremesas-tortas",
        subcategoria: "verrines-frutadas-especiais",
        preco: 12.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Sobremesa fina em copinho de compota artesanal com pedaços e calda de cereja.",
        requerPersonalizacao: false
        },
        {
        id: 624,
        nome: "Verrine de Mousse com Coulis de Maracujá",
        categoria: "sobremesas-tortas",
        subcategoria: "verrines-frutadas-especiais",
        preco: 12.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Sobremesa fina em copinho de mousse aerada de maracujá com coulis brilhante.",
        requerPersonalizacao: false
        },
        {
        id: 621,
        nome: "Verrine de Mousse de Queijo e Frutas Vermelhas",
        categoria: "sobremesas-tortas",
        subcategoria: "verrines-frutadas-especiais",
        preco: 12.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Sobremesa fina em copinho de mousse de queijo com calda artesanal de frutas.",
        requerPersonalizacao: false
        },
        {
        id: 625,
        nome: "Verrine Sopa de Morangos",
        categoria: "sobremesas-tortas",
        subcategoria: "verrines-frutadas-especiais",
        preco: 12.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Sobremesa fina e refrescante à base de morangos selecionados em calda leve.",
        requerPersonalizacao: false
        },
{
        id: 55,
        nome: "Mini Banoffee",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas",
        preco: 5.90,
        imagem: "./assets/DocesFinos/banoffee.webp",
        descricao: "Clássica sobremesa de banana com doce de leite e chantilly leve, montada em uma delicada porção individual.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 59,
        nome: "Mini Brownies Especiais",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas",
        preco: 4.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Brownie artesanal denso e chocolatudo com coberturas nobres. Selecione o seu sabor favorito.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Brigadeiro com Morango", detalhe: "Coberto com nosso brigadeiro fino e pedaço de morango fresco." },
        { sabor: "Nutella", detalhe: "Cobertura generosa de pura Nutella." }
        ],
        ativo: false
        },
{
        id: 60,
        nome: "Mini Cheesecake",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas",
        preco: 6.90,
        imagem: "./assets/defaultDoces.webp",
        descricao: "Base de biscoito crocante com creme de cream cheese suave e finalizado com calda artesanal de frutas vermelhas.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 53,
        nome: "Mini Mil Folhas",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas",
        preco: 5.90,
        imagem: "./assets/DocesFinos/milFolhas.webp",
        descricao: "Massa folhada incrivelmente crocante intercalada com recheio artesanal. Escolha o sabor.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Creme", detalhe: "Recheado com o clássico creme de confeiteiro suave." },
        { sabor: "Doce de Leite", detalhe: "Recheado com doce de leite cozido cremoso." }
        ],
        ativo: false
        },
{
        id: 58,
        nome: "Mini Pavlova",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas",
        preco: 4.90,
        imagem: "./assets/DocesFinos/miniPavlova.webp",
        descricao: "Delicada base de merengue assado, crocante por fora e macia por dentro, recheada com creme leve e frutas.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 56,
        nome: "Mini Pudim",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas",
        preco: 3.30,
        imagem: "./assets/DocesFinos/pudim.webp",
        descricao: "O clássico pudim de leite condensado, super cremoso, em uma delicada versão mini para eventos.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 57,
        nome: "Mini Quindim",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas",
        preco: 3.90,
        imagem: "./assets/DocesFinos/quindim.webp",
        descricao: "Doce tradicional à base de gemas e coco, com brilho impecável e textura perfeita.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 54,
        nome: "Mini Tarteletes Finas",
        categoria: "sobremesas-tortas",
        subcategoria: "mini-sobremesas",
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
        ],
        ativo: false
        },
{
        id: 61,
        nome: "Petit Verrines Premium",
        categoria: "sobremesas-tortas",
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
        ],
        ativo: false
        },
{
        id: 3,
        nome: "Beijinho",
        categoria: "doces",
        subcategoria: "tradicionais",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/beijinho.webp",
        descricao: "Delicioso doce tradicional de coco ralado e leite condensado.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 52,
        nome: "Bombons Artísticos & Camafeus",
        categoria: "doces",
        subcategoria: "finos",
        precoBase: 5.90,
        imagem: "./assets/DocesFinos/bombomArtistico.webp",
        descricao: "Bombons finos pintados artesanalmente e camafeus tradicionais de nozes. Selecione a sua preferência.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Café", detalhe: "Recheio trufado intenso de café.", adicional: 0.00 },
        { sabor: "Frutas Vermelhas", detalhe: "Ganache com geleia artesanal cítrica de frutas vermelhas.", adicional: 0.00 },
        { sabor: "Abacaxi e Castanha do Pará", detalhe: "Equilíbrio perfeito de fruta com a crocância da castanha.", adicional: 0.00 },
        { sabor: "Limão Siciliano", detalhe: "Creme refrescante de limão siciliano.", adicional: 0.00 },
        { sabor: "Toffee e Tomilho", detalhe: "Combinação sofisticada de caramelo toffee com infusão de tomilho.", adicional: 0.00 },
        { sabor: "Maracujá", detalhe: "Ganache cremosa e azedinha de maracujá.", adicional: 0.00 },
        { sabor: "Camafeu de Nozes — Fondant Tradicional", detalhe: "O mais tradicional doce fino de casamento. Banhado na clássica calda de açúcar vítrea com nozes selecionadas.", adicional: -2.40 },
        { sabor: "Camafeu de Nozes — Chocolate Branco", detalhe: "Camafeu em roupagem moderna banhado em puro chocolate branco nobre.", adicional: -2.40 }
        ],
        ativo: false
        },
{
        id: 43,
        nome: "Bombons Finos (Chocolate Nobre)",
        categoria: "doces",
        subcategoria: "finos",
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
        ],
        ativo: false
        },
{
        id: 42,
        nome: "Bombons Tradicionais (Sicao)",
        categoria: "doces",
        subcategoria: "finos",
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
        ],
        ativo: false
        },
{
        id: 2,
        nome: "Brigadeiro Branco",
        categoria: "doces",
        subcategoria: "tradicionais",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/brigadeiroBranco.webp",
        descricao: "Brigadeiro branco cremoso tradicional. Produto artesanal com aprox. 20g.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 5,
        nome: "Brigadeiro de Paçoca",
        categoria: "doces",
        subcategoria: "tradicionais",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/paçoca.webp",
        descricao: "Sabor marcante de paçoca em formato de brigadeiro de festa.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 7,
        nome: "Brigadeiro Granullé",
        categoria: "doces",
        subcategoria: "finos",
        preco: 2.50,
        imagem: "./assets/DocesFinos/brigadeiroGranule.webp",
        descricao: "Brigadeiro nobre coberto com splits de chocolate. Escolha a sua variação favorita.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Ao Leite", detalhe: "Brigadeiro fino coberto com splits de chocolate belga ao leite." },
        { sabor: "Meio Amargo", detalhe: "Brigadeiro nobre coberto com granulado split meio amargo." },
        { sabor: "Branco", detalhe: "Brigadeiro branco coberto com splits de chocolate belga branco." }
        ],
        ativo: false
        },
{
        id: 1,
        nome: "Brigadeiro Preto Tradicional",
        categoria: "doces",
        subcategoria: "tradicionais",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/brigadeiroTradicional.webp",
        descricao: "O clássico e amado brigadeiro ao leite. Produto artesanal com aprox. 20g.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 46,
        nome: "Brigadeiros Callebaut",
        categoria: "doces",
        subcategoria: "finos",
        preco: 6.50,
        imagem: "./assets/DocesFinos/brigadeiroCallebaut.webp",
        descricao: "Linha premium produzida com o autêntico chocolate belga Callebaut. Escolha a sua opção favorita.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Brigadeiro em Granulado Split", detalhe: "Delicioso brigadeiro fino envolvido em splits de chocolate belga." },
        { sabor: "Caramelo Salgado em Crispearls", detalhe: "Brigadeiro de caramelo salgado finalizado com as famosas esferas crocantes Crispearls." }
        ],
        ativo: false
        },
{
        id: 47,
        nome: "Brigadeiros Finos & Especiais",
        categoria: "doces",
        subcategoria: "finos",
        precoBase: 2.50,
        imagem: "./assets/DocesFinos/brigadeiroFerrero.webp",
        descricao: "Sabores clássicos refinados para festas e eventos. Peça o pistache e o suspiro como opcionais especiais.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Limão Siciliano", detalhe: "Brigadeiro fino saborizado de limão siciliano com granullé branco.", adicional: 0.00 },
        { sabor: "Caramelo Salgado", detalhe: "Brigadeiro cremoso de caramelo salgado com granullé sabor caramelo.", adicional: 0.00 },
        { sabor: "Ferrero", detalhe: "Feito com chocolate nobre e pedacinhos de avelã.", adicional: 0.00 },
        { sabor: "Pistache Fino", detalhe: "Brigadeiro fino feito com pasta pura de pistache selecionado.", adicional: 1.80 },
        { sabor: "Suspiro com Morangos", detalhe: "Combinação leve e crocante de mini suspiros com morango irresistível.", adicional: 0.00 }
        ],
        ativo: false
        },
{
        id: 51,
        nome: "Caixinhas de Chocolate Personalizadas",
        categoria: "doces",
        subcategoria: "especiais",
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
        ],
        ativo: false
        },
{
        id: 4,
        nome: "Cajuzinho",
        categoria: "doces",
        subcategoria: "tradicionais",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/cajuzinho.webp",
        descricao: "Doce tradicional de amendoim com aquele toque clássico.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 50,
        nome: "Copinhos de Chocolate Artesanais",
        categoria: "doces",
        subcategoria: "especiais",
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
        ],
        ativo: false
        },
{
        id: 41,
        nome: "Cupcake G",
        categoria: "doces",
        subcategoria: "especiais",
        preco: 8.50,
        imagem: "./assets/DocesFinos/cupcakeG.webp",
        descricao: "Tamanho perfeito para lanches individuais ou lembrancinhas. Recheado e lindamente decorado.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Nutella", detalhe: "Massa de chocolate fofinha com recheio e cobertura generosa de Nutella pura." },
        { sabor: "Doce de Leite", detalhe: "Massa de baunilha com recheio de doce de leite cozido e cobertura decorada." },
        { sabor: "Beijinho", detalhe: "Massa de baunilha, recheio cremoso de coco e finalizado com cobertura de coco ralado." },
        { sabor: "Brigadeiro Tradicional", detalhe: "Massa de chocolate com recheio e cobertura do nosso clássico brigadeiro fino." }
        ],
        ativo: false
        },
{
        id: 40,
        nome: "Cupcake P",
        categoria: "doces",
        subcategoria: "especiais",
        preco: 4.50,
        imagem: "./assets/DocesFinos/cupcakeP.webp",
        descricao: "Delicado mini bolo recheado e decorado com cobertura artesanal. Escolha o seu sabor favorito.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Nutella", detalhe: "Massa de chocolate fofinha com recheio e cobertura generosa de Nutella pura." },
        { sabor: "Doce de Leite", detalhe: "Massa de baunilha com recheio de doce de leite cozido e cobertura decorada." },
        { sabor: "Beijinho", detalhe: "Massa de baunilha, recheio cremoso de coco e finalizado com cobertura de coco ralado." },
        { sabor: "Brigadeiro Tradicional", detalhe: "Massa de chocolate com recheio e cobertura do nosso clássico brigadeiro fino." }
        ],
        ativo: false
        },
{
        id: 44,
        nome: "Macarons Artesanais",
        categoria: "doces",
        subcategoria: "finos",
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
        ],
        ativo: false
        },
{
        id: 6,
        nome: "Moranguinho",
        categoria: "doces",
        subcategoria: "tradicionais",
        preco: 1.49,
        imagem: "./assets/DocesTradicionais/moranguinho.webp",
        descricao: "O clássico bicho de pé, brigadeiro saborizado de morango.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 48,
        nome: "Ouricos Artesanais",
        categoria: "doces",
        subcategoria: "especiais",
        precoBase: 2.30,
        imagem: "./assets/DocesFinos/ouricoAmendoa.webp",
        descricao: "Doces finos modelados com texturas marcantes e crocantes.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Coco", detalhe: "Doce artesanal de coco super cremoso por dentro com casca crocante.", adicional: 0.00 },
        { sabor: "Amêndoa", detalhe: "Envolvido em lâminas crocantes de amêndoa.", adicional: 2.20 },
        { sabor: "Pistache", detalhe: "Recheio premium coberto com pistache triturado.", adicional: 2.60 }
        ],
        ativo: false
        },
{
        id: 13,
        nome: "Palha Italiana",
        categoria: "doces",
        subcategoria: "finos",
        preco: 1.90,
        imagem: "./assets/DocesFinos/palhaItaliana.webp",
        descricao: "Tradicional pedaço de palha italiana feito com brigadeiro cremoso e biscoito.",
        requerPersonalizacao: false,
        ativo: false
        },
{
        id: 9,
        nome: "Seleção de Brigadeiros Especiais",
        categoria: "doces",
        subcategoria: "tradicionais",
        preco: 2.10,
        imagem: "./assets/DocesFinos/brigadeiroEspecial.webp",
        descricao: "Brigadeiros em sabores especiais e receitas autorais.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Churros", detalhe: "Brigadeiro artesanal de canela finalizado com doce de leite." },
        { sabor: "Ninho com Nutella", detalhe: "Brigadeiro de leite Ninho original recheado com Nutella pura." },
        { sabor: "Uva Verde", detalhe: "Uva verde fresca envolvida por brigadeiro branco." },
        { sabor: "Brûlée", detalhe: "Brigadeiro de baunilha com crosta de açúcar maçaricado." },
        { sabor: "Flor de Morango", detalhe: "Brigadeiro de morango (Nesquik) moldado em formato de florzinha." },
        { sabor: "Dois Amores", detalhe: "A união perfeita do brigadeiro preto e branco em um único docinho." }
        ],
        ativo: false
        },
{
        id: 49,
        nome: "Seleção de Doces de Frutas & Castanhas",
        categoria: "doces",
        subcategoria: "especiais",
        precoBase: 2.30,
        imagem: "./assets/DocesFinos/frutasECastanhas.webp",
        descricao: "Doces finos clássicos baseados em frutas nobres, castanhas e fondant.",
        requerPersonalizacao: true,
        tipoPersonalizacao: "sabor",
        opcoes: [
        { sabor: "Brigadeiro de Suspiro com Morangos", detalhe: "Combinação leve e crocante de mini suspiros com o sabor irresistível de morango.", adicional: 0.00 },
        { sabor: "Olho de Sogra Fino - Ameixa", detalhe: "Beijinho cremoso combinado com ameixa selecionada.", adicional: 0.00 },
        { sabor: "Olho de Sogra Fino - Damasco", detalhe: "Beijinho cremoso combinado com um toque nobre de damasco.", adicional: 0.00 },
        { sabor: "Romeu e Julieta Fino", detalhe: "O casamento perfeito do queijo com a goiabada em roupagem fina.", adicional: 0.20 },
        { sabor: "Morango Cristal", detalhe: "Morango inteiro envolto em brigadeiro e caramelizado com calda de açúcar.", adicional: 1.60 },
        { sabor: "Trouxinha de Nozes e Baba de Moça", detalhe: "Trouxinha fina recheada com estrogonofe de nozes e baba de moça.", adicional: 4.60 },
        { sabor: "Trouxinha Marzipan", detalhe: "Trouxinha ultra premium com autêntica pasta de marzipan de amêndoas.", adicional: 5.20 }
        ],
        ativo: false
        },
{
        id: 45,
        nome: "Torre de Macarons",
        categoria: "doces",
        subcategoria: "finos",
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
        ],
        ativo: false
        }
    ];

    
    const imagensDocesTradicionais = {
        1: "./assets/reserva/brigadeiroTradicional.webp",
        2: "./assets/reserva/brigadeiroBranco.webp",
        3: "./assets/reserva/beijinho.webp",
        4: "./assets/reserva/cajuzinho.webp"
    };

    function obterImagemDefaultDoce(produto) {
        return "./assets/defaultDoces.webp";
    }

    function obterImagemProduto(produto) {
        if (
            produto.categoria === "doces" &&
            produto.subcategoria === "tradicionais"
        ) {
            return imagensDocesTradicionais[produto.id] ||
                obterImagemDefaultDoce(produto);
        }

        return produto.imagem;
    }

    window.aplicarFallbackImagem = function(img) {
        img.addEventListener(
            "error",
            () => {
                img.src = "./assets/defaultDoces.webp";
            },
            { once: true }
        );
    };

    produtos.forEach(p => {
        p.imagem = obterImagemProduto(p);
        if (!p.imagem || p.imagem.trim() === "") {
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

    // Função utilitária para limpar e converter preços de strings de forma segura usando Regex.
    // Remove parênteses, espaços, asteriscos, símbolos (como R$) e converte vírgula para ponto antes de parseFloat.
    const limparEParsarPreco = (valor) => {
        if (typeof valor === 'number') return valor;
        if (valor === null || valor === undefined) return 0;
        
        let str = String(valor).trim();
        if (str === "") return 0;
        
        // Verifica se há sinal de menos (para adicionais negativos)
        const isNegative = str.includes('-') || (str.includes('(') && str.includes('-'));
        
        // Remove tudo exceto dígitos, pontos e vírgulas
        str = str.replace(/[^\d.,]/g, '');
        
        // Trata separadores decimais
        if (str.includes(',') && str.includes('.')) {
            // Caso tenha ambos, ex: "1.234,56" -> remove pontos e troca vírgula por ponto
            str = str.replace(/\./g, '').replace(',', '.');
        } else if (str.includes(',')) {
            // Caso tenha apenas vírgula, ex: "1,80" -> troca por ponto
            str = str.replace(',', '.');
        }
        
        const num = parseFloat(str);
        if (isNaN(num)) return 0;
        return isNegative ? -num : num;
    };
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

    
    
    function formatarNomeSubcategoria(valor) {
        const meta = subcategoryMeta[categoriaAtiva]?.[valor];
        if (meta) return meta.title;
        if (valor === "outros") return "Outros";
        return valor
            .replace(/-/g, " ")
            .replace(/\b\w/g, (letra) => letra.toUpperCase());
    }

    function obterSubcategoriasDaCategoria(categoria) {
        return subcategoriasPorCategoria[categoria] || [];
    }

    const categoriaNomes = {
        "doces-classicos-especiais": "Doces Clássicos & Especiais",
        "doces-finos-artisticos": "Doces Finos & Artísticos",
        "bolos": "Bolos",
        "salgados": "Salgados",
        "lembrancinhas": "Lembrancinhas",
        "sobremesas-tortas": "Sobremesas & Tortas"
    };

    const subcategoriasPorCategoria = {
        "doces-classicos-especiais": ["doces-classicos", "brigadeiros-especiais", "copinhos", "cupcakes-macarons", "frutas-castanhas"],
        "doces-finos-artisticos": ["caixinhas-ouricos", "bombons-tradicionais", "bombons-finos-camafeus", "bombons-artisticos-torres", "brigadeiros-finos"],
        "bolos": ["bolos-tradicionais", "bolos-especiais", "bolos-finos"],
        "salgados": ["fritos", "empadas-esfihas", "folhados-croissants", "quiches-assados-especiais", "mini-sanduiches"],
        "lembrancinhas": ["bem-casados", "caixinhas-macarons", "alfajor-pao-mel"],
        "sobremesas-tortas": ["mini-sobremesas-classicas", "brownies-mil-folhas", "tarteletes", "verrines-classicas", "verrines-frutadas-especiais"]
    };

    const subcategoryMeta = {
        "doces-classicos-especiais": {
            "doces-classicos": { title: "Doces Clássicos", desc: "Os tradicionais docinhos que não podem faltar em nenhuma comemoração." },
            "brigadeiros-especiais": { title: "Brigadeiros Especiais", desc: "Sabores diferenciados e receitas autorais exclusivas." },
            "copinhos": { title: "Copinhos", desc: "Delicados copinhos de chocolate com recheios cremosos e irresistíveis." },
            "cupcakes-macarons": { title: "Cupcakes & Macarons", desc: "Cupcakes artesanais e o clássico doce francês feito com perfeição." },
            "frutas-castanhas": { title: "Doces de Frutas & Castanhas", desc: "Doces finos clássicos baseados em frutas nobres, damasco, nozes e fondant." }
        },
        "doces-finos-artisticos": {
            "caixinhas-ouricos": { title: "Caixinhas & Ouriços", desc: "Copos decorados e ouriços caramelizados ou envoltos em amêndoas e pistache." },
            "bombons-tradicionais": { title: "Bombons Tradicionais", desc: "Deliciosos bombons artesanais com cobertura fracionada premium." },
            "bombons-finos-camafeus": { title: "Bombons Finos & Camafeus", desc: "Bombons refinados, trufados e camafeus clássicos de nozes." },
            "bombons-artisticos-torres": { title: "Bombons Artísticos & Torres", desc: "Criações artísticas pintadas à mão e a imponente torre de macarons." },
            "brigadeiros-finos": { title: "Brigadeiros Finos", desc: "O ápice do brigadeiro de festa, feito com chocolate belga e granullés finos." }
        },
        "bolos": {
            "bolos-tradicionais": { title: "Bolos Tradicionais", desc: "Receitas clássicas e consagradas decoradas em chantilly leve." },
            "bolos-especiais": { title: "Bolos Especiais", desc: "Bolos decorados e saborizados com frutas frescas selecionadas." },
            "bolos-finos": { title: "Bolos Finos", desc: "Alta confeitaria combinando cremes e sabores premium de luxo." }
        },
        "salgados": {
            "fritos": { title: "Fritos", desc: "Salgadinhos fritos artesanais, fritos na hora com casca super crocante." },
            "empadas-esfihas": { title: "Empadas & Esfihas", desc: "Empadinhas que derretem na boca e mini esfihas assadas e macias." },
            "folhados-croissants": { title: "Folhados & Croissants", desc: "Deliciosas massas folhadas amanteigadas recheadas e salgados especiais." },
            "quiches-assados-especiais": { title: "Quiches & Assados", desc: "Delicadas tortinhas abertas com recheio cremoso e doguinhos especiais." },
            "mini-sanduiches": { title: "Mini Sanduíches", desc: "Mini hambúrgueres e sanduíches gourmet recheados com ingredientes especiais." }
        },
        "lembrancinhas": {
            "bem-casados": { title: "Bem-Casados", desc: "A lembrancinha tradicional de casamento e festas com doce de leite e recheios finos." },
            "caixinhas-macarons": { title: "Caixinhas & Macarons", desc: "Macarons embalados em acrílico ou tecido fino com laço de cetim." },
            "alfajor-pao-mel": { title: "Alfajor & Pão de Mel", desc: "Delicados alfajores artesanais e pão de mel macio coberto de chocolate." }
        },
        "sobremesas-tortas": {
            "mini-sobremesas-classicas": { title: "Mini Sobremesas Clássicas", desc: "Sobremesas em porções individuais de pudim, quindim, banoffee e pavlova." },
            "brownies-mil-folhas": { title: "Brownies & Mil-Folhas", desc: "Brownies densos e fatias folhadas crocantes de mil-folhas artesanal." },
            "tarteletes": { title: "Tarteletes", desc: "Tortinhas individuais com massa sucrée crocante e coberturas nobres." },
            "verrines-classicas": { title: "Verrines Clássicas", desc: "Delicados copinhos com camadas de bolo, panacotta ou torta de limão." },
            "verrines-frutadas-especiais": { title: "Verrines Frutadas & Especiais", desc: "Copinhos individuais com cremes leves e caldas frescas de frutas nobres." }
        }
    };

    const editorialMeta = {
        "doces-classicos-especiais": {
            title: "Doces Clássicos & Especiais",
            desc: "Os docinhos clássicos da infância e brigadeiros especiais para encantar seus convidados."
        },
        "doces-finos-artisticos": {
            title: "Doces Finos & Artísticos",
            desc: "Bombons sofisticados, caixinhas trufadas e peças artísticas dignas dos melhores eventos."
        },
        "bolos": {
            title: "Bolos Artesanais",
            desc: "Receitas artesanais exclusivas com acabamento primoroso para a sua celebração."
        },
        "salgados": {
            title: "Salgados Festivos",
            desc: "Salgadinhos fritos, assados e mini sanduíches montados com recheios generosos."
        },
        "lembrancinhas": {
            title: "Lembrancinhas Afetivas",
            desc: "Bem-casados e mimos decorados para marcar o dia e agradecer aos seus convidados."
        },
        "sobremesas-tortas": {
            title: "Sobremesas & Tortas",
            desc: "Tarteletes finas, verrines individuais e mini clássicos em apresentações deslumbrantes."
        }
    };

    // --- LANDING PAGE HOME & CAROUSEL SETUP ---
    // Insira avaliações reais e aprovadas pelo cliente neste array.
    // Exemplo: { nome: "Fernanda Lima", texto: "Os doces finos foram um sucesso no casamento!", estrelas: 5, evento: "Casamento" }
    const avaliacoes = [];

    let slideshowInterval = null;
    const iniciarSlideshow = () => {
        const slides = document.querySelectorAll(".hero-slide");
        if (slides.length === 0) return;

        let currentIndex = 0;
        slides.forEach((slide, idx) => {
            slide.classList.remove("active");
            if (idx === 0) {
                slide.classList.add("active");
            }
        });

        if (slideshowInterval) clearInterval(slideshowInterval);

        slideshowInterval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.remove("active");
            slides[nextIndex].classList.add("active");
            currentIndex = nextIndex;
        }, 5500);
    };

    const iniciarBrandAnimations = () => {
        const homeHero = document.querySelector(".home-hero");
        if (homeHero) {
            homeHero.classList.remove("reveal-active");
            void homeHero.offsetWidth; // force reflow
            homeHero.classList.add("reveal-active");
        }
    };

    const registrarScrollRevealHome = () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('.is-hidden-reveal').forEach(sec => {
                sec.classList.add('reveal-active');
            });
            return;
        }

        const sections = document.querySelectorAll('.is-hidden-reveal:not(.reveal-observed)');
        if (sections.length === 0) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sec = entry.target;
                    sec.classList.add('reveal-active');
                    sec.classList.add('reveal-observed');
                    obs.unobserve(sec);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(sec => {
            observer.observe(sec);
        });
    };

    // Conteúdo temporário de demonstração.
    // Substituir por avaliações reais aprovadas antes da publicação definitiva.
    const depoimentosDemonstrativos = [
        {
            nome: "Depoimento demonstrativo 1",
            evento: "Casamento",
            texto: "Os doces fizeram parte de cada detalhe da celebração. A apresentação ficou delicada e encantadora.",
            nota: 5,
            demonstrativo: true
        },
        {
            nome: "Depoimento demonstrativo 2",
            evento: "Aniversário",
            texto: "A mesa ficou linda e os sabores combinaram perfeitamente com a proposta da festa.",
            nota: 5,
            demonstrativo: true
        },
        {
            nome: "Depoimento demonstrativo 3",
            evento: "Evento especial",
            texto: "O cuidado com os acabamentos e a organização transformou a encomenda em uma experiência especial.",
            nota: 5,
            demonstrativo: true
        }
    ];

    const renderTestimonials = () => {
        const testimonialsSection = document.getElementById("home-depoimentos");
        const container = document.getElementById("testimonials-container");
        if (!testimonialsSection || !container) return;

        container.innerHTML = depoimentosDemonstrativos.map((av) => `
            <div class="testimonial-card">
                <div class="testimonial-quote-icon">“</div>
                <p class="testimonial-text">"${av.texto}"</p>
                <div class="testimonial-stars">
                    ${"★".repeat(av.nota)}${"☆".repeat(5 - av.nota)}
                </div>
                <div class="testimonial-meta">
                    <span class="testimonial-event">${av.evento}</span>
                    <span class="testimonial-tag">Depoimento demonstrativo</span>
                </div>
            </div>
        `).join('');
    };

    function limparBloqueiosDeNavegacao() {
        document.body.classList.remove("no-scroll");
        const modalMask = document.getElementById("modalMask");
        if (modalMask) modalMask.classList.remove("show");
        const cartOverlay = document.querySelector(".cart-overlay");
        if (cartOverlay) cartOverlay.classList.remove("show");

        document.documentElement.style.removeProperty("overflow");
        document.body.style.removeProperty("overflow");
        
        if (typeof fecharQuickAddModal === "function") fecharQuickAddModal();
    }

    function mostrarHome(atualizarHistorico = true) {
        limparBloqueiosDeNavegacao();

        categoriaAtiva = "home";
        subcategoriaAtiva = "all";

        const homeContent = document.getElementById("home-content");
        const catalogContent = document.getElementById("catalog-content");
        const productsContainer = document.querySelector(".products-container");
        const catalogHeader = document.getElementById("catalog-header");

        if (catalogContent) catalogContent.classList.add("is-hidden");
        if (homeContent) homeContent.classList.remove("is-hidden");

        if (productsContainer) productsContainer.innerHTML = "";
        if (catalogHeader) catalogHeader.classList.add("is-hidden");
        
        if (megaDropdown) {
            megaDropdown.classList.remove("show");
            megaDropdown.classList.add("is-hidden");
        }
        const subarea = document.getElementById("subcategory-selection-area");
        if (subarea) {
            subarea.classList.add("is-hidden");
        }

        atualizarCategoriasAtivas();

        if (atualizarHistorico) {
            history.pushState(
                { view: "home" },
                ""
            );
        }

        // Inicia os elementos dinâmicos da home
        iniciarSlideshow();
        iniciarBrandAnimations();
        renderizarGaleria();
        configurarNavegacaoMomentos();
        renderTestimonials();
        registrarScrollRevealHome();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function categoriaPossuiSubcategoriasReais(categoria) {
        const valores = [
            ...new Set(
                produtos
                    .filter((produto) =>
                        produto.categoria === categoria
                    )
                    .map((produto) =>
                        produto.subcategoria?.trim()
                    )
                    .filter(Boolean)
            )
        ];

        return valores.length > 1;
    }

    function selecionarCategoria(categoria, subcategoria = null, atualizarHistorico = true) {
        limparBloqueiosDeNavegacao();
        
        categoriaAtiva = categoria;
        subcategoriaAtiva = subcategoria;

        // Reset search input on category change
        if (searchInput) searchInput.value = "";
        termoBusca = "";

        const homeContent = document.getElementById("home-content");
        const catalogContent = document.getElementById("catalog-content");

        if (homeContent) homeContent.classList.add("is-hidden");
        if (catalogContent) catalogContent.classList.remove("is-hidden");

        // If the category has no real subcategories, show all products immediately and skip selecting subcategory
        if (!categoriaPossuiSubcategoriasReais(categoria)) {
            subcategoriaAtiva = "all";
        }

        renderizarFiltrosSubcategoria(categoriaAtiva);
        filtrarEMostrarProdutos();
        atualizarCategoriasAtivas();

        if (atualizarHistorico) {
            history.pushState(
                {
                    view: "catalog",
                    categoria: categoriaAtiva,
                    subcategoria: subcategoriaAtiva === "all" ? null : subcategoriaAtiva
                },
                ""
            );
        }

        const catalogHeader = document.getElementById("catalog-header");
        if (catalogHeader) {
            catalogHeader.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

    function selecionarSubcategoria(subcategoria, atualizarHistorico = true) {
        if (!categoriaAtiva || !subcategoria) return;

        subcategoriaAtiva = subcategoria;

        const subgrid = document.getElementById("subcategory-grid");
        if (subgrid) {
            subgrid.querySelectorAll(".subcategory-card").forEach(item => {
                if (item.dataset.subcategory === subcategoria) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        }

        filtrarEMostrarProdutos();

        if (atualizarHistorico) {
            history.pushState(
                {
                    view: "catalog",
                    categoria: categoriaAtiva,
                    subcategoria: subcategoriaAtiva
                },
                ""
            );
        }

        const container = document.querySelector(".products-container");
        if (container) {
            container.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

    const renderizarFiltrosSubcategoria = (cat) => {
        const subcats = obterSubcategoriasDaCategoria(cat);
        const subarea = document.getElementById("subcategory-selection-area");
        const subgrid = document.getElementById("subcategory-grid");

        if (subcats.length === 0 || !categoriaPossuiSubcategoriasReais(cat)) {
            if (subarea) {
                subarea.classList.add("is-hidden");
            }
            return;
        }

        if (subarea && subgrid) {
            subarea.classList.remove("is-hidden");
            subgrid.innerHTML = subcats.map(sub => {
                const title = formatarNomeSubcategoria(sub);
                const isActive = subcategoriaAtiva === sub;
                return `
                    <button type="button" class="subcategory-card ${isActive ? 'active' : ''}" data-subcategory="${sub}">
                        <span class="subcategory-card-title">${title}</span>
                    </button>
                `;
            }).join('');

            subgrid.querySelectorAll(".subcategory-card").forEach(btn => {
                btn.addEventListener("click", (event) => {
                    const card = event.target.closest(".subcategory-card");
                    if (!card) return;
                    const sub = card.dataset.subcategory;
                    
                    subcategoriaAtiva = sub;

                    subgrid.querySelectorAll(".subcategory-card").forEach(item => {
                        if (item.dataset.subcategory === sub) {
                            item.classList.add("active");
                        } else {
                            item.classList.remove("active");
                        }
                    });

                    filtrarEMostrarProdutos();

                    history.pushState(
                        {
                            view: "catalog",
                            categoria: categoriaAtiva,
                            subcategoria: subcategoriaAtiva
                        },
                        ""
                    );
                    
                    const catalogHeader = document.getElementById("catalog-header");
                    if (catalogHeader) {
                        catalogHeader.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                });
            });
        }
    };

    const atualizarCategoriasAtivas = () => {
        categoryBtns.forEach(b => {
            if (b.dataset.category === categoriaAtiva) {
                b.classList.add("active");
            } else {
                b.classList.remove("active");
            }
        });
    };

    const renderizarCabecalhoEditorial = (cat, count) => {
        const catalogHeader = document.getElementById("catalog-header");
        if (!catalogHeader) return;

        if (cat === "home") {
            catalogHeader.classList.add("is-hidden");
            return;
        }

        const meta = editorialMeta[cat];
        if (!meta) {
            catalogHeader.classList.add("is-hidden");
            return;
        }

        let tituloExibir = meta.title;
        let descExibir = meta.desc;

        if (!subcategoriaAtiva) {
            descExibir = "Selecione uma opção para conhecer nossas criações";
            catalogHeader.innerHTML = `
                <div class="catalog-editorial">
                    <span class="editorial-subtitle">CATÁLOGO TONS DO SABOR</span>
                    <h2 class="editorial-title">${tituloExibir}</h2>
                    <p class="editorial-desc">${descExibir}</p>
                    <div class="editorial-divider">◇</div>
                </div>
            `;
        } else {
            if (subcategoriaAtiva === "all" || !categoriaPossuiSubcategoriasReais(cat)) {
                tituloExibir = meta.title;
            } else {
                const subMeta = subcategoryMeta[cat]?.[subcategoriaAtiva];
                if (subMeta) {
                    tituloExibir = subMeta.title;
                    descExibir = subMeta.desc;
                } else {
                    const subTitle = formatarNomeSubcategoria(subcategoriaAtiva);
                    tituloExibir = subTitle;
                }
            }
            catalogHeader.innerHTML = `
                <div class="catalog-editorial">
                    <span class="editorial-subtitle">${meta.title.toUpperCase()}</span>
                    <h2 class="editorial-title">${tituloExibir}</h2>
                    <p class="editorial-desc">${descExibir}</p>
                    <div class="editorial-divider">◇</div>
                    <span class="editorial-count">${count} ${count === 1 ? 'PRODUTO' : 'PRODUTOS'}</span>
                </div>
            `;
        }
        catalogHeader.classList.remove("is-hidden");
    };

    const registrarScrollReveal = () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('.product-card').forEach(card => {
                card.classList.add('reveal');
            });
            return;
        }

        const cards = document.querySelectorAll('.product-card:not(.reveal-observed)');
        if (cards.length === 0) return;

        const observer = new IntersectionObserver((entries, obs) => {
            let delay = 0;
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    card.style.transitionDelay = `${delay}ms`;
                    card.classList.add('reveal');
                    card.classList.add('reveal-observed');
                    obs.unobserve(card);
                    delay += 80;
                }
            });
        }, { threshold: 0.05 });

        cards.forEach(card => {
            observer.observe(card);
        });
    };

    const getSubcategories = (cat) => {
        return obterSubcategoriasDaCategoria(cat);
    };;

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
        const homeContent = document.getElementById("home-content");
        const catalogContent = document.getElementById("catalog-content");
        const searchTitle = document.getElementById("search-title");
        const catalogHeader = document.getElementById("catalog-header");
        const subarea = document.getElementById("subcategory-selection-area");

        // GLOBAL SEARCH MODE
        if (termoBusca.trim() !== "") {
            if (homeContent) homeContent.classList.add("is-hidden");
            if (catalogContent) catalogContent.classList.remove("is-hidden");
            if (megaDropdown) {
                megaDropdown.classList.remove("show");
                megaDropdown.classList.add("is-hidden");
            }
            if (subarea) {
                subarea.classList.add("is-hidden");
            }
            if (catalogHeader) catalogHeader.classList.add("is-hidden");

            const termo = termoBusca.toLowerCase();
            const produtosFiltrados = produtos.filter(
                (produto) =>
                    produto.ativo !== false && (
                    produto.nome.toLowerCase().includes(termo) ||
                    produto.descricao.toLowerCase().includes(termo) ||
                    (produto.aliases && produto.aliases.some(alias => alias.toLowerCase().includes(termo)))
                    )
            );

            const container = document.querySelector(".products-container");
            if (produtosFiltrados.length === 0) {
                if (searchTitle) {
                    searchTitle.classList.remove("is-hidden");
                    searchTitle.textContent = `Resultados para "${termoBusca}" (0 produtos)`;
                }
                container.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #999;">
                        <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <p style="font-size: 1.2rem; font-weight: 600;">Nenhum produto encontrado</p>
                    </div>
                `;
            } else {
                if (searchTitle) {
                    searchTitle.classList.remove("is-hidden");
                    searchTitle.textContent = `Resultados para "${termoBusca}" (${produtosFiltrados.length} ${produtosFiltrados.length === 1 ? 'produto' : 'produtos'})`;
                }
                container.innerHTML = produtosFiltrados
                    .map(
                        (p, index) => {
                            const precoExibir = p.preco !== undefined ? p.preco : p.precoBase;
                            const isFirstFew = index < 4;
                            const imgSrc = isFirstFew ? p.imagem : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                            const dataSrc = isFirstFew ? "" : `data-src="${p.imagem}"`;

                            return `
                                <li class="product-list-item">
                                    <article class="product-card" data-id="${p.id}">
                                        <div class="card-image-container">
                                            <img class="product-img" src="${imgSrc}" ${dataSrc} alt="${p.nome}" onerror="aplicarFallbackImagem(this)" loading="lazy" width="250" height="240">
                                        </div>
                                        
                                        <div class="product-info">
                                            <h3 class="product-name">${p.nome}</h3>
                                            <p class="product-price">${formatarMoeda(precoExibir)}</p>
                                            <button type="button" class="product-button">${p.requerPersonalizacao ? 'Ver opções' : 'Adicionar'}</button>
                                        </div>
                                    </article>
                                </li>
                            `;
                        }
                    )
                    .join("");
                
                initProductLazyLoading();
                registrarScrollReveal();
            }
            return;
        }

        // NORMAL MODE (EMPTY SEARCH)
        if (searchTitle) searchTitle.classList.add("is-hidden");

        if (categoriaAtiva === "home") {
            document.querySelector(".products-container").innerHTML = "";
            if (homeContent) homeContent.classList.remove("is-hidden");
            if (catalogContent) catalogContent.classList.add("is-hidden");
            if (catalogHeader) catalogHeader.classList.add("is-hidden");
            if (megaDropdown) {
                megaDropdown.classList.remove("show");
                megaDropdown.classList.add("is-hidden");
            }
            if (subarea) {
                subarea.classList.add("is-hidden");
            }
            return;
        }

        if (homeContent) homeContent.classList.add("is-hidden");
        if (catalogContent) catalogContent.classList.remove("is-hidden");

        const container = document.querySelector(".products-container");

        if (!subcategoriaAtiva) {
            renderizarCabecalhoEditorial(categoriaAtiva, 0);
            container.innerHTML = "";
            return;
        }

        let produtosFiltrados = produtos.filter((produto) => {
            if (produto.ativo === false) return false;
            const correspondeCategoria = produto.categoria === categoriaAtiva;
            let correspondeSubcategoria = false;
            if (subcategoriaAtiva === "all" || !categoriaPossuiSubcategoriasReais(categoriaAtiva)) {
                correspondeSubcategoria = true;
            } else if (subcategoriaAtiva === "outros") {
                correspondeSubcategoria = !produto.subcategoria;
            } else {
                correspondeSubcategoria = produto.subcategoria === subcategoriaAtiva;
            }
            return correspondeCategoria && correspondeSubcategoria;
        });

        if (produtosFiltrados.length === 0) {
            renderizarCabecalhoEditorial(categoriaAtiva, 0);
            container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #999;">
                    <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p style="font-size: 1.2rem; font-weight: 600;">Nenhum produto encontrado</p>
                </div>
            `;
        } else {
            renderizarCabecalhoEditorial(categoriaAtiva, produtosFiltrados.length);
            container.innerHTML = produtosFiltrados
                .map(
                    (p, index) => {
                        const precoExibir = p.preco !== undefined ? p.preco : p.precoBase;
                        const isFirstFew = index < 4;
                        const imgSrc = isFirstFew ? p.imagem : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                        const dataSrc = isFirstFew ? "" : `data-src="${p.imagem}"`;

                        return `
                            <li class="product-list-item">
                                <article class="product-card" data-id="${p.id}">
                                    <div class="card-image-container">
                                        <img class="product-img" src="${imgSrc}" ${dataSrc} alt="${p.nome}" onerror="aplicarFallbackImagem(this)" loading="lazy" width="250" height="240">
                                    </div>
                                    
                                    <div class="product-info">
                                        <h3 class="product-name">${p.nome}</h3>
                                        <p class="product-price">${formatarMoeda(precoExibir)}</p>
                                        <button type="button" class="product-button">${p.requerPersonalizacao ? 'Ver opções' : 'Adicionar'}</button>
                                    </div>
                                </article>
                            </li>
                        `;
                    }
                )
                .join("");
            
            initProductLazyLoading();
            registrarScrollReveal();
        }
    };;

    const adicionarAoCarrinho = (produtoId, productCard) => {
        if (productCard) animacaoVoarParaCarrinho(productCard);
        const produto = produtos.find((p) => p.id === produtoId);
        if (!produto) return;

        const basePreco = limparEParsarPreco(produto.preco !== undefined ? produto.preco : produto.precoBase);

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

    const adicionarAoCarrinhoComQuantidade = (produtoId, quantidade, productCard) => {
        if (productCard) animacaoVoarParaCarrinho(productCard);
        const produto = produtos.find((p) => p.id === produtoId);
        if (!produto) return;

        const basePreco = limparEParsarPreco(produto.preco !== undefined ? produto.preco : produto.precoBase);

        const itemNoCarrinho = carrinho.find((item) => item.id === String(produto.id));
        if (itemNoCarrinho) {
            itemNoCarrinho.quantidade += quantidade;
        } else {
            carrinho.push({
                id: String(produto.id),
                nome: produto.nome,
                preco: basePreco,
                quantidade: quantidade,
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
        else if (product.tipoPersonalizacao === "tamanho-bolo") {
            const label = document.createElement('label');
            label.textContent = 'Selecione o Tamanho:';

            const grid = document.createElement('div');
            grid.className = 'options-grid';
            grid.id = 'custom-select-tamanho-grid';

            const basePreco = limparEParsarPreco(product.precoBase !== undefined ? product.precoBase : product.preco);

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
                    text += ` - ${opcao.detalhe}`;
                }
                const precoTamanho = basePreco + (opcao.adicional || 0);
                text += ` (${formatarMoeda(precoTamanho)})`;

                const labelOpt = document.createElement('label');
                labelOpt.setAttribute('for', `opt-tamanho-${idx}`);
                labelOpt.className = 'radio-pill-label';
                labelOpt.textContent = text;

                wrapper.appendChild(radio);
                wrapper.appendChild(labelOpt);
                grid.appendChild(wrapper);
            });

            customizationFields.appendChild(label);
            customizationFields.appendChild(grid);
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

        const atualizarPreviewModal = () => {
            const preview = document.getElementById('modal-price-preview');
            if (!preview || !produtoSendoPersonalizado) return;
            const base = limparEParsarPreco(produtoSendoPersonalizado.precoBase !== undefined
                ? produtoSendoPersonalizado.precoBase
                : produtoSendoPersonalizado.preco);
            const selectedRadio = dynamicCustomizationForm.querySelector("input[name='sabor']:checked") ||
                                  dynamicCustomizationForm.querySelector("input[name='tamanho']:checked");
            const adicional = selectedRadio && selectedRadio.dataset.adicional
                ? limparEParsarPreco(selectedRadio.dataset.adicional)
                : 0;
            const qty = parseInt(qtyInput.value) || minVal;
            const unitPrice = base + adicional;
            const total = unitPrice * qty;
            preview.textContent = `${qty} un. × ${formatarMoeda(unitPrice)} = ${formatarMoeda(total)}`;
        };

        btnDec.addEventListener('click', () => {
            let current = parseInt(qtyInput.value) || minVal;
            if (current > minVal) {
                qtyInput.value = current - 1;
            }
            atualizarPreviewModal();
        });

        btnInc.addEventListener('click', () => {
            let current = parseInt(qtyInput.value) || minVal;
            qtyInput.value = current + 1;
            atualizarPreviewModal();
        });

        qtyInput.addEventListener('input', () => {
            let val = parseInt(qtyInput.value) || minVal;
            if (val < minVal) {
                qtyInput.value = minVal;
            }
            atualizarPreviewModal();
        });

        qtyInput.addEventListener('change', () => {
            let val = parseInt(qtyInput.value) || minVal;
            if (val < minVal) {
                qtyInput.value = minVal;
            }
            atualizarPreviewModal();
        });

        qtyContainer.appendChild(btnDec);
        qtyContainer.appendChild(qtyInput);
        qtyContainer.appendChild(btnInc);

        customizationFields.appendChild(labelQty);
        customizationFields.appendChild(qtyContainer);

        customizationModal.showModal();
        customizationModal.dispatchEvent(new Event('show'));

        // Wire radio changes to price preview after modal is rendered
        setTimeout(() => {
            const allRadios = customizationFields.querySelectorAll('input[type="radio"]');
            allRadios.forEach(r => r.addEventListener('change', () => {
                const preview = document.getElementById('modal-price-preview');
                if (!preview || !produtoSendoPersonalizado) return;
                const base = limparEParsarPreco(produtoSendoPersonalizado.precoBase !== undefined
                    ? produtoSendoPersonalizado.precoBase
                    : produtoSendoPersonalizado.preco);
                const adicional = r.dataset.adicional ? limparEParsarPreco(r.dataset.adicional) : 0;
                const qtyEl = document.getElementById('custom-product-qty');
                const qty = qtyEl ? (parseInt(qtyEl.value) || 1) : 1;
                const unitPrice = base + adicional;
                preview.textContent = `${qty} un. × ${formatarMoeda(unitPrice)} = ${formatarMoeda(unitPrice * qty)}`;
            }));

            // Trigger preview for initially checked option
            const firstChecked = customizationFields.querySelector('input[type="radio"]:checked');
            if (firstChecked) firstChecked.dispatchEvent(new Event('change', { bubbles: true }));
        }, 60);
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

    const quickAddModal = document.getElementById('quickAddModal');
    const quickAddForm = document.getElementById('quick-add-form');
    const quickAddTitle = document.getElementById('quickAddTitle');
    const quickAddUnitPrice = document.getElementById('quickAddUnitPrice');
    const quickAddMinimum = document.getElementById('quickAddMinimum');
    const quickAddQtyInput = document.getElementById('quickAddQtyInput');
    const quickAddSubtotal = document.getElementById('quickAddSubtotal');

    let quickAddProduct = null;
    let quickAddCard = null;

    function abrirQuickAddModal(productId, productCard) {
        const product = produtos.find(p => p.id === productId);
        if (!product) return;

        quickAddProduct = product;
        quickAddCard = productCard;

        quickAddTitle.textContent = product.nome;

        const basePreco = limparEParsarPreco(product.preco !== undefined ? product.preco : product.precoBase);
        quickAddUnitPrice.textContent = `${formatarMoeda(basePreco)} por unidade`;

        const requiresMinimum = product.categoria !== "bolos" && product.id !== 45;
        const minQty = requiresMinimum ? 20 : 1;

        if (requiresMinimum) {
            quickAddMinimum.style.display = "block";
            quickAddMinimum.textContent = `Pedido mínimo: 20 unidades`;
            quickAddQtyInput.min = 20;
            quickAddQtyInput.value = 20;
        } else {
            quickAddMinimum.style.display = "none";
            quickAddQtyInput.min = 1;
            quickAddQtyInput.value = 1;
        }

        atualizarQuickAddSubtotal();
        if (modalMask) modalMask.classList.add('show');
        quickAddModal.showModal();
        quickAddModal.classList.add('show');
        lockScroll();
        setTimeout(() => createFocusTrap(quickAddModal), 50);
    }

    function fecharQuickAddModal() {
        if (quickAddModal) {
            quickAddModal.classList.remove('show');
            if (quickAddModal.open) quickAddModal.close();
        }
        if (modalMask) modalMask.classList.remove('show');
        unlockScroll();
        quickAddProduct = null;
        quickAddCard = null;
    }

    window.fecharQuickAddModal = fecharQuickAddModal;

    function atualizarQuickAddSubtotal() {
        if (!quickAddProduct) return;
        const basePreco = limparEParsarPreco(quickAddProduct.preco !== undefined ? quickAddProduct.preco : quickAddProduct.precoBase);
        const qty = parseInt(quickAddQtyInput.value) || 1;
        const subtotal = basePreco * qty;
        quickAddSubtotal.textContent = `Subtotal: ${formatarMoeda(subtotal)}`;
    }

    if (quickAddForm) {
        const quickAddMinus = quickAddForm.querySelector('.qty-minus');
        const quickAddPlus = quickAddForm.querySelector('.qty-plus');

        if (quickAddMinus && quickAddPlus) {
            quickAddMinus.addEventListener('click', () => {
                const min = parseInt(quickAddQtyInput.min) || 1;
                let qty = parseInt(quickAddQtyInput.value) || 1;
                if (qty > min) {
                    qty--;
                    quickAddQtyInput.value = qty;
                    atualizarQuickAddSubtotal();
                }
            });

            quickAddPlus.addEventListener('click', () => {
                let qty = parseInt(quickAddQtyInput.value) || 1;
                qty++;
                quickAddQtyInput.value = qty;
                atualizarQuickAddSubtotal();
            });
        }

        quickAddQtyInput.addEventListener('input', () => {
            atualizarQuickAddSubtotal();
        });

        quickAddQtyInput.addEventListener('change', () => {
            const min = parseInt(quickAddQtyInput.min) || 1;
            let qty = parseInt(quickAddQtyInput.value) || 1;
            if (qty < min) {
                quickAddQtyInput.value = min;
            }
            atualizarQuickAddSubtotal();
        });

        quickAddForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!quickAddProduct) return;

            const qty = parseInt(quickAddQtyInput.value) || 1;
            const min = parseInt(quickAddQtyInput.min) || 1;
            if (qty < min) {
                alert(`A quantidade mínima é de ${min} unidades.`);
                return;
            }

            adicionarAoCarrinhoComQuantidade(quickAddProduct.id, qty, quickAddCard);
            fecharQuickAddModal();
        });
    }

    const quickAddClose = document.querySelector("#quickAddModal .close");
    if (quickAddClose) {
        quickAddClose.addEventListener('click', fecharQuickAddModal);
    }

    if (quickAddModal) {
        quickAddModal.addEventListener("click", (e) => {
            if (e.target === quickAddModal) {
                fecharQuickAddModal();
            }
        });
        quickAddModal.addEventListener("close", fecharQuickAddModal);
    }

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
            sugestoesCalculadas.salgados = { id: 201, quantidade: salgadosQtd };
            const pSalgado = produtos.find(p => p.id === 201);
            htmlResultados += `<li><strong>Salgados:</strong> ${salgadosQtd} unidades recomendadas. Sugerimos o clássico <em>${pSalgado ? pSalgado.nome : 'Coxinha'}</em>.</li>`;
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
                            preco: limparEParsarPreco(product.preco !== undefined ? product.preco : product.precoBase),
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
                        preco: limparEParsarPreco(product.preco !== undefined ? product.preco : product.precoBase),
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
                        preco: limparEParsarPreco(product.preco !== undefined ? product.preco : product.precoBase),
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

            const basePreco = limparEParsarPreco(produtoSendoPersonalizado.precoBase !== undefined ? produtoSendoPersonalizado.precoBase : produtoSendoPersonalizado.preco);

            if (produtoSendoPersonalizado.tipoPersonalizacao === "sabor") {
                const sabor = escapeHTML(formData.get("sabor"));
                personalizacaoObj = { sabor };

                const selectedOpt = dynamicCustomizationForm.querySelector("input[name='sabor']:checked");
                if (selectedOpt && selectedOpt.dataset.adicional) {
                    adicionalPreco = limparEParsarPreco(selectedOpt.dataset.adicional);
                }

                nomeCustomizado = `${produtoSendoPersonalizado.nome} (${sabor})`;
            }
            else if (produtoSendoPersonalizado.tipoPersonalizacao === "quantidade-cores") {
                const tamanho = escapeHTML(formData.get("tamanho"));
                const cores = escapeHTML(formData.get("cores"));
                personalizacaoObj = { tamanho, cores };

                const selectedOpt = dynamicCustomizationForm.querySelector("input[name='tamanho']:checked");
                if (selectedOpt && selectedOpt.dataset.adicional) {
                    adicionalPreco = limparEParsarPreco(selectedOpt.dataset.adicional);
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
            else if (produtoSendoPersonalizado.tipoPersonalizacao === "tamanho-bolo") {
                const tamanho = escapeHTML(formData.get("tamanho"));
                personalizacaoObj = { tamanho };

                const selectedOpt = dynamicCustomizationForm.querySelector("input[name='tamanho']:checked");
                if (selectedOpt && selectedOpt.dataset.adicional) {
                    adicionalPreco = limparEParsarPreco(selectedOpt.dataset.adicional);
                }

                nomeCustomizado = `${produtoSendoPersonalizado.nome} (${tamanho})`;
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
        
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (cat === "home") {
                mostrarHome(true);
            } else {
                selecionarCategoria(cat, null, true);
            }
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            termoBusca = e.target.value;
            const subarea = document.getElementById("subcategory-selection-area");
            if (subarea) subarea.classList.add("is-hidden");
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
                    abrirQuickAddModal(id, productCard);
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
        "./assets/galeria/evento2.webp",
        "./assets/galeria/evento3.webp",
        "./assets/galeria/evento4.webp",
        "./assets/galeria/evento5.webp",
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
                <article class="gallery-item galeria-item" data-index="${index}">
                    <img class="galeria-img" src="${imgSrc}" alt="Momento Real ${index + 1}" loading="lazy">
                    <div class="galeria-overlay">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                </article>
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

    function configurarNavegacaoMomentos() {
        const carousel = document.querySelector(".moments-carousel");
        const previousButton = document.querySelector(".moments-nav-prev");
        const nextButton = document.querySelector(".moments-nav-next");

        if (!carousel || !previousButton || !nextButton) return;

        const obterDistancia = () => Math.max(carousel.clientWidth * 0.75, 300);

        // Remove old listeners by replacing with clones
        const newPrev = previousButton.cloneNode(true);
        const newNext = nextButton.cloneNode(true);
        previousButton.parentNode.replaceChild(newPrev, previousButton);
        nextButton.parentNode.replaceChild(newNext, nextButton);

        newPrev.addEventListener("click", () => {
            carousel.scrollBy({
                left: -obterDistancia(),
                behavior: "smooth"
            });
        });

        newNext.addEventListener("click", () => {
            carousel.scrollBy({
                left: obterDistancia(),
                behavior: "smooth"
            });
        });
    }

    function mostrarGaleriaTela(push = true) {
        irParaGaleria();
    }

    window.mostrarGaleriaTela = mostrarGaleriaTela;

    function mostrarProdutosTela(push = true) {
        if (linkGaleria) linkGaleria.classList.remove("active");
    }

    window.mostrarProdutosTela = mostrarProdutosTela;

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
    function irParaGaleria() {
        mostrarHome(false);

        requestAnimationFrame(() => {
            document
                .getElementById("home-galeria")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
        });
    }

    if (linkHome) {
        linkHome.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarHome(true);
        });
    }

    const logoLink = document.querySelector(".logo-link");
    if (logoLink) {
        logoLink.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarHome(true);
        });
    }

    categoryBtns.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const targetButton = event.currentTarget.closest(".category-btn");
            const category = targetButton?.dataset.category;

            if (!category) return;

            if (category === "home") {
                mostrarHome(true);
                return;
            }

            selecionarCategoria(category, null, true);
        });
    });

    document.querySelectorAll(".celebrate-action").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const category = event.currentTarget.dataset.category;
            if (!category) return;

            selecionarCategoria(category, null, true);
        });
    });

    document.getElementById("celebrate-calculator")?.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        abrirCalculatorModal();
    });

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

    document.querySelectorAll(".instagram-grid img").forEach((image) => {
        image.addEventListener(
            "error",
            () => {
                image.src = "./assets/LOGO_TURQUESA_1.webp";
                image.classList.add("image-fallback");
            },
            { once: true }
        );
    });

    window.addEventListener("popstate", (event) => {
        const state = event.state;

        if (!state || state.view === "home") {
            mostrarHome(false);
            return;
        }

        if (
            state.view === "catalog" &&
            state.categoria &&
            !state.subcategoria
        ) {
            selecionarCategoria(
                state.categoria,
                null,
                false
            );
            return;
        }

        if (
            state.view === "catalog" &&
            state.categoria &&
            state.subcategoria
        ) {
            selecionarCategoria(
                state.categoria,
                state.subcategoria,
                false
            );
        }
    });

    // Inicialização da tela (SPA) baseada no estado do histórico ou padrão
    const state = history.state;
    if (state && state.view === "catalog") {
        selecionarCategoria(state.categoria, state.subcategoria || null, false);
    } else {
        mostrarHome(false);
    }

    atualizarCarrinho();
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}
