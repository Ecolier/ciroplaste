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
      className={`sticky top-16 left-0 w-full flex px-6 h-12 text-chalk-900 bg-chalk-100/90 dark:bg-chalk-900/90 backdrop-blur-lg ${headings.length !== 0 ? `flex` : `invisible`}`}
    >
      <div
        className="flex scrollbar-hidden overflow-x-scroll"
        ref={containerRef}
      >
        {headings.map((heading, index) => {
          return (
            <div key={index} className="flex items-center flex-shrink-0">
              <span
                className={`dark:text-chalk-200 cursor-pointer text-sm text-chalk-900 ${headings[index + 1] ? `` : `font-semibold`} max-w-36 inline-block overflow-ellipsis whitespace-nowrap overflow-hidden`}
                onClick={() => onClick(heading.key)}
              >
                {heading.text}
              </span>
              {headings[index + 1] && (
                <span className="dark:text-chalk-200 text-sm text-chalk-700 material-symbols-rounded">
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
