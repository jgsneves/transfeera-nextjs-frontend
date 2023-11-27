import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Input } from "@material-tailwind/react";
import { useFilterReceiverCtx } from "../../../hooks/use-filter-receiver-ctx";

export const FilterReceiver = () => {
  const { query, setQuery } = useFilterReceiverCtx();

  return (
    <article className="p-10 bg-inhent flex items-center">
      <Input
        className="min-w-[290px] bg-white"
        label="Nome, CPF, agência ou conta"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        icon={<MagnifyingGlassIcon />}
      />
    </article>
  );
};
