import { gql } from "@apollo/client";

const GET_STORIES = gql`
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

export default GET_STORIES;
