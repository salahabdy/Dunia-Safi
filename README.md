# Dunia Safi - Multipurpose Bar Soap

**One soap. Endless clean.** — A modern, responsive marketing website for Dunia Safi multipurpose bar soap.

## 🚀 Quick Start

### Development

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:5173` to see the site.

### Production Build

```bash
pnpm build
```

Output is in the `dist/` directory, ready for deployment to Vercel or any static host.

## 📋 Features

- **Fully Static** — No backend required. Pure React + Tailwind CSS.
- **Responsive Design** — Mobile-first, works on all devices.
- **SEO Optimized** — Meta tags, Open Graph, sitemap.xml, robots.txt.
- **Form Handling** — Contact and newsletter forms use Formspree (no backend needed).
- **Smooth Animations** — Scroll reveals, hover effects, and micro-interactions.
- **Brand-Aligned Design** — Bold red (#E31E24), forest green (#1E7A2E), cream backgrounds.

## 🎨 Design

- **Typography**: Bebas Neue (display), DM Sans (body), Dancing Script (accent)
- **Color Palette**: Red, Green, Cream
- **Components**: Hero, About, Products, Uses, Why Us, Wholesale, Coming Soon, Contact, Footer
- **Images**: All hosted on manus-storage CDN (persistent URLs)

## 📁 Project Structure

```
client/
  src/
    pages/
      Home.tsx           ← Main  landing page
      NotFound.tsx       ← 404 page
    components/
      Navbar.tsx         ← Navigation header
      HeroSlideshow.tsx   ← Hero section with slideshow
      AboutSection.tsx    ← About us section
      ProductsSection.tsx ← Product showcase
      UsesSection.tsx     ← 4 use cases
      WhyUsSection.tsx    ← Why choose Dunia Safi
      WholesaleSection.tsx ← B2B wholesale info
      ComingSoonSection.tsx ← Powder soap teaser
      ContactSection.tsx  ← Contact form + info
      Footer.tsx          ← Footer with links
      FloatingContactButtons.tsx ← WhatsApp + Email buttons
      Map.tsx             ← Google Maps integration
    App.tsx              ← Routes and layout
    main.tsx             ← React entry point
    index.css            ← Global styles
    const.ts             ← Constants (Formspree IDs, contact info)
  public/
    favicon.ico          ← Website icon
    robots.txt           ← SEO robots file
    sitemap.xml          ← SEO sitemap
  index.html             ← HTML template with SEO meta tags
package.json             ← Dependencies and scripts
vite.config.ts           ← Vite configuration
tsconfig.json            ← TypeScript configuration
```

## 🔧 Configuration

### Formspree Setup

The contact and newsletter forms use Formspree for email delivery. To enable:

1. Visit [formspree.io](https://formspree.io)
2. Create three forms:
   - Contact form (receives: name, email, phone, message)
   - Newsletter signup (receives: email)
   - Wholesale inquiry (receives: name, email, message)
3. Copy the form IDs and update `client/src/const.ts`:
   ```typescript
   export const FORMSPREE_CONTACT_ID = "your_id_here";
   export const FORMSPREE_POWDER_SOAP_ID = "your_id_here";
   export const FORMSPREE_WHOLESALE_ID = "your_id_here";
   ```

### Environment Variables

No environment variables required for static deployment. All configuration is in `client/src/const.ts`.

## 📦 Dependencies

**Production**:
- React 19
- Tailwind CSS 4
- Lucide React (icons)
- Framer Motion (animations)
- Sonner (toast notifications)
- Wouter (routing)

**Development**:
- Vite (build tool)
- TypeScript
- Prettier (code formatter)

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Vite and builds correctly
4. Deploy with one click

### GitHub Pages

```bash
# Build
pnpm build

# Push dist/ to gh-pages branch
git subtree push --prefix dist origin gh-pages
```

### Netlify

1. Connect GitHub repository
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. Deploy

## 📊 Performance

- **Build size**: ~670 KB (gzipped: ~185 KB)
- **CSS size**: ~133 KB (gzipped: ~21 KB)
- **No backend**: Instant response times
- **CDN images**: All images served from manus-storage CDN

## 🔐 Security

- No sensitive data in code
- No backend to compromise
- Static files only
- HTTPS enforced on Vercel

## 📝 SEO

- Meta title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- sitemap.xml for search engines
- robots.txt for crawlers

## 🎯 Next Steps

1. **Update Formspree IDs** in `client/src/const.ts`
2. **Test forms** locally with `pnpm dev`
3. **Build** with `pnpm build`
4. **Deploy** to Vercel or your preferred host
5. **Monitor** with analytics (Google Analytics, Vercel Analytics)

## 📞 Contact

- **Email**: info@duniasafi.com
- **WhatsApp**: +254 799 953 166
- **Address**: Godown 18, Falcon Road, Nairobi

## 📄 License

MIT License — See LICENSE file for details.

---

**Built with ❤️ for Dunia Safi**
