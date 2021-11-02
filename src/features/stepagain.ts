import { createSlice } from "@reduxjs/toolkit";

const initialValue = { name: "form"};

export const stepAgainSlice = createSlice({
  name: "stepAgain",
  initialState: { value: initialValue },
  reducers: {
    changeStepAgain: (state, action) => {
      state.value = action.payload;
    },
   
  },
});

export const { changeStepAgain } = stepAgainSlice.actions;

export default stepAgainSlice.reducer;

