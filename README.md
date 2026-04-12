# Selina Li Daycare — marketing site

Single-page React (Vite + TypeScript) site for **Selina Li Daycare**, deployed to [Netlify](https://www.netlify.com/).

## Requirements

- **Node.js 22.x** (see [`.nvmrc`](.nvmrc))

If `npm install` fails due to a global npm cache permission error, install using a project-local cache:

```bash
npm install --cache ./.npm-cache
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Local dev server (Vite)  |
| `npm run build`| Production build → `dist`|
| `npm run preview` | Preview production build locally |

## Deploy on Netlify

1. Connect this repo to Netlify.
2. Use the settings in [`netlify.toml`](netlify.toml): build command `npm run build`, publish directory `dist`, Node **22**.
3. Deploy.

## Languages

- **English** is the default. **Traditional Chinese (繁體中文)** and **Simplified Chinese (简体中文)** are available from the header language buttons.
- The last chosen language is stored in `localStorage` under `selinali-locale` (`en`, `zh-TW`, or `zh-CN`) and restored on the next visit.
- Copy lives in [`src/i18n/messages.ts`](src/i18n/messages.ts) (`en`, `zh-TW`, and `zh-CN` objects).

## Content updates

- **Reviews (Google-style cards)**: Edit [`src/data/reviews.ts`](src/data/reviews.ts) — each item has `quote`, `author`, optional `relation`, and `rating` (1–5). Replace quotes with **exact wording** from your Google Business Profile when you have permission to display them.
- **Theme**: Colors and spacing live in [`src/theme/tokens.ts`](src/theme/tokens.ts) and are applied as CSS variables via [`src/theme/applyTheme.ts`](src/theme/applyTheme.ts).
- **Background photos**: URLs are listed in [`src/data/backgroundImages.ts`](src/data/backgroundImages.ts) (stock images from [Unsplash](https://unsplash.com)), including a second hero layer (`heroAccent`), contact ambience, and the horizontal **Fun & smiles** gallery strip (`galleryStripImages`). Replace any URL with your own hosted images for a fully custom look; Unsplash’s [license](https://unsplash.com/license) applies to the default stock photos.


## License

Private project for Selina Li Daycare.
