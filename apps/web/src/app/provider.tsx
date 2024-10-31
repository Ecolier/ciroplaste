import { PropsWithChildren } from "react";
import ContentProvider from "../providers/content-provider";

function AppProvider({ children }: PropsWithChildren) {
  return (
    <ContentProvider>
        {children}
    </ContentProvider>
  );
}
export default AppProvider;
