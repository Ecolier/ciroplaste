"use client";

import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { RichText, RichTextNode, RootNode } from "../../../../types/rich-text-node";
import useDrawer from "../../../../components/drawer/use-drawer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useOutlineSpy from "./use-outline-spy";
import useRichTextRenderer from "./rich-text-renderer";
import useStoryParser from "./use-story-renderer";
import StoryOutline from "./story-outline";
import FloatingOutline from "./floating-outline";

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
            document.getElementById(id).getBoundingClientRect().height / 2,
        },
      });
    });

  const parsedStory = useStoryParser(rootNode);
  const headings = useMemo(
    () =>
      parsedStory
        .filter(
          (element) =>
            typeof element.type === "string" && element.type[0] === "h",
        )
        .map((element) => ({
          text: element.props.children
            .reduce((arr, curr) => [...arr, curr.props.children], [])
            .join(""),
          id: element.props.id,
        })),
    [parsedStory],
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
