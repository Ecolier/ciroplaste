type StoryHeaderProps = {
  title: string;
  text: string;
  backgroundImageURL: string;
};

function StoryHeader({ title, text, backgroundImageURL }: StoryHeaderProps, ref) {
  return (
    <div ref={ref} className="sticky top-[calc(-50vh+64px)] flex h-[50vh] w-full flex-col items-center justify-center md:-top-[16.665vh] md:h-[33.333vh]">
      <div className="sticky flex flex-col items-center justify-center md:top-0 md:h-[16.665vh]">
        <h1 className="text-chalk-50 mb-4 font-serif text-5xl">{title}</h1>
        <p className="text-chalk-50">{text}</p>
      </div>
      <img
        src={backgroundImageURL}
        className="absolute top-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-t from-[black]/50" />
    </div>
  );
}

export default StoryHeader;
