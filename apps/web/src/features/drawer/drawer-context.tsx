import {
  createContext,
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
} from "react";

interface DrawerContextProps {
  isActive: boolean;
  toggle: Dispatch<SetStateAction<void>>;
  containerRef: RefObject<HTMLDivElement>;
}

export const DrawerContext = createContext<DrawerContextProps>({
  isActive: false,
  toggle: () => {},
  containerRef: createRef<HTMLDivElement>(),
});

const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer() must be called within a DrawerProvider");
  }
  return context;
};

export default useDrawer;
