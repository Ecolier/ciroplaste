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
import { startTransition, Suspense } from "react";

function Story() {
  const queryRef = useLoaderData();
  const {
    data: { Story: story },
  } = useReadQuery(queryRef);
  const { refetch } = useQueryRefHandlers(queryRef);

  useTitle(`${story.title} - ${story.subtitle}`);
  useTransparentHeader(true);

  function handleRefetch(locale: string, id: string) {
    startTransition(() => {
      refetch({ locale, id });
    });
  }

  return (
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
                onLocaleChanges={(locale: string) =>
                  handleRefetch(locale, story.id)
                }
              />
            }
          />
          <StoryReader rootNode={story.content.root} /> 
        </div>
      </main>
    </div>
  );
}

export default Story;
