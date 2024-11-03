type StoryHeaderProps = {
  title: string;
  text: string;
  backgroundImageURL: string;
};

function StoryHeader({ title, text, backgroundImageURL }: StoryHeaderProps) {
  return (
    <div className="sticky top-[calc(-50vh+64px)] h-[50vh] w-full flex flex-col items-center justify-center">
      <h1 className="font-serif text-chalk-50 text-5xl mb-4">{title}</h1>
      <p className="text-chalk-50">{text}</p>
      <img
        src={backgroundImageURL}
        className="absolute -z-10 top-0 object-cover h-full w-full"
      />
      <div className="absolute -z-10 left-0 top-0 w-full h-full bg-gradient-to-t from-[black]/50" />
    </div>
  );
}

export default StoryHeader;
