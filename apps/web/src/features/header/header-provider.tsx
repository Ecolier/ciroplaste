import { PropsWithChildren } from "react";
import { HeaderContext } from "./header-context";

type HeaderProviderProps = PropsWithChildren & {
  transparent?: boolean;
};

function HeaderProvider({
  transparent = false,
  children,
}: HeaderProviderProps) {
  return (
    <HeaderContext.Provider value={{ transparent }}>
      {children}
    </HeaderContext.Provider>
  );
}

export default HeaderProvider;
