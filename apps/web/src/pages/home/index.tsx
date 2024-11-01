import { useContext } from "react";
import { useTranslation } from "react-i18next";
import HeaderContext from "../../features/header/header-context";
import HeaderSpacer from "../../features/header/header-spacer";
import { Link } from "react-router-dom";

function Home() {
  const { setFullscreen, setTransparent } = useContext(HeaderContext);
  setFullscreen(true);
  setTransparent(true);

  const { t } = useTranslation();
  return (
    <div className="min-h-[320px] h-dvh relative flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold mb-4 text-chalk-50 font-serif">
          {t("Purpose of Ciroplaste")}
        </span>
        <span className="mb-9 text-chalk-50 max-w-sm text-center">
          {t("Reason for this website")}
        </span>
        <Link to={'/explore'} role="button" className="text-chalk-50 max-w-sm text-center bg-iris-600 w-full py-4">
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
        className="object-cover h-full w-full absolute bg-chalk-950 -z-10"
      />
    </div>
  );
}

export default Home;
