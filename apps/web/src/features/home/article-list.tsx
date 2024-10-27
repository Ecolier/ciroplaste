import { Article, Media } from "@crp/types";
import Card from "../../components/card";
import { Link } from "react-router-dom";

type ArticleListProps = {
  articles: Article[];
};

function ArticleList({ articles }: ArticleListProps) {
  return (
    <>
      {articles?.map((article, index) => (
        <div key={index} className="mb-4 w-full">
          <Link to={`/article/${article.id}`}>
            <Card
              title={article.title!}
              text={article.subtitle!}
              backgroundImageURL={`${(article.callout!.value as Media).url}`}
            />
            </Link>
          </div>
      ))}
    </>
  );
}

export default ArticleList;
