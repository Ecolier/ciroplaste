"use client";

import React from "react";
import Drawer from "./drawer";

interface DrawerContextProps {
  isActive: boolean;
  toggle: React.Dispatch<React.SetStateAction<void>>;
  close: React.Dispatch<React.SetStateAction<void>>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const DrawerContext = React.createContext<DrawerContextProps>({
  isActive: false,
  toggle: () => {},
  close: () => {},
  containerRef: React.createRef<HTMLDivElement>(),
});

function DrawerProvider({ children }: React.PropsWithChildren) {
  const [isActive, setIsActive] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  return (
    <DrawerContext.Provider
      value={{
        isActive,
        toggle: () => setIsActive(!isActive),
        close: () => setIsActive(false),
        containerRef,
      }}
    >
      <Drawer isActive={isActive} />
      <div
        ref={containerRef}
        className="flex h-dvh md:pl-20 grow flex-col overflow-y-auto"
      >
        {children}
      </div>
    </DrawerContext.Provider>
  );
}

export default DrawerProvider;
