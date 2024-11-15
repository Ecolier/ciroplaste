import { PropsWithChildren } from "react";

interface HeaderSectionProps extends PropsWithChildren {
  justify?: "start" | "end";
}

function HeaderSection({ children, justify = "start" }: HeaderSectionProps) {
  return (
    <section
      className={`inline-flex min-w-0 shrink grow basis-auto items-center px-3 py-2 ${
        justify === "start" ? "justify-start" : "justify-end"
      }`}
    >
      {children}
    </section>
  );
}

export default HeaderSection;
