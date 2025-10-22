import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exam: {},
  openModal: false,
};

export const examModalSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    openExamModal: (state, action) => {
      state.openModal = action.payload;
    },
    setExam: (state, action) => {
      state.exam = action.payload;
    },
  },
});

export const { openExamModal, setExam } = examModalSlice.actions;

export default examModalSlice.reducer;
