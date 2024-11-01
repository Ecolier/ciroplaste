import { PropsWithChildren } from "react";

interface HeaderSectionProps extends PropsWithChildren {
    justify?: 'start' | 'end';
}

function HeaderSection({ children, justify = 'start' }: HeaderSectionProps) {
  return (
    <section className={`inline-flex grow shrink basis-auto items-center min-w-0 py-2 px-3 ${justify === 'start' ? 'justify-start' : 'justify-end'}`}>
      { children }
    </section>
  );
}

export default HeaderSection;
