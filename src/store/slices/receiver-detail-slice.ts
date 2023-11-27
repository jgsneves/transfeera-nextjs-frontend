import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ReceiverDetailSlice {
  showModal: boolean;
  selectedReceiverId: string | null;
}

const initialState: ReceiverDetailSlice = {
  showModal: false,
  selectedReceiverId: null,
};

const receiverDetailSlice = createSlice({
  name: "receiverDetail",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
    setSelectedReceiverId: (state, action: PayloadAction<string>) => {
      state.selectedReceiverId = action.payload;
    },
    clearSelectedReceiverId: (state) => {
      state.selectedReceiverId = null;
    },
  },
});

export const { clearSelectedReceiverId, setSelectedReceiverId, toggleModal } =
  receiverDetailSlice.actions;

export default receiverDetailSlice.reducer;
