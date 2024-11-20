import { Link } from "@/i18n/routing";
import StoryCard from "./story-card";
import { Story } from "@/types/story";
import { Media } from "@/types/media";

type StoriesListProps = {
  stories: Story[];
};

function StoriesList({ stories }: StoriesListProps) {
  return (
    <>
      {stories?.map((story, index) => (
        <div key={index} className="mb-2 w-full rounded-3xl overflow-hidden">
          <Link href={`/explore/${story.id}`}>
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
