import { useMemo } from "react";
import { Fragment } from "react/jsx-runtime";
import { RichTextNode } from "../../../../types/rich-text-node";
import Image from "next/image";

const useStoryParser = (root: RichTextNode) =>
  useMemo(() => root.children!.flatMap(function loop(node, index) {
    if (node.type === "upload") {
      return (
        <div key={index}>
          <Image alt="@todo" className="mb-2" src={`${node.value.url}`} />
          <p className="text-chalk-600 dark:text-chalk-500 mb-8 text-right text-sm">
            {node.value.alt}
          </p>
        </div>
      );
    }
    const children = node.children;
    if (node.type === "text") {
      if (node.format === 1) {
        return <strong key={index}>{node.text}</strong>;
      }
      if (node.format === 2) {
        return <em key={index}>{node.text}</em>;
      }
      if (node.format === 8) {
        return <u key={index}>{node.text}</u>;
      }
      if (node.format === 4) {
        return <s key={index}>{node.text}</s>;
      }
      return <Fragment key={index}>{node.text}</Fragment>;
    }
    if (children && children.length !== 0) {
      const fragments = children.flatMap(loop);
      switch (node.type) {
        case "heading":
          return (
            <node.tag
              id={`heading_${index}`}
              key={index}
              className={`text-chalk-800 dark:text-chalk-300 ${node.tag === "h1" ? "text-4xl font-medium" : "text-2xl"} mb-4`}
            >
              {fragments}
            </node.tag>
          );
        case "paragraph":
          return (
            <p
              key={index}
              className="text-chalk-800 dark:text-chalk-300 mb-8"
            >
              {fragments}
            </p>
          );
      }
    }
    return <Fragment key={index}></Fragment>;
  }), [root]
) 

export default useStoryParser;
