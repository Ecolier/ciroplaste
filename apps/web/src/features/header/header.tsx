import DrawerButton from "./drawer-button";
import HeaderButton from "./header-button";
import HeaderSection from "./header-section";
import ThemeButton from "./theme-button";
import { Link } from "react-router-dom";

type HeaderProps = {
  transparent: boolean;
  fullscreen: boolean;
};

function Header({ transparent = false, fullscreen = false }: HeaderProps) {
  return (
    <>
      <header
        className={`${transparent ? `` : `bg-chalk-50 dark:bg-chalk-950 before:content-[''] before:absolute before:h-[1px] before:left-6 before:right-6 before:bottom-0 before:bg-chalk-100 dark:before:bg-chalk-900`} z-20  fixed flex flex-col justify-between w-full`}
      >
        <div className="flex relative h-16 w-full">
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
