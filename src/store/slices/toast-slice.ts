import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CreteSliceState {
  isVisible: boolean;
  content: string | null;
  isDanger: boolean;
}

const initialState: CreteSliceState = {
  isVisible: false,
  content: null,
  isDanger: false,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    renderToast: (state, action: PayloadAction<"danger" | "success">) => {
      state.isVisible = true;
      state.isDanger = action.payload === "danger";
    },
    removeToast: (state) => {
      state.isVisible = false;
    },
    setToastContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
  },
});

export const { renderToast, removeToast, setToastContent } = toastSlice.actions;

export default toastSlice.reducer;
