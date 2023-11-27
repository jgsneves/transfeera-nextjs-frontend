import useSWR from "swr";
import { ReceiversService } from "../services/receivers-service";

export const useFetchReceiverById = (id: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `receivers/${id}`,
    ReceiversService.getReceiverById
  );

  return { data, error, isLoading, mutate };
};
