import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import Card from "./story-header";
import { Article as ArticleModel, Media } from "@crp/types";
import { forwardRef, useRef } from "react";
import StoryReader from "./story-reader";
import useTitle from "../../hooks/use-title";
import useTransparentHeader from "../../features/header/use-transparent-header";
import { RichText } from "../../types/rich-text-node";

function Story() {
  const queryRef = useLoaderData() as QueryRef<{ Article: ArticleModel }>;
  const {
    data: { Article: story },
  } = useReadQuery<{ Article: ArticleModel }>(queryRef);
  const cardRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   containerRef.current?.addEventListener(
  //     "scroll",
  //     () => {
  //       if (containerRef.current?.scrollTop + 64 <= 384) {
  //         const calc = 384 / (384 - containerRef.current?.scrollTop);
  //         cardRef.current.style.transform = `scaleY(${1 / calc})`;
  //         cardRef.current.firstChild.style.transform = `scaleY(${calc})`;
  //       } else {
  //       }
  //     },
  //     { passive: true },
  //   );
  // }, []);

  useTitle(`${story.title} - ${story.subtitle}`);

  const CardRef = forwardRef(Card);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="pt-[72px] flex flex-col items-center" ref={container}>
      <main className="w-full">
        <div className="flex flex-col items-center w-full">
          <CardRef
            ref={cardRef}
            title={story.title!}
            text={story.subtitle!}
            backgroundImageURL={`${(story.callout!.value as Media).url}`}
          />
          <div className="mt-6 w-full max-w-2xl">
            <div className="mx-6 flex flex-col">
              <StoryReader content={story.content as RichText} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Story;
