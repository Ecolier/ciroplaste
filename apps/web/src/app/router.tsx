import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { articleLoader } from "../pages/article/article-loader";
import { homeLoader } from "../pages/home/home-loader";
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
          async lazy() {
            let {default: Home} = await import('../pages/home/home');
            return {Component: Home};
          },
        },
        {
          path: "article/:id",
          loader: articleLoader,
          async lazy() {
            let {default: Article} = await import('../pages/article/article');
            return {Component: Article};
          },
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
