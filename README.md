# 360 Construction LLC — Website

A complete, production-ready static website for 360 Construction LLC, Montgomery, TX.

-----

## Quick Start

Open `index.html` in a browser, or deploy the entire `/contractor-site` folder to any static host (AWS S3, Netlify, GitHub Pages, etc.).

No build tools required. Pure HTML, CSS, and vanilla JavaScript.

-----

## File Structure

```
/contractor-site
├── /assets
│   ├── /css/styles.css          ← All styles (one file)
│   ├── /js/script.js            ← All JS (one file)
│   └── /images
│       ├── /projects/project-N/ ← Add before.jpg + after.jpg here
│       ├── /services/           ← Service-specific photos
│       └── /branding/           ← Logo, favicon
│
├── /data
│   ├── business-info.json       ← Company name, phone, address, etc.
│   ├── services.json            ← All services with descriptions
│   └── testimonials.json        ← Customer reviews
│
├── /pages
│   ├── services.html
│   ├── gallery.html
│   └── contact.html
│
├── index.html                   ← Homepage
└── README.md
```

-----

## Adding Real Project Photos

1. Create a folder: `assets/images/projects/project-4/`
1. Add `before.jpg` and `after.jpg` (recommended: 800×500px or 16:10 ratio)
1. In `script.js`, add a new entry to the `GALLERY_PROJECTS` array:

```js
{
  id: 'project-4',
  title: 'Your Project Title',
  category: 'Roofing',         // matches filter button data-filter value
  location: 'Montgomery, TX',
  description: 'Short project description.',
  beforeIcon: '🏚️',           // shown while photos load
  afterIcon: '🏠',
}
```

1. Update the `renderGalleryItem()` function to load the real images instead of placeholders if desired.

-----

## Setting Up the Contact Form

The contact form is pre-built and ready. To actually send emails:

**Option A — Formspree (Recommended, free tier available):**

1. Go to https://formspree.io and create a free account
1. Create a new form, get your form ID (e.g., `xpwzabcd`)
1. In `script.js`, uncomment and update this block:

```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

**Option B — EmailJS:**
Use the EmailJS SDK to send form data directly to 360construction@gmail.com without a backend.

-----

## Customizing for a New Client

To reuse this template for a different contractor:

1. **Update `data/business-info.json`** — name, phone, email, address
1. **Update `data/services.json`** — swap in their services
1. **Update `data/testimonials.json`** — add their reviews
1. **Replace color variables in `styles.css`** — change `--gold`, `--silver`, `--black`
1. **Swap logo and favicon** in `/assets/images/branding/`
1. **Search & replace** the phone number and email throughout the HTML files

-----

## Deployment (AWS S3)

1. Create an S3 bucket with the client’s domain name
1. Enable “Static website hosting” in bucket settings
1. Set index document: `index.html`
1. Upload all files, maintaining the folder structure
1. Set bucket policy to allow public read access
1. Point the domain via Route 53 or their DNS provider

-----

## Design System

|Token           |Value     |Usage               |
|----------------|----------|--------------------|
|`--black`       |`#0a0a0a` |Page background     |
|`--black-card`  |`#161616` |Card backgrounds    |
|`--gold`        |`#C9A84C` |Primary accent, CTAs|
|`--gold-light`  |`#E2C06B` |Hover states        |
|`--silver`      |`#B8BCC8` |Secondary text      |
|`--white`       |`#F5F5F5` |Headings            |
|`--font-display`|Bebas Neue|Headlines, stats    |
|`--font-heading`|Montserrat|Labels, nav, buttons|
|`--font-body`   |Lato      |Body copy           |

-----

## Lead Tracking

All form submissions include a hidden field: `source: "website"`

To add UTM tracking, append `?utm_source=google&utm_medium=cpc` to any URL and read from `URLSearchParams` in `script.js`.

-----

## Browser Support

Chrome, Firefox, Safari, Edge — all modern browsers. IE not supported.

-----

## License

Built for 360 Construction LLC. Template structure may be reused for other clients with content customization.

