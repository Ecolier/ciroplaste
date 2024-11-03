import { Link, useLocation } from "react-router-dom";

type LabeledLink = {
  iconElement: JSX.Element;
  label: string;
  href: string;
};

type NavigationListProps = {
  links: LabeledLink[];
};

function NavigationList({ links }: NavigationListProps) {
  const { pathname } = useLocation();
  return (
    <>
      {links.map((link, index) => (
        <Link key={index} to={link.href} className={`flex h-12 dark:text-chalk-200 px-6 items-center relative ${pathname === link.href && `before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-chalk-100 before:dark:bg-chalk-900 before:-z-10`}`}>
          {link.iconElement}
          {link.label}
        </Link>
      ))}
    </>
  );
}

export default NavigationList;
