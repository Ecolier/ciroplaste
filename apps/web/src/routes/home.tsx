import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import TitleCard from "../components/TitleCard";
import Hero from "../components/Hero";
import { Suspense } from "react";
import config from "../config";

function Home() {
  const queryRef = useLoaderData() as QueryRef;
  const { data, error } = useReadQuery(queryRef);
  const {
    Articles: { docs: articles },
  } = data;
  return (
    <>
      <Hero />
      {/* <svg
        viewBox="0 0 500 100"
        width="500px"
        height="100.416px"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full min-w-[560px] -mt-[172px]"
        preserveAspectRatio="none"
      >
        <path
          className="fill-zinc-50 dark:fill-zinc-900"
          d="M 0 100 L 500 100 L 500 22.246 C 500 22.246 372 72.301 250 22.246 C 125 -27.809 0 22.246 0 22.246 L 0 100 L 0 100 Z"
          id="object-0"
        ></path>
      </svg> */}
      <div className="flex flex-col items-center m-2 min-h-32">
        <span className="text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
          Latest Stories
        </span>
        {articles?.map((article, index) => (
          <a
            key={index}
            href={`${config.service.content.url}article/${article.id}`}
            className="mb-4 w-full"
          >
            <TitleCard
              title={article.title}
              slug={article.subtitle}
              img={`${config.service.content.url}${article.callout.value.url}`}
            ></TitleCard>
          </a>
        ))}
      </div>
    </>
  );
}

export default Home;
