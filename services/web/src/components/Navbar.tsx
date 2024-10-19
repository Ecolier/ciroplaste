import IconButton from "./IconButton";
import NavbarSection from "./NavbarSection";
import ThemeButton from "./ThemeButton";

function Navbar() {
  return (
    <>
      <header className="bg-white dark:bg-zinc-950 fixed flex flex-col justify-between w-full">
        <div className="flex relative h-16 w-full">
          <NavbarSection>
          <IconButton>
            <span className="material-symbols-rounded">menu</span>
          </IconButton>
            <a
              href="/"
              className="px-2 ml-3.5 "
            >
              <span className="dark:text-zinc-200 text-zinc-800">
                Ciroplaste
              </span>
            </a>
          </NavbarSection>
          <NavbarSection justify="end">
            <ThemeButton />
          </NavbarSection>
        </div>
      </header>
      <div className="pt-16"></div>
    </>
  );
}

export default Navbar;