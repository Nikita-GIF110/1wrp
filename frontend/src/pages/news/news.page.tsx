import type { RouteObject } from "react-router-dom";
import News from "features/news";
import { ROUTES } from "shared/config/routes";

export const NewsRoute: RouteObject = {
  path: `${ROUTES.news.path}/:newsId`,
  element: <News />,
};
