# Hero Component Guide

## Overview
The Hero component system has been redesigned to support full-screen hero sections with the background extending behind the navbar.

## Components

### 1. `Hero` Component
The base hero component with conditional rendering for background images or solid colors.

**Props:**
- `title` (required): Main heading text
- `subtitle` (optional): Small text above title
- `description` (optional): Description text below title
- `buttonText` (optional): CTA button text
- `buttonLink` (optional): CTA button link
- `backgroundImage` (default: false): Toggle between image or solid background
- `image` (optional): Background image URL when backgroundImage is true
- `backgroundColor` (default: "primaryBlue"): Tailwind color class for solid background
- `children` (optional): Custom content

### 2. `HeroWithNavbar` Component
Combines transparent navbar with hero section for full-screen hero pages (like homepage).

**Usage:**
```tsx
<HeroWithNavbar
  navitems={navitems}
  backgroundImage={true}
  image="/hero-bg.jpg"
  title="History of expertise.\nReputation for excellence."
  description="Smart approaches to solution..."
  buttonText="About Us"
  buttonLink="/about"
/>
```

### 3. `PageWithNavbar` Component
Wrapper for regular pages that need the standard navbar with offWhite background.

**Usage:**
```tsx
<PageWithNavbar navitems={navitems}>
  <PageIntro {...pageIntroData} />
  {/* Other page content */}
</PageWithNavbar>
```

## Implementation

### Homepage (with hero background behind navbar)
```tsx
// src/app/page.tsx
export default async function Home() {
  return (
    <>
      <HeroWithNavbar
        backgroundImage={true}
        image="/hero-bg.jpg"
        title="Your Title"
        description="Your description"
        buttonText="Learn More"
        buttonLink="/about"
      />
      {/* Rest of page content */}
    </>
  );
}
```

### Other Pages (with regular navbar)
```tsx
// src/app/about/page.tsx
export default async function About() {
  return (
    <PageWithNavbar navitems={navitems}>
      <PageIntro {...pageIntroData} />
      {/* Rest of page content */}
    </PageWithNavbar>
  );
}
```

## Key Features

1. **Transparent Navbar**: When used with `HeroWithNavbar`, the navbar becomes transparent with white text
2. **Full-Screen Hero**: Hero section extends to full viewport height
3. **Conditional Backgrounds**: Switch between image backgrounds or solid colors
4. **Responsive Design**: Fully responsive across all breakpoints
5. **Decorative Elements**: Includes wave pattern at bottom for visual interest

## Layout Changes

The main layout (`src/app/layout.tsx`) no longer includes the navbar by default. Each page must now include either:
- `HeroWithNavbar` for hero pages
- `PageWithNavbar` for regular pages

This allows for flexible navbar styling per page.
