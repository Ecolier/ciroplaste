import {
  ApolloClient,
  createQueryPreloader,
  InMemoryCache,
} from "@apollo/client";

const contentUrl = import.meta.env.VITE_CONTENT_BASE_URL;

const apolloClient = new ApolloClient({
  uri: `${contentUrl}/api/graphql`,
  cache: new InMemoryCache(),
});

const preloadQuery = createQueryPreloader(apolloClient);

export { apolloClient, preloadQuery };
