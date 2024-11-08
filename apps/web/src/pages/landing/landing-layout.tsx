import Header from "../../features/header/header";
import Landing from "./landing";

function LandingLayout() {
  return (
    <>
      <Header transparent={true} />
      <Landing />
    </>
  );
}

export default LandingLayout;
