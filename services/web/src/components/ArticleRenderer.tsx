import RichTextRenderer from "../components/RichTextRenderer";
import { Article as ArticleModel } from "@crp/types";
import { RichText } from "../types/richTextNode";
import { createRef, useEffect, useRef, useState } from "react";

interface ArticleRendererProps {
  article: ArticleModel;
}

function ArticleRenderer({ article }: ArticleRendererProps) {
  const headingRefs = useRef(new Map<Number, React.Ref<HTMLHeadingElement>>());
  const [fixedHeadings, setFixedHeadings] = useState({})
  useEffect(() => {
    const data = Array.from(headingRefs.current.entries()).reduce((acc, [key, ref], index) => {
        const level = ref.current.tagName.match(/\d+/)[0]
        const rects = ref.current.getClientRects();

        let tupleForLevel = [];
        if (acc[level] && acc[level].length !== 0) {
          tupleForLevel = acc[level];
        }
        const rectsAcc = [...tupleForLevel, [ref.current, rects]]

        return {...acc, [level]: rectsAcc};
      }, {})
    document.addEventListener("scroll", (ev) => {
      Object.entries(data).forEach(([level, tupleList], index) => {
        tupleList.forEach(([el, rects], i) => {
          const next = tupleList[i + 1];
          let ret = {}
          if (!next) {
            for (const firstR of rects) {
                if(window.scrollY > firstR.y) {
                  ret = {...ret, [level]: el.childNodes[0].nodeValue}
                } else {
                  setFixedHeadings((prevState) => {
                    const {[level]: remove, ...rest} = prevState;
                    ret = rest;
                  })
                }
            }
          }
          if (next) {
            const [nextEl, nextRec] = next;
            for (const firstR of rects) {
              for (const secR of nextRec) {
                if(window.scrollY > firstR.y && window.scrollY < secR.y) {
                  ret = {...ret, [level]: el.childNodes[0].nodeValue}
                } else {
                  setFixedHeadings((prevState) => {
                    const {[level]: remove, ...rest} = prevState;
                    return rest;
                  })
                }
              }
            }
          }
          setFixedHeadings((prevState) => ({...prevState, ...ret}))
        })
      })
    });
  }, []);
  return (
    <div className="mt-6">
      <div className={`fixed w-full top-16 left-0 px-8 py-4 bg-white dark:bg-zinc-950 ${Object.entries(fixedHeadings).length !== 0 ? `flex` : `hidden`}`}>
        {Object.entries(fixedHeadings).map(([k, v], index) => {
          console.log(k, v)
          return <>
            <span className="dark:text-zinc-200 text-zinc-700">{v}</span>
            <span className="dark:text-zinc-200 text-zinc-700 material-symbols-rounded">chevron_right</span>
          </>
        }
        )}
      </div>
      <RichTextRenderer
        document={article.content as RichText}
        components={{
          heading({ children, key, Tag }) {
            headingRefs.current.set(key, createRef());
            return (
              <Tag
                ref={headingRefs.current.get(key)}
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
