import { Link } from "@/i18n/routing";
import useDrawer from "./use-drawer";

type LabeledLink = {
  iconElement: JSX.Element;
  label: string;
  href: string;
};

type NavigationListProps = {
  links: LabeledLink[];
};

function DrawerList({ links }: NavigationListProps) {
  const drawer = useDrawer();
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          onClick={() => drawer.toggle()}
          href={link.href}
          className={`dark:text-chalk-200 relative flex md:flex-col md:text-xs md:justify-center max-md:h-12 items-center max-md:px-6 md:p-4`}
        >
          {link.iconElement}
          <span>{link.label}</span>
        </Link>
      ))}
    </>
  );
}

export default DrawerList;
