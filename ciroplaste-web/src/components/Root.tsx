import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeContext from "../contexts/theme-context";
import { useEffect, useState } from "react";

let lastTheme: string;

function Root() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(lastTheme);
    root.classList.add(theme);
    lastTheme = theme;
  }, [theme]);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Navbar />
      <Outlet />
    </ThemeContext.Provider>
  )
}

export default Root;
