import { useEffect, useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.theme : 'dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }

    if (localStorage.theme == 'undefined') {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;

      if (isDarkMode) return setTheme('dark');
      if (isLightMode) return setTheme('light');

      const now = new Date();
      const hour = now.getHours();

      if (hour < 6 || hour >= 18) {
        setTheme('dark');
      } else {
        setTheme('light');
      }

      return;
    }
  }, [colorTheme, theme]);

  return [colorTheme, setTheme] as const;
}

export default useDarkMode;
