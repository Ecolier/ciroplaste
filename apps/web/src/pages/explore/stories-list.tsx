import { Story, Media } from "@crp/types";
import { Link } from "react-router-dom";
import StoryCard from "./story-card";

type StoriesListProps = {
  stories: Story[];
};

function StoriesList({ stories }: StoriesListProps) {
  return (
    <>
      {stories?.map((story, index) => (
        <div key={index} className="mb-2 w-full">
          <Link to={`/explore/${story.id}`}>
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
