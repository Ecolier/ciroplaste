import { Article, Media } from "@crp/types";
import { Link } from "react-router-dom";
import StoryCard from "./article-card";

type StoriesListProps = {
  stories: Article[];
};

function StoriesList({ stories }: StoriesListProps) {
  return (
    <>
      {stories?.map((story, index) => (
        <div key={index} className="mb-2 w-full">
          <Link to={`/story/${story.id}`}>
            <StoryCard
              title={story.title!}
              text={story.subtitle!}
              createdAt={story.createdAt}
              backgroundImageURL={`${(story.callout!.value as Media).url}`}
            />
          </Link>
        </div>
      ))}
    </>
  );
}

export default StoriesList;
