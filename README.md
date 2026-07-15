# Migranium Marketing Site — React

The Migranium marketing/product site as a **Vite + React** app (React Router). Ported from the HTML design prototypes.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

Requires Node 18+.

## Routes
| Path | Page |
|---|---|
| `/` | Home |
| `/features/:slug` | Feature (16 modules — e.g. `/features/scheduler`) |
| `/integrations/:slug` | Integration (13 integrations — e.g. `/integrations/oscarpro`) |
| `/testimonials` | Testimonials |
| `/case-studies` | Case Studies |
| `/faq` | FAQ |
| `/security` | Security |
| `/compliance` | Compliance |
| `/get-started` | Get a Custom Quote — 4-step questionnaire |
| `/terms`, `/privacy`, `/payment-terms` | Legal |

## Structure
```
public/assets/        logos, glyphs, badges, product screenshots
src/
  main.jsx            entry (BrowserRouter)
  App.jsx             routes + scroll manager + Navbar/Footer
  index.css           resets, keyframes, responsive breakpoints
  components/
    Navbar.jsx        responsive nav — desktop pill mega-menus; hamburger → full-screen overlay < 900px
    Footer.jsx        shared footer
  data/
    nav.js            module + integration lists (nav menus)
    features.js       all 16 feature-page content objects
    integrations.js   all 13 integration content objects
    legal.js          Terms / Privacy / Payment content (HTML)
  pages/              Home, Feature, Integration, Testimonials, CaseStudies,
                      FAQ, Security, Compliance, GetStarted, Legal
```

Styling is inline (as in the prototype). Cross-cutting responsive rules live in `index.css` via utility classes (`.cols-2/3/4`, `.hero-2col`, `.sidebar-layout`, `.feat-4`, `.gs-grid`, `.gs-mods`, `.int-diagram`/`.int-fallback`, `.footer-grid`, `.metric-strip`, `.case-body`, `.impact-quote`, `.hide-mobile`/`.only-mobile`).

## Responsive navbar
Desktop (≥900px): centered floating pill with hover mega-menus for Features & Integrations and dropdowns for Customer Impact & Resources. Mobile (<900px): the inline links are replaced by a hamburger that opens a full-screen overlay; Features/Integrations/Customer Impact/Resources appear as collapsible sections, plus Login and Get Started.

## Backend TODO
Two forms currently persist to `localStorage` as stubs — wire them to your backend/CRM:
- **Get Started** (`src/pages/GetStarted.jsx`, `submit()`): POST the full lead record, notify the sales/implementation team, create the lead. Do **not** auto-generate a quote.
- **Book a Demo modal** (`src/pages/Home.jsx`): POST the demo request.

## Notes
- Real product screenshots exist only for Scheduler, Workplace, and Automation; other feature pages use styled placeholder panels by design.
- Content was ported verbatim from the approved prototypes in `data/`.
