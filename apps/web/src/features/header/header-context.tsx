import { createContext, useContext } from "react";

interface HeaderContextProps {
  transparent: boolean;
}

export const HeaderContext = createContext<HeaderContextProps>({
  transparent: false,
});

const useHeader = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeader() must be called within a HeaderProvider");
  }
  return context;
};

export default useHeader;
