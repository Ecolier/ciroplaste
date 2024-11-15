import {
  ApolloClient,
  createQueryPreloader,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

//const contentUrl = import.meta.env.VITE_CONTENT_BASE_URL;

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost/content/api/graphql",
    }),
    cache: new InMemoryCache(),
  });
});

//const preloadQuery = createQueryPreloader(apolloClient);
