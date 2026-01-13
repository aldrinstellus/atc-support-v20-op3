# TROUBLESHOOTING

This document captures known issues, their root causes, and solutions for the EAS V20-OP3 project.

## Table of Contents

1. [CSS Issues](#css-issues)
2. [Hydration Issues](#hydration-issues)
3. [Authentication Issues](#authentication-issues)
4. [Build Issues](#build-issues)

---

## CSS Issues

### UI Components Hidden by Overly Broad CSS Selectors

**Date Fixed:** 2025-01-13
**Severity:** High
**Affected Components:** ModeSwitcher, ThemeToggle, any button with `aria-label`

#### Symptoms
- ModeSwitcher buttons (Government, Project, ATC) not visible in sidebar
- ThemeToggle not visible
- Buttons exist in DOM but have `display: none`, `visibility: hidden`, `opacity: 0`
- Components work on some deployments but not others

#### Root Cause
Overly broad CSS selectors in `src/app/globals.css` intended to hide Next.js dev tools were matching legitimate app components.

**Problematic selectors that were removed:**
```css
/* These selectors were TOO BROAD - DO NOT USE */
div[style*="position: fixed"][style*="bottom"][style*="left"] > button,
body > div:last-child button[aria-label],
body > div[style*="z-index"]:last-of-type
```

The selector `body > div:last-child button[aria-label]` matched ANY button with an aria-label inside the last div child of body. Since the main React app container is often the last div in body, this hid our ModeSwitcher buttons which have aria-labels like "Switch to Government mode".

#### Solution
Remove overly broad selectors. Keep only specific Next.js targeting selectors:

```css
/* SAFE - These are specific to Next.js dev tools */
#__next-build-watcher,
nextjs-portal,
[data-nextjs-dialog-overlay],
[data-nextjs-toast],
[id^="__next-error"],
[data-nextjs-build-indicator],
[data-nextjs-static-indicator],
[data-nextjs-dev-indicator],
body > nextjs-portal,
[class*="nextjs-portal"],
[class*="__next-build"],
button[class*="nextjs"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
```

#### Prevention Guidelines

When hiding dev tools or overlays via CSS:

1. **DO** use data attributes: `[data-nextjs-*]`, `[data-vercel-*]`
2. **DO** use specific class patterns: `[class*="nextjs"]`, `[class*="vercel"]`
3. **DO** use specific IDs: `#__next-build-watcher`, `#__vercel_dev_tools`
4. **DON'T** use broad selectors like `body > div:last-child`
5. **DON'T** target generic attributes like `button[aria-label]` without additional specificity
6. **DON'T** target elements by inline style patterns without additional specificity

#### Debugging Steps
```javascript
// In browser console, check computed styles
const btn = document.querySelector('button[aria-label*="Government"]');
const styles = window.getComputedStyle(btn);
console.log({
  display: styles.display,
  visibility: styles.visibility,
  opacity: styles.opacity
});

// Check if element is in "last div of body"
const lastDiv = document.body.querySelector(':scope > div:last-child');
console.log('Button in last div:', lastDiv.contains(btn));
```

---

## Hydration Issues

### React Hydration Mismatch Errors

**Date Fixed:** 2025-01-13
**Severity:** Medium
**Affected Components:** SplitViewWorkspace, ChatWithDrawer, animated-background, layout theme

#### Symptoms
- Console errors: "Hydration failed because the initial UI does not match what was rendered on the server"
- UI flickers on page load
- Components render differently on server vs client
- Theme flash (wrong theme shown briefly on load)

#### Root Causes

1. **localStorage access in useState initializer** - Server has no localStorage
2. **Missing mount guards** - Client-only code running during SSR
3. **Theme class mismatch** - Server renders one theme, client hydrates with another

#### Solutions

**Pattern 1: Deferred localStorage Read**
```tsx
// BAD - causes hydration mismatch
const [value, setValue] = useState(() => {
  return localStorage.getItem('key') || 'default';
});

// GOOD - defer to useEffect
const [value, setValue] = useState('default');
const [isHydrated, setIsHydrated] = useState(false);

useEffect(() => {
  const saved = localStorage.getItem('key');
  if (saved) setValue(saved);
  setIsHydrated(true);
}, []);

// Only save after hydration
useEffect(() => {
  if (!isHydrated) return;
  localStorage.setItem('key', value);
}, [value, isHydrated]);
```

**Pattern 2: Mount Guard for Client-Only Code**
```tsx
const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
  setIsMounted(true);
}, []);

useEffect(() => {
  if (!isMounted) return;
  // Client-only code here (timers, animations, etc.)
  const interval = setInterval(() => {...}, 1000);
  return () => clearInterval(interval);
}, [isMounted]);
```

**Pattern 3: Theme Initialization Script**
```tsx
// In layout.tsx - runs BEFORE React hydrates
const themeInitScript = `
  (function() {
    try {
      var theme = localStorage.getItem('sana-theme');
      document.documentElement.className = theme || 'dark';
    } catch (e) {
      document.documentElement.className = 'dark';
    }
  })();
`;

<html lang="en" suppressHydrationWarning>
  <head>
    <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
  </head>
  ...
</html>
```

#### Files Fixed (V20-OP3)
- `src/components/workspace/SplitViewWorkspace.tsx` - localStorage hydration
- `src/components/chat/ChatWithDrawer.tsx` - localStorage hydration
- `src/components/animated-background.tsx` - mount guard for animations
- `src/app/layout.tsx` - theme init script

---

## Authentication Issues

### AuthError 500 on Demo Pages

**Date Fixed:** 2025-01-13
**Severity:** Medium
**Affected:** Demo pages on Vercel deployment

#### Symptoms
- 500 errors on `/api/auth/session` endpoint
- Console shows `AuthError: MissingSecret`
- Works locally but fails on Vercel

#### Root Cause
NextAuth v5 requires `AUTH_SECRET` environment variable. On Vercel without this configured, session checks fail.

#### Solution
Add fallback secret generation in `src/lib/auth.ts`:

```typescript
const getAuthSecret = () => {
  if (process.env.AUTH_SECRET) return process.env.AUTH_SECRET;
  if (process.env.NODE_ENV === 'development') {
    console.warn('[Auth] AUTH_SECRET not set, using fallback for development');
    return 'dev-fallback-secret-do-not-use-in-production';
  }
  console.warn('[Auth] AUTH_SECRET not set in production - auth features disabled');
  return 'fallback-secret-auth-disabled';
};

// In authConfig
export const authConfig: NextAuthConfig = {
  // ...
  secret: getAuthSecret(),
  trustHost: true, // Required for Vercel deployments
};
```

Also configure SessionProvider to reduce unnecessary session fetches:
```tsx
<NextAuthSessionProvider
  refetchOnWindowFocus={false}
  refetchWhenOffline={false}
>
  {children}
</NextAuthSessionProvider>
```

---

## Build Issues

### Port Already in Use

**Symptom:** `Error: listen EADDRINUSE: address already in use :::3030`

**Solution:**
```bash
# Find and kill process on port 3030
lsof -ti:3030 | xargs kill -9

# Then start dev server
npm run dev
```

### Next.js Image Aspect Ratio Warning

**Symptom:** Warning about image with width/height causing layout shift

**Solution:** Use `fill` prop with sized container:
```tsx
// BAD
<Image src="/logo.png" width={160} height={40} alt="Logo" />

// GOOD
<div className="relative h-10 w-40">
  <Image
    src="/logo.png"
    alt="Logo"
    fill
    className="object-contain"
    sizes="160px"
    priority
  />
</div>
```

---

## Quick Reference: Debugging Commands

```bash
# Check what's running on a port
lsof -i :3030

# Kill process on port
lsof -ti:3030 | xargs kill -9

# Check git changes
git status
git diff

# Type check without building
npm run type-check

# Check Vercel deployment logs
vercel logs
```

## Browser DevTools Debugging

```javascript
// Check if element is hidden by CSS
const el = document.querySelector('your-selector');
const styles = window.getComputedStyle(el);
console.log({
  display: styles.display,
  visibility: styles.visibility,
  opacity: styles.opacity,
  height: styles.height
});

// Find what CSS rule is hiding element
// In Chrome DevTools: Elements panel > Computed tab > filter for "display"
```

---

*Last Updated: 2025-01-13*
