import RichTextRenderer from "./article-renderer";
import { Article as ArticleModel } from "@crp/types";
import { RichText } from "../../types/rich-text-node";

interface ArticleOutlineProps {
  article: ArticleModel;
  className: string;
  onClick: (key: number) => void;
}

function ArticleOutline({ article, className, onClick }: ArticleOutlineProps) {
  return (
    <div className={`${className}`}>
      <p className="text-xs text-zinc-700 dark:text-zinc-400 mb-2">
        On this page
      </p>
      <ul>
        <RichTextRenderer
          document={article.content as RichText}
          components={{
            heading({ children, key }) {
              return (
                <li key={key} className="flex items-center py-2 cursor-pointer" onClick={() => onClick(key)}>
                  <a className="text-zinc-800 dark:text-zinc-300">
                    {children}
                  </a>
                </li>
              );
            },
          }}
        />
      </ul>
    </div>
  );
}

export default ArticleOutline;
