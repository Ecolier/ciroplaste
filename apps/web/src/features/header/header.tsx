import DrawerButton from "./drawer-button";
import HeaderButton from "./header-button";
import NavbarSection from "./header-section";
import ThemeButton from "./theme-button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="z-10 bg-chalk-50 dark:bg-chalk-950 fixed flex flex-col justify-between w-full before:content-[''] before:absolute before:h-[1px] before:left-6 before:right-6 before:bottom-0 before:bg-chalk-100 dark:before:bg-chalk-900">
        <div className="flex relative h-16 w-full">
          <NavbarSection>
            <DrawerButton />
            <Link to={"/"}>
              <HeaderButton>
                <span className="font-symbols">&#xe900;</span>
              </HeaderButton>
            </Link>
          </NavbarSection>
          <NavbarSection justify="end">
            <ThemeButton />
          </NavbarSection>
        </div>
      </header>
      <div className="pb-[72px]"></div>
    </>
  );
}

export default Navbar;
