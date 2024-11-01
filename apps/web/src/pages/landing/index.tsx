import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DrawerProvider from "../../features/drawer/drawer-provider";
import HeaderProvider from "../../features/header/header-provider";
import Header from "../../features/header/header";

function Landing() {
  const { t } = useTranslation();
  return (
    <DrawerProvider>
      <HeaderProvider transparent={true}>
        <Header />
        <div className="min-h-dvh relative w-full flex flex-col justify-center z-10">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold mb-4 text-chalk-50 font-serif">
              {t("Purpose of Ciroplaste")}
            </span>
            <span className="mb-9 text-chalk-50 max-w-sm text-center">
              {t("Reason for this website")}
            </span>
            <Link
              to={"/explore"}
              role="button"
              className="text-chalk-50 max-w-sm text-center bg-iris-600 w-full py-4"
            >
              EXPLORE
            </Link>
          </div>
          <video
            preload="auto"
            autoPlay
            playsInline
            muted
            loop
            src="landing.mp4"
            className="fixed object-cover h-full w-full bg-chalk-950 -z-10"
          />
        </div>
      </HeaderProvider>
    </DrawerProvider>
  );
}

export default Landing;
