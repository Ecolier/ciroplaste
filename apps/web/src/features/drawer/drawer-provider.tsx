import { PropsWithChildren, useEffect, useState } from "react";
import DrawerContext from "./drawer-context";
import Drawer from "./drawer";

function DrawerProvider({ children }: PropsWithChildren) {
  const [isActive, setIsActive] = useState(false);
  return (
    <DrawerContext.Provider
      value={{ isActive, toggle: () => setIsActive(!isActive) }}
    >
      <Drawer isActive={isActive} />
      <div className="flex flex-col h-dvh overflow-y-auto">
        {children}
      </div>
    </DrawerContext.Provider>
  );
}

export default DrawerProvider;
