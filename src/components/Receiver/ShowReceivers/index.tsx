import { useState } from "react";
import { Button } from "../../Button";
import { Pagination } from "../../Pagination";
import { Table } from "./components/table";
import { ReceiverStatus } from "../../../constants/receiver-status";
import { PixKeyTypes } from "../../../constants/pix-key-types";
import { Receiver } from "../../../models/receiver";
import { Modal } from "../../Modal";

export type SortingCriteria =
  | "name"
  | "tax_id"
  | "bank_name"
  | "branch"
  | "account"
  | "status";
export type SortingOrder = "asc" | "desc";

export const ShowReceivers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortCriteria, setSortCriteria] = useState<SortingCriteria>("name");
  const [sortOrder, setSortOrder] = useState<SortingOrder>("asc");
  const [selectedReceivers, setSelectedReceivers] = useState<Receiver[]>([]);
  const [renderReceiverDetailsModal, setRenderReceiverDetailsModal] =
    useState<boolean>(false);
  const [receiverId, setReceiverId] = useState<string | undefined>();

  const receivers = [
    {
      id: "6c90bb97-5c48-4f45-b363-47521f7f0832",
      name: "Rafael Costa",
      branch: "3402",
      account: "517638",
      bank_code: "160",
      status: ReceiverStatus.RASCUNHO,
      tax_id: "79915139000115",
      checked: false,
      account_type: null,
      bank_name: "Santander",
      created_at: new Date().toISOString(),
      email: "email@email.com",
      pix_key: "email@email.com",
      pix_key_type: PixKeyTypes.EMAIL,
      updated_at: new Date().toISOString(),
    },
    {
      id: "52902d57-3bf8-4a8e-9e0c-c2f9c67c7ead",
      name: "Joao Neves",
      branch: "3402",
      account: "517638",
      bank_code: "160",
      status: ReceiverStatus.RASCUNHO,
      tax_id: "03510884582",
      checked: false,
      account_type: null,
      bank_name: "Santander",
      created_at: new Date().toISOString(),
      email: "email@email.com",
      pix_key: "email@email.com",
      pix_key_type: PixKeyTypes.EMAIL,
      updated_at: new Date().toISOString(),
    },
    {
      id: "35b52b96-6e12-4b57-9e53-f0cd2aca5004",
      name: "José da Silva",
      branch: "3402",
      account: "517638",
      bank_code: "160",
      status: ReceiverStatus.VALIDO,
      tax_id: "79915139000115",
      checked: false,
      account_type: null,
      bank_name: "Santander",
      created_at: new Date().toISOString(),
      email: "email@email.com",
      pix_key: "email@email.com",
      pix_key_type: PixKeyTypes.EMAIL,
      updated_at: new Date().toISOString(),
    },
    {
      id: "2c54b534-b9a1-406a-9222-a445fff0e914",
      name: "zezinho",
      branch: "3402",
      account: "517638",
      bank_code: "160",
      status: ReceiverStatus.RASCUNHO,
      tax_id: "79915139000115",
      checked: false,
      account_type: null,
      bank_name: "Santander",
      created_at: new Date().toISOString(),
      email: "email@email.com",
      pix_key: "email@email.com",
      pix_key_type: PixKeyTypes.EMAIL,
      updated_at: new Date().toISOString(),
    },
  ];

  return (
    <article className="flex flex-col">
      <Button
        theme="danger"
        className="my-10"
        disabled={selectedReceivers.length === 0}
      >
        Excluir selecionados
      </Button>
      <Table
        receiverRows={receivers}
        sorting={sortCriteria}
        sortingOrder={sortOrder}
        setSortCriteria={setSortCriteria}
        setSortOrder={setSortOrder}
        selectedReceivers={selectedReceivers}
        setSelectedReceivers={setSelectedReceivers}
        setRenderReceiverDetailsModal={setRenderReceiverDetailsModal}
        setReceiverId={setReceiverId}
      />
      <Pagination
        className="mt-10"
        active={currentPage}
        pageAmount={3}
        setActive={setCurrentPage}
      />
      <Modal
        isOpen={renderReceiverDetailsModal}
        setOpen={setRenderReceiverDetailsModal}
      >
        <h1>detalhes de um favorecido: {receiverId}</h1>
      </Modal>
    </article>
  );
};
