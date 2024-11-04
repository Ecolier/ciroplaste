import DrawerButton from "./drawer-button";
import HeaderButton from "./header-button";
import useHeader from "./header-context";
import HeaderSection from "./header-section";
import ThemeButton from "./theme-button";
import { Link } from "react-router-dom";

function Header() {
  const { transparent } = useHeader();
  return (
    <>
      <header
        className={`${transparent ? `` : `bg-chalk-50/90 dark:bg-chalk-950/90 backdrop-blur-lg`} fixed z-20 flex w-full flex-col justify-between`}
      >
        <div className="relative flex h-16 w-full">
          <HeaderSection>
            <DrawerButton />
            <Link to={"/"}>
              <HeaderButton>
                <span className="font-symbols">&#xe900;</span>
              </HeaderButton>
            </Link>
          </HeaderSection>
          <HeaderSection justify="end">
            <ThemeButton />
          </HeaderSection>
        </div>
      </header>
    </>
  );
}

export default Header;
