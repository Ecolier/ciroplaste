import { Article, Media } from "@crp/types";
import Card from "../../components/card";

type ArticleListProps = {
  articles: Article[];
};

function ArticleList({ articles }: ArticleListProps) {
  return (
    <>
      {articles?.map((article, index) => (
        <a
          key={index}
          href={`${import.meta.env.BASE_URL}article/${article.id}`}
          className="mb-4 w-full"
        >
          <Card
            title={article.title!}
            text={article.subtitle!}
            backgroundImageURL={`${import.meta.env.VITE_ASSETS_BASE_URL}${(article.callout!.value as Media).url}`}
          />
        </a>
      ))}
    </>
  );
}

export default ArticleList;
