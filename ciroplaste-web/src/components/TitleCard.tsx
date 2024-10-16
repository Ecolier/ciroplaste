interface TitleCardProps {
  title: string;
  slug: string;
  img: string;
}

function TitleCard({ title, slug, img }: TitleCardProps) {
  return (
    <div
      className={`max-md:p-8 items-center flex flex-col p-14 rounded-3xl bg-zinc-500 bg-cover bg-center bg-blend-soft-light w-full`}
      style={{backgroundImage: `url(${img})`}}
    >
      <h1 className="max-md:text-6xl font-serif text-center text-8xl font-semibold mb-4 text-zinc-100">
        {title}
      </h1>
      <h2 className="text-1xl text-zinc-100 text-center">{slug}</h2>
    </div>
  );
}

export default TitleCard;
