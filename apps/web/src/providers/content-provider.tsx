import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../app/apollo";
import { PropsWithChildren } from "react";

function ContentProvider({ children }: PropsWithChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}

export default ContentProvider;
