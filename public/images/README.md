# public/images

## Exact product photos (from the reference screenshot)

The dashboard preview shows five specific branded products. Drop each exact
photo here using the filename below and it appears automatically (the card
falls back to an emoji/gradient until the file exists):

| Product                              | Filename                     |
| ------------------------------------ | ---------------------------- |
| URO Probiotico Vaginal               | `products-uro.png`           |
| Pack 2 Cajas Mascarilla Naturaful    | `products-naturaful.png`     |
| Alfombra Peluda 1.50 x 2mt           | `products-alfombra.png`      |
| Espiral Panel de Boxeo               | `products-boxeo.png`         |
| Python Gel                           | `products-python.png`        |

Square images (roughly 1:1) look best. After adding them:

```bash
git add public/images && git commit -m "Add exact product photos" && git push
```

## Platform logos & extension graphic

The logo strip and the blue "extensión" banner also read from image slots
(styled placeholders show until each file exists):

| Slot | Filename |
| ---- | -------- |
| Dropi logo | `logos/dropi.png` |
| Shopify logo | `logos/shopify.png` |
| TikTok Shop logo | `logos/tiktok-shop.png` |
| Master logo | `logos/master.png` |
| Chrome + extension graphic (banner) | `extension-graphic.png` |

Logos look best as transparent PNG/SVG, roughly 32–36 px tall. The banner
graphic can be a transparent PNG around 400–500 px wide.

If you'd rather point the cards at hosted image URLs instead of local files,
set each product's `image` to the full `https://…` URL in `lib/products.ts` —
`SmartImage` passes absolute URLs straight through.

---

The rest of the landing-page photos can be generated locally with the Pexels API:

```bash
# free key from https://www.pexels.com/api/
PEXELS_API_KEY=your_key npm run fetch-images
```

This reads [`manifest.json`](./manifest.json), downloads one photo per slot,
and writes `CREDITS.md` with attribution. Until you run it, the components fall
back to the emoji/gradient placeholders (see `components/ui/SmartImage.tsx`), so
nothing looks broken.

To swap a specific photo, edit its `query` in `manifest.json` and re-run with
`-- --force`, or just drop your own `.jpg` in here using the filename from the
manifest.

After fetching, commit the images so they deploy:

```bash
git add public/images && git commit -m "Add product photos" && git push
```
