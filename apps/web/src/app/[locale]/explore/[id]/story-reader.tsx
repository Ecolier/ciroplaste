"use client";

import React, { useMemo } from "react";
import { RootNode } from "@/types/rich-text-node";
import useDrawer from "@/components/drawer/use-drawer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useStoryParser from "./use-story-renderer";
import StoryOutline from "./story-outline";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

type StoryReaderProps = {
  rootNode: RootNode;
};

function StoryReader({ rootNode }: StoryReaderProps) {
  const { containerRef } = useDrawer();
  const { contextSafe } = useGSAP({ scope: containerRef });

  const scrollTo = (id: string) =>
    contextSafe(() => {
      gsap.to(containerRef.current, {
        duration: 0.2,
        scrollTo: {
          y: `#${id}`,
          offsetY:
            window.innerHeight / 2 -
            document.getElementById(id)!.getBoundingClientRect().height / 2,
        },
      });
    });

  const parsedStory = useStoryParser(rootNode);
  const headings = useMemo(
    () =>
      parsedStory
        .filter(
          (element) =>
            typeof element.type === "string" && element.type[0] === "h"
        )
        .map((element) => ({
          text: (element.props.children as React.JSX.Element[])
            .reduce((arr, curr) => [...arr, curr.props.children], [] as React.JSX.Element[])
            .join(""),
          id: element.props.id,
        })),
    [parsedStory]
  );

  return (
    <>
      <div className="-mt-12 lg:mx-8 lg:mt-0 lg:grid lg:max-w-5xl lg:grid-cols-3 lg:gap-4 w-full">
        <StoryOutline
          headings={headings}
          onClick={(element) => scrollTo(element)()}
        />
        <div className="mx-6 mt-8 lg:col-span-2 lg:m-0 lg:mt-8">
          {parsedStory}
        </div>
      </div>
    </>
  );
}

export default StoryReader;
