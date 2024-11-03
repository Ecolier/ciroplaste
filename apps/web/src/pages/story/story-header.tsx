type StoryHeaderProps = {
  title: string;
  text: string;
  backgroundImageURL: string;
};

function StoryHeader(
  { title, text, backgroundImageURL }: StoryHeaderProps,
  ref,
) {
  return (
    <div
      ref={ref}
      className="top-0 w-full origin-top overflow-hidden fixed will-change-transform transform-gpu"
    >
      {/* <img
        src={backgroundImageURL}
        className="relative h-96 will-change-transform left-0 top-0 w-full object-cover transform-gpu"
      /> */}
    </div>
  );
}

export default StoryHeader;
