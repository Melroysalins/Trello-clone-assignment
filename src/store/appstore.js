import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";

export const appstore = configureStore({
  reducer: {
    login: loginSlice,
  },
});
