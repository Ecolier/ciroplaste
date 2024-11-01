import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { articleLoader, storyLoader } from "../pages/story/story-loader";
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
            let {default: Home} = await import('../pages/home');
            return {Component: Home};
          },
        },
        {
          path: "story/:id",
          loader: storyLoader,
          async lazy() {
            let {default: Story} = await import('../pages/story');
            return {Component: Story};
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
