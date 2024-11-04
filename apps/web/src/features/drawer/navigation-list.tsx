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
            `dark:text-chalk-200 relative flex h-12 items-center px-6 ${isActive ? `before:bg-chalk-100 before:dark:bg-chalk-900 before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-full before:w-full before:content-['']` : ``}`
          }
        >
          {link.iconElement}
          {link.label}
        </NavLink>
      ))}
    </>
  );
}

export default NavigationList;
