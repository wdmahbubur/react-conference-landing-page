import type { AppProps } from "next/app";
import RootLayout from "@/layout/AppLayout";
import "../styles/globals.css";
import "../styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
