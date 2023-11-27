import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeToast } from "../../store/slices/toast-slice";
import { XMarkIcon } from "@heroicons/react/24/solid";

export const Toast = () => {
  const { isVisible, content, isDanger } = useSelector(
    (store: RootState) => store.toast
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeToast());
    }, 3000);
  });

  if (isVisible) {
    return (
      <div
        id="toast-top-right"
        className={`z-50 fixed flex items-center w-full max-w-xs p-4 space-x-4 text-white bg-${
          isDanger ? "red" : "blue"
        }-500 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800`}
        role="alert"
      >
        <div className="text-sm font-normal flex justify-between flex-1">
          {content}
          <button onClick={() => dispatch(removeToast())}>
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  return null;
};
