# CSS Breakpoints Visual Guide

## Screen Size Reference

```
Mobile (Base)        Tablet              Desktop             XL Desktop
|                    |                   |                   |
├────────────────────┼───────────────────┼───────────────────┤
0px                  768px               1024px              1280px+

🔹 390px            🔹 768px            🔹 1024px           🔹 1280px+
(iPhone)            (iPad)              (Desktop)           (Large Desktop)
```

## Media Query Breakpoints

### 📱 Mobile (390px)
**Default Styles** - No media query needed

```css
/* Base mobile styles */
.component {
  font-size: 16px;
  padding: 20px;
}
```

### 📱 Tablet (768px)
**Media Query**: `@media (min-width: 768px)`

```css
/* Tablet and above */
@media (min-width: 768px) {
  .component {
    font-size: 18px;
    padding: 40px;
  }
}
```

### 💻 Desktop (1024px)
**Media Query**: `@media (min-width: 1024px)`

```css
/* Desktop and above */
@media (min-width: 1024px) {
  .component {
    font-size: 20px;
    padding: 60px;
  }
}
```

### 🖥️ Extra Large Desktop (1280px)
**Media Query**: `@media (min-width: 1280px)`

```css
/* Large desktop and above */
@media (min-width: 1280px) {
  .component {
    font-size: 24px;
    padding: 80px;
  }
}
```

## Component-Specific Breakpoint Behavior

### Header Component
| Screen Size | Layout | Logo Size | CTA Buttons |
|------------|--------|-----------|-------------|
| Mobile (390px) | Relative, Centered | 41x64px | Hidden |
| Tablet (768px+) | Fixed, Left-aligned | 45x73px | Visible |
| Desktop (1024px+) | Fixed, Left-aligned | 45x73px | Visible |

### Hero Component
| Screen Size | Position | Heading Size | Body Text |
|------------|----------|--------------|-----------|
| Mobile (390px) | Relative | 30px | Short version |
| Tablet (768px+) | Fixed (top: 103px) | 54px | Full version |
| Desktop (1024px+) | Fixed (top: 103px) | 54px | Full version |

### Hero Image Component
| Screen Size | Aspect Ratio | Margin Top |
|------------|--------------|------------|
| Mobile (390px) | 320:226 | 28px |
| Tablet (768px+) | 768:543 | 113px |
| Desktop (1024px+) | 1024:724 | 113px |
| XL (1280px+) | 16:9 | 113px |

### Services Component
| Screen Size | Layout | Menu Type | Content Grid |
|------------|--------|-----------|--------------|
| Mobile (390px) | Vertical | Scrollable | Stacked |
| Tablet (768px+) | Vertical | Scrollable | Stacked |
| Desktop (1024px+) | Horizontal | Full Menu | Side-by-side (2 cols) |

### Contact Form Component
| Screen Size | Heading | Input Size | Min Height |
|------------|---------|------------|------------|
| Mobile (390px) | Simple (18px) | 14px | 629px |
| Tablet (768px+) | Full (74px) | 18px | 1009px |
| Desktop (1024px+) | Full (74px) | 18px | 1009px |

### Client Testimonial Component
| Screen Size | Quote Size | Avatar | Logo Size |
|------------|------------|--------|-----------|
| Mobile (390px) | 16px | 28x28px | 148x30px |
| Tablet (768px+) | 16px | 51x51px | 274x56px |
| Desktop (1024px+) | 24px | 51x51px | 274x56px |

### Footer Component
| Screen Size | Text Size | Social Icons | Badge Size |
|------------|-----------|--------------|------------|
| Mobile (390px) | 8px | 24x24px | 107x44px |
| Tablet (768px+) | 12px | 32x32px | 112x46px |
| Desktop (1024px+) | 12px | 32x32px | 139x57px |
| XL (1280px+) | 12px | 32x32px | 203x83px |

### Results Component
| Screen Size | Font Size | Padding |
|------------|-----------|---------|
| Mobile (390px) | 24px | 5rem (top/bottom) |
| Tablet (768px+) | 32px | 5rem (top/bottom) |
| Desktop (1024px+) | 32px | 5rem (top/bottom) |

## Testing Responsive Design

### Browser DevTools
1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M)
3. Select device or enter custom dimensions:
   - Mobile: 390px width
   - Tablet: 768px width
   - Desktop: 1024px width
   - XL Desktop: 1280px width

### Common Device Sizes
```
iPhone SE          : 375px
iPhone 12/13/14    : 390px
iPhone 14 Pro Max  : 430px
iPad               : 768px
iPad Pro           : 1024px
Laptop             : 1366px
Desktop            : 1920px
4K Display         : 2560px
```

## Mobile-First Approach

All styles are written with a **mobile-first** approach:
1. Base styles target mobile devices (390px)
2. Media queries progressively enhance for larger screens
3. Content is readable and functional at all sizes

## Color Palette

```css
--primary-bg: #1a1a1a;           /* Dark background */
--primary-accent: #d29d79;       /* Gold/copper accent */
--text-white: #ffffff;           /* White text */
--text-black: #1e1e1e;           /* Dark text */
--bg-dark-brown: #191710;        /* Dark brown sections */
```

## Typography Scale

### Headings
```
Mobile   → Tablet  → Desktop
30px     → 54px    → 54px     (Hero H1)
32px     → 44px    → 52px     (Service Titles)
24px     → 24px    → 24px     (Section Titles)
```

### Body Text
```
Mobile   → Tablet  → Desktop
16px     → 16px    → 18px     (Hero Body)
16px     → 18px    → 18px     (Service Description)
14px     → 18px    → 18px     (Form Inputs)
```

### Small Text
```
Mobile   → Tablet  → Desktop
12px     → 12px    → 12px     (Checkbox Labels)
10px     → 10px    → 10px     (Client Name)
8px      → 12px    → 12px     (Footer Text)
```

## Quick Reference Commands

### View CSS file for a component
```bash
# Example: View Hero CSS
cat src/components/Hero.css

# Example: View all component CSS
cat src/components/*.css
```

### Search for a specific breakpoint
```bash
# Find all 768px breakpoints
grep -r "768px" src/components/*.css

# Find all 1024px breakpoints
grep -r "1024px" src/components/*.css
```

## Best Practices

1. **Test at each breakpoint** - Don't assume styles work across all sizes
2. **Use relative units when possible** - rem, em, % for better scaling
3. **Consider touch targets** - Minimum 44x44px for mobile interactions
4. **Optimize images** - Different sizes for different screen resolutions
5. **Performance** - Lazy load images and videos on mobile
6. **Content priority** - Most important content first on mobile

## Troubleshooting

### Styles not applying?
1. Check CSS file is imported in component
2. Verify class names match exactly (case-sensitive)
3. Check for conflicting Tailwind classes
4. Inspect element in browser DevTools

### Breakpoint not working?
1. Verify min-width value is correct
2. Check for syntax errors in media query
3. Ensure previous styles don't override
4. Test in actual device or accurate emulation

### Layout breaking at specific size?
1. Use browser DevTools responsive mode
2. Drag viewport slowly to find exact breaking point
3. Add intermediate breakpoint if needed
4. Check for hardcoded widths that don't scale

