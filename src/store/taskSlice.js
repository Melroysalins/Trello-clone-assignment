import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "login",
  initialState: {
    task: [],
  },

  reducers: {
    addUserTask: (state, action) => {
      state.task = action.payload;
    },
  },
});

export const { addUserTask } = taskSlice.actions;

export default taskSlice.reducer;
