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
        className={`bg-chalk-50 dark:bg-chalk-950 fixed bottom-0 top-0 z-40 w-80 shadow-md transition-transform ${isActive ? `translate-x-0` : `-translate-x-80`}`}
      >
        <nav className="mt-2">
          <DrawerButton className="mb-2 ml-3" />
          <NavigationList
            links={[
              {
                label: t("Home"),
                href: "/",
                iconElement: (
                  <span className="font-symbols text-chalk-900 dark:text-chalk-100 mr-4">
                    &#xe900;
                  </span>
                ),
              },
              {
                label: t("Explore"),
                href: "/explore",
                iconElement: (
                  <span className="material-symbols-rounded text-chalk-900 dark:text-chalk-100 mr-4">
                    explore
                  </span>
                ),
              },
              // {
              //   label: t("Our mission"),
              //   href: "/mission",
              //   iconElement: (
              //     <span className="material-symbols-rounded text-chalk-900 dark:text-chalk-100 mr-4">
              //       hive
              //     </span>
              //   ),
              // },
              // {
              //   label: t("Hire me"),
              //   href: "/together",
              //   iconElement: (
              //     <span className="material-symbols-rounded text-chalk-900 dark:text-chalk-100 mr-4">
              //       handshake
              //     </span>
              //   ),
              // },
            ]}
          ></NavigationList>
        </nav>
      </aside>
      <div
        onClick={() => toggle()}
        className={`fixed left-0 top-0 z-30 h-full w-full bg-[black]/30 transition-opacity ${isActive ? `opacity-100` : `invisible opacity-0`}`}
      ></div>
    </>
  );
}

export default Drawer;
