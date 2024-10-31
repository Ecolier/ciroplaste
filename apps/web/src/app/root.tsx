import { Outlet } from "react-router-dom";
import Navbar from "../features/header/header";
import { Suspense } from "react";
import Footer from "../features/footer/footer";
import DrawerProvider from "../features/drawer/drawer-provider";
import ThemeProvider from "../providers/theme-provider";

function Root() {
  return (
    <ThemeProvider>
      <DrawerProvider>
        <Navbar />
        <div className="flex grow justify-center flex-col">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </DrawerProvider>
    </ThemeProvider>
  );
}

export default Root;
