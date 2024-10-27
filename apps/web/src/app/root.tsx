import { Outlet } from "react-router-dom";
import Navbar from "../components/header";
import { Suspense } from "react";

function Root() {
  return (
    <>
      <Navbar />
      <div className="flex grow justify-center flex-col">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default Root;
