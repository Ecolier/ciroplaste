import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import LandingBackground from "./landing-background";
import React from "react";
import { Link } from "@/i18n/routing";
import Header from "@/components/header/header";

export default function Home({ params }) {
  const { locale } = React.use(params);
  setRequestLocale(locale);
  const t = useTranslations();
  return (
    <>
      <Header transparent={true} />
      <div className="relative z-10 flex min-h-dvh w-full flex-col justify-center">
        <div className="mx-auto flex max-w-lg flex-col items-center px-4">
          <span className="text-chalk-50 mb-4 font-serif text-8xl font-bold">
            {t("Purpose of Ciroplaste")}
          </span>
          <span className="text-chalk-50 mb-8">
            {t("Reason for this website")}
          </span>
          <Link
            href={"/explore"}
            role="button"
            className="text-chalk-50 bg-iris-600 w-full py-4 text-center"
          >
            {t("Explore")}
          </Link>
        </div>
        <LandingBackground />
      </div>
    </>
  );
}
