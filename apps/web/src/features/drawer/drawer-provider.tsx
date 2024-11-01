import { createRef, PropsWithChildren, useState } from "react";
import DrawerContext from "./drawer-context";
import Drawer from "./drawer";

function DrawerProvider({ children }: PropsWithChildren) {
  const [isActive, setIsActive] = useState(false);
  const containerRef = createRef<HTMLDivElement>();
  return (
    <DrawerContext.Provider
      value={{ isActive, toggle: () => setIsActive(!isActive), containerRef }}
    >
      <Drawer isActive={isActive} />
      <div ref={containerRef} className="flex flex-col h-dvh overflow-y-auto">
        {children}
      </div>
    </DrawerContext.Provider>
  );
}

export default DrawerProvider;
