import { gql } from "@apollo/client";

const GET_STORIES = gql`
  query {
    Articles {
      docs {
        id
        title
        subtitle
        createdAt
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

export default GET_STORIES;
