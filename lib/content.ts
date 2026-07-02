/**
 * Central i18n dictionary. `es` (Spanish) is the default; `pt` (Portuguese) is
 * offered through the in-page language switcher. Both objects implement the same
 * `Dict` interface, so TypeScript fails the build if a key is missing in either
 * language — keeping the two translations perfectly in parity.
 */

export type Locale = "es" | "pt";

type NavT = {
  products: string;
  ads: string;
  pricing: string;
  login: string;
  signup: string;
  openMenu: string;
  closeMenu: string;
  language: string;
};

type ProductT = { title: string; country: string };

export interface Dict {
  common: { getStarted: string };
  nav: NavT;
  hero: {
    livePill: string;
    titleStart: string;
    rotate: string[];
    titleEnd: string;
    subtitle: string;
    ctaFree: string;
    socialProof: string;
    badgeProducts: string;
    badgeAds: string;
    panelTitle: string;
    panelSalesToday: string;
    panelScanned: string;
    toast: string;
    winners: string[];
  };
  logoCloud: { label: string };
  extension: {
    badge: string;
    title: string;
    text: string;
    button: string;
    liveSales: string;
    stock: string;
    free: string;
  };
  dashboard: {
    searchPlaceholder: string;
    countries: string;
    platform: string;
    advancedFilters: string;
    search: string;
    gridView: string;
    listView: string;
    searchProducts: string;
  };
  howItWorks: {
    title: string;
    steps: { title: string; description: string }[];
  };
  featureProducts: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    text: string;
    date: string;
    salesStat: string;
  };
  trending: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    catMakeup: string;
    catSkincare: string;
    trending: string;
    salesLabel: string;
    thisWeek: string;
    names: string[];
    spotted: string;
    bannerText: string;
    sellThrough: string;
  };
  ads: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    textPre: string;
    textPost: string;
    sponsored: string;
    buyNow: string;
    captionSerum: string;
    captionKitchen: string;
  };
  tiktok: {
    commissionBadge: string;
    productName: string;
    commission: string;
    trend: string;
    days: string;
    viewButton: string;
    eyebrow: string;
    titleA: string;
    titleB: string;
    text: string;
  };
  live: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    liveBadge: string;
    sold: string;
    products: string[];
    tracked: string;
  };
  store: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    cart: string;
    guaranteed: string;
    ordersDelivered: string;
    freeShipping: string;
    payOnDelivery: string;
  };
  finalCta: { title: string; text: string };
  footer: {
    description: string;
    columns: { title: string; links: string[] }[];
    rights: string;
    privacy: string;
    terms: string;
    status: string;
  };
  productCard: {
    hot: string;
    stock: string;
    supplier: string;
    country: string;
    price: string;
    sales30: string;
    viewDetails: string;
    moreOptions: string;
  };
  products: ProductT[];
  auth: {
    back: string;
    email: string;
    password: string;
    emailPlaceholder: string;
    login: {
      title: string;
      subtitle: string;
      submit: string;
      noAccount: string;
      signupLink: string;
    };
    signup: {
      title: string;
      subtitle: string;
      submit: string;
      haveAccount: string;
      loginLink: string;
    };
  };
}

const es: Dict = {
  common: { getStarted: "Comenzar" },
  nav: {
    products: "Productos",
    ads: "Anuncios",
    pricing: "Precios",
    login: "Iniciar sesión",
    signup: "Registrarse",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  hero: {
    livePill: "EN VIVO · rastreando ahora",
    titleStart: "Encuentra",
    rotate: ["productos ganadores", "anuncios virales", "tiendas que venden"],
    titleEnd: "antes que nadie",
    subtitle:
      "La plataforma de análisis de mercado #1: espía anuncios, rastrea ventas en tiempo real y encuentra ganadores antes de que se saturen.",
    ctaFree: "Comenzar gratis",
    socialProof: "+12.000 vendedores encuentran ganadores cada día",
    badgeProducts: "Productos",
    badgeAds: "Anuncios",
    panelTitle: "Ganadores de hoy",
    panelSalesToday: "ventas hoy",
    panelScanned: "escaneados hoy",
    toast: "¡Nuevo ganador detectado!",
    winners: [
      "Labial Mate 6 uds",
      "Sérum Ácido Hialurónico",
      "Paleta Blush & Glow",
      "Rallador Giratorio",
    ],
  },
  logoCloud: { label: "Acceso a todas las plataformas" },
  extension: {
    badge: "Instala nuestra extensión",
    title: "Descubre productos ganadores en segundos.",
    text: "Instala la extensión de Chrome de {brand} y lleva tu tienda al siguiente nivel.",
    button: "Gratis y lista para usar",
    liveSales: "Ventas en vivo",
    stock: "Stock",
    free: "Gratis",
  },
  dashboard: {
    searchPlaceholder: "Buscar…",
    countries: "Países",
    platform: "Plataforma",
    advancedFilters: "Filtros avanzados",
    search: "Buscar",
    gridView: "Vista en cuadrícula",
    listView: "Vista en lista",
    searchProducts: "Buscar productos",
  },
  howItWorks: {
    title: "Cómo funciona",
    steps: [
      {
        title: "Encuentra",
        description:
          "Filtra por ventas, margen, stock y tendencias, o busca por texto o imagen.",
      },
      {
        title: "Valida",
        description:
          "Revisa los anuncios que ya están funcionando y activa el seguimiento para ver el movimiento real.",
      },
      {
        title: "Lanza",
        description:
          "Genera una tienda con IA en minutos, o exporta el producto a tu stack actual.",
      },
    ],
  },
  featureProducts: {
    eyebrow: "Acceso a todas las plataformas",
    titleA: "Productos Rentables",
    titleB: "al Instante",
    text: "Usa nuestros filtros avanzados para analizar ventas, rentabilidad y más — EN TIEMPO REAL. Toma decisiones basadas en datos para maximizar tus ganancias.",
    date: "01 Junio 2024",
    salesStat: "Ventas ▲ 12.4%",
  },
  trending: {
    eyebrow: "Productos ganadores",
    titleA: "Tendencia en belleza",
    titleB: "ahora mismo",
    subtitle:
      "Productos reales ganando velocidad en las plataformas — el tipo de ganadores que puedes conseguir y lanzar antes de que se saturen.",
    catMakeup: "Maquillaje",
    catSkincare: "Cuidado facial",
    trending: "En tendencia",
    salesLabel: "ventas / 30 días",
    thisWeek: "esta semana",
    names: [
      "Paleta Blush & Glow",
      "Sérum de Ácido Hialurónico",
      "Sérum Reparador Facial",
      "Sérum de Vitamina B5",
    ],
    spotted: "Visto en tiendas",
    bannerText:
      "Cuando un producto también se agota en tiendas, sabes que la demanda es real — no solo un anuncio pasajero.",
    sellThrough: "de venta en retail",
  },
  ads: {
    eyebrow: "Biblioteca de anuncios",
    titleA: "Anuncios",
    titleB: "que Funcionan",
    textPre: "Explora más de ",
    textPost:
      " anuncios exclusivos de las plataformas que importan, con datos de interacción y seguimiento.",
    sponsored: "Patrocinado",
    buyNow: "Comprar",
    captionSerum: "Este sérum se agotó 3 veces este mes 🔥",
    captionKitchen: "El gadget de cocina del que todos hablan",
  },
  tiktok: {
    commissionBadge: "+35% COMISIÓN",
    productName: "Kit de Labiales Mate (6 uds)",
    commission: "14% Comisión",
    trend: "Tendencia",
    days: "/ 7 días",
    viewButton: "Ver en TikTok Shop",
    eyebrow: "TikTok Shop",
    titleA: "Productos de TikTok Shop",
    titleB: "que Rompen el Mercado",
    text: "Accede a una selección exclusiva de los productos más vendidos en TikTok Shop en EE. UU. — la oportunidad perfecta para replicar estos éxitos en tu mercado.",
  },
  live: {
    eyebrow: "Compras en vivo",
    titleA: "Mira los productos agotarse",
    titleB: "en Vivo",
    subtitle:
      "Rastrea a los creadores y lives que están moviendo unidades reales ahora mismo — mira quién vende, qué es tendencia y qué tan rápido convierte.",
    liveBadge: "En vivo",
    sold: "vendidos",
    products: [
      "Pack de sérums",
      "Lanzamiento de zapatillas",
      "Looks de verano",
      "Ofertas del día",
    ],
    tracked: "lives rastreados en TikTok Shop esta semana",
  },
  store: {
    title: "Plantillas de tienda listas para lanzar",
    subtitle:
      "Elige un tema y genera una tienda de alta conversión en minutos.",
    searchPlaceholder: "Buscar productos…",
    cart: "Carrito",
    guaranteed: "Compras garantizadas",
    ordersDelivered: "Pedidos entregados",
    freeShipping: "ENVÍO GRATIS",
    payOnDelivery: "PAGO CONTRA ENTREGA",
  },
  finalCta: {
    title: "Encuentra productos y anuncios en una sola plataforma",
    text: "Únete a miles de vendedores que usan datos para lanzar productos ganadores más rápido. Empieza gratis — sin tarjeta de crédito.",
  },
  footer: {
    description:
      "La plataforma de análisis de mercado #1 para espiar anuncios, rastrear ventas y encontrar productos ganadores al instante.",
    columns: [
      {
        title: "Producto",
        links: [
          "Base de productos",
          "Rastreador de ventas",
          "Creador de tiendas con IA",
          "Precios",
        ],
      },
      {
        title: "Anuncios",
        links: [
          "Biblioteca de anuncios",
          "Anuncios de TikTok",
          "Anuncios de Meta",
          "Seguimiento",
        ],
      },
      {
        title: "Empresa",
        links: ["Sobre nosotros", "Empleos", "Blog", "Contacto"],
      },
      {
        title: "Legal",
        links: ["Privacidad", "Términos", "Cookies", "Reembolsos"],
      },
    ],
    rights: "Todos los derechos reservados.",
    privacy: "Privacidad",
    terms: "Términos",
    status: "Estado",
  },
  productCard: {
    hot: "Hot",
    stock: "Stock",
    supplier: "Proveedor",
    country: "País",
    price: "Precio",
    sales30: "Ventas 30 días",
    viewDetails: "Ver detalles",
    moreOptions: "Más opciones",
  },
  products: [
    { title: "Corrector de Postura Pro", country: "México" },
    { title: "Mini Licuadora Portátil USB", country: "Colombia" },
    { title: "Proyector de Galaxia LED", country: "Estados Unidos" },
    { title: "Soporte Magnético para Móvil 360°", country: "Chile" },
    { title: "Humidificador Antigravedad", country: "Perú" },
    { title: "Fuente de Agua Inteligente para Mascotas", country: "México" },
    { title: "Lámpara de Atardecer Plegable", country: "Ecuador" },
    { title: "Aspiradora Inalámbrica para Auto", country: "Estados Unidos" },
    { title: "Máscara Masajeadora de Ojos", country: "Argentina" },
    { title: "Cepillo Eléctrico Giratorio", country: "Brasil" },
  ],
  auth: {
    back: "Volver al inicio",
    email: "Correo",
    password: "Contraseña",
    emailPlaceholder: "tu@correo.com",
    login: {
      title: "Bienvenido de nuevo",
      subtitle: "Inicia sesión para acceder a tu panel.",
      submit: "Iniciar sesión",
      noAccount: "¿No tienes una cuenta?",
      signupLink: "Registrarse",
    },
    signup: {
      title: "Crea tu cuenta",
      subtitle: "Empieza a encontrar productos y anuncios ganadores hoy.",
      submit: "Registrarse",
      haveAccount: "¿Ya tienes una cuenta?",
      loginLink: "Iniciar sesión",
    },
  },
};

const pt: Dict = {
  common: { getStarted: "Começar" },
  nav: {
    products: "Produtos",
    ads: "Anúncios",
    pricing: "Preços",
    login: "Entrar",
    signup: "Cadastrar",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
  },
  hero: {
    livePill: "AO VIVO · rastreando agora",
    titleStart: "Encontre",
    rotate: ["produtos vencedores", "anúncios virais", "lojas que vendem"],
    titleEnd: "antes de todo mundo",
    subtitle:
      "A plataforma de análise de mercado nº 1: espione anúncios, rastreie vendas em tempo real e ache vencedores antes de saturarem.",
    ctaFree: "Começar grátis",
    socialProof: "+12.000 vendedores encontram vencedores todo dia",
    badgeProducts: "Produtos",
    badgeAds: "Anúncios",
    panelTitle: "Vencedores de hoje",
    panelSalesToday: "vendas hoje",
    panelScanned: "escaneados hoje",
    toast: "Novo vencedor detectado!",
    winners: [
      "Batom Matte 6 un",
      "Sérum Ácido Hialurônico",
      "Paleta Blush & Glow",
      "Ralador Giratório",
    ],
  },
  logoCloud: { label: "Acesso a todas as plataformas" },
  extension: {
    badge: "Instale nossa extensão",
    title: "Descubra produtos vencedores em segundos.",
    text: "Instale a extensão do Chrome do {brand} e leve sua loja para o próximo nível.",
    button: "Grátis e pronta para usar",
    liveSales: "Vendas ao vivo",
    stock: "Estoque",
    free: "Grátis",
  },
  dashboard: {
    searchPlaceholder: "Buscar…",
    countries: "Países",
    platform: "Plataforma",
    advancedFilters: "Filtros avançados",
    search: "Buscar",
    gridView: "Visualização em grade",
    listView: "Visualização em lista",
    searchProducts: "Buscar produtos",
  },
  howItWorks: {
    title: "Como funciona",
    steps: [
      {
        title: "Encontre",
        description:
          "Filtre por vendas, margem, estoque e tendências, ou busque por texto ou imagem.",
      },
      {
        title: "Valide",
        description:
          "Veja os anúncios que já estão funcionando e ative o rastreamento para ver o movimento real.",
      },
      {
        title: "Lance",
        description:
          "Gere uma loja com IA em minutos, ou exporte o produto para o seu stack atual.",
      },
    ],
  },
  featureProducts: {
    eyebrow: "Acesso a todas as plataformas",
    titleA: "Produtos Lucrativos",
    titleB: "na Hora",
    text: "Use nossos filtros avançados para analisar vendas, lucratividade e mais — EM TEMPO REAL. Tome decisões baseadas em dados para maximizar seus lucros.",
    date: "01 Junho 2024",
    salesStat: "Vendas ▲ 12.4%",
  },
  trending: {
    eyebrow: "Produtos vencedores",
    titleA: "Em alta na beleza",
    titleB: "agora mesmo",
    subtitle:
      "Produtos reais ganhando tração nas plataformas — o tipo de vencedor que você pode conseguir e lançar antes de saturar.",
    catMakeup: "Maquiagem",
    catSkincare: "Skincare",
    trending: "Em alta",
    salesLabel: "vendas / 30 dias",
    thisWeek: "esta semana",
    names: [
      "Paleta Blush & Glow",
      "Sérum de Ácido Hialurônico",
      "Sérum Reparador Facial",
      "Sérum de Vitamina B5",
    ],
    spotted: "Visto no varejo",
    bannerText:
      "Quando um produto também esgota nas lojas, você sabe que a demanda é real — não só um anúncio passageiro.",
    sellThrough: "de giro no varejo",
  },
  ads: {
    eyebrow: "Biblioteca de anúncios",
    titleA: "Anúncios",
    titleB: "que Funcionam",
    textPre: "Explore mais de ",
    textPost:
      " anúncios exclusivos das plataformas que importam, com dados de engajamento e rastreamento.",
    sponsored: "Patrocinado",
    buyNow: "Comprar",
    captionSerum: "Esse sérum esgotou 3 vezes esse mês 🔥",
    captionKitchen: "O utensílio de cozinha que todo mundo comenta",
  },
  tiktok: {
    commissionBadge: "+35% COMISSÃO",
    productName: "Kit de Batom Matte (6 un)",
    commission: "14% Comissão",
    trend: "Tendência",
    days: "/ 7 dias",
    viewButton: "Ver na TikTok Shop",
    eyebrow: "TikTok Shop",
    titleA: "Produtos da TikTok Shop",
    titleB: "que Quebram o Mercado",
    text: "Acesse uma seleção exclusiva dos produtos mais vendidos na TikTok Shop nos EUA — a chance perfeita para replicar esses sucessos no seu mercado.",
  },
  live: {
    eyebrow: "Compras ao vivo",
    titleA: "Veja os produtos esgotarem",
    titleB: "ao Vivo",
    subtitle:
      "Rastreie os criadores e lives que estão movendo unidades reais agora — veja quem vende, o que está em alta e a velocidade de conversão.",
    liveBadge: "Ao vivo",
    sold: "vendidos",
    products: [
      "Combo de sérums",
      "Lançamento de tênis",
      "Looks de verão",
      "Ofertas do dia",
    ],
    tracked: "lives rastreados na TikTok Shop esta semana",
  },
  store: {
    title: "Modelos de loja prontos para lançar",
    subtitle: "Escolha um tema e gere uma loja de alta conversão em minutos.",
    searchPlaceholder: "Buscar produtos…",
    cart: "Carrinho",
    guaranteed: "Compras garantidas",
    ordersDelivered: "Pedidos entregues",
    freeShipping: "FRETE GRÁTIS",
    payOnDelivery: "PAGUE NA ENTREGA",
  },
  finalCta: {
    title: "Encontre produtos e anúncios em uma só plataforma",
    text: "Junte-se a milhares de vendedores que usam dados para lançar produtos vencedores mais rápido. Comece grátis — sem cartão de crédito.",
  },
  footer: {
    description:
      "A plataforma de análise de mercado nº 1 para espionar anúncios, rastrear vendas e encontrar produtos vencedores na hora.",
    columns: [
      {
        title: "Produto",
        links: [
          "Base de produtos",
          "Rastreador de vendas",
          "Criador de lojas com IA",
          "Preços",
        ],
      },
      {
        title: "Anúncios",
        links: [
          "Biblioteca de anúncios",
          "Anúncios do TikTok",
          "Anúncios da Meta",
          "Rastreamento",
        ],
      },
      {
        title: "Empresa",
        links: ["Sobre", "Carreiras", "Blog", "Contato"],
      },
      {
        title: "Legal",
        links: ["Privacidade", "Termos", "Cookies", "Reembolsos"],
      },
    ],
    rights: "Todos os direitos reservados.",
    privacy: "Privacidade",
    terms: "Termos",
    status: "Status",
  },
  productCard: {
    hot: "Hot",
    stock: "Estoque",
    supplier: "Fornecedor",
    country: "País",
    price: "Preço",
    sales30: "Vendas 30 dias",
    viewDetails: "Ver detalhes",
    moreOptions: "Mais opções",
  },
  products: [
    { title: "Corretor de Postura Pro", country: "México" },
    { title: "Mini Liquidificador Portátil USB", country: "Colômbia" },
    { title: "Projetor de Galáxia LED", country: "Estados Unidos" },
    { title: "Suporte Magnético de Celular 360°", country: "Chile" },
    { title: "Umidificador Antigravidade", country: "Peru" },
    { title: "Fonte de Água Inteligente para Pets", country: "México" },
    { title: "Luminária Pôr do Sol Dobrável", country: "Equador" },
    { title: "Aspirador de Carro Sem Fio", country: "Estados Unidos" },
    { title: "Máscara Massageadora para Olhos", country: "Argentina" },
    { title: "Escova Elétrica Giratória", country: "Brasil" },
  ],
  auth: {
    back: "Voltar ao início",
    email: "E-mail",
    password: "Senha",
    emailPlaceholder: "voce@email.com",
    login: {
      title: "Bem-vindo de volta",
      subtitle: "Entre para acessar seu painel.",
      submit: "Entrar",
      noAccount: "Não tem uma conta?",
      signupLink: "Cadastrar",
    },
    signup: {
      title: "Crie sua conta",
      subtitle: "Comece a encontrar produtos e anúncios vencedores hoje.",
      submit: "Cadastrar",
      haveAccount: "Já tem uma conta?",
      loginLink: "Entrar",
    },
  },
};

export const dictionaries: Record<Locale, Dict> = { es, pt };
