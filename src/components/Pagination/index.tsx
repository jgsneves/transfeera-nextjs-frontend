import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

interface Props {
  pageAmount: number;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}

export const Pagination = ({
  active,
  setActive,
  pageAmount,
  className,
}: Props) => {
  const renderPageButtons = (): React.ReactNode[] => {
    let range = pageAmount;
    const buttons: React.ReactNode[] = [];

    for (let index = range; index > 0; index--) {
      buttons.unshift(
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`text-blue-500 ${index === active ? "font-bold" : ""}`}
        >
          {index}
        </button>
      );
    }

    return buttons;
  };

  const next = () => {
    if (active === pageAmount) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const classes = className ? className : "";

  return (
    <div className={`flex items-center gap-4 self-center ${classes}`}>
      <Button
        variant="text"
        className="flex items-center rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <ChevronDoubleLeftIcon
          strokeWidth={2}
          className="h-4 w-4 text-blue-500"
        />
      </Button>
      <div className="flex items-center gap-3">{renderPageButtons()}</div>
      <Button
        variant="text"
        className="flex items-center rounded-full"
        onClick={next}
        disabled={active === pageAmount}
      >
        <ChevronDoubleRightIcon
          strokeWidth={2}
          className="h-4 w-4 text-blue-500"
        />
      </Button>
    </div>
  );
};
