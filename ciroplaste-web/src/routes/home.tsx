import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import TitleCard from "../components/TitleCard";

function Home() {
  const queryRef = useLoaderData() as QueryRef;
  const { data, error } = useReadQuery(queryRef);
  const { posts } = data;
  return (
    <div className="flex flex-col items-center w-full m-2">
      {posts?.map((post, index) => (
        <a key={index} href={`/article/${post.id}`} className='mb-4'>
          <TitleCard
            title={post.title}
            slug={post.slug}
            img={post.image.url}
          ></TitleCard>
        </a>
      ))}
    </div>
  );
}

export default Home;
