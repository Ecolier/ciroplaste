import { Outlet } from "react-router-dom";
import Navbar from "../components/header";
import { Suspense } from "react";
import Footer from "../features/footer/footer";

function Root() {
  return (
    <>
      <Navbar />
      <div className="flex grow justify-center flex-col">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default Root;
