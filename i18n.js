import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import combinedSV from "@locales/sv/translationSV.json";
import combinedEN from "@locales/en/translationEN.json";
import Cookies from "js-cookie";

const resources = {
  sv: { translation: combinedSV },
  en: { translation: combinedEN },
};

const savedLanguage = Cookies.get("language");

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || "sv",
  fallbackLng: "en",
});

export default i18n;
