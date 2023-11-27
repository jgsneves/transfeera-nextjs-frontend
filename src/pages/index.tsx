import Head from "next/head";
import { Header } from "../components/Header";
import { UnderlineTabs } from "../components/UnderlineTabs/indext";
import { Toast } from "../components/Toast";
import { createPortal } from "react-dom";

export default function Home() {
  return (
    <>
      <Head>
        <title>Transfeera - Favorecidos</title>
        <meta name="description" content="Transfeera - Favorecidos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen-lg mx-auto">
        <Header />
        <UnderlineTabs />
        {createPortal(<Toast />, document.body)}
      </main>
    </>
  );
}
