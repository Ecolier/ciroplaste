import { gql } from "@apollo/client";
import { preloadQuery } from "../apollo";

const GET_ARTICLE = gql`
  query Post($where: PostWhereUniqueInput!) {
    post(where: $where) {
      content {
        document
      }
      slug
      title
      author {
        name
      }
      image {
        url
      }
    }
  }
`;

export async function articleLoader({ params: id }) {
  return preloadQuery(GET_ARTICLE, {
    variables: { where: id },
  });
}
