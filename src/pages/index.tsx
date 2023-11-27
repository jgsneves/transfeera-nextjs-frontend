import Head from "next/head";
import { Header } from "../components/Header";
import { UnderlineTabs } from "../components/UnderlineTabs";
import { Toast } from "../components/Toast";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <>
      <Head>
        <title>Transfeera - Favorecidos</title>
        <meta name="description" content="Transfeera - Favorecidos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <UnderlineTabs />
        {createPortal(<Toast />, document.body)}
      </main>
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
