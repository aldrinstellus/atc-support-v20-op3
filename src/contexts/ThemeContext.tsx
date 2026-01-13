'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with 'dark' as default - the inline script in layout.tsx
  // will have already set the correct class on the html element before React hydrates
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Sync with actual DOM state and localStorage on mount
  useEffect(() => {
    setMounted(true);
    // Read the actual class set by the init script
    const currentClass = document.documentElement.className;
    if (currentClass === 'light' || currentClass === 'dark') {
      setThemeState(currentClass);
    } else {
      // Fallback: check localStorage
      const savedTheme = localStorage.getItem('sana-theme') as Theme | null;
      if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
        setThemeState(savedTheme);
        updateDocumentClass(savedTheme);
      }
    }
  }, []);

  const updateDocumentClass = (newTheme: Theme) => {
    const html = document.documentElement;
    html.classList.remove('dark', 'light');
    html.classList.add(newTheme);
  };

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('sana-theme', newTheme);
    updateDocumentClass(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
