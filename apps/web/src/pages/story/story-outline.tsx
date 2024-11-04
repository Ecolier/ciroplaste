type StoryOutlineProps = {
  headings: { key: string | number; text: string }[];
  activeHeadingKeys: (string | number)[];
  onClick: (key: string | number) => void;
};

function StoryOutline({ headings, onClick }: StoryOutlineProps) {
  return (
    <div className="">
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
            <a className="text-chalk-800 dark:text-chalk-300">{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryOutline;
