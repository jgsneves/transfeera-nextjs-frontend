import React, { createContext, useState } from "react";

export interface IFilterReceiverContext {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface FilterReceiverCtxProviderProps {
  children: React.ReactNode;
}

export const FilterReceiverContext = createContext<IFilterReceiverContext>(
  {} as IFilterReceiverContext
);

export const FilterReceiverCtxProvider = ({
  children,
}: FilterReceiverCtxProviderProps) => {
  const [query, setQuery] = useState<string>("");
  return (
    <FilterReceiverContext.Provider value={{ query, setQuery }}>
      {children}
    </FilterReceiverContext.Provider>
  );
};
