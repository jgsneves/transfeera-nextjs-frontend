import Head from "next/head";
import { Header } from "../../components/Header";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PixKeyTypes } from "../../constants/pix-key-types";
import { useRouter } from "next/router";
import {
  ReceiverForm,
  ReceiverFormValues,
} from "../../components/Receiver/ReceiverForm";
import { FormikHelpers } from "formik";
import { ReceiversService } from "../../services/receivers-service";
import { useFetchReceivers } from "../../hooks/use-fetch-receivers";
import { useToast } from "../../hooks/use-toast";

export default function NovoFavorecido() {
  const formInitialValues: ReceiverFormValues = {
    email: "",
    name: "",
    pixKey: "",
    pixKeyType: PixKeyTypes.EMAIL,
    taxId: "",
  };

  const router = useRouter();
  const { mutate } = useFetchReceivers();
  const toast = useToast();

  const handleGoBackOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push("/");
  };

  const handleFormSubmit = (
    values: ReceiverFormValues,
    helpers: FormikHelpers<ReceiverFormValues>
  ) => {
    const { email, name, pixKey, pixKeyType, taxId } = values;

    ReceiversService.createReceiver({
      email,
      name,
      pix_key: pixKey,
      pix_key_type: pixKeyType,
      tax_id: taxId,
    })
      .then(
        () => {
          mutate();
          toast("Favorecido apagado com sucesso", "success");
        },
        () => {
          toast("Houve algum erro", "danger");
        }
      )
      .finally(() => {
        helpers.setSubmitting(false);
        router.push("/");
      });
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

        <ReceiverForm
          handleGoBackOnClick={handleGoBackOnClick}
          initialValues={formInitialValues}
          handleOnSubmit={handleFormSubmit}
        />
      </main>
    </>
  );
}
