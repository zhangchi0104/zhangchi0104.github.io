import i18n from "i18next";
import type { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsZh from "@langs/zh/translations.json";
import translationsEn from "@langs/en/translations.json";
const opts: InitOptions = {
  debug: process.env.NODE_ENV === "development",
  fallbackLng: "en",
  lng: "en",
  defaultNS: "translations",
  resources: {
    en: {
      translations: translationsEn
    },
    zh: {
      translations: translationsZh
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(LanguageDetector).use(initReactI18next).init(opts);
export default i18n;
