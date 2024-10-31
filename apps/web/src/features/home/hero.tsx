import { useTranslation } from "react-i18next";
import HeroMask from "./hero-mask";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="h-[calc(100dvh - 72px)] min-h-[320px] mb-16 relative flex flex-col m-4">
      <span className="text-8xl font-bold mb-9 text-chalk-900 dark:text-chalk-100 font-serif">
        {t("Purpose of Ciroplaste")}
      </span>
      <HeroMask />
    </div>
  );
}

export default Hero;
