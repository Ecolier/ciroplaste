import { createContext } from "react";

interface ThemeContextProps {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextProps>({theme: 'dark', setTheme: () => {}});
export default ThemeContext;
