import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import StoriesList from "./stories-list";

function Explore() {
  const queryRef = useLoaderData() as QueryRef;
  const { data } = useReadQuery(queryRef);
  const {
    Articles: { docs: stories },
  } = data;
  return (
    <div className="flex flex-col m-4 min-h-32">
      <span className="text-6xl font-bold mb-6 text-chalk-900 dark:text-chalk-100">
        Latest
      </span>
      <StoriesList stories={stories} />
    </div>
  );
}

export default Explore;
