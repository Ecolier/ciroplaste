import { preloadQuery } from "../../app/apollo";
import GET_STORIES from "../../queries/get-stories";

export async function landingLoader() {
  return preloadQuery(GET_STORIES);
}
