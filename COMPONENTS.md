# Component Reference Guide

This document provides a detailed overview of all components in the Viriato Landing Page.

## Component Hierarchy

```
LandingPage
├── Header
├── Hero
├── HeroImage
├── Results
├── Services
├── VShow
├── ClientTestimonial
└── ContactForm
```

## Component Details

### 1. Header (`components/Header.jsx`)
**Purpose**: Fixed navigation header with logo and CTA buttons

**Props**: None

**Features**:
- Fixed positioning at top of page
- Animated entrance (slides down)
- Responsive sizing (smaller on mobile)
- Hover animations on buttons
- Shortened text on mobile ("Contact us" → "Contact")

**Responsive Breakpoints**:
- Mobile: 48px height, 12px logo
- Tablet: 64px height, 16px logo
- Desktop: 80px height, 80px logo

---

### 2. Hero (`components/Hero.jsx`)
**Purpose**: Main hero section with headline and description

**Props**: None

**Features**:
- Centered layout
- Animated text reveal
- Multi-paragraph description
- CTA button with hover effect
- Fully responsive typography

**Responsive Breakpoints**:
- Mobile: 3xl heading (48px)
- Tablet: 5xl heading (64px)
- Desktop: 54px custom heading

---

### 3. HeroImage (`components/HeroImage.jsx`)
**Purpose**: Full-width hero image with parallax effect

**Props**: None

**Features**:
- Zoom-in animation on scroll
- Fade-in on view
- Responsive height
- Object-fit cover for aspect ratio

**Responsive Breakpoints**:
- Mobile: 300px height
- Tablet: 500px height
- Desktop: 678px height

---

### 4. Results (`components/Results.jsx`)
**Purpose**: Statistics section showing company achievements

**Props**: None

**Features**:
- Animated number reveals
- Sequential highlight animations
- Staggered text appearance
- Centered on mobile, left-aligned on desktop

**Key Stats**:
- €1 Billion in client sales
- 25 years of experience
- Worldwide from Portugal

---

### 5. Services (`components/Services.jsx`)
**Purpose**: Interactive service navigation

**Props**: None

**State**:
- `activeService`: Currently selected service (default: "Virtual Tours")

**Features**:
- Tab-like interface
- Active state styling
- Horizontal scroll on mobile
- Click interactions
- Hover animations

**Services List**:
1. What we do (label only)
2. Virtual Tours
3. Branding
4. Advertising
5. CGI Images
6. Full 360° Marketing

---

### 6. VShow (`components/VShow.jsx`)
**Purpose**: Product showcase for V-SHOW® virtual tour service

**Props**: None

**Features**:
- Side-by-side layout (desktop)
- Stacked layout (mobile)
- Image with rounded corners
- Slide-in animations from left/right
- CTA button

**Layout**:
- Mobile: Column (image top, text bottom)
- Desktop: Row (image left, text right)

---

### 7. ClientTestimonial (`components/ClientTestimonial.jsx`)
**Purpose**: Display client testimonial with photo and company logo

**Props**: None

**Features**:
- Centered layout
- Quote styling
- Client profile photo (rounded)
- Company logo
- Fade-in animations
- Scale animation on client info

**Content**:
- Client: Monica Dias, Consultant
- Company: Varandas

---

### 8. ContactForm (`components/ContactForm.jsx`)
**Purpose**: Lead capture form with fields and submission

**Props**: None

**State**:
```js
{
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: ''
}
```

**Features**:
- Full form validation (HTML5)
- Side-by-side with image (desktop)
- Stacked layout (mobile)
- Animated underlines on inputs
- Slide-in animations

**Form Fields**:
1. Name* (required)
2. Email* (required)
3. Company* (required)
4. Project Type* (required)
5. Message* (required)

**Customization**:
Update `handleSubmit` function to connect to your backend API.

---

## Animation Patterns

### Entry Animations
All components use Framer Motion's `whileInView` for scroll-triggered animations:

```jsx
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 1 }}
```

### Hover Animations
Buttons use scale effects:

```jsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Staggered Animations
Multiple elements use delay for sequential appearance:

```jsx
transition={{ delay: 0.3, duration: 0.8 }}
```

---

## Styling Convention

### Tailwind Classes
- Use responsive prefixes: `md:`, `lg:`
- Mobile-first approach
- Custom colors via config: `primary-bg`, `primary-accent`

### Typography
- Headings: `font-work-sans`
- Body: `font-work-sans` or `font-inter`
- Sizes: `text-hero`, `text-title`, `text-body`, `text-stat`

### Spacing
- Consistent gaps: `gap-[30px]`, `gap-[40px]`
- Responsive padding: `px-4 md:px-10 lg:px-20`

---

## Asset Loading

All images are currently loaded from the Figma MCP localhost server:
```
http://localhost:3845/assets/[hash].png
```

To use your own images:
1. Add images to `/public/images/`
2. Update image `src` in components
3. Use relative paths: `/images/logo.png`

---

## Best Practices

### Performance
- Use `viewport={{ once: true }}` to animate only once
- Optimize images before deployment
- Lazy load below-the-fold content

### Accessibility
- All images have `alt` attributes
- Form labels are properly associated
- Semantic HTML elements used

### Maintenance
- Keep components small and focused
- Use consistent naming conventions
- Document complex logic with comments

---

## Future Enhancements

### Potential Additions
- [ ] Mobile menu hamburger
- [ ] Footer component
- [ ] Loading spinner
- [ ] Form submission feedback
- [ ] Image lightbox/modal
- [ ] Case studies section
- [ ] Blog integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Analytics integration

---

Built for Viriato - Everything for an image

