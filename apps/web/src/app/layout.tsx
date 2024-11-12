import { Outlet } from "react-router-dom";
import DrawerProvider from "../components/drawer/drawer-provider";
import HeaderProvider from "../components/header/header-provider";

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
