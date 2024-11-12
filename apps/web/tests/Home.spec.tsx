import { beforeAll, describe, expect, test } from "vitest";
import { getByText, render, screen } from "@testing-library/react";
import Home from "../src/features/home";
import React from "react";
import {
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  createQueryPreloader,
  InMemoryCache,
} from "@apollo/client";
import { MockLink } from "@apollo/client/testing";
import articles from "./articles.mock.json";
import GET_STORIES from "../src/queries/get-stories";

const link = new MockLink([
  { request: { query: GET_STORIES }, result: {data: articles}},
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const router = createMemoryRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => {
      return createQueryPreloader(client)(GET_STORIES);
    },
  }
]);

describe('<Home />', () => {
  beforeAll(() => render(<ApolloProvider client={client}><RouterProvider router={router} /></ApolloProvider>))

  test(`renders ${articles.Articles.docs.length} stories with matching titles`, async () => {
    const links = await screen.findAllByRole('link');
    const firstStoryTitle = getByText(links[0], articles.Articles.docs[0].title);
    const secondStoryTitle = getByText(links[1], articles.Articles.docs[1].title)
  
    expect(links.length).toBe(articles.Articles.docs.length);
    expect(firstStoryTitle).toBeDefined();
    expect(secondStoryTitle).toBeDefined();
  });
  
})
