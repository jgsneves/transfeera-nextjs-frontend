import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useReceiverDetailStore = () => {
  const { selectedReceiverId } = useSelector(
    (state: RootState) => state.receiverDetail
  );

  return { selectedReceiverId };
};
