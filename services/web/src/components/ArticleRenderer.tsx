import RichTextRenderer from "../components/RichTextRenderer";
import { Article as ArticleModel } from "@crp/types";
import { RichText } from "../types/richTextNode";

interface ArticleRendererProps {
  article: ArticleModel;
}

function ArticleRenderer({ article }: ArticleRendererProps) {
  return (
    <RichTextRenderer
      document={article.content as RichText}
      components={{
        heading({ children, key, Tag }) {
          return (
            <Tag
              key={key}
              className="text-zinc-800 dark:text-zinc-300 max-md:text-4xl text-6xl font-medium mb-4"
            >
              {children}
            </Tag>
          );
        },
        paragraph: ({ children, key }) => (
          <p key={key} className="text-zinc-800 dark:text-zinc-300 mb-8">
            {children}
          </p>
        ),
        upload: ({ url, alt, key }) => (
          <div key={key}>
            <img className="mb-2" src={`http://172.20.10.3:3000${url}`}></img>
            <p className="text-right text-zinc-600 dark:text-zinc-500 mb-8 text-sm">
              {alt}
            </p>
          </div>
        ),
      }}
    />
  );
}

export default ArticleRenderer;
