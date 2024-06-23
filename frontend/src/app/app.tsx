import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { router } from "pages/router";
import { ToastContainer } from "shared/ui/toast";
import { i18nConfig, I18NProvider } from "shared/i18n";
import "./app.css";
import { theme } from "./theme";

export const App = () => (
  <I18NProvider i18n={i18nConfig}>
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <RouterProvider router={router} />
      <ToastContainer />
    </ChakraProvider>
  </I18NProvider>
);

export default App;
