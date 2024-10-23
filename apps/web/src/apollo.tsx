import { ApolloClient, createQueryPreloader, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: `${import.meta.env.VITE_CONTENT_BASE_URL}/api/graphql`,
  cache: new InMemoryCache(),
});

const preloadQuery = createQueryPreloader(apolloClient);

export {apolloClient, preloadQuery}
