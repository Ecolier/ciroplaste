import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import StoriesList from "./stories-list";
import useTransparentHeader from "../../components/header/use-transparent-header";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/header";

function Explore() {
  const queryRef = useLoaderData() as QueryRef;
  const { data } = useReadQuery(queryRef);
  const {
    Stories: { docs: stories },
  } = data;
  useTransparentHeader(false);
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="flex flex-col pt-[64px] md:m-4 md:grid md:grid-cols-2 md:gap-4 md:pt-0">
        <div className="col-span-2 m-6 flex justify-between">
          <h1 className="text-4xl dark:text-chalk-200 text-chalk-600">{t('Explore')}</h1>
        </div>
        <StoriesList stories={stories} />
      </div>
    </>
  );
}

export default Explore;
