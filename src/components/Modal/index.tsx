import React from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

interface Props {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, setOpen, children }: Props) => {
  const handleOpen = () => setOpen(!isOpen);

  return (
    <Dialog open={isOpen} handler={handleOpen}>
      <DialogBody>{children}</DialogBody>
    </Dialog>
  );
};
