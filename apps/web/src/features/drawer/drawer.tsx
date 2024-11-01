import { useContext } from "react";
import DrawerContext from "./drawer-context";
import { motion, AnimatePresence } from "framer-motion";
import DrawerButton from "../header/drawer-button";
import NavigationList from "./navigation-list";
import { useTranslation } from "react-i18next";

type DrawerProps = {
  isActive: boolean;
};

function Drawer({ isActive }: DrawerProps) {
  const { toggle } = useContext(DrawerContext);
  const { t } = useTranslation();
  return (
    <>
      <aside
        className={`-translate-x-80 fixed w-80 top-0 bottom-0 bg-chalk-100 dark:bg-chalk-900 rounded-r-2xl z-30 shadow-md will-change-transform ${isActive ? `animate-slideIn translate-x-0` : `animate-slideOut -translate-x-80`}`}
      >
        <nav className="mt-2">
          <DrawerButton className="ml-3 mb-2" />
          <div className="mx-2">
            <NavigationList
              links={[
                {
                  label: t("Home"),
                  href: "/",
                  iconElement: (
                    <span className="font-symbols text-chalk-800 dark:text-chalk-300 mr-4">
                      &#xe900;
                    </span>
                  ),
                },
                {
                  label: t("Our mission"),
                  href: "/mission",
                  iconElement: (
                    <span className="material-symbols-rounded text-chalk-800 dark:text-chalk-300 mr-4">
                      hive
                    </span>
                  ),
                },
                {
                  label: t("Hire me"),
                  href: "/hire",
                  iconElement: (
                    <span className="material-symbols-rounded text-chalk-800 dark:text-chalk-300 mr-4">
                      handshake
                    </span>
                  ),
                },
              ]}
            ></NavigationList>
          </div>
        </nav>
      </aside>
      <div
        onClick={() => toggle()}
        className={`fixed top-0 left-0 w-full h-full bg-chalk-950/50 z-20 ${isActive ? `animate-fadeIn opacity-100` : `animate-fadeOut opacity-0 hidden`}`}
      ></div>
    </>
  );
}

export default Drawer;
