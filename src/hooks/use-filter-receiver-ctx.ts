import { useContext } from "react";
import { FilterReceiverContext } from "../contexts/filter-receiver-context";

export const useFilterReceiverCtx = () => {
  const { query, setQuery } = useContext(FilterReceiverContext);

  return { query, setQuery };
};
