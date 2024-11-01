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
        className={`fixed w-80 top-0 bottom-0 bg-chalk-100 dark:bg-chalk-900 rounded-r-2xl z-30 shadow-md transition-transform ${isActive ? `translate-x-0` : `-translate-x-80`}`}
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
                  label: t("Explore"),
                  href: "/explore",
                  iconElement: (
                    <span className="material-symbols-rounded text-chalk-800 dark:text-chalk-300 mr-4">
                      explore
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
        className={`fixed top-0 left-0 w-full h-full bg-chalk-950/50 z-20 transition-opacity ${isActive ? `opacity-100` : `opacity-0 invisible`}`}
      ></div>
    </>
  );
}

export default Drawer;
