import IconButton, { IconButtonProps } from "../icon-button";

function HeaderButton({
  transparent,
  children,
  className,
  ...props
}: IconButtonProps & { transparent: boolean }) {
  return (
    <IconButton
      {...props}
      className={`${className} ${
        transparent
          ? `text-chalk-100 hover:text-chalk-50 focus:bg-chalk-200/25 active:bg-chalk-200/25 hover:bg-chalk-300/25`
          : `text-chalk-600 hover:text-chalk-700 focus:bg-chalk-200 active:bg-chalk-200 hover:bg-chalk-100 dark:text-chalk-300 dark:hover:text-chalk-200 dark:focus:bg-chalk-800 dark:active:bg-chalk-800 dark:hover:bg-chalk-900`
      }`}
    >
      {children}
    </IconButton>
  );
}

export default HeaderButton;
