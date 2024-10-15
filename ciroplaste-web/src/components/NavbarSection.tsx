import { PropsWithChildren } from "react";

interface NavbarSectionProps extends PropsWithChildren {
    justify?: 'start' | 'end';
}

function NavbarSection({ children, justify = 'start' }: NavbarSectionProps) {
  return (
    <section className={`inline-flex grow shrink basis-auto items-center min-w-0 py-2 px-3 justify-${justify} ${justify === 'start' ? 'order-first' : 'order-last'}`}>
      { children }
    </section>
  );
}

export default NavbarSection;
