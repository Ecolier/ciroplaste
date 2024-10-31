import IconButton, { IconButtonProps } from "../../components/icon-button";

const HeaderButton = ({ children, className, ...props }: IconButtonProps) => (
  <IconButton
    {...props}
    className={`${className} text-chalk-600 hover:text-chalk-900 focus:bg-chalk-200 active:bg-chalk-200 hover:bg-chalk-100
      dark:text-chalk-300 dark:hover:text-chalk-200 dark:focus:bg-chalk-800 dark:active:bg-chalk-800 dark:hover:bg-chalk-900`}
  >
    {children}
  </IconButton>
);

export default HeaderButton;
