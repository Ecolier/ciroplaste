import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import Card from "./story-header";
import { Article as ArticleModel, Media } from "@crp/types";
import { useRef } from "react";
import StoryReader from "./story-reader";
import useTitle from "../../hooks/use-title";
import useTransparentHeader from "../../features/header/use-transparent-header";
import { RichText } from "../../types/rich-text-node";

function Story() {
  const queryRef = useLoaderData() as QueryRef<{ Article: ArticleModel }>;
  const {
    data: { Article: story },
  } = useReadQuery<{ Article: ArticleModel }>(queryRef);

  useTitle(`${story.title} - ${story.subtitle}`);
  useTransparentHeader(true);

  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center" ref={container}>
      <main className="w-full">
        <div className="flex flex-col items-center w-full">
          <Card
            title={story.title!}
            text={story.subtitle!}
            backgroundImageURL={`${(story.callout!.value as Media).url}`}
          />
          <StoryReader content={story.content as RichText} />
        </div>
      </main>
    </div>
  );
}

export default Story;
