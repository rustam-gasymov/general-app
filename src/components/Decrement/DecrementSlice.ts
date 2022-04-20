import { createSlice } from "@reduxjs/toolkit";

export const decrementSlice = createSlice({
  name: "decrement",
  initialState: {
    value: 0,
  },
  reducers: {
    setDecrementValue: (state, { payload }) => {
      console.log("setIncrementValue new state", payload);

      state.value = state.value - 10;
    },
  },
  extraReducers: {},
});

export const { setDecrementValue } = decrementSlice.actions;

export default decrementSlice.reducer;
