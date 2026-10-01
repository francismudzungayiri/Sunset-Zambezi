# Melachaite Travel

Homepage for a fictional luxury tour operator on Lake Kariba, Zimbabwe. Built with Vite + React (plain JavaScript).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## The idea behind the design

Kariba's most distinctive physical fact is the **drowned forest**. When the valley was dammed in 1958 the rising lake killed a mopane forest, and the bleached trunks still stand out of the water. No other safari destination looks like this, so it anchors three things:

- **The signature element** — `HorizonRule`, a hairline with thin trees rising from a waterline, used as the section divider and under the hero headline.
- **The palette** — near-black with a green cast (deep water at dusk), warm ivory, shoreline sand, bronze.
- **The featured photograph** — a real Lake Kariba drowned-forest shot carries the signature journey.

### Experiences are ordered by hour, not numbered

The four experiences use time markers (`05:40`, `16:20`, `18:05`, `Any hour`) instead of `01–04`. Four experiences are not a sequence, so index numbers would be decoration; the hour is real information on a lake whose whole appeal is its light, and it turns the section into one day on the water.

To revert to conventional numbering, change `time` in `src/content/experiences.js` and drop `.exp__time-note` from `Experiences.jsx`.

## Structure

```
src/
  content/        all visitor-facing copy and data (CMS-shaped)
  lib/images.js   photography manifest + srcset builder
  components/     one component per section, co-located CSS
  components/ui/  Section, Eyebrow, Button, SmartImage, Reveal, HorizonRule
  hooks/          reveal, scroll, focus trap, scroll lock, parallax
  context/        enquiry panel open state
  styles/         tokens.css (design tokens), base.css (reset + type)
```

**Content is fully separated from components.** Every string and image reference lives in `src/content/*.js` as plain exported objects with `id` / `slug` / `title` / `excerpt` / `image` shapes, so a headless CMS can replace those modules one-for-one without touching a component.

**Spacing rhythm lives in one place.** `.section` and its modifiers own all vertical padding; component stylesheets never set their own outer margin. This is the usual cause of two CSS rules silently cancelling each other.

## Photography

All images are hot-linked from the Unsplash CDN via `src/lib/images.js`, which also records the photographer and, where Unsplash provides it, the location. Several were shot **at Lake Kariba itself** (the drowned forest, the fish eagle, the shoreline elephants); others are from the Zambezi, Hwange and Zimbabwe generally.

Two constraints were applied deliberately:

- **Every URL was verified to return HTTP 200** before being written into the manifest, and a DOM audit confirms 0 broken images. Invented photo IDs are the main failure mode of this approach.
- **Unsplash+ (`plus.unsplash.com/premium_photo-…`) assets are excluded.** They carry a separate licence unsuitable for a commercial site. Several otherwise-good candidates were dropped for this reason.

To move the photography in-house, replace the `slug` values with local paths and adjust `srcFor()`.

## Accessibility

Verified in a headless browser (see "Verification" below):

- All sampled text passes WCAG AA — `--bronze` is a **rule colour only** (3.4:1 on ivory); small bronze text uses `--bronze-ink` (5.0:1) and bronze on dark uses `--bronze-lift`.
- One `h1`, no heading-level jumps, `lang` set, skip link present.
- All 22 images carry alt text; the hero background is intentionally `alt=""` because the adjacent headline conveys it.
- The enquiry panel is a real dialog: focus moves in, is trapped, Escape closes it, and focus returns to the exact trigger. Body scroll is locked and restored.
- Anchor targets carry `scroll-margin-block-start` so nav links never land behind the fixed header.
- `prefers-reduced-motion: reduce` disables the hero drift, all reveals and hover zooms; all 62 reveal elements render at full opacity.

## Known limitations

- **The enquiry form does not submit anywhere.** There is no backend, so it validates, shows a confirmation state, and stops. Wire `onSubmit` in `EnquiryPanel.jsx` to a CRM or form endpoint. It never claims to have sent something it has not.
- **Placeholder contact details.** Phone, WhatsApp number and email in `src/content/site.js` are invented; the WhatsApp deep link points at the placeholder number.
- **The hospitality lead photograph shows a desert vista**, not a lake. It is the strongest free-licence "guests enjoying the view" image available, but it is the one place where the photography does not reinforce Kariba. Replace it first if a real photo library becomes available.
- Nav links point at on-page sections; `#faqs`, `#terms`, `#privacy` and article slugs have no destinations yet.

## Verification

Checks run against a headless browser during development:

- every image loads (0 non-200, 0 broken in the DOM)
- console clean (0 errors, 0 React warnings)
- no horizontal overflow at 390px or 1440px
- keyboard path through nav → hero → enquiry panel → Escape
- contrast, heading order, alt coverage and tap-target sizes
- reduced-motion emulation
