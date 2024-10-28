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
    <ul className="flex flex-col mt-2 gap-y-4">
      <li className="text-zinc-700 dark:text-zinc-400 text-sm">{title}</li>
      {links.map((link, index) => (
        <li key={index}>
          {link.external !== undefined && link.external === true ? (
            <a
              href={link.url}
              target="_blank"
              className="text-blue-700 dark:text-blue-400 underline"
              rel="noopener noreferrer"
            >
              {" "}
              {link.label}{" "}
            </a>
          ) : (
            <Link to={link.url}><span className="text-blue-700 dark:text-blue-400 underline">{link.label}</span></Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default FooterColumn;
