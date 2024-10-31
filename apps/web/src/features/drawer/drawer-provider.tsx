import { PropsWithChildren, useMemo, useState } from "react";
import DrawerContext from "./drawer-context";
import Drawer from "./drawer";

function DrawerProvider({ children }: PropsWithChildren) {
  const [isActive, setIsActive] = useState(false);
  const active = useMemo(() => isActive, [isActive])
  return (
    <DrawerContext.Provider
      value={{ isActive: active, toggle: () => setIsActive(!active) }}
    >
      <Drawer isActive={active} />
      <div className="flex flex-col h-dvh overflow-y-auto">
        {children}
      </div>
    </DrawerContext.Provider>
  );
}

export default DrawerProvider;
