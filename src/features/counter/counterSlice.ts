import { createSlice } from "@reduxjs/toolkit";

export const configureToolsSlice = createSlice({
  name: "configureTools",
  initialState: {
    value: 0,
  },
  reducers: {
    setDecrementValue: (state) => {
      console.log("decrement");

      state.value = state.value - 10;
    },
  },
  extraReducers: {},
});

export const { setDecrementValue } = configureToolsSlice.actions;

export default configureToolsSlice.reducer;
