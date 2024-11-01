import { createContext } from "react";

interface HeaderContextProps {
  setTransparent: React.Dispatch<React.SetStateAction<boolean>>;
  setFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
  transparent: boolean;
  fullscreen: boolean;
}

const HeaderContext = createContext<HeaderContextProps>({
  setTransparent: () => {},
  setFullscreen: () => {},
  transparent: false,
  fullscreen: false,
});

export default HeaderContext;
