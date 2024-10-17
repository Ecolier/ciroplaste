import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import TitleCard from "../components/TitleCard";
import { Article as ArticleModel } from "@crp/types";
import ArticleRenderer from "../components/ArticleRenderer";
import ArticleOutline from "../components/ArticleOutline";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Article() {
  const queryRef = useLoaderData() as QueryRef<{ Article: ArticleModel }>;
  const {
    data: { Article: article },
  } = useReadQuery<{ Article: ArticleModel }>(queryRef);
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const scrollTo = (key: number) =>
    contextSafe(() => {
      gsap.to(window, {
        duration: 0.2,
        scrollTo: { y: `#heading_${article.id}_${key}`, offsetY: 72 },
      });
    });
  return (
    <div className="flex flex-col items-center w-full m-2" ref={container}>
      <main className="w-full">
        <div className="flex flex-col items-center w-full">
          <div className="mb-8">
            <TitleCard
              title={article?.title}
              slug={article?.subtitle}
              img={`http://172.20.10.3:3000${article.callout.value.url}`}
            />
          </div>
          <div className="mt-6 w-full max-w-2xl">
            <div className="mx-6 flex flex-col">
              <ArticleOutline
                className="mb-8"
                article={article}
                onClick={(key) => scrollTo(key)()}
              ></ArticleOutline>
              <ArticleRenderer article={article}></ArticleRenderer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Article;
