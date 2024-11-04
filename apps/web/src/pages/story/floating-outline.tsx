import { createRef, useEffect } from "react";

type FloatingOutlineProps = {
  headings: { key: string | number; text: string }[];
  onClick: (key: string | number) => void;
};

function FloatingOutline({ headings, onClick }: FloatingOutlineProps) {
  const containerRef = createRef<HTMLDivElement>();
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current?.scrollWidth;
    }
  }, [headings, containerRef]);
  return (
    <div
      className={`lg:hidden text-chalk-900 bg-chalk-100/90 dark:bg-chalk-900/90 sticky left-0 top-16 md:top-[16.665vh] flex h-12 w-full px-6 backdrop-blur-lg ${headings.length !== 0 ? `flex` : `invisible`}`}
    >
      <div
        className="scrollbar-hidden flex overflow-x-scroll"
        ref={containerRef}
      >
        {headings.map((heading, index) => {
          return (
            <div key={index} className="flex flex-shrink-0 items-center">
              <span
                className={`dark:text-chalk-200 text-chalk-900 cursor-pointer text-sm ${headings[index + 1] ? `` : `font-semibold`} inline-block max-w-36 overflow-hidden overflow-ellipsis whitespace-nowrap`}
                onClick={() => onClick(heading.key)}
              >
                {heading.text}
              </span>
              {headings[index + 1] && (
                <span className="dark:text-chalk-200 text-chalk-700 material-symbols-rounded text-sm">
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
