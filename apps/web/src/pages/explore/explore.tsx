import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import StoriesList from "./stories-list";
import useTransparentHeader from "../../features/header/use-transparent-header";

function Explore() {
  const queryRef = useLoaderData() as QueryRef;
  const { data } = useReadQuery(queryRef);
  const {
    Articles: { docs: stories },
  } = data;
  useTransparentHeader(false);
  return (
    <div className="flex flex-col pt-[72px] md:m-4 md:grid md:grid-cols-2 md:gap-4 md:pt-0">
      <StoriesList stories={stories} />
    </div>
  );
}

export default Explore;
