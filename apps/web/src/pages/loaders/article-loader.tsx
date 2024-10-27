import { preloadQuery } from "../../app/apollo";
import GET_ARTICLE from "../../queries/get-article-query";

export async function articleLoader({ params: id }) {
  return preloadQuery(GET_ARTICLE, {
    variables: id,
  });
}
