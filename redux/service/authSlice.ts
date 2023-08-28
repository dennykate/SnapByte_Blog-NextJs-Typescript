"use client";

import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;

      Cookie.set("user", JSON.stringify(payload.user));
      Cookie.set("token", payload.token);
    },
    removeUser: (state) => {
      state.user = null;
      state.token = null;

      Cookie.remove("user");
      Cookie.remove("token");
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
