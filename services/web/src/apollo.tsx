import { ApolloClient, createQueryPreloader, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: 'http://167.235.69.195:3000/api/graphql',
  cache: new InMemoryCache(),
});

const preloadQuery = createQueryPreloader(apolloClient);

export {apolloClient, preloadQuery}
