import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeContext from "../contexts/theme-context";
import { useState } from "react";


function Root() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={theme}>
        <Navbar />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  )
}

export default Root;
