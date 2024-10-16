import { gql } from "@apollo/client";
import { preloadQuery } from "../apollo";

const GET_ARTICLES = gql`
  query Posts($orderBy: [PostOrderByInput!]!) {
    posts(orderBy: $orderBy) {
      publishDate
      image {
        url
      }
      slug
      title
      id
    }
  }
`;

export async function articlesLoader() {
    return preloadQuery(GET_ARTICLES, {
      variables: {
        "orderBy": [
          {
            "publishDate": "desc"
          }
        ]
      },
    });
  }
  