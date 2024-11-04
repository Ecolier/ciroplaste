import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import { Article as ArticleModel } from "@crp/types";
import StoryReader from "./story-reader";
import useTitle from "../../hooks/use-title";
import useTransparentHeader from "../../features/header/use-transparent-header";

function Story() {
  const queryRef = useLoaderData() as QueryRef<{ Article: ArticleModel }>;
  const {
    data: { Article: story },
  } = useReadQuery<{ Article: ArticleModel }>(queryRef);

  useTitle(`${story.title} - ${story.subtitle}`);
  useTransparentHeader(true);

  return (
    <div className="flex flex-col items-center">
      <main className="w-full">
        <div className="flex w-full flex-col items-center">
          <StoryReader story={story} />
        </div>
      </main>
    </div>
  );
}

export default Story;
