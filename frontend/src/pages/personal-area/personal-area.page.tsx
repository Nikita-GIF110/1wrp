import type { RouteObject } from "react-router-dom";
import PersonalArea from "features/personal-area";

export const PersonalAreaRoute: RouteObject = {
  path: "/personal-area",
  element: <PersonalArea />,
};
