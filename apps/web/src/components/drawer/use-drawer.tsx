import React from "react";
import { DrawerContext } from "./drawer-provider";

const useDrawer = () => {
  const context = React.useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer() must be called within a DrawerProvider");
  }
  return context;
};

export default useDrawer;
