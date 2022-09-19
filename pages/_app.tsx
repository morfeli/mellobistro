import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MelloBistroProvider } from "../components/store/mello-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MelloBistroProvider>
      <Component {...pageProps} />
    </MelloBistroProvider>
  );
}

export default MyApp;
