import HeaderButton from "./header-button";
import useTheme from "../../contexts/theme-context";

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <HeaderButton onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <span className="material-symbols-rounded hidden dark:inline-block">
        light_mode
      </span>
      <span className="material-symbols-rounded inline-block dark:hidden">
        dark_mode
      </span>
    </HeaderButton>
  );
}

export default ThemeButton;
