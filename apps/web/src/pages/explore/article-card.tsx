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
      className={`flex flex-col rounded-3xl bg-chalk-900 w-full overflow-hidden`}
    >
    
      <img src={backgroundImageURL} className="p-2 rounded-3xl" />
      <div className="flex flex-col p-4">
        <span className="text-3xl text-chalk-100 mb-2">
          {title}
        </span>
        <span className="text-chalk-300">{text}</span>
        <span className="text-chalk-300">{new Date(createdAt).toDateString()}</span>
      </div>
    </div>
    </>
  );
}

export default StoryCard;
