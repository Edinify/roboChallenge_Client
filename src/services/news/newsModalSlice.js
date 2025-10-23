import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: {},
  openModal: false,
};

export const newsModalSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    openNewsModal: (state, action) => {
      state.openModal = action.payload;
    },
    setNews: (state, action) => {
      state.news = action.payload;
    },
  },
});

export const { openNewsModal, setNews } = newsModalSlice.actions;

export default newsModalSlice.reducer;
