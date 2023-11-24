import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export const CreateReceiver = () => {
  const router = useRouter();

  const handleButtonOnClick = () => {
    router.push("/favorecidos/novo");
  };

  return (
    <article className="p-10 bg-inhent flex-1">
      <button className="flex items-center" onClick={handleButtonOnClick}>
        <h1 className="w-[250px]">Seus favorecidos</h1>
        <PlusCircleIcon className="text-primary h-12 w-12" />
      </button>
    </article>
  );
};
