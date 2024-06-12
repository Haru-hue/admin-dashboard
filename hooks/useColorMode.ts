import { useEffect, useState } from "react";

type ColorMode = 'light' | 'dark';

const useColorMode = (): [ColorMode, () => void] => {
  // State to store the current color mode
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  // Effect to read the color mode from local storage or system preference
  useEffect(() => {
    const storedColorMode = localStorage.getItem('colorMode') as ColorMode;
    const systemPreference: ColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setColorMode(storedColorMode || systemPreference);
  }, []);

  // Function to toggle the color mode
  const toggleColorMode = () => {
    const newColorMode: ColorMode = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(newColorMode);
    localStorage.setItem('colorMode', newColorMode);
    document.documentElement.classList.toggle('dark', newColorMode === 'dark');
  };

  // Effect to listen for system color scheme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newColorMode: ColorMode = e.matches ? 'dark' : 'light';
      setColorMode(newColorMode);
      localStorage.setItem('colorMode', newColorMode);
      document.documentElement.classList.toggle('dark', newColorMode === 'dark');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return [colorMode, toggleColorMode];
};

export default useColorMode;