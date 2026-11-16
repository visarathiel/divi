# Divinaracle by Vi — Website

An English-first, responsive boutique divination website designed for Vercel. Uses the owner’s new transparent Divinaracle wordmark and the exact opening letter supplied by the owner (with character encoding normalized).

## Preview locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

1. Upload this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import Git Repository**.
3. Framework: **Vite** (auto-detected); build command `npm run build`; output directory `dist`.
4. Deploy.

Alternatively install Vercel CLI and run `npx vercel` from the project folder.

## Before publishing

- Booking email is configured as **divinaracle@gmail.com** in `src/main.js` and shown on the page. The form opens a pre-filled email draft in the visitor's email application; it does not transmit form submissions itself.
- Confirm service prices, booking terms, venue arrangements, delivery windows and availability.
- All six offerings have native, keyboard-accessible expandable descriptions. Opening of the Key details all five operations.
- To accept forms without email software, integrate a proper form backend or booking provider separately.

## Typography

Inter is loaded from Google Fonts. Headings declare `TeX Gyre Termes`, followed by `Nimbus Roman`, `Times New Roman`, and `Georgia`. The exact TeX Gyre Termes font is **not packaged**. To use the exact face for all visitors, self-host a properly licensed webfont and add an `@font-face` rule in `src/style.css`; otherwise visitor devices use the serif fallback.

## Files

- `index.html` — copy and expandable experience details
- `src/style.css` — styling and responsive layout
- `src/main.js` — navigation and mailto enquiry form
- `public/assets/divinaracle-transparent.png` — exact uploaded transparent logo, used in header and footer
- `public/assets/vi-photo-*.webp` — optimized owner-supplied service images

## Pricing

- The Reading: Rp800,000 online / Rp1,800,000 onsite
- The Crossroads: Rp1,800,000 online / Rp3,000,000 onsite
- The Passage: Rp6,000,000 online / Rp8,500,000 hybrid
- Opening of the Key (all five operations): Rp7,500,000 onsite by request
- Billet-Doux: Rp479,000
- The Whisper: Rp350,000 for up to 30 minutes of recorded voice-note audio (not a live call)

## Build verification

HTML sections and six expandable `<details>` elements checked, and `src/main.js` passed `node --check`. A complete production build was **not** verified in the current environment because Vite dependencies are not locally installed. Vercel will install dependencies during deployment.


## Version 4 revisions
- Announcement bar now shows only **A PRIVATE DIVINATION PRACTICE**.
- Header logo uses the supplied transparent PNG with no background or overlay.
- Header and page backgrounds are normalized to prevent unintended white panels from the site CSS.
- All six expandable experiences, supplied photos, current prices, and divinaracle@gmail.com remain unchanged.
- For updating an existing Vercel site, replace the repository contents (especially `index.html`, `src/style.css`, and `public/assets`) and push to the branch configured as Vercel's Production Branch. Confirm the new commit is deployed under Vercel > Deployments. A hard refresh may be needed.
