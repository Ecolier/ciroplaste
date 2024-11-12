type StoryHeaderProps = {
  title: string;
  text: string;
  backgroundImageURL: string;
  tooltip: JSX.Element;
};

function StoryHeader({ title, text, backgroundImageURL, tooltip }: StoryHeaderProps) {
  return (
    <div className="z-10 sticky top-[calc(-50vh+128px)] flex h-[50vh] w-full flex-col items-center justify-center md:-top-[16.665vh] md:h-[33.333vh]">
      <div className="sticky flex flex-col items-center justify-center md:top-0 md:h-[16.665vh]">
        <h1 className="text-chalk-50 font-serif text-5xl text-[4.9998vh] mb-[1.6665vh] text-center">{title}</h1>
        <p className="text-chalk-50 text-[2.083vh]">{text}</p>
      </div>
      <div className="absolute bottom-0 right-0 m-3">{tooltip}</div>
      <img
        src={backgroundImageURL}
        className="absolute top-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-t from-[black]/50" />
    </div>
  );
}

export default StoryHeader;
