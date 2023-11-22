import Head from "next/head";
import { Header } from "../components/Header";
import { CreateReceiver } from "../components/Receiver/CreateReceiver";
import { FilterReceiver } from "../components/Receiver/FilterReceiver";

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
        <div className="flex justify-between">
          <CreateReceiver />
          <FilterReceiver />
        </div>
      </main>
    </>
  );
}
