import { gql } from "@apollo/client";
import { preloadQuery } from "../apollo";

const GET_ARTICLES = gql`
  query {
  Articles {
  	docs {
      id
      title
      subtitle
      callout {
        value {
          ... on Media {
          	url
        	}
        }
      }
    }
  }
}
`;

export async function articlesLoader() {
  return preloadQuery(GET_ARTICLES);
}
