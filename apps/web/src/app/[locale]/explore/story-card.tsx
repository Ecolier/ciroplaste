import Image from "next/image";

interface StoryCardProps {
  title: string;
  text: string;
  createdAt: string;
  backgroundImageURL: string;
}

const assetsBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;

function StoryCard({
  title,
  text,
  createdAt,
  backgroundImageURL,
}: StoryCardProps) {
  return (
    <>
      <div className={`relative flex w-full flex-col`}>
        <div className="min-h-96 relative">
          <Image alt="@todo" src={`${backgroundImageURL}`} className="object-cover" fill={true} priority={true} unoptimized />
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-[black]/65" />
        <div className="absolute bottom-0 flex flex-col p-4">
          <span className="text-chalk-100 font-serif text-lg font-bold uppercase">
            {title}
          </span>
          <span className="text-chalk-100 mb-4 text-sm">
            {new Date(createdAt).toDateString()}
          </span>
          <span className="text-chalk-100 text-sm">{text}</span>
        </div>
      </div>
    </>
  );
}

export default StoryCard;
