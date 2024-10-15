import { MouseEvent, PropsWithChildren } from "react";

interface IconButtonProps extends PropsWithChildren {
  onClick?: (event: MouseEvent) => void;
}

function IconButton({ children, onClick = () => {} }: IconButtonProps) {
  return (
    <div
      role="button"
      onClick={onClick}
      className="flex relative items-center justify-center w-12 h-12 rounded-full 
      text-zinc-600 hover:text-zinc-900 focus:bg-zinc-200 active:bg-zinc-200 hover:bg-zinc-100
      dark:text-zinc-300 dark:hover:text-zinc-200 dark:focus:bg-zinc-800 dark:active:bg-zinc-800 dark:hover:bg-zinc-900"
    >
      {children}
    </div>
  );
}

export default IconButton;
