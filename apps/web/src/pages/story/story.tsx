import {
  QueryRef,
  useBackgroundQuery,
  useLazyQuery,
  useLoadableQuery,
  useQuery,
  useQueryRefHandlers,
  useReadQuery,
} from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import { Story as StoryModel, Media } from "@crp/types";
import StoryReader from "./story-reader";
import useTitle from "../../hooks/use-title";
import useTransparentHeader from "../../features/header/use-transparent-header";
import StoryHeader from "./story-header";
import LocaleDropdown from "./locale-dropdown";
import { startTransition, Suspense, useEffect } from "react";
import useHeader from "../../features/header/header-context";
import GET_STORY from "../../queries/get-story";
import storyLanguageVar from "./story-lng";
import Header from "../../features/header/header";

function Story() {
  const queryRef = useLoaderData();
  const {
    data: { Story: story },
  } = useReadQuery(queryRef);

  return (
    <>
    <Header transparent={true} />
    <div className="flex flex-col items-center">
      <main className="w-full">
        <div className="flex w-full flex-col items-center">
          <StoryHeader
            title={story.title!}
            text={story.subtitle!}
            backgroundImageURL={`${(story.callout!.value as Media).url}`}
            tooltip={
              <LocaleDropdown
                availableLanguages={story.availableLanguages}
                onLocaleChanges={(locale: string) => {
                  storyLanguageVar(locale)
                }}
              />
            }
          />
          <StoryReader rootNode={story.content.root} />
        </div>
      </main>
    </div>
    </>
  );
}

export default Story;
