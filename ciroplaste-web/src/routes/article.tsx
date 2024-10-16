import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import TitleCard from "../components/TitleCard";
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";
import { Post } from "../types/post";

const renderers: DocumentRendererProps["renderers"] = {
  block: {
    heading({ level, children }) {
      const Comp = `h${level}` as const;
      return (
        <Comp className="text-zinc-800 dark:text-zinc-300 max-md:text-4xl text-6xl font-medium mb-4">
          {children}
        </Comp>
      );
    },
    paragraph({ children }) {
      return (
        <p className="text-zinc-800 dark:text-zinc-300 mb-4">{children}</p>
      );
    },
  },
};

function Article() {
  const queryRef = useLoaderData() as QueryRef<Post>;
  const { data, error } = useReadQuery<Post>(queryRef);
  const { post } = data;
  return (
    <div className="flex flex-col items-center w-full m-2">
      <main className="w-full">
        <div className="flex flex-col items-center w-full">
          <div className="mb-8">
            <TitleCard
              title={post?.title}
              slug={post?.slug}
              img={post?.image.url}
            />
          </div>
          <div className="mt-6 w-full max-w-2xl">
            <div className="mx-6">
              <DocumentRenderer
                document={post?.content.document}
                renderers={renderers}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Article;
