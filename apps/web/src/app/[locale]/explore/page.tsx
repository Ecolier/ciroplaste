import Footer from "@/components/footer/footer";
import { setRequestLocale } from "next-intl/server";
import React from "react";
import StoriesList from "./stories-list";
import Header from "@/components/header/header";

const contentBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;

async function getStories(locale: string) {
  const res = await fetch(
    `${contentBaseUrl}/api/stories/?locale=${locale}&draft=false&depth=1`
  );
  const stories = await res.json();
  return stories;
}

type ExploreProps = {
  params: Promise<{ locale: string }>;
};

export default async function Explore({ params }: ExploreProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const stories = await getStories(locale);
  return (
    <>
      <Header />
      <div className="pt-[64px] md:pt-0 md:m-2">
        <StoriesList stories={stories.docs} />
      </div>
      <Footer />
    </>
  );
}
