import HeaderButton from "./header-button";
import useTheme from "../theme-context";

function ThemeButton({transparent = false}) {
  const { theme, setTheme } = useTheme();
  return (
    <HeaderButton transparent={transparent} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
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