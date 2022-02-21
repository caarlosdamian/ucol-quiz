/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SIGN_IN: (state, action) => {
      state.data = action.payload;
      state.isAuth = true;
    },

    SIGN_OUT: (state) => {
      state.isAuth = initialState.isAuth;
      state.data = initialState.data;
    },
  },
});

export const { SIGN_IN, SIGN_OUT } = userSlice.actions;

export default userSlice.reducer;
