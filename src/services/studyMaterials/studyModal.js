import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studyMaterial: {},
  openModal: false,
};

export const studyMaterialModalSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    openStudyMaterialModal: (state, action) => {
      state.openModal = action.payload;
    },
    setStudyMaterial: (state, action) => {
      state.studyMaterial = action.payload;
    },
  },
});

export const { openStudyMaterialModal, setStudyMaterial } = studyMaterialModalSlice.actions;

export default studyMaterialModalSlice.reducer;
