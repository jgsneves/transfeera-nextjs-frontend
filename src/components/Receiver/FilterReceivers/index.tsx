import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Input } from "@material-tailwind/react";

export const FilterReceiver = () => {
  return (
    <article className="p-10 bg-inhent flex items-center">
      <Input
        className="min-w-[290px] bg-white"
        label="Nome, CPF, agência ou conta"
        icon={<MagnifyingGlassIcon />}
      />
    </article>
  );
};
