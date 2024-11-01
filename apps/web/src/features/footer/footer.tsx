import { useTranslation } from "react-i18next";
import Squiggle from "../../shapes/squiggle";
import FooterColumn from "./footer-column";

const instagramUrl = import.meta.env.VITE_INSTAGRAM_LINK;
const githubUrl = import.meta.env.VITE_GITHUB_LINK;

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="flex grow justify-center flex-col mt-32 mx-4">
      <Squiggle />
      <footer className="px-6 py-16 grid grid-cols-2">
        <div className="col-span-3">
          <span className="font-symbols text-5xl text-chalk-800 dark:text-chalk-300">&#xe900;</span>
          <p className="my-3 text-sm text-chalk-700 dark:text-chalk-400">{t("Reason for this website")}</p>
        </div>
        <FooterColumn
          title={t('Social')}
          links={[
            { label: "Instagram", url: instagramUrl, external: true },
            { label: "Github", url: githubUrl, external: true },
          ]}
        />
        <FooterColumn
          title={t('About')}
          links={[
            { label: t("Our mission"), url: '/mission' },
            { label: t('Hire me'), url: '/hire' },
          ]}
        />
      </footer>
    </div>
  );
}

export default Footer;
