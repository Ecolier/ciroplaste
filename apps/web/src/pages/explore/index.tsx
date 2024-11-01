import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import StoriesList from "./stories-list";
import HeaderContext from "../../features/header/header-context";
import { useContext, useEffect } from "react";
import FooterContext from "../../features/footer/footer-context";

function Explore() {
  const { setFullscreen, setTransparent } = useContext(HeaderContext);
  const { setFloating } = useContext(FooterContext);

  useEffect(() => {
    setFullscreen(false);
    setTransparent(false);
    setFloating(false);
  });
  const queryRef = useLoaderData() as QueryRef;
  const { data } = useReadQuery(queryRef);
  const {
    Articles: { docs: stories },
  } = data;
  return (
    <div className="flex flex-col m-4 min-h-vh pt-[72px]">
      <span className="text-6xl font-bold mb-6 text-chalk-900 dark:text-chalk-100">
        Latest
      </span>
      <StoriesList stories={stories} />
    </div>
  );
}

export default Explore;
