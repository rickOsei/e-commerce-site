import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      return {
        isOpen: true,
      };
    },
    closeModal: (state, action) => {
      return {
        isOpen: false,
      };
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;

export default ModalSlice.reducer;
