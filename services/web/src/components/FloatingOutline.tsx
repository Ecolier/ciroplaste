export interface HeadingLink {
  id: string | number;
  text: string;
}

interface FloatingOutlineProps {
  headings: HeadingLink[];
  onClick?: (heading: HeadingLink) => void;
}

function FloatingOutline({ headings, onClick }: FloatingOutlineProps) {
  return (
    <div
      className={`fixed overflow-x-scroll w-full top-16 left-0 px-8 py-4 bg-white dark:bg-zinc-950 ${headings.length !== 0 ? `flex` : `hidden`}`}
    >
      {headings.map((heading, index) => {
        return (
          <div key={index} className="flex items-center flex-shrink-0">
            <span className="dark:text-zinc-200 text-zinc-700" onClick={() => onClick && onClick(heading)}>{heading.text}</span>
            {headings[index + 1] && (
              <span className="dark:text-zinc-200 text-zinc-700 material-symbols-rounded">
                chevron_right
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FloatingOutline;
