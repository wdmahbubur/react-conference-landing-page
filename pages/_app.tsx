import type { AppProps } from "next/app";
import RootLayout from "@/layout/AppLayout";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import "../styles/styles.css";
import client from "@/graphql/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ApolloProvider>
  );
}
