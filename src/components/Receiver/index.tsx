import { CreateReceiver } from "./CreateReceiver";
import { FilterReceiver } from "./FilterReceivers";
import { ShowReceivers } from "./ShowReceivers";

export const ReceiverTabContent = () => {
  return (
    <section className="flex flex-col">
      <div className="flex justify-between bg-gray-200">
        <CreateReceiver />
        <FilterReceiver />
      </div>
      <ShowReceivers />
    </section>
  );
};
