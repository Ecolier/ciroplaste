import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import StoriesList from "./stories-list";
import { useTranslation } from "react-i18next";
import useTransparentHeader from "../../features/header/use-transparent-header";

function Explore() {
  const { t } = useTranslation();
  const queryRef = useLoaderData() as QueryRef;
  const { data } = useReadQuery(queryRef);
  const {
    Articles: { docs: stories },
  } = data;
  useTransparentHeader(false);
  return (
    <div className="flex flex-col pt-[72px]">
      <StoriesList stories={stories} />
    </div>
  );
}

export default Explore;
