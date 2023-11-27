import {
  isValidCNPJ,
  formatCNPJ,
  isValidCPF,
  formatCPF,
  isValidEmail,
} from "@brazilian-utils/brazilian-utils";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../store/slices/receiver-detail-slice";
import { formatAccountNumber } from "../../../../utils/account-number";
import { StatusLabel } from "../../ShowReceivers/components/statusLabel";
import { Receiver } from "../../../../models/receiver";
import { Button } from "../../../Button";
import { Dispatch, SetStateAction, useState } from "react";
import { ErrorMessage } from "../../../ErrorMessage";
import {
  GetReceiversResponse,
  ReceiversService,
} from "../../../../services/receivers-service";
import { KeyedMutator } from "swr";

interface Props {
  receiver: Receiver;
  mutate: KeyedMutator<void | GetReceiversResponse>;
  setRenderDeleteConfirmation: Dispatch<SetStateAction<boolean>>;
}

export const ValidatedReceiverDetails = ({
  receiver,
  mutate,
  setRenderDeleteConfirmation,
}: Props) => {
  const [email, setEmail] = useState<string>(receiver.email);
  const [error, setError] = useState<boolean>(false);

  const dispatcher = useDispatch();

  const handleGoBackOnClick = () => {
    dispatcher(toggleModal());
  };

  const renderFormatedTaxId = (taxId: string): string => {
    if (isValidCNPJ(taxId)) {
      return formatCNPJ(taxId);
    }
    if (isValidCPF(taxId)) {
      return formatCPF(taxId);
    }
    return taxId;
  };

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      setError(false);
      ReceiversService.updateReceiver(receiver.id, {
        ...receiver,
        email,
      }).then(
        () => {
          mutate();
          dispatcher(toggleModal());
          //todo: render toast
        },
        () => {
          //todo: render toast
        }
      );
    } else {
      setError(true);
    }
  };

  const handleDeleteOnClick = () => {
    setRenderDeleteConfirmation(true);
  };

  return (
    <div>
      <nav className="flex justify-end">
        <button onClick={handleGoBackOnClick}>
          <XMarkIcon className="h-10 w-10" />
        </button>
      </nav>

      <h1 className="mb-10">{receiver.name}</h1>
      <StatusLabel status={receiver.status} className="max-w-[200px] mb-10" />

      <h2>CPF / CNPJ</h2>
      <p>{renderFormatedTaxId(receiver.tax_id)}</p>

      <div className="mt-10 grid grid-cols-2">
        <h2 className="order-0">Banco</h2>
        <p className="order-2">{receiver.bank_name}</p>

        <h2 className="order-1">Agência</h2>
        <p className="order-3">{receiver.branch}</p>

        <h2 className="order-4 mt-10">Tipo de Conta</h2>
        <p className="order-6">{receiver.account_type}</p>

        <h2 className="order-5 mt-10">{receiver.account_type}</h2>
        <p className="order-7">{formatAccountNumber(receiver.account)}</p>
      </div>

      <label htmlFor="email" className="mt-10 block flex flex-col w-[300px]">
        E-mail do favorecido
        <input
          value={email}
          id="email"
          className={`border-2 border-${
            error ? "red-500" : "gray"
          } rounded h-8`}
          onChange={(event) => setEmail(event.target.value)}
        />
        {error && <ErrorMessage>e-mail inválido</ErrorMessage>}
      </label>

      <footer className="flex justify-between mt-20">
        <Button theme="secondary" onClick={handleGoBackOnClick}>
          Voltar
        </Button>
        <Button
          theme="danger"
          className="w-[50px]"
          iconButton
          onClick={handleDeleteOnClick}
        >
          <TrashIcon className="h-5 w-5" />
        </Button>
        <Button theme="primary" onClick={handleSubmit}>
          Salvar
        </Button>
      </footer>
    </div>
  );
};
