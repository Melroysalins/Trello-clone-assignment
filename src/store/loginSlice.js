import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: [],
  },

  reducers: {
    addUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUserInfo } = loginSlice.actions;

export default loginSlice.reducer;
