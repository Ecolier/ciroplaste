import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface HeaderContextProps {
  transparent: boolean;
  setTransparent: Dispatch<SetStateAction<boolean>>;
}

export const HeaderContext = createContext<HeaderContextProps>({
  transparent: false,
  setTransparent: () => {},
});

const useHeader = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeader() must be called within a HeaderProvider");
  }
  return context;
};

export default useHeader;
