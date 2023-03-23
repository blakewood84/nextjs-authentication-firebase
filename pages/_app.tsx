import { AuthContextProvider } from "@/hooks/useAuth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import app from "@/config/firebaseConfig";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
