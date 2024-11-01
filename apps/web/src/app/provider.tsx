import { PropsWithChildren } from "react";
import ContentProvider from "../providers/content-provider";
import ThemeProvider from "../providers/theme-provider";
import DrawerProvider from "../features/drawer/drawer-provider";

function AppProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
        <ContentProvider>{children}</ContentProvider>
    </ThemeProvider>
  );
}
export default AppProvider;
