import { MouseEvent, PropsWithChildren } from "react";

export interface IconButtonProps extends PropsWithChildren {
  onClick?: (event: MouseEvent) => void;
  className?: string;
}

function IconButton({
  children,
  className,
  onClick = () => {},
}: IconButtonProps) {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`${className} flex relative items-center justify-center w-12 h-12 rounded-full`}
    >
      {children}
    </div>
  );
}

export default IconButton;
