import { PropsWithChildren, useState } from "react";
import DrawerContext from "./drawer-context";
import Drawer from "./drawer";

function DrawerProvider({ children }: PropsWithChildren) {
  const [isActive, setIsActive] = useState(false);
  return (
    <DrawerContext.Provider
      value={{ state: "Closed", toggle: () => setIsActive(!isActive) }}
    >
      <Drawer isActive={isActive} />
      <div className="flex flex-col h-screen overflow-y-auto">
        {children}
      </div>
    </DrawerContext.Provider>
  );
}

export default DrawerProvider;
