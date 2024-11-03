import RichTextRenderer from "./rich-text-renderer";
import { Article as ArticleModel } from "@crp/types";
import { RichText } from "../../types/rich-text-node";
import { useEffect } from "react";

type StoryOutlineProps = {
  headings: { key: string | number; text: string }[];
  activeHeadingKeys: (string | number)[];
  onClick: (key: string | number) => void;
};

function StoryOutline({
  headings,
  activeHeadingKeys,
  onClick,
}: StoryOutlineProps) {

  return (
    <div className="">
      <p className="text-xs text-chalk-700 dark:text-chalk-400 mb-2">
        On this page
      </p>
      <ul>
        {headings.map(({ key, text }) => (
          <li
            key={key}
            className="flex items-center py-2 cursor-pointer"
            onClick={() => onClick(key)}
          >
            <a className="text-chalk-800 dark:text-chalk-300">{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryOutline;
