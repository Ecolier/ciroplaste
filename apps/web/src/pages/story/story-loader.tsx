import { preloadQuery } from "../../app/apollo";
import GET_STORY from "../../queries/get-story";
import i18n from "../../app/i18n";

export async function storyLoader({ params: id }) {
  return preloadQuery(GET_STORY, {
    variables: { id: id.id, locale: i18n.language },
    fetchPolicy: 'cache-first',
  }).toPromise();
}
