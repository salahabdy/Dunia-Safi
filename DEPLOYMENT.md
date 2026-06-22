# Deployment Guide - Dunia Safi

This guide covers deploying Dunia Safi to production on Vercel and GitHub.

## Pre-Deployment Checklist

- [x] All images load correctly (using manus-storage CDN)
- [x] All videos load correctly
- [x] All logos load correctly (using manus-storage CDN)
- [x] Favicon configured at `/public/favicon.ico`
- [x] All public assets use simple filenames
- [x] All routes work with page refresh (SPA with fallback)
- [x] Contact forms are production-ready
- [x] sitemap.xml generated at `/public/sitemap.xml`
- [x] robots.txt generated at `/public/robots.txt`
- [x] Canonical URLs configured in HTML
- [x] SEO metadata configured in HTML head
- [x] Open Graph tags configured
- [x] GitHub deployment ready (.github/workflows/deploy.yml)
- [x] Vercel deployment ready (vercel.json)
- [x] No placeholder content
- [x] No broken asset references
- [x] No broken imports (TypeScript check passes)
- [x] Production build successful (1.4MB total)

## Step 1: GitHub Setup

### 1.1 Initialize Git Repository

```bash
cd /home/ubuntu/dunia-safi

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Dunia Safi production-ready codebase"

# Add remote repository
git remote add origin https://github.com/yourusername/dunia-safi.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 1.2 Create GitHub Repository

1. Go to https://github.com/new
2. Create repository named `dunia-safi`
3. Do NOT initialize with README (we already have one)
4. Click "Create repository"

## Step 2: Vercel Deployment

### 2.1 Connect to Vercel

1. Visit https://vercel.com/new
2. Click "Import Git Repository"
3. Search for and select `dunia-safi`
4. Click "Import"

### 2.2 Configure Environment Variables

In Vercel dashboard, go to **Settings → Environment Variables** and add:

```
DATABASE_URL=mysql://user:password@host:3306/dunia_safi
JWT_SECRET=your_secure_jwt_secret_here
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://manus.im
BUILT_IN_FORGE_API_URL=https://forge.manus.ai
BUILT_IN_FORGE_API_KEY=your_forge_api_key
VITE_FRONTEND_FORGE_API_KEY=your_frontend_forge_api_key
VITE_FRONTEND_FORGE_API_URL=https://forge.manus.ai
VITE_ANALYTICS_ENDPOINT=https://manus-analytics.com
VITE_ANALYTICS_WEBSITE_ID=your_analytics_id
VITE_APP_ID=your_app_id
VITE_APP_TITLE=Dunia Safi - Multipurpose Bar Soap
VITE_APP_LOGO=https://dunia-safi.vercel.app/manus-storage/dunia-safi-logo_4911e785.webp
OWNER_NAME=Your Name
OWNER_OPEN_ID=your_open_id
```

### 2.3 Deploy

1. Click "Deploy"
2. Vercel will automatically build and deploy
3. Your site will be available at `https://dunia-safi.vercel.app`

## Step 3: Custom Domain Setup

### 3.1 Add Custom Domain in Vercel

1. In Vercel dashboard, go to **Settings → Domains**
2. Click "Add Domain"
3. Enter your domain (e.g., `duniasafi.com`)
4. Follow DNS configuration instructions

### 3.2 Configure DNS Records

Update your domain registrar with:

```
CNAME: www.duniasafi.com → cname.vercel-dns.com
A: duniasafi.com → 76.76.19.21
AAAA: duniasafi.com → 2610:7f8:3::3
```

## Step 4: Post-Deployment Verification

### 4.1 Test Production Site

```bash
# Test homepage loads
curl -I https://dunia-safi.vercel.app/

# Test API endpoint
curl https://dunia-safi.vercel.app/api/trpc/auth.me

# Test sitemap
curl https://dunia-safi.vercel.app/sitemap.xml

# Test robots.txt
curl https://dunia-safi.vercel.app/robots.txt
```

### 4.2 Verify SEO

1. **Google Search Console**
   - Visit https://search.google.com/search-console
   - Add property for your domain
   - Submit sitemap.xml
   - Check for indexing errors

2. **Bing Webmaster Tools**
   - Visit https://www.bing.com/webmasters
   - Add site
   - Submit sitemap.xml

3. **Meta Tags Validation**
   - Use https://www.opengraph.xyz/
   - Enter your domain
   - Verify Open Graph tags display correctly

### 4.3 Test Contact Forms

1. Test powder soap email subscription
2. Verify owner receives notification
3. Test WhatsApp button (should open WhatsApp)
4. Test Email button (should open email client)

### 4.4 Performance Check

1. **Lighthouse Audit**
   - Open DevTools (F12)
   - Go to Lighthouse tab
   - Run audit for Desktop and Mobile
   - Target: Performance >90, Accessibility >90, Best Practices >90, SEO >90

2. **PageSpeed Insights**
   - Visit https://pagespeed.web.dev/
   - Enter your domain
   - Review recommendations

## Step 5: Continuous Deployment

### 5.1 Enable GitHub Actions

The `.github/workflows/deploy.yml` file automatically:
- Runs tests on every push
- Builds the project
- Deploys to Vercel on main branch

### 5.2 Secrets for GitHub Actions

Add these secrets to your GitHub repository:

1. Go to **Settings → Secrets and variables → Actions**
2. Add secrets:
   - `VERCEL_TOKEN`: Get from https://vercel.com/account/tokens
   - `VERCEL_ORG_ID`: Get from Vercel dashboard
   - `VERCEL_PROJECT_ID`: Get from Vercel dashboard

## Step 6: Monitoring & Maintenance

### 6.1 Error Tracking

- Monitor Vercel logs: https://vercel.com/dashboard
- Check analytics: https://manus-analytics.com
- Review error emails from contact forms

### 6.2 Regular Updates

```bash
# Check for dependency updates
pnpm outdated

# Update dependencies
pnpm update

# Test locally
pnpm dev
pnpm test
pnpm build

# Push to GitHub
git add .
git commit -m "Update dependencies"
git push
```

### 6.3 Database Backups

- Ensure MySQL/TiDB backups are configured
- Test restore procedures monthly
- Keep backups for at least 30 days

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Environment Variables Not Working

1. Verify all variables are set in Vercel dashboard
2. Redeploy after adding/changing variables
3. Check variable names match exactly

### Database Connection Issues

1. Verify DATABASE_URL is correct
2. Ensure database is accessible from Vercel
3. Check firewall rules allow Vercel IPs

### Assets Not Loading

1. Verify manus-storage URLs are correct
2. Check CDN is accessible
3. Verify image file permissions

## Security Checklist

- [x] HTTPS enforced (automatic with Vercel)
- [x] Environment variables not committed to Git
- [x] Database credentials in environment variables only
- [x] API keys rotated regularly
- [x] CORS configured properly
- [x] Security headers configured in vercel.json
- [x] Rate limiting on contact forms
- [x] Input validation on all forms

## Performance Optimization

- [x] Images optimized and served via CDN
- [x] CSS minified (Tailwind)
- [x] JavaScript minified and bundled
- [x] Static assets cached with long TTL
- [x] Database queries optimized
- [x] API responses cached where appropriate

## Support

For deployment issues:
1. Check Vercel logs: https://vercel.com/dashboard
2. Review GitHub Actions: https://github.com/yourusername/dunia-safi/actions
3. Contact support: info@duniasafi.com

---

**Last Updated:** June 22, 2026
