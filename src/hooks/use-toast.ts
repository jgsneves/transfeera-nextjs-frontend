import { useDispatch } from "react-redux";
import { setToastContent, renderToast } from "../store/slices/toast-slice";

export const useToast = () => {
  const dispatcher = useDispatch();

  const render = (message: string, type: "success" | "danger") => {
    dispatcher(setToastContent(message));
    dispatcher(renderToast(type));
  };

  return render;
};
