import { createContext, Dispatch, SetStateAction } from "react";

interface FooterContextProps {
  isFloating: boolean;
  setFloating: Dispatch<SetStateAction<boolean>>;
}

const FooterContext = createContext<FooterContextProps>({
  isFloating: false,
  setFloating: () => {}
});

export default FooterContext;
