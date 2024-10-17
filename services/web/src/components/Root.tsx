import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeContext from "../contexts/theme-context";
import { useEffect, useState } from "react";

let lastTheme: string;

function Root() {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme ? savedTheme : "dark");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    root.classList.remove(lastTheme);
    root.classList.add(theme);
    lastTheme = theme;
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <div className="flex grow justify-center w-full">
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default Root;
