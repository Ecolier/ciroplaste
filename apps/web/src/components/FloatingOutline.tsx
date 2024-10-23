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
      containerRef.current.scrollLeft = containerRef.current?.scrollWidth
    }
  }, [headings]);
  return (
    <div
      className={`fixed rounded-3xl drop-shadow-sm bottom-8 left-2 right-2 px-6 py-4 bg-slate-300 text-slate-950 dark:bg-slate-600 ${headings.length !== 0 ? `flex` : `hidden`}`}
    >
      <div className="flex scrollbar-hidden overflow-x-scroll" ref={containerRef}>
      {headings.map((heading, index) => {
        return (
          <div key={index} className="flex items-center flex-shrink-0">
            <span className={`dark:text-zinc-200 cursor-pointer text-zinc-900 ${headings[index + 1] ? `` : `font-semibold`}`} onClick={() => onClick && onClick(heading)}>{heading.text}</span>
            {headings[index + 1] && (
              <span className="dark:text-zinc-200 text-zinc-700 material-symbols-rounded">
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
