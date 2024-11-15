import Footer from "@/components/footer/footer";
import { setRequestLocale } from "next-intl/server";
import React from "react";
import StoriesList from "./stories-list";
import { getClient } from "@/lib/apollo";
import GET_STORIES from "./get-stories";

const contentBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;

export const dynamicParams = false;

export async function generateStaticParams({ params: { locale } }) {
  const res = await fetch(
    `${contentBaseUrl}/api/stories/?locale=${locale}&draft=false&depth=0`
  );
  const stories = await res.json();
  return stories.docs.map(({ id }) => ({ id }));
}

async function getStories(locale: string) {
  const res = await fetch(
    `${contentBaseUrl}/api/stories/?locale=${locale}&draft=false&depth=1`,
  );
  const stories = await res.json();
  return stories;
}

export default async function Explore({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const stories = await getStories(locale);
  return (
    <>
      <StoriesList stories={stories.docs} />
      <Footer />
    </>
  );
}
