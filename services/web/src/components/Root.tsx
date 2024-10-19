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
      <div className="flex grow justify-center flex-col">
        <Outlet />
        {/* <div className="mt-32 flex flex-col items-center w-full mx-4">
          <footer>
            <section>
              <div>
                Ciroplaste is the personal Portfolio of Evan Gruère. Feel free to get in touch or hire me !
              </div>
              <ul>
                <li>socials</li>
                <li>Instagram</li>
                <li>Telegram</li>
              </ul>
              <ul>
                <li>About</li>
                <li>About me</li>
                <li>Contact</li>
              </ul>
            </section>
          </footer>
        </div> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default Root;
