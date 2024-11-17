import Footer from "@/components/footer/footer";
import { setRequestLocale } from "next-intl/server";
import React from "react";
import StoriesList from "./stories-list";

const contentBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;

async function getStories(locale: string) {
  console.log(`${contentBaseUrl}/api/stories/?locale=${locale}&draft=false&depth=1`)
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
