import { preloadQuery } from "../../app/apollo";
import GET_STORIES from "./get-stories";

export async function exploreLoader() {
  return preloadQuery(GET_STORIES);
}
