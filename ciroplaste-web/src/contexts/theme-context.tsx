import { createContext } from "react";

interface IThemeContext {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<IThemeContext>({theme: 'dark', setTheme: () => {}});
export default ThemeContext;