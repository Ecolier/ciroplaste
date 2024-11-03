import { Outlet } from "react-router-dom";
import DrawerProvider from "../features/drawer/drawer-provider";
import HeaderProvider from "../features/header/header-provider";

function Layout() {
  return (
    <DrawerProvider>
      <HeaderProvider>
        <Outlet />
      </HeaderProvider>
    </DrawerProvider>
  );
}

export default Layout;
