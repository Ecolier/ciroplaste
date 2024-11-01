import {
  createContext,
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
} from "react";

interface DrawerContextProps {
  isActive: boolean;
  toggle: Dispatch<SetStateAction<void>>;
  containerRef: RefObject<HTMLDivElement>;
}

const DrawerContext = createContext<DrawerContextProps>({
  isActive: false,
  toggle: () => {},
  containerRef: createRef<HTMLDivElement>(),
});

export default DrawerContext;
