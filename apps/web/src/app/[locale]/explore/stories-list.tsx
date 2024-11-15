import { Link } from "@/i18n/routing";
import StoryCard from "./story-card";

function StoriesList({ stories }) {
  return (
    <>
      {stories?.map((story, index) => (
        <div key={index} className="mb-2 w-full">
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
