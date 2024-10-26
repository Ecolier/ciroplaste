import { ApolloClient, createQueryPreloader, InMemoryCache } from "@apollo/client";
import config from "./config";

const apolloClient = new ApolloClient({
  uri: `${config.service.content.url}/api/graphql`,
  cache: new InMemoryCache(),
});

const preloadQuery = createQueryPreloader(apolloClient);

export {apolloClient, preloadQuery}
