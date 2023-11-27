import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../store/slices/receiver-detail-slice";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../../../Button";
import {
  GetReceiversResponse,
  ReceiversService,
} from "../../../../services/receivers-service";
import { KeyedMutator } from "swr";

interface Props {
  name: string;
  id: string;
  mutate: KeyedMutator<void | GetReceiversResponse>;
  setRenderDeleteConfirmation: Dispatch<SetStateAction<boolean>>;
}

export const DeleteConfirmation = ({
  name,
  id,
  mutate,
  setRenderDeleteConfirmation,
}: Props) => {
  const dispatcher = useDispatch();

  const handleCloseModal = () => {
    dispatcher(toggleModal());
  };

  const handleGoBackOnClick = () => {
    setRenderDeleteConfirmation(false);
  };

  const handleDeleteOnClick = () => {
    ReceiversService.deleteReceiver(id).then(
      () => {
        //todo toast
        mutate();
        handleCloseModal();
      },
      () => {
        //todo toast
      }
    );
  };

  return (
    <div>
      <nav className="flex justify-end">
        <button onClick={handleCloseModal}>
          <XMarkIcon className="h-10 w-10" />
        </button>
      </nav>
      <h1 className="mb-10">Excluir favorecido</h1>

      <b>Você confirma a exclusão do favorecido {name}?</b>

      <p className="mt-2">
        O Histórico de pagamentos para este favorecido será mantido, mas ele
        será removido da sua lista de favorecidos.
      </p>

      <footer className="flex justify-between mt-20">
        <Button theme="secondary" onClick={handleGoBackOnClick}>
          Voltar
        </Button>

        <Button theme="danger" onClick={handleDeleteOnClick}>
          Confirmar exclusão
        </Button>
      </footer>
    </div>
  );
};
