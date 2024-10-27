import { PropsWithChildren, useEffect, useState } from "react";
import ThemeContext from "../contexts/theme-context";

let lastTheme: string;

function ThemeProvider({ children }: PropsWithChildren) {
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
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
