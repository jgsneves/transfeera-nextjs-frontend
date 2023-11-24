import Head from "next/head";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PixKeyTypes } from "../../constants/pix-key-types";
import { useRouter } from "next/router";

export default function NovoFavorecido() {
  const router = useRouter();

  const handleGoBackOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.back();
  };

  return (
    <>
      <Head>
        <title>Transfeera - novo favorecido</title>
        <meta name="description" content="Transfeera - novo favorecido" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen-lg mx-auto">
        <Header />

        <nav className="bg-primary flex justify-end h-[50px] items-center">
          <button onClick={handleGoBackOnClick}>
            <XMarkIcon className="h-10 w-10 text-white" />
          </button>
        </nav>

        <form action="">
          <h1 className="py-[30px]">Quais os dados do favorecido?</h1>
          <div className="flex flex-wrap gap-10">
            <label htmlFor="name" className="flex flex-col w-[370px]">
              Qual nome completo ou razão social do favorecido?
              <input
                id="name"
                type="text"
                className="border-2 border-gray rounded h-8"
              />
            </label>

            <label htmlFor="cpf" className="flex flex-col">
              Qual CPF ou CNPJ?
              <input id="cpf" className="border-2 border-gray rounded h-8" />
            </label>

            <label htmlFor="email" className="flex flex-col w-[370px]">
              Qual o e-mail para o envio do comprovante?
              <input id="email" className="border-2 border-gray rounded h-8" />
            </label>
          </div>

          <h1 className="py-[30px]">Qual a chave pix?</h1>
          <div className="flex flex-col gap-10">
            <label htmlFor="pixKeyType" className="flex flex-col w-[370px]">
              Tipo de chave
              <select
                id="pixKeyType"
                className="border-2 border-gray rounded h-8"
              >
                {Object.values(PixKeyTypes).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="pixKey" className="flex flex-col w-[370px]">
              Chave
              <input id="pixKey" className="border-2 border-gray rounded h-8" />
            </label>
          </div>

          <footer className="flex justify-between mt-20">
            <Button theme="secondary" onClick={handleGoBackOnClick}>
              Cancelar
            </Button>
            <Button theme="primary">Salvar</Button>
          </footer>
        </form>
      </main>
    </>
  );
}
