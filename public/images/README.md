# public/images

Real product photos for the landing page live here. They are **not** committed
as part of the initial build — generate them locally with the Pexels API:

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
