import { i18nConfig, useI18N as useI18nBase } from "shared/i18n";

export const useI18N = useI18nBase<typeof i18nConfig>;
