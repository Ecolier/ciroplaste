import { gql } from "@apollo/client";

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

export default GET_ARTICLE;
