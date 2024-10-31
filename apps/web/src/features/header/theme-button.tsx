import { useContext } from "react";
import ThemeContext from "../../contexts/theme-context";
import HeaderButton from "./header-button";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <HeaderButton onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <span className="material-symbols-rounded dark:inline-block hidden">
        light_mode
      </span>
      <span className="material-symbols-rounded dark:hidden inline-block">
        dark_mode
      </span>
    </HeaderButton>
  );
}

export default ThemeButton;
