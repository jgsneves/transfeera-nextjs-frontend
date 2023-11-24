import { Dispatch, SetStateAction } from "react";
import { SortingCriteria, SortingOrder } from "..";
import { Receiver } from "../../../../models/receiver";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { StatusLabel } from "./statusLabel";
import {
  formatCNPJ,
  formatCPF,
  isValidCNPJ,
  isValidCPF,
} from "@brazilian-utils/brazilian-utils";

interface Props {
  receiverRows: Receiver[];
  sorting: SortingCriteria;
  sortingOrder: SortingOrder;
  setSortCriteria: Dispatch<SetStateAction<SortingCriteria>>;
  setSortOrder: Dispatch<SetStateAction<SortingOrder>>;
  selectedReceivers: Receiver[];
  setSelectedReceivers: Dispatch<SetStateAction<Receiver[]>>;
  setRenderReceiverDetailsModal: Dispatch<SetStateAction<boolean>>;
  setReceiverId: Dispatch<SetStateAction<string | undefined>>;
}

export const Table = ({
  receiverRows,
  sorting,
  sortingOrder,
  setSortCriteria,
  setSortOrder,
  selectedReceivers,
  setSelectedReceivers,
  setRenderReceiverDetailsModal,
  setReceiverId,
}: Props) => {
  const isSelectAllRowsCheckboxChecked = receiverRows.every((row) =>
    selectedReceivers.some((selectedReceiver) => selectedReceiver.id === row.id)
  );

  const renderSortingSvg = () => {
    if (sortingOrder === "asc") {
      return <ChevronDownIcon className="h-5 w-5" />;
    }

    return <ChevronUpIcon className="h-5 w-5" />;
  };

  const handleTHOnClick = (criteria: SortingCriteria) => {
    setSortCriteria(criteria);
    setSortOrder((state) => (state === "asc" ? "desc" : "asc"));
  };

  const isRowChecked = (receiverId: string) => {
    return selectedReceivers.some((receiver) => receiver.id === receiverId);
  };

  const handleCheckboxRowOnClick = (receiver: Receiver) => {
    if (isRowChecked(receiver.id))
      return setSelectedReceivers((state) =>
        state.filter((selectedReceiver) => selectedReceiver.id !== receiver.id)
      );

    setSelectedReceivers((state) => {
      const newArr = [...state];
      newArr.push(receiver);
      return newArr;
    });
  };

  const formatTaxId = (taxId: string): string => {
    if (isValidCPF(taxId)) return formatCPF(taxId);
    if (isValidCNPJ(taxId)) return formatCNPJ(taxId);
    return "n/a";
  };

  const handleSelectAllCheckboxOnClick = () => {
    setSelectedReceivers((state) => (state.length === 0 ? receiverRows : []));
  };

  const handleNameOnClick = (receiverId: string) => {
    setRenderReceiverDetailsModal(true);
    setReceiverId(receiverId);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              className="w-5 h-5 rounded-lg"
              checked={isSelectAllRowsCheckboxChecked}
              onClick={() => handleSelectAllCheckboxOnClick()}
            />
          </th>
          <th
            className="cursor-pointer"
            onClick={() => handleTHOnClick("name")}
          >
            <p className="flex text-gray-500">
              Favorecido
              {sorting === "name" && renderSortingSvg()}
            </p>
          </th>
          <th
            className="cursor-pointer"
            onClick={() => handleTHOnClick("tax_id")}
          >
            <p className="flex text-gray-500">
              CPF/CNPJ
              {sorting === "tax_id" && renderSortingSvg()}
            </p>
          </th>
          <th
            className="cursor-pointer"
            onClick={() => handleTHOnClick("bank_name")}
          >
            <p className="flex text-gray-500">
              Banco
              {sorting === "bank_name" && renderSortingSvg()}
            </p>
          </th>
          <th
            className="cursor-pointer"
            onClick={() => handleTHOnClick("branch")}
          >
            <p className="flex text-gray-500">
              Agência
              {sorting === "branch" && renderSortingSvg()}
            </p>
          </th>
          <th
            className="cursor-pointer"
            onClick={() => handleTHOnClick("account")}
          >
            <p className="flex text-gray-500">
              CC
              {sorting === "account" && renderSortingSvg()}
            </p>
          </th>
          <th
            className="cursor-pointer"
            onClick={() => handleTHOnClick("status")}
          >
            <p className="flex text-gray-500">
              Status do favorecido
              {sorting === "status" && renderSortingSvg()}
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        {receiverRows.map((receiver) => (
          <tr key={receiver.id}>
            <td>
              <input
                type="checkbox"
                className="w-5 h-5 rounded-lg"
                checked={isRowChecked(receiver.id)}
                onClick={() => handleCheckboxRowOnClick(receiver)}
              />
            </td>
            <td>
              <button
                title="click para editar"
                onClick={() => handleNameOnClick(receiver.id)}
              >
                {receiver.name}
              </button>
            </td>
            <td>{formatTaxId(receiver.tax_id)}</td>
            <td>{receiver.bank_name}</td>
            <td>{receiver.branch}</td>
            <td>{receiver.account}</td>
            <td>
              <StatusLabel status={receiver.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
