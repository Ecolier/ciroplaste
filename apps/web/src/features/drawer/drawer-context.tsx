import { createContext, Dispatch, SetStateAction } from "react";

type DrawerState = "Opened" | "Closed";

interface DrawerContextProps {
  state: DrawerState;
  toggle: Dispatch<SetStateAction<void>>;
}

const DrawerContext = createContext<DrawerContextProps>({
  state: "Closed",
  toggle: () => {}
});

export default DrawerContext;
