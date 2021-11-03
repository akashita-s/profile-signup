import { createSlice } from "@reduxjs/toolkit";

const initialValue = '';

export const tokenSlice = createSlice({
  name: "token",
  initialState: { value: initialValue },
  reducers: {
    changeToken: (state, action) => {
      state.value = action.payload;
    },
   
  },
});

export const { changeToken } = tokenSlice.actions;

export default tokenSlice.reducer;

