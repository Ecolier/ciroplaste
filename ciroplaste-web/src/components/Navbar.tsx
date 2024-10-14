import ThemeToggleBtn from "./ThemeToggleBtn";

function Navbar() {
  return (
    <nav className="top-0 bg-white dark:bg-slate-950 border-gray-200 fixed inset-x-0">
      <div className="max-w-screen-xl p-2.5 flex flex-wrap items-center justify-between mx-auto ">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ciroplaste
          </span>
        </a>
        <div className="flex items-center gap-4">
          <ThemeToggleBtn />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
