import DrawerProvider from "../../features/drawer/drawer-provider";
import HeaderProvider from "../../features/header/header-provider";
import Header from "../../features/header/header";
import Landing from "./landing";

function LandingLayout() {
  return (
    <DrawerProvider>
      <HeaderProvider transparent={true}>
        <Header />
        <Landing />
      </HeaderProvider>
    </DrawerProvider>
  );
}

export default LandingLayout;
