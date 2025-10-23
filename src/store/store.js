import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import loginSlice from "../services/auth/loginSlice";
import loginModalSlice from "../services/auth/loginModal";
import { authApi } from "../services/auth/authApi";
import { examApi } from "../services/exams/examsApi";
import examModalSlice from "../services/exams/examModalSlice";
import { studyMaterialApi } from "../services/studyMaterials/studyMaterialsApi";
import studyMaterialModalSlice from "../services/studyMaterials/studyModal";
import { newsApi } from "../services/news/newsApi";
import newsModalSlice from "../services/news/newsModalSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    loginModal: loginModalSlice,
    [authApi.reducerPath]: authApi.reducer,
    [examApi.reducerPath]: examApi.reducer,
    examModal: examModalSlice,
    [studyMaterialApi.reducerPath]: studyMaterialApi.reducer,
    studyModal: studyMaterialModalSlice,
    [newsApi.reducerPath]: newsApi.reducer,
    newsModal: newsModalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      examApi.middleware,
      studyMaterialApi.middleware,
      newsApi.middleware
    ),
});

setupListeners(store.dispatch);
