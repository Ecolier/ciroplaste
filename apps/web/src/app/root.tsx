import { Outlet } from "react-router-dom";
import { Suspense, useContext } from "react";
import Footer from "../features/footer/footer";
import DrawerProvider from "../features/drawer/drawer-provider";
import FooterProvider from "../features/footer/footer-provider";
import HeaderProvider from "../features/header/header-provider";
import FooterContext from "../features/footer/footer-context";

function Root() {
  return (
    <DrawerProvider>
      <HeaderProvider>
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

export default Root;
