# Responsive Styles Documentation

## Overview
Each component now has its own CSS file with responsive breakpoints for different screen sizes.

## Screen Size Breakpoints

### Mobile (Base Styles)
- **Size**: 390px
- **Description**: Base styles applied to all screen sizes by default

### Tablet
- **Size**: 768px and above
- **Media Query**: `@media (min-width: 768px)`
- **Description**: Optimized for tablet devices

### Desktop
- **Size**: 1024px and above
- **Media Query**: `@media (min-width: 1024px)`
- **Description**: Optimized for desktop devices

### Extra Large Desktop (when needed)
- **Size**: 1280px and above
- **Media Query**: `@media (min-width: 1280px)`
- **Description**: Optimized for larger desktop screens

## Component CSS Files

### 1. ClientTestimonial.css
**Location**: `src/components/ClientTestimonial.css`

**Key Classes**:
- `.client-testimonial` - Main container
- `.client-testimonial__title` - Section title
- `.client-testimonial__quote` - Testimonial text
- `.client-testimonial__avatar` - Client avatar image
- `.client-testimonial__logo` - Company logo

**Responsive Adjustments**:
- Font sizes scale from 16px (mobile) to 24px (desktop)
- Padding increases with screen size
- Avatar size grows from 28px to 51px
- Logo dimensions adjust across breakpoints

### 2. ContactForm.css
**Location**: `src/components/ContactForm.css`

**Key Classes**:
- `.contact-form` - Main form container
- `.contact-form__heading` - Desktop heading (hidden on mobile)
- `.contact-form__mobile-heading` - Mobile heading (hidden on desktop)
- `.contact-form__field` - Form field wrapper
- `.contact-form__input` - Text inputs
- `.contact-form__textarea` - Textarea
- `.contact-form__checkbox` - Custom checkbox

**Responsive Adjustments**:
- Mobile shows simplified heading
- Desktop shows full heading with large typography (74px)
- Input font sizes scale from 14px to 18px
- Form padding increases significantly on larger screens

### 3. Footer.css
**Location**: `src/components/Footer.css`

**Key Classes**:
- `.footer` - Main footer container
- `.footer__contact` - Contact information
- `.footer__social` - Social media links
- `.footer__social-icon` - Social media icons
- `.footer__badge` - 25 years badge

**Responsive Adjustments**:
- Text size grows from 8px to 12px
- Social icons scale from 24px to 32px
- Badge dimensions increase across breakpoints

### 4. Header.css
**Location**: `src/components/Header.css`

**Key Classes**:
- `.header` - Main header container
- `.header__logo` - Viriato logo
- `.header__cta` - Call-to-action buttons (hidden on mobile)

**Responsive Adjustments**:
- Mobile: Centered logo, no CTA buttons
- Tablet+: Fixed position, logo left-aligned, CTA buttons visible
- Logo size scales from 41x64px to 45x73px

### 5. Hero.css
**Location**: `src/components/Hero.css`

**Key Classes**:
- `.hero` - Main hero section
- `.hero__heading` - Main heading
- `.hero__heading-accent` - Accented text (italic, colored)
- `.hero__body` - Body text
- `.hero__body-mobile` / `.hero__body-desktop` - Responsive text versions

**Responsive Adjustments**:
- Mobile: Relative positioning, 30px heading
- Tablet+: Fixed position, 54px heading
- Different body text for mobile vs desktop
- Max-width increases with screen size

### 6. HeroImage.css
**Location**: `src/components/HeroImage.css`

**Key Classes**:
- `.hero-image` - Main container
- `.hero-image__container` - Video container with aspect ratio
- `.hero-image__video` - Video element

**Responsive Adjustments**:
- Aspect ratios change per breakpoint:
  - Mobile: 320/226
  - Tablet: 768/543
  - Desktop: 1024/724
  - XL: 16/9

### 7. Results.css
**Location**: `src/components/Results.css`

**Key Classes**:
- `.results` - Main results section
- `.results__content` - Content text
- `.results__accent` - Accent text (italic, colored)

**Responsive Adjustments**:
- Font size scales from 24px to 32px
- Padding adjusts across breakpoints

### 8. Services.css
**Location**: `src/components/Services.css`

**Key Classes**:
- `.services` - Main services container
- `.services__menu-desktop` / `.services__menu-mobile` - Responsive menus
- `.services__menu-button` - Service selection buttons
- `.services__media` - Image/video container
- `.services__slideshow` - Slideshow container
- `.services__title` - Service title
- `.services__description` - Service description

**Responsive Adjustments**:
- Mobile: Vertical layout, scrollable menu
- Tablet: Larger fonts, maintained vertical layout
- Desktop: Side-by-side layout, full menu visible
- Font sizes scale from 16px to 20px
- Navigation arrows and indicators adjust positioning

## Usage

### Current Implementation
All components now import their respective CSS files. The CSS classes are available to use alongside or instead of Tailwind classes.

### Integration Options

#### Option 1: Keep Current Tailwind Classes
The CSS files serve as reference and backup styling. Components continue using Tailwind classes.

#### Option 2: Mixed Approach
Use CSS classes for main structure and Tailwind for utilities:
```jsx
<div className="hero__heading text-white">
```

#### Option 3: Full Migration to CSS Classes
Replace Tailwind classes with the custom CSS classes:
```jsx
// Before (Tailwind)
<div className="text-[30px] font-work-sans text-white">

// After (Custom CSS)
<div className="hero__heading">
```

## CSS Class Naming Convention
All classes follow the BEM (Block Element Modifier) methodology:
- **Block**: `.component-name`
- **Element**: `.component-name__element`
- **Modifier**: `.component-name__element--modifier`

## Browser Compatibility
The CSS uses modern features:
- CSS Custom Properties (CSS Variables)
- Media Queries
- Flexbox
- Grid (Desktop Services layout)
- Aspect Ratio

All features are widely supported in modern browsers.

## Notes
- All measurements use standard CSS units (px, rem)
- Font families: 'Work Sans' and 'Inter'
- Primary accent color: #d29d79
- Background color: #1a1a1a (stored in CSS variable --primary-bg)
- Responsive design is mobile-first approach
- Smooth transitions on interactive elements

