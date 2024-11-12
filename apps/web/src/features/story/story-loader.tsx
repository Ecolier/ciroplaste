import { preloadQuery } from "../../app/apollo";
import i18n from "../../app/i18n";
import GET_STORY from "./get-story";
import storyLanguageVar from "./story-lng";

const constructQuery = (language: string, id: string) => {
  storyLanguageVar(language);
  return preloadQuery(GET_STORY, {
    variables: { id: id.id }
  }).toPromise();
};

export function storyLoader({ params: id }) {
  return new Promise((resolve) =>
    i18n.isInitialized
      ? resolve(constructQuery(i18n.language, id))
      : i18n.on("initialized", () => {
          storyLanguageVar(i18n.language);
          return resolve(constructQuery(i18n.language, id));
        }),
  );
}
