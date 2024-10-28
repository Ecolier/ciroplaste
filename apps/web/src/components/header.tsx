import IconButton from "./icon-button";
import NavbarSection from "./header-section";
import ThemeButton from "./theme-button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="z-10 backdrop-blur-3xl bg-white/75 dark:bg-zinc-950/75 fixed flex flex-col justify-between w-full">
        <div className="flex relative h-16 w-full">
          <NavbarSection>
            <IconButton>
              <span className="material-symbols-rounded">menu</span>
            </IconButton>
            <Link to={"/"}>
              <IconButton>
                <span className="font-symbols">
                  &#xe900;
                </span>
              </IconButton>
            </Link>
          </NavbarSection>
          <NavbarSection justify="end">
            <ThemeButton />
          </NavbarSection>
        </div>
      </header>
    </>
  );
}

export default Navbar;
