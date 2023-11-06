import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./public/locales/en/common.json";
import plTranslation from "./public/locales/pl/common.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      pl: {
        translation: plTranslation,
      },
    },
    //     lng: "pl", // Domyślny język

    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
