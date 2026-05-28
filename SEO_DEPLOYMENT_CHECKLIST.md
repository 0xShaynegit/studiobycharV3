# SEO Deployment Checklist: Studio by Char
## Quick Reference for Implementation

**Total Estimated Implementation Time:** 60-90 minutes

---

## PRE-DEPLOYMENT PREPARATION

- [ ] Backup current website files
- [ ] Create git branch for SEO changes (if using version control)
- [ ] Test all changes in staging environment first

---

## STEP 1: REPLACE MODIFIED FILES (30 min)

### Files to Update
- [ ] `index.html` — Homepage (title, meta, H1, copy, schema, CTA)
- [ ] `pages/studio.html` — Photo Studio page (title, meta, H1, schema)
- [ ] `pages/podcast-video.html` — Podcast page (title, meta, H1, schema)

### What Changed
- Title tags optimized with keywords
- Meta descriptions trimmed to 150-160 chars
- H1 tags refocused on search intent
- Schema markup added/enhanced
- CTA copy changed from "Book" to "Rent"
- Body copy includes more keyword mentions

---

## STEP 2: ADD NEW PAGES (10 min)

### Files to Create
- [ ] `pages/photography.html` — Professional Photography Services page
- [ ] `pages/faq.html` — FAQ with rich snippet schema

### Verification
- [ ] photography.html loads without errors
- [ ] faq.html loads without errors
- [ ] Both pages are styled consistently with existing pages
- [ ] Images in new pages load correctly

---

## STEP 3: UPDATE NAVIGATION (10 min)

### Update ALL HTML Files
Edit `<nav>` section to add Photography link:

```html
<nav>
    <a href="pages/studio.html">Studio</a>
    <a href="pages/podcast-video.html">Podcast</a>
    <a href="pages/photography.html">Photography</a>
    <a href="pages/portfolio.html">Portfolio</a>
    <a href="pages/about.html">About</a>
    <a href="pages/book.html" class="nav-cta">Book</a>
</nav>
```

**Files to Update:**
- [ ] index.html
- [ ] pages/studio.html
- [ ] pages/podcast-video.html
- [ ] pages/production-services.html
- [ ] pages/portfolio.html
- [ ] pages/about.html
- [ ] pages/book.html
- [ ] pages/photography.html (NEW)
- [ ] pages/faq.html (NEW)

---

## STEP 4: UPDATE FOOTER (10 min)

### Add Links to Footer

Insert into footer on ALL pages (within `<ul class="footer-links">`):

**Info Section:**
```html
<li><a href="pages/faq.html">FAQ</a></li>
```

**Services Section (if applicable):**
```html
<li><a href="pages/photography.html">Photography Services</a></li>
```

**Files to Update:**
- [ ] index.html
- [ ] pages/studio.html
- [ ] pages/podcast-video.html
- [ ] pages/production-services.html
- [ ] pages/portfolio.html
- [ ] pages/about.html
- [ ] pages/book.html
- [ ] pages/photography.html (NEW)
- [ ] pages/faq.html (NEW)

---

## STEP 5: UPDATE SITEMAP.XML (10 min)

### Add New URLs to Sitemap

```xml
<url>
  <loc>https://studiobychar.com/pages/photography.html</loc>
  <lastmod>2026-05-28</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>

<url>
  <loc>https://studiobychar.com/pages/faq.html</loc>
  <lastmod>2026-05-28</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

- [ ] Added photography.html to sitemap
- [ ] Added faq.html to sitemap
- [ ] Validated XML formatting (no errors)
- [ ] Updated lastmod dates to 2026-05-28

---

## STEP 6: TEST & VALIDATE (20 min)

### Functionality Testing
- [ ] Homepage loads (index.html)
- [ ] All navigation links work
- [ ] Photography page loads
- [ ] FAQ page loads
- [ ] All footer links work
- [ ] Mobile responsive on all pages
- [ ] No console errors

### SEO Validation
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
  - [ ] homepage — BreadcrumbList + LocalBusiness
  - [ ] studio.html — BreadcrumbList + Service
  - [ ] podcast-video.html — BreadcrumbList + Service
  - [ ] photography.html — BreadcrumbList + Service
  - [ ] faq.html — BreadcrumbList + FAQPage
- [ ] No schema errors reported
- [ ] Breadcrumbs render correctly

### Content Validation
- [ ] Homepage H1: "Professional Photo & Podcast Studio for Rent"
- [ ] Studio page H1: "Professional Photo Studio Rental in Chiang Mai"
- [ ] Podcast page H1: "Rent a Professional Podcast Studio in Chiang Mai"
- [ ] Photography page H1: "Professional Photography Services & Studio Rental"
- [ ] All CTAs use "Rent" not "Book"

---

## STEP 7: DEPLOY TO PRODUCTION (5 min)

### Deployment
- [ ] Commit changes to git (if using version control)
- [ ] Deploy modified files to production server
- [ ] Deploy new pages to production
- [ ] Update sitemap on production server
- [ ] Clear any caches (server cache, CDN, etc.)

### Verification Post-Deploy
- [ ] All pages accessible at live URLs
- [ ] SSL certificate valid (HTTPS working)
- [ ] No 404 errors on new pages
- [ ] Google Rich Results Test still passes

---

## STEP 8: SUBMIT TO GOOGLE (5 min)

### Google Search Console
- [ ] Ensure property is verified
- [ ] Submit sitemap.xml
- [ ] Request indexation for new pages:
  - [ ] pages/photography.html
  - [ ] pages/faq.html

### Google Business Profile (If Applicable)
- [ ] Add photography services to business profile
- [ ] Update description with keywords
- [ ] Add FAQ to business profile

---

## POST-DEPLOYMENT MONITORING (Ongoing)

### Week 1
- [ ] Monitor Google Search Console for errors
- [ ] Check if new pages appear in search results
- [ ] Monitor Core Web Vitals

### Week 2-4
- [ ] Check Google Search Console for impressions on target keywords
- [ ] Monitor Click-Through Rate (CTR) on changed pages
- [ ] Verify FAQ schema is generating rich snippets
- [ ] Check photography page visibility in search

### Monthly
- [ ] Review GSC data for keyword performance
- [ ] Track position changes for target keywords
- [ ] Monitor new page traffic in Google Analytics
- [ ] Update meta descriptions based on SERP performance

---

## QUICK REFERENCE: FILES MODIFIED

### index.html
- Title tag (Title + Meta Description)
- OG tags (Title + Description)
- H1 and subheading
- CTA buttons
- Section headers
- Schema markup

### pages/studio.html
- Title tag
- Meta description
- OG tags
- H1 and subheading
- CTA buttons
- Schema markup (added Service + BreadcrumbList)

### pages/podcast-video.html
- Title tag
- Meta description
- OG tags
- H1 and subheading
- Schema markup (added Service + BreadcrumbList)

### NEW: pages/photography.html
- Complete new page
- Targets "professional photographer" keyword
- Service schema included
- Ready to deploy

### NEW: pages/faq.html
- Complete new page
- 10 FAQ questions
- FAQPage schema included
- Ready to deploy

### sitemap.xml
- Add 2 new URLs
- Update lastmod dates

---

## EXPECTED RESULTS (30-60 Days)

**Short-term (Week 1-2):**
- New pages indexed
- FAQ schema recognized
- Better SERP snippets for existing pages

**Medium-term (Week 3-4):**
- Keyword visibility improves (title/description changes)
- Click-through rate increases (better descriptions)
- Photography page starts ranking

**Long-term (Month 2-3):**
- Estimated 50-70% increase in keyword visibility
- FAQ page captures additional search traffic
- Photography page builds topical authority

---

## TROUBLESHOOTING

### Pages Not Indexing
**Solution:** Submit to Google Search Console, request indexation

### Schema Errors in Rich Results Test
**Solution:** Check JSON formatting, use schema-validator tool

### New Pages Not Showing in Navigation
**Solution:** Verify nav links in all HTML files, check file paths

### Images Not Loading on New Pages
**Solution:** Check image file paths (should be `../images/...`)

### Style Issues on New Pages
**Solution:** Verify CSS paths in `<head>` (should be `../css/...`)

---

## SUPPORT DOCUMENTATION

| Task | Document |
|------|-----------|
| Full SEO Analysis | `SEO_AUDIT_REPORT.md` |
| Implementation Details | `SEO_IMPLEMENTATION_GUIDE.md` |
| Schema Examples | See top of page `.html` files |
| Keyword Strategy | `SEO_AUDIT_REPORT.md` — Keyword Optimization section |

---

## COMPLETION SIGN-OFF

- [ ] All files deployed
- [ ] All tests pass
- [ ] Google Search Console updated
- [ ] Team notified of changes
- [ ] Monitoring schedule set

**Deployment Date:** ___________  
**Deployed By:** ___________  
**Verification Date:** ___________  
**Verified By:** ___________

---

**Ready to Deploy:** Yes ✅  
**Last Updated:** 28 May 2026  
**Estimated Time:** 60-90 minutes for full implementation
