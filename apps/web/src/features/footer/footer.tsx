import { useTranslation } from "react-i18next";
import Squiggle from "../../shapes/squiggle";
import FooterColumn from "./footer-column";

const instagramUrl = import.meta.env.VITE_INSTAGRAM_LINK;
const githubUrl = import.meta.env.VITE_GITHUB_LINK;

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="mx-4 mt-32 flex grow flex-col justify-center">
      <Squiggle />
      <footer className="grid grid-cols-2 px-6 py-16">
        <div className="col-span-3">
          <span className="font-symbols text-chalk-800 dark:text-chalk-300 text-5xl">
            &#xe900;
          </span>
          <p className="text-chalk-700 dark:text-chalk-400 my-3 text-sm">
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
        <FooterColumn
          title={t("About")}
          links={[
            //{ label: t("Our mission"), url: '/mission' },
            { label: t("Hire me"), url: "/hire" },
          ]}
        />
      </footer>
    </div>
  );
}

export default Footer;
