import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fa"],
    fallbackLng: "en",
    debug: false,

    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },

    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });
