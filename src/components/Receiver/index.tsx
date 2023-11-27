import { Modal } from "../Modal";
import { CreateReceiver } from "./CreateReceiver";
import { FilterReceiver } from "./FilterReceivers";
import { ShowReceivers } from "./ShowReceivers";
import { useReceiverDetailStore } from "../../hooks/use-receiver-detail-store";
import { ReceiverDetails } from "./ReceiverDetails";

export const ReceiverTabContent = () => {
  const { selectedReceiverId } = useReceiverDetailStore();

  return (
    <section className="flex flex-col">
      <div className="flex justify-between bg-gray-200">
        <CreateReceiver />
        <FilterReceiver />
      </div>
      <ShowReceivers />
      <Modal>
        {selectedReceiverId && (
          <ReceiverDetails receiverId={selectedReceiverId} />
        )}
      </Modal>
    </section>
  );
};
