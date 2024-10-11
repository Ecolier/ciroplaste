import { useEffect, useState } from 'react';
import './ThemeToggleBtn.css';

function ThemeToggleBtn() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({matches}) => {
        setIsDarkTheme(matches ? true : false);
      });
  });
  return (
    <input className="theme-toggle-btn" type="checkbox" id="toggle-light-theme"
      checked={!isDarkTheme} onChange={() => setIsDarkTheme(!isDarkTheme)} />
  );
}

export default ThemeToggleBtn;
