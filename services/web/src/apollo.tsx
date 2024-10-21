import { ApolloClient, createQueryPreloader, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: 'https://content.ciroplaste.com/api/graphql',
  cache: new InMemoryCache(),
});

const preloadQuery = createQueryPreloader(apolloClient);

export {apolloClient, preloadQuery}
