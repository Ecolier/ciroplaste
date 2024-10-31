import { createContext, Dispatch, SetStateAction } from "react";

interface DrawerContextProps {
  isActive: boolean;
  toggle: Dispatch<SetStateAction<void>>;
}

const DrawerContext = createContext<DrawerContextProps>({
  isActive: false,
  toggle: () => {}
});

export default DrawerContext;
