import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Article from "../pages/article";
import { articleLoader } from "../pages/loaders/article-loader";
import Home from "../pages/home";
import { homeLoader } from "../pages/loaders/home-loader";
import Root from "./root";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          loader: homeLoader,
          element: <Home />,
        },
        {
          path: "article/:id",
          loader: articleLoader,
          element: <Article />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

function AppRouter() {
    return <RouterProvider router={router} />
}

export default AppRouter;
