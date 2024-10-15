import { ApolloClient, createQueryPreloader, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: 'http://172.20.10.3:3000/api/graphql',
  cache: new InMemoryCache(),
});

const preloadQuery = createQueryPreloader(apolloClient);

export {apolloClient, preloadQuery}
