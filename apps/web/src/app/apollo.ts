import {
  ApolloClient,
  createQueryPreloader,
  InMemoryCache,
} from "@apollo/client";
import storyLanguageVar from "../features/story/story-lng";

const contentUrl = import.meta.env.VITE_CONTENT_BASE_URL;

const apolloClient = new ApolloClient({
  uri: `${contentUrl}/api/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          currentLng: {
            read() {
              return storyLanguageVar();
            }
          }
        }
      }
    }
  }),
});

const preloadQuery = createQueryPreloader(apolloClient);

export { apolloClient, preloadQuery };
