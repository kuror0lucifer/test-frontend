import { useState, useEffect } from 'react';
import ThemeType from '../types/theme.type';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';

    setTheme(savedTheme || systemTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme: ThemeType = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};
