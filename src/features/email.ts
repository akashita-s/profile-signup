import { createSlice } from "@reduxjs/toolkit";

const initialValue = '';

export const emailSlice = createSlice({
  name: "email",
  initialState: { value: initialValue },
  reducers: {
    changeEmail: (state, action) => {
      state.value = action.payload;
    },
   
  },
});

export const { changeEmail } = emailSlice.actions;

export default emailSlice.reducer;

