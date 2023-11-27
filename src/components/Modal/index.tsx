import React from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleModal } from "../../store/slices/receiver-detail-slice";

interface Props {
  children: React.ReactNode;
}

export const Modal = ({ children }: Props) => {
  const isOpen = useSelector(
    (state: RootState) => state.receiverDetail.showModal
  );
  const dispatcher = useDispatch();

  const handler = () => dispatcher(toggleModal());

  return (
    <Dialog
      open={isOpen}
      handler={handler}
      className="max-h-[80vh] overflow-y-scroll"
      id="teste"
    >
      <DialogBody>{children}</DialogBody>
    </Dialog>
  );
};
