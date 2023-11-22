import { PlusCircleIcon } from "@heroicons/react/24/solid";

export const CreateReceiver = () => {
  return (
    <section className="p-10 bg-gray-300 flex-1">
      <button className="flex items-center">
        <p className="w-[250px] text-3xl">Seus favorecidos</p>
        <PlusCircleIcon className="text-primary h-12 w-12" />
      </button>
    </section>
  );
};
