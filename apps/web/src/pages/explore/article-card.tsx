interface StoryCardProps {
  title: string;
  text: string;
  createdAt: string;
  backgroundImageURL: string;
}

function StoryCard({
  title,
  text,
  createdAt,
  backgroundImageURL,
}: StoryCardProps) {
  return (
    <>
      <div
        className={`flex flex-col w-full relative`}
      >
        <img src={backgroundImageURL} className="min-h-96 object-cover" />
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-chalk-950/75" />
        <div className="flex flex-col p-4 absolute bottom-0">
          <span className="text-lg font-bold text-chalk-100 font-serif uppercase">{title}</span>
          <span className="text-sm text-chalk-100 mb-4">
            {new Date(createdAt).toDateString()}
          </span>
          <span className="text-sm text-chalk-100">{text}</span>
        </div>
      </div>
    </>
  );
}

export default StoryCard;
