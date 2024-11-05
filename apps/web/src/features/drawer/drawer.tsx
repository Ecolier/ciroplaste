import DrawerButton from "../header/drawer-button";
import NavigationList from "./navigation-list";
import { useTranslation } from "react-i18next";
import useDrawer from "./drawer-context";
import { useEffect, useRef, useState } from "react";
import ThemeButton from "../header/theme-button";

type DrawerProps = {
  isActive: boolean;
};

function Drawer({ isActive }: DrawerProps) {
  const { toggle } = useDrawer();
  const { t } = useTranslation();
  const [displayRail, setDisplayRail] = useState(false);

  useEffect(() => {
    setDisplayRail(
      window.matchMedia("(min-width: 768px)").matches ? true : false,
    );
  });

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", ({ matches }) => {
        setDisplayRail(matches ? true : false);
      });
  }, [displayRail]);

  const isReset = useRef(true);
  useEffect(() => {
    isReset.current = displayRail;
  }, [displayRail]);

  return (
    <>
      {displayRail ? (
        <>
          <aside
            className={`bg-chalk-100 dark:bg-chalk-900 fixed bottom-0 top-0 z-40 flex`}
          >
            <nav className="my-2 flex flex-col grow">
              <div className="flex-grow flex flex-col">
                <NavigationList
                  links={[
                    {
                      label: t("Home"),
                      href: "/",
                      iconElement: (
                        <span className="font-symbols text-md text-chalk-900 dark:text-chalk-100 max-md:mr-4 md:mb-2">
                          &#xe900;
                        </span>
                      ),
                    },
                    {
                      label: t("Explore"),
                      href: "/explore",
                      iconElement: (
                        <span className="material-symbols-rounded text-md text-chalk-900 dark:text-chalk-100 max-md:mr-4 md:mb-2">
                          explore
                        </span>
                      ),
                    },
                  ]}
                ></NavigationList>
              </div>
              <div className="p-4 flex justify-center">
                <ThemeButton />
              </div>
            </nav>
          </aside>
        </>
      ) : (
        <>
          <aside
            className={`bg-chalk-100 dark:bg-chalk-900 fixed bottom-0 top-0 z-40 w-80 -translate-x-80 shadow-md ${isReset.current ? `transition-none` : `transition-transform`} ${isActive ? `translate-x-0` : `-translate-x-80`}`}
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
      )}
    </>
  );
}

export default Drawer;
