import type { RouteObject } from "react-router-dom";
import Home from "features/home";

export const HomeRoute: RouteObject = {
  index: true,
  element: <Home />,
};
