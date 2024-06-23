import { createBrowserRouter } from "react-router-dom";
import { Layout } from "features/layout";
import { HomeRoute } from "./home";
import { ErrorRoute } from "./error-page";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      HomeRoute,
      ErrorRoute,
      {
        path: "/protected",
        element: <div>Protected Route</div>,
      },
    ],
  },
]);
