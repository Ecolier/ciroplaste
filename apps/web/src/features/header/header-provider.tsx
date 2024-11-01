import { PropsWithChildren, useState } from "react";
import Header from "./header";
import HeaderContext from "./header-context";

function HeaderProvider({ children }: PropsWithChildren) {
  const [transparent, setTransparent] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <HeaderContext.Provider value={{ setFullscreen, setTransparent, transparent, fullscreen }}>
      <Header fullscreen={fullscreen} transparent={transparent} />
      {children}
    </HeaderContext.Provider>
  );
}

export default HeaderProvider;
