import useSWR from "swr";
import { ReceiversService } from "../services/receivers-service";
import { useFilterReceiverCtx } from "./use-filter-receiver-ctx";
import useDebouncer from "./use-debouncer";
import { paginationLimit } from "../constants/pagination-limit";
import {
  SortingCriteria,
  SortingOrder,
} from "../components/Receiver/ShowReceivers";

export const useFetchReceivers = (
  sortCriteria: SortingCriteria = "name",
  sortOrder: SortingOrder = "asc",
  page: number = 1,
  limit: number = paginationLimit
) => {
  const { query } = useFilterReceiverCtx();
  const debouncedQuery = useDebouncer(query, 1000);
  const urlSearchParams = new URLSearchParams();

  urlSearchParams.append("_sort", sortCriteria);
  urlSearchParams.append("_order", sortOrder);
  urlSearchParams.append("_page", page.toString());
  urlSearchParams.append("_limit", limit.toString());

  if (query) {
    urlSearchParams.append("q", debouncedQuery);
  }

  const { data, error, isLoading, mutate } = useSWR(
    `receivers?${urlSearchParams.toString()}`,
    ReceiversService.getReceivers
  );

  return { data, error, isLoading, mutate };
};
