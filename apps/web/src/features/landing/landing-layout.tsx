import Header from "../../components/header/header";
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
