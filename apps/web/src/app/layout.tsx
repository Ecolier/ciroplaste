import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../features/footer/footer";
import DrawerProvider from "../features/drawer/drawer-provider";
import FooterProvider from "../features/footer/footer-provider";
import HeaderProvider from "../features/header/header-provider";
import Header from "../features/header/header";

function Layout() {
  return (
    <DrawerProvider>
      <HeaderProvider>
        <Header />
        <FooterProvider>
          <Suspense>
            <Outlet />
          </Suspense>
          <Footer />
        </FooterProvider>
      </HeaderProvider>
    </DrawerProvider>
  );
}

export default Layout;
