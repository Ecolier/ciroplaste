import Marquee from "./Marquee";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <div className="h-[50vh] min-h-[320px] mt-[72px] mb-9 mx-2 p-8 py-24 relative overflow-hidden flex flex-col justify-center items-center rounded-3xl">
      <span className="text-7xl font-bold mb-9 text-orange-950 dark:text-orange-50 font-serif">
        {t("Ciroplaste")}
      </span>
      <span className="text-orange-950 dark:text-orange-100 text-center max-w-sm">
        {t("Purpose of Ciroplaste")}
      </span>
      <div
        role="button"
        className="px-16 bg-orange-200 dark:bg-orange-200 text-orange-900 py-4 rounded-3xl mt-4"
      >
        {t("Learn more")}
      </div>
      <Marquee>
        <li>
          <span>Mais, aussi agiles que ces ciroplastes </span>
          <span>qui font un buste devant nous en cinq minutes, </span>
        </li>
        <li>
          <span>qui font un buste devant nous en cinq minutes, </span>
          <span>les quelques mots que l'inconnue va nous dire </span>
        </li>
        <li>
          <span>les quelques mots que l'inconnue va nous dire </span>
          <span>préciseront cette forme et lui donneront </span>
        </li>
        <li>
          <span>préciseront cette forme et lui donneront </span>
          <span>quelque chose de définitif.</span>
        </li>
      </Marquee>
    </div>
  );
}

export default Hero;
