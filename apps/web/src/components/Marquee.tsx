import { PropsWithChildren } from "react";

function Marquee({ children }: PropsWithChildren) {
  return (
    <div className="absolute flex bg-orange-100 dark:bg-orange-800 select-none cursor-default top-0 -z-10 font-serif font-black h-full text-9xl text-black dark:text-white dark:text-opacity-5 text-opacity-5">
      <ul className="animate-marquee flex flex-col justify-around shrink-0 min-w-full">
        {children}
      </ul>
      <ul
        className="animate-marquee flex flex-col justify-around shrink-0 gap-4 min-w-full"
        aria-hidden="true"
      >
        {children}
      </ul>
    </div>
  );
}

export default Marquee;
