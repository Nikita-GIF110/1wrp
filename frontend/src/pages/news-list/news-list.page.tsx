import type { RouteObject } from "react-router-dom";
import NewsList from "features/news-list";
import { ROUTES } from "shared/config/routes";

export const NewsListRoute: RouteObject = {
  path: ROUTES.news.path,
  element: <NewsList />,
};
