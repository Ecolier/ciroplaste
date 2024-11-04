type StoryHeaderProps = {
  title: string;
  text: string;
  backgroundImageURL: string;
};

function StoryHeader({ title, text, backgroundImageURL }: StoryHeaderProps) {
  return (
    <div className="sticky top-[calc(-50vh+64px)] flex h-[50vh] w-full flex-col items-center justify-center">
      <h1 className="text-chalk-50 mb-4 font-serif text-5xl">{title}</h1>
      <p className="text-chalk-50">{text}</p>
      <img
        src={backgroundImageURL}
        className="absolute top-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-t from-[black]/50" />
    </div>
  );
}

export default StoryHeader;
