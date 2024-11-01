import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../features/footer/footer";
import DrawerProvider from "../features/drawer/drawer-provider";
import ThemeProvider from "../providers/theme-provider";
import HeaderProvider from "../features/header/header-provider";

function Root() {
  return (
    <ThemeProvider>
      <DrawerProvider>
        <HeaderProvider>
          <div className="flex grow justify-center flex-col">
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
          <Footer />
        </HeaderProvider>
      </DrawerProvider>
    </ThemeProvider>
  );
}

export default Root;
