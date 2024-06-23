import type { RouteObject } from "react-router-dom";
import Error404 from "features/404";

export const ErrorRoute: RouteObject = {
  path: "*",
  element: <Error404 />,
};
