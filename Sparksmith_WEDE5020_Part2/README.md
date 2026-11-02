# Sparksmith Electrical Services — WEDE5020 POE Part 3

## Project overview
This project extends the responsive Part 2 Sparksmith Electrical Services website with client-side interactions, enquiry-form validation, search metadata and an original illustration. It remains an academic prototype, not a live business service.

## Pages
1. `index.html` — Home
2. `about.html` — About Us
3. `services.html` — Services
4. `products.html` — Products
5. `contact.html` — Contact & Enquiry

## Part 3 functionality and SEO
- Added `js/script.js` for accessible mobile navigation, escape-to-close support and reduced-motion-aware section reveals.
- Added client-side enquiry checks for required fields, email, phone pattern, description length, future date and an optional image file limited to 5 MB.
- Added clear form status and urgent-request feedback. The demo does not transmit or store submitted information; a secure backend or form provider is required for real enquiries.
- Added page-specific descriptions, keywords, Open Graph metadata, theme colour and the custom SVG favicon.
- Retained descriptive alternative text and added an original Sparksmith-themed SVG illustration.
- Retained the responsive Johannesburg map embed and its OpenStreetMap attribution/link.
- Updated the references and changelog for this phase.

## Part 2 visual foundation
- Uses one external stylesheet with a shared colour palette, typography, spacing, cards, buttons, tables and footer.
- Uses CSS Grid and Flexbox for desktop layouts, with tablet and mobile breakpoints.
- Includes consistent active navigation states, image captions, alt text and a responsive service-area map.

## How to run
Open `index.html` in a modern browser. No build step or external JavaScript library is required. Internet access is needed for the OpenStreetMap embed. The enquiry form is a client-side demonstration only and does not send enquiries.

## File structure
```text
Sparksmith_WEDE5020_Part3/
├── index.html
├── about.html
├── services.html
├── products.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── README.md
├── REFERENCES.md
└── images/
    ├── sparksmith-hero.svg
    └── ...
```

## Changelog

### 2 November 2026 — Part 3
- Added `js/script.js` for mobile navigation, keyboard interaction, reduced-motion-aware reveal effects, urgency feedback and client-side form checks.
- Added accessible form status messages, field constraints and an optional image-size limit; documented that the prototype does not transmit or store form submissions.
- Added page-specific keyword descriptions, Open Graph tags, theme colour and SVG favicon across all pages.
- Created an original Sparksmith hero illustration and documented its authorship.
- Improved keyboard focus visibility and reduced-motion handling in `css/styles.css`.
- Retained the OpenStreetMap embed and updated the references and project notes.

### 16 September 2026 — Part 2
- Created `styles.css` and linked all five HTML pages to one external stylesheet.
- Reworked the navigation, header, hero areas and footer for consistent visual hierarchy.
- Added CSS Grid and Flexbox layouts for desktop presentation.
- Added tablet and mobile media queries for responsive behaviour.
- Added a mobile-friendly responsive navigation layout.
- Improved image sizing, captions and alternative text.
- Improved form layout and field presentation.
- Added consistent active navigation states and a responsive Johannesburg map.
- Added this README and updated the project references.

### Part 1 corrections carried forward
- Maintained five linked website pages and service, product, contact and enquiry content.
- Retained local image assets and the academic/prototype authenticity note.

## Important prototype note
Sparksmith Electrical Services is presented as an academic website concept. Contact details, business history, prices and staff/business claims must be verified before commercial publication.

## References and asset credits
See `REFERENCES.md` for Harvard-style citations and asset/code notes carried forward and updated for Part 3.

## Version control and ongoing updates
- Continue development in the supplied Git repository and make frequent, descriptive commits as changes are completed.
- Reopen the pages in multiple browsers and at desktop, tablet and mobile widths after updates.
- Update this changelog and `REFERENCES.md` whenever new features or third-party assets are added.
- The static prototype requires no compilation. A real submission workflow requires a secure backend or form service before publication.
