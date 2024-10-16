import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import TitleCard from "../components/TitleCard";
import { Post } from "../types/post";
import RichTextRenderer from "../components/RichTextRenderer";

function Article() {
  const queryRef = useLoaderData() as QueryRef<Post>;
  const { data, error } = useReadQuery<Post>(queryRef);
  const { Article: article } = data;
  const { content } = article;

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
              <RichTextRenderer
                document={content}
                components={{
                  heading({ children }) {
                    return (
                      <h1 className="text-zinc-800 dark:text-zinc-300 max-md:text-4xl text-6xl font-medium mb-4">
                        {children}
                      </h1>
                    );
                  },
                  paragraph: ({ children }) => (
                    <p className="text-zinc-800 dark:text-zinc-300 mb-8">
                      {children}
                    </p>
                  ),
                  upload: ({ url, alt }) => (
                    <div>
                      <img className="mb-2" src={`http://172.20.10.3:3000${url}`}></img>
                      <p className="text-right text-zinc-600 dark:text-zinc-500 mb-8 text-sm">{ alt }</p>
                    </div>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Article;
