import { gql } from "@apollo/client";
import { preloadQuery } from "../apollo";

const GET_ARTICLE = gql`
  query Article($id: String!) {
    Article(id: $id) {
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
      content
    }
  }
`;

export async function articleLoader({ params: id }) {
  return preloadQuery(GET_ARTICLE, {
    variables: id,
  });
}
