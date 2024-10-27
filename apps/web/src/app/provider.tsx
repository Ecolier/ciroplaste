import { PropsWithChildren } from "react";
import ContentProvider from "../providers/content-provider";
import ThemeProvider from "../providers/theme-provider";

function AppProvider({ children }: PropsWithChildren) {
  return (
    <ContentProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ContentProvider>
  );
}
export default AppProvider;
