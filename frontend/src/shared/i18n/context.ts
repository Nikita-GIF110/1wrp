import { createContext } from "react";
import { I18N } from "./i18n";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const I18NContext = createContext<I18N<any> | null>(null);
