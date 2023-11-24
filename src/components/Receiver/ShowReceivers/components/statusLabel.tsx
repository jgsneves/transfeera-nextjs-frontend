import { ReceiverStatus } from "../../../../constants/receiver-status";

interface Props {
  status: ReceiverStatus;
}

export const StatusLabel = ({ status }: Props) => {
  const content = status.charAt(0).toUpperCase() + status.slice(1);

  const defineBackgroundColor = () => {
    if (status === ReceiverStatus.RASCUNHO) {
      return "bg-gray-500";
    }

    return "bg-blue-500";
  };

  return (
    <span
      className={`w-full ${defineBackgroundColor()} rounded-full px-10 py-1 mt-2 block text-center text-white`}
    >
      {content}
    </span>
  );
};
