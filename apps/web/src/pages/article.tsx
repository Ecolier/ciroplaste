import { QueryRef, useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import Card from "../components/card";
import { Article as ArticleModel, Media } from "@crp/types";
import ArticleOutline from "../features/article/article-outline";
import { createRef, RefObject, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useSpy from "../hooks/use-spy";
import FloatingOutline, {
  HeadingLink,
} from "../features/article/floating-outline";
import RichTextRenderer from "../features/article/article-renderer";

interface HeadingRefList {
  [key: string]: RefObject<HTMLHeadingElement>;
}

function Article() {
  const queryRef = useLoaderData() as QueryRef<{ Article: ArticleModel }>;
  const {
    data: { Article: article },
  } = useReadQuery<{ Article: ArticleModel }>(queryRef);
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const scrollTo = (key: number) =>
    contextSafe(() => {
      gsap.to(window, {
        duration: 0.2,
        scrollTo: { y: `#heading_${article.id}_${key}`, offsetY: 72 },
      });
    });
  const headingRefs = useRef<HeadingRefList>({});
  const [activeSpiedHeadings, setActiveSpiedHeadings] = useState<HeadingLink[]>(
    [],
  );
  useSpy({
    elementRefs: headingRefs.current,
    offset: 73,
    onFocus: (spiedElements) => {
      const headings = Object.entries(spiedElements).reduce(
        (arr, [key, { element }]) => {
          const childNode = element.childNodes[0];
          if (childNode !== null) {
            return [...arr, { id: key, text: childNode.nodeValue }];
          }
          return [...arr];
        },
        [],
      );
      setActiveSpiedHeadings(headings);
    },
  });
  return (
    <>
      <div className="pt-16"></div>
      <div className="flex flex-col items-center m-2" ref={container}>
        <FloatingOutline
          headings={activeSpiedHeadings}
          onClick={({ id }) => scrollTo(id)()}
        ></FloatingOutline>
        <main className="w-full">
          <div className="flex flex-col items-center w-full">
            <div className="mb-8 min-h-80 h-[25vh]">
              <Card
                title={article.title!}
                text={article.subtitle!}
                backgroundImageURL={`${(article.callout!.value as Media).url}`}
              />
            </div>
            <div className="mt-6 w-full max-w-2xl">
              <div className="mx-6 flex flex-col">
                <ArticleOutline
                  className="mb-8"
                  article={article}
                  onClick={(key) => scrollTo(key)()}
                ></ArticleOutline>
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
                      <p
                        key={key}
                        className="text-zinc-800 dark:text-zinc-300 mb-8"
                      >
                        {children}
                      </p>
                    ),
                    upload: ({ url, alt, key }) => (
                      <div key={key}>
                        <img
                          className="mb-2"
                          src={`${url}`}
                        ></img>
                        <p className="text-right text-zinc-600 dark:text-zinc-500 mb-8 text-sm">
                          {alt}
                        </p>
                      </div>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Article;
