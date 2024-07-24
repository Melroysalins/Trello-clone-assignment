import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import taskSlice from "./taskSlice";

export const appstore = configureStore({
  reducer: {
    login: loginSlice,
    task: taskSlice,
  },
});
