import { createI18n } from 'vue-i18n';
import en from "@/i18n/en.json";
import de from "@/i18n/de.json";

const messages = {
  en: en,
  de: de,
};

const i18n = createI18n({
  locale: localStorage.getItem('lang'),
  fallbackLocale: localStorage.getItem('lang') || 'de',
  legacy: false,
  messages,
});

export default i18n;