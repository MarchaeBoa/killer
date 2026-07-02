/**
 * Central brand configuration.
 * Change BRAND (and the logo glyph) here to rebrand the entire site.
 */
export const BRAND = "Dropspy";

export const BRAND_TAGLINE =
  "Encuentra productos y anuncios en una sola plataforma";

export const BRAND_DESCRIPTION =
  "Espía anuncios de TikTok y Meta, rastrea stock y ventas en tiempo real, y encuentra productos ganadores al instante con búsqueda impulsada por IA.";

/** Section anchors for the navbar. Labels come from the i18n dictionary. */
export const NAV_LINKS = [
  { key: "products", href: "#products" },
  { key: "ads", href: "#ads" },
  { key: "pricing", href: "#pricing" },
] as const;
