import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

// Set the key-value pairs for the different languages you want to support.
const translations = {
  en: { welcome: "Hello", name: "Charlie" },
  ja: { welcome: "こんにちは" },
};

// Initialize i18n with the translations
const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode ?? "en";

// Enable fallback when a translation is missing
i18n.enableFallback = true;

export default i18n;
