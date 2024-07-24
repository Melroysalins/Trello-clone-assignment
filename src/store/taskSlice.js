import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "login",
  initialState: {
    task: [],
    result: [],
  },

  reducers: {
    addUserTask: (state, action) => {
      state.task = action.payload;
    },
    addfilterResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { addUserTask, addfilterResult } = taskSlice.actions;

export default taskSlice.reducer;
