import { preloadQuery } from "../../app/apollo";
import GET_ARTICLES from "../../queries/get-articles-query";

export async function homeLoader() {
  return preloadQuery(GET_ARTICLES);
}
