import { preloadQuery } from "../../app/apollo";
import GET_STORY from "../../queries/get-story";

export async function articleLoader({ params: id }) {
  return preloadQuery(GET_STORY, {
    variables: id,
  });
}
