import RichTextRenderer from "../components/RichTextRenderer";
import { Article as ArticleModel } from "@crp/types";
import { RichText } from "../types/richTextNode";
import { createRef, Ref, useEffect, useRef, useState } from "react";

interface ArticleRendererProps {
  article: ArticleModel;
}

interface HeadingRefList {
  [key: string]: Ref<HTMLHeadingElement>;
}

type HeadingRectPair = [el: HTMLHeadingElement, rect: DOMRect];

type HeadingRectList = {
  [key: string]: HeadingRectPair[];
};

function ArticleRenderer({ article }: ArticleRendererProps) {
  const headingRefs = useRef<HeadingRefList>({});
  const [fixedHeadings, setFixedHeadings] = useState({});
  useEffect(() => {
    const createdMap = new Map();

    const format = (objects) =>
      Object.entries(objects).map(([key, ref]) => {
        const element = ref.current as HTMLHeadingElement;
        const elementTag = element.tagName;
        const elementBounds = element.getBoundingClientRect();
        return [parseInt(key), elementTag, elementBounds.y, element];
      });

    const findNext = (objects, key, tag) =>
      objects.find(
        ([matchingKey, matchingTag]) =>
          matchingTag === tag && matchingKey !== key && matchingKey > key,
      );

    const findNextNoTag = (objects, key) =>
      objects.find(
        ([matchingKey, matchingTag]) =>
          matchingKey !== key && matchingKey > key,
      );

    const data = format(headingRefs.current).reduce(
      (map, [key, elementTag, elementY, element]) => {
        const matching = findNext(format(headingRefs.current), key, elementTag);
        const [matchingKey, matchingTag, matchingY, matchingEl] = matching
          ? matching
          : [];
        const endY = matchingY ?? Infinity;
        const containedBy = format(headingRefs.current).filter(
          ([matchingKey, matchingTag, my]) => {
            const matching = findNext(
              format(headingRefs.current),
              matchingKey,
              matchingTag,
            );
            const [endKey, endTag, yEnd, matchingEl] = matching ? matching : [];
            const endYa = yEnd ?? Infinity;
            return elementY > my && elementY < endYa;
          },
        );

        let final = endY;
        if (endY === Infinity) {
          const temp = findNextNoTag(format(headingRefs.current), key);
          const [_z, _é, _da] = temp ? temp : [];
          final = _da;
        }

        if (final === undefined) {
          final = Infinity;
        }

        map.set(
          [elementY, final],
          [...containedBy, [key, elementTag, elementY, element]],
        );
        return map;
      },
      createdMap,
    );

    const fff = Array.from(data).flatMap(([key, _]) => {
      return key;
    });
    const globalMinY = Math.min(...fff);
    const globalMaxY = Math.max(...fff);

    document.addEventListener("scroll", (ev) => {
      if (window.scrollY > globalMinY && window.scrollY < globalMaxY) {
        Array.from(data).forEach(([[minY, maxY], val]) => {
          if (window.scrollY > minY && window.scrollY < maxY) {
            setFixedHeadings((prevState) => {
              return val;
            });
          }
        });
      } else {
        setFixedHeadings((prevState) => {
          return {};
        });
      }
    });
  }, []);
  return (
    <div className="mt-6">
      <div
        className={`fixed overflow-x-scroll w-full top-16 left-0 px-8 py-4 bg-white dark:bg-zinc-950 ${Object.entries(fixedHeadings).length !== 0 ? `flex` : `hidden`}`}
      >
        {Object.entries(fixedHeadings).map(([k, v], index) => {
          return (
            <>
              <span className="dark:text-zinc-200 text-zinc-700 flex-shrink-0">
                {v[3].childNodes[0].nodeValue}
              </span>
              <span className="dark:text-zinc-200 text-zinc-700 material-symbols-rounded flex-shrink-0">
                chevron_right
              </span>
            </>
          );
        })}
      </div>
      <RichTextRenderer
        document={article.content as RichText}
        components={{
          heading({ children, key, Tag }) {
            const ref = createRef<HTMLHeadingElement>();
            headingRefs.current[key] = ref;
            return (
              <Tag
                ref={ref}
                id={`heading_${article.id}_${key}`}
                key={key}
                className={`text-zinc-800 dark:text-zinc-300 ${Tag === "h1" ? "max-md:text-4xl text-6xl font-medium" : "max-md:text-2xl text-4xl"} mb-4`}
              >
                {children}
              </Tag>
            );
          },
          paragraph: ({ children, key }) => (
            <p key={key} className="text-zinc-800 dark:text-zinc-300 mb-8">
              {children}
            </p>
          ),
          upload: ({ url, alt, key }) => (
            <div key={key}>
              <img className="mb-2" src={`http://172.20.10.3:3000${url}`}></img>
              <p className="text-right text-zinc-600 dark:text-zinc-500 mb-8 text-sm">
                {alt}
              </p>
            </div>
          ),
        }}
      />
    </div>
  );
}

export default ArticleRenderer;
