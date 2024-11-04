import DrawerButton from "../header/drawer-button";
import NavigationList from "./navigation-list";
import { useTranslation } from "react-i18next";
import useDrawer from "./drawer-context";

type DrawerProps = {
  isActive: boolean;
};

function Drawer({ isActive }: DrawerProps) {
  const { toggle } = useDrawer();
  const { t } = useTranslation();
  return (
    <>
      <aside
        className={`bg-chalk-100 dark:bg-chalk-900 fixed bottom-0 top-0 z-40 -translate-x-0 shadow-md md:shadow-none max-md:w-80 max-md:transition-transform md:w-24 ${isActive ? `max-md:translate-x-0` : `max-md:-translate-x-80`}`}
      >
        <nav className="mt-2">
          <DrawerButton className="mb-2 ml-3 md:invisible" />
          <NavigationList
            links={[
              {
                label: t("Home"),
                href: "/",
                iconElement: (
                  <span className="font-symbols text-chalk-900 dark:text-chalk-100 max-md:mr-4 md:mb-2">
                    &#xe900;
                  </span>
                ),
              },
              {
                label: t("Explore"),
                href: "/explore",
                iconElement: (
                  <span className="material-symbols-rounded text-chalk-900 dark:text-chalk-100 max-md:mr-4 md:mb-2">
                    explore
                  </span>
                ),
              },
            ]}
          ></NavigationList>
        </nav>
      </aside>
      <div
        onClick={() => toggle()}
        className={`invisible fixed left-0 top-0 z-30 h-full w-full bg-[black]/30 transition-opacity ${isActive ? `max-md:visible max-md:opacity-100` : `max-md:invisible max-md:opacity-0`}`}
      ></div>
    </>
  );
}

export default Drawer;
