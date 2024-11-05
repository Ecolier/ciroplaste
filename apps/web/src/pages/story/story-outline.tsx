type StoryOutlineProps = {
  headings: Element[];
  activeHeadings: Element[];
  onClick: (element: Element) => void;
};

function StoryOutline({ headings, activeHeadings, onClick }: StoryOutlineProps) {
  return (
    <div className="lg:top-[16.665vh] lg:pt-8 lg:sticky lg:h-fit m-8 lg:m-0">
      <p className="text-chalk-700 dark:text-chalk-400 mb-2 text-xs">
        On this page
      </p>
      <ul>
        {headings.map((heading, index) => (
          <li
            key={index}
            className="flex cursor-pointer items-center py-2"
            onClick={() => onClick(heading)}
          >
            <a className={`text-chalk-800 dark:text-chalk-300 ${heading.id === activeHeadings.at(-1)?.id ? `font-bold` : ``}`}>{heading.childNodes[0].nodeValue}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryOutline;
