import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import TitleCard from "../components/TitleCard";

function Home() {
  const queryRef = useLoaderData() as QueryRef;
  const { data, error } = useReadQuery(queryRef);
  const { Articles: {docs: articles} } = data;
  return (
    <div className="flex flex-col items-center w-full m-2">
      {articles?.map((article, index) => (
        <a key={index} href={`/article/${article.id}`} className="mb-4 w-full">
          <TitleCard
            title={article.title}
            slug={article.subtitle}
            img={`http://172.20.10.3:3000${article.callout.value.url}`}
          ></TitleCard>
        </a>
      ))}
    </div>
  );
}

export default Home;
