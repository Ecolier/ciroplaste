import { PropsWithChildren, useState } from "react";
import FooterContext from "./footer-context";

function FooterProvider({ children }: PropsWithChildren) {
  const [floating, setFloating] = useState(false);
  return (
    <FooterContext.Provider
      value={{
        isFloating: floating,
        setFloating: (floating) => setFloating(floating),
      }}
    >
      {children}
    </FooterContext.Provider>
  );
}

export default FooterProvider;
