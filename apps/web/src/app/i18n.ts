import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const localesUrl = import.meta.env.VITE_LOCALES_BASE_URL;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['web'],
    fallbackNS: 'web',
    backend: {
      loadPath: `${localesUrl}/{{lng}}/{{ns}}.json`
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;