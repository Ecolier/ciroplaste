import { useTranslations } from "next-intl";
import Squiggle from "../squiggle";
import FooterColumn from "./footer-column";
import React from "react";

const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_LINK ?? '';
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_LINK ?? '';

function Footer() {
  const t = useTranslations();
  return (
    <div className="mx-4 mt-32 flex grow flex-col justify-center">
      <Squiggle />
      <footer className="grid grid-cols-2 px-6 py-16 lg:max-w-5xl mx-auto">
        <div className="col-span-3 sm:flex sm:items-center sm:gap-4 mb-6">
          <span className="font-symbols text-chalk-800 dark:text-chalk-300 text-5xl">
            &#xe900;
          </span>
          <p className="text-chalk-700 dark:text-chalk-400 my-3 text-sm max-w-md">
            {t("Reason for this website")}
          </p>
        </div>
        <FooterColumn
          title={t("Social")}
          links={[
            { label: "Instagram", url: instagramUrl, external: true },
            { label: "Github", url: githubUrl, external: true },
          ]}
        />
      </footer>
    </div>
  );
}

export default Footer;
