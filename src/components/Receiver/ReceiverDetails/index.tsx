import { useState } from "react";
import { ReceiverStatus } from "../../../constants/receiver-status";
import { useFetchReceiverById } from "../../../hooks/use-fetch-receiver-by-id";
import { DraftReceiverDetails } from "./components/draftReceiverDetails";
import { ValidatedReceiverDetails } from "./components/validatedReceiverDetails";
import { DeleteConfirmation } from "./components/deleteConfirmation";
import { useFetchReceivers } from "../../../hooks/use-fetch-receivers";

interface Props {
  receiverId: string;
}

export const ReceiverDetails = ({ receiverId }: Props) => {
  const { mutate } = useFetchReceivers();
  const { data, error, isLoading } = useFetchReceiverById(receiverId);
  const [renderDeleteConfirmation, setRenderDeleteConfirmation] =
    useState<boolean>(false);

  if (isLoading) return <h1>Carregando...</h1>;

  if (error || !data) {
    return <h1>Houve algum erro. Entre em contato com o suporte</h1>;
  }

  if (renderDeleteConfirmation) {
    return (
      <DeleteConfirmation
        name={data.name}
        mutate={mutate}
        id={data.id}
        setRenderDeleteConfirmation={setRenderDeleteConfirmation}
      />
    );
  }

  if (data.status === ReceiverStatus.RASCUNHO) {
    return (
      <DraftReceiverDetails
        mutate={mutate}
        receiver={data}
        setRenderDeleteConfirmation={setRenderDeleteConfirmation}
      />
    );
  }

  if (data.status === ReceiverStatus.VALIDADO) {
    return (
      <ValidatedReceiverDetails
        mutate={mutate}
        receiver={data}
        setRenderDeleteConfirmation={setRenderDeleteConfirmation}
      />
    );
  }
};
