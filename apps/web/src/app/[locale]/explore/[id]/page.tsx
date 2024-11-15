import React from "react";
import LocaleDropdown from "./locale-dropdown";
import StoryHeader from "./story-header";
import storyLanguageVar from "./story-lng";
import StoryReader from "./story-reader";
import { setRequestLocale } from "next-intl/server";
import GET_STORY from "./get-story";
import { getClient } from "@/lib/apollo";
import GET_STORIES from "../get-stories";

const contentBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;

export const dynamicParams = false;

export async function generateStaticParams({ params: { locale } }) {
  const res = await fetch(
    `${contentBaseUrl}/api/stories/?locale=${locale}&draft=false&depth=0`
  );
  const stories = await res.json();
  return stories.docs.map(({ id }) => ({ id }));
}

async function getStory(id: string, locale: string) {
  const res = await fetch(
    `${contentBaseUrl}/api/stories/${id}?locale=${locale}&draft=false&depth=1`
  );
  const story = await res.json();
  return story;
}

export default async function Story({ params }) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const story = await getStory(id, locale);
  return (
    <>
      <div className="flex flex-col items-center">
        <main className="w-full">
          <div className="flex w-full flex-col items-center">
            <StoryHeader
              title={story.title!}
              text={story.subtitle!}
              backgroundImageURL={`${(story.callout!.value as Media).url}`}
            />
            <StoryReader rootNode={story.content.root} />
          </div>
        </main>
      </div>
    </>
  );
}
