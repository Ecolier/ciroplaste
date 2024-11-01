import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {storyLoader } from "../pages/story/story-loader";
import { landingLoader } from "../pages/landing/landing-loader";
import Layout from "./layout";
import { exploreLoader } from "../pages/explore/explore-loader";

const router = createBrowserRouter(
  [
    {
      path: "/",
      loader: landingLoader,
      async lazy() {
        let {default: Landing} = await import('../pages/landing');
        return {Component: Landing};
      },
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/explore",
          loader: exploreLoader,
          async lazy() {
            let {default: Explore} = await import('../pages/explore');
            return {Component: Explore};
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
