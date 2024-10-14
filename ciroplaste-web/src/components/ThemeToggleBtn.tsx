import { useContext, useEffect, useState } from "react";
import ThemeContext from "../contexts/theme-context";

function ThemeToggleBtn() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="rounded-full flex p-2.5
        bg-slate-800 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className="material-symbols-rounded dark:inline-block hidden">light_mode</span>
      <span className="material-symbols-rounded dark:hidden inline-block">dark_mode</span>
    </button>
  );
}

export default ThemeToggleBtn;
