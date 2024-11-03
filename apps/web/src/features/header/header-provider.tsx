import { PropsWithChildren, useState } from "react";
import { HeaderContext } from "./header-context";

type HeaderProviderProps = PropsWithChildren & {
  transparent?: boolean;
};

function HeaderProvider({
  transparent = false,
  children,
}: HeaderProviderProps) {
  const [_transparent, setTransparent] = useState<boolean>(transparent);
  return (
    <HeaderContext.Provider value={{ transparent: _transparent, setTransparent }}>
      {children}
    </HeaderContext.Provider>
  );
}

export default HeaderProvider;
