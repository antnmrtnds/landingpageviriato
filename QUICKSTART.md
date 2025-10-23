# Quick Start Guide

Get your Viriato Landing Page up and running in 5 minutes!

## 🚀 Quick Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🎨 Customization Quick Reference

### Change Colors
**File**: `tailwind.config.js`

```js
colors: {
  primary: {
    bg: '#191710',        // Main background
    accent: '#d29d79',    // Gold accent color
  },
}
```

### Update Logo
**File**: `src/components/Header.jsx` (Line 14)

Replace:
```jsx
src="http://localhost:3845/assets/..."
```

With your logo:
```jsx
src="/images/your-logo.png"
```

### Edit Hero Text
**File**: `src/components/Hero.jsx` (Lines 10-13)

```jsx
<span className="text-white">Your headline here</span>{' '}
<span className="text-primary-accent italic">highlighted text</span>
```

### Modify Form Action
**File**: `src/components/ContactForm.jsx` (Line 18)

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Add your endpoint here
  await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
};
```

## 📱 Testing Responsive Design

### Mobile View
```bash
# In your browser DevTools:
1. Press F12
2. Click device icon (or Ctrl+Shift+M)
3. Select iPhone/Android device
```

### Common Breakpoints
- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1440px (Standard HD)

## 🔧 Common Tasks

### Add a New Section

1. **Create component**:
   ```bash
   # Create: src/components/YourSection.jsx
   ```

2. **Use template**:
   ```jsx
   import { motion } from 'framer-motion';
   
   const YourSection = () => {
     return (
       <motion.section
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 1 }}
         className="relative w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 py-8"
       >
         {/* Your content here */}
       </motion.section>
     );
   };
   
   export default YourSection;
   ```

3. **Add to landing page**:
   ```jsx
   // In src/LandingPage.jsx
   import YourSection from './components/YourSection';
   
   // Add inside the main div:
   <YourSection />
   ```

### Change Font

1. **Update Google Fonts link** in `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
   ```

2. **Update Tailwind config** in `tailwind.config.js`:
   ```js
   fontFamily: {
     'your-font': ['Your Font', 'sans-serif'],
   }
   ```

3. **Use in components**:
   ```jsx
   className="font-your-font"
   ```

### Deploy to Production

#### Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

#### Netlify
```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

#### GitHub Pages
```bash
npm run build
# Copy dist/ contents to your gh-pages branch
```

## 🐛 Troubleshooting

### Issue: Images not loading
**Solution**: 
- Ensure Figma MCP server is running on `localhost:3845`
- Or replace with your own image URLs

### Issue: Animations not working
**Solution**:
- Check Framer Motion is installed: `npm list framer-motion`
- Reinstall if needed: `npm install framer-motion`

### Issue: Tailwind styles not applying
**Solution**:
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear browser cache (Ctrl+Shift+R)

### Issue: Build fails
**Solution**:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📊 Performance Tips

### Optimize Images
```bash
# Before deployment, compress images:
npm install -g imagemin-cli
imagemin public/images/* --out-dir=public/images/optimized
```

### Enable Gzip Compression
Add to `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
})
```

### Lazy Load Components
```jsx
import { lazy, Suspense } from 'react';

const ContactForm = lazy(() => import('./components/ContactForm'));

// Usage:
<Suspense fallback={<div>Loading...</div>}>
  <ContactForm />
</Suspense>
```

## 🔐 Environment Variables

Create `.env` file:
```env
VITE_API_ENDPOINT=https://your-api.com
VITE_GA_ID=G-XXXXXXXXXX
```

Use in code:
```jsx
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
```

## 📞 Support

- **Documentation**: See `README.md` and `COMPONENTS.md`
- **Issues**: Check console for error messages
- **Updates**: Run `npm update` regularly

## ✅ Checklist Before Launch

- [ ] Replace all placeholder images
- [ ] Update meta tags in `index.html`
- [ ] Connect contact form to backend
- [ ] Test on multiple devices
- [ ] Optimize images
- [ ] Add Google Analytics
- [ ] Set up error tracking
- [ ] Configure domain/hosting
- [ ] Test form submissions
- [ ] Check all links work
- [ ] Verify responsive design

---

🎉 **You're all set!** Happy coding!

For detailed documentation, see `README.md` and `COMPONENTS.md`

