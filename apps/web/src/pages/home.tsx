import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import Hero from "../features/home/hero";
import ArticleList from "../features/home/article-list";

function Home() {
  const queryRef = useLoaderData() as QueryRef;
  const { data } = useReadQuery(queryRef);
  const {
    Articles: { docs: articles },
  } = data;
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center m-2 min-h-32">
        <span className="text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
          Latest Stories
        </span>
        <ArticleList articles={articles}></ArticleList>
      </div>
    </>
  );
}

export default Home;
