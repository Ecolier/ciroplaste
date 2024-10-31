import { createRef, useEffect } from "react";

export interface HeadingLink {
  id: string | number;
  text: string;
}

interface FloatingOutlineProps {
  headings: HeadingLink[];
  onClick?: (heading: HeadingLink) => void;
}

function FloatingOutline({ headings, onClick }: FloatingOutlineProps) {
  const containerRef = createRef<HTMLDivElement>();
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current?.scrollWidth;
    }
  }, [headings, containerRef]);
  return (
    <div
      className={`fixed drop-shadow-sm top-16 w-full px-6 py-4 text-chalk-900 backdrop-blur-3xl bg-white/75 dark:bg-chalk-950/75 ${headings.length !== 0 ? `flex` : `hidden`}`}
    >
      <div
        className="flex scrollbar-hidden overflow-x-scroll"
        ref={containerRef}
      >
        {headings.map((heading, index) => {
          return (
            <div key={index} className="flex items-center flex-shrink-0">
              <span
                className={`dark:text-chalk-200 cursor-pointer text-chalk-900 ${headings[index + 1] ? `` : `font-semibold`} max-w-36 inline-block overflow-ellipsis whitespace-nowrap overflow-hidden`}
                onClick={() => onClick && onClick(heading)}
              >
                {heading.text}
              </span>
              {headings[index + 1] && (
                <span className="dark:text-chalk-200 text-chalk-700 material-symbols-rounded">
                  chevron_right
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FloatingOutline;
