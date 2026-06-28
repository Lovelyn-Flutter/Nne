# GrowthDesk Website

A static, no-backend marketing site:

- `index.html` - calm/elegant home page
- `services/*.html` - 8 loud, conversion-focused service landing pages (built for paid traffic)

Everything on every page is pulled from **one file**: `js/data.js`.
You should basically never need to touch HTML/CSS for day-to-day updates.

---

## How to update content (no coding needed)

Open `js/data.js` in any text editor. It's organized like this:

- `brand` → your business name, tagline, WhatsApp number
- `globalStats` → the numbers shown in the home page trust strip
- `services` → one block per service page. Each block has:
  - `navLabel`, `heroHeadline`, `heroSub`, `bullets` → the text on that page
  - `stats` → the 4 numbers in the red stats bar
  - `howItWorks` → the 4-step process section
  - `whatsappMessage` → what's pre-filled when someone taps "Chat on WhatsApp" on that page
  - `reviews` → filenames of screenshot images to show (see below)
  - `beforeAfterImage` → optional, a single before/after style image

Save the file, refresh the page (or redeploy) - that's it.

## How to add review screenshots

1. Save your screenshot into `images/reviews/`
2. Name it using that service's prefix (see the comment at the top of `js/data.js`
   for the exact naming per service, e.g. `ig-recovery-1.jpg`, `ig-recovery-2.jpg`)
3. Open `js/data.js`, find that service, add the filename to its `reviews` array:
   ```
   reviews: ["ig-recovery-1.jpg", "ig-recovery-2.jpg"]
   ```
4. Save. Done - no other code changes needed.

If a service's `reviews` array is empty (`[]`), that section is automatically
hidden on the page - nothing looks broken or leaves a gap.

## How to change the WhatsApp number

In `js/data.js`, edit:

```
whatsappNumber: "2348139557610"
```

International format, no `+`, no leading `0`. Every WhatsApp button site-wide
(including the per-service pre-filled messages) uses this one value.

## How to add a brand new service page

1. Copy `services/cac-registration.html` → rename it `services/your-new-slug.html`
2. Open the new file, find this line near the bottom and change the slug:
   ```html
   <script>
     window.SERVICE_SLUG = "your-new-slug";
   </script>
   ```
3. In `js/data.js`, copy one whole `{ ... }` service block, paste it into the
   `services` array, and change its `slug` to match exactly: `"your-new-slug"`
4. Fill in the new block's text/stats/reviews.
5. Add a card for it on the home page automatically - it pulls from `js/data.js`
   too (`js/home.js` loops over every service), so it appears with no extra work.
   If you want a custom icon for it, see the `serviceIconMap` object in `js/home.js`.

---

## Deploying to Netlify

This is a pure static site - no build step, no server, no environment variables.

**Option A - Drag and drop (fastest):**

1. Go to https://app.netlify.com
2. Drag the whole `agency-site` folder onto the Netlify dashboard
3. Done - you'll get a live URL immediately

**Option B - Connect to GitHub (better for ongoing edits):**

1. Push this folder to a GitHub repo
2. In Netlify: "Add new site" → "Import an existing project" → pick the repo
3. Build command: leave blank. Publish directory: leave as `/` (root)
4. Deploy

Either way, whenever you edit `js/data.js` or add images and want the live
site updated, just re-drag the folder (Option A) or push to GitHub (Option B).

## Notes

- This site has no login, no database, no backend. All edits are made directly
  in these files. That was a deliberate choice to keep hosting simple and free.
- Fonts (Fraunces, Inter, Space Mono) load from Google Fonts over the internet -
  make sure that's not blocked wherever this is hosted (Netlify is fine).
- Phone number for "tel:" links and footer text also comes from `whatsappNumber`
  in `js/data.js` - you don't need to set it twice.
