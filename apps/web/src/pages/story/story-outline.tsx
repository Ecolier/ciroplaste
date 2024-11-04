type StoryOutlineProps = {
  headings: { key: string | number; text: string }[];
  activeHeadingKeys: (string | number)[];
  onClick: (key: string | number) => void;
};

function StoryOutline({ headings, activeHeadingKeys, onClick }: StoryOutlineProps) {
  return (
    <div className="lg:top-[128px] lg:pt-8 lg:sticky lg:h-fit m-8 lg:m-0">
      <p className="text-chalk-700 dark:text-chalk-400 mb-2 text-xs">
        On this page
      </p>
      <ul>
        {headings.map(({ key, text }) => (
          <li
            key={key}
            className="flex cursor-pointer items-center py-2"
            onClick={() => onClick(key)}
          >
            <a className={`text-chalk-800 dark:text-chalk-300 ${activeHeadingKeys.at(-1) === key.toString() ? `font-bold` : ``}`}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryOutline;
