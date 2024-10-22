import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import TitleCard from "../components/TitleCard";

function Home() {
  const queryRef = useLoaderData() as QueryRef;
  const { data, error } = useReadQuery(queryRef);
  const {
    Articles: { docs: articles },
  } = data;
  return (
    <>
      <div className="h-[75vh] min-h-[620px] p-8 py-24 relative overflow-hidden flex flex-col justify-center items-center w-full">
        <span className="text-7xl font-bold mb-9 text-rose-950 dark:text-rose-100 font-serif">
          Ciroplaste
        </span>
        <span className="text-rose-950 dark:text-rose-100 text-center max-w-sm">
          The media that sculpts within the flesh. No more flashy news and
          impersonal language. This is subjective journalism.
        </span>
        <div className="absolute flex gap-4 bg-rose-100 dark:bg-rose-600 select-none cursor-default top-0 -z-10 font-serif font-black h-full text-9xl text-black dark:text-white dark:text-opacity-5 text-opacity-5">
          <ul className="animate-marquee flex flex-col justify-around shrink-0 gap-4 min-w-full">
            <li>
              <span>Mais, aussi agiles que ces ciroplastes </span>
              <span>qui font un buste devant nous en cinq minutes, </span>
            </li>
            <li>
              <span>qui font un buste devant nous en cinq minutes, </span>
              <span>les quelques mots que l'inconnue va nous dire </span>
            </li>
            <li>
              <span>les quelques mots que l'inconnue va nous dire </span>
              <span>préciseront cette forme et lui donneront </span>
            </li>
            <li>
              <span>préciseront cette forme et lui donneront </span>
              <span>quelque chose de définitif.</span>
            </li>
          </ul>
          <ul
            className="animate-marquee flex flex-col justify-around shrink-0 gap-4 min-w-full"
            aria-hidden="true"
          >
            <li>
              <span>Mais, aussi agiles que ces ciroplastes </span>
              <span>qui font un buste devant nous en cinq minutes, </span>
            </li>
            <li>
              <span>qui font un buste devant nous en cinq minutes, </span>
              <span>les quelques mots que l'inconnue va nous dire </span>
            </li>
            <li>
              <span>les quelques mots que l'inconnue va nous dire </span>
              <span>préciseront cette forme et lui donneront </span>
            </li>
            <li>
              <span>préciseront cette forme et lui donneront </span>
              <span>quelque chose de définitif.</span>
            </li>
          </ul>
        </div>
        <div
          role="button"
          className="px-16 bg-rose-500 text-rose-200 py-4 rounded-3xl mt-4"
        >
          Learn More
        </div>
      </div>
      <svg
        viewBox="0 0 500 100"
        width="500px"
        height="100.416px"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full min-w-[420px] -mt-[100px]"
        preserveAspectRatio="none"
      >
        <path
          className="fill-zinc-50 dark:fill-zinc-900"
          d="M 0 100 L 500 100 L 500 22.246 C 500 22.246 372 72.301 250 22.246 C 125 -27.809 0 22.246 0 22.246 L 0 100 L 0 100 Z"
          id="object-0"
        ></path>
      </svg>
      <div className="flex flex-col items-center m-2 min-h-32">
        <span className="text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
          Latest Stories
        </span>
        {articles?.map((article, index) => (
          <a
            key={index}
            href={`/article/${article.id}`}
            className="mb-4 w-full"
          >
            <TitleCard
              title={article.title}
              slug={article.subtitle}
              img={`${import.meta.env.VITE_CONTENT_BASE_URL}${article.callout.value.url}`}
            ></TitleCard>
          </a>
        ))}
      </div>
    </>
  );
}

export default Home;
