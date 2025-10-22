import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginData: {
    password: "",
    email: "",
    userToken: "",
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setFieldValue: (state, action) => {
      const { field, value } = action.payload;
      state.loginData[field] = value;
    },
    resetForm: (state) => {
      state.loginData = initialState.loginData;
    },
    setUserToken: (state, action) => {
      state.loginData.userToken = action.payload;
    },
    logoutUser: (state) => {
      state.loginData.userToken = null;
      localStorage.clear();
      window.location.pathname = "/";
    },
  },
});

export const { setFieldValue, resetForm, setUserToken, logoutUser } =
  loginSlice.actions;

export default loginSlice.reducer;
