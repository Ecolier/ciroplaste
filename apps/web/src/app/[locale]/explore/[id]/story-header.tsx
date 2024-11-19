import Image from "next/image";

type StoryHeaderProps = {
  title: string;
  text: string;
  backgroundImageURL: string;
};

function StoryHeader({
  title,
  text,
  backgroundImageURL,
}: StoryHeaderProps) {
  return (
    <div className="md:sticky relative flex h-[50vh] w-full flex-col items-center justify-center md:-top-[16.665vh] md:h-[33.333vh]">
      <div className="sticky flex flex-col items-center justify-center md:top-0 md:h-[16.665vh]">
        <h1 className="text-chalk-50 mb-[1.6665vh] text-center font-serif text-5xl text-[4.9998vh]">
          {title}
        </h1>
        <p className="text-chalk-50 text-[2.083vh]">{text}</p>
      </div>
      <div className="absolute top-0 -z-10 h-full w-full">
        <Image
          alt="@todo"
          src={`${backgroundImageURL}`}
          className="object-cover"
          fill={true}
          priority={true}
          unoptimized
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-t from-[black]/50" />
    </div>
  );
}

export default StoryHeader;
