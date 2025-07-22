import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/favicon-human.ico" as="image" />
        <link rel="icon" href="/favicon-human.ico" />
        <link rel="apple-touch-icon" href="/favicon-human.ico" />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
