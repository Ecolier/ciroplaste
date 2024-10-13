import { useContext, useEffect, useState } from 'react';
import './ThemeToggleBtn.css';
import ThemeContext from '../contexts/theme-context';

function ThemeToggleBtn() {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <input className="theme-toggle-btn" type="checkbox" id="toggle-light-theme"
      checked={theme === 'light'} onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
  );
}

export default ThemeToggleBtn;
