import { KeyedMutator } from "swr";
import { Receiver } from "../../../../models/receiver";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../store/slices/receiver-detail-slice";
import { StatusLabel } from "../../ShowReceivers/components/statusLabel";
import { ReceiverForm, ReceiverFormValues } from "../../ReceiverForm";
import { Dispatch, SetStateAction } from "react";
import {
  GetReceiversResponse,
  ReceiversService,
} from "../../../../services/receivers-service";
import { FormikHelpers } from "formik";

interface Props {
  receiver: Receiver;
  mutate: KeyedMutator<void | GetReceiversResponse>;
  setRenderDeleteConfirmation: Dispatch<SetStateAction<boolean>>;
}

export const DraftReceiverDetails = ({
  receiver,
  mutate,
  setRenderDeleteConfirmation,
}: Props) => {
  const {
    email,
    tax_id: taxId,
    name,
    pix_key: pixKey,
    pix_key_type: pixKeyType,
  } = receiver;
  const dispatcher = useDispatch();

  const handleGoBackOnClick = () => {
    dispatcher(toggleModal());
  };

  const handleOnSubmit = (
    values: ReceiverFormValues,
    helpers: FormikHelpers<ReceiverFormValues>
  ) => {
    ReceiversService.updateReceiver(receiver.id, values)
      .then(
        () => {
          dispatcher(toggleModal());
          //todo toast
        },
        () => {
          //todo toast
        }
      )
      .finally(() => helpers.setSubmitting(false));
  };

  const handleDeleteOnClick = () => {
    setRenderDeleteConfirmation(true);
  };

  return (
    <div>
      <nav className="flex justify-end">
        <button onClick={handleGoBackOnClick}>
          <XMarkIcon className="h-10 w-10" />
        </button>
      </nav>

      <h1 className="mb-10">{receiver.name}</h1>
      <StatusLabel status={receiver.status} className="max-w-[200px] mb-10" />

      <ReceiverForm
        initialValues={{
          email,
          name,
          pixKey,
          pixKeyType,
          taxId,
        }}
        handleGoBackOnClick={handleGoBackOnClick}
        handleOnSubmit={handleOnSubmit}
        renderDeleteButton
        handleDeleteOnClick={handleDeleteOnClick}
      />
    </div>
  );
};
