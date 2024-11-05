import {
  forwardRef,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { RichText } from "../../types/rich-text-node";
import RichTextRenderer from "./rich-text-renderer";
import useSpy, { KeyedElements } from "../../hooks/use-spy";
import useDrawer from "../../features/drawer/drawer-context";
import StoryOutline from "./story-outline";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FloatingOutline from "./floating-outline";
import { Article, Media } from "@crp/types";
import StoryHeader from "./story-header";
import useOutlineSpy from "../../hooks/use-outline-spy";

type Heading = {
  key: string | number;
  element: HTMLHeadingElement;
};

type StoryReaderProps = {
  story: Article;
};

function StoryReader({ story }: StoryReaderProps) {
  const [headings, setHeadings] = useState<Element[]>([]);
  const [activeHeadings, setActiveHeadings] = useState<Element[]>([]);

  // Keep track of the header height to offset intersections accordingly
  const Header = forwardRef(StoryHeader);
  const [headerMinHeight, setHeaderMinHeight] = useState<number>(-1);
  const headerRef = useCallback((element: HTMLElement) => {
    if (element) {
      setHeaderMinHeight(
        parseFloat(getComputedStyle(element).height) +
          parseFloat(getComputedStyle(element).top),
      );
    }
  }, []);

  const { observe } = useOutlineSpy({
    onChange: setActiveHeadings
  });

  useEffect(() => headings.forEach((element) => observe(element)), [headings]);

  const addHeading = useCallback((element: HTMLHeadingElement) => {
    setHeadings((prevState) => [...prevState, element]);
  }, []);

  const { containerRef } = useDrawer();
  const { contextSafe } = useGSAP({ scope: containerRef });

  const scrollTo = (element: Element) =>
    contextSafe(() => {
      gsap.to(containerRef.current, {
        duration: 0.2,
        scrollTo: { y: `#${element.id}`, offsetY: (window.innerHeight / 2) - (element.getBoundingClientRect().height / 2)},
      });
    });

  return (
    <>
      <Header
        ref={headerRef}
        title={story.title!}
        text={story.subtitle!}
        backgroundImageURL={`${(story.callout!.value as Media).url}`}
      />
      <FloatingOutline headings={activeHeadings.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)} onClick={(element) => scrollTo(element)()} />
      <div className="-mt-12 lg:mx-8 lg:mt-0 lg:grid lg:max-w-5xl lg:grid-cols-3 lg:gap-4">
        <StoryOutline
          headings={headings}
          activeHeadings={activeHeadings.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)}
          onClick={(element) => scrollTo(element)()}
        />
        <div className="mx-6 mt-8 lg:col-span-2 lg:m-0 lg:mt-8">
          <RichTextRenderer
            document={story.content as RichText}
            components={{
              Heading({ children, key, Tag }) {
                return (
                  <Tag
                    ref={addHeading}
                    id={`heading_${key}`}
                    key={key}
                    className={`text-chalk-800 dark:text-chalk-300 ${Tag === "h1" ? "text-6xl font-medium max-md:text-4xl" : "text-4xl max-md:text-2xl"} mb-4`}
                  >
                    {children}
                  </Tag>
                );
              },
              Paragraph: ({ children, key }) => (
                <p
                  key={key}
                  className="text-chalk-800 dark:text-chalk-300 mb-8"
                >
                  {children}
                </p>
              ),
              Upload: ({ url, alt, key }) => (
                <div key={key}>
                  <img className="mb-2" src={`${url}`}></img>
                  <p className="text-chalk-600 dark:text-chalk-500 mb-8 text-right text-sm">
                    {alt}
                  </p>
                </div>
              ),
            }}
          />
        </div>
      </div>
    </>
  );
}

export default StoryReader;
