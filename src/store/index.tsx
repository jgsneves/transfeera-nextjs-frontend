import { configureStore } from "@reduxjs/toolkit";
import receiverDetailReducer from "./slices/receiver-detail-slice";

export const store = configureStore({
  reducer: {
    receiverDetail: receiverDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
