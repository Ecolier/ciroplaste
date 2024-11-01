import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {storyLoader } from "../pages/story/story-loader";
import Layout from "./layout";
import { exploreLoader } from "../pages/explore/explore-loader";

const router = createBrowserRouter(
  [
    {
      path: "/",
      async lazy() {
        let {default: LandingLayout} = await import('../pages/landing/landing-layout');
        return {Component: LandingLayout};
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
            let {default: Explore} = await import('../pages/explore/explore');
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
