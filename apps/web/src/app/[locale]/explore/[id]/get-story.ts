import { gql } from "@apollo/client";

const GET_STORY = gql`
  query Story($id: String!, $locale: LocaleInputType) {
    Story(id: $id, locale: $locale) {
      id
      availableLanguages
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

export default GET_STORY;
