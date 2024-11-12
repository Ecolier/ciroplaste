import { NavLink } from "react-router-dom";
import useDrawer from "./drawer-context";

type LabeledLink = {
  iconElement: JSX.Element;
  label: string;
  href: string;
};

type NavigationListProps = {
  links: LabeledLink[];
};

function NavigationList({ links }: NavigationListProps) {
  const drawer = useDrawer();
  return (
    <>
      {links.map((link, index) => (
        <NavLink
          key={index}
          onClick={() => drawer.toggle()}
          to={link.href}
          className={({ isActive }) =>
            `dark:text-chalk-200 relative flex md:flex-col md:text-xs md:justify-center max-md:h-12 items-center max-md:px-6 md:p-4 ${isActive ? `before:bg-chalk-200 before:dark:bg-chalk-800 before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-full before:w-full before:content-['']` : ``}`
          }
        >
          {link.iconElement}
          <span>{link.label}</span>
        </NavLink>
      ))}
    </>
  );
}

export default NavigationList;
