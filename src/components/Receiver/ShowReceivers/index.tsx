import { useState } from "react";
import { Button } from "../../Button";
import { Pagination } from "../../Pagination";
import { Table } from "./components/table";
import { Receiver } from "../../../models/receiver";
import { useFetchReceivers } from "../../../hooks/use-fetch-receivers";
import { paginationLimit } from "../../../constants/pagination-limit";
import { ReceiversService } from "../../../services/receivers-service";

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

  const { data, error, isLoading, mutate } = useFetchReceivers(
    sortCriteria,
    sortOrder,
    currentPage
  );

  if (isLoading) return <h1>Carregando...</h1>;

  if (error || !data)
    return <h1>Houve um erro. Entre em contato com o suporte</h1>;

  const pageAmount = Math.floor(data.total / paginationLimit);

  const handleDeleteOnClick = async () => {
    if (selectedReceivers.length > 0) {
      const promises = selectedReceivers.map((receiver) =>
        ReceiversService.deleteReceiver(receiver.id)
      );

      await Promise.all(promises).then(
        () => {
          // todo toast
          setSelectedReceivers([]);
        },
        () => {
          //todo toast
        }
      );

      mutate();
    }
  };

  return (
    <article className="flex flex-col">
      <Button
        theme="danger"
        className="my-10"
        disabled={selectedReceivers.length === 0}
        onClick={handleDeleteOnClick}
      >
        Excluir selecionados
      </Button>
      <Table
        receiverRows={data.receivers}
        sorting={sortCriteria}
        sortingOrder={sortOrder}
        setSortCriteria={setSortCriteria}
        setSortOrder={setSortOrder}
        selectedReceivers={selectedReceivers}
        setSelectedReceivers={setSelectedReceivers}
      />
      <Pagination
        className="mt-10"
        active={currentPage}
        pageAmount={pageAmount}
        setActive={setCurrentPage}
      />
    </article>
  );
};
