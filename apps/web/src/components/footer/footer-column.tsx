import { Link } from "react-router-dom";

type FooterColumnLink = {
  label: string;
  url: string;
  external?: boolean;
};

type FooterColumnProps = {
  title: string;
  links: FooterColumnLink[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <ul className="mt-2 flex flex-col gap-y-4">
      <li className="text-chalk-700 dark:text-chalk-400 text-sm">{title}</li>
      {links.map((link, index) => (
        <li key={index}>
          {link.external !== undefined && link.external === true ? (
            <a
              href={link.url}
              target="_blank"
              className="text-iris-500 dark:text-iris-400 underline"
              rel="noopener noreferrer"
            >
              {" "}
              {link.label}{" "}
            </a>
          ) : (
            <Link to={link.url}>
              <span className="text-iris-500 dark:text-iris-400 underline">
                {link.label}
              </span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default FooterColumn;
