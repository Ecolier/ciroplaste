import { useContext } from "react";
import ThemeContext from "../../contexts/theme-context";
import IconButton from "../../components/icon-button";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <IconButton onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <span className="material-symbols-rounded dark:inline-block hidden">
        light_mode
      </span>
      <span className="material-symbols-rounded dark:hidden inline-block">
        dark_mode
      </span>
    </IconButton>
  );
}

export default ThemeButton;
