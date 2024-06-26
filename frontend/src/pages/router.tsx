import { createBrowserRouter } from "react-router-dom";
import { Layout } from "features/layout";
import { HomeRoute } from "./home";
import { NewsListRoute } from "./news-list";
import { NewsRoute } from "./news";
import { ErrorRoute } from "./error-page";
import { PersonalAreaRoute } from "./personal-area";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [HomeRoute, PersonalAreaRoute, NewsListRoute, NewsRoute],
  },
  ErrorRoute,
]);
