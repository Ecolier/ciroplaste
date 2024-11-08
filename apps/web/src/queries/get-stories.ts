import { gql } from "@apollo/client";

const GET_STORIES = gql`
  query {
    Stories {
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
