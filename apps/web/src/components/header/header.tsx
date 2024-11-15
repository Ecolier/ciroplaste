import Link from "next/link";
import DrawerButton from "./drawer-button";
import HeaderButton from "./header-button";
import HeaderSection from "./header-section";
import ThemeButton from "./theme-button";

function Header({ transparent = false }) {
  return (
    <>
      <header
        className={`${
          transparent
            ? ``
            : `bg-chalk-50/90 dark:bg-chalk-950/90 backdrop-blur-lg`
        } fixed z-20 flex w-full flex-col justify-between md:hidden`}
      >
        <div className="relative flex h-16 w-full">
          <HeaderSection>
            <DrawerButton transparent={transparent} />
            <Link href={"/"}>
              <HeaderButton transparent={transparent}>
                <span className="font-symbols">&#xe900;</span>
              </HeaderButton>
            </Link>
          </HeaderSection>
          <HeaderSection justify="end">
            <ThemeButton transparent={transparent} />
          </HeaderSection>
        </div>
      </header>
    </>
  );
}

export default Header;
