import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { blogApi } from "./api/blogApi";
import authSlice from "./service/authSlice";

const reducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, blogApi.middleware),
});
