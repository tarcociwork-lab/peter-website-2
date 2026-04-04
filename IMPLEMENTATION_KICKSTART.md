# Marcus "The Catalyst" Thorne Landing Page - Implementation Kickstart

## Project Overview

**Project Name:** Marcus Thorne Premium Coaching Landing Page  
**Framework:** Next.js 16 (App Router)  
**Styling:** Tailwind CSS + custom CSS for glass effects  
**Typography:** GEIST (primary font family)  
**Theme:** Dark mode (Obsidian base)  
**Responsive:** Mobile-first approach with tablet & desktop optimizations  
**Status:** Prototype (Placeholder content & images to be replaced)

---

## Design System & Color Tokens

### Color Palette (5 Colors Total)
```css
--color-primary: #CCFF00 (Electric Lime - Accent)
--color-background: #09090b (Obsidian - Dark Base)
--color-surface: #1a1a1e (Slightly lighter surface)
--color-surface-secondary: #252529 (Card backgrounds)
--color-text-primary: #ffffff (Primary text)
--color-text-muted: #999999 (Secondary/muted text)
--color-text-subtle: #666666 (Tertiary text for fine print)
--color-border: #333333 (Borders & dividers)
--color-glass: rgba(255, 255, 255, 0.05) (Glass effect base)
```

### Glass Effect Specifications
- **Base:** `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(10px)`
- **Border:** `1px solid rgba(255, 255, 255, 0.1)`
- **Applied to:** Card components, navigation, modal overlays
- **Hover state:** Increase opacity to `rgba(255, 255, 255, 0.08)`

### Typography Scale
- **Font Family:** GEIST (sans-serif)
- **Headings:** Bold weights (600-700)
  - H1: 48px (mobile: 32px) / line-height: 1.2
  - H2: 36px (mobile: 24px) / line-height: 1.3
  - H3: 24px (mobile: 18px) / line-height: 1.4
- **Body:** 16px (mobile: 14px) / line-height: 1.6
- **Caption:** 12px / line-height: 1.5

---

## Component Architecture

### Component Files (Target: <600 lines each)

#### Core Layout Components
1. **`components/Header.tsx`** (150 lines)
   - Sticky navigation with glass effect
   - Desktop menu items
   - Mobile hamburger menu toggle
   - Logo/brand area
   - Primary CTA button (opens modal)

2. **`components/MobileMenu.tsx`** (120 lines)
   - Hamburger menu drawer
   - Mobile navigation items
   - Mobile CTA button
   - Smooth open/close animation

3. **`components/Footer.tsx`** (140 lines)
   - Dark themed footer with branding
   - Links section
   - Social icons
   - "Back to Top" smooth scroll button

#### Hero & Feature Sections
4. **`components/Hero.tsx`** (180 lines)
   - Hero headline, subheading, CTA
   - Hero image (placeholder)
   - Scroll animation trigger
   - Fade-in animation on mount

5. **`components/Benefits.tsx`** (200 lines)
   - 6 benefit cards in grid layout
   - Glass effect styling
   - Icons (placeholder SVG or images)
   - Stagger animation on scroll

#### Social Proof & Trust
6. **`components/Testimonials.tsx`** (180 lines)
   - Testimonial carousel/grid (3 cards)
   - Client photo, name, title, metric
   - Glass effect cards
   - Hover effects

7. **`components/TrustBar.tsx`** (100 lines)
   - "Featured in" section with brand logos
   - Placeholder images
   - Responsive grid

#### Pricing & CTA
8. **`components/Pricing.tsx`** (150 lines)
   - Single pricing card or comparison
   - Features list
   - CTA button (opens modal)
   - 30-day guarantee callout

#### Engagement
9. **`components/FAQ.tsx`** (200 lines)
   - Accordion component
   - 4 FAQ items (placeholder content)
   - Glass effect background
   - Smooth expand/collapse animation

#### Contact & Modals
10. **`components/CTAModal.tsx`** (160 lines)
    - Modal overlay with glass effect backdrop
    - Form fields (name, email, message) - placeholder/non-functional
    - Close button
    - Slide/fade animation

11. **`components/Accordion.tsx`** (80 lines)
    - Reusable accordion component
    - Collapse/expand logic
    - Smooth height animation

12. **`components/GlassCard.tsx`** (60 lines)
    - Reusable glass effect card wrapper
    - Configurable padding, hover effects
    - Border styling

#### Utilities
13. **`lib/animations.ts`** (100 lines)
    - Reusable animation utilities
    - Scroll trigger helpers
    - Framer Motion variants

---

## Page Structure (app/page.tsx)

```
1. Header (Fixed/Sticky)
   └─ Navigation + Desktop CTA
   └─ Mobile Hamburger Menu

2. Hero Section
   ├─ Headline: "Transform Your Health. Transform Your Life."
   ├─ Subheading: Value proposition
   ├─ CTA Button #1: "Start Your Transformation" (Opens Modal)
   └─ Hero Image (Placeholder)

3. Benefits Grid
   ├─ 6 cards with benefits
   ├─ Icons + descriptions
   └─ Subtle scroll-triggered animations

4. Testimonials Section
   ├─ Section heading
   ├─ 3 testimonial cards (glass effect)
   └─ Staggered animation on scroll

5. Trust Bar
   ├─ "Featured in" text
   ├─ Brand logos (Google, Goldman Sachs, McKinsey, Tesla)
   └─ Responsive grid

6. Pricing Card
   ├─ "$1,497 / 12-Week Program"
   ├─ Feature list
   ├─ CTA Button #2: "Join the Program" (Opens Modal)
   └─ 30-day guarantee badge

7. FAQ Section
   ├─ Section heading
   ├─ 4 accordion items (placeholder)
   └─ Glass effect background

8. Final CTA Section
   ├─ Large headline: "Ready to become The Catalyst?"
   ├─ CTA Button #3: "Schedule Your Consultation" (Opens Modal)
   └─ Contact Marcus link (Routes to /contact)

9. Footer
   ├─ Links section
   ├─ Social icons
   ├─ "Back to Top" button (Smooth scroll)
   └─ Copyright

10. Contact Page (/contact)
    ├─ Contact form (placeholder)
    ├─ Contact information
    └─ Back to home link
```

---

## CTA Strategy (Minimum 3 Placements)

1. **Header CTA:** "Join the Program" - Opens modal
2. **Hero CTA:** "Start Your Transformation" - Opens modal
3. **Pricing CTA:** "Join the Program" - Opens modal
4. **Final CTA Section:** "Schedule Your Consultation" - Opens modal
5. **Contact Page Link:** In final section or header - Routes to `/contact`

**Modal Behavior:** Opens centrally, dark overlay with glass backdrop, close button (X), smooth fade-in animation.

---

## Responsive Design Approach

### Breakpoints (Tailwind Standard)
- **Mobile:** 0px - 640px (default, mobile-first)
- **Tablet:** 641px - 1024px (md breakpoint)
- **Desktop:** 1025px+ (lg breakpoint)

### Mobile Optimizations
- **Navigation:** Hamburger menu (not visible on desktop)
- **Hero:** Single column, increased padding, touch-friendly buttons
- **Grid Layouts:** Stack to single column on mobile, 2 columns on tablet, 3+ on desktop
- **Typography:** Scales down on mobile (H1: 32px, Body: 14px)
- **Spacing:** Reduced gap/padding on mobile for compact layout
- **Images:** Responsive `max-w-full`, adjust aspect ratios as needed

### Tablet Adjustments
- 2-column grid layouts (instead of 1 on mobile, 3+ on desktop)
- Hamburger menu remains visible (optional transition to desktop nav at larger breakpoint)
- Larger touch targets

---

## Animation Strategy

### Scroll-Based Animations
- **Fade-in on scroll:** Testimonials, benefits cards, FAQ section
- **Slide-in on scroll:** Cards stagger from left/right
- **Parallax effect (subtle):** Hero image at different scroll speeds
- **Reveal on scroll:** Numbers/metrics reveal as section comes into view

### Interaction Animations
- **Hover states:** Card lift effect (+2px shadow), text color accent change
- **Modal open/close:** Fade in/out with slight scale animation
- **Accordion expand/collapse:** Smooth height transition (300ms)
- **Button hover:** Glow effect with accent color, slight scale
- **Back to top:** Smooth scroll behavior (300ms)

### Mount Animations
- **Header:** Fade down on page load
- **Hero:** Staggered fade-in (headline, subheading, image, CTA)
- **Sections:** Staggered appearance as page loads

### Tools
- **Framer Motion** for scroll triggers and animations
- **Tailwind transitions** for hover/interaction states
- **CSS `scroll-behavior: smooth`** for scroll-to-top

---

## Image Requirements & Placeholders

### Images to Create/Generate
1. **Hero Image** (1200x600px)
   - Fitness/coaching theme, professional, motivational
   - Dark theme compatible
   - Placeholder: Professional headshot or fitness imagery

2. **Trust Bar Logos** (120x60px each)
   - Google, Goldman Sachs, McKinsey, Tesla
   - Grayscale or light color
   - Placeholder: Company logos or monochromatic versions

3. **Benefit Icons** (6x, 64x64px)
   - Represent benefits: Goals, Discipline, Results, etc.
   - SVG or icon images
   - Placeholder: Generic icons

4. **Testimonial Photos** (3x, 80x80px)
   - Client profile pictures
   - Circular crop
   - Placeholder: Avatar images

5. **FAQ Background** (optional, full-width)
   - Subtle pattern or gradient
   - Placeholder: None required, use glass effect background

### Image Generation Plan
- Generate using AI tools (e.g., Fal, DALL-E)
- Save to `/public/images/` directory
- Update filenames in components later

---

## SEO Strategy

### Meta Tags (layout.tsx)
- **Title:** "Marcus Thorne - Premium Coaching for High Performers"
- **Description:** "Transform your health and life with personalized 12-week coaching. Join 150+ clients already transformed."
- **OG Image:** Hero image or branded graphic
- **Canonical URL:** https://[domain].com

### On-Page SEO
- **H1:** Single, semantic use (Hero headline)
- **H2/H3:** Section headings for hierarchy
- **Alt Text:** All images include descriptive alt text
- **Structured Data:** JSON-LD schema for LocalBusiness/Organization
- **Keywords:** "Coaching", "Health Transformation", "Premium Training"
- **Internal Links:** Contact page, back to home

### Page Optimization
- **Mobile-friendly:** Responsive design ensures mobile readability
- **Core Web Vitals:** Optimize image loading, lazy load non-critical images
- **Performance:** Minimize CSS/JS, defer non-critical scripts
- **Accessibility:** WCAG AA compliance (alt text, color contrast, semantic HTML)

---

## Development Phases

### Phase 1: Foundation (Components Setup)
- [ ] Setup project structure (Next.js 16, Tailwind, GEIST font)
- [ ] Create design token system (CSS variables in globals.css)
- [ ] Build reusable components (GlassCard, Accordion, etc.)
- [ ] Setup animation utilities (Framer Motion variants)

### Phase 2: Layout & Content
- [ ] Build Header with mobile menu integration
- [ ] Create Hero section with placeholder image
- [ ] Develop Benefits, Testimonials, Trust Bar sections
- [ ] Build Pricing and FAQ sections
- [ ] Add Footer with back-to-top button

### Phase 3: Interactivity & Animations
- [ ] Implement CTA modal component
- [ ] Add scroll-triggered animations to sections
- [ ] Implement hamburger menu toggle
- [ ] Add hover effects and transitions

### Phase 4: Contact Page & Polish
- [ ] Create `/contact` page with contact form (placeholder)
- [ ] Add SEO meta tags and structured data
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Color contrast review and adjustments as needed
- [ ] Final animation tweaks and performance optimization

### Phase 5: Image Generation & Refinement
- [ ] Generate placeholder images (hero, logos, icons, avatars)
- [ ] Update image paths in components
- [ ] Final review and QA

---

## Technical Specifications

### Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + custom CSS
- **Typography:** GEIST (via next/font/google)
- **Animations:** Framer Motion v12+
- **Icons:** SVG or icon library (lucide-react or similar)
- **Deployment:** Vercel

### No Requirements
- ✗ State management (use placeholders/props)
- ✗ Email capture (placeholder form only)
- ✗ Database integration (prototype phase)
- ✗ Authentication
- ✗ Payment processing

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## File Structure Preview

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx (SEO meta, fonts, globals)
│   ├── page.tsx (Landing page structure)
│   ├── contact/
│   │   └── page.tsx (Contact page)
│   └── globals.css (Design tokens, glass effects)
├── components/
│   ├── Header.tsx
│   ├── MobileMenu.tsx
│   ├── Hero.tsx
│   ├── Benefits.tsx
│   ├── Testimonials.tsx
│   ├── TrustBar.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── CTAModal.tsx
│   ├── Footer.tsx
│   ├── Accordion.tsx
│   ├── GlassCard.tsx
│   └── ui/ (shadcn components as needed)
├── lib/
│   ├── animations.ts (Framer Motion variants)
│   └── utils.ts (utility functions)
├── public/
│   └── images/
│       ├── hero.jpg
│       ├── logo-google.svg
│       ├── icon-benefit-1.svg
│       └── avatar-testimonial-1.jpg
├── IMPLEMENTATION_KICKSTART.md (this file)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

---

## Quality Checklist

- [ ] All components under 600 lines
- [ ] Responsive design tested on mobile, tablet, desktop
- [ ] At least 3 CTA placements
- [ ] Glass effects applied to cards
- [ ] Animations on scroll and interactions
- [ ] GEIST font applied across page
- [ ] Color contrast validated (with Electric Lime accent)
- [ ] SEO meta tags and structured data included
- [ ] Mobile hamburger menu functional
- [ ] Back-to-top smooth scroll working
- [ ] Modal CTA opens/closes smoothly
- [ ] Contact page route works
- [ ] All images have alt text
- [ ] Placeholder images generated
- [ ] No email capture on landing page
- [ ] Prototype content (replaceable FAQ, testimonials)

---

## Notes for Future Updates

- **Images:** Replace all `/public/images/` placeholders with production assets
- **Testimonials:** Update with real client quotes and photos
- **FAQ:** Replace placeholder content with actual FAQs
- **Contact Form:** Implement backend integration (email service, database)
- **Analytics:** Add Google Analytics or Vercel Analytics tracking
- **A/B Testing:** Once live, test CTA copy, colors, and section order
- **Color Refinement:** Review contrast and adjust Electric Lime usage if needed
- **State Management:** Add if features like wishlists, saved items, or user preferences needed
- **Performance:** Implement image optimization, lazy loading, and CDN caching

---

**Status:** Ready for development kickoff 🚀
