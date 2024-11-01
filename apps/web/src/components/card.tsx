interface CardProps {
  title: string;
  text: string;
  backgroundImageURL: string;
}

function Card({ title, text, backgroundImageURL }: CardProps) {
  return (
    <div
      className={`h-full justify-center flex flex-col p-14 bg-cover bg-center w-full`}
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
    >
      <h1 className="max-md:text-6xl font-serif text-center text-8xl font-semibold mb-4 text-chalk-100">
        {title}
      </h1>
      <h2 className="text-1xl text-chalk-100 text-center">{text}</h2>
    </div>
  );
}

export default Card;
