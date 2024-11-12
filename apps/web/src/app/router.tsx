import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { storyLoader } from "../features/story/story-loader";
import { exploreLoader } from "../features/explore/explore-loader";
import Layout from "./layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          async lazy() {
            const { default: LandingLayout } = await import(
              "../features/landing/landing-layout"
            );
            return { Component: LandingLayout };
          },
        },
        {
          path: "/explore",
          async lazy() {
            const { default: ExploreLayout } = await import(
              "../features/explore/explore-layout"
            );
            return { Component: ExploreLayout };
          },
          children: [
            {
              index: true,
              loader: exploreLoader,
              async lazy() {
                const { default: Explore } = await import(
                  "../features/explore/explore"
                );
                return { Component: Explore };
              },
            },
            {
              path: ":id",
              loader: storyLoader,
              async lazy() {
                const { default: Story } = await import("../features/story/story");
                return { Component: Story };
              },
            },
          ],
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
