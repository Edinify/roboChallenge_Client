import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../services/auth/loginSlice";
import loginModalSlice from "../services/auth/loginModal";
import { authApi } from "../services/auth/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { examApi } from "../services/exams/examsApi";
import examModalSlice from "../services/exams/examModalSlice";
import { studyMaterialApi } from "../services/studyMaterials/studyMaterialsApi";
import studyMaterialModalSlice from "../services/studyMaterials/studyModal";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    loginModal: loginModalSlice,
    [authApi.reducerPath]: authApi.reducer,
    [examApi.reducerPath]: examApi.reducer,
    examModal: examModalSlice,
    [studyMaterialApi.reducerPath]: studyMaterialApi.reducer,
    studyModal: studyMaterialModalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      examApi.middleware,
      studyMaterialApi.middleware
    ),
});

setupListeners(store.dispatch);
