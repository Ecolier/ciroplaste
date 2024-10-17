import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import TitleCard from "../components/TitleCard";
import { Article as ArticleModel } from "@crp/types";
import ArticleRenderer from "../components/ArticleRenderer";

function Article() {
  const queryRef = useLoaderData() as QueryRef<{ Article: ArticleModel }>;
  const {
    data: { Article: article },
  } = useReadQuery<{ Article: ArticleModel }>(queryRef);
  return (
    <div className="flex flex-col items-center w-full m-2">
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
            <div className="mx-6">
              <ArticleRenderer article={article}></ArticleRenderer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Article;
