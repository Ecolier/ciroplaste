import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import storyLanguageVar from "../features/story/story-lng";

const localesUrl = import.meta.env.VITE_LOCALES_BASE_URL;
const dev = import.meta.env.DEV;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['fr', 'en'],
    ns: ["web"],
    fallbackNS: "web",
    backend: {
      loadPath: `${localesUrl}/{{lng}}/{{ns}}.json`,
    },
    fallbackLng: "en",
    debug: dev ? true : false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
