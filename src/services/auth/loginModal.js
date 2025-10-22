import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
};

const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.openModal = true;
    },
    closeLoginModal: (state) => {
      state.openModal = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = loginModalSlice.actions;
export default loginModalSlice.reducer;
