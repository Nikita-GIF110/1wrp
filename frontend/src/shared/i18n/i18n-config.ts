import { en } from "assets/keysets/en-keyset";
import { ru } from "assets/keysets/ru-keyset";
import { LANGUAGE_NAME, DEFAULT_LANGUAGE } from "shared/config/base";
import { createPluralize } from "./create-pluralize";
import { I18N } from "./i18n";

const pluralizeEn = createPluralize("en");
const pluralizeRu = createPluralize("ru");

const getSelectedLang = (): "ru" | "en" => {
  const selectedLanguage = window.localStorage.getItem(LANGUAGE_NAME);

  if (!selectedLanguage) {
    return DEFAULT_LANGUAGE;
  }

  return selectedLanguage as "ru" | "en";
};

export const i18nConfig = new I18N({
  defaultLang: getSelectedLang(),
  languages: {
    en: {
      keyset: en,
      pluralize: pluralizeEn,
    },
    ru: {
      keyset: ru,
      pluralize: pluralizeRu,
    },
  },
});
