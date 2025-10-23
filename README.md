# Viriato Landing Page

A beautiful, responsive landing page for Viriato - "Everything for an image". Built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for cinematic transitions
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Component-Based**: Modular architecture for easy maintenance
- **Performance Optimized**: Fast loading and smooth scrolling experience

## 📋 Tech Stack

- **React.js** - UI framework for dynamic content
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for scroll effects and transitions
- **Vite** - Fast build tool and dev server

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
viriato-landing-page/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Fixed header with logo and CTAs
│   │   ├── Hero.jsx            # Hero section with main headline
│   │   ├── HeroImage.jsx       # Large hero image with parallax
│   │   ├── Results.jsx         # Stats section (€1B in sales)
│   │   ├── Services.jsx        # Service navigation tabs
│   │   ├── VShow.jsx           # V-SHOW® product showcase
│   │   ├── ClientTestimonial.jsx # Client testimonials
│   │   └── ContactForm.jsx     # Contact form with validation
│   ├── LandingPage.jsx         # Main landing page layout
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design Tokens

### Colors
- **Background**: `#191710` (Dark brown/black)
- **Accent**: `#d29d79` (Gold/Tan)
- **Text**: White

### Typography
- **Headings**: Work Sans (Semi-Bold, Semi-Bold Italic)
- **Body**: Work Sans (Regular, Light), Inter (Regular, Semi-Bold)

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Modifying Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    bg: '#191710',
    accent: '#d29d79',
  },
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/LandingPage.jsx`
3. Follow the existing pattern with Framer Motion animations

### Updating Images
Replace image URLs in the component files with your own assets. Images are currently served from the Figma MCP localhost server.

## 📱 Responsive Features

- **Header**: Collapsible text on mobile, adaptive sizing
- **Hero**: Scalable typography and spacing
- **Services**: Horizontal scroll on mobile
- **V-SHOW®**: Stacks vertically on mobile
- **Contact Form**: Full-width on mobile, side-by-side on desktop

## 🎭 Animations

- **Scroll-triggered**: Sections fade and slide into view
- **Hover effects**: Buttons scale on interaction
- **Parallax**: Hero image zooms on scroll
- **Staggered reveals**: Text elements appear sequentially

## 📞 Contact Form Integration

The contact form is ready to be connected to your backend. Update the `handleSubmit` function in `ContactForm.jsx`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // Add your API endpoint here
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

## 🌐 Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📄 License

This project is private and confidential. All rights reserved to Viriato.

## 👥 Credits

- **Design**: Figma Design System
- **Development**: Built following Figma specifications
- **Fonts**: Work Sans, Inter (Google Fonts)

---

Built with ❤️ for Viriato - Everything for an image

