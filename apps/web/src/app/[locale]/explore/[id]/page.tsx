import React from "react";
import StoryHeader from "./story-header";
import StoryReader from "./story-reader";
import { setRequestLocale } from "next-intl/server";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Story } from "@/types/story";
import { Media } from "@/types/media";
import { RootNode } from "@/types/rich-text-node";
import { Profile } from "@/types/profile";

const contentBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;

type GenerateStaticParamsProps = {
  params: { locale: string };
};

async function getStory(id: string, locale: string) {
  const res = await fetch(
    `${contentBaseUrl}/api/stories/${id}?locale=${locale}&draft=false&depth=1`
  );
  const story = (await res.json()) as Story;
  return story;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const story = await getStory(id, locale);
  return {
    title: story.title,
    description: story.subtitle,
  };
}

export async function generateStaticParams({
  params: { locale },
}: GenerateStaticParamsProps) {
  const res = await fetch(
    `${contentBaseUrl}/api/stories/?locale=${locale}&draft=false&depth=0`
  );
  const stories = (await res.json()) as { docs: Story[] };
  return stories.docs.map(({ id }) => ({ id }));
}

export type StoryProps = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function StoryPage({ params }: StoryProps) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const story = await getStory(id, locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: story.title,
    description: story.subtitle,
    image: [(story.callout?.value as Media).url],
    datePublished: story.createdAt,
    dateModified: story.updatedAt,
    author: [
      {
        "@type": "Person",
        name: (story.author!.value as Profile).name,
        url: (story.author!.value as Profile).url,
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center max-md:pt-[64px]">
        <main className="w-full">
          <div className="flex w-full flex-col items-center">
            <StoryHeader
              title={story.title!}
              text={story.subtitle!}
              backgroundImageURL={`${(story.callout!.value as Media).url}`}
            />
            <StoryReader rootNode={story.content!.root as RootNode} />
          </div>
        </main>
      </div>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
