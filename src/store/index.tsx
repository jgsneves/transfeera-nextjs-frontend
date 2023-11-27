import { configureStore } from "@reduxjs/toolkit";
import receiverDetailReducer from "./slices/receiver-detail-slice";
import toastSliceReducer from "./slices/toast-slice";

export const store = configureStore({
  reducer: {
    receiverDetail: receiverDetailReducer,
    toast: toastSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
