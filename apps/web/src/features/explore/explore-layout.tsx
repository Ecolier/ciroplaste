import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
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
