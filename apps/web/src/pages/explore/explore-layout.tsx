import { Outlet } from "react-router-dom";
import Header from "../../features/header/header";
import Footer from "../../features/footer/footer";
import { Suspense } from "react";

function ExploreLayout() {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default ExploreLayout;
