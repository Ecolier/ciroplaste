import { Outlet } from "react-router-dom";
import Navbar from "../components/header";

function Root() {
  return (
    <>
      <Navbar />
      <div className="flex grow justify-center flex-col">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
