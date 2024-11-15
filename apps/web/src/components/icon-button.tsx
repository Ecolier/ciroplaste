"use client";

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
      className={`${className} relative flex h-12 w-12 items-center justify-center rounded-full`}
    >
      {children}
    </div>
  );
}

export default IconButton;
