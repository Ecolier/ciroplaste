import { useEffect, useMemo, useState } from "react";
import FloatingOutline from "./floating-outline";
import useOutlineSpy from "./use-outline-spy";

type StoryOutlineProps = {
  headings: { text: string; id: string }[];
  onClick: (id: string) => void;
};

function StoryOutline({ headings, onClick }: StoryOutlineProps) {
  const [activeHeadings, setActiveHeadings] = useState<
    { text: string; id: string }[]
  >([]);

  const { observe } = useOutlineSpy({
    onChange: setActiveHeadings,
  });

  useEffect(
    () => headings.forEach(({ id }) => observe(document.getElementById(id))),
    [headings],
  );

  const sortedHeadings = useMemo(
    () =>
      activeHeadings.sort(
        (a, b) =>
          document.getElementById(a.id).getBoundingClientRect().top -
          document.getElementById(b.id).getBoundingClientRect().top,
      ),
    [activeHeadings],
  );

  return (
    <>
      <FloatingOutline headings={sortedHeadings} onClick={onClick} />
      <div className="m-8 lg:sticky lg:top-[16.665vh] lg:m-0 lg:h-fit lg:pt-8">
        <p className="text-chalk-700 dark:text-chalk-400 mb-2 text-xs">
          On this page
        </p>
        <ul>
          {headings.map(({ text, id }, index) => (
            <li
              key={index}
              className="flex cursor-pointer items-center py-2"
              onClick={() => onClick(id)}
            >
              <a
                className={`text-chalk-800 dark:text-chalk-300 ${id === activeHeadings.at(-1)?.id ? `font-bold` : ``}`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StoryOutline;
